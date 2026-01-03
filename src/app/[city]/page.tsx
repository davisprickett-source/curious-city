import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { Footer, RelatedCities } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { routes } from '@/lib/routes'
import { MasonryGrid } from '@/components/layout/MasonryGrid'
import { ContentCard } from '@/components/cards/ContentCard'
import { aggregateCityFeed } from '@/lib/content/aggregateFeed'

const cityBanners: Record<string, string> = {
  minneapolis: '/Minneapolis-banner.png',
  dallas: '/Dallas-banner.png',
  raleigh: '/Raleigh-banner.png',
}

interface CityPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `${city.name} | Curious City`,
    description: city.tagline || `Local content from ${city.name}`,
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  // Get city-specific content feed
  const feed = await aggregateCityFeed(slug, {
    limit: 50,
    types: ['article', 'curiosity', 'hidden-gem', 'dark-history', 'lost-loved'],
    sortBy: 'recent',
  })

  const bannerSrc = cityBanners[city.slug]

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
      />

      {bannerSrc && (
        <div className="container-page pt-8">
          <div className="overflow-hidden rounded-2xl shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45)]">
            <Image
              src={bannerSrc}
              alt={`${city.name} banner`}
              width={1536}
              height={512}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      )}

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* City Introduction */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {city.name}
            </h1>
            {city.tagline && (
              <p className="text-xl text-neutral-600">{city.tagline}</p>
            )}
          </div>

          {/* Quick Links to Guide and Events */}
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Link
              href={routes.cityGuide(slug)}
              className="group block p-6 bg-white rounded-xl border-2 border-neutral-200 hover:border-accent-500 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-accent-700 mb-2">
                Guide
              </h2>
              <p className="text-sm text-neutral-600">
                Bars, restaurants, coffee shops, and local favorites
              </p>
            </Link>

            <Link
              href={routes.cityEvents(slug)}
              className="group block p-6 bg-white rounded-xl border-2 border-neutral-200 hover:border-accent-500 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-accent-700 mb-2">
                Events
              </h2>
              <p className="text-sm text-neutral-600">
                What's happening around town
              </p>
            </Link>
          </div>

          {/* Content Feed Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                Stories & Discoveries
              </h2>
              <p className="text-neutral-600 mt-2">
                Articles, history, hidden gems, curiosities, and local culture
              </p>
            </div>

            {feed.items.length > 0 ? (
              <MasonryGrid
                columns={{
                  sm: 1,
                  md: 2,
                  lg: 3,
                }}
              >
                {feed.items.map((item, index) => (
                  <ContentCard
                    key={`${item.type}-${index}`}
                    data={item}
                    variant="standard"
                    priority={index < 6}
                  />
                ))}
              </MasonryGrid>
            ) : (
              <div className="text-center py-12 bg-neutral-50 rounded-xl">
                <p className="text-neutral-600">
                  No content available yet for {city.name}
                </p>
              </div>
            )}
          </section>

          {/* Related Cities */}
          <RelatedCities currentCitySlug={slug} />
        </div>
      </main>

      <Footer />
    </>
  )
}
