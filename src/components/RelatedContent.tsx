import Link from 'next/link'
import {
  getCityCuriosities,
  getCityDarkHistory,
  getCityHiddenGems,
  getCityLocalFavorites,
  getCityLostAndLoved,
  getCityBestOf,
  CITY_METADATA
} from '@/data/cities'

interface RelatedContentProps {
  citySlug: string
  cityName: string
  contentType: 'curiosities' | 'dark-history'
  maxItems?: number
}

// Type for a related page link
interface RelatedPage {
  id: string
  title: string
  description: string
  href: string
  label: string
}

// Page type configurations with their styles
const PAGE_TYPES = {
  'dark-history': {
    label: 'Dark History',
    style: 'bg-neutral-800 text-neutral-100',
    getTitle: (city: string) => `Dark History of ${city}`,
    getDescription: () => 'Crimes, disasters, and mysteries'
  },
  'curiosities': {
    label: 'Curiosities',
    style: 'bg-amber-50 text-amber-700',
    getTitle: (city: string) => `Curiosities of ${city}`,
    getDescription: () => 'Strange facts and hidden stories'
  },
  'hidden-gems': {
    label: 'Hidden Gems',
    style: 'bg-emerald-50 text-emerald-700',
    getTitle: (city: string) => `Hidden Gems in ${city}`,
    getDescription: () => 'Off-the-beaten-path discoveries'
  },
  'local-favorites': {
    label: 'Local Favorites',
    style: 'bg-blue-50 text-blue-700',
    getTitle: (city: string) => `Local Favorites in ${city}`,
    getDescription: () => 'Where the locals go'
  },
  'lost-and-loved': {
    label: 'Lost & Loved',
    style: 'bg-orange-50 text-orange-700',
    getTitle: (city: string) => `Lost & Loved in ${city}`,
    getDescription: () => 'Beloved places we miss'
  },
  'restaurants': {
    label: 'Restaurants',
    style: 'bg-red-50 text-red-700',
    getTitle: (city: string) => `Best Restaurants in ${city}`,
    getDescription: () => 'Where to eat'
  },
  'coffee-shops': {
    label: 'Coffee Shops',
    style: 'bg-amber-100 text-amber-800',
    getTitle: (city: string) => `Best Coffee Shops in ${city}`,
    getDescription: () => 'Best local coffee'
  },
  'bars': {
    label: 'Bars',
    style: 'bg-purple-50 text-purple-700',
    getTitle: (city: string) => `Best Bars in ${city}`,
    getDescription: () => 'Where to drink'
  }
} as const

type PageType = keyof typeof PAGE_TYPES

// Shuffle helper
function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Check if a city has content for a specific page type
async function hasContent(citySlug: string, pageType: PageType): Promise<boolean> {
  try {
    switch (pageType) {
      case 'dark-history':
        return (await getCityDarkHistory(citySlug)).length > 0
      case 'curiosities':
        return (await getCityCuriosities(citySlug)).length > 0
      case 'hidden-gems':
        return (await getCityHiddenGems(citySlug)).length > 0
      case 'local-favorites':
        return (await getCityLocalFavorites(citySlug)).length > 0
      case 'lost-and-loved':
        return (await getCityLostAndLoved(citySlug)).length > 0
      case 'restaurants':
        return (await getCityBestOf(citySlug, 'restaurants')).length > 0
      case 'coffee-shops':
        return (await getCityBestOf(citySlug, 'coffee-shops')).length > 0
      case 'bars':
        return (await getCityBestOf(citySlug, 'bars')).length > 0
      default:
        return false
    }
  } catch {
    return false
  }
}

export async function RelatedContent({
  citySlug,
  cityName,
  contentType,
  maxItems = 3,
}: RelatedContentProps) {
  const relatedPages: RelatedPage[] = []

  // Define which page types to show based on current content type
  // Prioritize complementary content
  const sameCity: PageType[] = contentType === 'curiosities'
    ? ['dark-history', 'hidden-gems', 'restaurants', 'lost-and-loved', 'coffee-shops', 'bars']
    : ['curiosities', 'hidden-gems', 'restaurants', 'lost-and-loved', 'coffee-shops', 'bars']

  // 1. Add related pages from the same city (up to 2)
  let sameCityAdded = 0
  for (const pageType of sameCity) {
    if (sameCityAdded >= 2) break

    const has = await hasContent(citySlug, pageType)
    if (has) {
      const config = PAGE_TYPES[pageType]
      relatedPages.push({
        id: `${citySlug}-${pageType}`,
        title: config.getTitle(cityName),
        description: config.getDescription(),
        href: `/${citySlug}/${pageType}`,
        label: config.label
      })
      sameCityAdded++
    }
  }

  // 2. Add the same content type from another city
  const otherCities = CITY_METADATA.filter(c => c.slug !== citySlug)
  const shuffledCities = shuffle(otherCities)

  for (const otherCity of shuffledCities) {
    if (relatedPages.length >= maxItems) break

    const has = await hasContent(otherCity.slug, contentType)
    if (has) {
      const config = PAGE_TYPES[contentType]
      relatedPages.push({
        id: `${otherCity.slug}-${contentType}`,
        title: config.getTitle(otherCity.name),
        description: config.getDescription(),
        href: `/${otherCity.slug}/${contentType}`,
        label: config.label
      })
      break // Only add one from another city
    }
  }

  // 3. If we need more, add additional pages from the same city
  if (relatedPages.length < maxItems) {
    for (const pageType of sameCity) {
      if (relatedPages.length >= maxItems) break
      if (relatedPages.some(p => p.id === `${citySlug}-${pageType}`)) continue

      const has = await hasContent(citySlug, pageType)
      if (has) {
        const config = PAGE_TYPES[pageType]
        relatedPages.push({
          id: `${citySlug}-${pageType}`,
          title: config.getTitle(cityName),
          description: config.getDescription(),
          href: `/${citySlug}/${pageType}`,
          label: config.label
        })
      }
    }
  }

  if (relatedPages.length === 0) return null

  return (
    <section className="mt-12 pt-8 border-t border-neutral-200">
      <h2 className="eyebrow text-neutral-500 mb-4">More to Explore</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPages.slice(0, maxItems).map((page) => (
            <Link
              key={page.id}
              href={page.href}
              className="group block p-4 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-neutral-900 group-hover:text-accent-600 transition-colors line-clamp-2 text-sm">
                {page.title}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">{page.description}</p>
            </Link>
          ))}
      </div>
    </section>
  )
}
