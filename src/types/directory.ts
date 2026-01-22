// ============================================
// Directory/Guide System Types
// Extends existing content types for guide-first architecture
// ============================================

import type {
  WithImage,
  WithImages,
  WithCoordinates,
  WithLocation,
  WithSources,
  WithMoreInfo,
  WithContactInfo,
  BestOfSpot,
  CuriosityContentItem,
  DarkHistoryContentItem,
  LostAndLovedContentItem,
  HiddenGemContentItem,
} from './content'

// ============================================
// Directory Establishment Types
// ============================================

/**
 * Single establishment in a directory listing
 * Extends BestOfSpot with additional directory-specific fields
 */
export interface DirectoryEstablishment extends BestOfSpot {
  id: string
  // Tags for filtering (e.g., "cocktails", "speakeasy", "outdoor-seating")
  tags?: string[]
  // Whether this is a featured/premium listing
  featured?: boolean
  // External IDs for integrations
  externalIds?: {
    google?: string
    yelp?: string
    booking?: string
    viator?: string
  }
}

// ============================================
// Discovery Box Types
// Content that appears between directory listings
// ============================================

export type DiscoveryBoxType = 'curiosity' | 'dark-history' | 'hidden-gem' | 'lost-and-loved'

/**
 * Discovery content that gets inserted into directory listings
 * Uses existing content types but adds positioning info
 */
export interface DiscoveryBox {
  id: string
  type: DiscoveryBoxType
  // Insert after the Nth establishment in the list (0-indexed)
  insertAfter: number
  // The actual content - references existing content items
  content:
    | Omit<CuriosityContentItem, 'id' | 'type'>
    | Omit<DarkHistoryContentItem, 'id' | 'type'>
    | Omit<LostAndLovedContentItem, 'id' | 'type'>
    | Omit<HiddenGemContentItem, 'id' | 'type'>
}

// ============================================
// Filter Types
// ============================================

export interface CategoryFilters {
  // Available neighborhoods for this category
  neighborhoods?: string[]
  // Available price ranges
  priceRanges?: Array<'$' | '$$' | '$$$' | '$$$$'>
  // Available tags (category-specific)
  tags?: string[]
  // Available vibes/atmospheres
  vibes?: string[]
}

// ============================================
// Main Directory Category Type
// ============================================

export interface DirectoryCategory {
  // URL slug (e.g., "bars", "restaurants", "lawyers")
  slug: string
  // Display name
  name: string
  // Short description for SEO and hero
  description: string
  // Optional icon name for UI
  icon?: string
  // Optional color theme
  color?: string

  // Main directory content
  establishments: DirectoryEstablishment[]

  // Discovery content inserted between listings
  discoveryBoxes: DiscoveryBox[]

  // Related long-form articles (by slug)
  relatedArticles?: string[]

  // Available filters for this category
  filters?: CategoryFilters

  // SEO metadata
  seo?: {
    title?: string // Override default "Best [Category] in [City]"
    description?: string
    keywords?: string[]
  }
}

// ============================================
// City Guide Index
// ============================================

/**
 * Complete guide data for a city
 * Organized by category slug
 */
export interface CityGuide {
  citySlug: string
  cityName: string
  categories: {
    [categorySlug: string]: DirectoryCategory
  }
}

// ============================================
// Helper Types for Components
// ============================================

/**
 * Combined item for rendering (establishment or discovery box)
 * Used by DirectoryTemplate to merge establishments and discovery content
 */
export type DirectoryItem =
  | { type: 'establishment'; data: DirectoryEstablishment }
  | { type: 'discovery'; data: DiscoveryBox }

/**
 * Active filters state for category pages
 */
export interface ActiveFilters {
  neighborhoods?: string[]
  priceRanges?: Array<'$' | '$$' | '$$$' | '$$$$'>
  tags?: string[]
  vibes?: string[]
  search?: string
}
