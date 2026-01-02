'use client'

import Link from 'next/link'

const categories = [
  { value: '', label: 'All' },
  { value: 'street', label: 'Street' },
  { value: 'architecture', label: 'Architecture' },
  { value: 'nature', label: 'Nature' },
  { value: 'people', label: 'People' },
  { value: 'night', label: 'Night' },
]

interface InlineScenesCategoryFilterProps {
  citySlug: string
  activeCategory?: string
}

export function InlineScenesCategoryFilter({
  citySlug,
  activeCategory,
}: InlineScenesCategoryFilterProps) {
  return (
    <>
      {categories.map((category) => {
        const isActive = (activeCategory || '') === category.value
        const href =
          category.value === ''
            ? `/${citySlug}/scenes`
            : `/${citySlug}/scenes?category=${category.value}`

        return (
          <Link
            key={category.value || 'all'}
            href={href}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
              ${
                isActive
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }
            `}
          >
            {category.label}
          </Link>
        )
      })}
    </>
  )
}
