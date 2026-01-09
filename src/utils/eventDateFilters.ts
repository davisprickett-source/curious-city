/**
 * Server-side date filtering utilities for events
 * These filter events BEFORE sending to client to keep payload small
 */

import type { EventItem } from '@/types/content'
import { parseDate } from './dateUtils'

export type TimePeriod = 'today' | 'weekend' | 'week' | 'next-week' | 'custom'

/**
 * Get the date range for a given time period
 */
export function getDateRange(period: TimePeriod, customDate?: string): { start: Date; end: Date } {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  switch (period) {
    case 'today': {
      const endOfDay = new Date(today)
      endOfDay.setHours(23, 59, 59, 999)
      return { start: today, end: endOfDay }
    }

    case 'weekend': {
      // Find this weekend (Friday 5pm to Sunday 11:59pm)
      const dayOfWeek = today.getDay()
      let friday: Date

      if (dayOfWeek === 0) {
        // Sunday - show today only (end of current weekend)
        return { start: today, end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999) }
      } else if (dayOfWeek === 6) {
        // Saturday - show Sat-Sun
        friday = new Date(today)
        friday.setDate(today.getDate() - 1)
      } else if (dayOfWeek === 5) {
        // Friday - show Fri-Sun
        friday = new Date(today)
      } else {
        // Mon-Thu - show upcoming Fri-Sun
        const daysUntilFriday = 5 - dayOfWeek
        friday = new Date(today)
        friday.setDate(today.getDate() + daysUntilFriday)
      }

      const sunday = new Date(friday)
      sunday.setDate(friday.getDate() + (7 - friday.getDay()))
      sunday.setHours(23, 59, 59, 999)

      // Start from today if we're already in the weekend
      const start = friday < today ? today : friday
      return { start, end: sunday }
    }

    case 'week': {
      // Next 7 days from today
      const endOfWeek = new Date(today)
      endOfWeek.setDate(today.getDate() + 7)
      endOfWeek.setHours(23, 59, 59, 999)
      return { start: today, end: endOfWeek }
    }

    case 'next-week': {
      // Find next week (Monday to Sunday after this week)
      const dayOfWeek = today.getDay()
      // Days until next Monday (if today is Sunday, next Monday is tomorrow)
      const daysUntilNextMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek
      const nextMonday = new Date(today)
      nextMonday.setDate(today.getDate() + daysUntilNextMonday)

      const nextSunday = new Date(nextMonday)
      nextSunday.setDate(nextMonday.getDate() + 6)
      nextSunday.setHours(23, 59, 59, 999)

      return { start: nextMonday, end: nextSunday }
    }

    case 'custom': {
      if (!customDate) {
        // Default to today if no date provided
        const endOfDay = new Date(today)
        endOfDay.setHours(23, 59, 59, 999)
        return { start: today, end: endOfDay }
      }

      // Parse the custom date and return that single day
      const selectedDate = new Date(customDate + 'T00:00:00')
      const endOfDay = new Date(selectedDate)
      endOfDay.setHours(23, 59, 59, 999)
      return { start: selectedDate, end: endOfDay }
    }

    default:
      // Default to this week
      const endOfWeek = new Date(today)
      endOfWeek.setDate(today.getDate() + 7)
      endOfWeek.setHours(23, 59, 59, 999)
      return { start: today, end: endOfWeek }
  }
}

/**
 * Filter events to only those within the specified date range
 */
export function filterEventsByDateRange(
  events: EventItem[],
  period: TimePeriod,
  customDate?: string
): EventItem[] {
  const { start, end } = getDateRange(period, customDate)

  return events.filter((event) => {
    const eventStart = parseDate(event.startDate)
    const eventEnd = event.endDate ? parseDate(event.endDate) : eventStart

    // Event is within range if:
    // - Event starts within range, OR
    // - Event ends within range, OR
    // - Event spans the entire range
    return (
      (eventStart >= start && eventStart <= end) ||
      (eventEnd >= start && eventEnd <= end) ||
      (eventStart <= start && eventEnd >= end)
    )
  })
}

/**
 * Get a human-readable label for the current date range
 */
export function getDateRangeLabel(period: TimePeriod, customDate?: string): string {
  const { start, end } = getDateRange(period, customDate)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
  }

  const formatShortDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  switch (period) {
    case 'today':
      return `Today, ${formatShortDate(start)}`
    case 'weekend':
      return `This Weekend (${formatShortDate(start)} - ${formatShortDate(end)})`
    case 'week':
      return `This Week (${formatShortDate(start)} - ${formatShortDate(end)})`
    case 'next-week':
      return `Next Week (${formatShortDate(start)} - ${formatShortDate(end)})`
    case 'custom':
      return formatDate(start)
    default:
      return 'Events'
  }
}

/**
 * Determine the period from URL params
 */
export function getPeriodFromParams(
  periodParam?: string,
  dateParam?: string
): { period: TimePeriod; customDate?: string } {
  if (dateParam) {
    return { period: 'custom', customDate: dateParam }
  }

  if (periodParam === 'today' || periodParam === 'weekend' || periodParam === 'next-week') {
    return { period: periodParam }
  }

  // Default to 'week'
  return { period: 'week' }
}
