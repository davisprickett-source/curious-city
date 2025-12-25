/**
 * Date utilities for event management
 * Handles date calculations, formatting, and time bucket determinations
 */

/**
 * Gets the current date/time
 * Allows for easy mocking in tests
 */
export function getCurrentDate(): Date {
  return new Date()
}

/**
 * Parses an ISO 8601 date string to a Date object
 */
export function parseDate(dateString: string): Date {
  return new Date(dateString)
}

/**
 * Gets the start of today (midnight)
 */
export function getStartOfToday(): Date {
  const now = getCurrentDate()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
}

/**
 * Gets the end of today (23:59:59.999)
 */
export function getEndOfToday(): Date {
  const now = getCurrentDate()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)
}

/**
 * Gets the start of tomorrow
 */
export function getStartOfTomorrow(): Date {
  const tomorrow = new Date(getCurrentDate())
  tomorrow.setDate(tomorrow.getDate() + 1)
  return new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0, 0)
}

/**
 * Gets the end of tomorrow
 */
export function getEndOfTomorrow(): Date {
  const tomorrow = new Date(getCurrentDate())
  tomorrow.setDate(tomorrow.getDate() + 1)
  return new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 23, 59, 59, 999)
}

/**
 * Gets the start of the current week (Monday at midnight)
 */
export function getStartOfWeek(date: Date = getCurrentDate()): Date {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
  return new Date(d.getFullYear(), d.getMonth(), diff, 0, 0, 0, 0)
}

/**
 * Gets the end of the current week (Sunday at 23:59:59.999)
 */
export function getEndOfWeek(date: Date = getCurrentDate()): Date {
  const start = getStartOfWeek(date)
  const end = new Date(start)
  end.setDate(end.getDate() + 6)
  return new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59, 999)
}

/**
 * Gets the start of this weekend (Friday at midnight)
 */
export function getStartOfWeekend(date: Date = getCurrentDate()): Date {
  const d = new Date(date)
  const day = d.getDay()
  const daysUntilFriday = day <= 5 ? 5 - day : 0
  const friday = new Date(d)
  friday.setDate(d.getDate() + daysUntilFriday)
  return new Date(friday.getFullYear(), friday.getMonth(), friday.getDate(), 0, 0, 0, 0)
}

/**
 * Gets the end of this weekend (Sunday at 23:59:59.999)
 */
export function getEndOfWeekend(date: Date = getCurrentDate()): Date {
  const start = getStartOfWeekend(date)
  const day = start.getDay()
  const daysUntilSunday = day === 0 ? 0 : 7 - day
  const sunday = new Date(start)
  sunday.setDate(start.getDate() + daysUntilSunday)
  return new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate(), 23, 59, 59, 999)
}

/**
 * Gets the start of the current month
 */
export function getStartOfMonth(date: Date = getCurrentDate()): Date {
  const d = new Date(date)
  return new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0)
}

/**
 * Gets the end of the current month
 */
export function getEndOfMonth(date: Date = getCurrentDate()): Date {
  const d = new Date(date)
  return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999)
}

/**
 * Gets the start of next week
 */
export function getStartOfNextWeek(): Date {
  const endOfWeek = getEndOfWeek()
  const nextMonday = new Date(endOfWeek)
  nextMonday.setDate(nextMonday.getDate() + 1)
  return new Date(nextMonday.getFullYear(), nextMonday.getMonth(), nextMonday.getDate(), 0, 0, 0, 0)
}

/**
 * Gets the end of next week
 */
export function getEndOfNextWeek(): Date {
  const startOfNextWeek = getStartOfNextWeek()
  return getEndOfWeek(startOfNextWeek)
}

/**
 * Checks if a date is today
 */
export function isToday(date: Date): boolean {
  const now = getCurrentDate()
  return date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
}

/**
 * Checks if a date is tomorrow
 */
export function isTomorrow(date: Date): boolean {
  const tomorrow = new Date(getCurrentDate())
  tomorrow.setDate(tomorrow.getDate() + 1)
  return date.getFullYear() === tomorrow.getFullYear() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getDate() === tomorrow.getDate()
}

/**
 * Checks if a date is in the current week
 */
export function isThisWeek(date: Date): boolean {
  const start = getStartOfWeek()
  const end = getEndOfWeek()
  return date >= start && date <= end
}

/**
 * Checks if a date is in the weekend (Fri-Sun)
 */
export function isWeekend(date: Date): boolean {
  const start = getStartOfWeekend()
  const end = getEndOfWeekend()
  return date >= start && date <= end
}

/**
 * Checks if a date is in the current month
 */
export function isThisMonth(date: Date): boolean {
  const now = getCurrentDate()
  return date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth()
}

/**
 * Checks if a date is in the past
 */
export function isPast(date: Date): boolean {
  return date < getCurrentDate()
}

/**
 * Checks if a date is in the future
 */
export function isFuture(date: Date): boolean {
  return date > getCurrentDate()
}

/**
 * Checks if a date is happening now (between start and end)
 */
export function isHappeningNow(startDate: Date, endDate?: Date): boolean {
  const now = getCurrentDate()
  if (!endDate) {
    return false
  }
  return now >= startDate && now <= endDate
}

/**
 * Checks if an event starts soon (within next 2 hours)
 */
export function startsSoon(date: Date): boolean {
  const now = getCurrentDate()
  const twoHoursFromNow = new Date(now.getTime() + 2 * 60 * 60 * 1000)
  return date > now && date <= twoHoursFromNow
}

/**
 * Formats a date as a human-friendly relative string
 * Examples: "Tonight at 7pm", "Tomorrow at 2pm", "Dec 24 at 7pm"
 */
export function formatRelativeDate(date: Date, time?: string): string {
  if (isToday(date)) {
    const hour = date.getHours()
    const timePrefix = hour >= 17 ? 'Tonight' : 'Today'
    return time ? `${timePrefix} at ${time}` : timePrefix
  }

  if (isTomorrow(date)) {
    return time ? `Tomorrow at ${time}` : 'Tomorrow'
  }

  // Format as "Dec 24"
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = monthNames[date.getMonth()]
  const day = date.getDate()
  const dateStr = `${month} ${day}`

  return time ? `${dateStr} at ${time}` : dateStr
}

/**
 * Formats a date range as a human-friendly string
 * Examples: "Dec 24-26", "Dec 24 - Jan 2", "Through Dec 31"
 */
export function formatDateRange(startDate: Date, endDate: Date): string {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const startMonth = monthNames[startDate.getMonth()]
  const startDay = startDate.getDate()
  const endMonth = monthNames[endDate.getMonth()]
  const endDay = endDate.getDate()

  // Same month
  if (startDate.getMonth() === endDate.getMonth()) {
    return `${startMonth} ${startDay}-${endDay}`
  }

  // Different months
  return `${startMonth} ${startDay} - ${endMonth} ${endDay}`
}

/**
 * Formats time in 12-hour format
 * Examples: "7pm", "2:30pm", "All day"
 */
export function formatTime(date: Date, isAllDay: boolean = false): string {
  if (isAllDay) {
    return 'All day'
  }

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const period = hours >= 12 ? 'pm' : 'am'
  const displayHours = hours % 12 || 12

  if (minutes === 0) {
    return `${displayHours}${period}`
  }

  return `${displayHours}:${minutes.toString().padStart(2, '0')}${period}`
}

/**
 * Gets a week range label for display
 * Example: "Dec 23-29"
 */
export function getWeekRangeLabel(date: Date = getCurrentDate()): string {
  const start = getStartOfWeek(date)
  const end = getEndOfWeek(date)
  return formatDateRange(start, end)
}

/**
 * Gets hours until an event starts
 */
export function getHoursUntil(date: Date): number {
  const now = getCurrentDate()
  const diff = date.getTime() - now.getTime()
  return Math.floor(diff / (1000 * 60 * 60))
}

/**
 * Gets days until an event starts
 */
export function getDaysUntil(date: Date): number {
  const now = getStartOfToday()
  const eventStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
  const diff = eventStart.getTime() - now.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}
