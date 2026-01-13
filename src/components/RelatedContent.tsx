import Link from 'next/link'
import Image from 'next/image'
import { CITY_METADATA } from '@/data/cities'
import { getCityFeaturedEntries } from '@/lib/content/cityHomepage'
import { getAllArticles } from '@/lib/queries/articles'

interface RelatedContentProps {
  citySlug: string
  contentType: 'curiosities' | 'dark-history' | 'articles' | 'lost-and-loved'
  currentSlug?: string // To exclude current article/item
}

// Type for a related content item
interface RelatedItem {
  id: string
  title: string
  teaser: string
  image?: string
  href: string
  cityName?: string
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
  contentType,
  currentSlug,
}: RelatedContentProps) {
  const relatedItems: RelatedItem[] = []
  const usedIds = new Set<string>()

  try {
    // Handle articles differently
    if (contentType === 'articles') {
      // 1. Get 2 articles from OTHER cities
      const allArticles = await getAllArticles({ limit: 50 })
      const otherCityArticles = shuffle(
        allArticles.filter(a => a.citySlug !== citySlug && a.slug !== currentSlug)
      )

      for (const article of otherCityArticles.slice(0, 2)) {
        const cityInfo = CITY_METADATA.find(c => c.slug === article.citySlug)
        relatedItems.push({
          id: `article-${article.slug}`,
          title: article.title,
          teaser: article.subtitle || article.excerpt,
          image: article.featuredImage?.src,
          href: `/${article.citySlug}/articles/${article.slug}`,
          cityName: cityInfo?.name,
        })
        usedIds.add(`article-${article.slug}`)
      }

      // 2. Get 2 discover pages from SAME city
      const sameCityEntries = await getCityFeaturedEntries(citySlug)
      for (const entry of sameCityEntries.slice(0, 2)) {
        if (!usedIds.has(entry.id)) {
          relatedItems.push({
            id: entry.id,
            title: entry.title,
            teaser: entry.teaser,
            image: entry.image?.src,
            href: entry.href,
          })
          usedIds.add(entry.id)
        }
      }
    } else if (contentType === 'lost-and-loved') {
      // Special logic for lost-and-loved: show varied interesting content, not just other cities' lost-and-loved
      // Mix of dark history, curiosities, and articles from various cities

      // 1. Get 2 interesting entries from OTHER cities (varied types - dark history, curiosities, articles)
      const otherCities = shuffle(CITY_METADATA.filter(c => c.slug !== citySlug))
      let otherCityCount = 0

      for (const otherCity of otherCities) {
        if (otherCityCount >= 2) break

        const otherCityEntries = await getCityFeaturedEntries(otherCity.slug)
        // Prioritize dark-history and curiosities (more interesting than more lost-and-loved)
        const interestingEntry = shuffle(
          otherCityEntries.filter(entry =>
            (entry.type === 'dark-history' || entry.type === 'curiosity') &&
            !usedIds.has(entry.id)
          )
        )[0]

        if (interestingEntry) {
          relatedItems.push({
            id: interestingEntry.id,
            title: interestingEntry.title,
            teaser: interestingEntry.teaser,
            image: interestingEntry.image?.src,
            href: interestingEntry.href,
            cityName: otherCity.name,
          })
          usedIds.add(interestingEntry.id)
          otherCityCount++
        }
      }

      // 2. Get 2 varied entries from SAME city (anything except lost-and-loved)
      const sameCityEntries = await getCityFeaturedEntries(citySlug)
      const variedEntries = shuffle(
        sameCityEntries.filter((entry) =>
          entry.type !== 'lost-and-loved' && !usedIds.has(entry.id)
        )
      )

      for (const entry of variedEntries.slice(0, 2)) {
        relatedItems.push({
          id: entry.id,
          title: entry.title,
          teaser: entry.teaser,
          image: entry.image?.src,
          href: entry.href,
        })
        usedIds.add(entry.id)
      }
    } else {
      // Original logic for curiosities and dark-history
      // 1. Get 2 same-type pages from OTHER cities
      const otherCities = shuffle(CITY_METADATA.filter(c => c.slug !== citySlug))
      let sameTypeCount = 0

      for (const otherCity of otherCities) {
        if (sameTypeCount >= 2) break

        const otherCityEntries = await getCityFeaturedEntries(otherCity.slug)
        const matchingType = otherCityEntries.find((entry) => {
          const isMatch =
            (contentType === 'curiosities' && entry.type === 'curiosity') ||
            (contentType === 'dark-history' && entry.type === 'dark-history')
          return isMatch && !usedIds.has(entry.id)
        })

        if (matchingType) {
          relatedItems.push({
            id: matchingType.id,
            title: matchingType.title,
            teaser: matchingType.teaser,
            image: matchingType.image?.src,
            href: matchingType.href,
            cityName: otherCity.name,
          })
          usedIds.add(matchingType.id)
          sameTypeCount++
        }
      }

      // 2. Get 2 different-type pages from SAME city
      const sameCityEntries = await getCityFeaturedEntries(citySlug)
      const differentTypeEntries = sameCityEntries.filter((entry) => {
        const isDifferent =
          (contentType === 'curiosities' && entry.type !== 'curiosity') ||
          (contentType === 'dark-history' && entry.type !== 'dark-history')
        return isDifferent && !usedIds.has(entry.id)
      })

      for (const entry of differentTypeEntries.slice(0, 2)) {
        relatedItems.push({
          id: entry.id,
          title: entry.title,
          teaser: entry.teaser,
          image: entry.image?.src,
          href: entry.href,
        })
        usedIds.add(entry.id)
      }
    }

  } catch (error) {
    console.error('Error fetching related content:', error)
  }

  if (relatedItems.length === 0) return null

  return (
    <section className="mt-12 pt-8 border-t border-neutral-200">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Explore More</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group block overflow-hidden rounded-xl bg-white border border-neutral-200 hover:border-accent-300 hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            {item.image && (
              <div className="aspect-[16/9] relative overflow-hidden bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            )}

            {/* Content */}
            <div className="p-5">
              {item.cityName && (
                <div className="text-xs font-semibold text-accent-600 uppercase tracking-wider mb-2">
                  {item.cityName}
                </div>
              )}
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-accent-600 transition-colors mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
                {item.teaser}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
