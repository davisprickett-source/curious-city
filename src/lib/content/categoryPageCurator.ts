import type { PageCardData } from './pages'
import { getAllPageCards } from './pages'

type CategoryType = 'dark-history' | 'curiosities' | 'hidden-gems' | 'lost-loved'

export interface CuratedCategoryContent {
  heroSlides: PageCardData[]
  allCards: PageCardData[]
  cardsByCity: Map<string, PageCardData>
}

/**
 * Curate content for a category page
 * - Select featured items for hero carousel
 * - Organize remaining content
 */
export async function curateCategoryPageContent(
  category: CategoryType
): Promise<CuratedCategoryContent> {
  const allCards = await getAllPageCards()

  // Filter to this category only
  const categoryCards = allCards.filter((card) => card.pageType === category)

  // Prioritize cards with thumbnails for hero slides
  const cardsWithThumbnails = categoryCards.filter((card) => card.thumbnail)
  const cardsWithoutThumbnails = categoryCards.filter((card) => !card.thumbnail)

  // Select top 4 cards with thumbnails for hero
  const heroSlides = cardsWithThumbnails.slice(0, 4)

  // All cards for display (thumbnails first, then others)
  const allSortedCards = [...cardsWithThumbnails, ...cardsWithoutThumbnails]

  // Create a map by city for easy access
  const cardsByCity = new Map<string, PageCardData>()
  for (const card of allSortedCards) {
    cardsByCity.set(card.citySlug, card)
  }

  return {
    heroSlides,
    allCards: allSortedCards,
    cardsByCity,
  }
}

/**
 * Get category metadata
 */
export function getCategoryMeta(category: CategoryType): {
  title: string
  tagline: string
  description: string
} {
  const meta: Record<CategoryType, { title: string; tagline: string; description: string }> = {
    'dark-history': {
      title: 'Dark History',
      tagline: 'Forgotten crimes, unsolved mysteries, and the darker chapters that shaped these cities',
      description: 'Forgotten crimes, unsolved mysteries, and macabre history from cities across America.',
    },
    'curiosities': {
      title: 'Local Curiosities',
      tagline: 'The weird, wonderful, and downright bizarre things that make each city unique',
      description: 'Strange, wonderful, and bizarre local curiosities from cities across America.',
    },
    'hidden-gems': {
      title: 'Hidden Gems',
      tagline: 'Secret spots and local favorites that don\'t make it into the tourist guides',
      description: 'Discover hidden gems and local favorites across American cities.',
    },
    'lost-loved': {
      title: 'Lost & Loved',
      tagline: 'Beloved places and cherished memories from cities\' golden eras',
      description: 'Beloved places and cherished memories from cities across America - the landmarks we lost and still miss.',
    },
  }

  return meta[category]
}
