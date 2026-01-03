/**
 * Collection Query API
 *
 * Provides functions to load city collections dynamically.
 * Supports both monolithic city files and modular collection structure.
 */

import { getAllCities, getCity } from '@/data/cities'
import type { ContentItem } from '@/types/content'

export type CollectionType =
  | 'curiosities'
  | 'dark-history'
  | 'hidden-gems'
  | 'bars'
  | 'restaurants'
  | 'coffee-shops'
  | 'lost-and-loved'
  | 'scenes'
  | 'events'
  | 'iconic-spots'

/**
 * Get a specific collection for a city
 *
 * First tries to load from modular structure (src/data/cities/{city}/collections/{collection}.ts)
 * Falls back to extracting from monolithic city file if modular version doesn't exist
 */
export async function getCityCollection<T extends ContentItem>(
  citySlug: string,
  collectionType: CollectionType
): Promise<T[]> {
  try {
    // Try loading from modular structure first
    const collection = await import(`@/data/cities/${citySlug}/collections/${collectionType}`)
    return collection.default || collection[toCamelCase(collectionType)] || []
  } catch (err) {
    // Fall back to extracting from monolithic city file
    const city = await getCity(citySlug)
    if (!city) return []

    // Find the section with this collection type
    const section = city.content.find((item) => {
      return item.id === collectionType && 'items' in item
    })

    if (section && 'items' in section) {
      return section.items as T[]
    }

    return []
  }
}

/**
 * Get all items of a specific type across all cities
 *
 * Useful for global category pages (e.g., /category/bars shows all bars from all cities)
 */
export async function getGlobalCollection<T extends ContentItem>(
  collectionType: CollectionType,
  options?: {
    limit?: number
    offset?: number
    filterBy?: (item: T) => boolean
  }
): Promise<Array<{ citySlug: string; cityName: string; item: T }>> {
  const cities = await getAllCities()
  const results: Array<{ citySlug: string; cityName: string; item: T }> = []

  for (const city of cities) {
    try {
      const items = await getCityCollection<T>(city.slug, collectionType)

      for (const item of items) {
        // Skip ad content items
        if ('type' in item && item.type === 'ad') continue

        // Apply optional filter
        if (options?.filterBy && !options.filterBy(item)) continue

        results.push({
          citySlug: city.slug,
          cityName: city.name,
          item,
        })
      }
    } catch (err) {
      console.warn(`Failed to load ${collectionType} for ${city.slug}:`, err)
    }
  }

  // Apply pagination
  const start = options?.offset || 0
  const end = options?.limit ? start + options.limit : undefined

  return results.slice(start, end)
}

/**
 * Get collection count for a city
 */
export async function getCollectionCount(
  citySlug: string,
  collectionType: CollectionType
): Promise<number> {
  const items = await getCityCollection(citySlug, collectionType)
  // Filter out ad items
  return items.filter((item) => !('type' in item && item.type === 'ad')).length
}

/**
 * Helper: Convert kebab-case to camelCase
 */
function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}
