/**
 * Ticketmaster event provider
 */

import { BaseProvider } from './base'
import type { ProviderResult, FetchOptions } from './types'
import type { NormalizedEvent, TicketmasterEvent, TicketmasterResponse } from '../api-types'
import { getCityEventConfig } from '../city-event-configs'

const TICKETMASTER_API_BASE = 'https://app.ticketmaster.com/discovery/v2'

export class TicketmasterProvider extends BaseProvider {
  constructor() {
    super({
      name: 'Ticketmaster',
      slug: 'ticketmaster',
      sourceType: 'ticketmaster',
      rateLimit: {
        requestsPerMinute: 5,
        delayMs: 12000,
      },
      timeout: 30000,
      retries: 2,
    })
  }

  private getApiKey(): string | undefined {
    return process.env.TICKETMASTER_API_KEY
  }

  async isAvailable(): Promise<boolean> {
    return !!this.getApiKey()
  }

  async fetchEvents(citySlug: string, options?: FetchOptions): Promise<ProviderResult> {
    const startTime = Date.now()
    const apiKey = this.getApiKey()

    if (!apiKey) {
      return this.createEmptyResult('No API key configured')
    }

    const config = getCityEventConfig(citySlug)
    if (!config?.api.ticketmaster) {
      return this.createEmptyResult(`City ${citySlug} not configured for Ticketmaster`)
    }

    try {
      const events = await this.withRetry(async () => {
        return this.fetchFromApi(apiKey, config.name, config.api.ticketmaster!.stateCode, options)
      })

      const normalized = events.map((event) =>
        this.normalizeEvent(event, config.name)
      )

      return this.createResult(normalized, startTime, {
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

  private async fetchFromApi(
    apiKey: string,
    city: string,
    stateCode: string,
    options?: FetchOptions
  ): Promise<TicketmasterEvent[]> {
    // Format dates for Ticketmaster (ISO 8601 without milliseconds)
    const formatDate = (date: Date): string => {
      return date.toISOString().replace(/\.\d{3}Z$/, 'Z')
    }

    const startDate = options?.startDate || new Date()
    const endDate = options?.endDate || new Date(Date.now() + 60 * 24 * 60 * 60 * 1000) // 60 days
    const limit = options?.limit || 100

    const queryParams = new URLSearchParams({
      apikey: apiKey,
      city,
      stateCode,
      startDateTime: formatDate(startDate),
      endDateTime: formatDate(endDate),
      size: Math.min(limit, 200).toString(),
      sort: 'date,asc',
    })

    const url = `${TICKETMASTER_API_BASE}/events.json?${queryParams}`

    const response = await this.withTimeout(async () => {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error(`Ticketmaster API error: ${res.status} ${res.statusText}`)
      }
      return res.json() as Promise<TicketmasterResponse>
    })

    return response._embedded?.events || []
  }

  private normalizeEvent(event: TicketmasterEvent, city: string): NormalizedEvent {
    const venue = event._embedded?.venues?.[0]
    const classification = event.classifications?.[0]
    const image = event.images?.find((img) => img.width >= 800) || event.images?.[0]

    // Extract start/end dates
    const startDate = event.dates.start.dateTime ||
      `${event.dates.start.localDate}T${event.dates.start.localTime || '00:00:00'}`

    const endDate = event.dates.end
      ? event.dates.end.dateTime ||
        `${event.dates.end.localDate}T${event.dates.end.localTime || '23:59:59'}`
      : undefined

    // Build tags
    const tags: string[] = []
    const segment = classification?.segment?.name?.toLowerCase()
    const genre = classification?.genre?.name?.toLowerCase()
    if (segment) tags.push(segment)
    if (genre && genre !== segment) tags.push(genre)
    if (event.priceRanges?.[0]?.min === 0) tags.push('free')

    // Calculate basic relevance score
    let relevanceScore = 50
    const daysUntil = (new Date(startDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 20
    else if (daysUntil <= 14) relevanceScore += 10
    if (tags.includes('free')) relevanceScore += 10
    if (segment === 'music' || segment === 'arts & theatre') relevanceScore += 10

    return {
      source: 'ticketmaster',
      sourceId: event.id,
      title: event.name,
      description: event.description || `${event.name} - Check website for details.`,
      url: event.url,
      startDate,
      endDate,
      venue: venue?.name,
      city,
      category: this.inferCategory(segment, genre),
      isFree: event.priceRanges?.[0]?.min === 0,
      price: event.priceRanges?.[0]
        ? {
            min: event.priceRanges[0].min,
            max: event.priceRanges[0].max,
            currency: event.priceRanges[0].currency,
          }
        : undefined,
      image: image
        ? {
            url: image.url,
            width: image.width,
            height: image.height,
          }
        : undefined,
      tags,
      relevanceScore: Math.min(100, relevanceScore),
    }
  }

  private inferCategory(segment?: string, genre?: string): string | undefined {
    if (!segment && !genre) return undefined

    const s = segment?.toLowerCase() || ''
    const g = genre?.toLowerCase() || ''

    if (s === 'music' || g.includes('music') || g.includes('rock') || g.includes('pop')) {
      return 'concerts'
    }
    if (s === 'sports' || g.includes('sport')) {
      return 'sports'
    }
    if (s === 'arts & theatre' || g.includes('theatre') || g.includes('theater')) {
      return 'theater'
    }
    if (g.includes('comedy') || g.includes('standup')) {
      return 'comedy'
    }

    return undefined
  }
}
