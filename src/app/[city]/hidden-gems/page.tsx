import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getCityHiddenGems, getCityHiddenGemsSection, getAllCitySlugs } from '@/data/cities'
import { ShareButton } from '@/components/ShareButton'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import HiddenGemsScroll from '@/components/HiddenGemsScroll'
import { getExploreLinks } from '@/lib/content/cityHomepage'
import { BreadcrumbSchema } from '@/components/StructuredData'

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

  const url = `https://thecurious.city/${slug}/hidden-gems`

  return {
    title: `${city.name}'s Hidden Gems | Curious City`,
    description: `Off-the-beaten-path spots, local secrets, and hidden gems in ${city.name}.`,
    alternates: {
      canonical: url,
    },
  }
}

export default async function CityHiddenGemsPage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = await getCity(citySlug)

  if (!city) {
    notFound()
  }

  const gems = await getCityHiddenGems(citySlug)
  const section = await getCityHiddenGemsSection(citySlug)

  // Get explore links for bottom section
  const exploreLinks = await getExploreLinks(citySlug, city.name, 'hidden-gems')

  const url = `https://thecurious.city/${citySlug}/hidden-gems`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${citySlug}` },
          { name: 'Hidden Gems', url },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="hidden-gems"
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
                    title={`${city.name}'s Hidden Gems`}
                    url={url}
                    dropdownPosition="below"
                    onDark
                  />
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {section?.title || `${city.name}'s Hidden Gems`}
                </h1>

                {/* Teaser/Hook in Italics */}
                {section?.teaser && (
                  <p className="text-xl md:text-2xl text-[#c65d3b] italic leading-relaxed mb-8">
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

          <HiddenGemsScroll
            gems={gems}
            cityName={city.name}
            exploreLinks={exploreLinks}
            footer={<Footer />}
            url={url} // Pass url here
          />
        </main>
      </div>
    </>
  )
}
