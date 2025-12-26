/**
 * Event aggregator - merges and deduplicates events from multiple sources
 */

import type { NormalizedEvent } from './api-types'
import type { EventItem } from '@/types/content'

/**
 * Calculate similarity between two strings (0-1)
 */
function stringSimilarity(a: string, b: string): number {
  const aLower = a.toLowerCase().trim()
  const bLower = b.toLowerCase().trim()

  // Exact match
  if (aLower === bLower) return 1.0

  // Check if one contains the other
  if (aLower.includes(bLower) || bLower.includes(aLower)) {
    return 0.8
  }

  // Simple word overlap
  const aWords = new Set(aLower.split(/\s+/))
  const bWords = new Set(bLower.split(/\s+/))
  const intersection = new Set(Array.from(aWords).filter((x) => bWords.has(x)))

  const similarity = (2 * intersection.size) / (aWords.size + bWords.size)
  return similarity
}

/**
 * Check if two events are duplicates
 */
export function isDuplicate(event1: NormalizedEvent, event2: NormalizedEvent): boolean {
  // Same source and ID = exact duplicate
  if (event1.source === event2.source && event1.sourceId === event2.sourceId) {
    return true
  }

  // Check title similarity
  const titleSimilarity = stringSimilarity(event1.title, event2.title)

  // Check date similarity (same day)
  const date1 = new Date(event1.startDate).toDateString()
  const date2 = new Date(event2.startDate).toDateString()
  const sameDate = date1 === date2

  // Check venue similarity
  const venueSimilarity =
    event1.venue && event2.venue ? stringSimilarity(event1.venue, event2.venue) : 0

  // Consider duplicate if:
  // - Very similar title AND same date
  // - OR exact title match AND same venue
  if (titleSimilarity >= 0.85 && sameDate) {
    return true
  }

  if (titleSimilarity >= 0.95 && venueSimilarity >= 0.8) {
    return true
  }

  return false
}

/**
 * Deduplicate events, keeping the one with higher relevance score
 */
export function deduplicateEvents(events: NormalizedEvent[]): NormalizedEvent[] {
  const unique: NormalizedEvent[] = []

  for (const event of events) {
    const duplicateIndex = unique.findIndex((e) => isDuplicate(e, event))

    if (duplicateIndex === -1) {
      // Not a duplicate, add it
      unique.push(event)
    } else {
      // Is a duplicate - keep the one with higher relevance score
      if (event.relevanceScore > unique[duplicateIndex].relevanceScore) {
        unique[duplicateIndex] = event
      }
    }
  }

  return unique
}

/**
 * Merge events from multiple sources
 */
export function mergeEvents(...eventLists: NormalizedEvent[][]): NormalizedEvent[] {
  const allEvents = eventLists.flat()
  const deduplicated = deduplicateEvents(allEvents)

  // Sort by relevance score (highest first), then by date (earliest first)
  return deduplicated.sort((a, b) => {
    if (a.relevanceScore !== b.relevanceScore) {
      return b.relevanceScore - a.relevanceScore
    }
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  })
}

/**
 * Filter events by criteria
 */
export function filterEvents(
  events: NormalizedEvent[],
  filters: {
    minRelevanceScore?: number
    categories?: string[]
    tags?: string[]
    isFree?: boolean
    maxPrice?: number
  }
): NormalizedEvent[] {
  return events.filter((event) => {
    // Filter by relevance score
    if (filters.minRelevanceScore && event.relevanceScore < filters.minRelevanceScore) {
      return false
    }

    // Filter by category
    if (filters.categories && filters.categories.length > 0) {
      if (!event.category || !filters.categories.includes(event.category)) {
        return false
      }
    }

    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
      const hasTag = filters.tags.some((tag) => event.tags.includes(tag))
      if (!hasTag) return false
    }

    // Filter by free events
    if (filters.isFree !== undefined && event.isFree !== filters.isFree) {
      return false
    }

    // Filter by max price
    if (filters.maxPrice !== undefined && event.price?.min && event.price.min > filters.maxPrice) {
      return false
    }

    return true
  })
}

/**
 * Convert NormalizedEvent to EventItem (for cities.ts)
 */
export function normalizedToEventItem(event: NormalizedEvent): EventItem {
  // Map source categories to our categories
  const categoryMap: Record<string, EventItem['category']> = {
    event: 'event',
    seasonal: 'seasonal',
    popup: 'popup',
    opening: 'opening',
    closing: 'closing',
    limited: 'limited',
  }

  return {
    title: event.title,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.venue ? `${event.venue}, ${event.city}` : event.city,
    category: event.category ? categoryMap[event.category] || 'event' : 'event',
    tags: event.tags,
    href: event.url,
    image: event.image
      ? {
          src: event.image.url,
          alt: event.title,
        }
      : undefined,
  }
}

/**
 * Format events for manual review
 */
export function formatForReview(events: NormalizedEvent[]): string {
  let output = `Found ${events.length} events\n`
  output += '='.repeat(80) + '\n\n'

  events.forEach((event, index) => {
    const date = new Date(event.startDate)
    const dateStr = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    })

    output += `${index + 1}. ${event.title}\n`
    output += `   📅 ${dateStr}\n`
    output += `   📍 ${event.venue || 'TBD'}, ${event.city}\n`
    output += `   ⭐ Relevance: ${event.relevanceScore}/100\n`
    output += `   🏷️  Tags: ${event.tags.join(', ')}\n`
    output += `   💰 ${event.isFree ? 'FREE' : event.price ? `$${event.price.min}-$${event.price.max}` : 'Price TBD'}\n`
    output += `   🔗 ${event.url}\n`
    output += `   📝 ${event.description.substring(0, 150)}${event.description.length > 150 ? '...' : ''}\n`
    output += '\n'
  })

  return output
}
