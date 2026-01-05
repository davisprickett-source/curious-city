import type { PageCardData } from './pages'
import { getAllPageCards } from './pages'

/**
 * Curated content sections for the landing page
 */
export interface CuratedLandingContent {
  heroSlides: PageCardData[]
  darkStories: PageCardData[]
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
 * Interleave two arrays for variety (A, B, A, B pattern)
 */
function interleave<T>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = []
  const maxLen = Math.max(arr1.length, arr2.length)

  for (let i = 0; i < maxLen; i++) {
    if (arr1[i]) result.push(arr1[i])
    if (arr2[i]) result.push(arr2[i])
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
  const cardsWithoutThumbnails = allCards.filter((card) => !card.thumbnail)

  // Hero Slides: Top 5 pieces across categories
  // - 2 history essays (most recent with video if available)
  // - 1 dark-history
  // - 1 curiosity
  // - 1 lost-loved
  const historyCards = cardsWithThumbnails
    .filter((c) => c.pageType === 'history' && c.publishedAt)
    .sort((a, b) => {
      if (a.publishedAt && b.publishedAt) {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
      return 0
    })
    .slice(0, 2)

  const darkHistoryCards = cardsWithThumbnails
    .filter((c) => c.pageType === 'dark-history')
    .slice(0, 1)

  const curiosityCards = cardsWithThumbnails
    .filter((c) => c.pageType === 'curiosities')
    .slice(0, 1)

  const lostLovedCards = cardsWithThumbnails
    .filter((c) => c.pageType === 'lost-loved')
    .slice(0, 1)

  const heroSlides = [
    ...historyCards,
    ...darkHistoryCards,
    ...curiosityCards,
    ...lostLovedCards,
  ].slice(0, 5)

  // Dark Stories: 4 dark-history items from diverse cities
  const darkStories = diversifyByCities(
    cardsWithThumbnails
      .filter((c) => c.pageType === 'dark-history' && !heroSlides.includes(c))
      .slice(0, 8), // Get more than needed for diversity algorithm
    4
  )

  // Discoveries: Mix of 2 curiosities + 2 hidden-gems (interleaved)
  const curiosities = cardsWithThumbnails
    .filter((c) => c.pageType === 'curiosities' && !heroSlides.includes(c))
    .slice(0, 2)

  const hiddenGems = cardsWithThumbnails
    .filter((c) => c.pageType === 'hidden-gems' && !heroSlides.includes(c))
    .slice(0, 2)

  const discoveries = interleave(curiosities, hiddenGems).slice(0, 4)

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
    ...discoveries.map((c) => c.href),
    ...lostLandmarks.map((c) => c.href),
  ])

  const remaining = allCards.filter((c) => !featured.has(c.href))
  const moreStories = sortByDiversityAndRecency(remaining).slice(0, 6)

  return {
    heroSlides,
    darkStories,
    discoveries,
    lostLandmarks,
    moreStories,
  }
}
