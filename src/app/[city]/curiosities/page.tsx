import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCity, getAllCitySlugs, getCityCuriosities } from '@/data/cities'
import { ShareButton } from '@/components/ShareButton'
import { Footer, NewsletterSignup, RelatedContent, ShareLinks } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { BreadcrumbSchema } from '@/components/StructuredData'
import Link from 'next/link'

// Dynamically import heavy scroll component
const CuriositiesScroll = dynamic(
  () => import('@/components/CuriositiesScroll').then(mod => ({ default: mod.CuriositiesScroll })),
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
      if (item.type === 'section' && item.title?.includes('Curiosit')) {
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
              {/* Share Button at Top */}
              <div className="mb-6">
                <ShareButton title={`${city.name}'s Curiosities`} url={url} />
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {section?.title || `${city.name}'s Curiosities`}
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
        {curiosities.length > 0 ? (
          <CuriositiesScroll curiosities={curiosities} cityName={city.name} />
        ) : (
          <div className="container-page py-20">
            <div className="text-center">
              <p className="text-neutral-500 mb-2">No curiosities yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">Check back soon!</p>
            </div>
          </div>
        )}

        {/* End of content section */}
        <div className="container-page py-12 space-y-8">
          {/* 1. Share (bottom) */}
          <ShareLinks title={`${city.name}'s Curiosities`} url={url} />

          {/* 2. Subscribe */}
          <NewsletterSignup />

          {/* 3. Explore More */}
          <RelatedContent citySlug={city.slug} contentType="curiosities" />

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
