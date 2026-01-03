'use client'

import { useSearchParams, usePathname } from 'next/navigation'
import { routes, type AnyCitySection } from '@/lib/routes'

type PageType = 'events' | 'scenes' | 'other'

/**
 * Hook for building navigation URLs with intelligent filter preservation
 */
export function useNavigation() {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  /**
   * Build URL for city navigation with optional filter preservation
   */
  const buildCityUrl = (
    citySlug: string,
    section?: AnyCitySection,
    preserveFilters = true
  ): string => {
    // If no section provided, return city overview page
    if (!section) return routes.city(citySlug)

    const basePath = routes.citySection(citySlug, section)

    if (!preserveFilters) return basePath

    // Determine if we're staying on the same page type
    const targetPageType = getPageType(section)
    const currentPageType = getPageType(getCurrentSection(pathname))

    // Only preserve filters if page types match
    if (targetPageType !== currentPageType) return basePath

    return preserveSearchParams(basePath, searchParams, targetPageType)
  }

  /**
   * Build URL for page/section navigation within current city
   */
  const buildPageUrl = (
    citySlug: string,
    section?: AnyCitySection,
    preserveFilters = true
  ): string => {
    return buildCityUrl(citySlug, section, preserveFilters)
  }

  /**
   * Build URL for filter changes (stays on current page)
   */
  const buildFilterUrl = (updates: Record<string, string | null>): string => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    })

    const queryString = params.toString()
    return queryString ? `${pathname}?${queryString}` : pathname
  }

  return {
    buildCityUrl,
    buildPageUrl,
    buildFilterUrl,
  }
}

/**
 * Get page type from section
 */
function getPageType(section?: AnyCitySection): PageType {
  if (!section) return 'other'
  if (section === 'events') return 'events'
  if (section === 'scenes') return 'scenes'
  return 'other'
}

/**
 * Extract current section from pathname
 */
function getCurrentSection(pathname: string): AnyCitySection | undefined {
  // Pattern: /[city]/[section] or /[city]
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 1) return undefined // Root city page

  const sectionCandidate = segments[1]

  // Check if it's a valid section (main or legacy)
  const validSections: AnyCitySection[] = [
    'articles',
    'discover',
    'events',
    'guide',
    'history',
    'scenes',
    'coffee-shops',
    'bars',
    'restaurants',
    'local-favorites',
    'hidden-gems',
    'dark-history',
    'lost-and-loved',
    'curiosities',
  ]

  return validSections.includes(sectionCandidate as AnyCitySection)
    ? (sectionCandidate as AnyCitySection)
    : undefined
}

/**
 * Preserve relevant search params based on page type
 */
function preserveSearchParams(
  basePath: string,
  searchParams: URLSearchParams,
  pageType: PageType
): string {
  const params = new URLSearchParams()

  if (pageType === 'events') {
    // Preserve event filters
    const view = searchParams.get('view')
    const categories = searchParams.get('categories')
    if (view && view !== 'week') params.set('view', view) // week is default
    if (categories) params.set('categories', categories)
  } else if (pageType === 'scenes') {
    // Preserve scene filters
    const category = searchParams.get('category')
    if (category) params.set('category', category)
  }

  return params.toString() ? `${basePath}?${params}` : basePath
}
