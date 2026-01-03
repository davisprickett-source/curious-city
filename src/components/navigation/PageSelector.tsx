'use client'

import Link from 'next/link'
import { useState, Suspense } from 'react'
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
  const { buildPageUrl } = useNavigation()

  const currentLabel =
    citySections.find((s) => s.id === currentSection)?.label || 'History'

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-700 hover:text-accent-600 rounded-lg hover:bg-neutral-50 transition-colors"
      >
        {currentLabel}
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
        <div className="absolute left-0 top-full mt-1 w-48 py-2 bg-white rounded-xl shadow-xl border border-neutral-100 z-50">
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
      )}
    </div>
  )
}

export function PageSelector(props: PageSelectorProps) {
  const currentLabel =
    citySections.find((s) => s.id === props.currentSection)?.label || 'History'

  return (
    <Suspense fallback={
      <div className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-700">
        {currentLabel}
      </div>
    }>
      <PageSelectorContent {...props} />
    </Suspense>
  )
}
