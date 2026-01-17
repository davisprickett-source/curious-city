import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityLostAndLoved, getCityLostAndLovedSection } from '@/data/cities'
import { ShareButton } from '@/components/ShareButton'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { BreadcrumbSchema } from '@/components/StructuredData'
import LostLovedScroll from '@/components/lost-and-loved/LostLovedScroll'
import { getExploreLinks } from '@/lib/content/cityHomepage'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  const url = `https://thecurious.city/${slug}/lost-and-loved`

  return {
    title: `${city.name}'s Lost & Loved | Curious City`,
    description: `${city.name}'s beloved businesses and the spaces they left behind. Restaurants, bars, and institutions we still miss.`,
    alternates: {
      canonical: url,
    },
  }
}

export default async function CityLostAndLovedPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const items = await getCityLostAndLoved(slug)
  const section = await getCityLostAndLovedSection(slug)

  // Get explore links for bottom section
  const exploreLinks = await getExploreLinks(slug, city.name, 'lost-and-loved')

  const url = `https://thecurious.city/${slug}/lost-and-loved`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${slug}` },
          { name: 'Lost & Loved', url },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="lost-and-loved"
      />

      <div className="city-page-wrapper">
        <main className="flex-1 bg-white">
          {/* Hero Section - Dark Background */}
          <div className="bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
            <div className="container-page py-12 md:py-16">
              <div className="max-w-3xl mx-auto">
                {/* Share Button at Top - aligned right */}
                <div className="mb-6 flex justify-end">
                  <ShareButton
                    title={`${city.name}'s Lost & Loved`}
                    url={url}
                    dropdownPosition="below"
                    onDark
                  />
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {section?.title || `${city.name}'s Lost & Loved`}
                </h1>

                {/* Teaser/Hook in Italics */}
                {section?.teaser && (
                  <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-8">
                    {section.teaser}
                  </p>
                )}

                {/* Intro if exists */}
                {section?.intro && (
                  <p className="text-lg text-white/80 leading-relaxed">
                    {section.intro}
                  </p>
                )}
              </div>
            </div>
          </div>

          <LostLovedScroll
            items={items}
            cityName={city.name}
            exploreLinks={exploreLinks}
            footer={<Footer />}
            url={url}
          />
        </main>
      </div>
    </>
  )
}
