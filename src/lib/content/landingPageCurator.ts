import type { PageCardData } from './pages'
import { getAllPageCards } from './pages'

/**
 * Curated content sections for the landing page
 */
export interface CuratedLandingContent {
  heroSlides: PageCardData[]
  darkStories: PageCardData[]
  curiosities: PageCardData[]
  discoveries: PageCardData[]
  lostLandmarks: PageCardData[]
  moreStories: PageCardData[]
}

/**
 * Diversify cards by city - ensures no single city dominates a section
 * Max 2 cards per city in any section
 */
function diversifyByCities(
  cards: PageCardData[],
  maxCards: number
): PageCardData[] {
  const result: PageCardData[] = []
  const cityCounts: Record<string, number> = {}

  for (const card of cards) {
    if (result.length >= maxCards) break

    const cityCount = cityCounts[card.citySlug] || 0
    if (cityCount < 2) {
      result.push(card)
      cityCounts[card.citySlug] = cityCount + 1
    }
  }

  // If we don't have enough cards yet, add remaining without city limit
  if (result.length < maxCards) {
    const remaining = cards.filter((card) => !result.includes(card))
    result.push(...remaining.slice(0, maxCards - result.length))
  }

  return result
}

/**
 * Sort by diversity: different page types and cities
 */
function sortByDiversityAndRecency(cards: PageCardData[]): PageCardData[] {
  const sorted = [...cards]

  // Create buckets by page type
  const buckets: Record<string, PageCardData[]> = {}
  for (const card of sorted) {
    if (!buckets[card.pageType]) {
      buckets[card.pageType] = []
    }
    buckets[card.pageType].push(card)
  }

  // Sort each bucket by recency (publishedAt if available)
  for (const type in buckets) {
    buckets[type].sort((a, b) => {
      if (a.publishedAt && b.publishedAt) {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
      if (a.publishedAt) return -1
      if (b.publishedAt) return 1
      return 0
    })
  }

  // Interleave from all buckets for maximum diversity
  const result: PageCardData[] = []
  const typeKeys = Object.keys(buckets)
  let index = 0

  while (result.length < sorted.length) {
    let added = false

    for (const type of typeKeys) {
      if (buckets[type].length > 0) {
        result.push(buckets[type].shift()!)
        added = true
      }
    }

    if (!added) break
    index++
  }

  return result
}

/**
 * Curate landing page content with smart filtering and diversity
 */
export async function curateLandingPageContent(): Promise<CuratedLandingContent> {
  const allCards = await getAllPageCards()

  // Prioritize cards with thumbnails for visual sections
  const cardsWithThumbnails = allCards.filter((card) => card.thumbnail)

  // Hero Slides: Premium essays + one featured article
  // Priority order: Tampa, Phoenix, Raleigh, Minneapolis essays, then one other
  const premiumEssaySlugs = [
    '/tampa/articles/sunshine-and-hustle',
    '/phoenix/articles/the-air-conditioned-dream',
    '/raleigh/articles/invented-before-it-existed',
    '/minneapolis/articles/nice-with-an-edge',
  ]

  // Find the premium essays in order
  const premiumEssays = premiumEssaySlugs
    .map((slug) => allCards.find((c) => c.href === slug))
    .filter((c): c is PageCardData => c !== undefined)

  // Add one more featured article (dark-history or curiosity with good thumbnail)
  const otherFeatured = cardsWithThumbnails
    .filter(
      (c) =>
        (c.pageType === 'dark-history' || c.pageType === 'curiosities') &&
        !premiumEssaySlugs.includes(c.href)
    )
    .slice(0, 1)

  const heroSlides = [...premiumEssays, ...otherFeatured].slice(0, 5)

  // Dark Stories: 4 dark-history items from diverse cities
  const darkStories = diversifyByCities(
    cardsWithThumbnails
      .filter((c) => c.pageType === 'dark-history' && !heroSlides.includes(c))
      .slice(0, 8), // Get more than needed for diversity algorithm
    4
  )

  // Curiosities: 4 curiosity items from diverse cities
  const curiosities = diversifyByCities(
    cardsWithThumbnails
      .filter((c) => c.pageType === 'curiosities' && !heroSlides.includes(c))
      .slice(0, 8),
    4
  )

  // Discoveries: Mix of hidden-gems (since curiosities now has own section)
  const hiddenGems = cardsWithThumbnails
    .filter((c) => c.pageType === 'hidden-gems' && !heroSlides.includes(c))
    .slice(0, 4)

  const discoveries = hiddenGems

  // Lost Landmarks: 4 lost-loved items from diverse cities
  const lostLandmarks = diversifyByCities(
    cardsWithThumbnails
      .filter((c) => c.pageType === 'lost-loved' && !heroSlides.includes(c))
      .slice(0, 8),
    4
  )

  // More Stories: Everything else, sorted by diversity and recency
  const featured = new Set([
    ...heroSlides.map((c) => c.href),
    ...darkStories.map((c) => c.href),
    ...curiosities.map((c) => c.href),
    ...discoveries.map((c) => c.href),
    ...lostLandmarks.map((c) => c.href),
  ])

  const remaining = allCards.filter((c) => !featured.has(c.href))
  const moreStories = sortByDiversityAndRecency(remaining).slice(0, 6)

  return {
    heroSlides,
    darkStories,
    curiosities,
    discoveries,
    lostLandmarks,
    moreStories,
  }
}
