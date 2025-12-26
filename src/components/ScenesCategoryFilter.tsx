'use client'

import Link from 'next/link'

interface ScenesCategoryFilterProps {
  categories: string[]
  categoryLabels: Record<string, string>
  categoryIcons: Record<string, string>
  activeCategory?: string
  citySlug: string
}

export function ScenesCategoryFilter({
  categories,
  categoryLabels,
  activeCategory,
  citySlug,
}: ScenesCategoryFilterProps) {
  return (
    <nav className="border-b border-neutral-200 bg-neutral-50 mb-8 -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
          {/* All button */}
          <Link
            href={`/${citySlug}/scenes`}
            className={`
              px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors
              ${!activeCategory
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
              }
            `}
          >
            All
          </Link>

          {/* Category buttons */}
          {categories.map((category) => (
            <Link
              key={category}
              href={`/${citySlug}/scenes?category=${category}`}
              className={`
                px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors
                ${activeCategory === category
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                }
              `}
            >
              {categoryLabels[category] || category}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
