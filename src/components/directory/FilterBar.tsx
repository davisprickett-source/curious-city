'use client'

import { useState } from 'react'
import type { CategoryFilters, ActiveFilters } from '@/types/directory'

interface FilterBarProps {
  filters: CategoryFilters
  activeFilters: ActiveFilters
  onFilterChange: (filters: ActiveFilters) => void
  resultCount: number
}

/**
 * Filter bar for directory pages
 * Allows filtering by neighborhood, price, tags, etc.
 */
export function FilterBar({ filters, activeFilters, onFilterChange, resultCount }: FilterBarProps) {
  const [searchInput, setSearchInput] = useState(activeFilters.search || '')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSearchChange = (value: string) => {
    setSearchInput(value)
    onFilterChange({ ...activeFilters, search: value || undefined })
  }

  const toggleNeighborhood = (neighborhood: string) => {
    const current = activeFilters.neighborhoods || []
    const updated = current.includes(neighborhood)
      ? current.filter(n => n !== neighborhood)
      : [...current, neighborhood]
    onFilterChange({ ...activeFilters, neighborhoods: updated.length ? updated : undefined })
  }

  const togglePriceRange = (price: '$' | '$$' | '$$$' | '$$$$') => {
    const current = activeFilters.priceRanges || []
    const updated = current.includes(price)
      ? current.filter(p => p !== price)
      : [...current, price]
    onFilterChange({ ...activeFilters, priceRanges: updated.length ? updated : undefined })
  }

  const toggleTag = (tag: string) => {
    const current = activeFilters.tags || []
    const updated = current.includes(tag)
      ? current.filter(t => t !== tag)
      : [...current, tag]
    onFilterChange({ ...activeFilters, tags: updated.length ? updated : undefined })
  }

  const clearFilters = () => {
    setSearchInput('')
    onFilterChange({})
  }

  const hasActiveFilters =
    activeFilters.neighborhoods?.length ||
    activeFilters.priceRanges?.length ||
    activeFilters.tags?.length ||
    activeFilters.search

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Search and toggle */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchInput}
              onChange={e => handleSearchChange(e.target.value)}
              placeholder="Search by name, neighborhood, or vibe..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>
        </div>

        {/* Expanded filters */}
        {isExpanded && (
          <div className="space-y-4 pb-4">
            {/* Neighborhoods */}
            {filters.neighborhoods && filters.neighborhoods.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Neighborhood
                </label>
                <div className="flex flex-wrap gap-2">
                  {filters.neighborhoods.map(neighborhood => (
                    <button
                      key={neighborhood}
                      onClick={() => toggleNeighborhood(neighborhood)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        activeFilters.neighborhoods?.includes(neighborhood)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {neighborhood}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price ranges */}
            {filters.priceRanges && filters.priceRanges.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="flex flex-wrap gap-2">
                  {filters.priceRanges.map(price => (
                    <button
                      key={price}
                      onClick={() => togglePriceRange(price)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        activeFilters.priceRanges?.includes(price)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {filters.tags && filters.tags.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Vibe & Features
                </label>
                <div className="flex flex-wrap gap-2">
                  {filters.tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        activeFilters.tags?.includes(tag)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Results count and clear */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            {resultCount} {resultCount === 1 ? 'result' : 'results'}
          </span>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
