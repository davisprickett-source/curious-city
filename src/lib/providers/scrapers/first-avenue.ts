/**
 * First Avenue / 7th Street Entry event scraper
 *
 * First Avenue is Minneapolis's iconic music venue.
 * Their calendar includes events at:
 * - First Avenue (main room)
 * - 7th Street Entry (smaller room)
 * - Turf Club (St. Paul)
 * - Fine Line
 * - Palace Theatre
 * - The Fitzgerald Theater
 *
 * Shows URL: https://first-avenue.com/shows/
 */

import { BaseScraperProvider } from './base-scraper'
import type { ProviderResult, FetchOptions } from '../types'
import type { NormalizedEvent } from '../../api-types'

const SHOWS_URL = 'https://first-avenue.com/shows/'

// Venue mappings - some events are at partner venues
const VENUE_PRIORITY: Record<string, number> = {
  'first avenue': 100,
  '7th street entry': 100,
  'fine line': 80,
  'turf club': 70,
  'palace theatre': 60,
}

export class FirstAvenueProvider extends BaseScraperProvider {
  constructor() {
    super({
      name: 'First Avenue',
      slug: 'first-avenue',
    })
  }

  /**
   * Only supports Minneapolis
   */
  getSupportedCities(): string[] {
    return ['minneapolis']
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

    if (citySlug !== 'minneapolis') {
      return this.createEmptyResult('First Avenue only supports Minneapolis')
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
    const currentYear = new Date().getFullYear()
    const now = new Date()
    const maxDate = options?.endDate || new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000)

    // Find all unique event URLs
    // URL format: https://first-avenue.com/event/2026-01-event-slug/
    const eventUrlPattern = /href="(https:\/\/first-avenue\.com\/event\/(\d{4})-(\d{2})-([^"]+?))\/"/g
    const seenSlugs = new Set<string>()
    let match

    while ((match = eventUrlPattern.exec(html)) !== null) {
      const fullUrl = match[1] + '/'
      const year = match[2]
      const month = match[3]
      const slug = match[4]

      // Skip duplicates (each event appears multiple times in HTML)
      if (seenSlugs.has(slug)) continue
      seenSlugs.add(slug)

      // Find the event block that contains this URL
      // Look backwards to find the start of the event card (venue_name comes before event link)
      // and forward to find the end of the event card
      const urlIndex = match.index

      // Search backwards for venue_name, limited search range
      const searchStart = Math.max(0, urlIndex - 3000)
      const beforeUrl = html.substring(searchStart, urlIndex)
      const venueNameIdx = beforeUrl.lastIndexOf('<div class="venue_name">')
      const blockStart = venueNameIdx >= 0 ? searchStart + venueNameIdx : urlIndex - 500

      // Search forwards for end of event block (btn-row marks end of each event)
      const afterUrl = html.substring(urlIndex, urlIndex + 2000)
      const btnRowIdx = afterUrl.indexOf('class="btn-row')
      const blockEnd = btnRowIdx >= 0 ? urlIndex + btnRowIdx + 200 : urlIndex + 1500

      const eventBlock = html.substring(blockStart, blockEnd)

      // Parse event details from this block
      const event = this.parseEventBlock(eventBlock, fullUrl, year, month, slug, currentYear)

      if (event) {
        // Check date range
        const eventDateObj = new Date(event.startDate)
        if (eventDateObj >= now && eventDateObj <= maxDate) {
          events.push(event)
        }
      }
    }

    // Sort by date
    events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())

    // Limit if requested
    if (options?.limit && events.length > options.limit) {
      return events.slice(0, options.limit)
    }

    return events
  }

  private parseEventBlock(
    block: string,
    url: string,
    year: string,
    month: string,
    slug: string,
    currentYear: number
  ): NormalizedEvent | null {
    // Extract venue from venue_name div
    const venueMatch = block.match(/<div class="venue_name">\s*([^<]+)\s*<\/div>/i)
    let venue = venueMatch ? this.stripHtml(venueMatch[1]) : 'First Avenue'

    // Extract title from h4 > a
    const titleMatch = block.match(/<h4[^>]*>\s*<a[^>]*>([^<]+)<\/a>\s*<\/h4>/i)
    let title = titleMatch ? this.stripHtml(titleMatch[1]) : ''

    // Fallback to slug-based title
    if (!title) {
      title = slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
    }

    if (!title) return null

    // Extract date from month/day divs
    const monthMatch = block.match(/<div class="month">\s*([^<]+)\s*<\/div>/i)
    const dayMatch = block.match(/<div class="day">(\d+)<\/div>/i)

    let eventDate: string
    if (monthMatch && dayMatch) {
      const monthStr = monthMatch[1].trim()
      const day = dayMatch[1].padStart(2, '0')
      const parsedDate = this.parseDate(`${monthStr} ${day}`, currentYear)
      eventDate = parsedDate || `${year}-${month}-01`
    } else {
      eventDate = `${year}-${month}-01`
    }

    // Extract image from background-image style
    // Note: First Avenue's HTML has malformed URLs without closing paren, so we handle both formats
    const imageMatch = block.match(/background-image:\s*url\(([^)"]+)/i)
    let imageUrl = imageMatch ? imageMatch[1].replace(/^['"]|['"]$/g, '').trim() : undefined

    // Skip texture/pattern images
    if (imageUrl && imageUrl.includes('/texture/')) {
      imageUrl = undefined
    }

    // Check if it's a local show
    const isLocal = block.includes('Local Show') || block.includes('★')

    // Extract supporting acts from h5
    const withMatch = block.match(/<h5>[\s\S]*?<em>with<\/em>\s*([^<]+)[\s\S]*?<\/h5>/i)
    let supportingActs = ''
    if (withMatch) {
      supportingActs = this.stripHtml(withMatch[1])
        .replace(/<em>and<\/em>/gi, 'and')
        .replace(/&nbsp;/g, ' ')
        .trim()
    }

    // Build description
    let description = `${title} at ${venue}.`
    if (supportingActs) {
      description += ` With ${supportingActs}.`
    }
    if (isLocal) {
      description += ' Local Minneapolis artist.'
    }

    // Build tags
    const tags: string[] = ['music', 'live']
    if (isLocal) tags.push('local')
    if (venue.toLowerCase().includes('7th st entry')) tags.push('intimate')
    if (venue.toLowerCase().includes('turf club')) tags.push('st-paul')

    // Calculate relevance score
    let relevanceScore = 70 // Base for local venue scraper

    // Boost for premium venues
    const venueBoost = VENUE_PRIORITY[venue.toLowerCase()] || 50
    relevanceScore += (venueBoost - 50) / 5

    // Boost for local shows
    if (isLocal) relevanceScore += 15

    // Boost for soon events
    const daysUntil = (new Date(eventDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 10
    else if (daysUntil <= 14) relevanceScore += 5

    return {
      source: 'venue-scraper',
      sourceId: `first-avenue-${slug}`,
      title,
      description: this.truncateDescription(description),
      url,
      startDate: this.toIsoDateTime(eventDate, '20:00'), // Default 8pm for concerts
      venue,
      city: 'Minneapolis',
      category: 'concerts',
      isFree: false,
      image: imageUrl ? { url: imageUrl } : undefined,
      tags,
      relevanceScore: Math.min(100, Math.round(relevanceScore)),
    }
  }
}
