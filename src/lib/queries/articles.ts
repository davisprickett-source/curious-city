/**
 * Article Query API
 *
 * Provides functions to query and filter articles.
 * Supports both TypeScript-native articles and future CMS integration.
 * Includes history essays converted to article format.
 */

import type { Article, ArticleMetadata, ArticleQueryOptions } from '@/types/article'
import { getAllCities } from '@/data/cities'
import { getHistoryArticlesForCity } from '@/lib/content/historyToArticles'

/**
 * Get all articles for a specific city
 * Includes both native articles and converted history essays
 */
export async function getArticlesForCity(
  citySlug: string,
  options?: ArticleQueryOptions
): Promise<Article[]> {
  let articles: Article[] = []

  // Get history essays converted to articles
  const historyArticles = await getHistoryArticlesForCity(citySlug)
  articles.push(...historyArticles)

  // Try loading native articles from city's articles directory
  try {
    const articlesModule = await import(`@/data/cities/${citySlug}/articles`)
    const nativeArticles: Article[] = articlesModule.default || articlesModule.articles || []
    articles.push(...nativeArticles)
  } catch (err) {
    // City might not have native articles yet, that's okay
  }

  // Apply filters
  articles = applyFilters(articles, options)

  // Apply sorting
  articles = applySorting(articles, options)

  // Apply pagination
  const start = options?.offset || 0
  const end = options?.limit ? start + options.limit : undefined

  return articles.slice(start, end)
}

/**
 * Get a single article by city and slug
 */
export async function getArticle(
  citySlug: string,
  articleSlug: string
): Promise<Article | null> {
  try {
    const articles = await getArticlesForCity(citySlug)
    return articles.find((article) => article.slug === articleSlug) || null
  } catch (err) {
    console.error(`Failed to load article ${citySlug}/${articleSlug}:`, err)
    return null
  }
}

/**
 * Get all articles across all cities
 */
export async function getAllArticles(
  options?: ArticleQueryOptions
): Promise<Article[]> {
  const cities = options?.citySlug
    ? [options.citySlug]
    : (await getAllCities()).map((city) => city.slug)

  const allArticles: Article[] = []

  for (const citySlug of cities) {
    try {
      const cityArticles = await getArticlesForCity(citySlug, {
        category: options?.category,
        tags: options?.tags,
      })
      allArticles.push(...cityArticles)
    } catch (err) {
      // City might not have articles yet
      continue
    }
  }

  // Apply sorting
  const sorted = applySorting(allArticles, options)

  // Apply pagination
  const start = options?.offset || 0
  const end = options?.limit ? start + options.limit : undefined

  return sorted.slice(start, end)
}

/**
 * Get article metadata for feeds (lighter than full articles)
 */
export async function getArticleMetadata(
  options?: ArticleQueryOptions
): Promise<ArticleMetadata[]> {
  const articles = await getAllArticles(options)

  return articles.map((article) => ({
    slug: article.slug,
    citySlug: article.citySlug,
    title: article.title,
    subtitle: article.subtitle,
    excerpt: article.excerpt,
    category: article.category,
    tags: article.tags,
    publishedAt: article.publishedAt,
    featuredImage: article.featuredImage,
    author: {
      name: article.author.name,
    },
    hasScrollytelling: article.formats.scrollytelling?.enabled || false,
    hasLongform: article.formats.longform.enabled,
    defaultFormat: article.defaultFormat,
    premium: article.premium,
    readTime: calculateReadTime(article),
  }))
}

/**
 * Calculate estimated read time for an article
 */
function calculateReadTime(article: Article): string {
  const wordsPerMinute = 200
  const blocks = article.formats.longform.blocks

  // Count words in all text blocks
  let wordCount = 0
  blocks.forEach(block => {
    if (block.type === 'paragraph' || block.type === 'heading' || block.type === 'quote') {
      wordCount += block.content.split(/\s+/).length
    }
    if (block.type === 'callout') {
      wordCount += block.content.split(/\s+/).length
    }
  })

  const minutes = Math.max(1, Math.round(wordCount / wordsPerMinute))
  return `${minutes} min read`
}

/**
 * Get related articles based on tags and category
 */
export async function getRelatedArticles(
  article: Article,
  limit: number = 3
): Promise<Article[]> {
  // Get articles from same city first, then other cities
  const sameCityArticles = await getArticlesForCity(article.citySlug)
  const otherArticles = await getAllArticles({ limit: 20 })

  const allArticles = [...sameCityArticles, ...otherArticles]
    .filter((a) => a.slug !== article.slug) // Exclude current article

  // Score articles by relevance
  const scored = allArticles.map((a) => ({
    article: a,
    score: calculateRelevanceScore(article, a),
  }))

  // Sort by score and return top N
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.article)
}

/**
 * Get articles by tag
 */
export async function getArticlesByTag(
  tag: string,
  options?: Omit<ArticleQueryOptions, 'tags'>
): Promise<Article[]> {
  return getAllArticles({
    ...options,
    tags: [tag],
  })
}

/**
 * Get articles by category
 */
export async function getArticlesByCategory(
  category: Article['category'],
  options?: Omit<ArticleQueryOptions, 'category'>
): Promise<Article[]> {
  return getAllArticles({
    ...options,
    category,
  })
}

/**
 * Get all unique tags across all articles
 */
export async function getAllTags(): Promise<string[]> {
  const articles = await getAllArticles()
  const tags = new Set<string>()

  articles.forEach((article) => {
    article.tags.forEach((tag) => tags.add(tag))
  })

  return Array.from(tags).sort()
}

/**
 * Helper: Apply filters to articles array
 */
function applyFilters(
  articles: Article[],
  options?: ArticleQueryOptions
): Article[] {
  let filtered = articles

  // Filter by category
  if (options?.category) {
    filtered = filtered.filter((a) => a.category === options.category)
  }

  // Filter by tags (article must have at least one of the specified tags)
  if (options?.tags && options.tags.length > 0) {
    filtered = filtered.filter((a) =>
      options.tags!.some((tag) => a.tags.includes(tag))
    )
  }

  return filtered
}

/**
 * Helper: Apply sorting to articles array
 */
function applySorting(
  articles: Article[],
  options?: ArticleQueryOptions
): Article[] {
  const sortBy = options?.sortBy || 'publishedAt'
  const sortOrder = options?.sortOrder || 'desc'

  return [...articles].sort((a, b) => {
    let aValue: string | Date
    let bValue: string | Date

    switch (sortBy) {
      case 'publishedAt':
        aValue = new Date(a.publishedAt)
        bValue = new Date(b.publishedAt)
        break
      case 'updatedAt':
        aValue = new Date(a.updatedAt || a.publishedAt)
        bValue = new Date(b.updatedAt || b.publishedAt)
        break
      case 'title':
        aValue = a.title
        bValue = b.title
        break
      default:
        return 0
    }

    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
    return 0
  })
}

/**
 * Helper: Calculate relevance score between two articles
 */
function calculateRelevanceScore(base: Article, candidate: Article): number {
  let score = 0

  // Same city gets bonus
  if (base.citySlug === candidate.citySlug) {
    score += 3
  }

  // Same category gets bonus
  if (base.category === candidate.category) {
    score += 2
  }

  // Shared tags
  const sharedTags = base.tags.filter((tag) => candidate.tags.includes(tag))
  score += sharedTags.length

  return score
}
