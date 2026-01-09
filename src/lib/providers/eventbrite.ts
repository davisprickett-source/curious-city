/**
 * Eventbrite event provider
 */

import { BaseProvider } from './base'
import type { ProviderResult, FetchOptions } from './types'
import type { NormalizedEvent, EventbriteEvent, EventbriteResponse } from '../api-types'
import { getCityEventConfig } from '../city-event-configs'

const EVENTBRITE_API_BASE = 'https://www.eventbriteapi.com/v3'

export class EventbriteProvider extends BaseProvider {
  constructor() {
    super({
      name: 'Eventbrite',
      slug: 'eventbrite',
      sourceType: 'eventbrite',
      rateLimit: {
        requestsPerMinute: 10,
        delayMs: 6000,
      },
      timeout: 30000,
      retries: 2,
    })
  }

  private getToken(): string | undefined {
    return process.env.EVENTBRITE_API_TOKEN
  }

  async isAvailable(): Promise<boolean> {
    return !!this.getToken()
  }

  async fetchEvents(citySlug: string, options?: FetchOptions): Promise<ProviderResult> {
    const startTime = Date.now()
    const token = this.getToken()

    if (!token) {
      return this.createEmptyResult('No API token configured')
    }

    const config = getCityEventConfig(citySlug)
    if (!config?.api.eventbrite) {
      return this.createEmptyResult(`City ${citySlug} not configured for Eventbrite`)
    }

    try {
      const events = await this.withRetry(async () => {
        return this.fetchFromApi(
          token,
          config.api.eventbrite.locationAddress,
          config.api.eventbrite.locationWithin,
          options
        )
      })

      const normalized = events.map((event) => this.normalizeEvent(event))

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
    token: string,
    locationAddress: string,
    locationWithin?: string,
    options?: FetchOptions
  ): Promise<EventbriteEvent[]> {
    const startDate = options?.startDate || new Date()
    const endDate = options?.endDate || new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)
    const limit = options?.limit || 100

    const queryParams = new URLSearchParams({
      'location.address': locationAddress,
      'location.within': locationWithin || '25mi',
      expand: 'venue,logo,category,format',
      page_size: Math.min(limit, 200).toString(),
      sort_by: 'date',
      'start_date.range_start': startDate.toISOString(),
      'start_date.range_end': endDate.toISOString(),
    })

    const url = `${EVENTBRITE_API_BASE}/events/search/?${queryParams}`

    const response = await this.withTimeout(async () => {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) {
        throw new Error(`Eventbrite API error: ${res.status} ${res.statusText}`)
      }

      return res.json() as Promise<EventbriteResponse>
    })

    return response.events || []
  }

  private normalizeEvent(event: EventbriteEvent): NormalizedEvent {
    // Extract description (truncate if too long)
    let description = event.description?.text || event.summary || event.name.text
    if (description.length > 300) {
      description = description.substring(0, 297) + '...'
    }

    // Build tags
    const tags: string[] = []
    if (event.is_free) tags.push('free')
    if (event.online_event) tags.push('online')

    // Add category tags based on name
    const nameLower = event.name.text.toLowerCase()
    if (nameLower.includes('music') || nameLower.includes('concert')) tags.push('music')
    if (nameLower.includes('food') || nameLower.includes('dining')) tags.push('food')
    if (nameLower.includes('art') || nameLower.includes('gallery')) tags.push('art')
    if (nameLower.includes('family') || nameLower.includes('kids')) tags.push('family-friendly')
    if (nameLower.includes('outdoor') || nameLower.includes('park')) tags.push('outdoor')
    if (nameLower.includes('comedy') || nameLower.includes('standup')) tags.push('comedy')
    if (nameLower.includes('workshop') || nameLower.includes('class')) tags.push('workshop')
    if (nameLower.includes('networking') || nameLower.includes('meetup')) tags.push('networking')

    // Calculate relevance score
    let relevanceScore = 50
    const daysUntil = (new Date(event.start.local).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    if (daysUntil <= 7) relevanceScore += 20
    else if (daysUntil <= 14) relevanceScore += 10
    if (event.is_free) relevanceScore += 15
    if (event.logo?.url) relevanceScore += 5
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
      category: this.inferCategory(event),
      isFree: event.is_free,
      image: event.logo?.original
        ? {
            url: event.logo.original.url,
            width: event.logo.original.width,
            height: event.logo.original.height,
          }
        : event.logo?.url
          ? { url: event.logo.url }
          : undefined,
      tags,
      relevanceScore: Math.min(100, relevanceScore),
    }
  }

  private inferCategory(event: EventbriteEvent): string | undefined {
    const name = event.name.text.toLowerCase()

    if (name.includes('concert') || name.includes('live music') || name.includes('band')) {
      return 'concerts'
    }
    if (name.includes('comedy') || name.includes('standup') || name.includes('improv')) {
      return 'comedy'
    }
    if (name.includes('art') || name.includes('gallery') || name.includes('exhibition')) {
      return 'art'
    }
    if (name.includes('theater') || name.includes('theatre') || name.includes('play')) {
      return 'theater'
    }
    if (name.includes('market') || name.includes('fair') || name.includes('festival')) {
      return 'markets'
    }
    if (name.includes('food') || name.includes('tasting') || name.includes('dining')) {
      return 'food-drink'
    }
    if (name.includes('club') || name.includes('dj') || name.includes('dance')) {
      return 'nightlife'
    }
    if (name.includes('sport') || name.includes('game') || name.includes('match')) {
      return 'sports'
    }

    return undefined
  }
}
