/**
 * Content Aggregation System
 *
 * Aggregates content from all cities and types into a unified feed
 * for display on the homepage and city pages.
 */

import type { UnifiedCardData } from '@/components/cards/ContentCard'
import type { CityData, ContentItem } from '@/types/content'
import { getAllHistory } from '@/data/history'
import { getCity } from '@/data/cities'
import { CITY_METADATA } from '@/data/cities'
import {
  extractCuriosityCardData,
  extractHiddenGemCardData,
  extractDarkHistoryCardData,
  extractLostAndLovedCardData,
  extractBestOfCardData,
  extractArticleCardData,
} from './extractCardData'

export interface FeedOptions {
  cities?: string[] // Filter by city slugs
  types?: Array<'article' | 'curiosity' | 'hidden-gem' | 'dark-history' | 'lost-loved' | 'best-of'>
  limit?: number
  offset?: number
  sortBy?: 'recent' | 'random' | 'popular'
}

export interface FeedResult {
  items: UnifiedCardData[]
  total: number
  hasMore: boolean
}

/**
 * Aggregate content from all cities into a unified feed
 */
export async function aggregateGlobalFeed(options: FeedOptions = {}): Promise<FeedResult> {
  const {
    cities = CITY_METADATA.map((c) => c.slug),
    types = ['article', 'curiosity', 'hidden-gem', 'dark-history', 'lost-loved', 'best-of'],
    limit = 20,
    offset = 0,
    sortBy = 'recent',
  } = options

  const allItems: UnifiedCardData[] = []

  // Aggregate articles from history
  if (types.includes('article')) {
    const allHistory = getAllHistory()
    const filteredHistory = cities.length
      ? allHistory.filter((h) => cities.includes(h.citySlug))
      : allHistory

    filteredHistory.forEach((article) => {
      allItems.push(extractArticleCardData(article))
    })
  }

  // Aggregate content from each city
  for (const citySlug of cities) {
    try {
      const cityData = await getCity(citySlug)

      // Extract content from city content
      if (cityData && cityData.content) {
        extractCityContent(citySlug, cityData, types, allItems)
      }
    } catch (error) {
      console.warn(`Failed to load data for city: ${citySlug}`, error)
    }
  }

  // Sort items
  const sortedItems = sortItems(allItems, sortBy)

  // Paginate
  const paginatedItems = sortedItems.slice(offset, offset + limit)
  const hasMore = offset + limit < sortedItems.length

  return {
    items: paginatedItems,
    total: sortedItems.length,
    hasMore,
  }
}

/**
 * Aggregate content for a specific city
 */
export async function aggregateCityFeed(
  citySlug: string,
  options: Omit<FeedOptions, 'cities'> = {}
): Promise<FeedResult> {
  return aggregateGlobalFeed({
    ...options,
    cities: [citySlug],
  })
}

/**
 * Extract content from city content items
 */
function extractCityContent(
  citySlug: string,
  cityData: CityData,
  types: string[],
  items: UnifiedCardData[]
): void {
  // Process each content item directly
  cityData.content.forEach((contentItem) => {
    const extracted = extractContentItem(citySlug, '', contentItem, types)
    if (extracted) {
      if (Array.isArray(extracted)) {
        items.push(...extracted)
      } else {
        items.push(extracted)
      }
    }
  })
}

/**
 * Extract card data from a content item
 */
function extractContentItem(
  citySlug: string,
  sectionKey: string,
  item: ContentItem,
  types: string[]
): UnifiedCardData | UnifiedCardData[] | null {
  switch (item.type) {
    case 'curiosity':
      if (types.includes('curiosity')) {
        return extractCuriosityCardData(item, citySlug)
      }
      break

    case 'hidden-gem':
      if (types.includes('hidden-gem')) {
        return extractHiddenGemCardData(item, citySlug)
      }
      break

    case 'dark-history':
      if (types.includes('dark-history')) {
        return extractDarkHistoryCardData(item, citySlug)
      }
      break

    case 'lost-and-loved':
      if (types.includes('lost-loved')) {
        return extractLostAndLovedCardData(item, citySlug)
      }
      break

    case 'best-of':
      if (types.includes('best-of')) {
        // Extract all spots from best-of section
        return item.spots.map((spot, index) =>
          extractBestOfCardData(spot, sectionKey, citySlug, index)
        )
      }
      break

    case 'section':
      // Recursively process section items
      const sectionItems: UnifiedCardData[] = []
      item.items.forEach((subItem) => {
        const extracted = extractContentItem(citySlug, sectionKey, subItem, types)
        if (extracted) {
          if (Array.isArray(extracted)) {
            sectionItems.push(...extracted)
          } else {
            sectionItems.push(extracted)
          }
        }
      })
      return sectionItems.length > 0 ? sectionItems : null

    default:
      return null
  }

  return null
}

/**
 * Sort items by specified strategy
 */
function sortItems(items: UnifiedCardData[], sortBy: 'recent' | 'random' | 'popular'): UnifiedCardData[] {
  const sorted = [...items]

  switch (sortBy) {
    case 'recent':
      // Sort by date if available, otherwise maintain order
      return sorted.sort((a, b) => {
        const dateA = a.meta?.date ? new Date(a.meta.date).getTime() : 0
        const dateB = b.meta?.date ? new Date(b.meta.date).getTime() : 0
        return dateB - dateA
      })

    case 'random':
      // Fisher-Yates shuffle
      for (let i = sorted.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[sorted[i], sorted[j]] = [sorted[j], sorted[i]]
      }
      return sorted

    case 'popular':
      // For now, same as recent - can be extended with analytics data
      return sorted.sort((a, b) => {
        const dateA = a.meta?.date ? new Date(a.meta.date).getTime() : 0
        const dateB = b.meta?.date ? new Date(b.meta.date).getTime() : 0
        return dateB - dateA
      })

    default:
      return sorted
  }
}

/**
 * Get featured content for homepage hero
 */
export async function getFeaturedContent(limit = 3): Promise<UnifiedCardData[]> {
  const allHistory = getAllHistory()

  // Get most recent articles
  const recentArticles = allHistory
    .filter((h) => h.publishedAt) // Only include articles with publish dates
    .sort((a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime())
    .slice(0, limit)

  return recentArticles.map((article) => extractArticleCardData(article))
}
