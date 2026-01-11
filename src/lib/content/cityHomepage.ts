/**
 * City Homepage Query API
 *
 * Provides data for the new city homepage layout:
 * - Featured entries for hero carousel
 * - Listicle page summaries
 * - Establishment category summaries
 * - Article summaries
 */

import { getCity } from '@/data/cities'
import { getHistoryForCity } from '@/data/history'
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
  title: string
  teaser: string
  thumbnail?: string
  href: string
  publishedAt?: string
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
          thumbnail = `/sequences/${sequenceMatch[1]}/${sequenceMatch[2]}/frame_0001.jpg`
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
      href: `/${city.slug}/articles/${essay.slug}`,
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

  // Sort listicle entries by featuredOrder, then combine with articles first
  const sortedListicleEntries = listicleEntries.sort((a, b) => a.featuredOrder - b.featuredOrder)
  return [...articleEntries, ...sortedListicleEntries]
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
        `Unsolved mysteries and darker chapters of ${city.name}`,
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
        `Fascinating facts and surprising stories about ${city.name}`,
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
        `Secret spots and local treasures in ${city.name}`,
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
        `Beloved places we miss from ${city.name}`,
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
    cafes: { title: 'Best Cafes', route: 'cafes' },
    bakeries: { title: 'Best Bakeries', route: 'bakeries' },
    cocktails: { title: 'Best Cocktails', route: 'cocktails' },
    dives: { title: 'Best Dive Bars', route: 'dives' },
    'date-night': { title: 'Best Date Night', route: 'date-night' },
    brunch: { title: 'Best Brunch', route: 'brunch' },
    'late-night': { title: 'Best Late Night', route: 'late-night' },
    'local-favorites': { title: 'Local Favorites', route: 'local-favorites' },
  }

  for (const section of bestOfSections) {
    if (section.spots && section.spots.length > 0) {
      const info = categoryInfo[section.category] || {
        title: section.title || `Best ${section.category}`,
        route: section.category,
      }

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
          thumbnail = `/sequences/${sequenceMatch[1]}/${sequenceMatch[2]}/frame_0001.jpg`
        }
      }
    }
    if (!thumbnail && targetEssay.heroImage?.src) {
      thumbnail = targetEssay.heroImage.src
    }

    historyArticles.push({
      slug: essay.slug,
      citySlug: city.slug,
      title: targetEssay.title,
      teaser: targetEssay.subtitle || `A deep dive into ${city.name}'s fascinating past`,
      thumbnail,
      href: `/${city.slug}/articles/${essay.slug}`,
      publishedAt: targetEssay.publishedAt,
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
