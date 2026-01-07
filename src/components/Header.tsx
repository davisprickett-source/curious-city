'use client'

import Link from 'next/link'
import { CITY_METADATA } from '@/data/cities'
import { routes } from '@/lib/routes'
import { PremiumMobileMenu } from './PremiumMobileMenu'

interface HeaderProps {
  cityName?: string
}

// Get cities from static metadata (name + slug only, no heavy content)
const cities = [...CITY_METADATA].sort((a, b) => a.name.localeCompare(b.name))

export function Header({ cityName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-neutral-100 ui-sans">
      <div className="container-page">
        <div className="flex items-center h-14 gap-2">
          {/* Logo */}
          <Link
            href={routes.home()}
            className="flex items-center font-semibold text-neutral-900 hover:text-accent-600 transition-colors tracking-tight"
          >
            {/* Mobile: Small logo */}
            <img
              src="/logos/CCs.png"
              alt="Curious City"
              className="h-7 w-auto sm:hidden"
            />
            {/* Desktop: Full logo */}
            <img
              src="/logos/CCs.png"
              alt="Curious City"
              className="hidden sm:block h-8 w-auto"
            />
          </Link>

          {/* Cities dropdown - after logo like city pages */}
          <CitiesDropdown />

          {cityName && (
            <span className="text-neutral-500 font-normal text-[15px]">{cityName}</span>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Premium mobile menu button */}
          <PremiumMobileMenu />
        </div>
      </div>
    </header>
  )
}

function CitiesDropdown() {
  return (
    <div className="relative hidden sm:block group">
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-accent-600 transition-colors">
        Cities
        <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown - Simple city list only */}
      <div className="absolute left-0 top-full mt-1 w-48 py-2 bg-white rounded-xl shadow-xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={routes.city(city.slug)}
            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-accent-50 hover:text-accent-700 transition-colors"
          >
            {city.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
