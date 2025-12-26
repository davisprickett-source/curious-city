/**
 * Event category utilities - for use in server components
 */

export type EventCategory = 'event' | 'opening' | 'closing' | 'seasonal' | 'limited' | 'popup'

// Helper to get selected categories from URL params
export function getSelectedCategories(categoriesParam: string | undefined): EventCategory[] {
  if (!categoriesParam) return []
  return categoriesParam.split(',').filter(Boolean) as EventCategory[]
}

// Helper to filter events by categories
export function filterEventsByCategories<T extends { category: string }>(
  events: T[],
  selectedCategories: EventCategory[]
): T[] {
  if (selectedCategories.length === 0) {
    return events // No filter = show all
  }
  return events.filter(event => selectedCategories.includes(event.category as EventCategory))
}
