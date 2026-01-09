/**
 * Event loader - combines curated and API events for city pages
 *
 * This loader dynamically imports events for any city.
 * Each city can have:
 * - [city]-api.ts: Auto-fetched from Ticketmaster/Eventbrite
 * - [city]-curated.ts: Manually curated events (optional)
 */

import type { EventItem } from '@/types/content'
import type { CuratedEvent } from './types'

/**
 * Convert a CuratedEvent to an EventItem for the city page
 */
function toEventItem(event: CuratedEvent): EventItem {
  return {
    title: event.title,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.location,
    category: event.category,
    tags: event.tags,
    href: event.href,
    image: event.image,
    featured: event.featured,
    relevanceScore: event.relevanceScore,
    moreInfo: event.moreInfo,
    isRecurring: event.isRecurring,
    recurrenceRule: event.recurrenceRule,
  }
}

/**
 * Dynamically load API events for a city
 */
async function loadApiEvents(citySlug: string): Promise<CuratedEvent[]> {
  try {
    // Dynamic import based on city slug
    const module = await import(`./${citySlug}-api`)
    // The export is named [city]ApiEvents with camelCase
    const exportName = `${citySlug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}ApiEvents`
    return module[exportName] || []
  } catch {
    // API file doesn't exist yet - that's fine
    return []
  }
}

/**
 * Dynamically load curated events for a city
 */
async function loadCuratedEvents(citySlug: string): Promise<{ events: CuratedEvent[], hidden: string[] }> {
  try {
    // Dynamic import based on city slug
    const module = await import(`./${citySlug}-curated`)
    const exportName = `${citySlug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}CuratedEvents`
    const hiddenName = `${citySlug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}HiddenEvents`
    return {
      events: module[exportName] || [],
      hidden: module[hiddenName] || [],
    }
  } catch {
    // Curated file doesn't exist - that's fine
    return { events: [], hidden: [] }
  }
}

/**
 * Get all events for a city, combining curated + API sources
 * Curated events get priority and a score boost
 */
export async function getCityEventsArray(citySlug: string): Promise<EventItem[]> {
  // Load both sources in parallel
  const [apiEvents, { events: curatedEvents, hidden: hiddenEvents }] = await Promise.all([
    loadApiEvents(citySlug),
    loadCuratedEvents(citySlug),
  ])

  const hiddenSet = new Set(hiddenEvents.map(h => h.toLowerCase()))

  // Score boost for manually curated events
  const curatedWithBoost = curatedEvents.map(event => ({
    ...event,
    relevanceScore: Math.min(100, (event.relevanceScore || 70) + 25),
  }))

  // Combine curated + API events (curated first for dedup priority)
  const allEvents: CuratedEvent[] = [...curatedWithBoost, ...apiEvents]

  // Filter out hidden events
  const visibleEvents = allEvents.filter(event => {
    const titleLower = event.title.toLowerCase()
    return !hiddenSet.has(titleLower)
  })

  // Deduplicate by title + date (curated wins due to being first)
  const seen = new Set<string>()
  const deduplicated: CuratedEvent[] = []

  for (const event of visibleEvents) {
    const key = `${event.title.toLowerCase()}|${event.startDate.substring(0, 10)}`
    if (!seen.has(key)) {
      seen.add(key)
      deduplicated.push(event)
    }
  }

  // Sort by date, then by relevance score
  deduplicated.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime()
    const dateB = new Date(b.startDate).getTime()
    if (dateA !== dateB) return dateA - dateB
    return (b.relevanceScore || 0) - (a.relevanceScore || 0)
  })

  // Convert to EventItem format
  return deduplicated.map(toEventItem)
}

/**
 * Get event count for a city (useful for display)
 */
export async function getCityEventCount(citySlug: string): Promise<number> {
  const events = await getCityEventsArray(citySlug)
  return events.length
}

// ============================================
// BACKWARDS COMPATIBILITY
// Keep existing Minneapolis exports working
// ============================================

import { minneapolisCuratedEvents, minneapolisHiddenEvents } from './minneapolis-curated'
import { minneapolisApiEvents } from './minneapolis-api'

/**
 * Get all Minneapolis events (synchronous for backwards compat)
 * @deprecated Use getCityEventsArray('minneapolis') instead
 */
export function getMinneapolisEvents(): EventItem[] {
  const hiddenSet = new Set(minneapolisHiddenEvents.map(h => h.toLowerCase()))

  const curatedWithBoost = minneapolisCuratedEvents.map(event => ({
    ...event,
    relevanceScore: Math.min(100, (event.relevanceScore || 70) + 25),
  }))

  const allEvents: CuratedEvent[] = [...curatedWithBoost, ...minneapolisApiEvents]

  const visibleEvents = allEvents.filter(event => {
    const titleLower = event.title.toLowerCase()
    return !hiddenSet.has(titleLower)
  })

  const seen = new Set<string>()
  const deduplicated: CuratedEvent[] = []

  for (const event of visibleEvents) {
    const key = `${event.title.toLowerCase()}|${event.startDate.substring(0, 10)}`
    if (!seen.has(key)) {
      seen.add(key)
      deduplicated.push(event)
    }
  }

  deduplicated.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime()
    const dateB = new Date(b.startDate).getTime()
    if (dateA !== dateB) return dateA - dateB
    return (b.relevanceScore || 0) - (a.relevanceScore || 0)
  })

  return deduplicated.map(toEventItem)
}

export function getMinneapolisEventCount(): number {
  return getMinneapolisEvents().length
}

export const minneapolisEventsArray = getMinneapolisEvents()
