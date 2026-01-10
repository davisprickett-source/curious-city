/**
 * Tampa / Ybor City venues scraper
 *
 * Ybor City is Tampa's historic Latin quarter and entertainment district.
 * Historic cigar factory buildings converted to music venues.
 *
 * Venues:
 * - The Ritz Ybor - 1,600 capacity, major touring acts
 * - Crowbar - Rock/metal venue, 500 capacity
 * - The Orpheum - 250 capacity, intimate shows
 * - Skipper's Smokehouse - Outdoor venue, roots/americana
 */

import { BaseScraperProvider } from './base-scraper'
import type { ProviderResult, FetchOptions } from '../types'
import type { NormalizedEvent } from '../../api-types'

const VENUES = [
  {
    name: 'The Ritz Ybor',
    url: 'https://www.theritzybor.com/events',
    slug: 'ritz-ybor',
    relevanceBoost: 15,
  },
  {
    name: 'Crowbar',
    url: 'https://www.crowbarlive.com/events',
    slug: 'crowbar',
    relevanceBoost: 15,
  },
  {
    name: 'The Orpheum',
    url: 'https://www.theorpheum.com/events',
    slug: 'orpheum',
    relevanceBoost: 10,
  },
  {
    name: "Skipper's Smokehouse",
    url: 'https://www.skipperssmokehouse.com/events',
    slug: 'skippers',
    relevanceBoost: 10,
  },
]

export class TampaVenuesProvider extends BaseScraperProvider {
  constructor() {
    super({
      name: 'Tampa Ybor Venues',
      slug: 'tampa-ybor',
    })
  }

  getSupportedCities(): string[] {
    return ['tampa']
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

    if (citySlug !== 'tampa') {
      return this.createEmptyResult('Tampa Venues only supports Tampa')
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
    venue: { name: string; url: string; slug: string; relevanceBoost: number },
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
    venue: { name: string; url: string; slug: string; relevanceBoost: number }
  ): NormalizedEvent | null {
    const name = item.name
    if (!name) return null

    const startDate = item.startDate
    if (!startDate) return null

    const url = item.url || ''
    const venueName = item.location?.name || venue.name
    const image = item.image || ''
    const description = item.description || `${name} at ${venueName}.`

    const eventId = (url || `${name}-${startDate}`).replace(/[^a-z0-9]/gi, '-').toLowerCase()

    let relevanceScore = 75 + venue.relevanceBoost

    const daysUntil = (new Date(startDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 10
    else if (daysUntil <= 14) relevanceScore += 5

    const tags = ['music', 'live', 'concert']
    if (venue.slug === 'orpheum') {
      tags.push('intimate')
    }
    if (venue.slug === 'skippers') {
      tags.push('outdoor')
    }
    if (venue.slug === 'ritz-ybor' || venue.slug === 'crowbar' || venue.slug === 'orpheum') {
      tags.push('ybor-city')
    }

    return {
      source: 'venue-scraper',
      sourceId: `tampa-${venue.slug}-${eventId}`,
      title: name,
      description: this.truncateDescription(description),
      url: url.startsWith('http') ? url : `${venue.url}${url}`,
      startDate,
      venue: venueName,
      city: 'Tampa',
      category: 'concerts',
      isFree: false,
      image: image ? { url: image } : undefined,
      tags,
      relevanceScore: Math.min(100, Math.round(relevanceScore)),
    }
  }

  private parseHtmlEvents(
    html: string,
    venue: { name: string; url: string; slug: string; relevanceBoost: number },
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

      const tags = ['music', 'live', 'concert']
      if (venue.slug === 'orpheum') tags.push('intimate')
      if (venue.slug === 'skippers') tags.push('outdoor')
      if (venue.slug === 'ritz-ybor' || venue.slug === 'crowbar' || venue.slug === 'orpheum') {
        tags.push('ybor-city')
      }

      const eventId = fullUrl.replace(/[^a-z0-9]/gi, '-').toLowerCase()

      events.push({
        source: 'venue-scraper',
        sourceId: `tampa-${venue.slug}-${eventId}`,
        title,
        description: `${title} at ${venue.name}.`,
        url: fullUrl,
        startDate,
        venue: venue.name,
        city: 'Tampa',
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
