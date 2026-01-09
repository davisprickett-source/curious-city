/**
 * Types for external event APIs
 */

// Ticketmaster API types
export interface TicketmasterEvent {
  id: string
  name: string
  description?: string
  url: string
  images?: Array<{
    url: string
    width: number
    height: number
  }>
  dates: {
    start: {
      localDate: string
      localTime?: string
      dateTime?: string
    }
    end?: {
      localDate: string
      localTime?: string
      dateTime?: string
    }
    timezone?: string
  }
  classifications?: Array<{
    segment?: { name: string }
    genre?: { name: string }
    subGenre?: { name: string }
  }>
  priceRanges?: Array<{
    type: string
    currency: string
    min: number
    max: number
  }>
  _embedded?: {
    venues?: Array<{
      name: string
      city: { name: string }
      state: { name: string }
      location?: {
        latitude: string
        longitude: string
      }
    }>
  }
}

export interface TicketmasterResponse {
  _embedded?: {
    events: TicketmasterEvent[]
  }
  page: {
    size: number
    totalElements: number
    totalPages: number
    number: number
  }
}

// Eventbrite API types
export interface EventbriteEvent {
  id: string
  name: {
    text: string
    html: string
  }
  description: {
    text: string
    html: string
  }
  url: string
  start: {
    timezone: string
    local: string
    utc: string
  }
  end: {
    timezone: string
    local: string
    utc: string
  }
  created: string
  changed: string
  published: string
  capacity?: number
  capacity_is_custom?: boolean
  status: string
  currency: string
  listed: boolean
  shareable: boolean
  online_event: boolean
  tx_time_limit: number
  hide_start_date: boolean
  hide_end_date: boolean
  locale: string
  is_locked: boolean
  privacy_setting: string
  is_series: boolean
  is_series_parent: boolean
  inventory_type: string
  is_reserved_seating: boolean
  show_pick_a_seat: boolean
  show_seatmap_thumbnail: boolean
  show_colors_in_seatmap_thumbnail: boolean
  source: string
  is_free: boolean
  version: string
  summary: string
  logo?: {
    id: string
    url: string
    original?: {
      url: string
      width: number
      height: number
    }
  }
  category_id?: string
  subcategory_id?: string
  format_id?: string
  venue?: {
    address: {
      address_1?: string
      address_2?: string
      city: string
      region: string
      postal_code?: string
      country: string
      latitude?: string
      longitude?: string
      localized_address_display: string
      localized_area_display: string
      localized_multi_line_address_display: string[]
    }
    name: string
    id: string
  }
}

export interface EventbriteResponse {
  pagination: {
    object_count: number
    page_number: number
    page_size: number
    page_count: number
    has_more_items: boolean
  }
  events: EventbriteEvent[]
}

// Event source types
export type EventSource = 'ticketmaster' | 'eventbrite' | 'manual' | 'local-blog' | 'venue-direct' | 'legacy'

// Normalized event type (common format)
export interface NormalizedEvent {
  source: EventSource
  sourceId: string
  title: string
  description: string
  url: string
  startDate: string // ISO 8601
  endDate?: string // ISO 8601
  venue?: string
  city: string
  category?: string
  isFree?: boolean
  price?: {
    min?: number
    max?: number
    currency?: string
  }
  image?: {
    url: string
    width?: number
    height?: number
  }
  tags: string[]
  relevanceScore: number // 0-100
}

// City configuration for API queries
export interface CityConfig {
  slug: string
  name: string
  // Ticketmaster uses DMA (Designated Market Area) codes
  ticketmasterDMA?: string
  // Eventbrite uses city names
  eventbriteCity: string
  // Geographic coordinates for radius searches
  latitude?: number
  longitude?: number
}
