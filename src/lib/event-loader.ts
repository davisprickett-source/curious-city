/**
 * Event Loader
 *
 * Loads and merges events from multiple sources:
 * 1. Manual curated events (highest priority)
 * 2. API-fetched events
 * 3. Legacy city data events (fallback)
 *
 * This is what the frontend calls to get events for display.
 */

import type { EventItem } from '@/types/content'
import type { CuratedEvent } from '@/data/events/types'

/**
 * Load all events for a city, merged from all sources
 */
export async function loadCityEvents(citySlug: string): Promise<EventItem[]> {
  const events: CuratedEvent[] = []
  const hiddenTitles: string[] = []

  // 1. Try to load curated events (manually added cool stuff)
  try {
    const curatedModule = await import(`@/data/events/${citySlug}-curated`)
    if (curatedModule.default) {
      events.push(...curatedModule.default)
    } else {
      // Try named export
      const exportName = `${toCamelCase(citySlug)}CuratedEvents`
      if (curatedModule[exportName]) {
        events.push(...curatedModule[exportName])
      }
    }

    // Load hidden events list
    const hiddenExportName = `${toCamelCase(citySlug)}HiddenEvents`
    if (curatedModule[hiddenExportName]) {
      hiddenTitles.push(...curatedModule[hiddenExportName])
    }
  } catch {
    // No curated events file for this city yet - that's fine
  }

  // 2. Try to load API-fetched events
  try {
    const apiModule = await import(`@/data/events/${citySlug}-api`)
    if (apiModule.default) {
      events.push(...apiModule.default)
    } else {
      // Try named export
      const exportName = `${toCamelCase(citySlug)}ApiEvents`
      if (apiModule[exportName]) {
        events.push(...apiModule[exportName])
      }
    }
  } catch {
    // No API events file for this city yet - that's fine
  }

  // 3. Fallback to legacy city data if no dedicated event files
  if (events.length === 0) {
    try {
      const { getCityEvents } = await import('@/data/cities')
      const legacyEvents = await getCityEvents(citySlug)
      if (legacyEvents) {
        // Legacy events are in a different format (EventsContentItem)
        for (const section of legacyEvents) {
          if (section.items) {
            events.push(...section.items.map((item: EventItem) => ({
              ...item,
              source: 'legacy' as const,
            })))
          }
        }
      }
    } catch {
      // No legacy events either
    }
  }

  // 4. Filter out hidden events
  const filteredEvents = events.filter(
    (event) => !hiddenTitles.includes(event.title)
  )

  // 5. Deduplicate by title + date
  const deduped = deduplicateEvents(filteredEvents)

  // 6. Sort: featured first, then by date
  return sortEvents(deduped)
}

/**
 * Deduplicate events by title + start date
 * Keeps the one with higher priority (manual > api > legacy)
 */
function deduplicateEvents(events: CuratedEvent[]): CuratedEvent[] {
  const seen = new Map<string, CuratedEvent>()

  const sourcePriority: Record<string, number> = {
    manual: 3,
    'local-blog': 2,
    'venue-direct': 2,
    api: 1,
    ticketmaster: 1,
    eventbrite: 1,
    legacy: 0,
  }

  for (const event of events) {
    const key = `${event.title.toLowerCase().trim()}|${event.startDate.split('T')[0]}`
    const existing = seen.get(key)

    if (!existing) {
      seen.set(key, event)
    } else {
      // Keep the one with higher source priority
      const existingPriority = sourcePriority[existing.source || 'legacy'] || 0
      const newPriority = sourcePriority[event.source || 'legacy'] || 0

      if (newPriority > existingPriority) {
        seen.set(key, event)
      }
    }
  }

  return Array.from(seen.values())
}

/**
 * Sort events: featured first, then by date
 */
function sortEvents(events: CuratedEvent[]): CuratedEvent[] {
  return [...events].sort((a, b) => {
    // Featured events first
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1

    // Then by date
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  })
}

/**
 * Convert slug to camelCase for dynamic imports
 */
function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

/**
 * Get event statistics for a city
 */
export async function getEventStats(citySlug: string): Promise<{
  total: number
  featured: number
  byCategory: Record<string, number>
  bySource: Record<string, number>
}> {
  const events = await loadCityEvents(citySlug)

  const byCategory: Record<string, number> = {}
  const bySource: Record<string, number> = {}

  for (const event of events) {
    // Count by category
    byCategory[event.category] = (byCategory[event.category] || 0) + 1

    // Count by source
    const source = (event as CuratedEvent).source || 'unknown'
    bySource[source] = (bySource[source] || 0) + 1
  }

  return {
    total: events.length,
    featured: events.filter((e) => e.featured).length,
    byCategory,
    bySource,
  }
}
