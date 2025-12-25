/**
 * Eventbrite API client
 * Docs: https://www.eventbrite.com/platform/api
 */

import type { EventbriteResponse, EventbriteEvent, NormalizedEvent } from './api-types'

const EVENTBRITE_API_BASE = 'https://www.eventbriteapi.com/v3'

export class EventbriteClient {
  private token: string

  constructor(token: string) {
    if (!token) {
      throw new Error('Eventbrite API token is required')
    }
    this.token = token
  }

  /**
   * Search for events by location
   */
  async searchEvents(params: {
    locationAddress: string
    locationWithin?: string // e.g., "10mi"
    startDateRangeStart?: string
    startDateRangeEnd?: string
    pageSize?: number
    sortBy?: 'date' | 'distance' | 'best'
  }): Promise<EventbriteEvent[]> {
    const queryParams = new URLSearchParams({
      'location.address': params.locationAddress,
      'location.within': params.locationWithin || '25mi',
      expand: 'venue,logo,category,format',
      'page_size': (params.pageSize || 50).toString(),
      'sort_by': params.sortBy || 'date',
    })

    if (params.startDateRangeStart) {
      queryParams.set('start_date.range_start', params.startDateRangeStart)
    }

    if (params.startDateRangeEnd) {
      queryParams.set('start_date.range_end', params.startDateRangeEnd)
    }

    const url = `${EVENTBRITE_API_BASE}/events/search/?${queryParams}`

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Eventbrite API error: ${response.status} ${response.statusText}`)
      }

      const data: EventbriteResponse = await response.json()

      return data.events || []
    } catch (error) {
      console.error('Error fetching from Eventbrite:', error)
      throw error
    }
  }

  /**
   * Normalize Eventbrite event to common format
   */
  normalizeEvent(event: EventbriteEvent): NormalizedEvent {
    // Extract description (truncate if too long)
    let description = event.description?.text || event.summary || event.name.text

    if (description.length > 300) {
      description = description.substring(0, 297) + '...'
    }

    // Determine category based on event properties
    let category: string | undefined = 'event'

    if (event.name.text.toLowerCase().includes('market') || event.name.text.toLowerCase().includes('fair')) {
      category = 'seasonal'
    } else if (event.name.text.toLowerCase().includes('pop-up') || event.name.text.toLowerCase().includes('popup')) {
      category = 'popup'
    }

    // Extract tags
    const tags: string[] = []
    if (event.is_free) tags.push('free')
    if (event.online_event) tags.push('online')
    if (event.format_id) tags.push('formatted')

    // Add category tags based on name
    const nameLower = event.name.text.toLowerCase()
    if (nameLower.includes('music') || nameLower.includes('concert')) tags.push('music')
    if (nameLower.includes('food') || nameLower.includes('dining')) tags.push('food')
    if (nameLower.includes('art') || nameLower.includes('gallery')) tags.push('art')
    if (nameLower.includes('family') || nameLower.includes('kids')) tags.push('family-friendly')
    if (nameLower.includes('outdoor') || nameLower.includes('park')) tags.push('outdoor')

    // Calculate relevance score
    let relevanceScore = 50

    // Boost recent events
    const daysUntil = (new Date(event.start.local).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 20
    else if (daysUntil <= 14) relevanceScore += 10

    // Boost free events
    if (event.is_free) relevanceScore += 15

    // Boost events with logos/images
    if (event.logo?.url) relevanceScore += 5

    // Boost listed and public events
    if (event.listed && event.privacy_setting === 'public') relevanceScore += 10

    return {
      source: 'eventbrite',
      sourceId: event.id,
      title: event.name.text,
      description,
      url: event.url,
      startDate: event.start.local,
      endDate: event.end.local,
      venue: event.venue?.name,
      city: event.venue?.address?.city || '',
      category,
      isFree: event.is_free,
      image: event.logo?.original
        ? {
            url: event.logo.original.url,
            width: event.logo.original.width,
            height: event.logo.original.height,
          }
        : event.logo?.url
          ? {
              url: event.logo.url,
            }
          : undefined,
      tags,
      relevanceScore: Math.min(100, relevanceScore),
    }
  }

  /**
   * Fetch and normalize events for a city
   */
  async fetchNormalizedEvents(city: string, limit: number = 50): Promise<NormalizedEvent[]> {
    // Get events starting from today
    const startDateRangeStart = new Date().toISOString()

    // Get events up to 60 days from now
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 60)
    const startDateRangeEnd = endDate.toISOString()

    const events = await this.searchEvents({
      locationAddress: city,
      locationWithin: '25mi',
      startDateRangeStart,
      startDateRangeEnd,
      pageSize: limit,
      sortBy: 'date',
    })

    return events.map((event) => this.normalizeEvent(event))
  }
}

/**
 * Create an Eventbrite client instance
 */
export function createEventbriteClient(): EventbriteClient {
  const token = process.env.EVENTBRITE_API_TOKEN

  if (!token) {
    throw new Error('EVENTBRITE_API_TOKEN environment variable is not set')
  }

  return new EventbriteClient(token)
}
