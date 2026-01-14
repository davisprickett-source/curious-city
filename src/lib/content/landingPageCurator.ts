import type { PageCardData } from './pages'
import { getAllPageCards } from './pages'
import type { ArticleSummary } from './cityHomepage'
import type { Article } from '@/types/article'
import { getAllArticles } from '@/lib/queries/articles'

/**
 * Curated content sections for the landing page
 */
export interface CuratedLandingContent {
  heroSlides: PageCardData[]
  featuredArticles: ArticleSummary[]
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
 * Curate landing page content with smart filtering and diversity
 */
export async function curateLandingPageContent(): Promise<CuratedLandingContent> {
  const allCards = await getAllPageCards()

  // Prioritize cards with thumbnails for visual sections
  const cardsWithThumbnails = allCards.filter((card) => card.thumbnail)

  // Get featured articles
  const featuredArticles = await curateFeaturedArticles()

  // Hero Slides: Best essays + most intriguing entries
  // The 3 best history essays, plus 2-3 super compelling curiosities/dark history
  const premiumEssaySlugs = [
    '/tampa/articles/sunshine-and-hustle',
    '/phoenix/articles/the-air-conditioned-dream',
    '/raleigh/articles/invented-before-it-existed',
  ]

  // Find the premium essays in order
  const premiumEssays = premiumEssaySlugs
    .map((slug) => allCards.find((c) => c.href === slug))
    .filter((c): c is PageCardData => c !== undefined)

  // Add 2-3 most intriguing dark-history or curiosity entries with good thumbnails
  // Prioritize really compelling stories (Phoenix Lights, Tesla, Lost Dutchman, etc.)
  const compellingEntries = cardsWithThumbnails
    .filter(
      (c) =>
        (c.pageType === 'dark-history' || c.pageType === 'curiosities') &&
        !premiumEssaySlugs.includes(c.href) &&
        c.thumbnail
    )
    .slice(0, 3)

  const heroSlides = [...premiumEssays, ...compellingEntries].slice(0, 5)

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
    featuredArticles,
    darkStories,
    curiosities,
    discoveries,
    lostLandmarks,
    moreStories,
  }
}
