'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { EVENT_CATEGORIES, ALL_EVENT_CATEGORIES, getCategoryColorClass } from '@/utils/eventCategoryUtils'
import type { EventCategory } from '@/utils/eventCategoryUtils'
import type { EventItem } from '@/types/content'

interface CategoryFilterPillsProps {
  selectedCategories: EventCategory[]
  events: EventItem[] // For counting
}

export function CategoryFilterPills({ selectedCategories, events }: CategoryFilterPillsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Count events per category
  const categoryCounts = ALL_EVENT_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = events.filter(e => e.category === cat).length
    return acc
  }, {} as Record<EventCategory, number>)

  const toggleCategory = (category: EventCategory) => {
    const params = new URLSearchParams(searchParams.toString())

    let newCategories: EventCategory[]
    if (selectedCategories.includes(category)) {
      // Remove category
      newCategories = selectedCategories.filter(c => c !== category)
    } else {
      // Add category
      newCategories = [...selectedCategories, category]
    }

    if (newCategories.length === 0) {
      params.delete('categories')
    } else {
      params.set('categories', newCategories.join(','))
    }

    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
    router.push(newUrl, { scroll: false })
    router.refresh()
  }

  const clearAll = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('categories')
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
    router.push(newUrl, { scroll: false })
    router.refresh()
  }

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* All filter */}
      <button
        onClick={clearAll}
        className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          selectedCategories.length === 0
            ? 'bg-neutral-900 text-white'
            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
        }`}
      >
        All
        <span className="ml-1.5 text-xs opacity-70">({events.length})</span>
      </button>

      {/* Category pills */}
      {ALL_EVENT_CATEGORIES.map((category) => {
        const meta = EVENT_CATEGORIES[category]
        const isSelected = selectedCategories.includes(category)
        const count = categoryCounts[category]

        // Hide categories with no events
        if (count === 0) return null

        return (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              isSelected
                ? `${getCategoryColorClass(category)} text-white`
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <span>{meta.icon}</span>
            <span>{meta.label}</span>
            <span className={`text-xs ${isSelected ? 'opacity-80' : 'opacity-60'}`}>({count})</span>
          </button>
        )
      })}
    </div>
  )
}
