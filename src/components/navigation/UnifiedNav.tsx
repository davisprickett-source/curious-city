'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { routes, citySections, type AnyCitySection } from '@/lib/routes'
import { CitySelector } from './CitySelector'
import { FilterBar } from './FilterBar'
import { PremiumMobileMenu } from '@/components/PremiumMobileMenu'

interface UnifiedNavProps {
  // Context
  citySlug?: string
  cityName?: string
  currentSection?: AnyCitySection

  // Filter state (from URL searchParams)
  sceneCategory?: string

  // Optional customization
  customFilters?: React.ReactNode

  // Use fixed positioning (for pages with fixed map backgrounds like scrolly pages)
  useFixedPosition?: boolean
}

// Get shortened city name for mobile navbar
function getMobileCityName(cityName?: string): string {
  if (!cityName) return ''

  // Abbreviate long city names
  const abbreviations: Record<string, string> = {
    'Colorado Springs': 'Co Springs',
    'Salt Lake City': 'SLC',
  }

  return abbreviations[cityName] || cityName
}

export function UnifiedNav({
  citySlug,
  cityName,
  currentSection,
  sceneCategory,
  customFilters,
  useFixedPosition = false,
}: UnifiedNavProps) {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    // Skip scroll hide/show behavior when using fixed positioning
    if (useFixedPosition) {
      setIsVisible(true)
      return
    }

    let rafId: number | null = null

    const handleScroll = () => {
      if (rafId) return

      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY

        // Only apply hide/show on mobile (sm breakpoint is 640px)
        // Desktop nav is ALWAYS visible and sticky
        if (window.innerWidth < 640) {
          // Always show at top of page
          if (currentScrollY < 50) {
            setIsVisible(true)
          }
          // Show when scrolling up
          else if (currentScrollY < lastScrollY.current) {
            setIsVisible(true)
          }
          // Hide when scrolling down past threshold
          else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsVisible(false)
          }
        } else {
          // Desktop: always visible
          setIsVisible(true)
        }

        lastScrollY.current = currentScrollY
        rafId = null
      })
    }

    // Initialize lastScrollY
    lastScrollY.current = window.scrollY

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [useFixedPosition])

  // For scrolly pages: use relative on mobile so nav scrolls away completely, fixed on desktop
  // For regular pages: use fixed positioning on both mobile and desktop for hide/show to work
  const positionClass = useFixedPosition
    ? 'relative sm:fixed sm:top-0 sm:left-0 sm:right-0'
    : 'fixed top-0 left-0 right-0'

  return (
    <nav
      className={`${positionClass} z-50 bg-white backdrop-blur-md border-b border-neutral-100 ui-sans transition-transform duration-300 ${!useFixedPosition && !isVisible ? '-translate-y-full' : ''
        }`}
    >
      <div className="container-page">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center h-14 gap-2">
          {/* Logo */}
          <Link
            href={routes.home()}
            className="flex items-center font-semibold text-neutral-900 hover:text-accent-600 transition-colors tracking-tight"
          >
            <img
              src="/logos/ccs.png"
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
            const href = `/${citySlug}${section.path}`

            return (
              <Link
                key={section.id}
                href={href}
                className={`group px-3 py-2 text-base font-medium transition-colors !min-h-0 !min-w-0 ${isActive
                  ? 'text-accent-600'
                  : 'text-neutral-700 hover:text-neutral-900'
                  }`}
              >
                <span className="relative inline-block">
                  {section.label}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  )}
                </span>
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
                sceneCategory={sceneCategory}
              />
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden items-center justify-between h-14">
          <div className="flex items-center gap-2 min-w-0">
            <Link
              href={routes.home()}
              className="flex-shrink-0 flex items-center font-semibold text-neutral-900 tracking-tight"
            >
              <img
                src="/logos/ccs.png"
                alt="Curious City"
                className="h-8 w-auto"
              />
            </Link>
            {cityName && (
              <Link
                href={routes.city(citySlug!)}
                className="font-serif text-lg font-semibold text-[#c65d3b] truncate"
              >
                {getMobileCityName(cityName)}
              </Link>
            )}
          </div>
          <PremiumMobileMenu currentCitySlug={citySlug} />
        </div>
      </div>
    </nav>
  )
}
