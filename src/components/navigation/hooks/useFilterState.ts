'use client'

import { useSearchParams } from 'next/navigation'
import type { EventView } from '@/components/EventFilter'
import type { EventCategory } from '@/utils/eventCategoryUtils'

/**
 * Hook for parsing and managing filter state from URL
 */
export function useFilterState() {
  const searchParams = useSearchParams()

  // Event filters
  const eventView: EventView = (searchParams.get('view') as EventView) || 'week'

  const eventCategories: EventCategory[] =
    (searchParams.get('categories')?.split(',').filter(Boolean) as EventCategory[]) || []

  // Scene filters
  const sceneCategory = searchParams.get('category') || undefined

  return {
    eventView,
    eventCategories,
    sceneCategory,
  }
}
