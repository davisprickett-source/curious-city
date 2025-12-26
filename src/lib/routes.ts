/**
 * Centralized route definitions
 *
 * This module provides type-safe route builders and constants
 * to avoid hardcoded paths throughout the codebase.
 */

// ============================================
// City Section Types
// ============================================

export type CitySection =
  | 'history'
  | 'events'
  | 'scenes'
  | 'coffee-shops'
  | 'bars'
  | 'restaurants'
  | 'hidden-gems'
  | 'dark-history'
  | 'lost-and-loved'
  | 'curiosities'

export type GlobalCategory =
  | 'hidden-gems'
  | 'bars'
  | 'restaurants'
  | 'dark-history'

// ============================================
// City Section Definitions
// ============================================

export interface SectionDefinition {
  id: CitySection
  label: string
  path: string
}

export const citySections: SectionDefinition[] = [
  { id: 'history', label: 'History', path: '' },
  { id: 'events', label: 'Events', path: '/events' },
  { id: 'scenes', label: 'Scenes', path: '/scenes' },
  { id: 'coffee-shops', label: 'Coffee', path: '/coffee-shops' },
  { id: 'bars', label: 'Bars', path: '/bars' },
  { id: 'restaurants', label: 'Restaurants', path: '/restaurants' },
  { id: 'hidden-gems', label: 'Hidden Gems', path: '/hidden-gems' },
  { id: 'dark-history', label: 'Dark History', path: '/dark-history' },
  { id: 'lost-and-loved', label: 'Lost & Loved', path: '/lost-and-loved' },
  { id: 'curiosities', label: 'Curiosities', path: '/curiosities' },
]

// ============================================
// Route Builders
// ============================================

export const routes = {
  // Home
  home: () => '/',

  // History
  history: () => '/history',
  cityHistory: (citySlug: string, historySlug: string) => `/${citySlug}/history/${historySlug}`,

  // City pages
  city: (citySlug: string) => `/${citySlug}`,
  citySection: (citySlug: string, section: CitySection | string) => {
    if (section === 'history') return `/${citySlug}`
    return `/${citySlug}/${section}`
  },

  // Specific city sections
  cityEvents: (citySlug: string) => `/${citySlug}/events`,
  cityScenes: (citySlug: string) => `/${citySlug}/scenes`,
  cityCoffeeShops: (citySlug: string) => `/${citySlug}/coffee-shops`,
  cityBars: (citySlug: string) => `/${citySlug}/bars`,
  cityRestaurants: (citySlug: string) => `/${citySlug}/restaurants`,
  cityHiddenGems: (citySlug: string) => `/${citySlug}/hidden-gems`,
  cityDarkHistory: (citySlug: string) => `/${citySlug}/dark-history`,
  cityLostAndLoved: (citySlug: string) => `/${citySlug}/lost-and-loved`,
  cityCuriosities: (citySlug: string) => `/${citySlug}/curiosities`,

  // Global category pages
  category: (category: GlobalCategory) => `/category/${category}`,
  categoryHiddenGems: () => '/category/hidden-gems',
  categoryBars: () => '/category/bars',
  categoryRestaurants: () => '/category/restaurants',
  categoryDarkHistory: () => '/category/dark-history',
} as const

// ============================================
// External Links
// ============================================

export const externalLinks = {
  googleMaps: {
    search: (query: string) =>
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
    coordinates: (lat: number, lng: number) =>
      `https://www.google.com/maps?q=${lat},${lng}`,
  },
  instagram: (handle: string) =>
    `https://instagram.com/${handle.replace('@', '')}`,
} as const

// ============================================
// Banner Image Paths
// ============================================

export const bannerPaths = {
  city: (citySlug: string) => `/banners/${citySlug}-banner.jpg`,
  cityFallback: () => '/banners/default-banner.jpg',
} as const
