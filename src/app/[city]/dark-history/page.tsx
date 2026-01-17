import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityDarkHistory, getCityDarkHistorySection } from '@/data/cities'
import { getExploreLinks } from '@/lib/content/cityHomepage'
import { ShareButton } from '@/components/ShareButton'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { BreadcrumbSchema } from '@/components/StructuredData'
import { ClientDarkHistoryScroll as DarkHistoryScroll } from '@/components/ClientDarkHistoryScroll'

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

  const url = `https://thecurious.city/${slug}/dark-history`

  return {
    title: `${city.name}'s Dark History | Curious City`,
    description: `${city.name}'s forgotten crimes, unsolved mysteries, and darker historical chapters.`,
    alternates: {
      canonical: url,
    },
  }
}

export default async function CityDarkHistoryPage({ params, searchParams }: PageProps) {
  const { city: slug } = await params
  const { category: activeCategory } = await searchParams
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const allItems = await getCityDarkHistory(slug)
  const section = await getCityDarkHistorySection(slug)

  // Filter by category if selected
  const items = activeCategory
    ? allItems.filter((item: any) => item.category === activeCategory)
    : allItems

  // Get explore links for bottom section (exclude dark-history since we're on it)
  const exploreLinks = await getExploreLinks(slug, city.name, 'dark-history')

  const url = `https://thecurious.city/${slug}/dark-history`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${slug}` },
          { name: 'Dark History', url },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="dark-history"
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
                  title={`${city.name}'s Dark History`}
                  url={url}
                  dropdownPosition="below"
                  onDark
                />
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {section?.title || `${city.name}'s Dark History`}
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

        {/* Scrollytelling Content */}
        {items.length > 0 ? (
          <DarkHistoryScroll
            items={items}
            cityName={city.name}
            citySlug={city.slug}
            exploreLinks={exploreLinks}
            footer={<Footer />}
            url={url}
          />
        ) : (
          <div className="container-page py-20">
            <div className="text-center">
              <p className="text-neutral-500 mb-2">No dark history entries yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">
                This section will feature forgotten crimes, unsolved mysteries, and macabre historical events.
              </p>
            </div>
          </div>
        )}

        </main>
      </div>
    </>
  )
}
