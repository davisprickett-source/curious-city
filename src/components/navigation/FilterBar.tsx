'use client'

import { DropdownCategoryFilter } from './DropdownCategoryFilter'
import type { AnyCitySection } from '@/lib/routes'

interface FilterBarProps {
  currentSection?: AnyCitySection
  citySlug?: string
  sceneCategory?: string
}

const scenesCategoryLabels: Record<string, string> = {
  street: 'Street',
  architecture: 'Architecture',
  nature: 'Nature',
  people: 'People',
  night: 'Night',
}

export function FilterBar({
  currentSection,
  citySlug,
  sceneCategory,
}: FilterBarProps) {
  // No filters to show
  if (!currentSection || !citySlug) return null

  // Events page: filters are on the page itself, not in navbar
  if (currentSection === 'events') {
    return null
  }

  // Scenes page: show category dropdown
  if (currentSection === 'scenes') {
    const categories = Object.entries(scenesCategoryLabels).map(([value, label]) => ({
      value,
      label,
    }))

    return (
      <div className="flex items-center gap-2">
        <DropdownCategoryFilter
          citySlug={citySlug}
          basePath="scenes"
          categories={categories}
          activeCategory={sceneCategory}
          label="Category"
        />
      </div>
    )
  }

  // Curiosities page: no filters (removed for cleaner listicle experience)
  if (currentSection === 'curiosities') {
    return null
  }

  // Dark History page: no filters (removed for cleaner listicle experience)
  if (currentSection === 'dark-history') {
    return null
  }

  // Other pages: no filters
  return null
}
