/**
 * City configurations for API queries
 *
 * This module derives API configs from the main city data to maintain
 * a single source of truth for city information.
 */

import type { CityConfig } from './api-types'

// City configurations with coordinates (static data, no need to dynamically load)
const cityConfigsData: Record<string, CityConfig> = {
  chicago: { slug: 'chicago', name: 'Chicago', latitude: 41.8781, longitude: -87.6298, eventbriteCity: 'Chicago, IL' },
  denver: { slug: 'denver', name: 'Denver', latitude: 39.7392, longitude: -104.9903, eventbriteCity: 'Denver, CO' },
  portland: { slug: 'portland', name: 'Portland', latitude: 45.5152, longitude: -122.6784, eventbriteCity: 'Portland, OR' },
  minneapolis: { slug: 'minneapolis', name: 'Minneapolis', latitude: 44.9778, longitude: -93.265, eventbriteCity: 'Minneapolis, MN' },
  phoenix: { slug: 'phoenix', name: 'Phoenix', latitude: 33.4484, longitude: -112.074, eventbriteCity: 'Phoenix, AZ' },
  dallas: { slug: 'dallas', name: 'Dallas', latitude: 32.7767, longitude: -96.797, eventbriteCity: 'Dallas, TX' },
  'salt-lake-city': { slug: 'salt-lake-city', name: 'Salt Lake City', latitude: 40.7608, longitude: -111.891, eventbriteCity: 'Salt Lake City, UT' },
  raleigh: { slug: 'raleigh', name: 'Raleigh', latitude: 35.7796, longitude: -78.6382, eventbriteCity: 'Raleigh, NC' },
  anchorage: { slug: 'anchorage', name: 'Anchorage', latitude: 61.2181, longitude: -149.9003, eventbriteCity: 'Anchorage, AK' },
  'colorado-springs': { slug: 'colorado-springs', name: 'Colorado Springs', latitude: 38.8339, longitude: -104.8214, eventbriteCity: 'Colorado Springs, CO' },
  fargo: { slug: 'fargo', name: 'Fargo', latitude: 46.8772, longitude: -96.7898, eventbriteCity: 'Fargo, ND' },
  tampa: { slug: 'tampa', name: 'Tampa', latitude: 27.9506, longitude: -82.4572, eventbriteCity: 'Tampa, FL' },
}

export const cityConfigs = cityConfigsData

export function getCityConfig(slug: string): CityConfig | undefined {
  return cityConfigs[slug]
}

export function getAllCityConfigs(): CityConfig[] {
  return Object.values(cityConfigs)
}
