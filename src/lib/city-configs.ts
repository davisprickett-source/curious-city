/**
 * City configurations for API queries
 */

import type { CityConfig } from './api-types'

export const cityConfigs: Record<string, CityConfig> = {
  chicago: {
    slug: 'chicago',
    name: 'Chicago',
    eventbriteCity: 'Chicago, IL',
    latitude: 41.8781,
    longitude: -87.6298,
  },
  denver: {
    slug: 'denver',
    name: 'Denver',
    eventbriteCity: 'Denver, CO',
    latitude: 39.7392,
    longitude: -104.9903,
  },
  portland: {
    slug: 'portland',
    name: 'Portland',
    eventbriteCity: 'Portland, OR',
    latitude: 45.5152,
    longitude: -122.6784,
  },
  minneapolis: {
    slug: 'minneapolis',
    name: 'Minneapolis',
    eventbriteCity: 'Minneapolis, MN',
    latitude: 44.9778,
    longitude: -93.265,
  },
  phoenix: {
    slug: 'phoenix',
    name: 'Phoenix',
    eventbriteCity: 'Phoenix, AZ',
    latitude: 33.4484,
    longitude: -112.074,
  },
  dallas: {
    slug: 'dallas',
    name: 'Dallas',
    eventbriteCity: 'Dallas, TX',
    latitude: 32.7767,
    longitude: -96.797,
  },
  'salt-lake-city': {
    slug: 'salt-lake-city',
    name: 'Salt Lake City',
    eventbriteCity: 'Salt Lake City, UT',
    latitude: 40.7608,
    longitude: -111.891,
  },
  raleigh: {
    slug: 'raleigh',
    name: 'Raleigh',
    eventbriteCity: 'Raleigh, NC',
    latitude: 35.7796,
    longitude: -78.6382,
  },
  anchorage: {
    slug: 'anchorage',
    name: 'Anchorage',
    eventbriteCity: 'Anchorage, AK',
    latitude: 61.2181,
    longitude: -149.9003,
  },
  'colorado-springs': {
    slug: 'colorado-springs',
    name: 'Colorado Springs',
    eventbriteCity: 'Colorado Springs, CO',
    latitude: 38.8339,
    longitude: -104.8214,
  },
  fargo: {
    slug: 'fargo',
    name: 'Fargo',
    eventbriteCity: 'Fargo, ND',
    latitude: 46.8772,
    longitude: -96.7898,
  },
  tampa: {
    slug: 'tampa',
    name: 'Tampa',
    eventbriteCity: 'Tampa, FL',
    latitude: 27.9506,
    longitude: -82.4572,
  },
}

export function getCityConfig(slug: string): CityConfig | undefined {
  return cityConfigs[slug]
}

export function getAllCityConfigs(): CityConfig[] {
  return Object.values(cityConfigs)
}
