import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { Footer, RelatedCities } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { routes } from '@/lib/routes'

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

          {/* Quick Links to Main Sections */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <Link
              href={routes.cityArticles(slug)}
              className="group block p-6 bg-white rounded-xl border-2 border-neutral-200 hover:border-accent-500 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">📰</div>
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-accent-700 mb-2">
                Articles
              </h2>
              <p className="text-sm text-neutral-600">
                Stories, guides, and local insights
              </p>
            </Link>

            <Link
              href={routes.cityDiscover(slug)}
              className="group block p-6 bg-white rounded-xl border-2 border-neutral-200 hover:border-accent-500 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">🔍</div>
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-accent-700 mb-2">
                Discover
              </h2>
              <p className="text-sm text-neutral-600">
                Hidden gems, curiosities, and dark history
              </p>
            </Link>

            <Link
              href={routes.cityGuide(slug)}
              className="group block p-6 bg-white rounded-xl border-2 border-neutral-200 hover:border-accent-500 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">📍</div>
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-accent-700 mb-2">
                Guide
              </h2>
              <p className="text-sm text-neutral-600">
                Bars, restaurants, and local favorites
              </p>
            </Link>

            <Link
              href={routes.cityEvents(slug)}
              className="group block p-6 bg-white rounded-xl border-2 border-neutral-200 hover:border-accent-500 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">📅</div>
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-accent-700 mb-2">
                Events
              </h2>
              <p className="text-sm text-neutral-600">
                What's happening around town
              </p>
            </Link>
          </div>

          {/* TODO: Section preview rows will go here */}
          <div className="text-center py-12 bg-neutral-50 rounded-xl">
            <p className="text-neutral-600 mb-2">
              Content preview sections coming soon!
            </p>
            <p className="text-sm text-neutral-500">
              For now, use the navigation above to explore {city.name}
            </p>
          </div>

          {/* Related Cities */}
          <RelatedCities currentCitySlug={slug} />
        </div>
      </main>

      <Footer />
    </>
  )
}
