'use client'

import Link from 'next/link'
import { useState } from 'react'
import { getAllHistory } from '@/data/history'
import { CITY_METADATA } from '@/data/cities'
import { routes, citySections } from '@/lib/routes'
import { PremiumMobileMenu } from './PremiumMobileMenu'

interface HeaderProps {
  cityName?: string
  citySlug?: string
}

// Get cities from static metadata (name + slug only, no heavy content)
const cities = [...CITY_METADATA].sort((a, b) => a.name.localeCompare(b.name))

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
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-neutral-100 ui-sans">
      <div className="container-page">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href={routes.home()}
            className="flex items-center gap-3 font-semibold text-neutral-900 hover:text-accent-600 transition-colors tracking-tight"
          >
            {/* Mobile: Icon only */}
            <img
              src="/icon.png"
              alt="Curious City"
              className="h-8 w-8 sm:hidden"
            />
            {/* Desktop: Full logo */}
            <img
              src="/logos/CCs.png"
              alt="Curious City"
              className="hidden sm:block h-8 w-auto"
            />
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

            {/* Premium mobile menu button */}
            <PremiumMobileMenu currentCitySlug={citySlug} />
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
                href={routes.cityArticle(article.citySlug, article.slug)}
                className="block px-4 py-2 text-sm text-neutral-700 hover:bg-accent-50 hover:text-accent-700 transition-colors"
              >
                {article.title}
              </Link>
            ))}
          </div>
        ))}

        <div className="my-2 border-t border-neutral-100" />

        <Link
          href={routes.categoryHistory()}
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
