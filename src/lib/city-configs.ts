/**
 * City configurations for API queries
 *
 * This module derives API configs from the main city data to maintain
 * a single source of truth for city information.
 */

import type { CityConfig } from './api-types'
import { cities } from '@/data/cities'

// Default coordinates for cities (used when city data doesn't include them)
const defaultCoordinates: Record<string, { latitude: number; longitude: number; eventbriteCity: string }> = {
  chicago: { latitude: 41.8781, longitude: -87.6298, eventbriteCity: 'Chicago, IL' },
  denver: { latitude: 39.7392, longitude: -104.9903, eventbriteCity: 'Denver, CO' },
  portland: { latitude: 45.5152, longitude: -122.6784, eventbriteCity: 'Portland, OR' },
  minneapolis: { latitude: 44.9778, longitude: -93.265, eventbriteCity: 'Minneapolis, MN' },
  phoenix: { latitude: 33.4484, longitude: -112.074, eventbriteCity: 'Phoenix, AZ' },
  dallas: { latitude: 32.7767, longitude: -96.797, eventbriteCity: 'Dallas, TX' },
  'salt-lake-city': { latitude: 40.7608, longitude: -111.891, eventbriteCity: 'Salt Lake City, UT' },
  raleigh: { latitude: 35.7796, longitude: -78.6382, eventbriteCity: 'Raleigh, NC' },
  anchorage: { latitude: 61.2181, longitude: -149.9003, eventbriteCity: 'Anchorage, AK' },
  'colorado-springs': { latitude: 38.8339, longitude: -104.8214, eventbriteCity: 'Colorado Springs, CO' },
  fargo: { latitude: 46.8772, longitude: -96.7898, eventbriteCity: 'Fargo, ND' },
  tampa: { latitude: 27.9506, longitude: -82.4572, eventbriteCity: 'Tampa, FL' },
}

// Generate city configs from main city data
function buildCityConfigs(): Record<string, CityConfig> {
  const configs: Record<string, CityConfig> = {}

  for (const [slug, city] of Object.entries(cities)) {
    const defaults = defaultCoordinates[slug] || {}
    configs[slug] = {
      slug: city.slug,
      name: city.name,
      eventbriteCity: city.eventbriteCity || defaults.eventbriteCity || `${city.name}`,
      latitude: city.latitude || defaults.latitude,
      longitude: city.longitude || defaults.longitude,
    }
  }

  return configs
}

export const cityConfigs = buildCityConfigs()

export function getCityConfig(slug: string): CityConfig | undefined {
  return cityConfigs[slug]
}

export function getAllCityConfigs(): CityConfig[] {
  return Object.values(cityConfigs)
}
