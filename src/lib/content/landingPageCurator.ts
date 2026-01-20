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
 * Shuffle array using Fisher-Yates algorithm
 * Used to mix up cards from different cities for better variety
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Diversify cards by city - ensures no single city dominates a section
 * Max 2 cards per city in any section
 * Generic version that works with any type that has a citySlug property
 * Now shuffles input first to ensure mixed city order in results
 */
function diversifyByCities<T extends { citySlug: string }>(
  cards: T[],
  maxCards: number
): T[] {
  // Shuffle first to avoid city clustering
  const shuffled = shuffleArray(cards)
  const result: T[] = []
  const cityCounts: Record<string, number> = {}

  for (const card of shuffled) {
    if (result.length >= maxCards) break

    const cityCount = cityCounts[card.citySlug] || 0
    if (cityCount < 2) {
      result.push(card)
      cityCounts[card.citySlug] = cityCount + 1
    }
  }

  // If we don't have enough cards yet, add remaining without city limit
  if (result.length < maxCards) {
    const remaining = shuffled.filter((card) => !result.includes(card))
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
 * Note: cityName will be populated later from cities data
 */
function articleToSummary(article: Article, cityName?: string): ArticleSummary {
  return {
    slug: article.slug,
    citySlug: article.citySlug,
    cityName,
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
 * Excludes history essays (those appear in their own section)
 */
async function curateFeaturedArticles(): Promise<ArticleSummary[]> {
  // Get ALL articles first (no limit) - we need to filter before limiting
  // because history essays get auto-dated to "now" and would dominate the top 20
  const allArticles = await getAllArticles({
    sortBy: 'publishedAt',
    sortOrder: 'desc',
  })

  // Get all cities for name lookup
  const cities = await getAllCities()
  const cityNameMap = new Map(cities.map(c => [c.slug, c.name]))

  // Filter to only non-history articles with featured images FIRST
  const nonHistoryArticles = allArticles.filter(
    (article) => article.featuredImage?.src && article.category !== 'history'
  )

  // Take the most recent 20 non-history articles
  const recentNonHistory = nonHistoryArticles.slice(0, 20)

  // Convert to ArticleSummary format with city names
  const articleSummaries = recentNonHistory.map(article =>
    articleToSummary(article, cityNameMap.get(article.citySlug))
  )

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
        href: `/${city.slug}/curiosities#${entry.id}`,
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
        href: `/${city.slug}/dark-history#${entry.id}`,
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
        href: `/${city.slug}/hidden-gems#${entry.id}`,
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
        href: `/${city.slug}/lost-and-loved#${entry.id}`,
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

  // History Essays: All history essays for horizontal scrolling
  const historyEssays = diversifyByCities(
    cardsWithThumbnails
      .filter((c) => c.pageType === 'history'),
    16
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

  // Dark Stories: Top dark history entries from diverse cities (2-3 per city)
  const darkStories = await curateTopDarkHistory(18)

  // Curiosities: Top curiosity entries from diverse cities (2-3 per city)
  const curiosities = await curateTopCuriosities(18)

  // Hidden Gems: Top hidden gem entries from diverse cities (2-3 per city)
  const discoveries = await curateTopHiddenGems(18)

  // Lost Landmarks: Top lost & loved entries from diverse cities (2-3 per city)
  const lostLandmarks = await curateTopLostAndLoved(18)

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
