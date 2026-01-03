/**
 * Content Card Data Extraction Utility
 *
 * Normalizes all content types into a unified card data structure
 * for consistent display across the site.
 */

import type { UnifiedCardData } from '@/components/cards/ContentCard'
import type {
  CuriosityContentItem,
  HiddenGemContentItem,
  DarkHistoryContentItem,
  LostAndLovedContentItem,
  BestOfSpot,
  EventItem,
  History,
} from '@/types/content'
import type { Article, ArticleMetadata } from '@/types/article'

/**
 * Extract card data from a Curiosity
 */
export function extractCuriosityCardData(
  curiosity: CuriosityContentItem,
  citySlug: string
): UnifiedCardData {
  // Determine the primary image
  const image =
    curiosity.image ||
    (curiosity.images && curiosity.images.length > 0 ? curiosity.images[0] : undefined)

  return {
    type: 'curiosity',
    href: `/${citySlug}/curiosities#${curiosity.id}`,
    title: curiosity.title,
    teaser: curiosity.body.substring(0, 200) + (curiosity.body.length > 200 ? '...' : ''),
    image,
    badge: curiosity.category
      ? {
          label: curiosity.category,
          color: getCategoryColor('curiosity', curiosity.category),
        }
      : undefined,
    meta: {
      date: curiosity.year,
      location: curiosity.location?.name,
    },
  }
}

/**
 * Extract card data from a Hidden Gem
 */
export function extractHiddenGemCardData(
  gem: HiddenGemContentItem,
  citySlug: string
): UnifiedCardData {
  const image =
    gem.image || (gem.images && gem.images.length > 0 ? gem.images[0] : undefined)

  return {
    type: 'hidden-gem',
    href: `/${citySlug}/hidden-gems#${gem.id}`,
    title: gem.name,
    teaser: gem.description,
    image,
    badge: {
      label: gem.category,
      color: getCategoryColor('hidden-gem', gem.category),
    },
    meta: {
      location: gem.location,
    },
  }
}

/**
 * Extract card data from Dark History
 */
export function extractDarkHistoryCardData(
  history: DarkHistoryContentItem,
  citySlug: string
): UnifiedCardData {
  const image =
    history.image ||
    (history.images && history.images.length > 0 ? history.images[0] : undefined)

  return {
    type: 'dark-history',
    href: `/${citySlug}/dark-history#${history.id}`,
    title: history.title,
    teaser: history.body.substring(0, 200) + (history.body.length > 200 ? '...' : ''),
    image,
    badge: {
      label: history.category,
      color: getCategoryColor('dark-history', history.category),
    },
    meta: {
      date: history.year,
      location: history.location?.name,
    },
  }
}

/**
 * Extract card data from Lost & Loved
 */
export function extractLostAndLovedCardData(
  lost: LostAndLovedContentItem,
  citySlug: string
): UnifiedCardData {
  const image =
    lost.image || (lost.images && lost.images.length > 0 ? lost.images[0] : undefined)

  return {
    type: 'lost-loved',
    href: `/${citySlug}/lost-and-loved#${lost.id}`,
    title: lost.name,
    teaser: lost.whyMissed,
    image,
    badge: {
      label: lost.category,
      color: getCategoryColor('lost-loved', lost.category),
    },
    meta: {
      date: lost.yearsOpen,
      location: lost.neighborhood,
    },
  }
}

/**
 * Extract card data from Best Of spot
 */
export function extractBestOfCardData(
  spot: BestOfSpot,
  category: string,
  citySlug: string,
  spotIndex: number
): UnifiedCardData {
  const image =
    spot.image || (spot.images && spot.images.length > 0 ? spot.images[0] : undefined)

  return {
    type: 'best-of',
    href: `/${citySlug}/${category}#spot-${spotIndex}`,
    title: spot.name,
    teaser: spot.why,
    image,
    badge: {
      label: category.replace('-', ' '),
      color: getCategoryColor('best-of', category),
    },
    meta: {
      location: spot.neighborhood,
      category: spot.vibe,
    },
  }
}

/**
 * Extract card data from Article or History
 */
export function extractArticleCardData(
  article: Article | ArticleMetadata | History,
  citySlug?: string
): UnifiedCardData {
  const city = citySlug || article.citySlug

  // Check if it's a History type (no excerpt or category)
  const isHistory = !('excerpt' in article) && !('category' in article)

  if (isHistory) {
    const history = article as History
    return {
      type: 'article',
      href: `/${city}/history/${history.slug}`,
      title: history.title,
      teaser: history.subtitle || '',
      image: history.heroImage,
      badge: {
        label: 'History',
        color: 'bg-amber-100 text-amber-800',
      },
      meta: {
        date: history.publishedAt
          ? new Date(history.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : undefined,
        author: history.author,
      },
    }
  }

  // Article type
  const articleData = article as Article | ArticleMetadata
  return {
    type: 'article',
    href: `/${city}/articles/${articleData.slug}`,
    title: articleData.title,
    teaser: articleData.excerpt,
    image: articleData.featuredImage,
    badge: {
      label: articleData.category,
      color: getArticleCategoryColor(articleData.category),
    },
    meta: {
      date: new Date(articleData.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      author: articleData.author.name,
    },
  }
}

/**
 * Extract card data from Event
 */
export function extractEventCardData(
  event: EventItem,
  _citySlug?: string
): UnifiedCardData {
  return {
    type: 'event',
    href: event.href || '#',
    title: event.title,
    teaser: event.description,
    image: event.image,
    badge: {
      label: event.category,
      color: getCategoryColor('event', event.category),
    },
    meta: {
      date: new Date(event.startDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        weekday: 'short',
      }),
      location: event.location,
    },
  }
}

/**
 * Get color for content category
 */
function getCategoryColor(type: string, category: string): string {
  // Curiosity colors
  if (type === 'curiosity') {
    const curiosityColors: Record<string, string> = {
      history: 'bg-amber-100 text-amber-800',
      architecture: 'bg-stone-100 text-stone-800',
      underground: 'bg-slate-100 text-slate-800',
      science: 'bg-cyan-100 text-cyan-800',
      culture: 'bg-purple-100 text-purple-800',
      law: 'bg-blue-100 text-blue-800',
      invention: 'bg-teal-100 text-teal-800',
      legend: 'bg-indigo-100 text-indigo-800',
      nature: 'bg-green-100 text-green-800',
    }
    return curiosityColors[category] || 'bg-purple-100 text-purple-800'
  }

  // Dark history colors
  if (type === 'dark-history') {
    const darkHistoryColors: Record<string, string> = {
      unsolved: 'bg-red-100 text-red-800',
      crime: 'bg-red-100 text-red-800',
      disaster: 'bg-orange-100 text-orange-800',
      mystery: 'bg-purple-100 text-purple-800',
      macabre: 'bg-rose-100 text-rose-800',
      forgotten: 'bg-neutral-100 text-neutral-800',
      haunting: 'bg-indigo-100 text-indigo-800',
      'cold-case': 'bg-slate-100 text-slate-800',
    }
    return darkHistoryColors[category] || 'bg-red-100 text-red-800'
  }

  // Lost & loved colors
  if (type === 'lost-loved') {
    const lostLovedColors: Record<string, string> = {
      restaurant: 'bg-orange-100 text-orange-800',
      bar: 'bg-amber-100 text-amber-800',
      shop: 'bg-pink-100 text-pink-800',
      theater: 'bg-purple-100 text-purple-800',
      'music-venue': 'bg-fuchsia-100 text-fuchsia-800',
      cafe: 'bg-yellow-100 text-yellow-800',
      bookstore: 'bg-teal-100 text-teal-800',
      entertainment: 'bg-rose-100 text-rose-800',
      institution: 'bg-blue-100 text-blue-800',
    }
    return lostLovedColors[category] || 'bg-amber-100 text-amber-800'
  }

  // Event colors
  if (type === 'event') {
    const eventColors: Record<string, string> = {
      event: 'bg-indigo-100 text-indigo-800',
      opening: 'bg-green-100 text-green-800',
      closing: 'bg-red-100 text-red-800',
      seasonal: 'bg-orange-100 text-orange-800',
      limited: 'bg-yellow-100 text-yellow-800',
      popup: 'bg-pink-100 text-pink-800',
    }
    return eventColors[category] || 'bg-indigo-100 text-indigo-800'
  }

  // Default colors
  return 'bg-neutral-100 text-neutral-800'
}

/**
 * Get color for article category
 */
function getArticleCategoryColor(
  category: 'guide' | 'feature' | 'news' | 'list' | 'interview' | 'history' | 'event-coverage' | 'opinion'
): string {
  const categoryColors: Record<string, string> = {
    guide: 'bg-blue-100 text-blue-800',
    feature: 'bg-purple-100 text-purple-800',
    news: 'bg-red-100 text-red-800',
    list: 'bg-green-100 text-green-800',
    interview: 'bg-yellow-100 text-yellow-800',
    history: 'bg-amber-100 text-amber-800',
    'event-coverage': 'bg-pink-100 text-pink-800',
    opinion: 'bg-indigo-100 text-indigo-800',
  }
  return categoryColors[category] || 'bg-neutral-100 text-neutral-800'
}
