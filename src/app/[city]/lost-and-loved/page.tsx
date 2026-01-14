import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCity, getAllCitySlugs, getCityLostAndLoved, getCityLostAndLovedSection } from '@/data/cities'
import { ShareButton } from '@/components/ShareButton'
import { Footer, RelatedContent, NewsletterSignup, ShareLinks } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { BreadcrumbSchema } from '@/components/StructuredData'
import Link from 'next/link'

// Dynamically import the scroll component (client-only)
const LostLovedScroll = dynamic(() => import('@/components/LostLovedScroll').then(mod => ({ default: mod.LostLovedScroll })), {
  loading: () => (
    <div className="container-page py-20 text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-neutral-900 border-r-transparent"></div>
      <p className="mt-4 text-neutral-500">Loading...</p>
    </div>
  ),
  ssr: false,
})

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
                {/* Share Button at Top */}
                <div className="mb-6">
                  <ShareButton title={`${city.name}'s Lost & Loved`} url={url} />
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

          {/* Premium Scroll Component */}
          <LostLovedScroll items={items} cityName={city.name} />

          {/* End of Page Flow */}
          <div className="container-page py-12 space-y-8">
            {/* 1. Share (bottom) */}
            <ShareLinks title={`${city.name}'s Lost & Loved`} url={url} />

            {/* 2. Subscribe */}
            <NewsletterSignup />

            {/* 3. Explore More */}
            <RelatedContent citySlug={city.slug} contentType="lost-and-loved" />

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
      </div>

      <Footer />
    </>
  )
}
