/**
 * Event category utilities - genre-based event categories
 */

export type EventCategory = 'concerts' | 'nightlife' | 'food-drink' | 'art' | 'comedy' | 'sports' | 'theater' | 'markets'

// Category metadata for UI display
export const EVENT_CATEGORIES: Record<EventCategory, { label: string; icon: string; color: string }> = {
  concerts: { label: 'Concerts', icon: '🎵', color: 'purple' },
  nightlife: { label: 'Nightlife', icon: '🍸', color: 'pink' },
  'food-drink': { label: 'Food & Drink', icon: '🍽️', color: 'orange' },
  art: { label: 'Art', icon: '🎨', color: 'blue' },
  comedy: { label: 'Comedy', icon: '🎤', color: 'yellow' },
  sports: { label: 'Sports', icon: '⚽', color: 'green' },
  theater: { label: 'Theater', icon: '🎭', color: 'red' },
  markets: { label: 'Markets', icon: '🛍️', color: 'teal' },
}

// Get all category keys in display order
export const ALL_EVENT_CATEGORIES: EventCategory[] = [
  'concerts',
  'nightlife',
  'food-drink',
  'art',
  'comedy',
  'sports',
  'theater',
  'markets',
]

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

// Get category color class (Tailwind)
export function getCategoryColorClass(category: EventCategory, variant: 'bg' | 'text' | 'border' = 'bg'): string {
  const colorMap: Record<string, string> = {
    purple: variant === 'bg' ? 'bg-purple-500' : variant === 'text' ? 'text-purple-500' : 'border-purple-500',
    pink: variant === 'bg' ? 'bg-pink-500' : variant === 'text' ? 'text-pink-500' : 'border-pink-500',
    orange: variant === 'bg' ? 'bg-orange-500' : variant === 'text' ? 'text-orange-500' : 'border-orange-500',
    blue: variant === 'bg' ? 'bg-blue-500' : variant === 'text' ? 'text-blue-500' : 'border-blue-500',
    yellow: variant === 'bg' ? 'bg-yellow-500' : variant === 'text' ? 'text-yellow-500' : 'border-yellow-500',
    green: variant === 'bg' ? 'bg-green-500' : variant === 'text' ? 'text-green-500' : 'border-green-500',
    red: variant === 'bg' ? 'bg-red-500' : variant === 'text' ? 'text-red-500' : 'border-red-500',
    teal: variant === 'bg' ? 'bg-teal-500' : variant === 'text' ? 'text-teal-500' : 'border-teal-500',
  }
  const meta = EVENT_CATEGORIES[category]
  return meta ? colorMap[meta.color] : colorMap.purple
}
