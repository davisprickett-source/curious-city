/**
 * Event status utilities for automatic time-based filtering and display
 */

import type { EventItem, EventStatus } from '@/types/content'
import {
  parseDate,
  getCurrentDate,
  isToday,
  isTomorrow,
  isThisWeek,
  isWeekend,
  isThisMonth,
  isPast,
  isHappeningNow,
  startsSoon,
  formatRelativeDate,
  formatDateRange,
  formatTime,
  getStartOfWeek,
  getEndOfWeek,
  getStartOfNextWeek,
  getEndOfNextWeek,
} from './dateUtils'

/**
 * Determines the status of an event based on current time
 */
export function getEventStatus(event: EventItem): EventStatus {
  const startDate = parseDate(event.startDate)
  const endDate = event.endDate ? parseDate(event.endDate) : undefined

  // Check if event has ended
  const checkDate = endDate || startDate
  if (isPast(checkDate)) {
    return 'ended'
  }

  // Check if happening now
  if (endDate && isHappeningNow(startDate, endDate)) {
    return 'happening-now'
  }

  // Check if starts soon (within 2 hours)
  if (startsSoon(startDate)) {
    return 'starts-soon'
  }

  // Check if today
  if (isToday(startDate)) {
    return 'today'
  }

  // Check if tomorrow
  if (isTomorrow(startDate)) {
    return 'tomorrow'
  }

  // Check if this weekend
  if (isWeekend(startDate)) {
    return 'this-weekend'
  }

  // Check if this week
  if (isThisWeek(startDate)) {
    return 'this-week'
  }

  // Check if next week
  const nextWeekStart = getStartOfNextWeek()
  const nextWeekEnd = getEndOfNextWeek()
  if (startDate >= nextWeekStart && startDate <= nextWeekEnd) {
    return 'next-week'
  }

  // Check if this month
  if (isThisMonth(startDate)) {
    return 'this-month'
  }

  // Everything else is upcoming
  return 'upcoming'
}

/**
 * Checks if an event should be displayed (not ended or expired)
 */
export function isEventActive(event: EventItem): boolean {
  const status = getEventStatus(event)

  // Don't show ended events
  if (status === 'ended') {
    return false
  }

  // Check explicit expiration date
  if (event.expiresAt) {
    const expiresAt = parseDate(event.expiresAt)
    if (isPast(expiresAt)) {
      return false
    }
  }

  return true
}

/**
 * Filters events to only show active ones
 */
export function filterActiveEvents(events: EventItem[]): EventItem[] {
  return events.filter(isEventActive)
}

/**
 * Filters events by status
 */
export function filterEventsByStatus(events: EventItem[], status: EventStatus): EventItem[] {
  return events.filter((event) => getEventStatus(event) === status)
}

/**
 * Filters events for "today" view (happening now, starts soon, or later today)
 */
export function filterTodayEvents(events: EventItem[]): EventItem[] {
  return events.filter((event) => {
    const status = getEventStatus(event)
    return status === 'happening-now' || status === 'starts-soon' || status === 'today'
  })
}

/**
 * Filters events for "this weekend" view (Fri-Sun)
 */
export function filterWeekendEvents(events: EventItem[]): EventItem[] {
  return events.filter((event) => {
    const status = getEventStatus(event)
    return status === 'this-weekend' || status === 'happening-now' || status === 'starts-soon'
  })
}

/**
 * Filters events for "this week" view (Mon-Sun)
 */
export function filterThisWeekEvents(events: EventItem[]): EventItem[] {
  return events.filter((event) => {
    const status = getEventStatus(event)
    return (
      status === 'happening-now' ||
      status === 'starts-soon' ||
      status === 'today' ||
      status === 'tomorrow' ||
      status === 'this-weekend' ||
      status === 'this-week'
    )
  })
}

/**
 * Filters events for "this month" view
 */
export function filterThisMonthEvents(events: EventItem[]): EventItem[] {
  return events.filter((event) => {
    const status = getEventStatus(event)
    return status !== 'ended' && status !== 'upcoming'
  })
}

/**
 * Groups events by their status
 */
export function groupEventsByStatus(events: EventItem[]): Record<EventStatus, EventItem[]> {
  const groups: Record<EventStatus, EventItem[]> = {
    'happening-now': [],
    'starts-soon': [],
    today: [],
    tomorrow: [],
    'this-weekend': [],
    'this-week': [],
    'next-week': [],
    'this-month': [],
    upcoming: [],
    ended: [],
  }

  events.forEach((event) => {
    const status = getEventStatus(event)
    groups[status].push(event)
  })

  return groups
}

/**
 * Groups events by date for display
 */
export interface EventsByDate {
  date: string // Human-readable date
  events: EventItem[]
}

export function groupEventsByDate(events: EventItem[]): EventsByDate[] {
  const dateMap = new Map<string, EventItem[]>()

  events.forEach((event) => {
    const startDate = parseDate(event.startDate)
    const dateKey = startDate.toISOString().split('T')[0] // YYYY-MM-DD

    if (!dateMap.has(dateKey)) {
      dateMap.set(dateKey, [])
    }
    dateMap.get(dateKey)!.push(event)
  })

  // Convert to array and sort by date
  const grouped = Array.from(dateMap.entries())
    .map(([dateKey, events]) => {
      const date = parseDate(dateKey)
      return {
        date: formatRelativeDate(date),
        events: events.sort((a, b) => {
          const aDate = parseDate(a.startDate)
          const bDate = parseDate(b.startDate)
          return aDate.getTime() - bDate.getTime()
        }),
      }
    })
    .sort((a, b) => {
      const aDate = parseDate(a.events[0].startDate)
      const bDate = parseDate(b.events[0].startDate)
      return aDate.getTime() - bDate.getTime()
    })

  return grouped
}

/**
 * Sorts events by start date (earliest first)
 */
export function sortEventsByDate(events: EventItem[]): EventItem[] {
  return [...events].sort((a, b) => {
    const aDate = parseDate(a.startDate)
    const bDate = parseDate(b.startDate)
    return aDate.getTime() - bDate.getTime()
  })
}

/**
 * Gets the display date for an event
 */
export function getEventDisplayDate(event: EventItem): string {
  const startDate = parseDate(event.startDate)
  const endDate = event.endDate ? parseDate(event.endDate) : undefined

  // Multi-day event
  if (endDate && endDate.getDate() !== startDate.getDate()) {
    return formatDateRange(startDate, endDate)
  }

  // Single day event - show relative date with time
  const time = event.isAllDay ? undefined : formatTime(startDate, event.isAllDay)
  return formatRelativeDate(startDate, time)
}

/**
 * Gets the display time for an event
 */
export function getEventDisplayTime(event: EventItem): string | undefined {
  if (event.isAllDay) {
    return 'All day'
  }

  const startDate = parseDate(event.startDate)
  return formatTime(startDate)
}

/**
 * Gets a status badge label for display
 */
export function getStatusBadgeLabel(status: EventStatus): string {
  const labels: Record<EventStatus, string> = {
    'happening-now': 'Happening Now',
    'starts-soon': 'Starts Soon',
    today: 'Today',
    tomorrow: 'Tomorrow',
    'this-weekend': 'This Weekend',
    'this-week': 'This Week',
    'next-week': 'Next Week',
    'this-month': 'This Month',
    upcoming: 'Upcoming',
    ended: 'Ended',
  }

  return labels[status]
}

/**
 * Gets priority for sorting by urgency (higher = more urgent)
 */
export function getStatusPriority(status: EventStatus): number {
  const priorities: Record<EventStatus, number> = {
    'happening-now': 10,
    'starts-soon': 9,
    today: 8,
    tomorrow: 7,
    'this-weekend': 6,
    'this-week': 5,
    'next-week': 4,
    'this-month': 3,
    upcoming: 2,
    ended: 1,
  }

  return priorities[status]
}

/**
 * Converts legacy ThisWeekItem to EventItem
 * Useful for backward compatibility
 */
export function convertLegacyToEventItem(
  legacy: {
    title: string
    description: string
    date?: string
    time?: string
    location?: string
    category?: 'event' | 'opening' | 'closing' | 'seasonal' | 'limited' | 'popup'
    href?: string
    image?: { src: string; alt: string }
  },
  fallbackDate: string = new Date().toISOString()
): EventItem {
  return {
    title: legacy.title,
    description: legacy.description,
    location: legacy.location,
    href: legacy.href,
    image: legacy.image,
    startDate: fallbackDate, // This would need manual conversion
    category: legacy.category || 'event',
  }
}
