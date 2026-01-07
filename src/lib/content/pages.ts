import { getCity, getAllCities } from '@/data/cities'
import { getHistoryForCity } from '@/data/history'
import type { History } from '@/types/content'

/**
 * Extract the first video frame as thumbnail for video-sequence essays
 */
function extractFirstVideoFrame(blocks: History['blocks']): string | undefined {
  const firstVideoBlock = blocks.find(b => b.type === 'video-sequence')
  if (!firstVideoBlock || firstVideoBlock.type !== 'video-sequence') {
    return undefined
  }

  // Extract sequence name from video path
  const videoPath = firstVideoBlock.videoPath

  // Handle new sequences format: /sequences/phoenix/phoenix-1
  const sequenceMatch = videoPath.match(/\/sequences\/([^\/]+)\/([^\/]+)$/)
  if (sequenceMatch) {
    const city = sequenceMatch[1]
    const sequenceName = sequenceMatch[2]
    // Tampa, Raleigh, and Portland use underscore (frame_0001.jpg), others use dash
    const usesUnderscore = city === 'tampa' || city === 'raleigh' || city === 'portland'
    const frameName = usesUnderscore ? 'frame_0001.jpg' : 'frame-0001.jpg'
    return `/sequences/${city}/${sequenceName}/${frameName}`
  }

  // Handle Tampa old format: /Tampa/history-video/tampa-1.mp4
  const tampaMatch = videoPath.match(/\/Tampa\/history-video\/([a-z-]+)-(\d+)\.mp4$/)
  if (tampaMatch) {
    const prefix = tampaMatch[1]
    const num = tampaMatch[2]
    return `/sequences/tampa/${prefix}-${num}/frame_0001.jpg`
  }

  return undefined
}

export interface PageCardData {
  type: 'page'
  pageType: 'history' | 'dark-history' | 'curiosities' | 'hidden-gems' | 'lost-loved' | 'guide' | 'events'
  citySlug: string
  cityName: string
  title: string          // e.g., "Desert Darkness" or "Phoenix History"
  teaser: string         // The compelling hook
  href: string           // Link to the page
  thumbnail?: string     // Page thumbnail
  publishedAt?: string   // For sorting (history essays have dates)
}

/**
 * Extract a thumbnail from a section's items
 * Recursively searches through nested subsections
 */
function extractThumbnail(section: any): string | undefined {
  if (!section.items || !Array.isArray(section.items) || section.items.length === 0) {
    return undefined
  }

  for (const item of section.items) {
    // Check for single image in this item
    if ('image' in item && item.image?.src) {
      return item.image.src
    }

    // Check for images array in this item
    if ('images' in item && Array.isArray(item.images) && item.images.length > 0) {
      return item.images[0].src
    }

    // If this item is a subsection, recursively search it
    if (item.type === 'section' && item.items && Array.isArray(item.items)) {
      const thumbnail = extractThumbnail(item)
      if (thumbnail) return thumbnail
    }
  }

  return undefined
}

/**
 * Find a section by matching title or type
 */
function findSection(content: any[], matchFn: (item: any) => boolean): any | null {
  for (const item of content) {
    if (item.type === 'section' && matchFn(item)) {
      return item
    }
    // Recursively search nested items
    if (item.items && Array.isArray(item.items)) {
      const found = findSection(item.items, matchFn)
      if (found) return found
    }
  }
  return null
}

/**
 * Extract all page cards for a specific city
 */
export async function getCityPageCards(citySlug: string): Promise<PageCardData[]> {
  const city = await getCity(citySlug)
  if (!city) return []

  const pageCards: PageCardData[] = []

  // 1. History Essays - get the first/primary essay for this city
  const cityHistory = getHistoryForCity(citySlug)
  if (cityHistory.length > 0) {
    // Filter out "-premium" versions (those should be accessed via /articles route)
    // Prefer the premium video version if available, otherwise use the standard version
    const nonPremiumHistory = cityHistory.filter(h => !h.slug.endsWith('-premium'))

    // Sort by publishedAt to get the most recent or featured essay
    const sortedHistory = [...nonPremiumHistory].sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })

    if (sortedHistory.length > 0) {
      const primaryEssay = sortedHistory[0]

      // Check if there's a premium video version available
      const premiumSlug = `${primaryEssay.slug}-premium`
      const premiumVersion = cityHistory.find(h => h.slug === premiumSlug)

      // Use premium version for article link if it exists and has video sequences
      const hasVideoSequences = premiumVersion?.blocks.some(b => b.type === 'video-sequence')
      const targetEssay = (hasVideoSequences && premiumVersion) ? premiumVersion : primaryEssay

      // Remove "-premium" suffix from the slug for cleaner URLs
      // The article page will still access the premium content via the base slug
      const displaySlug = primaryEssay.slug

      // Get thumbnail - prefer first video frame for video essays, then heroImage
      const thumbnail = hasVideoSequences
        ? (extractFirstVideoFrame(targetEssay.blocks) || targetEssay.heroImage?.src)
        : targetEssay.heroImage?.src

      pageCards.push({
        type: 'page',
        pageType: 'history',
        citySlug: city.slug,
        cityName: city.name,
        title: targetEssay.title,
        teaser: targetEssay.subtitle || `A deep dive into ${city.name}'s fascinating past`,
        href: `/${city.slug}/articles/${displaySlug}`,
        thumbnail,
        publishedAt: targetEssay.publishedAt,
      })
    }
  }

  // 2. Dark History section
  const darkHistorySection = findSection(city.content, (item) =>
    item.title?.includes('Dark') || item.id?.includes('dark-history')
  )

  if (darkHistorySection && darkHistorySection.items?.length > 0) {
    pageCards.push({
      type: 'page',
      pageType: 'dark-history',
      citySlug: city.slug,
      cityName: city.name,
      title: darkHistorySection.title || 'Dark History',
      teaser: darkHistorySection.teaser || `Unsolved mysteries and darker chapters of ${city.name}`,
      href: `/${city.slug}/dark-history`,
      thumbnail: extractThumbnail(darkHistorySection),
    })
  }

  // 3. Curiosities section
  const curiositiesSection = findSection(city.content, (item) =>
    item.title?.includes('Curiosit')
  )

  if (curiositiesSection && curiositiesSection.items?.length > 0) {
    pageCards.push({
      type: 'page',
      pageType: 'curiosities',
      citySlug: city.slug,
      cityName: city.name,
      title: curiositiesSection.title || 'Curiosities',
      teaser: curiositiesSection.teaser || `Fascinating facts and surprising stories about ${city.name}`,
      href: `/${city.slug}/curiosities`,
      thumbnail: extractThumbnail(curiositiesSection),
    })
  }

  // 4. Hidden Gems section
  const hiddenGemsSection = findSection(city.content, (item) =>
    item.title?.includes('Hidden')
  )

  if (hiddenGemsSection && hiddenGemsSection.items?.length > 0) {
    pageCards.push({
      type: 'page',
      pageType: 'hidden-gems',
      citySlug: city.slug,
      cityName: city.name,
      title: hiddenGemsSection.title || 'Hidden Gems',
      teaser: hiddenGemsSection.teaser || `Off-the-beaten-path spots and local secrets in ${city.name}`,
      href: `/${city.slug}/hidden-gems`,
      thumbnail: extractThumbnail(hiddenGemsSection),
    })
  }

  // 5. Lost & Loved section
  const lostLovedSection = findSection(city.content, (item) =>
    item.title?.includes('Lost')
  )

  if (lostLovedSection && lostLovedSection.items?.length > 0) {
    pageCards.push({
      type: 'page',
      pageType: 'lost-loved',
      citySlug: city.slug,
      cityName: city.name,
      title: lostLovedSection.title || 'Lost & Loved',
      teaser: lostLovedSection.teaser || `Beloved places we miss from ${city.name}`,
      href: `/${city.slug}/lost-and-loved`,
      thumbnail: extractThumbnail(lostLovedSection),
    })
  }

  // 6. Individual Guide Category Pages (bars, restaurants, coffee shops, etc.)
  // Find all best-of sections in city content
  const findBestOfSections = (items: any[]): any[] => {
    const bestOfSections: any[] = []
    for (const item of items) {
      if (item.type === 'best-of' && item.category) {
        bestOfSections.push(item)
      }
      if (item.items && Array.isArray(item.items)) {
        bestOfSections.push(...findBestOfSections(item.items))
      }
    }
    return bestOfSections
  }

  const bestOfSections = findBestOfSections(city.content)

  // Map category to route and gradient
  const categoryMap: Record<string, { route: string; gradient: string; description: string }> = {
    'bars': {
      route: 'bars',
      gradient: 'from-amber-500 to-orange-600',
      description: 'Cocktail lounges, dive bars, and neighborhood favorites'
    },
    'restaurants': {
      route: 'restaurants',
      gradient: 'from-red-500 to-pink-600',
      description: "From fine dining to hidden gems, the city's culinary highlights"
    },
    'coffee-shops': {
      route: 'coffee-shops',
      gradient: 'from-yellow-600 to-amber-700',
      description: 'Local roasters, cozy cafes, and third wave coffee'
    },
    'local-favorites': {
      route: 'local-favorites',
      gradient: 'from-blue-500 to-indigo-600',
      description: 'Iconic establishments that define the city'
    },
  }

  for (const section of bestOfSections) {
    const categoryInfo = categoryMap[section.category]
    if (categoryInfo && section.spots?.length > 0) {
      // Extract first spot's first image as thumbnail
      const firstSpot = section.spots[0]
      const thumbnail = firstSpot?.images?.[0]?.src

      pageCards.push({
        type: 'page',
        pageType: 'guide',
        citySlug: city.slug,
        cityName: city.name,
        title: section.title || `Best ${section.category}`,
        teaser: section.intro || categoryInfo.description,
        href: `/${city.slug}/${categoryInfo.route}`,
        thumbnail,
      })
    }
  }

  // Note: Events and main Guide page are not included in feeds
  // Events are time-sensitive, Guide is just a landing page for the categories above

  return pageCards
}

/**
 * Extract all page cards across all cities
 */
export async function getAllPageCards(): Promise<PageCardData[]> {
  const cities = await getAllCities()
  const allPageCards: PageCardData[] = []

  for (const city of cities) {
    const cityPageCards = await getCityPageCards(city.slug)
    allPageCards.push(...cityPageCards)
  }

  return allPageCards
}

/**
 * Sort page cards by various criteria
 */
export function sortPageCards(
  cards: PageCardData[],
  sortBy: 'recent' | 'city' | 'type' = 'recent'
): PageCardData[] {
  const sorted = [...cards]

  switch (sortBy) {
    case 'recent':
      // History essays first (by publishedAt), then others by city
      return sorted.sort((a, b) => {
        // History essays with dates come first
        if (a.publishedAt && !b.publishedAt) return -1
        if (!a.publishedAt && b.publishedAt) return 1

        // Both have dates - sort by most recent
        if (a.publishedAt && b.publishedAt) {
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        }

        // Neither has dates - sort by city name
        return a.cityName.localeCompare(b.cityName)
      })

    case 'city':
      return sorted.sort((a, b) => a.cityName.localeCompare(b.cityName))

    case 'type':
      const typeOrder = ['history', 'dark-history', 'curiosities', 'hidden-gems', 'lost-loved', 'guide', 'events']
      return sorted.sort((a, b) => {
        const aIndex = typeOrder.indexOf(a.pageType)
        const bIndex = typeOrder.indexOf(b.pageType)
        return aIndex - bIndex
      })

    default:
      return sorted
  }
}
