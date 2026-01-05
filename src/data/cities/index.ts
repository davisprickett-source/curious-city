import { CityData } from '@/types/content'

// ==================================================
// DYNAMIC CITY LOADING - Only load cities when needed
// This reduces initial bundle size by ~2MB
// ==================================================

// City slugs are static - no need to dynamically import this
const CITY_SLUGS = [
  'minneapolis',
  'raleigh',
  'chicago',
  'salt-lake-city',
  'colorado-springs',
  'dallas',
  'anchorage',
  'fargo',
  'denver',
  'tampa',
  'phoenix',
  'portland',
] as const

// Static city metadata for client components (name + slug only, no content)
export const CITY_METADATA = [
  { slug: 'minneapolis', name: 'Minneapolis' },
  { slug: 'raleigh', name: 'Raleigh' },
  { slug: 'chicago', name: 'Chicago' },
  { slug: 'salt-lake-city', name: 'Salt Lake City' },
  { slug: 'colorado-springs', name: 'Colorado Springs' },
  { slug: 'dallas', name: 'Dallas' },
  { slug: 'anchorage', name: 'Anchorage' },
  { slug: 'fargo', name: 'Fargo' },
  { slug: 'denver', name: 'Denver' },
  { slug: 'tampa', name: 'Tampa' },
  { slug: 'phoenix', name: 'Phoenix' },
  { slug: 'portland', name: 'Portland' },
] as const

// Dynamic import functions for each city
const cityLoaders: Record<string, () => Promise<CityData>> = {
  'minneapolis': () => import('./minneapolis').then(m => m.minneapolis),
  'raleigh': () => import('./raleigh').then(m => m.raleigh),
  'chicago': () => import('./chicago').then(m => m.chicago),
  'salt-lake-city': () => import('./salt-lake-city').then(m => m.salt_lake_city),
  'colorado-springs': () => import('./colorado-springs').then(m => m.colorado_springs),
  'dallas': () => import('./dallas').then(m => m.dallas),
  'anchorage': () => import('./anchorage').then(m => m.anchorage),
  'fargo': () => import('./fargo').then(m => m.fargo),
  'denver': () => import('./denver').then(m => m.denver),
  'tampa': () => import('./tampa').then(m => m.tampa),
  'phoenix': () => import('./phoenix').then(m => m.phoenix),
  'portland': () => import('./portland').then(m => m.portland),
}

// Cache for loaded cities to avoid re-importing
const cityCache = new Map<string, CityData>()

// ==================================================
// CORE FUNCTIONS - Now async with dynamic loading
// ==================================================

export async function getCity(slug: string): Promise<CityData | null> {
  // Check cache first
  if (cityCache.has(slug)) {
    return cityCache.get(slug)!
  }

  // Load city dynamically
  const loader = cityLoaders[slug]
  if (!loader) return null

  const city = await loader()
  cityCache.set(slug, city)
  return city
}

export function getAllCitySlugs(): string[] {
  return [...CITY_SLUGS]
}

// Note: This loads ALL cities - use sparingly!
// Only use for category pages that need all cities
export async function getAllCities(): Promise<CityData[]> {
  const cities = await Promise.all(
    CITY_SLUGS.map(slug => getCity(slug))
  )
  return cities.filter((c): c is CityData => c !== null)
}

// ==================================================
// HELPER FUNCTIONS
// ==================================================

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

// ==================================================
// GLOBAL QUERIES - Load all cities (use sparingly!)
// ==================================================

// Get all hidden gems across all cities
export async function getAllHiddenGems() {
  const allCities = await getAllCities()
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
export async function getAllBestOf(category?: string) {
  const allCities = await getAllCities()
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
export async function getAllDarkHistory(category?: string) {
  const allCities = await getAllCities()
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

// Get all lost and loved items across all cities
export async function getAllLostAndLoved() {
  const allCities = await getAllCities()
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

// ==================================================
// CITY-SPECIFIC QUERIES - Only load one city
// ==================================================

// Get curiosities for a specific city
export async function getCityCuriosities(slug: string) {
  const city = await getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'curiosity')
}

// Get hidden gems for a specific city
export async function getCityHiddenGems(slug: string) {
  const city = await getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'hidden-gem')
}

// Get local favorites (iconic spots) for a specific city
export async function getCityLocalFavorites(slug: string) {
  const city = await getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'iconic-spot')
}

// Get best-of lists for a specific city, optionally filtered by category
export async function getCityBestOf(slug: string, category?: string) {
  const city = await getCity(slug)
  if (!city) return []
  const bestOfs = findItemsOfType<any>(city.content, 'best-of')
  if (category) {
    return bestOfs.filter((b) => b.category === category)
  }
  return bestOfs
}

// Get dark history for a specific city
export async function getCityDarkHistory(slug: string) {
  const city = await getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'dark-history')
}

// Get dark history section with intro
export async function getCityDarkHistorySection(slug: string) {
  const city = await getCity(slug)
  if (!city) return null

  // Find the dark-history section
  const findSection = (items: any[]): any => {
    for (const item of items) {
      if (item.type === 'section' && item.id?.includes('dark-history')) {
        return item
      }
      if (item.items && Array.isArray(item.items)) {
        const found = findSection(item.items)
        if (found) return found
      }
    }
    return null
  }

  return findSection(city.content)
}

// Get hidden gems section with intro
export async function getCityHiddenGemsSection(slug: string) {
  const city = await getCity(slug)
  if (!city) return null

  // Find the hidden-gems section
  const findSection = (items: any[]): any => {
    for (const item of items) {
      if (item.type === 'section' && item.id?.includes('hidden-gems')) {
        return item
      }
      if (item.items && Array.isArray(item.items)) {
        const found = findSection(item.items)
        if (found) return found
      }
    }
    return null
  }

  return findSection(city.content)
}

// Get lost and loved section with intro
export async function getCityLostAndLovedSection(slug: string) {
  const city = await getCity(slug)
  if (!city) return null

  // Find the lost-and-loved section
  const findSection = (items: any[]): any => {
    for (const item of items) {
      if (item.type === 'section' && item.id?.includes('lost-and-loved')) {
        return item
      }
      if (item.items && Array.isArray(item.items)) {
        const found = findSection(item.items)
        if (found) return found
      }
    }
    return null
  }

  return findSection(city.content)
}

// Get events for a specific city
export async function getCityEvents(slug: string) {
  const city = await getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'events')
}

// Get scenes (visual media) for a specific city
export async function getCityScenes(slug: string, category?: string) {
  const city = await getCity(slug)
  if (!city) return []
  const scenes = findItemsOfType<any>(city.content, 'scene')
  if (category) {
    return scenes.filter((s) => s.category === category)
  }
  return scenes
}

// Get lost and loved items for a specific city
export async function getCityLostAndLoved(slug: string) {
  const city = await getCity(slug)
  if (!city) return []
  return findItemsOfType<any>(city.content, 'lost-and-loved')
}
