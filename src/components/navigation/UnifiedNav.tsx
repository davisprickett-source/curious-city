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
}

export function UnifiedNav({
  citySlug,
  cityName,
  currentSection,
  sceneCategory,
  customFilters,
}: UnifiedNavProps) {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return

      ticking.current = true
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        const scrollDelta = currentScrollY - lastScrollY.current

        // Only apply hide/show on mobile (sm breakpoint is 640px)
        if (window.innerWidth < 640) {
          // Show navbar when scrolling up or at top
          if (scrollDelta < -5 || currentScrollY < 50) {
            setIsVisible(true)
          }
          // Hide navbar when scrolling down past threshold
          else if (scrollDelta > 5 && currentScrollY > 100) {
            setIsVisible(false)
          }
        } else {
          setIsVisible(true)
        }

        lastScrollY.current = currentScrollY
        ticking.current = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-white backdrop-blur-md border-b border-neutral-100 ui-sans transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full sm:translate-y-0'
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
                sceneCategory={sceneCategory}
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
