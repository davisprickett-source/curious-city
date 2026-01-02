'use client'

import Link from 'next/link'

type CuriosityCategory = 'history' | 'architecture' | 'underground' | 'science' | 'culture' | 'law' | 'invention' | 'legend' | 'nature'

const categories: { value: CuriosityCategory; label: string }[] = [
  { value: 'history', label: 'History' },
  { value: 'architecture', label: 'Architecture' },
  { value: 'underground', label: 'Underground' },
  { value: 'science', label: 'Science' },
  { value: 'culture', label: 'Culture' },
  { value: 'law', label: 'Law' },
  { value: 'invention', label: 'Invention' },
  { value: 'legend', label: 'Legend' },
  { value: 'nature', label: 'Nature' },
]

interface InlineCuriositiesCategoryFilterProps {
  citySlug: string
  activeCategory?: string
  availableCategories?: string[]
}

export function InlineCuriositiesCategoryFilter({
  citySlug,
  activeCategory,
  availableCategories = [],
}: InlineCuriositiesCategoryFilterProps) {
  // Filter to only show categories that have content
  const displayCategories = availableCategories.length > 0
    ? categories.filter(cat => availableCategories.includes(cat.value))
    : categories

  return (
    <>
      {/* All button */}
      <Link
        href={`/${citySlug}/curiosities`}
        className={`
          px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
          ${
            !activeCategory
              ? 'bg-neutral-900 text-white'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }
        `}
      >
        All
      </Link>

      {displayCategories.map((category) => {
        const isActive = activeCategory === category.value
        const href = `/${citySlug}/curiosities?category=${category.value}`

        return (
          <Link
            key={category.value}
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
