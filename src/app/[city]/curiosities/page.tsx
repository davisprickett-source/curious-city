import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityCuriosities } from '@/data/cities'
import { getExploreLinks } from '@/lib/content/cityHomepage'
import { ShareButton } from '@/components/ShareButton'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { BreadcrumbSchema } from '@/components/StructuredData'
import { ClientCuriositiesScroll as CuriositiesScroll } from '@/components/ClientCuriositiesScroll'

interface PageProps {
  params: Promise<{ city: string }>
  searchParams: Promise<{ category?: string }>
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

  const url = `https://thecurious.city/${slug}/curiosities`

  return {
    title: `${city.name}'s Curiosities | Curious City`,
    description: `${city.name}'s fascinating facts, forgotten history, and strange stories.`,
    alternates: {
      canonical: url,
    },
  }
}

export default async function CityCuriositiesPage({ params, searchParams }: PageProps) {
  const { city: slug } = await params
  const { category: activeCategory } = await searchParams
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const allCuriosities = await getCityCuriosities(slug)

  // Find the curiosities section for title/teaser/intro
  const findSection = (items: any[]): any => {
    for (const item of items) {
      if (item.type === 'section' && item.id?.includes('curiosities')) {
        return item
      }
      if (item.items && Array.isArray(item.items)) {
        const found = findSection(item.items)
        if (found) return found
      }
    }
    return null
  }
  const section = findSection(city.content)

  // Filter by category if selected
  const curiosities = activeCategory
    ? allCuriosities.filter((c: any) => c.category === activeCategory)
    : allCuriosities

  // Get explore links for bottom section (exclude curiosities since we're on it)
  const exploreLinks = await getExploreLinks(slug, city.name, 'curiosities')

  const url = `https://thecurious.city/${slug}/curiosities`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${slug}` },
          { name: 'Curiosities', url },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="curiosities"
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
                  title={`${city.name}'s Curiosities`}
                  url={url}
                  dropdownPosition="below"
                  onDark
                />
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {section?.title || `${city.name}'s Curiosities`}
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

        {/* Scrollytelling Content */}
        {curiosities.length > 0 ? (
          <CuriositiesScroll
            curiosities={curiosities}
            cityName={city.name}
            citySlug={city.slug}
            url={url}
            exploreLinks={exploreLinks}
            footer={<Footer />}
          />
        ) : (
          <div className="container-page py-20">
            <div className="text-center">
              <p className="text-neutral-500 mb-2">No curiosities yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">Check back soon!</p>
            </div>
          </div>
        )}

        </main>
      </div>
    </>
  )
}
