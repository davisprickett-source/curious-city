'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'
import type { EventCategory } from '@/utils/eventCategoryUtils'
import { EVENT_CATEGORIES, ALL_EVENT_CATEGORIES, getCategoryColorClass } from '@/utils/eventCategoryUtils'

// Re-export for convenience
export type { EventCategory } from '@/utils/eventCategoryUtils'
export { getSelectedCategories, filterEventsByCategories } from '@/utils/eventCategoryUtils'

export function EventCategoryFilter() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  // Parse selected categories from URL
  const selectedCategories = searchParams.get('categories')?.split(',').filter(Boolean) as EventCategory[] || []
  const allSelected = selectedCategories.length === 0

  const updateCategories = useCallback((newCategories: EventCategory[]) => {
    const params = new URLSearchParams(searchParams.toString())

    if (newCategories.length === 0 || newCategories.length === ALL_EVENT_CATEGORIES.length) {
      // All selected or none selected = show all (remove param)
      params.delete('categories')
    } else {
      params.set('categories', newCategories.join(','))
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
    router.refresh()
  }, [searchParams, pathname, router])

  const toggleCategory = (categoryId: EventCategory) => {
    if (selectedCategories.includes(categoryId)) {
      // Remove category
      updateCategories(selectedCategories.filter(c => c !== categoryId))
    } else {
      // Add category
      updateCategories([...selectedCategories, categoryId])
    }
  }

  const selectAll = () => {
    updateCategories([])
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-neutral-500 mr-1">Filter:</span>

      {/* All button */}
      <button
        onClick={selectAll}
        className={`
          px-3 py-1.5 rounded-full text-sm font-medium transition-colors
          ${allSelected
            ? 'bg-neutral-900 text-white'
            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
          }
        `}
      >
        All
      </button>

      {/* Category pills */}
      {ALL_EVENT_CATEGORIES.map((categoryId) => {
        const category = EVENT_CATEGORIES[categoryId]
        const isSelected = selectedCategories.includes(categoryId)

        return (
          <button
            key={categoryId}
            onClick={() => toggleCategory(categoryId)}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5
              ${isSelected
                ? `${getCategoryColorClass(categoryId)} text-white`
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }
            `}
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
          </button>
        )
      })}
    </div>
  )
}
