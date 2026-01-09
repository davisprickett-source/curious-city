'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import type { EventCategory } from '@/utils/eventCategoryUtils'
import { EVENT_CATEGORIES, ALL_EVENT_CATEGORIES } from '@/utils/eventCategoryUtils'

interface DropdownEventFiltersProps {
  selectedCategories?: EventCategory[]
}

export function DropdownEventFilters({
  selectedCategories = [],
}: DropdownEventFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

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

      if (newCategories.length === 0 || newCategories.length === ALL_EVENT_CATEGORIES.length) {
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
    selectedCategoryCount === 0 || selectedCategoryCount === ALL_EVENT_CATEGORIES.length
      ? 'All Types'
      : selectedCategoryCount === 1
      ? EVENT_CATEGORIES[selectedCategories[0]]?.label || 'Filtered'
      : `${selectedCategoryCount} Types`

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
      >
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
          {/* Categories Section */}
          <div className="px-4 py-2">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
              Event Types
            </div>
            <div className="space-y-1">
              {ALL_EVENT_CATEGORIES.map((categoryId) => {
                const category = EVENT_CATEGORIES[categoryId]
                const isSelected = selectedCategories.includes(categoryId)

                return (
                  <button
                    key={categoryId}
                    onClick={() => {
                      toggleCategory(categoryId)
                    }}
                    className={`
                      w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors text-left
                      ${
                        isSelected
                          ? 'bg-neutral-900 text-white font-medium'
                          : 'text-neutral-700 hover:bg-neutral-100'
                      }
                    `}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? 'bg-white' : 'bg-neutral-400'
                      }`}
                    />
                    <span>{category.label}</span>
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
