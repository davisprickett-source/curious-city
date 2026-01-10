/**
 * Raleigh / Triangle venues scraper
 *
 * The Triangle (Raleigh-Durham-Chapel Hill) has a rich indie music scene.
 * College town energy with historic venues.
 *
 * Venues:
 * - Lincoln Theatre - Raleigh's premier indie venue, 900 capacity
 * - Cat's Cradle - Chapel Hill legend since 1969, 750 capacity
 * - Motorco Music Hall - Durham warehouse venue, 400 capacity
 * - Pour House Music Hall - Raleigh, 500 capacity
 * - The Pinhook - Durham, LGBTQ+ friendly, 200 capacity
 */

import { BaseScraperProvider } from './base-scraper'
import type { ProviderResult, FetchOptions } from '../types'
import type { NormalizedEvent } from '../../api-types'

const VENUES = [
  {
    name: 'Lincoln Theatre',
    url: 'https://www.lincolntheatre.com/events',
    slug: 'lincoln-theatre',
    city: 'Raleigh',
    relevanceBoost: 15,
  },
  {
    name: "Cat's Cradle",
    url: 'https://catscradle.com/events',
    slug: 'cats-cradle',
    city: 'Chapel Hill',
    relevanceBoost: 20, // Legendary venue
  },
  {
    name: 'Motorco Music Hall',
    url: 'https://www.motorcomusic.com/events',
    slug: 'motorco',
    city: 'Durham',
    relevanceBoost: 15,
  },
  {
    name: 'Pour House Music Hall',
    url: 'https://www.pourhousemusichall.com/events',
    slug: 'pour-house',
    city: 'Raleigh',
    relevanceBoost: 10,
  },
  {
    name: 'The Pinhook',
    url: 'https://www.thepinhook.com/events',
    slug: 'pinhook',
    city: 'Durham',
    relevanceBoost: 10,
  },
]

export class RaleighTriangleProvider extends BaseScraperProvider {
  constructor() {
    super({
      name: 'Raleigh Triangle Venues',
      slug: 'raleigh-triangle',
    })
  }

  getSupportedCities(): string[] {
    return ['raleigh']
  }

  async isAvailable(): Promise<boolean> {
    try {
      for (const venue of VENUES) {
        const response = await fetch(venue.url, {
          method: 'HEAD',
          headers: { 'User-Agent': this.userAgent },
        })
        if (response.ok) return true
      }
      return false
    } catch {
      return false
    }
  }

  async fetchEvents(citySlug: string, options?: FetchOptions): Promise<ProviderResult> {
    const startTime = Date.now()

    if (citySlug !== 'raleigh') {
      return this.createEmptyResult('Raleigh Triangle only supports Raleigh/Triangle area')
    }

    const allEvents: NormalizedEvent[] = []
    const errors: string[] = []

    for (const venue of VENUES) {
      try {
        const html = await this.withTimeout(() => this.fetchPage(venue.url))
        const events = this.parseEvents(html, venue, options)
        allEvents.push(...events)
      } catch (error) {
        errors.push(`${venue.name}: ${(error as Error).message}`)
      }
    }

    return this.createResult(allEvents, startTime, {
      errors: errors.length > 0 ? errors : undefined,
      metadata: {
        totalAvailable: allEvents.length,
      },
    })
  }

  private parseEvents(
    html: string,
    venue: { name: string; url: string; slug: string; city: string; relevanceBoost: number },
    options?: FetchOptions
  ): NormalizedEvent[] {
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

          const event = this.parseJsonLdEvent(item, venue)
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
      const htmlEvents = this.parseHtmlEvents(html, venue, now, maxDate, seenUrls)
      events.push(...htmlEvents)
    }

    events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())

    if (options?.limit && events.length > options.limit) {
      return events.slice(0, options.limit)
    }

    return events
  }

  private parseJsonLdEvent(
    item: any,
    venue: { name: string; url: string; slug: string; city: string; relevanceBoost: number }
  ): NormalizedEvent | null {
    const name = item.name
    if (!name) return null

    const startDate = item.startDate
    if (!startDate) return null

    const url = item.url || ''
    const venueName = item.location?.name || venue.name
    const image = item.image || ''
    const description = item.description || `${name} at ${venueName} in ${venue.city}.`

    const eventId = (url || `${name}-${startDate}`).replace(/[^a-z0-9]/gi, '-').toLowerCase()

    let relevanceScore = 75 + venue.relevanceBoost

    const daysUntil = (new Date(startDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 10
    else if (daysUntil <= 14) relevanceScore += 5

    const tags = ['music', 'live', 'concert', 'triangle']
    if (venue.slug === 'pinhook' || venue.slug === 'motorco') {
      tags.push('intimate')
    }
    if (venue.slug === 'cats-cradle') {
      tags.push('legendary')
    }

    return {
      source: 'venue-scraper',
      sourceId: `raleigh-${venue.slug}-${eventId}`,
      title: name,
      description: this.truncateDescription(description),
      url: url.startsWith('http') ? url : `${venue.url}${url}`,
      startDate,
      venue: venueName,
      city: 'Raleigh', // Use Raleigh as metro area
      category: 'concerts',
      isFree: false,
      image: image ? { url: image } : undefined,
      tags,
      relevanceScore: Math.min(100, Math.round(relevanceScore)),
    }
  }

  private parseHtmlEvents(
    html: string,
    venue: { name: string; url: string; slug: string; city: string; relevanceBoost: number },
    now: Date,
    maxDate: Date,
    seenUrls: Set<string>
  ): NormalizedEvent[] {
    const events: NormalizedEvent[] = []

    const eventPattern = /href="([^"]*\/event[s]?\/[^"]+)"/gi
    let match

    while ((match = eventPattern.exec(html)) !== null) {
      const url = match[1]
      const fullUrl = url.startsWith('http') ? url : `${venue.url.replace('/events', '')}${url}`

      if (seenUrls.has(fullUrl)) continue
      seenUrls.add(fullUrl)

      const contextStart = Math.max(0, match.index - 1000)
      const contextEnd = Math.min(html.length, match.index + 1500)
      const context = html.substring(contextStart, contextEnd)

      const titleMatch = context.match(/<h[1-4][^>]*>([^<]+)<\/h[1-4]>/i) ||
                         context.match(/class="[^"]*title[^"]*"[^>]*>([^<]+)</i) ||
                         context.match(/alt="([^"]+)"/i)
      const title = titleMatch ? this.stripHtml(titleMatch[1]).trim() : ''

      if (!title || title.length < 3) continue

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

      const imgMatch = context.match(/src="([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i) ||
                       context.match(/data-src="([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i)
      const imageUrl = imgMatch ? imgMatch[1] : undefined

      let relevanceScore = 70 + venue.relevanceBoost
      const daysUntil = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      if (daysUntil <= 7) relevanceScore += 10
      else if (daysUntil <= 14) relevanceScore += 5

      const tags = ['music', 'live', 'concert', 'triangle']
      if (venue.slug === 'pinhook' || venue.slug === 'motorco') tags.push('intimate')
      if (venue.slug === 'cats-cradle') tags.push('legendary')

      const eventId = fullUrl.replace(/[^a-z0-9]/gi, '-').toLowerCase()

      events.push({
        source: 'venue-scraper',
        sourceId: `raleigh-${venue.slug}-${eventId}`,
        title,
        description: `${title} at ${venue.name} in ${venue.city}.`,
        url: fullUrl,
        startDate,
        venue: venue.name,
        city: 'Raleigh',
        category: 'concerts',
        isFree: false,
        image: imageUrl ? { url: imageUrl } : undefined,
        tags,
        relevanceScore: Math.min(100, Math.round(relevanceScore)),
      })
    }

    return events
  }
}
