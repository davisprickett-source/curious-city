/**
 * Event helper utilities for validation, checking stale events, and management
 */

import type { EventItem } from '@/types/content'
import { parseDate, getCurrentDate, isPast } from './dateUtils'

/**
 * Validates an event item for required fields and correct format
 */
export function validateEvent(event: EventItem): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Required fields
  if (!event.title || event.title.trim() === '') {
    errors.push('Title is required')
  }

  if (!event.description || event.description.trim() === '') {
    errors.push('Description is required')
  }

  if (!event.startDate) {
    errors.push('Start date is required')
  } else {
    // Validate ISO 8601 format
    try {
      const date = parseDate(event.startDate)
      if (isNaN(date.getTime())) {
        errors.push('Start date is not a valid ISO 8601 date')
      }
    } catch {
      errors.push('Start date must be in ISO 8601 format (e.g., "2025-12-25T19:00:00")')
    }
  }

  // Validate end date if present
  if (event.endDate) {
    try {
      const startDate = parseDate(event.startDate)
      const endDate = parseDate(event.endDate)
      if (isNaN(endDate.getTime())) {
        errors.push('End date is not a valid ISO 8601 date')
      } else if (endDate < startDate) {
        errors.push('End date must be after start date')
      }
    } catch {
      errors.push('End date must be in ISO 8601 format')
    }
  }

  // Validate category
  const validCategories = ['event', 'opening', 'closing', 'seasonal', 'limited', 'popup']
  if (!validCategories.includes(event.category)) {
    errors.push(`Category must be one of: ${validCategories.join(', ')}`)
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Checks if an event is stale (ended more than X days ago)
 */
export function isEventStale(event: EventItem, daysThreshold: number = 7): boolean {
  const endDate = event.endDate ? parseDate(event.endDate) : parseDate(event.startDate)
  const now = getCurrentDate()
  const daysSinceEnd = (now.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24)
  return daysSinceEnd > daysThreshold
}

/**
 * Finds all stale events in a list
 */
export function findStaleEvents(events: EventItem[], daysThreshold: number = 7): EventItem[] {
  return events.filter((event) => isEventStale(event, daysThreshold))
}

/**
 * Validates all events and returns a report
 */
export interface ValidationReport {
  totalEvents: number
  validEvents: number
  invalidEvents: number
  staleEvents: number
  errors: Array<{ event: EventItem; errors: string[] }>
}

export function validateAllEvents(events: EventItem[], daysThreshold: number = 7): ValidationReport {
  const errors: Array<{ event: EventItem; errors: string[] }> = []
  let validCount = 0
  let invalidCount = 0

  events.forEach((event) => {
    const validation = validateEvent(event)
    if (validation.valid) {
      validCount++
    } else {
      invalidCount++
      errors.push({ event, errors: validation.errors })
    }
  })

  const staleEvents = findStaleEvents(events, daysThreshold)

  return {
    totalEvents: events.length,
    validEvents: validCount,
    invalidEvents: invalidCount,
    staleEvents: staleEvents.length,
    errors,
  }
}

/**
 * Generates a template event for copy/paste
 */
export function generateEventTemplate(
  title: string = 'Event Title',
  category: EventItem['category'] = 'event'
): string {
  const now = new Date()
  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(19, 0, 0, 0) // 7pm

  const endTime = new Date(tomorrow)
  endTime.setHours(22, 0, 0, 0) // 10pm

  return `{
  title: '${title}',
  description: 'Brief description of the event (2-3 sentences)',
  startDate: '${tomorrow.toISOString().split('.')[0]}',
  endDate: '${endTime.toISOString().split('.')[0]}',
  location: 'Venue Name, Neighborhood',
  category: '${category}',
  tags: ['tag1', 'tag2'],
  href: 'https://example.com/event',
  image: {
    src: '/images/events/event-name.jpg',
    alt: 'Description of image',
  },
}`
}

/**
 * Checks for duplicate events (same title and start date)
 */
export function findDuplicateEvents(events: EventItem[]): Array<{ event: EventItem; duplicates: EventItem[] }> {
  const duplicates: Array<{ event: EventItem; duplicates: EventItem[] }> = []
  const seen = new Map<string, EventItem[]>()

  events.forEach((event) => {
    const key = `${event.title.toLowerCase().trim()}|${event.startDate}`
    if (!seen.has(key)) {
      seen.set(key, [])
    }
    seen.get(key)!.push(event)
  })

  seen.forEach((group) => {
    if (group.length > 1) {
      const [first, ...rest] = group
      duplicates.push({ event: first, duplicates: rest })
    }
  })

  return duplicates
}

/**
 * Suggests cleanup actions for events
 */
export interface CleanupSuggestion {
  type: 'remove-stale' | 'remove-duplicate' | 'fix-validation'
  event: EventItem
  reason: string
}

export function suggestCleanup(events: EventItem[], daysThreshold: number = 7): CleanupSuggestion[] {
  const suggestions: CleanupSuggestion[] = []

  // Find stale events
  const staleEvents = findStaleEvents(events, daysThreshold)
  staleEvents.forEach((event) => {
    suggestions.push({
      type: 'remove-stale',
      event,
      reason: `Event ended more than ${daysThreshold} days ago`,
    })
  })

  // Find duplicates
  const duplicates = findDuplicateEvents(events)
  duplicates.forEach(({ event, duplicates }) => {
    duplicates.forEach((dup) => {
      suggestions.push({
        type: 'remove-duplicate',
        event: dup,
        reason: `Duplicate of "${event.title}" on ${event.startDate}`,
      })
    })
  })

  // Find validation errors
  events.forEach((event) => {
    const validation = validateEvent(event)
    if (!validation.valid) {
      suggestions.push({
        type: 'fix-validation',
        event,
        reason: validation.errors.join(', '),
      })
    }
  })

  return suggestions
}

/**
 * Formats a date for display in event data
 * Useful when manually entering events
 */
export function formatEventDate(date: Date): string {
  return date.toISOString().split('.')[0]
}

/**
 * Creates an ISO date string from components
 */
export function createEventDate(year: number, month: number, day: number, hour: number = 0, minute: number = 0): string {
  const date = new Date(year, month - 1, day, hour, minute, 0, 0)
  return formatEventDate(date)
}

/**
 * Checks if event dates need updating (for recurring events)
 */
export function needsDateUpdate(event: EventItem): boolean {
  if (!event.isRecurring) return false

  const endDate = event.endDate ? parseDate(event.endDate) : parseDate(event.startDate)
  return isPast(endDate)
}
