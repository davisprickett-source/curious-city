'use client'

import Link from 'next/link'
import { useState, Suspense } from 'react'
import { CITY_METADATA } from '@/data/cities'
import { getAllHistory } from '@/data/history'
import { routes, citySections, type AnyCitySection } from '@/lib/routes'
import { useNavigation } from './hooks/useNavigation'
import type { EventView } from '@/components/EventFilter'
import type { EventCategory } from '@/utils/eventCategoryUtils'
import { InlineEventTimeFilter } from './InlineEventTimeFilter'
import { InlineEventCategoryFilter } from './InlineEventCategoryFilter'
import { InlineScenesCategoryFilter } from './InlineScenesCategoryFilter'

interface MobileNavMenuProps {
  citySlug?: string
  cityName?: string
  currentSection?: AnyCitySection
  eventView?: EventView
  eventCategories?: EventCategory[]
  sceneCategory?: string
}

// Get cities from data source
const cities = [...CITY_METADATA]
  .map((city) => ({ slug: city.slug, name: city.name }))
  .sort((a, b) => a.name.localeCompare(b.name))

// Get all history articles grouped by city
const allHistory = getAllHistory()
const historyByCity = allHistory.reduce(
  (acc, article) => {
    if (!acc[article.citySlug]) {
      acc[article.citySlug] = []
    }
    acc[article.citySlug].push(article)
    return acc
  },
  {} as Record<string, typeof allHistory>
)

// City name lookup from data
const cityNames = cities.reduce(
  (acc, city) => {
    acc[city.slug] = city.name
    return acc
  },
  {} as Record<string, string>
)

function MobileNavMenuContent({
  citySlug,
  cityName,
  currentSection,
  eventView,
  eventCategories,
  sceneCategory,
}: MobileNavMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCity, setExpandedCity] = useState<string | null>(citySlug || null)
  const [showHistory, setShowHistory] = useState(false)
  const { buildCityUrl } = useNavigation()

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 text-neutral-500 hover:text-neutral-900 transition-colors"
        aria-label="Menu"
      >
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-80 max-h-[85vh] overflow-y-auto py-2 bg-white rounded-lg shadow-xl border border-neutral-200 z-50">
          {/* Current Context */}
          {citySlug && currentSection && (
            <div className="px-4 py-3 border-b border-neutral-100 bg-neutral-50">
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
                Current
              </div>
              <div className="text-sm font-medium text-neutral-900">
                {cityName} → {citySections.find((s) => s.id === currentSection)?.label}
              </div>
            </div>
          )}

          {/* Filters Section */}
          {currentSection === 'events' && (
            <div className="px-4 py-3 border-b border-neutral-100 bg-neutral-50">
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">
                Time
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <InlineEventTimeFilter currentView={eventView} />
              </div>
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">
                Categories
              </div>
              <div className="flex flex-wrap gap-2">
                <InlineEventCategoryFilter selectedCategories={eventCategories} />
              </div>
            </div>
          )}

          {currentSection === 'scenes' && citySlug && (
            <div className="px-4 py-3 border-b border-neutral-100 bg-neutral-50">
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">
                Category
              </div>
              <div className="flex flex-wrap gap-2">
                <InlineScenesCategoryFilter citySlug={citySlug} activeCategory={sceneCategory} />
              </div>
            </div>
          )}

          {/* City Navigation */}
          <div className="py-2">
            <div className="px-4 py-2 text-xs font-medium text-neutral-400 uppercase tracking-wide">
              Cities
            </div>
            {cities.map((city) => (
              <div key={city.slug}>
                <button
                  onClick={() =>
                    setExpandedCity(expandedCity === city.slug ? null : city.slug)
                  }
                  className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left transition-colors ${
                    expandedCity === city.slug
                      ? 'bg-neutral-100 text-neutral-900 font-medium'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {city.name}
                  <svg
                    className={`w-4 h-4 text-neutral-400 transition-transform ${
                      expandedCity === city.slug ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedCity === city.slug && (
                  <div className="bg-neutral-50 py-1">
                    {citySections.map((section) => (
                      <Link
                        key={section.id}
                        href={buildCityUrl(city.slug, section.id, true)}
                        onClick={closeMenu}
                        className="block px-6 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                      >
                        {section.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* History Section */}
          <div className="border-t border-neutral-100 py-2">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
            >
              History
              <svg
                className={`w-4 h-4 text-neutral-400 transition-transform ${
                  showHistory ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showHistory && (
              <div className="bg-neutral-50 py-1">
                {Object.entries(historyByCity).map(([slug, cityHistory]) => (
                  <div key={slug}>
                    <div className="px-6 py-1 text-xs font-medium text-neutral-400 uppercase tracking-wide">
                      {cityNames[slug] || slug}
                    </div>
                    {cityHistory.map((article) => (
                      <Link
                        key={article.slug}
                        href={routes.cityArticle(article.citySlug, article.slug)}
                        onClick={closeMenu}
                        className="block px-6 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                      >
                        {article.title}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href={routes.categoryHistory()}
                  onClick={closeMenu}
                  className="block px-6 py-2 text-sm text-neutral-500 hover:bg-neutral-100"
                >
                  View all history →
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export function MobileNavMenu(props: MobileNavMenuProps) {
  return (
    <Suspense fallback={
      <button
        className="flex items-center justify-center w-10 h-10 text-neutral-500"
        aria-label="Menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    }>
      <MobileNavMenuContent {...props} />
    </Suspense>
  )
}
