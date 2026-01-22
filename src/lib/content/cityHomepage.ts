/**
 * City Homepage Query API
 *
 * Provides data for the new city homepage layout:
 * - Featured entries for hero carousel
 * - Listicle page summaries
 * - Establishment category summaries
 * - Article summaries
 */

import { getCity, getAllCities } from '@/data/cities'
import { getHistoryForCity } from '@/data/history'
import { VIATOR_DESTINATION_IDS, getCityTours } from '@/lib/viator'
import type {
  ContentItem,
  CuriosityContentItem,
  DarkHistoryContentItem,
  HiddenGemContentItem,
  LostAndLovedContentItem,
  BestOfContentItem,
} from '@/types/content'
import type { Article } from '@/types/article'

// ============================================
// Types
// ============================================

export type FeaturedEntryType = 'curiosity' | 'dark-history' | 'hidden-gem' | 'lost-and-loved' | 'article'

export interface FeaturedEntry {
  id: string
  type: FeaturedEntryType
  citySlug: string
  cityName: string
  title: string
  teaser: string
  image?: { src: string; alt: string }
  href: string
  featuredOrder: number
}

export interface ListiclePage {
  type: 'dark-history' | 'curiosities' | 'hidden-gems' | 'lost-loved'
  title: string
  teaser: string
  entryCount: number
  thumbnail?: string
  href: string
}

export interface EstablishmentCategory {
  category: string
  title: string
  spotCount: number
  thumbnail?: string
  href: string
}

export interface ArticleSummary {
  slug: string
  citySlug: string
  cityName?: string
  title: string
  teaser: string
  thumbnail?: string
  href: string
  publishedAt?: string
  /** Source type for color coding: 'history' for history essays, or article category */
  source?: 'history' | 'guide' | 'feature' | 'news' | 'list' | 'interview' | 'opinion' | 'event-coverage'
}

export interface ExploreLink {
  type: 'bars' | 'restaurants' | 'coffee-shops' | 'curiosities' | 'dark-history' | 'hidden-gems' | 'lost-loved'
  title: string
  teaser: string
  thumbnail?: string
  href: string
}

// ============================================
// Helper Functions
// ============================================

/**
 * Extract first image from content item
 */
function getFirstImage(item: ContentItem): { src: string; alt: string } | undefined {
  if ('image' in item && item.image?.src) {
    return { src: item.image.src, alt: item.image.alt }
  }
  if ('images' in item && Array.isArray(item.images) && item.images.length > 0) {
    return { src: item.images[0].src, alt: item.images[0].alt }
  }
  return undefined
}

/**
 * Truncate text to a teaser length
 */
function truncateTeaser(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

/**
 * Recursively find all items of a specific type in content
 */
function findItemsByType<T extends ContentItem>(
  content: ContentItem[],
  type: string
): T[] {
  const items: T[] = []

  for (const item of content) {
    if (item.type === type) {
      items.push(item as T)
    }
    if ('items' in item && Array.isArray(item.items)) {
      // Cast to ContentItem[] - we only care about ContentItems for this search
      const nestedItems = item.items as ContentItem[]
      items.push(...findItemsByType<T>(nestedItems, type))
    }
  }

  return items
}

/**
 * Find a section by matching condition
 */
function findSection(
  content: ContentItem[],
  matchFn: (item: ContentItem) => boolean
): ContentItem | null {
  for (const item of content) {
    if (item.type === 'section' && matchFn(item)) {
      return item
    }
    if ('items' in item && Array.isArray(item.items)) {
      // Cast to ContentItem[] - we only care about ContentItems for this search
      const nestedItems = item.items as ContentItem[]
      const found = findSection(nestedItems, matchFn)
      if (found) return found
    }
  }
  return null
}

// ============================================
// Query Functions
// ============================================

/**
 * Get featured entries for the hero carousel
 * Returns history essays first, then entries marked with featured: true, sorted by featuredOrder
 */
export async function getCityFeaturedEntries(citySlug: string): Promise<FeaturedEntry[]> {
  const city = await getCity(citySlug)
  if (!city) return []

  const articleEntries: FeaturedEntry[] = []
  const listicleEntries: FeaturedEntry[] = []

  // Get history essays first - they always appear at the start
  const historyEssays = getHistoryForCity(citySlug)
  const nonPremiumHistory = historyEssays.filter(h => !h.slug.endsWith('-premium'))

  for (const essay of nonPremiumHistory) {
    // Check for premium video version
    const premiumSlug = `${essay.slug}-premium`
    const premiumVersion = historyEssays.find(h => h.slug === premiumSlug)
    const hasVideoSequences = premiumVersion?.blocks.some(b => b.type === 'video-sequence')
    const targetEssay = (hasVideoSequences && premiumVersion) ? premiumVersion : essay

    // Get thumbnail
    let thumbnail: string | undefined
    if (hasVideoSequences && targetEssay.blocks) {
      const videoBlock = targetEssay.blocks.find(b => b.type === 'video-sequence')
      if (videoBlock && videoBlock.type === 'video-sequence') {
        const sequenceMatch = videoBlock.videoPath.match(/\/sequences\/([^\/]+)\/([^\/]+)$/)
        if (sequenceMatch) {
          // Try webp first (newer format), then jpg (legacy)
          thumbnail = `/sequences/${sequenceMatch[1]}/${sequenceMatch[2]}/frame_0001.webp`
        }
      }
    }
    if (!thumbnail && targetEssay.heroImage?.src) {
      thumbnail = targetEssay.heroImage.src
    }

    articleEntries.push({
      id: essay.slug,
      type: 'article',
      citySlug: city.slug,
      cityName: city.name,
      title: targetEssay.title,
      teaser: targetEssay.subtitle || `A deep dive into ${city.name}'s fascinating past`,
      image: thumbnail ? { src: thumbnail, alt: targetEssay.title } : undefined,
      href: `/${city.slug}/articles/${essay.slug}`, // Use base slug, not premium
      featuredOrder: 0, // Articles always first
    })
  }

  // Collect all listicle items with featured: true
  const curiosities = findItemsByType<CuriosityContentItem>(city.content, 'curiosity')
  const darkHistory = findItemsByType<DarkHistoryContentItem>(city.content, 'dark-history')
  const hiddenGems = findItemsByType<HiddenGemContentItem>(city.content, 'hidden-gem')
  const lostAndLoved = findItemsByType<LostAndLovedContentItem>(city.content, 'lost-and-loved')

  // Process curiosities
  for (const item of curiosities) {
    if (item.featured) {
      listicleEntries.push({
        id: item.id,
        type: 'curiosity',
        citySlug: city.slug,
        cityName: city.name,
        title: item.title,
        teaser: truncateTeaser(item.body),
        image: getFirstImage(item),
        href: `/${city.slug}/curiosities#${item.id}`,
        featuredOrder: item.featuredOrder ?? 999,
      })
    }
  }

  // Process dark history
  for (const item of darkHistory) {
    if (item.featured) {
      listicleEntries.push({
        id: item.id,
        type: 'dark-history',
        citySlug: city.slug,
        cityName: city.name,
        title: item.title,
        teaser: truncateTeaser(item.body),
        image: getFirstImage(item),
        href: `/${city.slug}/dark-history#${item.id}`,
        featuredOrder: item.featuredOrder ?? 999,
      })
    }
  }

  // Process hidden gems
  for (const item of hiddenGems) {
    if (item.featured) {
      listicleEntries.push({
        id: item.id,
        type: 'hidden-gem',
        citySlug: city.slug,
        cityName: city.name,
        title: item.name,
        teaser: truncateTeaser(item.description),
        image: getFirstImage(item),
        href: `/${city.slug}/hidden-gems#${item.id}`,
        featuredOrder: item.featuredOrder ?? 999,
      })
    }
  }

  // Process lost & loved
  for (const item of lostAndLoved) {
    if (item.featured) {
      listicleEntries.push({
        id: item.id,
        type: 'lost-and-loved',
        citySlug: city.slug,
        cityName: city.name,
        title: item.name,
        teaser: truncateTeaser(item.description),
        image: getFirstImage(item),
        href: `/${city.slug}/lost-and-loved#${item.id}`,
        featuredOrder: item.featuredOrder ?? 999,
      })
    }
  }

  // Sort listicle entries by featuredOrder
  const sortedListicleEntries = listicleEntries.sort((a, b) => a.featuredOrder - b.featuredOrder)

  // Curate a balanced mix of ~6 items total, prioritizing most engaging content:
  // - History essay (1, from articles) - most substantive content
  // - Top 2 dark history - most engaging stories (true crime, mysteries)
  // - Top 2 hidden gems - interesting discoveries
  // - Top 1 curiosity - quirky facts
  // - Lost & loved if space remains
  const TARGET_CAROUSEL_SIZE = 6

  // Start with first article (history essay)
  const curatedEntries: FeaturedEntry[] = articleEntries.slice(0, 1)

  // Get entries by type
  const curiosityEntries = sortedListicleEntries.filter(e => e.type === 'curiosity')
  const hiddenGemEntries = sortedListicleEntries.filter(e => e.type === 'hidden-gem')
  const darkHistoryEntries = sortedListicleEntries.filter(e => e.type === 'dark-history')
  const lostLovedEntries = sortedListicleEntries.filter(e => e.type === 'lost-and-loved')

  // Add top 2 dark history (most engaging - true crime, mysteries, dark stories)
  curatedEntries.push(...darkHistoryEntries.slice(0, 2))

  // Add top 2 hidden gems (interesting discoveries and spots)
  curatedEntries.push(...hiddenGemEntries.slice(0, 2))

  // Add top 1 curiosity (quirky/fun facts)
  curatedEntries.push(...curiosityEntries.slice(0, 1))

  // If still under target, add lost & loved or more from other categories
  if (curatedEntries.length < TARGET_CAROUSEL_SIZE && lostLovedEntries.length > 0) {
    curatedEntries.push(...lostLovedEntries.slice(0, TARGET_CAROUSEL_SIZE - curatedEntries.length))
  }

  // If still under target, add remaining curiosities
  if (curatedEntries.length < TARGET_CAROUSEL_SIZE && curiosityEntries.length > 2) {
    curatedEntries.push(...curiosityEntries.slice(2, 2 + (TARGET_CAROUSEL_SIZE - curatedEntries.length)))
  }

  return curatedEntries.slice(0, TARGET_CAROUSEL_SIZE)
}

/**
 * Get listicle page summaries for the evergreen section
 * Note: Uses findItemsByType to count ALL items of a type across entire city content,
 * since some cities have items in sibling subsections rather than nested.
 */
export async function getCityListiclePages(citySlug: string): Promise<ListiclePage[]> {
  const city = await getCity(citySlug)
  if (!city) return []

  const pages: ListiclePage[] = []

  // Collect all items by type across entire city content
  const allDarkHistory = findItemsByType<DarkHistoryContentItem>(city.content, 'dark-history')
  const allCuriosities = findItemsByType<CuriosityContentItem>(city.content, 'curiosity')
  const allHiddenGems = findItemsByType<HiddenGemContentItem>(city.content, 'hidden-gem')
  const allLostAndLoved = findItemsByType<LostAndLovedContentItem>(city.content, 'lost-and-loved')

  // Dark History
  if (allDarkHistory.length > 0) {
    const section = findSection(city.content, (item) =>
      ('title' in item && Boolean(item.title?.includes('Dark'))) ||
      ('id' in item && Boolean(item.id?.includes('dark-history')))
    )
    const firstWithImage = allDarkHistory.find(item => getFirstImage(item))
    pages.push({
      type: 'dark-history',
      title: (section && 'title' in section && section.title) || 'Dark History',
      teaser: (section && 'teaser' in section && section.teaser) ||
        `${city.name}'s unsolved mysteries and darker historical chapters`,
      entryCount: allDarkHistory.length,
      thumbnail: firstWithImage ? getFirstImage(firstWithImage)?.src : undefined,
      href: `/${city.slug}/dark-history`,
    })
  }

  // Curiosities
  if (allCuriosities.length > 0) {
    const section = findSection(city.content, (item) =>
      'title' in item && Boolean(item.title?.includes('Curiosit'))
    )
    const firstWithImage = allCuriosities.find(item => getFirstImage(item))
    pages.push({
      type: 'curiosities',
      title: (section && 'title' in section && section.title) || 'Curiosities',
      teaser: (section && 'teaser' in section && section.teaser) ||
        `${city.name}'s fascinating facts and surprising stories`,
      entryCount: allCuriosities.length,
      thumbnail: firstWithImage ? getFirstImage(firstWithImage)?.src : undefined,
      href: `/${city.slug}/curiosities`,
    })
  }

  // Hidden Gems
  if (allHiddenGems.length > 0) {
    const section = findSection(city.content, (item) =>
      'title' in item && Boolean(item.title?.includes('Hidden'))
    )
    const firstWithImage = allHiddenGems.find(item => getFirstImage(item))
    pages.push({
      type: 'hidden-gems',
      title: (section && 'title' in section && section.title) || 'Hidden Gems',
      teaser: (section && 'teaser' in section && section.teaser) ||
        `${city.name}'s secret spots and local treasures`,
      entryCount: allHiddenGems.length,
      thumbnail: firstWithImage ? getFirstImage(firstWithImage)?.src : undefined,
      href: `/${city.slug}/hidden-gems`,
    })
  }

  // Lost & Loved
  if (allLostAndLoved.length > 0) {
    const section = findSection(city.content, (item) =>
      'title' in item && Boolean(item.title?.includes('Lost'))
    )
    const firstWithImage = allLostAndLoved.find(item => getFirstImage(item))
    pages.push({
      type: 'lost-loved',
      title: (section && 'title' in section && section.title) || 'Lost & Loved',
      teaser: (section && 'teaser' in section && section.teaser) ||
        `${city.name}'s beloved places we miss`,
      entryCount: allLostAndLoved.length,
      thumbnail: firstWithImage ? getFirstImage(firstWithImage)?.src : undefined,
      href: `/${city.slug}/lost-and-loved`,
    })
  }

  return pages
}

/**
 * Get establishment category summaries for the guide section
 */
export async function getCityEstablishmentCategories(citySlug: string): Promise<EstablishmentCategory[]> {
  const city = await getCity(citySlug)
  if (!city) return []

  const categories: EstablishmentCategory[] = []

  // Find all best-of sections
  const bestOfSections = findItemsByType<BestOfContentItem>(city.content, 'best-of')

  // Category display info
  const categoryInfo: Record<string, { title: string; route: string }> = {
    bars: { title: 'Best Bars', route: 'bars' },
    restaurants: { title: 'Best Restaurants', route: 'restaurants' },
    'coffee-shops': { title: 'Best Coffee Shops', route: 'coffee-shops' },
    bakeries: { title: 'Best Bakeries', route: 'bakeries' },
    cocktails: { title: 'Best Cocktails', route: 'cocktails' },
    dives: { title: 'Best Dive Bars', route: 'dives' },
    'date-night': { title: 'Best Date Night', route: 'date-night' },
    brunch: { title: 'Best Brunch', route: 'brunch' },
    'late-night': { title: 'Best Late Night', route: 'late-night' },
    'local-favorites': { title: 'Local Favorites', route: 'local-favorites' },
  }

  for (const section of bestOfSections) {
    // Only include categories that have pages (defined in categoryInfo)
    const info = categoryInfo[section.category]
    if (!info || !section.spots || section.spots.length === 0) continue

    // Get first spot's image as thumbnail
    const firstSpot = section.spots[0]
    const thumbnail = firstSpot?.images?.[0]?.src || firstSpot?.image?.src

    categories.push({
      category: section.category,
      title: info.title,
      spotCount: section.spots.length,
      thumbnail,
      href: `/${city.slug}/${info.route}`,
    })
  }

  // Add "Things to Do" for cities with Viator configured
  if (VIATOR_DESTINATION_IDS[citySlug]) {
    try {
      const tours = await getCityTours(citySlug, { count: 5 })
      if (tours.length > 0) {
        // Get thumbnail from first tour with an image
        const firstTourWithImage = tours.find(t => t.image?.src)
        categories.push({
          category: 'things-to-do',
          title: 'Things to Do',
          spotCount: tours.length > 50 ? 50 : tours.length, // Show "50+" essentially
          thumbnail: firstTourWithImage?.image?.src,
          href: `/${citySlug}/tours`,
        })
      }
    } catch (error) {
      // Viator API might fail, don't break the page
      console.error('[cityHomepage] Error fetching tours for guide:', error)
    }
  }

  return categories
}

/**
 * Get article summaries for the articles section
 * History essays come first, then native articles, each sorted by date
 */
export async function getCityArticleSummaries(citySlug: string): Promise<ArticleSummary[]> {
  const city = await getCity(citySlug)
  if (!city) return []

  const historyArticles: ArticleSummary[] = []
  const nativeArticles: ArticleSummary[] = []

  // Get history essays
  const historyEssays = getHistoryForCity(citySlug)
  const nonPremiumHistory = historyEssays.filter(h => !h.slug.endsWith('-premium'))

  for (const essay of nonPremiumHistory) {
    // Check for premium video version
    const premiumSlug = `${essay.slug}-premium`
    const premiumVersion = historyEssays.find(h => h.slug === premiumSlug)
    const hasVideoSequences = premiumVersion?.blocks.some(b => b.type === 'video-sequence')
    const targetEssay = (hasVideoSequences && premiumVersion) ? premiumVersion : essay

    // Get thumbnail
    let thumbnail: string | undefined
    if (hasVideoSequences && targetEssay.blocks) {
      const videoBlock = targetEssay.blocks.find(b => b.type === 'video-sequence')
      if (videoBlock && videoBlock.type === 'video-sequence') {
        const sequenceMatch = videoBlock.videoPath.match(/\/sequences\/([^\/]+)\/([^\/]+)$/)
        if (sequenceMatch) {
          // Try webp first (newer format), then jpg (legacy)
          thumbnail = `/sequences/${sequenceMatch[1]}/${sequenceMatch[2]}/frame_0001.webp`
        }
      }
    }
    if (!thumbnail && targetEssay.heroImage?.src) {
      thumbnail = targetEssay.heroImage.src
    }

    historyArticles.push({
      slug: essay.slug, // Use base slug, not premium
      citySlug: city.slug,
      title: targetEssay.title,
      teaser: targetEssay.subtitle || `A deep dive into ${city.name}'s fascinating past`,
      thumbnail,
      href: `/${city.slug}/articles/${essay.slug}`, // Use base slug, not premium
      publishedAt: targetEssay.publishedAt,
      source: 'history',
    })
  }

  // Get native articles
  try {
    const articlesModule = await import(`@/data/cities/${citySlug}/articles`)
    const articles: Article[] = articlesModule.default || articlesModule.articles || []

    for (const article of articles) {
      nativeArticles.push({
        slug: article.slug,
        citySlug: city.slug,
        title: article.title,
        teaser: article.subtitle || article.excerpt || `Discover more about ${city.name}`,
        thumbnail: article.featuredImage?.src,
        href: `/${city.slug}/articles/${article.slug}`,
        publishedAt: article.publishedAt,
        source: (article.category as ArticleSummary['source']) || 'feature',
      })
    }
  } catch {
    // City might not have native articles yet
  }

  // Sort each group by date (most recent first)
  const sortByDate = (a: ArticleSummary, b: ArticleSummary) => {
    if (!a.publishedAt || !b.publishedAt) return 0
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  }

  // Return history essays first, then native articles
  return [
    ...historyArticles.sort(sortByDate),
    ...nativeArticles.sort(sortByDate),
  ]
}

// Teaser descriptions for different content types
const exploreTeasers: Record<string, string> = {
  bars: 'Dive bars, cocktail lounges, and neighborhood favorites',
  restaurants: 'From fine dining to hidden gems and local favorites',
  'coffee-shops': 'Local roasters, cozy cafes, and third wave spots',
  curiosities: 'Fascinating facts and surprising stories',
  'dark-history': 'Unsolved mysteries and darker chapters',
  'hidden-gems': 'Secret spots and local treasures',
  'lost-loved': 'Beloved places we miss',
}

/**
 * Get explore links for the bottom of establishment pages
 * Returns exactly 8 links mixing current city content with other cities
 */
export async function getExploreLinks(
  citySlug: string,
  cityName: string,
  excludeCategory?: string
): Promise<ExploreLink[]> {
  const TARGET_COUNT = 8
  const links: ExploreLink[] = []

  // Get current city's content first
  const establishments = await getCityEstablishmentCategories(citySlug)
  for (const est of establishments) {
    if (est.category === excludeCategory) continue

    const type = est.category as ExploreLink['type']
    if (['bars', 'restaurants', 'coffee-shops'].includes(type)) {
      links.push({
        type,
        title: `${cityName}'s ${est.title}`,
        teaser: exploreTeasers[type] || est.title,
        thumbnail: est.thumbnail,
        href: est.href,
      })
    }
  }

  // Get listicle pages from current city
  const listicles = await getCityListiclePages(citySlug)
  for (const page of listicles) {
    const typeMap: Record<string, ExploreLink['type']> = {
      'dark-history': 'dark-history',
      curiosities: 'curiosities',
      'hidden-gems': 'hidden-gems',
      'lost-loved': 'lost-loved',
    }
    const type = typeMap[page.type]
    if (!type || page.type === excludeCategory) continue

    // Use clean title and prepend city name
    const cleanTitle = page.title.replace(new RegExp(`^${cityName}'s\\s*`, 'i'), '')
    links.push({
      type,
      title: `${cityName}'s ${cleanTitle}`,
      teaser: exploreTeasers[type] || page.teaser,
      thumbnail: page.thumbnail,
      href: page.href,
    })
  }

  // If we have enough links from current city, return first 8
  if (links.length >= TARGET_COUNT) {
    return links.slice(0, TARGET_COUNT)
  }

  // Supplement with content from other cities
  const allCities = await getAllCities()
  const otherCities = allCities.filter(c => c.slug !== citySlug)

  // Shuffle other cities for variety
  const shuffledCities = otherCities.sort(() => Math.random() - 0.5)

  for (const otherCity of shuffledCities) {
    if (links.length >= TARGET_COUNT) break

    // Get establishments from other city
    const otherEstablishments = await getCityEstablishmentCategories(otherCity.slug)
    for (const est of otherEstablishments) {
      if (links.length >= TARGET_COUNT) break

      const type = est.category as ExploreLink['type']
      if (!['bars', 'restaurants', 'coffee-shops'].includes(type)) continue

      // Skip if we already have this type from another city (avoid duplicates)
      const existingHref = links.find(l => l.href === est.href)
      if (existingHref) continue

      links.push({
        type,
        title: `${otherCity.name} ${est.title}`,
        teaser: exploreTeasers[type] || est.title,
        thumbnail: est.thumbnail,
        href: est.href,
      })
    }

    // Get listicles from other city
    const otherListicles = await getCityListiclePages(otherCity.slug)
    for (const page of otherListicles) {
      if (links.length >= TARGET_COUNT) break

      const typeMap: Record<string, ExploreLink['type']> = {
        'dark-history': 'dark-history',
        curiosities: 'curiosities',
        'hidden-gems': 'hidden-gems',
        'lost-loved': 'lost-loved',
      }
      const type = typeMap[page.type]
      if (!type) continue

      // Skip if we already have this exact link
      const existingHref = links.find(l => l.href === page.href)
      if (existingHref) continue

      const cleanTitle = page.title.replace(new RegExp(`^${otherCity.name}'s\\s*`, 'i'), '')
      links.push({
        type,
        title: `${otherCity.name} ${cleanTitle}`,
        teaser: exploreTeasers[type] || page.teaser,
        thumbnail: page.thumbnail,
        href: page.href,
      })
    }
  }

  return links.slice(0, TARGET_COUNT)
}
