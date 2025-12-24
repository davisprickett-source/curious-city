'use client'

import Link from 'next/link'
import { useState } from 'react'
import { getAllEssays } from '@/data/essays'

interface HeaderProps {
  cityName?: string
  citySlug?: string
}

const cities = [
  { slug: 'anchorage', name: 'Anchorage' },
  { slug: 'chicago', name: 'Chicago' },
  { slug: 'colorado-springs', name: 'Colorado Springs' },
  { slug: 'dallas', name: 'Dallas' },
  { slug: 'denver', name: 'Denver' },
  { slug: 'fargo', name: 'Fargo' },
  { slug: 'minneapolis', name: 'Minneapolis' },
  { slug: 'phoenix', name: 'Phoenix' },
  { slug: 'portland', name: 'Portland' },
  { slug: 'raleigh', name: 'Raleigh' },
  { slug: 'salt-lake-city', name: 'Salt Lake City' },
  { slug: 'tampa', name: 'Tampa' },
]

// Get all essays grouped by city
const allEssays = getAllEssays()
const essaysByCity = allEssays.reduce((acc, essay) => {
  if (!acc[essay.citySlug]) {
    acc[essay.citySlug] = []
  }
  acc[essay.citySlug].push(essay)
  return acc
}, {} as Record<string, typeof allEssays>)

// City name lookup
const cityNames: Record<string, string> = {
  anchorage: 'Anchorage',
  chicago: 'Chicago',
  'colorado-springs': 'Colorado Springs',
  dallas: 'Dallas',
  denver: 'Denver',
  fargo: 'Fargo',
  minneapolis: 'Minneapolis',
  phoenix: 'Phoenix',
  portland: 'Portland',
  raleigh: 'Raleigh',
  'salt-lake-city': 'Salt Lake City',
  tampa: 'Tampa',
}

const citySections = [
  { path: '', label: 'Essay' },
  { path: '/this-week', label: 'This Week' },
  { path: '/scenes', label: 'Scenes' },
  { path: '/coffee-shops', label: 'Coffee' },
  { path: '/bars', label: 'Bars' },
  { path: '/restaurants', label: 'Restaurants' },
  { path: '/hidden-gems', label: 'Hidden Gems' },
  { path: '/dark-history', label: 'Dark History' },
  { path: '/curiosities', label: 'Curiosities' },
]

export function Header({ cityName, citySlug }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-neutral-100 ui-sans">
      <div className="container-page">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
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
            {/* Essays dropdown */}
            <EssaysDropdown />

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

function EssaysDropdown() {
  return (
    <div className="relative hidden sm:block group">
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-accent-600 transition-colors">
        Essays
        <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div className="absolute left-0 top-full mt-1 w-72 py-2 bg-white rounded-xl shadow-xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-h-[70vh] overflow-y-auto">
        {Object.entries(essaysByCity).map(([citySlug, cityEssays]) => (
          <div key={citySlug}>
            <div className="px-4 py-2 text-xs font-semibold text-accent-600 uppercase tracking-wide">
              {cityNames[citySlug] || citySlug}
            </div>
            {cityEssays.map((essay) => (
              <Link
                key={essay.slug}
                href={`/${essay.citySlug}/essay/${essay.slug}`}
                className="block px-4 py-2 text-sm text-neutral-700 hover:bg-accent-50 hover:text-accent-700 transition-colors"
              >
                {essay.title}
              </Link>
            ))}
          </div>
        ))}

        <div className="my-2 border-t border-neutral-100" />

        <Link
          href="/essays"
          className="flex items-center gap-1 px-4 py-2 text-sm text-accent-600 hover:bg-accent-50 font-medium"
        >
          View all essays
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
              href={`/${city.slug}`}
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
                    href={`/${city.slug}${section.path}`}
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
          {/* Essays section */}
          <button
            onClick={() => setShowEssays(!showEssays)}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
          >
            Essays
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
              {Object.entries(essaysByCity).map(([citySlug, cityEssays]) => (
                <div key={citySlug}>
                  <div className="px-6 py-1 text-xs font-medium text-neutral-400 uppercase tracking-wide">
                    {cityNames[citySlug] || citySlug}
                  </div>
                  {cityEssays.map((essay) => (
                    <Link
                      key={essay.slug}
                      href={`/${essay.citySlug}/essay/${essay.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                    >
                      {essay.title}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href="/essays"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 text-sm text-neutral-500 hover:bg-neutral-100"
              >
                View all essays →
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
                      href={`/${city.slug}${section.path}`}
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
            href="/category/hidden-gems"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            All Hidden Gems
          </Link>
          <Link
            href="/category/bars"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            All Best Bars
          </Link>
          <Link
            href="/category/restaurants"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
          >
            All Best Restaurants
          </Link>
          <Link
            href="/category/dark-history"
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
