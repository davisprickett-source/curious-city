import type { CityGuide } from '@/types/directory'
import { denverBars } from './bars'

/**
 * Complete guide data for Denver
 * Each category is imported from its own file
 */
export const denverGuide: CityGuide = {
  citySlug: 'denver',
  cityName: 'Denver',
  categories: {
    bars: denverBars,
    // TODO: Add restaurants, coffee-shops, tours, etc.
  }
}

/**
 * Get a specific category for Denver
 */
export function getDenverCategory(categorySlug: string) {
  return denverGuide.categories[categorySlug]
}

/**
 * Get all available categories for Denver
 */
export function getDenverCategories() {
  return Object.values(denverGuide.categories)
}
