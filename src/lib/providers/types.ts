/**
 * Provider types for event fetching system
 */

import type { NormalizedEvent } from '../api-types'

/**
 * Event source types - extended to support more providers
 */
export type ProviderSource =
  | 'ticketmaster'
  | 'eventbrite'
  | 'meetup'
  | 'manual'
  | 'venue-scraper'
  | 'ical'
  | 'rss'
  | 'reddit'
  | 'local-blog'
  | 'venue-direct'
  | 'legacy'

/**
 * Source priority for deduplication (higher = preferred)
 */
export const SOURCE_PRIORITY: Record<ProviderSource, number> = {
  manual: 100,
  'venue-direct': 85,
  'venue-scraper': 80,
  'local-blog': 75,
  ical: 65,
  rss: 65,
  meetup: 60,
  ticketmaster: 50,
  eventbrite: 50,
  reddit: 40,
  legacy: 0,
}

/**
 * Provider configuration
 */
export interface ProviderConfig {
  /** Display name */
  name: string
  /** Unique slug identifier */
  slug: string
  /** Source type for deduplication priority */
  sourceType: ProviderSource
  /** Whether this provider is enabled */
  enabled: boolean
  /** Rate limiting config */
  rateLimit?: {
    requestsPerMinute: number
    delayMs: number
  }
  /** Request timeout in ms */
  timeout?: number
  /** Number of retry attempts */
  retries?: number
}

/**
 * Options for fetching events
 */
export interface FetchOptions {
  /** Start date for event search */
  startDate?: Date
  /** End date for event search */
  endDate?: Date
  /** Maximum events to fetch */
  limit?: number
  /** Force fresh fetch, ignore cache */
  forceRefresh?: boolean
  /** Specific categories to filter */
  categories?: string[]
}

/**
 * Result from a provider fetch
 */
export interface ProviderResult {
  /** Fetched events */
  events: NormalizedEvent[]
  /** Source identifier */
  source: string
  /** When this fetch occurred */
  fetchedAt: string
  /** How long the fetch took in ms */
  duration: number
  /** Any errors that occurred */
  errors: string[]
  /** Non-fatal warnings */
  warnings: string[]
  /** Additional metadata */
  metadata?: {
    /** Total events available (if API reports) */
    totalAvailable?: number
    /** Pages fetched */
    pagesFetched?: number
    /** Whether rate limited */
    rateLimited?: boolean
    /** Cache status */
    fromCache?: boolean
  }
}

/**
 * Event provider interface - all providers must implement this
 */
export interface EventProvider {
  /** Provider configuration */
  config: ProviderConfig

  /**
   * Check if provider is available (API key exists, endpoint reachable)
   */
  isAvailable(): Promise<boolean>

  /**
   * Fetch events for a city
   */
  fetchEvents(citySlug: string, options?: FetchOptions): Promise<ProviderResult>

  /**
   * Get cities this provider supports
   * Returns undefined if supports all cities
   */
  getSupportedCities?(): string[] | undefined
}

/**
 * Aggregated fetch results from multiple providers
 */
export interface AggregatedResult {
  /** All provider results */
  results: ProviderResult[]
  /** Merged and deduplicated events */
  events: NormalizedEvent[]
  /** Fetch statistics */
  stats: {
    totalProviders: number
    successfulProviders: number
    failedProviders: string[]
    totalEventsBeforeDedup: number
    totalEventsAfterDedup: number
    fetchDuration: number
  }
}

/**
 * City-specific provider configuration
 */
export interface CityProviderConfig {
  /** City slug */
  slug: string
  /** Providers enabled for this city */
  providers: {
    ticketmaster?: boolean
    eventbrite?: boolean
    meetup?: boolean
    /** Venue scraper slugs to use */
    scrapers?: string[]
    /** iCal feed URLs */
    icalFeeds?: string[]
    /** RSS feed URLs */
    rssFeeds?: string[]
    /** Reddit subreddits to search */
    redditSubreddits?: string[]
  }
}
