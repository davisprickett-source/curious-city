/**
 * Amsterdam Bar & Hall event scraper
 *
 * Amsterdam Bar & Hall is a music venue in St. Paul's Lowertown district.
 * Known for local and touring indie, rock, and alternative acts.
 *
 * Events URL: https://www.amsterdambarandhall.com/events
 */

import { BaseScraperProvider } from './base-scraper'
import type { ProviderResult, FetchOptions } from '../types'
import type { NormalizedEvent } from '../../api-types'

const EVENTS_URL = 'https://www.amsterdambarandhall.com/events'

export class AmsterdamBarProvider extends BaseScraperProvider {
  constructor() {
    super({
      name: 'Amsterdam Bar & Hall',
      slug: 'amsterdam-bar',
    })
  }

  getSupportedCities(): string[] {
    return ['minneapolis'] // Close enough to include in Minneapolis events
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
      return this.createEmptyResult('Amsterdam Bar only supports Minneapolis area')
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
    const currentYear = new Date().getFullYear()
    const now = new Date()
    const maxDate = options?.endDate || new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000)

    // Split by event-date divs to process each event
    const eventBlocks = html.split('<div class="event-date">')

    for (const block of eventBlocks.slice(1)) {
      // Extract date components
      const monthMatch = block.match(/<div class="date-month">(\w+)<\/div>/i)
      const dayMatch = block.match(/<div class="date-day">(\d+)/i)

      if (!monthMatch || !dayMatch) continue

      const monthStr = monthMatch[1]
      const day = dayMatch[1].padStart(2, '0')
      const dateStr = this.parseDate(`${monthStr} ${day}`, currentYear)

      if (!dateStr) continue

      const eventDateObj = new Date(dateStr)

      // Check date range
      if (eventDateObj < now || eventDateObj > maxDate) continue

      // Extract event URL and title
      const linkMatch = block.match(/<h4><a href="(https:\/\/www\.amsterdambarandhall\.com\/events\/[^"]+)">([^<]+)<\/a><\/h4>/i)
      if (!linkMatch) continue

      const url = linkMatch[1]
      let title = this.stripHtml(linkMatch[2])

      // Decode HTML entities
      title = title
        .replace(/&#8230;/g, '...')
        .replace(/&#8211;/g, '-')
        .replace(/&#8212;/g, '-')
        .replace(/&#8217;/g, "'")
        .replace(/&#8216;/g, "'")
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')

      // Clean up title (remove "Amsterdam presents..." prefix)
      title = title.replace(/^Amsterdam presents[.\s]*\.?\s*/i, '').trim()
      if (!title) continue

      // Extract slug for ID
      const slug = url.replace('https://www.amsterdambarandhall.com/events/', '').replace(/\/$/, '')

      // Extract description from <p>
      const descMatch = block.match(/<p>([^<]+)<\/p>/i)
      let description = descMatch ? this.stripHtml(descMatch[1]) : `${title} at Amsterdam Bar & Hall.`

      // Parse time, price, and age info from description
      const timeMatch = description.match(/(\d{1,2}:\d{2}(?:AM|PM)?)\s*Doors/i)
      const priceMatch = description.match(/\$(\d+(?:\.\d{2})?)/i)
      const isFree = description.toLowerCase().includes('free') || (priceMatch && priceMatch[1] === '0')

      // Build clean description
      description = `${title} at Amsterdam Bar & Hall. ${description}`
      if (description.length > 300) {
        description = description.substring(0, 297) + '...'
      }

      // Determine time
      let time = '20:00'
      if (timeMatch) {
        const parsed = this.parseTime(timeMatch[1])
        if (parsed) time = parsed
      }

      // Build tags
      const tags: string[] = ['music', 'live', 'st-paul']
      if (isFree) tags.push('free')

      // Check for local show indicators
      const isLocal = description.toLowerCase().includes('local') ||
                      title.toLowerCase().includes('minneapolis') ||
                      title.toLowerCase().includes('minnesota')
      if (isLocal) tags.push('local')

      // Calculate relevance score
      let relevanceScore = 70 // Good local venue

      const daysUntil = (eventDateObj.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
      if (daysUntil <= 7) relevanceScore += 15
      else if (daysUntil <= 14) relevanceScore += 10

      if (isFree) relevanceScore += 10
      if (isLocal) relevanceScore += 10

      events.push({
        source: 'venue-scraper',
        sourceId: `amsterdam-${slug}`,
        title,
        description,
        url,
        startDate: `${dateStr}T${time}:00`,
        venue: 'Amsterdam Bar & Hall',
        city: 'St. Paul',
        category: 'concerts',
        isFree: isFree || false,
        tags,
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
