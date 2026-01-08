'use client'

import Link from 'next/link'
import { useState, useRef, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const timeoutRef = useRef<NodeJS.Timeout>()
  const { buildCityUrl } = useNavigation()

  const cities = [...CITY_METADATA]
    .map((city) => ({ slug: city.slug, name: city.name }))
    .sort((a, b) => a.name.localeCompare(b.name))

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    // Add a small delay before closing to make hover more forgiving
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  if (!currentCitySlug || !currentCityName) {
    return null
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 text-base font-medium text-accent-600 hover:text-accent-700 rounded-lg hover:bg-neutral-50 transition-colors"
      >
        <span className="text-neutral-900">Curious</span>
        <span className="text-neutral-400 mx-0.5">|</span>
        <span>{currentCityName}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-0 top-full pt-1 w-56 z-50"
          >
            <div className="py-2 bg-white rounded-xl shadow-xl border border-neutral-100 max-h-[70vh] overflow-y-auto">
              {cities.map((city, index) => {
                const isActive = city.slug === currentCitySlug

                return (
                  <motion.div
                    key={city.slug}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.03, // Staggered wave effect
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <Link
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
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function CitySelector(props: CitySelectorProps) {
  return (
    <Suspense fallback={
      <div className="flex items-center gap-1 px-3 py-2 text-base font-medium">
        <span className="text-neutral-900">Curious</span>
        <span className="text-neutral-400 mx-0.5">|</span>
        <span className="text-accent-600">{props.currentCityName || 'Loading...'}</span>
      </div>
    }>
      <CitySelectorContent {...props} />
    </Suspense>
  )
}
