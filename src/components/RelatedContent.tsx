import Link from 'next/link'
import {
  getCityCuriosities,
  getCityDarkHistory,
  getCityHiddenGems,
  getCityLocalFavorites,
  getCity,
  getAllCitySlugs,
  CITY_METADATA
} from '@/data/cities'

interface RelatedContentProps {
  citySlug: string
  cityName: string
  contentType: 'curiosities' | 'dark-history'
  currentItemId?: string
  maxItems?: number
}

// Type for a mixed content item with metadata
interface MixedContentItem {
  id: string
  title?: string
  name?: string
  category?: string
  year?: string
  href: string
  label: string
  cityName?: string
}

// Category badge colors for curiosities
const getCuriosityStyle = (category: string) => {
  switch (category) {
    case 'history':
      return 'bg-amber-50 text-amber-700'
    case 'architecture':
      return 'bg-blue-50 text-blue-700'
    case 'underground':
      return 'bg-neutral-800 text-neutral-200'
    case 'science':
      return 'bg-emerald-50 text-emerald-700'
    case 'culture':
      return 'bg-purple-50 text-purple-700'
    case 'law':
      return 'bg-red-50 text-red-700'
    case 'invention':
      return 'bg-cyan-50 text-cyan-700'
    case 'legend':
      return 'bg-violet-50 text-violet-700'
    case 'nature':
      return 'bg-green-50 text-green-700'
    default:
      return 'bg-neutral-100 text-neutral-600'
  }
}

// Category badge colors for dark history
const getDarkHistoryStyle = (category: string) => {
  switch (category) {
    case 'crime':
      return 'bg-red-100 text-red-700'
    case 'disaster':
      return 'bg-orange-100 text-orange-700'
    case 'haunting':
      return 'bg-purple-100 text-purple-700'
    case 'mystery':
      return 'bg-indigo-100 text-indigo-700'
    default:
      return 'bg-neutral-100 text-neutral-700'
  }
}

// Category badge colors for establishments
const getEstablishmentStyle = (category: string) => {
  return 'bg-green-50 text-green-700'
}

// Shuffle helper
function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export async function RelatedContent({
  citySlug,
  cityName,
  contentType,
  currentItemId,
  maxItems = 3,
}: RelatedContentProps) {
  const mixedItems: MixedContentItem[] = []

  // 1. Try to add dark history from this city (if viewing curiosities) or curiosity (if viewing dark history)
  if (contentType === 'curiosities') {
    const darkHistory = await getCityDarkHistory(citySlug)
    const filtered = darkHistory.filter((item: any) => item.id !== currentItemId)
    if (filtered.length > 0) {
      const random = shuffle(filtered)[0]
      mixedItems.push({
        id: random.id,
        title: random.title,
        category: random.category,
        year: random.year,
        href: `/${citySlug}/dark-history#${random.id}`,
        label: 'Dark History'
      })
    }
  } else {
    const curiosities = await getCityCuriosities(citySlug)
    const filtered = curiosities.filter((item: any) => item.id !== currentItemId)
    if (filtered.length > 0) {
      const random = shuffle(filtered)[0]
      mixedItems.push({
        id: random.id,
        title: random.title,
        category: random.category,
        year: random.year,
        href: `/${citySlug}/curiosities#${random.id}`,
        label: 'Curiosity'
      })
    }
  }

  // 2. Try to add an establishment (hidden gem or iconic spot) from this city
  const hiddenGems = await getCityHiddenGems(citySlug)
  const iconicSpots = await getCityLocalFavorites(citySlug)
  const establishments = [...hiddenGems, ...iconicSpots]

  if (establishments.length > 0) {
    const random = shuffle(establishments)[0]
    const isHiddenGem = hiddenGems.some((g: any) => g.id === random.id)
    mixedItems.push({
      id: random.id,
      name: random.name,
      category: random.category,
      href: isHiddenGem ? `/${citySlug}/hidden-gems#${random.id}` : `/${citySlug}/local-favorites#${random.id}`,
      label: isHiddenGem ? 'Hidden Gem' : 'Local Favorite'
    })
  }

  // 3. Try to add an essay from this city (check for featured card with Essay meta)
  const cityData = await getCity(citySlug)
  if (cityData) {
    const essayCard = cityData.content.find((item: any) =>
      item.type === 'card' && item.meta === 'Essay' && item.href
    )
    if (essayCard) {
      mixedItems.push({
        id: essayCard.id,
        title: essayCard.title,
        href: essayCard.href,
        label: 'Essay'
      })
    }
  }

  // 4. Try to add same content type from a different city
  const otherCities = CITY_METADATA.filter(c => c.slug !== citySlug)
  if (otherCities.length > 0) {
    const randomCity = shuffle(otherCities)[0]

    if (contentType === 'curiosities') {
      const otherCuriosities = await getCityCuriosities(randomCity.slug)
      if (otherCuriosities.length > 0) {
        const random = shuffle(otherCuriosities)[0]
        mixedItems.push({
          id: random.id,
          title: random.title,
          category: random.category,
          year: random.year,
          href: `/${randomCity.slug}/curiosities#${random.id}`,
          label: 'Curiosity',
          cityName: randomCity.name
        })
      }
    } else {
      const otherDarkHistory = await getCityDarkHistory(randomCity.slug)
      if (otherDarkHistory.length > 0) {
        const random = shuffle(otherDarkHistory)[0]
        mixedItems.push({
          id: random.id,
          title: random.title,
          category: random.category,
          year: random.year,
          href: `/${randomCity.slug}/dark-history#${random.id}`,
          label: 'Dark History',
          cityName: randomCity.name
        })
      }
    }
  }

  // 5. If we still don't have enough items, fill with more from the same type (current city)
  if (mixedItems.length < maxItems) {
    const sameTypeItems = contentType === 'curiosities'
      ? await getCityCuriosities(citySlug)
      : await getCityDarkHistory(citySlug)

    const filtered = sameTypeItems.filter((item: any) =>
      item.id !== currentItemId && !mixedItems.some(m => m.id === item.id)
    )

    const needed = maxItems - mixedItems.length
    const additional = shuffle(filtered).slice(0, needed)

    for (const item of additional) {
      mixedItems.push({
        id: item.id,
        title: item.title,
        category: item.category,
        year: item.year,
        href: `/${citySlug}/${contentType}#${item.id}`,
        label: contentType === 'curiosities' ? 'Curiosity' : 'Dark History'
      })
    }
  }

  // Shuffle the final mix and limit to maxItems
  const finalItems = shuffle(mixedItems).slice(0, maxItems)

  if (finalItems.length === 0) return null

  return (
    <section className="mt-12 pt-8 border-t border-neutral-200">
      <h2 className="eyebrow text-neutral-500 mb-4">More to Explore</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {finalItems.map((item) => {
          const displayTitle = item.title || item.name || 'Untitled'
          const isEstablishment = item.label === 'Hidden Gem' || item.label === 'Local Favorite'
          const isDarkHistory = item.label === 'Dark History'
          const isCuriosity = item.label === 'Curiosity'

          let categoryStyle = 'bg-neutral-100 text-neutral-600'
          if (item.category) {
            if (isEstablishment) {
              categoryStyle = getEstablishmentStyle(item.category)
            } else if (isDarkHistory) {
              categoryStyle = getDarkHistoryStyle(item.category)
            } else if (isCuriosity) {
              categoryStyle = getCuriosityStyle(item.category)
            }
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              className="group block p-4 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-accent-50 text-accent-700">
                  {item.label}
                </span>
                {item.category && (
                  <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${categoryStyle}`}>
                    {item.category}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-neutral-900 group-hover:text-accent-600 transition-colors line-clamp-2 text-sm">
                {displayTitle}
              </h3>
              {item.cityName && (
                <p className="text-xs text-neutral-500 mt-1">{item.cityName}</p>
              )}
              {item.year && !item.cityName && (
                <p className="text-xs text-neutral-500 mt-1">{item.year}</p>
              )}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
