/**
 * Centralized route definitions
 *
 * This module provides type-safe route builders and constants
 * to avoid hardcoded paths throughout the codebase.
 */

// ============================================
// City Section Types
// ============================================

// Main navigation sections (shown in primary nav)
export type CitySection =
  | 'articles'
  | 'events'

// Legacy/hidden sections (still accessible, not in main nav)
export type LegacySection =
  | 'scenes' // Hidden for v1 launch
  | 'history'
  | 'discover'
  | 'guide'
  | 'coffee-shops'
  | 'bars'
  | 'restaurants'
  | 'local-favorites'
  | 'hidden-gems'
  | 'dark-history'
  | 'lost-and-loved'
  | 'curiosities'

// All valid section types (for components that need to handle both)
export type AnyCitySection = CitySection | LegacySection

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
  { id: 'articles', label: 'Articles', path: '' }, // Articles are on the main city page
  // { id: 'scenes', label: 'Scenes', path: '/scenes' }, // Hidden for v1 launch
  { id: 'events', label: 'Events', path: '/events' },
]

// Legacy/hidden sections (keep for backward compatibility)
export const legacySections = [
  'scenes', // Hidden for v1 launch
  'history',
  'discover',
  'guide',
  'coffee-shops',
  'bars',
  'restaurants',
  'local-favorites',
  'hidden-gems',
  'dark-history',
  'lost-and-loved',
  'curiosities',
] as const

// ============================================
// Route Builders
// ============================================

export const routes = {
  // Home
  home: () => '/',

  // City pages
  city: (citySlug: string) => `/${citySlug}`,
  citySection: (citySlug: string, section: CitySection | string) => {
    return `/${citySlug}/${section}`
  },

  // Main sections
  cityArticles: (citySlug: string) => `/${citySlug}`, // Articles are on the main city page
  cityArticle: (citySlug: string, articleSlug: string) => `/${citySlug}/articles/${articleSlug}`,
  cityDiscover: (citySlug: string) => `/${citySlug}/discover`,
  cityEvents: (citySlug: string) => `/${citySlug}/events`,
  cityGuide: (citySlug: string) => `/${citySlug}/guide`,

  // Legacy routes (keep for backward compatibility)
  cityScenes: (citySlug: string) => `/${citySlug}/scenes`,
  cityCoffeeShops: (citySlug: string) => `/${citySlug}/coffee-shops`,
  cityBars: (citySlug: string) => `/${citySlug}/bars`,
  cityRestaurants: (citySlug: string) => `/${citySlug}/restaurants`,
  cityLocalFavorites: (citySlug: string) => `/${citySlug}/local-favorites`,
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
  categoryHistory: () => '/category/history',
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
