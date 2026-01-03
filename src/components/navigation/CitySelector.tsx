'use client'

import Link from 'next/link'
import { useState, Suspense } from 'react'
import { CITY_METADATA } from '@/data/cities'
import { useNavigation } from './hooks/useNavigation'
import type { AnyCitySection } from '@/lib/routes'

interface CitySelectorProps {
  currentCitySlug?: string
  currentCityName?: string
  currentSection?: AnyCitySection
  preserveFilters?: boolean
}

function CitySelectorContent({
  currentCitySlug,
  currentCityName,
  currentSection,
  preserveFilters = true,
}: CitySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { buildCityUrl } = useNavigation()

  const cities = [...CITY_METADATA]
    .map((city) => ({ slug: city.slug, name: city.name }))
    .sort((a, b) => a.name.localeCompare(b.name))

  if (!currentCitySlug || !currentCityName) {
    return null
  }

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-700 hover:text-accent-600 rounded-lg hover:bg-neutral-50 transition-colors"
      >
        {currentCityName}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-56 py-2 bg-white rounded-xl shadow-xl border border-neutral-100 max-h-[70vh] overflow-y-auto z-50">
          {cities.map((city) => {
            const isActive = city.slug === currentCitySlug

            return (
              <Link
                key={city.slug}
                href={buildCityUrl(city.slug, currentSection, preserveFilters)}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-4 py-2 text-sm transition-colors
                  ${
                    isActive
                      ? 'bg-accent-50 text-accent-700 font-medium'
                      : 'text-neutral-700 hover:bg-accent-50 hover:text-accent-700'
                  }
                `}
              >
                {city.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function CitySelector(props: CitySelectorProps) {
  return (
    <Suspense fallback={
      <div className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-700">
        {props.currentCityName || 'Loading...'}
      </div>
    }>
      <CitySelectorContent {...props} />
    </Suspense>
  )
}
