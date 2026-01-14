import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCity, getAllCitySlugs, getCityDarkHistory, getCityDarkHistorySection } from '@/data/cities'
import { ShareButton } from '@/components/ShareButton'
import { Footer, NewsletterSignup, RelatedContent, ShareLinks } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { BreadcrumbSchema } from '@/components/StructuredData'
import Link from 'next/link'

// Dynamically import heavy scroll component
const DarkHistoryScroll = dynamic(
  () => import('@/components/DarkHistoryScroll').then(mod => ({ default: mod.DarkHistoryScroll })),
  {
    loading: () => (
      <div className="container-page py-20">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-neutral-900 border-r-transparent"></div>
          <p className="mt-4 text-neutral-500">Loading...</p>
        </div>
      </div>
    ),
    ssr: false, // Client-only component with animations
  }
)

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
              {/* Share Button at Top */}
              <div className="mb-6">
                <ShareButton title={`${city.name}'s Dark History`} url={url} />
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
          <DarkHistoryScroll items={items} cityName={city.name} />
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

        {/* End of Article Flow */}
        <div className="container-page py-12 space-y-8">
          {/* 1. Share (bottom) */}
          <ShareLinks title={`${city.name}'s Dark History`} url={url} />

          {/* 2. Subscribe */}
          <NewsletterSignup />

          {/* 3. Explore More */}
          <RelatedContent citySlug={city.slug} contentType="dark-history" />

          {/* 4. Feedback (placeholder) */}
          <div className="bg-neutral-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2 text-neutral-800">Your Feedback Matters!</h3>
            <p className="text-neutral-600 mb-4">Help us improve Curious City by sharing your thoughts on this page or any suggestions you have.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 transition-colors shadow-sm"
            >
              Send Feedback
            </Link>
          </div>
        </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
