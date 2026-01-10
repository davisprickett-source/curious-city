/**
 * Showbox Seattle event scraper
 *
 * The Showbox is Seattle's legendary music venue since 1939.
 * Located in Pike Place Market area, it's hosted everyone from
 * Duke Ellington to Pearl Jam to Billie Eilish.
 *
 * Venues:
 * - Showbox (main room, 1100 capacity)
 * - Showbox SoDo (larger venue, 1800 capacity)
 *
 * Shows URL: https://www.showboxpresents.com/events
 */

import { BaseScraperProvider } from './base-scraper'
import type { ProviderResult, FetchOptions } from '../types'
import type { NormalizedEvent } from '../../api-types'

const SHOWS_URL = 'https://www.showboxpresents.com/events'

export class ShowboxSeattleProvider extends BaseScraperProvider {
  constructor() {
    super({
      name: 'Showbox Seattle',
      slug: 'showbox-seattle',
    })
  }

  getSupportedCities(): string[] {
    return ['seattle']
  }

  async isAvailable(): Promise<boolean> {
    try {
      const response = await fetch(SHOWS_URL, {
        method: 'HEAD',
        headers: { 'User-Agent': this.userAgent },
      })
      return response.ok
    } catch {
      return false
    }
  }

  async fetchEvents(citySlug: string, options?: FetchOptions): Promise<ProviderResult> {
    const startTime = Date.now()

    if (citySlug !== 'seattle') {
      return this.createEmptyResult('Showbox only supports Seattle')
    }

    try {
      const html = await this.withTimeout(() => this.fetchPage(SHOWS_URL))
      const events = this.parseEvents(html, options)

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

  private parseEvents(html: string, options?: FetchOptions): NormalizedEvent[] {
    const events: NormalizedEvent[] = []
    const now = new Date()
    const maxDate = options?.endDate || new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000)
    const seenUrls = new Set<string>()

    // Try JSON-LD first
    const jsonLdMatches = Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))

    for (const match of jsonLdMatches) {
      try {
        const jsonData = JSON.parse(match[1])
        const eventList = Array.isArray(jsonData) ? jsonData : [jsonData]

        for (const item of eventList) {
          if (item['@type'] !== 'MusicEvent' && item['@type'] !== 'Event') continue

          const event = this.parseJsonLdEvent(item)
          if (!event) continue

          if (seenUrls.has(event.url)) continue
          seenUrls.add(event.url)

          const eventDate = new Date(event.startDate)
          if (eventDate >= now && eventDate <= maxDate) {
            events.push(event)
          }
        }
      } catch {
        // Skip invalid JSON
      }
    }

    // Fallback to HTML parsing
    if (events.length === 0) {
      const htmlEvents = this.parseHtmlEvents(html, now, maxDate, seenUrls)
      events.push(...htmlEvents)
    }

    events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())

    if (options?.limit && events.length > options.limit) {
      return events.slice(0, options.limit)
    }

    return events
  }

  private parseJsonLdEvent(item: any): NormalizedEvent | null {
    const name = item.name
    if (!name) return null

    const startDate = item.startDate
    if (!startDate) return null

    const url = item.url || ''
    const venue = item.location?.name || 'Showbox'
    const image = item.image || ''
    const description = item.description || `${name} at ${venue}.`

    const eventId = (url || `${name}-${startDate}`).replace(/[^a-z0-9]/gi, '-').toLowerCase()

    let relevanceScore = 80 // High base for iconic venue

    const daysUntil = (new Date(startDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 10
    else if (daysUntil <= 14) relevanceScore += 5

    // Boost for main Showbox vs SoDo
    if (venue.toLowerCase().includes('sodo')) {
      relevanceScore -= 5 // Slightly lower for the larger, less intimate venue
    }

    return {
      source: 'venue-scraper',
      sourceId: `showbox-${eventId}`,
      title: name,
      description: this.truncateDescription(description),
      url: url.startsWith('http') ? url : `https://www.showboxpresents.com${url}`,
      startDate,
      venue,
      city: 'Seattle',
      category: 'concerts',
      isFree: false,
      image: image ? { url: image } : undefined,
      tags: ['music', 'live', 'concert'],
      relevanceScore: Math.min(100, Math.round(relevanceScore)),
    }
  }

  private parseHtmlEvents(html: string, now: Date, maxDate: Date, seenUrls: Set<string>): NormalizedEvent[] {
    const events: NormalizedEvent[] = []

    // Look for event card patterns
    const eventPattern = /href="([^"]*\/event[s]?\/[^"]+)"/gi
    let match

    while ((match = eventPattern.exec(html)) !== null) {
      const url = match[1]
      const fullUrl = url.startsWith('http') ? url : `https://www.showboxpresents.com${url}`

      if (seenUrls.has(fullUrl)) continue
      seenUrls.add(fullUrl)

      const contextStart = Math.max(0, match.index - 1000)
      const contextEnd = Math.min(html.length, match.index + 1500)
      const context = html.substring(contextStart, contextEnd)

      // Extract title
      const titleMatch = context.match(/<h[1-4][^>]*>([^<]+)<\/h[1-4]>/i) ||
                         context.match(/class="[^"]*title[^"]*"[^>]*>([^<]+)</i) ||
                         context.match(/alt="([^"]+)"/i)
      const title = titleMatch ? this.stripHtml(titleMatch[1]).trim() : ''

      if (!title || title.length < 3) continue

      // Extract date
      const dateMatch = context.match(/(\d{4}-\d{2}-\d{2})/) ||
                        context.match(/datetime="([^"]+)"/) ||
                        context.match(/((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w*\s+\d{1,2}(?:,?\s+\d{4})?)/i)

      let startDate: string
      if (dateMatch) {
        const parsed = this.parseDate(dateMatch[1], new Date().getFullYear())
        startDate = parsed ? this.toIsoDateTime(parsed, '20:00') : this.toIsoDateTime(new Date().toISOString().split('T')[0], '20:00')
      } else {
        continue
      }

      const eventDate = new Date(startDate)
      if (eventDate < now || eventDate > maxDate) continue

      // Extract venue (Showbox vs Showbox SoDo)
      const venueMatch = context.match(/showbox\s*sodo/i) ? 'Showbox SoDo' : 'Showbox'

      // Extract image
      const imgMatch = context.match(/src="([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i) ||
                       context.match(/data-src="([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i)
      let imageUrl = imgMatch ? imgMatch[1] : undefined
      if (imageUrl && !imageUrl.startsWith('http')) {
        imageUrl = `https://www.showboxpresents.com${imageUrl}`
      }

      let relevanceScore = 75
      const daysUntil = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      if (daysUntil <= 7) relevanceScore += 10
      else if (daysUntil <= 14) relevanceScore += 5

      const eventId = fullUrl.replace(/[^a-z0-9]/gi, '-').toLowerCase()

      events.push({
        source: 'venue-scraper',
        sourceId: `showbox-${eventId}`,
        title,
        description: `${title} at ${venueMatch}.`,
        url: fullUrl,
        startDate,
        venue: venueMatch,
        city: 'Seattle',
        category: 'concerts',
        isFree: false,
        image: imageUrl ? { url: imageUrl } : undefined,
        tags: ['music', 'live', 'concert'],
        relevanceScore: Math.min(100, Math.round(relevanceScore)),
      })
    }

    return events
  }
}
