/**
 * Cedar Cultural Center event scraper
 *
 * The Cedar is a renowned world music and folk venue in Minneapolis.
 * Known for diverse programming including global artists, folk, and local acts.
 *
 * Events URL: https://www.thecedar.org/events
 */

import { BaseScraperProvider } from './base-scraper'
import type { ProviderResult, FetchOptions } from '../types'
import type { NormalizedEvent } from '../../api-types'

const EVENTS_URL = 'https://www.thecedar.org/events'
const BASE_URL = 'https://www.thecedar.org'

export class CedarCulturalProvider extends BaseScraperProvider {
  constructor() {
    super({
      name: 'Cedar Cultural Center',
      slug: 'cedar-cultural',
    })
  }

  getSupportedCities(): string[] {
    return ['minneapolis']
  }

  async isAvailable(): Promise<boolean> {
    try {
      const response = await fetch(EVENTS_URL, {
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

    if (citySlug !== 'minneapolis') {
      return this.createEmptyResult('Cedar Cultural Center only supports Minneapolis')
    }

    try {
      const html = await this.withTimeout(() => this.fetchPage(EVENTS_URL))
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

    // Find all event title links with their URLs
    // Pattern: <h1 class="eventlist-title"><a href="/events/slug">Title</a></h1>
    const titlePattern = /<h1 class="eventlist-title"><a href="(\/events\/[^"]+)"[^>]*>([^<]+)<\/a><\/h1>/g
    const seenSlugs = new Set<string>()
    let match

    while ((match = titlePattern.exec(html)) !== null) {
      const eventPath = match[1]
      const title = this.stripHtml(match[2])
      const slug = eventPath.replace('/events/', '')

      // Skip duplicates
      if (seenSlugs.has(slug)) continue
      seenSlugs.add(slug)

      // Find the date near this title
      const afterTitle = html.substring(match.index, match.index + 500)
      const dateMatch = afterTitle.match(/datetime="(\d{4}-\d{2}-\d{2})"/)

      if (!dateMatch) continue

      const eventDate = dateMatch[1]
      const eventDateObj = new Date(eventDate)

      // Check date range
      if (eventDateObj < now || eventDateObj > maxDate) continue

      // Build event
      const fullUrl = `${BASE_URL}${eventPath}`

      // Look for image in the surrounding context
      const blockStart = Math.max(0, match.index - 1000)
      const blockEnd = Math.min(html.length, match.index + 1000)
      const eventBlock = html.substring(blockStart, blockEnd)

      const imageMatch = eventBlock.match(/data-src="([^"]+\.(jpg|jpeg|png|webp)[^"]*)"/i) ||
                        eventBlock.match(/src="([^"]+\.(jpg|jpeg|png|webp)[^"]*)"/i)
      const imageUrl = imageMatch ? imageMatch[1] : undefined

      // Calculate relevance score
      let relevanceScore = 75 // Cedar is a quality venue

      const daysUntil = (eventDateObj.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
      if (daysUntil <= 7) relevanceScore += 15
      else if (daysUntil <= 14) relevanceScore += 10

      // World music and folk get a boost
      const titleLower = title.toLowerCase()
      if (titleLower.includes('world') || titleLower.includes('folk') || titleLower.includes('jazz')) {
        relevanceScore += 5
      }

      events.push({
        source: 'venue-scraper',
        sourceId: `cedar-${slug}`,
        title,
        description: `${title} at The Cedar Cultural Center. A unique world music and folk venue in the heart of Minneapolis.`,
        url: fullUrl,
        startDate: `${eventDate}T20:00:00`,
        venue: 'Cedar Cultural Center',
        city: 'Minneapolis',
        category: 'concerts',
        isFree: false,
        image: imageUrl ? { url: imageUrl } : undefined,
        tags: ['music', 'live', 'world-music', 'folk'],
        relevanceScore: Math.min(100, relevanceScore),
      })
    }

    // Sort by date
    events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())

    // Limit if requested
    if (options?.limit && events.length > options.limit) {
      return events.slice(0, options.limit)
    }

    return events
  }
}
