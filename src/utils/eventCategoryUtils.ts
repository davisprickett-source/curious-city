/**
 * Event category utilities - genre-based event categories
 */

export type EventCategory = 'concerts' | 'nightlife' | 'food-drink' | 'art' | 'comedy' | 'sports' | 'theater' | 'markets' | 'free'

// Category metadata for UI display - minimal, no emojis
export const EVENT_CATEGORIES: Record<EventCategory, { label: string; shortLabel: string }> = {
  concerts: { label: 'Concerts', shortLabel: 'Music' },
  nightlife: { label: 'Nightlife', shortLabel: 'Night' },
  'food-drink': { label: 'Food & Drink', shortLabel: 'Food' },
  art: { label: 'Art', shortLabel: 'Art' },
  comedy: { label: 'Comedy', shortLabel: 'Comedy' },
  sports: { label: 'Sports', shortLabel: 'Sports' },
  theater: { label: 'Theater', shortLabel: 'Theater' },
  markets: { label: 'Markets', shortLabel: 'Markets' },
  free: { label: 'Free', shortLabel: 'Free' },
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
  'free',
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

// Get category label
export function getCategoryLabel(category: EventCategory): string {
  return EVENT_CATEGORIES[category]?.label || category
}

// Get short category label
export function getCategoryShortLabel(category: EventCategory): string {
  return EVENT_CATEGORIES[category]?.shortLabel || category
}
