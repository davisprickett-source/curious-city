'use client'

import { DropdownEventFilters } from './DropdownEventFilters'
import { DropdownCategoryFilter } from './DropdownCategoryFilter'
import type { EventView } from '@/components/EventFilter'
import type { EventCategory } from '@/utils/eventCategoryUtils'
import type { CitySection } from '@/lib/routes'

interface FilterBarProps {
  currentSection?: CitySection
  citySlug?: string
  eventView?: EventView
  eventCategories?: EventCategory[]
  sceneCategory?: string
  curiosityCategory?: string
  availableCuriosityCategories?: string[]
  curiosityCategoryCounts?: Record<string, number>
  darkHistoryCategory?: string
  availableDarkHistoryCategories?: string[]
  darkHistoryCategoryCounts?: Record<string, number>
}

const curiosityCategoryLabels: Record<string, string> = {
  history: 'History',
  architecture: 'Architecture',
  underground: 'Underground',
  science: 'Science',
  culture: 'Culture',
  law: 'Law',
  invention: 'Invention',
  legend: 'Legend',
  nature: 'Nature',
}

const darkHistoryCategoryLabels: Record<string, string> = {
  unsolved: 'Unsolved',
  crime: 'Crime',
  disaster: 'Disaster',
  mystery: 'Mystery',
  macabre: 'Macabre',
  forgotten: 'Forgotten',
  haunting: 'Haunting',
  'cold-case': 'Cold Case',
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
  eventView,
  eventCategories,
  sceneCategory,
  curiosityCategory,
  availableCuriosityCategories = [],
  curiosityCategoryCounts = {},
  darkHistoryCategory,
  availableDarkHistoryCategories = [],
  darkHistoryCategoryCounts = {},
}: FilterBarProps) {
  // No filters to show
  if (!currentSection || !citySlug) return null

  // Events page: show combined time and category dropdown
  if (currentSection === 'events') {
    return (
      <div className="flex items-center gap-2">
        <DropdownEventFilters currentView={eventView} selectedCategories={eventCategories} />
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

  // Curiosities page: show category dropdown
  if (currentSection === 'curiosities') {
    const categories = availableCuriosityCategories.map((cat) => ({
      value: cat,
      label: curiosityCategoryLabels[cat] || cat,
      count: curiosityCategoryCounts[cat],
    }))

    return (
      <div className="flex items-center gap-2">
        <DropdownCategoryFilter
          citySlug={citySlug}
          basePath="curiosities"
          categories={categories}
          activeCategory={curiosityCategory}
          label="Type"
        />
      </div>
    )
  }

  // Dark History page: show category dropdown
  if (currentSection === 'dark-history') {
    const categories = availableDarkHistoryCategories.map((cat) => ({
      value: cat,
      label: darkHistoryCategoryLabels[cat] || cat,
      count: darkHistoryCategoryCounts[cat],
    }))

    return (
      <div className="flex items-center gap-2">
        <DropdownCategoryFilter
          citySlug={citySlug}
          basePath="dark-history"
          categories={categories}
          activeCategory={darkHistoryCategory}
          label="Type"
        />
      </div>
    )
  }

  // Other pages: no filters
  return null
}
