/**
 * iCal feed provider
 *
 * Parses iCal/ICS feeds from venues and other sources.
 * Many venues use WordPress calendar plugins that expose iCal feeds.
 */

import { BaseProvider } from '../base'
import type { ProviderResult, FetchOptions } from '../types'
import type { NormalizedEvent } from '../../api-types'

interface ICalFeedConfig {
  name: string
  slug: string
  url: string
  city: string
  venue?: string
  defaultCategory?: string
}

/**
 * Provider that parses iCal/ICS feeds
 */
export class ICalProvider extends BaseProvider {
  private feedConfig: ICalFeedConfig

  constructor(config: ICalFeedConfig) {
    super({
      name: config.name,
      slug: config.slug,
      sourceType: 'ical',
      rateLimit: {
        requestsPerMinute: 10,
        delayMs: 6000,
      },
      timeout: 30000,
      retries: 2,
    })
    this.feedConfig = config
  }

  async isAvailable(): Promise<boolean> {
    try {
      const response = await fetch(this.feedConfig.url, {
        method: 'HEAD',
      })
      return response.ok
    } catch {
      return false
    }
  }

  async fetchEvents(citySlug: string, options?: FetchOptions): Promise<ProviderResult> {
    const startTime = Date.now()

    // Only return events for the configured city
    if (citySlug !== this.feedConfig.city) {
      return this.createEmptyResult(`Feed only supports ${this.feedConfig.city}`)
    }

    try {
      const response = await this.withTimeout(async () => {
        const res = await fetch(this.feedConfig.url)
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        }
        return res.text()
      })

      const events = this.parseICalFeed(response, options)

      return this.createResult(events, startTime, {
        metadata: {
          totalAvailable: events.length,
        },
      })
    } catch (error) {
      return this.createResult([], startTime, {
        errors: [(error as Error).message],
      })
    }
  }

  private parseICalFeed(icalData: string, options?: FetchOptions): NormalizedEvent[] {
    const events: NormalizedEvent[] = []
    const now = new Date()
    const maxDate = options?.endDate || new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000)

    // Split into individual events
    const eventBlocks = icalData.split('BEGIN:VEVENT')

    for (const block of eventBlocks.slice(1)) {
      // Skip empty blocks
      if (!block.trim()) continue

      const event = this.parseEvent(block)
      if (!event) continue

      // Check date range
      const eventDate = new Date(event.startDate)
      if (eventDate < now || eventDate > maxDate) continue

      events.push(event)
    }

    // Sort by date
    events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())

    // Limit if requested
    if (options?.limit && events.length > options.limit) {
      return events.slice(0, options.limit)
    }

    return events
  }

  private parseEvent(block: string): NormalizedEvent | null {
    // Extract fields from iCal block
    const title = this.extractField(block, 'SUMMARY')
    const url = this.extractField(block, 'URL')
    const description = this.extractField(block, 'DESCRIPTION')
    const location = this.extractField(block, 'LOCATION')
    const uid = this.extractField(block, 'UID')
    const categories = this.extractField(block, 'CATEGORIES')
    const imageUrl = this.extractField(block, 'ATTACH')

    // Parse dates
    const dtStart = this.extractDateField(block, 'DTSTART')
    const dtEnd = this.extractDateField(block, 'DTEND')

    if (!title || !dtStart) return null

    // Clean up description (remove HTML, unescape)
    let cleanDescription = description || `${title} at ${this.feedConfig.venue || this.feedConfig.name}.`
    cleanDescription = cleanDescription
      .replace(/\\n/g, ' ')
      .replace(/\\,/g, ',')
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim()

    // Truncate if too long
    if (cleanDescription.length > 300) {
      cleanDescription = cleanDescription.substring(0, 297) + '...'
    }

    // Parse tags from categories
    const tags: string[] = ['music', 'live']
    if (categories) {
      const catList = categories.split(',').map((c) => c.trim().toLowerCase())
      for (const cat of catList) {
        if (cat && !tags.includes(cat) && cat !== 'events') {
          tags.push(cat.replace(/\s+/g, '-'))
        }
      }
    }

    // Check if free
    const isFree = block.toLowerCase().includes('free') ||
      cleanDescription.toLowerCase().includes('free admission') ||
      cleanDescription.toLowerCase().includes('free event')

    if (isFree) tags.push('free')

    // Calculate relevance score
    let relevanceScore = 65 // Base for iCal feeds

    // Boost for soon events
    const daysUntil = (new Date(dtStart).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 10
    else if (daysUntil <= 14) relevanceScore += 5

    if (isFree) relevanceScore += 10

    return {
      source: 'ical',
      sourceId: `${this.feedConfig.slug}-${uid || title.toLowerCase().replace(/\s+/g, '-')}`,
      title,
      description: cleanDescription,
      url: url || this.feedConfig.url, // Fallback to feed URL if no event URL
      startDate: dtStart,
      endDate: dtEnd || undefined,
      venue: this.feedConfig.venue || location?.split(',')[0] || this.feedConfig.name,
      city: this.feedConfig.city === 'minneapolis' ? 'Minneapolis' : this.feedConfig.city,
      category: this.feedConfig.defaultCategory || this.inferCategory(title, cleanDescription),
      isFree,
      image: imageUrl ? { url: imageUrl } : undefined,
      tags,
      relevanceScore: Math.min(100, relevanceScore),
    }
  }

  private extractField(block: string, field: string): string | null {
    // Handle multi-line values (lines starting with space are continuations)
    const lines = block.split('\n')
    let value = ''
    let capturing = false

    for (const line of lines) {
      if (line.startsWith(field + ':') || line.startsWith(field + ';')) {
        // Start of field - extract value after first colon
        const colonIdx = line.indexOf(':')
        if (colonIdx > 0) {
          value = line.substring(colonIdx + 1).trim()
          capturing = true
        }
      } else if (capturing) {
        if (line.startsWith(' ') || line.startsWith('\t')) {
          // Continuation line
          value += line.substring(1)
        } else {
          // End of field
          break
        }
      }
    }

    return value || null
  }

  private extractDateField(block: string, field: string): string | null {
    // Date fields can have parameters like DTSTART;TZID=America/Chicago:20260113T190000
    const pattern = new RegExp(`${field}[^:]*:([0-9T]+)`, 'i')
    const match = block.match(pattern)

    if (!match) return null

    const dateStr = match[1]

    // Parse format: 20260113T190000
    if (dateStr.length >= 8) {
      const year = dateStr.substring(0, 4)
      const month = dateStr.substring(4, 6)
      const day = dateStr.substring(6, 8)

      if (dateStr.includes('T') && dateStr.length >= 15) {
        const hour = dateStr.substring(9, 11)
        const minute = dateStr.substring(11, 13)
        return `${year}-${month}-${day}T${hour}:${minute}:00`
      }

      return `${year}-${month}-${day}T20:00:00`
    }

    return null
  }

  private inferCategory(title: string, description: string): string {
    const text = `${title} ${description}`.toLowerCase()

    if (text.includes('comedy') || text.includes('standup') || text.includes('improv')) {
      return 'comedy'
    }
    if (text.includes('theater') || text.includes('theatre') || text.includes('play')) {
      return 'theater'
    }
    if (text.includes('art') || text.includes('gallery') || text.includes('exhibition')) {
      return 'art'
    }
    if (text.includes('dance') || text.includes('dj') || text.includes('club')) {
      return 'nightlife'
    }
    if (text.includes('workshop') || text.includes('class') || text.includes('learn')) {
      return 'workshop'
    }

    return 'concerts'
  }
}

/**
 * Create Hook and Ladder provider
 */
export function createHookAndLadderProvider(): ICalProvider {
  return new ICalProvider({
    name: 'Hook and Ladder',
    slug: 'hook-and-ladder',
    url: 'https://thehookmpls.com/events/?ical=1',
    city: 'minneapolis',
    venue: 'The Hook and Ladder Theater',
    defaultCategory: 'concerts',
  })
}
