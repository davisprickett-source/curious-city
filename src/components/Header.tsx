'use client'

import Link from 'next/link'
import { useState } from 'react'
import { getAllHistory } from '@/data/history'
import { getAllCities } from '@/data/cities'
import { routes, citySections } from '@/lib/routes'

interface HeaderProps {
  cityName?: string
  citySlug?: string
}

// Get cities from data source (single source of truth)
const cities = getAllCities()
  .map((city) => ({ slug: city.slug, name: city.name }))
  .sort((a, b) => a.name.localeCompare(b.name))

// Get all history articles grouped by city
const allHistory = getAllHistory()
const historyByCity = allHistory.reduce((acc, article) => {
  if (!acc[article.citySlug]) {
    acc[article.citySlug] = []
  }
  acc[article.citySlug].push(article)
  return acc
}, {} as Record<string, typeof allHistory>)

// City name lookup from data
const cityNames = cities.reduce((acc, city) => {
  acc[city.slug] = city.name
  return acc
}, {} as Record<string, string>)

export function Header({ cityName, citySlug }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-neutral-100 ui-sans">
      <div className="container-page">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href={routes.home()}
            className="flex items-center gap-3 font-semibold text-neutral-900 hover:text-accent-600 transition-colors tracking-tight"
          >
            <span className="text-lg">Curious City</span>
            {cityName && (
              <>
                <span className="w-px h-5 bg-neutral-200" aria-hidden="true" />
                <span className="text-neutral-500 font-normal text-[15px]">{cityName}</span>
              </>
            )}
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            {/* History dropdown */}
            <HistoryDropdown />

            {/* Cities dropdown */}
            <CitiesDropdown />

            {/* Mobile menu button */}
            <MobileMenu currentCitySlug={citySlug} />
          </nav>
        </div>
      </div>
    </header>
  )
}

function HistoryDropdown() {
  return (
    <div className="relative hidden sm:block group">
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-accent-600 transition-colors">
        History
        <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div className="absolute left-0 top-full mt-1 w-72 py-2 bg-white rounded-xl shadow-xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-h-[70vh] overflow-y-auto">
        {Object.entries(historyByCity).map(([citySlug, cityHistory]) => (
          <div key={citySlug}>
            <div className="px-4 py-2 text-xs font-semibold text-accent-600 uppercase tracking-wide">
              {cityNames[citySlug] || citySlug}
            </div>
            {cityHistory.map((article) => (
              <Link
                key={article.slug}
                href={routes.cityHistory(article.citySlug, article.slug)}
                className="block px-4 py-2 text-sm text-neutral-700 hover:bg-accent-50 hover:text-accent-700 transition-colors"
              >
                {article.title}
              </Link>
            ))}
          </div>
        ))}

        <div className="my-2 border-t border-neutral-100" />

        <Link
          href={routes.history()}
          className="flex items-center gap-1 px-4 py-2 text-sm text-accent-600 hover:bg-accent-50 font-medium"
        >
          View all history
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

function CitiesDropdown() {
  const [expandedCity, setExpandedCity] = useState<string | null>(null)

  return (
    <div
      className="relative hidden sm:block group"
      onMouseLeave={() => setExpandedCity(null)}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-accent-600 transition-colors">
        Cities
        <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-1 w-56 py-2 bg-white rounded-xl shadow-xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {cities.map((city) => (
          <div
            key={city.slug}
            className="relative"
            onMouseEnter={() => setExpandedCity(city.slug)}
          >
            <Link
              href={routes.city(city.slug)}
              className={`flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                expandedCity === city.slug
                  ? 'bg-accent-50 text-accent-700'
                  : 'text-neutral-700 hover:bg-accent-50 hover:text-accent-700'
              }`}
            >
              {city.name}
              <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* City sections flyout */}
            {expandedCity === city.slug && (
              <div className="absolute left-full top-0 ml-1 w-44 py-2 bg-white rounded-xl shadow-xl border border-neutral-100">
                {citySections.map((section) => (
                  <Link
                    key={section.path}
                    href={routes.citySection(city.slug, section.id)}
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-accent-50 hover:text-accent-700 transition-colors"
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function MobileMenu({ currentCitySlug }: { currentCitySlug?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCity, setExpandedCity] = useState<string | null>(currentCitySlug || null)
  const [showEssays, setShowEssays] = useState(false)

  return (
    <div className="relative sm:hidden">
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

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-72 py-2 bg-white rounded-lg shadow-lg border border-neutral-200 max-h-[80vh] overflow-y-auto">
          {/* History section */}
          <button
            onClick={() => setShowEssays(!showEssays)}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
          >
            History
            <svg
              className={`w-4 h-4 text-neutral-400 transition-transform ${showEssays ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showEssays && (
            <div className="bg-neutral-50 py-1">
              {Object.entries(historyByCity).map(([citySlug, cityHistory]) => (
                <div key={citySlug}>
                  <div className="px-6 py-1 text-xs font-medium text-neutral-400 uppercase tracking-wide">
                    {cityNames[citySlug] || citySlug}
                  </div>
                  {cityHistory.map((article) => (
                    <Link
                      key={article.slug}
                      href={routes.cityHistory(article.citySlug, article.slug)}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                    >
                      {article.title}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href={routes.history()}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 text-sm text-neutral-500 hover:bg-neutral-100"
              >
                View all history →
              </Link>
            </div>
          )}

          <div className="my-2 border-t border-neutral-100" />

          <div className="px-4 py-2 text-xs font-medium text-neutral-400 uppercase tracking-wide">
            Cities
          </div>

          {cities.map((city) => (
            <div key={city.slug}>
              <button
                onClick={() => setExpandedCity(expandedCity === city.slug ? null : city.slug)}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expanded city sections */}
              {expandedCity === city.slug && (
                <div className="bg-neutral-50 py-1">
                  {citySections.map((section) => (
                    <Link
                      key={section.path}
                      href={routes.citySection(city.slug, section.id)}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                    >
                      {section.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="my-2 border-t border-neutral-100" />

          <div className="px-4 py-2 text-xs font-medium text-neutral-400 uppercase tracking-wide">
            Browse All
          </div>
          <Link
            href={routes.category('hidden-gems')}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            All Hidden Gems
          </Link>
          <Link
            href={routes.category('bars')}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            All Best Bars
          </Link>
          <Link
            href={routes.category('restaurants')}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            All Best Restaurants
          </Link>
          <Link
            href={routes.category('dark-history')}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            All Dark History
          </Link>
        </div>
      )}
    </div>
  )
}
