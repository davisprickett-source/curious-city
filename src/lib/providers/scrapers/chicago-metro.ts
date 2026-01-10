/**
 * Metro Chicago event scraper
 *
 * Metro is Chicago's iconic rock venue, opened in 1982.
 * Known for launching artists like The Smashing Pumpkins, REM, and countless others.
 *
 * Shows URL: https://metrochicago.com/shows/
 */

import { BaseScraperProvider } from './base-scraper'
import type { ProviderResult, FetchOptions } from '../types'
import type { NormalizedEvent } from '../../api-types'

const SHOWS_URL = 'https://metrochicago.com/shows/'

export class MetroChicagoProvider extends BaseScraperProvider {
  constructor() {
    super({
      name: 'Metro Chicago',
      slug: 'metro-chicago',
    })
  }

  getSupportedCities(): string[] {
    return ['chicago']
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

    if (citySlug !== 'chicago') {
      return this.createEmptyResult('Metro only supports Chicago')
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

    // Try to extract JSON-LD structured data first
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

    // Fallback to HTML parsing if no JSON-LD
    if (events.length === 0) {
      const htmlEvents = this.parseHtmlEvents(html, now, maxDate)
      events.push(...htmlEvents)
    }

    // Sort by date
    events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())

    // Limit if requested
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
    const venue = item.location?.name || 'Metro'
    const image = item.image || ''
    const description = item.description || `${name} at ${venue}.`

    // Generate stable ID from URL or name+date
    const idBase = url || `${name}-${startDate}`
    const eventId = idBase.replace(/[^a-z0-9]/gi, '-').toLowerCase()

    // Calculate relevance score - Metro gets a boost as premium venue
    let relevanceScore = 80 // High base for iconic venue

    const daysUntil = (new Date(startDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 10
    else if (daysUntil <= 14) relevanceScore += 5

    return {
      source: 'venue-scraper',
      sourceId: `metro-chicago-${eventId}`,
      title: name,
      description: this.truncateDescription(description),
      url: url.startsWith('http') ? url : `https://metrochicago.com${url}`,
      startDate,
      venue,
      city: 'Chicago',
      category: 'concerts',
      isFree: false,
      image: image ? { url: image } : undefined,
      tags: ['music', 'live', 'concert'],
      relevanceScore: Math.min(100, Math.round(relevanceScore)),
    }
  }

  private parseHtmlEvents(html: string, now: Date, maxDate: Date): NormalizedEvent[] {
    const events: NormalizedEvent[] = []
    const seenUrls = new Set<string>()

    // Look for event links - adjust pattern based on actual site structure
    // Common patterns: /event/slug, /shows/slug, /calendar/event/slug
    const eventPattern = /href="([^"]*(?:\/event\/|\/shows\/)[^"]+)"/gi
    let match

    while ((match = eventPattern.exec(html)) !== null) {
      const url = match[1]

      // Make URL absolute if needed
      const fullUrl = url.startsWith('http') ? url : `https://metrochicago.com${url}`

      if (seenUrls.has(fullUrl)) continue
      seenUrls.add(fullUrl)

      // Get context around the URL
      const contextStart = Math.max(0, match.index - 1000)
      const contextEnd = Math.min(html.length, match.index + 1500)
      const context = html.substring(contextStart, contextEnd)

      // Try to extract title
      const titleMatch = context.match(/<h[1-4][^>]*>([^<]+)<\/h[1-4]>/i) ||
                         context.match(/title="([^"]+)"/i) ||
                         context.match(/>([^<]{5,60})</i)
      const title = titleMatch ? this.stripHtml(titleMatch[1]).trim() : ''

      if (!title || title.length < 3) continue

      // Try to extract date
      const dateMatch = context.match(/(\d{4}-\d{2}-\d{2})/) ||
                        context.match(/datetime="([^"]+)"/) ||
                        context.match(/((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w*\s+\d{1,2}(?:,?\s+\d{4})?)/i)

      let startDate: string
      if (dateMatch) {
        const parsed = this.parseDate(dateMatch[1], new Date().getFullYear())
        startDate = parsed ? this.toIsoDateTime(parsed, '20:00') : this.toIsoDateTime(new Date().toISOString().split('T')[0], '20:00')
      } else {
        continue // Skip events without dates
      }

      // Check date range
      const eventDate = new Date(startDate)
      if (eventDate < now || eventDate > maxDate) continue

      // Try to extract image
      const imgMatch = context.match(/src="([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i) ||
                       context.match(/data-src="([^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i) ||
                       context.match(/background-image:\s*url\(['"]?([^'")\s]+)/i)
      let imageUrl = imgMatch ? imgMatch[1] : undefined

      // Make image URL absolute if needed
      if (imageUrl && !imageUrl.startsWith('http')) {
        imageUrl = `https://metrochicago.com${imageUrl}`
      }

      // Calculate relevance
      let relevanceScore = 75 // Good base for Metro
      const daysUntil = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      if (daysUntil <= 7) relevanceScore += 10
      else if (daysUntil <= 14) relevanceScore += 5

      const eventId = fullUrl.replace(/[^a-z0-9]/gi, '-').toLowerCase()

      events.push({
        source: 'venue-scraper',
        sourceId: `metro-chicago-${eventId}`,
        title,
        description: `${title} at Metro Chicago.`,
        url: fullUrl,
        startDate,
        venue: 'Metro',
        city: 'Chicago',
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
