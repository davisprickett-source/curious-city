/**
 * Event scoring system
 *
 * Calculates a relevance score (0-100) for events based on:
 * - Venue reputation (city-specific)
 * - Event type signals (positive and negative)
 * - Source quality
 * - Timing factors
 */

import type { NormalizedEvent } from './api-types'
import type { CityEventConfig } from './city-event-configs'

export interface ScoringBreakdown {
  base: number
  venue: number
  eventType: number
  source: number
  timing: number
  manual: number
  total: number
  reasons: string[]
}

/**
 * Score an event based on city-specific rules
 */
export function scoreEvent(
  event: NormalizedEvent,
  config: CityEventConfig
): ScoringBreakdown {
  const reasons: string[] = []
  let base = 50
  let venue = 0
  let eventType = 0
  let source = 0
  let timing = 0
  let manual = 0

  // === VENUE SCORING ===
  const venueLower = event.venue?.toLowerCase() || ''

  // Premium venues (iconic, always good)
  if (config.venues.premium.some(v => venueLower.includes(v.toLowerCase()))) {
    venue = 25
    reasons.push(`Premium venue: ${event.venue}`)
  }
  // Good venues (reliable, quality)
  else if (config.venues.good.some(v => venueLower.includes(v.toLowerCase()))) {
    venue = 15
    reasons.push(`Good venue: ${event.venue}`)
  }
  // Avoid venues (corporate, tourist traps)
  else if (config.venues.avoid.some(v => venueLower.includes(v.toLowerCase()))) {
    venue = -25
    reasons.push(`Avoid venue: ${event.venue}`)
  }

  // === EVENT TYPE SCORING ===
  const titleLower = event.title.toLowerCase()
  const descLower = event.description?.toLowerCase() || ''
  const text = `${titleLower} ${descLower} ${event.tags?.join(' ') || ''}`

  // Negative signals (corporate, generic)
  const negativePatterns = [
    { pattern: /corporate|networking mixer|business breakfast/i, penalty: -20, reason: 'Corporate event' },
    { pattern: /webinar|zoom|virtual networking/i, penalty: -15, reason: 'Virtual/webinar' },
    { pattern: /mlm|pyramid|opportunity meeting/i, penalty: -30, reason: 'MLM/spam' },
    { pattern: /timeshare|real estate seminar/i, penalty: -25, reason: 'Sales pitch' },
    { pattern: /hiring fair|job fair|career expo/i, penalty: -10, reason: 'Job fair' },
  ]

  for (const { pattern, penalty, reason } of negativePatterns) {
    if (pattern.test(text)) {
      eventType += penalty
      reasons.push(reason)
    }
  }

  // Positive signals (genuinely interesting)
  const positivePatterns = [
    { pattern: /sold out|selling fast/i, bonus: 10, reason: 'High demand' },
    { pattern: /premiere|debut|first time/i, bonus: 10, reason: 'Special premiere' },
    { pattern: /secret|underground|speakeasy/i, bonus: 15, reason: 'Underground/exclusive' },
    { pattern: /pop-up|popup|limited time/i, bonus: 10, reason: 'Limited availability' },
    { pattern: /local artist|local band|homegrown/i, bonus: 10, reason: 'Local talent' },
    { pattern: /grammy|award.winning|acclaimed/i, bonus: 15, reason: 'Award-winning' },
    { pattern: /free admission|free entry|no cover/i, bonus: 5, reason: 'Free event' },
  ]

  for (const { pattern, bonus, reason } of positivePatterns) {
    if (pattern.test(text)) {
      eventType += bonus
      reasons.push(reason)
    }
  }

  // Category-specific boosts from city config
  if (config.priorityCategories) {
    for (const cat of config.priorityCategories) {
      if (event.tags?.includes(cat) || text.includes(cat)) {
        eventType += 5
        reasons.push(`Priority category: ${cat}`)
      }
    }
  }

  // === SOURCE SCORING ===
  switch (event.source) {
    case 'manual':
      source = 25
      manual = 25
      reasons.push('Manually curated')
      break
    case 'local-blog':
    case 'venue-direct':
      source = 15
      reasons.push('Local source')
      break
    case 'ticketmaster':
    case 'eventbrite':
      source = 0 // Neutral
      break
    default:
      source = 0
  }

  // === TIMING SCORING ===
  const eventDate = new Date(event.startDate)
  const now = new Date()
  const daysUntil = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)

  if (daysUntil <= 3) {
    timing = 15
    reasons.push('Happening very soon')
  } else if (daysUntil <= 7) {
    timing = 10
    reasons.push('This week')
  } else if (daysUntil <= 14) {
    timing = 5
    reasons.push('Next two weeks')
  } else if (daysUntil > 60) {
    timing = -5
    reasons.push('Far in future')
  }

  // Weekend boost
  const dayOfWeek = eventDate.getDay()
  if (dayOfWeek === 5 || dayOfWeek === 6) {
    timing += 5
    reasons.push('Weekend event')
  }

  // Calculate total
  const total = Math.max(0, Math.min(100, base + venue + eventType + source + timing))

  return {
    base,
    venue,
    eventType,
    source,
    timing,
    manual,
    total,
    reasons,
  }
}

/**
 * Determine if an event should be auto-featured
 */
export function shouldAutoFeature(_event: NormalizedEvent, score: ScoringBreakdown): boolean {
  // Auto-feature if:
  // - Score is 80+
  // - OR it's a manually curated event
  // - OR it has premium venue + high demand signals
  return (
    score.total >= 80 ||
    score.manual > 0 ||
    (score.venue >= 25 && score.eventType >= 10)
  )
}

/**
 * Determine if an event should be hidden
 */
export function shouldAutoHide(score: ScoringBreakdown): boolean {
  // Auto-hide if score is below 30
  return score.total < 30
}

/**
 * Sort events by score (highest first)
 */
export function sortByScore(events: Array<NormalizedEvent & { score: number }>): Array<NormalizedEvent & { score: number }> {
  return [...events].sort((a, b) => b.score - a.score)
}
