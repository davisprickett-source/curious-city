import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { Footer, RelatedCities } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { getCityPageCards } from '@/lib/content/pages'
import { PageCard } from '@/components/cards/PageCard'

const cityBanners: Record<string, string> = {
  minneapolis: '/banners/Minneapolis-banner.png',
  dallas: '/banners/Dallas-banner.png',
  raleigh: '/banners/Raleigh-banner.png',
  denver: '/banners/Denver-Banner.png',
  tampa: '/banners/Tampa-Banner.png',
  phoenix: '/banners/Phoenix Banner.png',
  portland: '/banners/Portland Banner.png',
  'salt-lake-city': '/banners/Salt Lake City Banner.png',
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

  // Get all page cards for this city
  const pageCards = await getCityPageCards(slug)

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="articles"
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
          {city.tagline && (
            <div className="mb-12 text-center">
              <p className="text-2xl md:text-3xl text-neutral-600 max-w-3xl mx-auto">{city.tagline}</p>
            </div>
          )}

          {/* Premium 1-Column Feed */}
          <section className="mb-16">
            <div className="space-y-8 max-w-4xl mx-auto">
              {pageCards.map((pageCard, index) => (
                <PageCard
                  key={pageCard.href}
                  data={pageCard}
                  variant="standard"
                  index={index}
                  priority={index === 0}
                />
              ))}
            </div>
          </section>

          {/* Related Cities */}
          <RelatedCities currentCitySlug={slug} />
        </div>
      </main>

      <Footer />
    </>
  )
}
