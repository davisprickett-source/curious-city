/**
 * Ticketmaster Discovery API client
 * Docs: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
 */

import type { TicketmasterResponse, TicketmasterEvent, NormalizedEvent } from './api-types'

const TICKETMASTER_API_BASE = 'https://app.ticketmaster.com/discovery/v2'

export class TicketmasterClient {
  private apiKey: string

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('Ticketmaster API key is required')
    }
    this.apiKey = apiKey
  }

  /**
   * Search for events in a city
   */
  async searchEvents(params: {
    city: string
    stateCode?: string
    startDateTime?: string
    endDateTime?: string
    size?: number
    sort?: 'date,asc' | 'date,desc' | 'relevance,desc'
  }): Promise<TicketmasterEvent[]> {
    const queryParams = new URLSearchParams({
      apikey: this.apiKey,
      city: params.city,
      size: (params.size || 50).toString(),
      sort: params.sort || 'date,asc',
    })

    if (params.stateCode) {
      queryParams.set('stateCode', params.stateCode)
    }

    if (params.startDateTime) {
      queryParams.set('startDateTime', params.startDateTime)
    }

    if (params.endDateTime) {
      queryParams.set('endDateTime', params.endDateTime)
    }

    const url = `${TICKETMASTER_API_BASE}/events.json?${queryParams}`

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Ticketmaster API error: ${response.status} ${response.statusText}`)
      }

      const data: TicketmasterResponse = await response.json()

      return data._embedded?.events || []
    } catch (error) {
      console.error('Error fetching from Ticketmaster:', error)
      throw error
    }
  }

  /**
   * Normalize Ticketmaster event to common format
   */
  normalizeEvent(event: TicketmasterEvent, city: string): NormalizedEvent {
    const venue = event._embedded?.venues?.[0]
    const classification = event.classifications?.[0]
    const image = event.images?.find((img) => img.width >= 800)

    // Extract start/end dates
    const startDate = event.dates.start.dateTime || `${event.dates.start.localDate}T${event.dates.start.localTime || '00:00:00'}`
    const endDate = event.dates.end
      ? event.dates.end.dateTime || `${event.dates.end.localDate}T${event.dates.end.localTime || '23:59:59'}`
      : undefined

    // Determine category
    const segment = classification?.segment?.name?.toLowerCase()
    const genre = classification?.genre?.name?.toLowerCase()
    let category: string | undefined

    if (segment === 'music' || genre?.includes('music')) {
      category = 'event'
    } else if (segment === 'sports') {
      category = 'event'
    } else if (segment === 'arts & theatre') {
      category = 'event'
    }

    // Extract tags
    const tags: string[] = []
    if (segment) tags.push(segment)
    if (genre) tags.push(genre)
    if (event.priceRanges?.[0]?.min === 0) tags.push('free')

    // Calculate relevance score (basic)
    let relevanceScore = 50

    // Boost recent events
    const daysUntil = (new Date(startDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 20
    else if (daysUntil <= 14) relevanceScore += 10

    // Boost free events
    if (tags.includes('free')) relevanceScore += 10

    // Boost music and arts
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
      category,
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

  /**
   * Fetch and normalize events for a city
   */
  async fetchNormalizedEvents(city: string, stateCode?: string, limit: number = 50): Promise<NormalizedEvent[]> {
    // Get events starting from today
    const startDateTime = new Date().toISOString()

    // Get events up to 60 days from now
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 60)
    const endDateTime = endDate.toISOString()

    const events = await this.searchEvents({
      city,
      stateCode,
      startDateTime,
      endDateTime,
      size: limit,
      sort: 'date,asc',
    })

    return events.map((event) => this.normalizeEvent(event, city))
  }
}

/**
 * Create a Ticketmaster client instance
 */
export function createTicketmasterClient(): TicketmasterClient {
  const apiKey = process.env.TICKETMASTER_API_KEY

  if (!apiKey) {
    throw new Error('TICKETMASTER_API_KEY environment variable is not set')
  }

  return new TicketmasterClient(apiKey)
}
