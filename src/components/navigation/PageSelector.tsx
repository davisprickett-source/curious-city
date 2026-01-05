'use client'

import Link from 'next/link'
import { useState, useRef, useEffect, Suspense } from 'react'
import { citySections, type AnyCitySection } from '@/lib/routes'
import { useNavigation } from './hooks/useNavigation'

interface PageSelectorProps {
  citySlug: string
  currentSection?: AnyCitySection
  preserveFilters?: boolean
}

function PageSelectorContent({
  citySlug,
  currentSection,
  preserveFilters = true,
}: PageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const { buildPageUrl } = useNavigation()

  // If no section is set (on city home page), don't show the selector
  if (!currentSection) {
    return null
  }

  const currentLabel =
    citySections.find((s) => s.id === currentSection)?.label || 'Sections'

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
        {currentLabel}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-1 w-48 z-50">
          <div className="py-2 bg-white rounded-xl shadow-xl border border-neutral-100">
            {citySections.map((section) => {
              const isActive = currentSection === section.id

              return (
                <Link
                  key={section.id}
                  href={buildPageUrl(citySlug, section.id, preserveFilters)}
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
                  {section.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export function PageSelector(props: PageSelectorProps) {
  // If no section is set, don't render anything
  if (!props.currentSection) {
    return null
  }

  const currentLabel =
    citySections.find((s) => s.id === props.currentSection)?.label || 'Sections'

  return (
    <Suspense fallback={
      <div className="flex items-center gap-1 px-3 py-2 text-base font-medium text-accent-600">
        {currentLabel}
      </div>
    }>
      <PageSelectorContent {...props} />
    </Suspense>
  )
}
