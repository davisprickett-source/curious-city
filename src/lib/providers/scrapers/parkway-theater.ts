/**
 * Parkway Theater event scraper
 *
 * The Parkway Theater is a historic venue in South Minneapolis
 * featuring live music, film screenings, and comedy shows.
 *
 * JSON API: https://theparkwaytheater.com/live-events?format=json
 */

import { BaseScraperProvider } from './base-scraper'
import type { ProviderResult, FetchOptions } from '../types'
import type { NormalizedEvent } from '../../api-types'

const EVENTS_URL = 'https://theparkwaytheater.com/live-events?format=json'
const BASE_URL = 'https://theparkwaytheater.com'

export class ParkwayTheaterProvider extends BaseScraperProvider {
  constructor() {
    super({
      name: 'Parkway Theater',
      slug: 'parkway-theater',
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
      return this.createEmptyResult('Parkway Theater only supports Minneapolis')
    }

    try {
      const response = await this.withTimeout(async () => {
        const res = await fetch(EVENTS_URL, {
          headers: {
            'User-Agent': this.userAgent,
            'Accept': 'application/json',
          },
        })
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        }
        return res.json()
      })

      const events = this.parseEvents(response, options)

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

  private parseEvents(jsonData: { mainContent?: string }, options?: FetchOptions): NormalizedEvent[] {
    const events: NormalizedEvent[] = []
    const now = new Date()
    const maxDate = options?.endDate || new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000)

    const html = jsonData.mainContent || ''
    if (!html) return events

    // Find all event items in the HTML
    // Pattern: href="/all-events/slug" with title and date nearby
    const eventPattern = /<a[^>]*href="(\/all-events\/[^"]+)"[^>]*class="summary-title-link">([^<]+)<\/a>/g
    const seenSlugs = new Set<string>()
    let match

    while ((match = eventPattern.exec(html)) !== null) {
      const eventPath = match[1]
      const title = this.stripHtml(match[2])
      const slug = eventPath.replace('/all-events/', '')

      // Skip duplicates
      if (seenSlugs.has(slug)) continue
      seenSlugs.add(slug)

      // Find the event block containing this link
      const linkIndex = match.index
      const blockStart = Math.max(0, html.lastIndexOf('summary-item', linkIndex) - 100)
      const blockEnd = Math.min(html.length, html.indexOf('</div></div></div>', linkIndex + 100) + 50)
      const eventBlock = html.substring(blockStart, blockEnd)

      // Extract date
      const dateMatch = eventBlock.match(/summary-metadata-item--date">([^<]+)<\/time>/i)
      if (!dateMatch) continue

      const dateStr = dateMatch[1].trim()
      const eventDate = this.parseParkwayDate(dateStr)
      if (!eventDate) continue

      const eventDateObj = new Date(eventDate)

      // Check date range
      if (eventDateObj < now || eventDateObj > maxDate) continue

      // Extract time
      const timeMatch = eventBlock.match(/event-time-24hr">([^<]+)<\/span>/i)
      let time = '19:30' // Default
      if (timeMatch) {
        const timeStr = timeMatch[1].split('–')[0].trim() // Get start time only
        if (timeStr.match(/^\d{1,2}:\d{2}$/)) {
          time = timeStr.padStart(5, '0')
        }
      }

      // Extract image
      const imageMatch = eventBlock.match(/data-src="([^"]+)"/i)
      const imageUrl = imageMatch ? imageMatch[1] : undefined

      // Extract description/excerpt
      const excerptMatch = eventBlock.match(/summary-excerpt[^>]*>[\s\S]*?<p[^>]*>([^<]+)/i)
      let description = excerptMatch ? this.stripHtml(excerptMatch[1]) : `${title} at The Parkway Theater.`
      if (description.length > 300) {
        description = description.substring(0, 297) + '...'
      }

      // Determine category
      let category = 'concerts'
      const titleLower = title.toLowerCase()
      if (titleLower.includes('(1') || titleLower.includes('(2') || titleLower.includes('movie') || titleLower.includes('film')) {
        category = 'film'
      } else if (titleLower.includes('comedy') || titleLower.includes('standup')) {
        category = 'comedy'
      }

      // Build tags
      const tags: string[] = ['live']
      if (category === 'film') tags.push('film', 'classic-movies')
      else if (category === 'comedy') tags.push('comedy')
      else tags.push('music')

      // Calculate relevance score
      let relevanceScore = 75 // Historic venue bonus

      const daysUntil = (eventDateObj.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
      if (daysUntil <= 7) relevanceScore += 15
      else if (daysUntil <= 14) relevanceScore += 10

      events.push({
        source: 'venue-scraper',
        sourceId: `parkway-${slug}`,
        title,
        description,
        url: `${BASE_URL}${eventPath}`,
        startDate: `${eventDate}T${time}:00`,
        venue: 'Parkway Theater',
        city: 'Minneapolis',
        category,
        isFree: false,
        image: imageUrl ? { url: imageUrl } : undefined,
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

  /**
   * Parse Parkway's date format: "Jan 3, 2026" or "Jan 3, 2026 – Jan 31, 2026"
   */
  private parseParkwayDate(dateStr: string): string | null {
    // Handle date ranges - just use the start date
    const singleDate = dateStr.split('–')[0].trim().split('&')[0].trim()

    // Parse "Jan 3, 2026"
    const match = singleDate.match(/([A-Za-z]+)\s+(\d{1,2}),?\s*(\d{4})/)
    if (!match) return null

    const months: Record<string, string> = {
      jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
      jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
    }

    const month = months[match[1].toLowerCase().substring(0, 3)]
    if (!month) return null

    const day = match[2].padStart(2, '0')
    const year = match[3]

    return `${year}-${month}-${day}`
  }
}
