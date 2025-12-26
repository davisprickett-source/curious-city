import { CityData, CitiesIndex } from '@/types/content'

import { minneapolis } from './minneapolis'
import { raleigh } from './raleigh'
import { chicago } from './chicago'
import { salt_lake_city } from './salt-lake-city'
import { colorado_springs } from './colorado-springs'
import { dallas } from './dallas'
import { anchorage } from './anchorage'
import { fargo } from './fargo'
import { denver } from './denver'
import { tampa } from './tampa'
import { phoenix } from './phoenix'
import { portland } from './portland'

// Re-export individual cities
export { minneapolis }
export { raleigh }
export { chicago }
export { salt_lake_city }
export { colorado_springs }
export { dallas }
export { anchorage }
export { fargo }
export { denver }
export { tampa }
export { phoenix }
export { portland }

// Combined cities index
export const cities: CitiesIndex = {
  'minneapolis': minneapolis,
  'raleigh': raleigh,
  'chicago': chicago,
  'salt-lake-city': salt_lake_city,
  'colorado-springs': colorado_springs,
  'dallas': dallas,
  'anchorage': anchorage,
  'fargo': fargo,
  'denver': denver,
  'tampa': tampa,
  'phoenix': phoenix,
  'portland': portland,
}

export function getCity(slug: string): CityData | null {
  return cities[slug] || null
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cities)
}

export function getAllCities(): CityData[] {
  return Object.values(cities)
}

// Helper to recursively find all items of a specific type in content
function findItemsOfType<T>(items: any[], type: string): T[] {
  const results: T[] = []

  for (const item of items) {
    if (item.type === type) {
      results.push(item as T)
    }
    // Check nested items in sections
    if (item.items && Array.isArray(item.items)) {
      results.push(...findItemsOfType<T>(item.items, type))
    }
  }

  return results
}

// Get all hidden gems across all cities
export function getAllHiddenGems() {
  const allCities = getAllCities()
  const gems: Array<{ citySlug: string; cityName: string; gem: any }> = []

  for (const city of allCities) {
    const cityGems = findItemsOfType<any>(city.content, 'hidden-gem')
    for (const gem of cityGems) {
      gems.push({
        citySlug: city.slug,
        cityName: city.name,
        gem,
      })
    }
  }

  return gems
}

// Get all best-of lists across all cities, optionally filtered by category
export function getAllBestOf(category?: string) {
  const allCities = getAllCities()
  const bestOfs: Array<{ citySlug: string; cityName: string; bestOf: any }> = []

  for (const city of allCities) {
    const cityBestOfs = findItemsOfType<any>(city.content, 'best-of')
    for (const bestOf of cityBestOfs) {
      if (!category || bestOf.category === category) {
        bestOfs.push({
          citySlug: city.slug,
          cityName: city.name,
          bestOf,
        })
      }
    }
  }

  return bestOfs
}

// Get all dark history items across all cities, optionally filtered by category
export function getAllDarkHistory(category?: string) {
  const allCities = getAllCities()
  const items: Array<{ citySlug: string; cityName: string; item: any }> = []

  for (const city of allCities) {
    const cityItems = findItemsOfType<any>(city.content, 'dark-history')
    for (const item of cityItems) {
      if (!category || item.category === category) {
        items.push({
          citySlug: city.slug,
          cityName: city.name,
          item,
        })
      }
    }
  }

  return items
}

// ============================================
// City-specific content helpers
// ============================================

// Get curiosities for a specific city
export function getCityCuriosities(slug: string) {
  const city = getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'curiosity')
}

// Get hidden gems for a specific city
export function getCityHiddenGems(slug: string) {
  const city = getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'hidden-gem')
}

// Get best-of lists for a specific city, optionally filtered by category
export function getCityBestOf(slug: string, category?: string) {
  const city = getCity(slug)
  if (!city) return []
  const bestOfs = findItemsOfType<any>(city.content, 'best-of')
  if (category) {
    return bestOfs.filter((b) => b.category === category)
  }
  return bestOfs
}

// Get dark history for a specific city
export function getCityDarkHistory(slug: string) {
  const city = getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'dark-history')
}

// Get this week / current happenings for a specific city
export function getCityThisWeek(slug: string) {
  const city = getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'this-week')
}

// Get events for a specific city
export function getCityEvents(slug: string) {
  const city = getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'events')
}

// Get scenes (visual media) for a specific city
export function getCityScenes(slug: string, category?: string) {
  const city = getCity(slug)
  if (!city) return []
  const scenes = findItemsOfType<any>(city.content, 'scene')
  if (category) {
    return scenes.filter((s) => s.category === category)
  }
  return scenes
}

// Get lost and loved items for a specific city
export function getCityLostAndLoved(slug: string) {
  const city = getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'lost-and-loved')
}

// Get all lost and loved items across all cities
export function getAllLostAndLoved() {
  const allCities = getAllCities()
  const items: Array<{ citySlug: string; cityName: string; item: any }> = []

  for (const city of allCities) {
    const cityItems = findItemsOfType<any>(city.content, 'lost-and-loved')
    for (const item of cityItems) {
      items.push({
        citySlug: city.slug,
        cityName: city.name,
        item,
      })
    }
  }

  return items
}
