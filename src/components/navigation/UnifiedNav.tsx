'use client'

import Link from 'next/link'
import { routes, citySections, type AnyCitySection } from '@/lib/routes'
import { CitySelector } from './CitySelector'
import { FilterBar } from './FilterBar'
import { PremiumMobileMenu } from '@/components/PremiumMobileMenu'
import type { EventView } from '@/components/EventFilter'
import type { EventCategory } from '@/utils/eventCategoryUtils'

interface UnifiedNavProps {
  // Context
  citySlug?: string
  cityName?: string
  currentSection?: AnyCitySection

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
            <img
              src="/logos/CCs.png"
              alt="Curious City"
              className="h-8 w-auto"
            />
          </Link>

          {/* City Selector - goes to main city page (which is the articles feed) */}
          <CitySelector
            currentCitySlug={citySlug}
            currentCityName={cityName}
            preserveFilters={false}
          />

          {/* Section Links - only show if on a city page */}
          {citySlug && citySections.map((section) => {
            const isActive = currentSection === section.id
            // Articles links to city root, others to their section path
            const href = section.id === 'articles' ? `/${citySlug}` : `/${citySlug}${section.path}`

            return (
              <Link
                key={section.id}
                href={href}
                className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-accent-50 text-accent-700'
                    : 'text-neutral-700 hover:text-accent-700 hover:bg-accent-50'
                }`}
              >
                {section.label}
              </Link>
            )
          })}

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
            <img
              src="/logos/CCs.png"
              alt="Curious City"
              className="h-8 w-auto"
            />
          </Link>
          <PremiumMobileMenu currentCitySlug={citySlug} />
        </div>
      </div>
    </nav>
  )
}
