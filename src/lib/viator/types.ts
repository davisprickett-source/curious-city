/**
 * Viator Partner API types
 * Docs: https://docs.viator.com/partner-api/
 */

// API Response wrapper
export interface ViatorResponse<T> {
  data: T
  totalCount?: number
  nextCursor?: string
}

// Destination/Location
export interface ViatorDestination {
  destinationId: number
  name: string
  type: 'CITY' | 'REGION' | 'COUNTRY'
  parentId?: number
  lookupId?: string
}

// Product (Tour/Experience)
export interface ViatorProduct {
  productCode: string
  title: string
  description: string
  shortDescription?: string
  duration?: {
    fixedDurationInMinutes?: number
    variableDurationFromMinutes?: number
    variableDurationToMinutes?: number
  }
  pricing?: {
    summary: {
      fromPrice: number
      fromPriceBeforeDiscount?: number
    }
    currency: string
  }
  images?: ViatorImage[]
  reviews?: {
    totalReviews: number
    combinedAverageRating: number
  }
  productUrl?: string
  bookingConfirmation?: {
    confirmationType: string
  }
  cancellationPolicy?: {
    type: string
    description?: string
  }
  inclusions?: string[]
  exclusions?: string[]
  additionalInfo?: string[]
  tags?: ViatorTag[]
  destinations?: ViatorDestination[]
  itinerary?: ViatorItineraryItem[]
}

export interface ViatorImage {
  imageSource: string
  caption?: string
  isCover?: boolean
  variants?: {
    url: string
    width: number
    height: number
  }[]
}

export interface ViatorTag {
  tagId: number
  name: string
  parentTagId?: number
}

export interface ViatorItineraryItem {
  pointOfInterestLocation?: {
    location: {
      name: string
    }
  }
  description?: string
  duration?: {
    fixedDurationInMinutes?: number
  }
}

// Search parameters
export interface ViatorSearchParams {
  destId: number
  startDate?: string
  endDate?: string
  currency?: string
  sortOrder?: 'TOP_SELLERS' | 'REVIEW_AVG_RATING' | 'PRICE_FROM_LOW' | 'PRICE_FROM_HIGH'
  count?: number
  cursor?: string
  tags?: number[]
}

// Availability
export interface ViatorAvailability {
  productCode: string
  bookableItems: {
    startTime?: string
    totalPrice: {
      amount: number
      currency: string
    }
    available: boolean
    travelerTypes?: {
      type: string
      count: number
      price: number
    }[]
  }[]
}

// Normalized tour for our app
export interface NormalizedTour {
  id: string
  productCode: string
  title: string
  description: string
  shortDescription: string
  duration: string // formatted, e.g. "2 hours"
  price: {
    amount: number
    currency: string
    formatted: string // e.g. "$45.00"
  }
  rating: number
  reviewCount: number
  image: {
    src: string
    alt: string
  }
  category: TourCategory
  affiliateUrl: string
  highlights?: string[]
}

export type TourCategory =
  | 'ghost-tour'
  | 'architecture'
  | 'food-tour'
  | 'city-tour'
  | 'outdoor'
  | 'culture'
  | 'history'
  | 'nightlife'
  | 'other'

// Tag IDs for filtering (will need to map these from Viator's tag system)
export const TOUR_CATEGORY_TAGS: Record<TourCategory, number[]> = {
  'ghost-tour': [], // Will populate after exploring API
  'architecture': [],
  'food-tour': [],
  'city-tour': [],
  'outdoor': [],
  'culture': [],
  'history': [],
  'nightlife': [],
  'other': [],
}

// City destination IDs (will populate as we add cities)
export const CITY_DESTINATION_IDS: Record<string, number> = {
  // Will be populated - Chicago is ~732 but need to verify
}
