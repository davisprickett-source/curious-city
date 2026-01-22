'use client'

import { useState, useMemo } from 'react'
import type { DirectoryCategory, DirectoryItem, ActiveFilters } from '@/types/directory'
import { DirectoryHero } from './DirectoryHero'
import { EstablishmentCard } from './EstablishmentCard'
import { DiscoveryBox } from './DiscoveryBox'
import { FilterBar } from './FilterBar'

interface DirectoryTemplateProps {
  category: DirectoryCategory
  cityName: string
  citySlug: string
}

/**
 * Main template for directory/guide pages
 * Renders establishments with discovery boxes interspersed
 */
export function DirectoryTemplate({ category, cityName, citySlug }: DirectoryTemplateProps) {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({})

  // Merge establishments and discovery boxes into a single sorted list
  const items = useMemo(() => {
    const merged: DirectoryItem[] = []
    const { establishments, discoveryBoxes } = category

    // Filter establishments based on active filters
    const filtered = establishments.filter(est => {
      // Neighborhood filter
      if (activeFilters.neighborhoods?.length && est.neighborhood) {
        if (!activeFilters.neighborhoods.includes(est.neighborhood)) return false
      }

      // Price range filter
      if (activeFilters.priceRanges?.length && est.price) {
        if (!activeFilters.priceRanges.includes(est.price)) return false
      }

      // Tags filter
      if (activeFilters.tags?.length && est.tags) {
        if (!activeFilters.tags.some(tag => est.tags?.includes(tag))) return false
      }

      // Search filter
      if (activeFilters.search) {
        const search = activeFilters.search.toLowerCase()
        const searchable = [
          est.name,
          est.description,
          est.neighborhood,
          est.vibe,
          ...(est.tags || []),
        ].join(' ').toLowerCase()

        if (!searchable.includes(search)) return false
      }

      return true
    })

    // Add establishments
    filtered.forEach((est, index) => {
      merged.push({ type: 'establishment', data: est })

      // Check if any discovery boxes should be inserted after this establishment
      discoveryBoxes
        .filter(box => box.insertAfter === index)
        .forEach(box => {
          merged.push({ type: 'discovery', data: box })
        })
    })

    return merged
  }, [category, activeFilters])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <DirectoryHero
        title={`Best ${category.name} in ${cityName}`}
        description={category.description}
        citySlug={citySlug}
        categorySlug={category.slug}
      />

      {/* Filters */}
      {category.filters && (
        <FilterBar
          filters={category.filters}
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
          resultCount={items.filter(i => i.type === 'establishment').length}
        />
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No results found. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {items.map((item, index) => {
              if (item.type === 'establishment') {
                return (
                  <EstablishmentCard
                    key={item.data.id}
                    establishment={item.data}
                    index={index}
                  />
                )
              } else {
                return (
                  <DiscoveryBox
                    key={item.data.id}
                    box={item.data}
                  />
                )
              }
            })}
          </div>
        )}
      </div>

      {/* Related Articles */}
      {category.relatedArticles && category.relatedArticles.length > 0 && (
        <div className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Related Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.relatedArticles.map(slug => (
                <div key={slug} className="text-blue-600 hover:underline">
                  {/* TODO: Link to actual article */}
                  Article: {slug}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
