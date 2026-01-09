/**
 * Provider registry - manages all event providers
 */

import type {
  EventProvider,
  ProviderResult,
  FetchOptions,
  AggregatedResult,
} from './types'
import { TicketmasterProvider } from './ticketmaster'
import { EventbriteProvider } from './eventbrite'
import { FirstAvenueProvider } from './scrapers/first-avenue'
import { CedarCulturalProvider } from './scrapers/cedar-cultural'
import { AmsterdamBarProvider } from './scrapers/amsterdam-bar'
import { ParkwayTheaterProvider } from './scrapers/parkway-theater'
import { SongkickProvider } from './scrapers/songkick'
import { createHookAndLadderProvider } from './feeds/ical-provider'
import type { NormalizedEvent } from '../api-types'

/**
 * Registry that manages all event providers
 */
export class ProviderRegistry {
  private providers: Map<string, EventProvider> = new Map()

  constructor() {
    // Register default providers (national APIs)
    this.register(new TicketmasterProvider())
    this.register(new EventbriteProvider())

    // Register Minneapolis venue scrapers
    this.register(new FirstAvenueProvider())
    this.register(new CedarCulturalProvider())
    this.register(new AmsterdamBarProvider())
    this.register(new ParkwayTheaterProvider())

    // Register multi-city scrapers
    this.register(new SongkickProvider())

    // Register iCal feeds
    this.register(createHookAndLadderProvider())
  }

  /**
   * Register a provider
   */
  register(provider: EventProvider): void {
    this.providers.set(provider.config.slug, provider)
  }

  /**
   * Get a specific provider by slug
   */
  get(slug: string): EventProvider | undefined {
    return this.providers.get(slug)
  }

  /**
   * Get all registered providers
   */
  getAll(): EventProvider[] {
    return Array.from(this.providers.values())
  }

  /**
   * Get enabled providers for a city
   */
  getForCity(citySlug: string): EventProvider[] {
    return this.getAll().filter((provider) => {
      if (!provider.config.enabled) return false

      // If provider specifies supported cities, check if this city is included
      const supportedCities = provider.getSupportedCities?.()
      if (supportedCities && !supportedCities.includes(citySlug)) {
        return false
      }

      return true
    })
  }

  /**
   * Fetch events from all providers for a city
   */
  async fetchAll(citySlug: string, options?: FetchOptions): Promise<AggregatedResult> {
    const startTime = Date.now()
    const providers = this.getForCity(citySlug)
    const results: ProviderResult[] = []
    const failedProviders: string[] = []

    console.log(`\nFetching events for ${citySlug} from ${providers.length} providers...\n`)

    // Check availability and fetch in parallel
    const fetchPromises = providers.map(async (provider) => {
      try {
        const isAvailable = await provider.isAvailable()
        if (!isAvailable) {
          console.log(`  ⏭️  ${provider.config.name}: Not available`)
          return null
        }

        console.log(`  📡 ${provider.config.name}: Fetching...`)
        const result = await provider.fetchEvents(citySlug, options)

        if (result.errors.length > 0) {
          console.log(`  ⚠️  ${provider.config.name}: ${result.events.length} events (with ${result.errors.length} errors)`)
        } else {
          console.log(`  ✅ ${provider.config.name}: ${result.events.length} events`)
        }

        return result
      } catch (error) {
        console.log(`  ❌ ${provider.config.name}: ${(error as Error).message}`)
        failedProviders.push(provider.config.name)
        return null
      }
    })

    const fetchResults = await Promise.all(fetchPromises)
    results.push(...fetchResults.filter((r): r is ProviderResult => r !== null))

    // Aggregate all events
    const allEvents = results.flatMap((r) => r.events)
    const totalBeforeDedup = allEvents.length

    // Deduplicate with priority
    const deduplicatedEvents = this.deduplicateEvents(allEvents)

    console.log(`\n  📊 Total: ${totalBeforeDedup} events → ${deduplicatedEvents.length} after deduplication`)

    return {
      results,
      events: deduplicatedEvents,
      stats: {
        totalProviders: providers.length,
        successfulProviders: results.length,
        failedProviders,
        totalEventsBeforeDedup: totalBeforeDedup,
        totalEventsAfterDedup: deduplicatedEvents.length,
        fetchDuration: Date.now() - startTime,
      },
    }
  }

  /**
   * Deduplicate events, keeping higher priority sources
   */
  private deduplicateEvents(events: NormalizedEvent[]): NormalizedEvent[] {
    // Group events by similarity
    const groups: Map<string, NormalizedEvent[]> = new Map()

    for (const event of events) {
      const key = this.getDeduplicationKey(event)
      const existing = groups.get(key)

      if (existing) {
        existing.push(event)
      } else {
        groups.set(key, [event])
      }
    }

    // For each group, keep the event with highest source priority
    const deduplicated: NormalizedEvent[] = []

    for (const [, group] of Array.from(groups)) {
      // Sort by priority (highest first)
      group.sort((a, b) => {
        const priorityA = this.getSourcePriority(a.source)
        const priorityB = this.getSourcePriority(b.source)
        return priorityB - priorityA
      })

      // Keep the highest priority event
      const best = group[0]

      // Merge tags from all duplicates
      const allTags = new Set<string>()
      for (const event of group) {
        event.tags.forEach((tag) => allTags.add(tag))
      }
      best.tags = Array.from(allTags)

      // Use best image from any source
      if (!best.image) {
        const withImage = group.find((e) => e.image)
        if (withImage) {
          best.image = withImage.image
        }
      }

      deduplicated.push(best)
    }

    // Sort by date
    deduplicated.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())

    return deduplicated
  }

  /**
   * Generate a deduplication key for an event
   */
  private getDeduplicationKey(event: NormalizedEvent): string {
    // Normalize title: lowercase, remove special chars, trim
    const normalizedTitle = event.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim()

    // Get date only (ignore time)
    const dateOnly = event.startDate.substring(0, 10)

    return `${normalizedTitle}|${dateOnly}`
  }

  /**
   * Get priority for a source type
   */
  private getSourcePriority(source: string): number {
    const priorities: Record<string, number> = {
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
    return priorities[source] ?? 50
  }
}

/**
 * Singleton registry instance
 */
export const registry = new ProviderRegistry()

// Re-export types
export * from './types'
export { BaseProvider } from './base'
export { TicketmasterProvider } from './ticketmaster'
export { EventbriteProvider } from './eventbrite'
export { FirstAvenueProvider } from './scrapers/first-avenue'
export { CedarCulturalProvider } from './scrapers/cedar-cultural'
export { AmsterdamBarProvider } from './scrapers/amsterdam-bar'
export { ParkwayTheaterProvider } from './scrapers/parkway-theater'
export { SongkickProvider } from './scrapers/songkick'
export { ICalProvider, createHookAndLadderProvider } from './feeds/ical-provider'
