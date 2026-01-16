import type { PageCardData } from './pages'
import { getAllPageCards } from './pages'
import type { ArticleSummary } from './cityHomepage'
import type { Article } from '@/types/article'
import { getAllArticles } from '@/lib/queries/articles'
import {
  getAllCities,
  getCityCuriosities,
  getCityDarkHistory,
  getCityHiddenGems,
  getCityLostAndLoved,
} from '@/data/cities'

/**
 * Curated content sections for the landing page
 */
export interface CuratedLandingContent {
  heroSlides: PageCardData[]
  featuredArticles: ArticleSummary[]
  historyEssays: PageCardData[]
  darkStories: PageCardData[]
  curiosities: PageCardData[]
  discoveries: PageCardData[]
  lostLandmarks: PageCardData[]
  moreStories: PageCardData[]
}

/**
 * Diversify cards by city - ensures no single city dominates a section
 * Max 2 cards per city in any section
 * Generic version that works with any type that has a citySlug property
 */
function diversifyByCities<T extends { citySlug: string }>(
  cards: T[],
  maxCards: number
): T[] {
  const result: T[] = []
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

  while (result.length < sorted.length) {
    let added = false

    for (const type of typeKeys) {
      if (buckets[type].length > 0) {
        result.push(buckets[type].shift()!)
        added = true
      }
    }

    if (!added) break
  }

  return result
}

/**
 * Convert Article type to ArticleSummary type for horizontal scroll cards
 */
function articleToSummary(article: Article): ArticleSummary {
  return {
    slug: article.slug,
    citySlug: article.citySlug,
    title: article.title,
    teaser: article.subtitle || article.excerpt,
    thumbnail: article.featuredImage?.src,
    href: `/${article.citySlug}/articles/${article.slug}`,
    publishedAt: article.publishedAt,
    source: article.category as ArticleSummary['source'],
  }
}

/**
 * Curate featured articles for the landing page
 * Returns 8 diverse articles from across all cities
 */
async function curateFeaturedArticles(): Promise<ArticleSummary[]> {
  // Get recent articles with images
  const allArticles = await getAllArticles({
    limit: 20,
    sortBy: 'publishedAt',
    sortOrder: 'desc',
  })

  // Filter to only articles with featured images
  const articlesWithImages = allArticles.filter(
    (article) => article.featuredImage?.src
  )

  // Convert to ArticleSummary format
  const articleSummaries = articlesWithImages.map(articleToSummary)

  // Apply city diversity (max 2 per city)
  const diverseArticles = diversifyByCities(articleSummaries, 8)

  return diverseArticles
}

/**
 * Curate top curiosity entries from across all cities
 * Returns actual entry-level cards, not page links
 */
async function curateTopCuriosities(count: number = 3): Promise<PageCardData[]> {
  const cities = await getAllCities()
  const allEntries: PageCardData[] = []

  for (const city of cities) {
    const curiosities = await getCityCuriosities(city.slug)

    // Get entries with images, prioritize featured ones
    const validCuriosities = curiosities
      .filter((c: any) => c.image?.src || c.images?.[0]?.src)
      .sort((a: any, b: any) => {
        // Featured items first
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      })
      .slice(0, 2) // Max 2 per city

    for (const entry of validCuriosities) {
      const thumbnail = entry.images?.[0]?.src || entry.image?.src
      const teaser = entry.body.length > 120
        ? entry.body.slice(0, 120).trim() + '...'
        : entry.body

      allEntries.push({
        type: 'page',
        pageType: 'curiosities',
        citySlug: city.slug,
        cityName: city.name,
        title: entry.title,
        teaser,
        href: `/${city.slug}/curiosities`,
        thumbnail,
      })
    }
  }

  return diversifyByCities(allEntries, count)
}

/**
 * Curate top dark history entries from across all cities
 * Returns actual entry-level cards, not page links
 */
async function curateTopDarkHistory(count: number = 3): Promise<PageCardData[]> {
  const cities = await getAllCities()
  const allEntries: PageCardData[] = []

  for (const city of cities) {
    const darkHistory = await getCityDarkHistory(city.slug)

    // Get entries with images
    const validEntries = darkHistory
      .filter((d: any) => d.image?.src || d.images?.[0]?.src)
      .slice(0, 2) // Max 2 per city

    for (const entry of validEntries) {
      const thumbnail = entry.images?.[0]?.src || entry.image?.src
      const teaser = entry.body.length > 120
        ? entry.body.slice(0, 120).trim() + '...'
        : entry.body

      allEntries.push({
        type: 'page',
        pageType: 'dark-history',
        citySlug: city.slug,
        cityName: city.name,
        title: entry.title,
        teaser,
        href: `/${city.slug}/dark-history`,
        thumbnail,
      })
    }
  }

  return diversifyByCities(allEntries, count)
}

/**
 * Curate top hidden gem entries from across all cities
 * Returns actual entry-level cards, not page links
 */
async function curateTopHiddenGems(count: number = 3): Promise<PageCardData[]> {
  const cities = await getAllCities()
  const allEntries: PageCardData[] = []

  for (const city of cities) {
    const hiddenGems = await getCityHiddenGems(city.slug)

    // Get entries with images
    const validEntries = hiddenGems
      .filter((h: any) => h.image?.src || h.images?.[0]?.src)
      .slice(0, 2) // Max 2 per city

    for (const entry of validEntries) {
      const thumbnail = entry.images?.[0]?.src || entry.image?.src
      const teaser = entry.description?.length > 120
        ? entry.description.slice(0, 120).trim() + '...'
        : (entry.description || entry.body || '')

      allEntries.push({
        type: 'page',
        pageType: 'hidden-gems',
        citySlug: city.slug,
        cityName: city.name,
        title: entry.title || entry.name,
        teaser,
        href: `/${city.slug}/hidden-gems`,
        thumbnail,
      })
    }
  }

  return diversifyByCities(allEntries, count)
}

/**
 * Curate top lost & loved entries from across all cities
 * Returns actual entry-level cards, not page links
 */
async function curateTopLostAndLoved(count: number = 3): Promise<PageCardData[]> {
  const cities = await getAllCities()
  const allEntries: PageCardData[] = []

  for (const city of cities) {
    const lostLoved = await getCityLostAndLoved(city.slug)

    // Get entries with images
    const validEntries = lostLoved
      .filter((l: any) => l.image?.src || l.images?.[0]?.src)
      .slice(0, 2) // Max 2 per city

    for (const entry of validEntries) {
      const thumbnail = entry.images?.[0]?.src || entry.image?.src
      const body = entry.body || entry.description || ''
      const teaser = body.length > 120
        ? body.slice(0, 120).trim() + '...'
        : body

      allEntries.push({
        type: 'page',
        pageType: 'lost-loved',
        citySlug: city.slug,
        cityName: city.name,
        title: entry.title || entry.name,
        teaser,
        href: `/${city.slug}/lost-and-loved`,
        thumbnail,
      })
    }
  }

  return diversifyByCities(allEntries, count)
}

/**
 * Curate landing page content with smart filtering and diversity
 */
export async function curateLandingPageContent(): Promise<CuratedLandingContent> {
  const allCards = await getAllPageCards()

  // Prioritize cards with thumbnails for visual sections
  const cardsWithThumbnails = allCards.filter((card) => card.thumbnail)

  // Get featured articles
  const featuredArticles = await curateFeaturedArticles()

  // History Essays: 4 diverse history essays
  const historyEssays = diversifyByCities(
    cardsWithThumbnails
      .filter((c) => c.pageType === 'history')
      .slice(0, 16),
    4
  )

  // Hero Slides: Best essays + specific requested entries
  const premiumEssaySlugs = [
    '/tampa/articles/sunshine-and-hustle',
    '/phoenix/articles/the-air-conditioned-dream',
    '/raleigh/articles/invented-before-it-existed',
  ]

  const specificHeroSlugs = [
    '/chicago/dark-history',
    '/salt-lake-city/curiosities',
    '/seattle/curiosities',
  ]

  // Find the premium essays in order
  const premiumEssays = premiumEssaySlugs
    .map((slug) => allCards.find((c) => c.href === slug))
    .filter((c): c is PageCardData => c !== undefined)

  // Find specific requested slides
  const specificSlides = specificHeroSlugs
    .map((slug) => allCards.find((c) => c.href === slug))
    .filter((c): c is PageCardData => c !== undefined)

  // Combined hero slides
  const heroSlides = [...premiumEssays, ...specificSlides].slice(0, 6)

  // Dark Stories: Top 3 actual dark history entries from diverse cities
  const darkStories = await curateTopDarkHistory(3)

  // Curiosities: Top 3 actual curiosity entries from diverse cities
  const curiosities = await curateTopCuriosities(3)

  // Hidden Gems: Top 3 actual hidden gem entries from diverse cities
  const discoveries = await curateTopHiddenGems(3)

  // Lost Landmarks: Top 3 actual lost & loved entries from diverse cities
  const lostLandmarks = await curateTopLostAndLoved(3)

  // More Stories: Everything else, sorted by diversity and recency
  const featured = new Set([
    ...heroSlides.map((c) => c.href),
    ...historyEssays.map((c) => c.href),
    ...darkStories.map((c) => c.href),
    ...curiosities.map((c) => c.href),
    ...discoveries.map((c) => c.href),
    ...lostLandmarks.map((c) => c.href),
  ])

  const remaining = allCards.filter((c) => !featured.has(c.href))
  const moreStories = sortByDiversityAndRecency(remaining).slice(0, 6)

  return {
    heroSlides,
    featuredArticles,
    historyEssays,
    darkStories,
    curiosities,
    discoveries,
    lostLandmarks,
    moreStories,
  }
}
