'use client'

import Link from 'next/link'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import type { EventView } from '@/components/EventFilter'
import type { EventCategory } from '@/utils/eventCategoryUtils'

const viewLabels: Record<EventView, string> = {
  today: 'Today',
  weekend: 'This Weekend',
  week: 'This Week',
  month: 'This Month',
}

const categories: {
  id: EventCategory
  label: string
  activeClass: string
}[] = [
  { id: 'event', label: 'Events', activeClass: 'bg-blue-500 text-white' },
  { id: 'opening', label: 'New Openings', activeClass: 'bg-green-500 text-white' },
  { id: 'closing', label: 'Last Chance', activeClass: 'bg-red-500 text-white' },
  { id: 'seasonal', label: 'Seasonal', activeClass: 'bg-amber-500 text-white' },
  { id: 'limited', label: 'Limited Time', activeClass: 'bg-purple-500 text-white' },
  { id: 'popup', label: 'Pop-ups', activeClass: 'bg-pink-500 text-white' },
]

interface DropdownEventFiltersProps {
  currentView?: EventView
  selectedCategories?: EventCategory[]
}

export function DropdownEventFilters({
  currentView = 'week',
  selectedCategories = [],
}: DropdownEventFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const buildHref = (view: EventView) => {
    const params = new URLSearchParams(searchParams.toString())
    if (view === 'week') {
      params.delete('view')
    } else {
      params.set('view', view)
    }
    const queryString = params.toString()
    return queryString ? `${pathname}?${queryString}` : pathname
  }

  const toggleCategory = useCallback(
    (category: EventCategory) => {
      const params = new URLSearchParams(searchParams.toString())
      const currentCategories = params.get('categories')?.split(',').filter(Boolean) || []

      let newCategories: string[]
      if (currentCategories.includes(category)) {
        newCategories = currentCategories.filter((c) => c !== category)
      } else {
        newCategories = [...currentCategories, category]
      }

      if (newCategories.length === 0 || newCategories.length === categories.length) {
        params.delete('categories')
      } else {
        params.set('categories', newCategories.join(','))
      }

      const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
      router.push(newUrl, { scroll: false })
      // Force server component to re-render with new params
      router.refresh()
    },
    [searchParams, pathname, router]
  )

  const selectedCategoryCount = selectedCategories.length
  const categoryLabel =
    selectedCategoryCount === 0 || selectedCategoryCount === categories.length
      ? 'All Types'
      : selectedCategoryCount === 1
      ? categories.find((c) => selectedCategories.includes(c.id))?.label || 'Filtered'
      : `${selectedCategoryCount} Types`

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
      >
        <span>{viewLabels[currentView]}</span>
        <span className="w-px h-4 bg-neutral-300" />
        <span>{categoryLabel}</span>
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
        <div className="absolute left-0 top-full mt-1 w-64 py-2 bg-white rounded-xl shadow-xl border border-neutral-100 z-50">
          {/* Time Period Section */}
          <div className="px-4 py-2">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
              Time Period
            </div>
            <div className="space-y-1">
              {(['today', 'weekend', 'week', 'month'] as EventView[]).map((view) => (
                <Link
                  key={view}
                  href={buildHref(view)}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block px-3 py-1.5 rounded-lg text-sm transition-colors
                    ${
                      currentView === view
                        ? 'bg-accent-50 text-accent-700 font-medium'
                        : 'text-neutral-700 hover:bg-accent-50 hover:text-accent-700'
                    }
                  `}
                >
                  {viewLabels[view]}
                </Link>
              ))}
            </div>
          </div>

          <div className="my-2 border-t border-neutral-100" />

          {/* Categories Section */}
          <div className="px-4 py-2">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
              Event Types
            </div>
            <div className="space-y-1">
              {categories.map((category) => {
                const isSelected = selectedCategories.includes(category.id)

                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      toggleCategory(category.id)
                    }}
                    className={`
                      w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors text-left
                      ${
                        isSelected
                          ? 'bg-accent-50 text-accent-700 font-medium'
                          : 'text-neutral-700 hover:bg-accent-50 hover:text-accent-700'
                      }
                    `}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? category.activeClass : 'bg-neutral-300'
                      }`}
                    />
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
