'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Category {
  value: string
  label: string
  count?: number
}

interface DropdownCategoryFilterProps {
  citySlug: string
  basePath: string // e.g., 'curiosities', 'dark-history'
  categories: Category[]
  activeCategory?: string
  label?: string // e.g., 'Category', 'Type'
}

export function DropdownCategoryFilter({
  citySlug,
  basePath,
  categories,
  activeCategory,
  label = 'Category',
}: DropdownCategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  const activeLabel = activeCategory
    ? categories.find((c) => c.value === activeCategory)?.label || 'All'
    : 'All'

  const totalCount = categories.reduce((sum, cat) => sum + (cat.count || 0), 0)

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
      >
        <span className="text-neutral-500">{label}:</span>
        <span>{activeLabel}</span>
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
        <div className="absolute left-0 top-full mt-1 w-56 py-2 bg-white rounded-xl shadow-xl border border-neutral-100 z-50">
          {/* All option */}
          <Link
            href={`/${citySlug}/${basePath}`}
            onClick={() => setIsOpen(false)}
            className={`
              flex items-center justify-between px-4 py-2 text-sm transition-colors
              ${
                !activeCategory
                  ? 'bg-accent-50 text-accent-700 font-medium'
                  : 'text-neutral-700 hover:bg-accent-50 hover:text-accent-700'
              }
            `}
          >
            <span>All</span>
            {totalCount > 0 && <span className="text-neutral-400 text-xs">({totalCount})</span>}
          </Link>

          <div className="my-1 border-t border-neutral-100" />

          {/* Category options */}
          {categories.map((category) => {
            const isActive = activeCategory === category.value

            return (
              <Link
                key={category.value}
                href={`/${citySlug}/${basePath}?category=${category.value}`}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center justify-between px-4 py-2 text-sm transition-colors
                  ${
                    isActive
                      ? 'bg-accent-50 text-accent-700 font-medium'
                      : 'text-neutral-700 hover:bg-accent-50 hover:text-accent-700'
                  }
                `}
              >
                <span>{category.label}</span>
                {category.count !== undefined && (
                  <span className="text-neutral-400 text-xs">({category.count})</span>
                )}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
