/**
 * Viator Partner API client
 * Docs: https://docs.viator.com/partner-api/
 */

import type {
  ViatorProduct,
  ViatorSearchParams,
  ViatorDestination,
  NormalizedTour,
  TourCategory,
} from './types'

const VIATOR_API_BASE = 'https://api.viator.com/partner'

// Known destination IDs (verified via Viator URLs: viator.com/Chicago/d673)
const DESTINATION_IDS: Record<string, number> = {
  chicago: 673,
  // Add more cities as we expand
  // Minneapolis: TBD
  // Denver: TBD
}

export class ViatorClient {
  private apiKey: string

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('Viator API key is required')
    }
    this.apiKey = apiKey
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${VIATOR_API_BASE}${endpoint}`

    const response = await fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json;version=2.0',
        'Accept-Language': 'en-US',
        'exp-api-key': this.apiKey,
        ...options?.headers,
      },
      // Use Next.js built-in fetch caching - cache for 1 hour
      next: { revalidate: 3600 },
    } as RequestInit)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Viator API error:', response.status, errorText)
      throw new Error(`Viator API error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  /**
   * Search for products/tours by destination
   */
  async searchProducts(params: ViatorSearchParams): Promise<ViatorProduct[]> {
    const body: Record<string, unknown> = {
      filtering: {
        destination: params.destId.toString(),
      },
      pagination: {
        count: params.count || 20,
      },
      currency: params.currency || 'USD',
    }

    if (params.startDate && params.endDate) {
      body.filtering = {
        ...body.filtering,
        startDate: params.startDate,
        endDate: params.endDate,
      }
    }

    if (params.tags && params.tags.length > 0) {
      body.filtering = {
        ...body.filtering,
        tags: params.tags,
      }
    }

    if (params.cursor) {
      body.pagination = {
        ...body.pagination,
        cursor: params.cursor,
      }
    }

    const response = await this.fetch<{ products: ViatorProduct[] }>('/products/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    return response.products || []
  }

  /**
   * Get detailed product information
   */
  async getProduct(productCode: string): Promise<ViatorProduct | null> {
    try {
      const response = await this.fetch<ViatorProduct>(`/products/${productCode}`)
      return response
    } catch (error) {
      console.error(`Error fetching product ${productCode}:`, error)
      return null
    }
  }

  /**
   * Search destinations to find destination IDs
   */
  async searchDestinations(query: string): Promise<ViatorDestination[]> {
    const response = await this.fetch<{ destinations: ViatorDestination[] }>(
      `/destinations/search?text=${encodeURIComponent(query)}`
    )
    return response.destinations || []
  }

  /**
   * Get destination ID for a city
   */
  getDestinationId(citySlug: string): number | null {
    return DESTINATION_IDS[citySlug.toLowerCase()] || null
  }

  /**
   * Format duration from minutes to human-readable
   */
  private formatDuration(product: ViatorProduct): string {
    if (!product.duration) return 'Varies'

    const fixed = product.duration.fixedDurationInMinutes
    if (fixed) {
      if (fixed < 60) return `${fixed} min`
      const hours = Math.floor(fixed / 60)
      const mins = fixed % 60
      return mins > 0 ? `${hours}h ${mins}m` : `${hours} hour${hours > 1 ? 's' : ''}`
    }

    const from = product.duration.variableDurationFromMinutes
    const to = product.duration.variableDurationToMinutes
    if (from && to) {
      const fromHours = Math.round(from / 60)
      const toHours = Math.round(to / 60)
      return `${fromHours}-${toHours} hours`
    }

    return 'Varies'
  }

  /**
   * Infer category from product title and tags
   */
  private inferCategory(product: ViatorProduct): TourCategory {
    const title = product.title.toLowerCase()
    const desc = (product.description || '').toLowerCase()
    const combined = title + ' ' + desc

    if (combined.includes('ghost') || combined.includes('haunted') || combined.includes('paranormal')) {
      return 'ghost-tour'
    }
    if (combined.includes('architecture') || combined.includes('skyline')) {
      return 'architecture'
    }
    if (combined.includes('food') || combined.includes('culinary') || combined.includes('tasting')) {
      return 'food-tour'
    }
    if (combined.includes('outdoor') || combined.includes('kayak') || combined.includes('bike')) {
      return 'outdoor'
    }
    if (combined.includes('nightlife') || combined.includes('bar') || combined.includes('pub crawl')) {
      return 'nightlife'
    }
    if (combined.includes('history') || combined.includes('historical')) {
      return 'history'
    }
    if (combined.includes('museum') || combined.includes('art') || combined.includes('cultural')) {
      return 'culture'
    }
    if (combined.includes('city') || combined.includes('sightseeing') || combined.includes('walking')) {
      return 'city-tour'
    }

    return 'other'
  }

  /**
   * Build affiliate URL with tracking
   */
  private buildAffiliateUrl(product: ViatorProduct): string {
    // Viator deep link format - the productUrl from API should contain affiliate tracking
    // If not, we'll construct one
    if (product.productUrl) {
      return product.productUrl
    }
    // Fallback to direct Viator link
    return `https://www.viator.com/tours/${product.productCode}`
  }

  /**
   * Normalize Viator product to our internal format
   */
  normalizeProduct(product: ViatorProduct): NormalizedTour {
    const price = product.pricing?.summary?.fromPrice || 0
    const currency = product.pricing?.currency || 'USD'

    // Get the best image
    let imageSrc = ''
    if (product.images && product.images.length > 0) {
      const coverImage = product.images.find((img) => img.isCover) || product.images[0]
      // Get a medium-sized variant
      if (coverImage.variants && coverImage.variants.length > 0) {
        const variant = coverImage.variants.find((v) => v.width >= 400 && v.width <= 800) ||
          coverImage.variants[0]
        imageSrc = variant.url
      } else {
        imageSrc = coverImage.imageSource
      }
    }

    return {
      id: product.productCode,
      productCode: product.productCode,
      title: product.title,
      description: product.description || '',
      shortDescription: product.shortDescription || product.description?.slice(0, 150) + '...' || '',
      duration: this.formatDuration(product),
      price: {
        amount: price,
        currency,
        formatted: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency,
        }).format(price),
      },
      rating: product.reviews?.combinedAverageRating || 0,
      reviewCount: product.reviews?.totalReviews || 0,
      image: {
        src: imageSrc,
        alt: product.title,
      },
      category: this.inferCategory(product),
      affiliateUrl: this.buildAffiliateUrl(product),
      highlights: product.inclusions?.slice(0, 4),
    }
  }

  /**
   * Fetch and normalize tours for a city
   */
  async fetchTours(
    citySlug: string,
    options?: {
      category?: TourCategory
      count?: number
    }
  ): Promise<NormalizedTour[]> {
    const destId = this.getDestinationId(citySlug)

    if (!destId) {
      // City doesn't have Viator tours configured yet
      return []
    }

    const products = await this.searchProducts({
      destId,
      count: options?.count || 20,
    })

    let normalized = products.map((p) => this.normalizeProduct(p))

    // Filter by category if specified
    if (options?.category) {
      normalized = normalized.filter((t) => t.category === options.category)
    }

    return normalized
  }
}

/**
 * Create a Viator client instance
 */
export function createViatorClient(): ViatorClient {
  const apiKey = process.env.VIATOR_API_KEY

  if (!apiKey) {
    throw new Error('VIATOR_API_KEY environment variable is not set')
  }

  return new ViatorClient(apiKey)
}

/**
 * Get tours for a city (uses Next.js fetch caching - 1 hour)
 */
export async function getCityTours(
  citySlug: string,
  options?: {
    category?: TourCategory
    count?: number
  }
): Promise<NormalizedTour[]> {
  try {
    const client = createViatorClient()
    return await client.fetchTours(citySlug, options)
  } catch (error) {
    console.error('[Viator] Error fetching city tours:', error)
    return []
  }
}
