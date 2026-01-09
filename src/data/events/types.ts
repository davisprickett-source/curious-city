/**
 * Event data types for the curation system
 */

import type { EventItem } from '@/types/content'

/**
 * A manually curated event with additional metadata
 */
export interface CuratedEvent extends EventItem {
  // Who added this event
  addedBy?: string

  // When it was added (ISO date)
  addedAt?: string

  // Source of the event (for tracking)
  source?: 'manual' | 'api' | 'local-blog' | 'venue-direct'

  // Override the auto-calculated score
  scoreOverride?: number

  // Notes for other curators
  curatorNotes?: string
}

/**
 * Events file structure for a city
 */
export interface CityEventsFile {
  // City identifier
  citySlug: string

  // Last updated timestamp
  lastUpdated: string

  // Manually curated events (the cool stuff)
  curated: CuratedEvent[]

  // API-fetched events (auto-populated by script)
  api: CuratedEvent[]

  // Events to explicitly hide (by title or ID)
  hidden: string[]
}

/**
 * Template for creating a new curated event
 */
export const CURATED_EVENT_TEMPLATE: CuratedEvent = {
  title: 'Event Title',
  description: 'A compelling 2-3 sentence description that makes people want to go.',
  startDate: '2026-01-15T19:00:00',
  endDate: '2026-01-15T22:00:00',
  location: 'Venue Name, Neighborhood',
  category: 'concerts',
  tags: ['music', 'local'],
  href: 'https://example.com/event-link',
  featured: true,
  source: 'manual',
  addedBy: 'your-name',
  addedAt: new Date().toISOString(),
  curatorNotes: 'Why this event is cool / how you found it',
}
