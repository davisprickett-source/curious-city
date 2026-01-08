'use client'

import { DropdownEventFilters } from './DropdownEventFilters'
import { DropdownCategoryFilter } from './DropdownCategoryFilter'
import type { EventCategory } from '@/utils/eventCategoryUtils'
import type { AnyCitySection } from '@/lib/routes'

interface FilterBarProps {
  currentSection?: AnyCitySection
  citySlug?: string
  eventCategories?: EventCategory[]
  sceneCategory?: string
  curiosityCategory?: string
  availableCuriosityCategories?: string[]
  curiosityCategoryCounts?: Record<string, number>
  darkHistoryCategory?: string
  availableDarkHistoryCategories?: string[]
  darkHistoryCategoryCounts?: Record<string, number>
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
  eventCategories,
  sceneCategory,
}: FilterBarProps) {
  // No filters to show
  if (!currentSection || !citySlug) return null

  // Events page: show combined category dropdown
  if (currentSection === 'events') {
    return (
      <div className="flex items-center gap-2">
        <DropdownEventFilters selectedCategories={eventCategories} />
      </div>
    )
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
