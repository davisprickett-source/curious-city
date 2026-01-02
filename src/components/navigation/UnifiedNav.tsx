'use client'

import Link from 'next/link'
import { routes, type CitySection } from '@/lib/routes'
import { CitySelector } from './CitySelector'
import { PageSelector } from './PageSelector'
import { FilterBar } from './FilterBar'
import { MobileNavMenu } from './MobileNavMenu'
import type { EventView } from '@/components/EventFilter'
import type { EventCategory } from '@/utils/eventCategoryUtils'

interface UnifiedNavProps {
  // Context
  citySlug?: string
  cityName?: string
  currentSection?: CitySection

  // Filter state (from URL searchParams)
  eventView?: EventView
  eventCategories?: EventCategory[]
  sceneCategory?: string
  curiosityCategory?: string
  availableCuriosityCategories?: string[]
  curiosityCategoryCounts?: Record<string, number>
  darkHistoryCategory?: string
  availableDarkHistoryCategories?: string[]
  darkHistoryCategoryCounts?: Record<string, number>

  // Optional customization
  customFilters?: React.ReactNode
}

export function UnifiedNav({
  citySlug,
  cityName,
  currentSection,
  eventView,
  eventCategories,
  sceneCategory,
  curiosityCategory,
  availableCuriosityCategories,
  curiosityCategoryCounts,
  darkHistoryCategory,
  availableDarkHistoryCategories,
  darkHistoryCategoryCounts,
  customFilters,
}: UnifiedNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-neutral-100 ui-sans">
      <div className="container-page">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center h-14 gap-2">
          {/* Logo */}
          <Link
            href={routes.home()}
            className="flex items-center font-semibold text-neutral-900 hover:text-accent-600 transition-colors tracking-tight"
          >
            <span className="text-lg">Curious City</span>
          </Link>

          {/* City and Page Selectors */}
          {citySlug && (
            <>
              <CitySelector
                currentCitySlug={citySlug}
                currentCityName={cityName}
                currentSection={currentSection}
                preserveFilters={true}
              />

              <PageSelector
                citySlug={citySlug}
                currentSection={currentSection}
                preserveFilters={true}
              />
            </>
          )}

          {/* Dynamic Filter Bar */}
          <div className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide ml-4">
            {customFilters ? (
              customFilters
            ) : (
              <FilterBar
                currentSection={currentSection}
                citySlug={citySlug}
                eventView={eventView}
                eventCategories={eventCategories}
                sceneCategory={sceneCategory}
                curiosityCategory={curiosityCategory}
                availableCuriosityCategories={availableCuriosityCategories}
                curiosityCategoryCounts={curiosityCategoryCounts}
                darkHistoryCategory={darkHistoryCategory}
                availableDarkHistoryCategories={availableDarkHistoryCategories}
                darkHistoryCategoryCounts={darkHistoryCategoryCounts}
              />
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden items-center justify-between h-14">
          <Link
            href={routes.home()}
            className="flex items-center font-semibold text-neutral-900 tracking-tight"
          >
            <span className="text-lg">Curious City</span>
          </Link>
          <MobileNavMenu
            citySlug={citySlug}
            cityName={cityName}
            currentSection={currentSection}
            eventView={eventView}
            eventCategories={eventCategories}
            sceneCategory={sceneCategory}
          />
        </div>
      </div>
    </nav>
  )
}
