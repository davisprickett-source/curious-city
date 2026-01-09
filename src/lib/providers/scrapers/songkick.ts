/**
 * Songkick concert scraper
 *
 * Songkick aggregates concert data for all major cities.
 * This scraper covers multiple cities at once.
 *
 * Metro area IDs:
 * - Chicago: 9426
 * - Seattle: 2846
 * - Portland: 12283
 * - Denver: 11776
 * - Phoenix: 23068
 * - Dallas: 9782
 * - Minneapolis: 16585
 * - Salt Lake City: 28588
 * - Raleigh: 9926 (Triangle)
 * - Tampa: 27778
 * - Anchorage: 27396
 * - Fargo: Not available (too small)
 * - Colorado Springs: 27577
 */

import { BaseScraperProvider } from './base-scraper'
import type { ProviderResult, FetchOptions } from '../types'
import type { NormalizedEvent } from '../../api-types'

// Songkick metro area IDs for each city
const METRO_IDS: Record<string, number> = {
  'chicago': 9426,
  'seattle': 2846,
  'portland': 12283,
  'denver': 11776,
  'phoenix': 23068,
  'dallas': 9782,
  'minneapolis': 16585,
  'salt-lake-city': 28588,
  'raleigh': 9926,
  'tampa': 27778,
  'anchorage': 27396,
  'colorado-springs': 27577,
}

// Premium venues to boost (from city-event-configs)
const PREMIUM_VENUES: Record<string, string[]> = {
  'chicago': ['metro', 'empty bottle', 'thalia hall', 'kingston mines', 'green mill', 'hideout'],
  'seattle': ['showbox', 'neumos', 'crocodile', 'triple door', 'tractor tavern'],
  'portland': ['crystal ballroom', 'doug fir', 'revolution hall', 'mississippi studios', 'wonder ballroom'],
  'denver': ['red rocks', 'bluebird theater', 'gothic theatre', 'ogden theatre', 'meow wolf'],
  'phoenix': ['crescent ballroom', 'van buren', 'valley bar', 'rebel lounge'],
  'dallas': ['granada theater', 'trees', 'club dada', 'three links'],
  'minneapolis': ['first avenue', '7th street entry', 'fine line', 'turf club'],
  'salt-lake-city': ['the depot', 'state room', 'urban lounge', 'kilby court'],
  'raleigh': ['lincoln theatre', 'cat\'s cradle', 'motorco', 'pour house'],
  'tampa': ['ritz ybor', 'crowbar', 'orpheum', 'skipper\'s smokehouse'],
  'anchorage': ['bear tooth', 'williwaw'],
  'colorado-springs': ['black sheep', 'lulu\'s downstairs'],
}

export class SongkickProvider extends BaseScraperProvider {
  constructor() {
    super({
      name: 'Songkick',
      slug: 'songkick',
    })
  }

  getSupportedCities(): string[] {
    return Object.keys(METRO_IDS)
  }

  async isAvailable(): Promise<boolean> {
    try {
      const response = await fetch('https://www.songkick.com/', {
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

    const metroId = METRO_IDS[citySlug]
    if (!metroId) {
      return this.createEmptyResult(`Songkick doesn't have data for ${citySlug}`)
    }

    try {
      const url = `https://www.songkick.com/metro-areas/${metroId}-us-${citySlug.replace('-', '')}`
      const html = await this.withTimeout(() => this.fetchPage(url))
      const events = this.parseEvents(html, citySlug, options)

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

  private parseEvents(html: string, citySlug: string, options?: FetchOptions): NormalizedEvent[] {
    const events: NormalizedEvent[] = []
    const now = new Date()
    const maxDate = options?.endDate || new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000)
    const premiumVenues = PREMIUM_VENUES[citySlug] || []
    const seenIds = new Set<string>()

    // Extract JSON-LD structured data
    const jsonLdMatches = Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))

    for (const match of jsonLdMatches) {
      try {
        const jsonData = JSON.parse(match[1])

        // Handle both single events and arrays
        const eventList = Array.isArray(jsonData) ? jsonData : [jsonData]

        for (const item of eventList) {
          if (item['@type'] !== 'MusicEvent') continue

          const event = this.parseJsonLdEvent(item, citySlug, premiumVenues)
          if (!event) continue

          // Check for duplicates
          if (seenIds.has(event.sourceId)) continue
          seenIds.add(event.sourceId)

          // Check date range
          const eventDate = new Date(event.startDate)
          if (eventDate >= now && eventDate <= maxDate) {
            events.push(event)
          }
        }
      } catch {
        // Skip invalid JSON
      }
    }

    // Also try to parse from HTML if JSON-LD didn't yield results
    if (events.length === 0) {
      const htmlEvents = this.parseHtmlEvents(html, citySlug, premiumVenues, now, maxDate)
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

  private parseJsonLdEvent(
    item: any,
    citySlug: string,
    premiumVenues: string[]
  ): NormalizedEvent | null {
    const name = item.name
    if (!name) return null

    const startDate = item.startDate
    if (!startDate) return null

    const url = item.url || ''
    const venue = item.location?.name || ''
    const image = item.image || ''

    // Extract ID from URL
    const idMatch = url.match(/\/concerts\/(\d+)/)
    const eventId = idMatch ? idMatch[1] : `songkick-${Date.now()}-${Math.random()}`

    // Build description
    let description = `${name} at ${venue}.`
    if (item.performer && Array.isArray(item.performer)) {
      const performers = item.performer.map((p: any) => p.name).filter(Boolean)
      if (performers.length > 1) {
        description += ` With ${performers.slice(1).join(', ')}.`
      }
    }

    // Calculate relevance score
    let relevanceScore = 65 // Base for Songkick

    // Boost for premium venues
    const venueLower = venue.toLowerCase()
    if (premiumVenues.some(pv => venueLower.includes(pv))) {
      relevanceScore += 20
    }

    // Boost for soon events
    const daysUntil = (new Date(startDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 10
    else if (daysUntil <= 14) relevanceScore += 5

    // City name mapping
    const cityNames: Record<string, string> = {
      'chicago': 'Chicago',
      'seattle': 'Seattle',
      'portland': 'Portland',
      'denver': 'Denver',
      'phoenix': 'Phoenix',
      'dallas': 'Dallas',
      'minneapolis': 'Minneapolis',
      'salt-lake-city': 'Salt Lake City',
      'raleigh': 'Raleigh',
      'tampa': 'Tampa',
      'anchorage': 'Anchorage',
      'colorado-springs': 'Colorado Springs',
    }

    return {
      source: 'venue-scraper',
      sourceId: `songkick-${eventId}`,
      title: name,
      description: this.truncateDescription(description),
      url: url.startsWith('http') ? url : `https://www.songkick.com${url}`,
      startDate,
      venue,
      city: cityNames[citySlug] || citySlug,
      category: 'concerts',
      isFree: false,
      image: image ? { url: image } : undefined,
      tags: ['music', 'live', 'concert'],
      relevanceScore: Math.min(100, Math.round(relevanceScore)),
    }
  }

  private parseHtmlEvents(
    html: string,
    citySlug: string,
    premiumVenues: string[],
    now: Date,
    maxDate: Date
  ): NormalizedEvent[] {
    const events: NormalizedEvent[] = []
    const seenIds = new Set<string>()

    // Pattern for concert URLs: /concerts/12345-artist-name-at-venue
    const concertPattern = /href="(\/concerts\/(\d+)-[^"]+)"/g
    let match

    while ((match = concertPattern.exec(html)) !== null) {
      const path = match[1]
      const eventId = match[2]

      if (seenIds.has(eventId)) continue
      seenIds.add(eventId)

      // Extract context around the link
      const contextStart = Math.max(0, match.index - 500)
      const contextEnd = Math.min(html.length, match.index + 1000)
      const context = html.substring(contextStart, contextEnd)

      // Try to extract title from context
      const titleMatch = context.match(/<a[^>]*href="[^"]*\/concerts\/[^"]*"[^>]*>([^<]+)<\/a>/i)
      const title = titleMatch ? this.stripHtml(titleMatch[1]) : ''

      if (!title) continue

      // Try to extract venue
      const venueMatch = context.match(/at\s+([^<,]+)/i) || path.match(/-at-([^/]+)$/)
      let venue = venueMatch ? this.stripHtml(venueMatch[1]).replace(/-/g, ' ') : ''
      venue = venue.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')

      // Try to extract date
      const dateMatch = context.match(/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})/)
      const startDate = dateMatch ? dateMatch[1] : this.toIsoDateTime(new Date().toISOString().split('T')[0])

      // Check date range
      const eventDate = new Date(startDate)
      if (eventDate < now || eventDate > maxDate) continue

      // Calculate relevance
      let relevanceScore = 60
      const venueLower = venue.toLowerCase()
      if (premiumVenues.some(pv => venueLower.includes(pv))) {
        relevanceScore += 20
      }

      const daysUntil = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      if (daysUntil <= 7) relevanceScore += 10
      else if (daysUntil <= 14) relevanceScore += 5

      const cityNames: Record<string, string> = {
        'chicago': 'Chicago',
        'seattle': 'Seattle',
        'portland': 'Portland',
        'denver': 'Denver',
        'phoenix': 'Phoenix',
        'dallas': 'Dallas',
        'minneapolis': 'Minneapolis',
        'salt-lake-city': 'Salt Lake City',
        'raleigh': 'Raleigh',
        'tampa': 'Tampa',
        'anchorage': 'Anchorage',
        'colorado-springs': 'Colorado Springs',
      }

      events.push({
        source: 'venue-scraper',
        sourceId: `songkick-${eventId}`,
        title,
        description: `${title} at ${venue}.`,
        url: `https://www.songkick.com${path}`,
        startDate,
        venue,
        city: cityNames[citySlug] || citySlug,
        category: 'concerts',
        isFree: false,
        tags: ['music', 'live', 'concert'],
        relevanceScore: Math.min(100, Math.round(relevanceScore)),
      })
    }

    return events
  }
}
