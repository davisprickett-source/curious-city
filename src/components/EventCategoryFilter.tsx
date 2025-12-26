'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'
import type { EventCategory } from '@/utils/eventCategoryUtils'

// Re-export for convenience
export type { EventCategory } from '@/utils/eventCategoryUtils'
export { getSelectedCategories, filterEventsByCategories } from '@/utils/eventCategoryUtils'

const categories: { id: EventCategory; label: string; activeClass: string; inactiveClass: string }[] = [
  { id: 'event', label: 'Events', activeClass: 'bg-blue-500 text-white', inactiveClass: 'bg-blue-50 text-blue-700 hover:bg-blue-100' },
  { id: 'opening', label: 'New Openings', activeClass: 'bg-green-500 text-white', inactiveClass: 'bg-green-50 text-green-700 hover:bg-green-100' },
  { id: 'closing', label: 'Last Chance', activeClass: 'bg-red-500 text-white', inactiveClass: 'bg-red-50 text-red-700 hover:bg-red-100' },
  { id: 'seasonal', label: 'Seasonal', activeClass: 'bg-amber-500 text-white', inactiveClass: 'bg-amber-50 text-amber-700 hover:bg-amber-100' },
  { id: 'limited', label: 'Limited Time', activeClass: 'bg-purple-500 text-white', inactiveClass: 'bg-purple-50 text-purple-700 hover:bg-purple-100' },
  { id: 'popup', label: 'Pop-ups', activeClass: 'bg-pink-500 text-white', inactiveClass: 'bg-pink-50 text-pink-700 hover:bg-pink-100' },
]

export function EventCategoryFilter() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  // Parse selected categories from URL
  const selectedCategories = searchParams.get('categories')?.split(',').filter(Boolean) as EventCategory[] || []
  const allSelected = selectedCategories.length === 0

  const updateCategories = useCallback((newCategories: EventCategory[]) => {
    const params = new URLSearchParams(searchParams.toString())

    if (newCategories.length === 0 || newCategories.length === categories.length) {
      // All selected or none selected = show all (remove param)
      params.delete('categories')
    } else {
      params.set('categories', newCategories.join(','))
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
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
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category.id)

        return (
          <button
            key={category.id}
            onClick={() => toggleCategory(category.id)}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-colors
              ${isSelected ? category.activeClass : category.inactiveClass}
            `}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
