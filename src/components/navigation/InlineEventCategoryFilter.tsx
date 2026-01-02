'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'
import type { EventCategory } from '@/utils/eventCategoryUtils'

const categories: {
  id: EventCategory
  label: string
  activeClass: string
  inactiveClass: string
}[] = [
  {
    id: 'event',
    label: 'Events',
    activeClass: 'bg-blue-500 text-white',
    inactiveClass: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
  },
  {
    id: 'opening',
    label: 'New',
    activeClass: 'bg-green-500 text-white',
    inactiveClass: 'bg-green-50 text-green-700 hover:bg-green-100',
  },
  {
    id: 'closing',
    label: 'Closing',
    activeClass: 'bg-red-500 text-white',
    inactiveClass: 'bg-red-50 text-red-700 hover:bg-red-100',
  },
  {
    id: 'seasonal',
    label: 'Seasonal',
    activeClass: 'bg-amber-500 text-white',
    inactiveClass: 'bg-amber-50 text-amber-700 hover:bg-amber-100',
  },
  {
    id: 'limited',
    label: 'Limited',
    activeClass: 'bg-purple-500 text-white',
    inactiveClass: 'bg-purple-50 text-purple-700 hover:bg-purple-100',
  },
  {
    id: 'popup',
    label: 'Pop-ups',
    activeClass: 'bg-pink-500 text-white',
    inactiveClass: 'bg-pink-50 text-pink-700 hover:bg-pink-100',
  },
]

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

      if (newCategories.length === 0 || newCategories.length === categories.length) {
        params.delete('categories')
      } else {
        params.set('categories', newCategories.join(','))
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [searchParams, pathname, router]
  )

  return (
    <>
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category.id)

        return (
          <button
            key={category.id}
            onClick={() => toggleCategory(category.id)}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
              ${isSelected ? category.activeClass : category.inactiveClass}
            `}
          >
            {category.label}
          </button>
        )
      })}
    </>
  )
}
