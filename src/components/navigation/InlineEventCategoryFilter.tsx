'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'
import type { EventCategory } from '@/utils/eventCategoryUtils'
import { EVENT_CATEGORIES, ALL_EVENT_CATEGORIES } from '@/utils/eventCategoryUtils'

interface InlineEventCategoryFilterProps {
  selectedCategories?: EventCategory[]
}

export function InlineEventCategoryFilter({
  selectedCategories = [],
}: InlineEventCategoryFilterProps) {
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

      router.push(`${pathname}?${params.toString()}`, { scroll: false })
      router.refresh()
    },
    [searchParams, pathname, router]
  )

  return (
    <>
      {ALL_EVENT_CATEGORIES.map((categoryId) => {
        const category = EVENT_CATEGORIES[categoryId]
        const isSelected = selectedCategories.includes(categoryId)

        return (
          <button
            key={categoryId}
            onClick={() => toggleCategory(categoryId)}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
              ${isSelected
                ? 'bg-neutral-900 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }
            `}
          >
            {category.label}
          </button>
        )
      })}
    </>
  )
}
