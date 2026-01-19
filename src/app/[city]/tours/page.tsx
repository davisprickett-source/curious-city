import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Fragment } from 'react'
import { getCity, getAllCitySlugs } from '@/data/cities'

// Revalidate page every hour (matches API cache)
export const revalidate = 3600
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { Footer } from '@/components'
import { BreadcrumbSchema } from '@/components/StructuredData'
import { getCityTours } from '@/lib/viator'
import { TourGrid } from '@/components/affiliate/TourCard'
import type { TourCategory } from '@/lib/viator/types'

interface PageProps {
  params: Promise<{ city: string }>
  searchParams: Promise<{ category?: string }>
}

// Pre-build tours pages at build time for cities with Viator configured
export async function generateStaticParams() {
  // Only pre-build for cities that have Viator destination IDs
  return [
    { city: 'chicago' },
    { city: 'minneapolis' },
    { city: 'raleigh' },
    { city: 'salt-lake-city' },
    { city: 'colorado-springs' },
    { city: 'dallas' },
    { city: 'anchorage' },
    { city: 'denver' },
    { city: 'tampa' },
    { city: 'phoenix' },
    { city: 'portland' },
    { city: 'seattle' },
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  const url = `https://thecurious.city/${slug}/tours`

  return {
    title: `Things to Do in ${city.name} | Tours, Tickets & Experiences | Curious City`,
    description: `Discover the best things to do in ${city.name}. Book tickets, tours, cruises, and unique experiences. Skip-the-line admission, city passes, and more.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Things to Do in ${city.name} | Tours, Tickets & Experiences`,
      description: `Book tickets, tours, cruises, and unique experiences in ${city.name}. Skip-the-line admission, city passes, and more.`,
      url,
    },
  }
}

// Category configuration
const TOUR_CATEGORIES: { id: TourCategory | 'all'; label: string; description: string }[] = [
  { id: 'all', label: 'All', description: 'Browse all experiences' },
  { id: 'tickets', label: 'Tickets', description: 'Attractions, museums, and observation decks' },
  { id: 'passes', label: 'Passes', description: 'City passes and multi-attraction deals' },
  { id: 'cruises', label: 'Cruises', description: 'River cruises and boat tours' },
  { id: 'city-tour', label: 'City Tours', description: 'Sightseeing and walking tours' },
  { id: 'architecture', label: 'Architecture', description: 'Iconic buildings and design' },
  { id: 'food-tour', label: 'Food & Drink', description: 'Culinary adventures and tastings' },
  { id: 'ghost-tour', label: 'Ghost Tours', description: 'Haunted history and paranormal' },
  { id: 'history', label: 'History', description: 'Deep dives into the past' },
  { id: 'outdoor', label: 'Outdoor', description: 'Biking, kayaking, and adventures' },
  { id: 'classes', label: 'Classes', description: 'Cooking classes and workshops' },
  { id: 'culture', label: 'Culture', description: 'Museums, shows, and art' },
]

export default async function CityToursPage({ params, searchParams }: PageProps) {
  const { city: slug } = await params
  const { category: categoryParam } = await searchParams
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  // Fetch tours from Viator - get up to 500 products
  const activeCategory = categoryParam as TourCategory | undefined
  const tours = await getCityTours(slug, {
    category: activeCategory,
    count: 500,
  })

  const url = `https://thecurious.city/${slug}/tours`

  return (
    <Fragment>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${slug}` },
          { name: 'Tours', url },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="tours"
      />

      <div className="city-page-wrapper">
        <main className="flex-1 bg-white">
          {/* Hero Section - Dark Background */}
          <div className="bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
            <div className="container-page py-12 md:py-16">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Things to Do in {city.name}
                </h1>
                <p className="text-xl md:text-2xl text-[#c65d3b] italic leading-relaxed">
                  Tickets, tours, cruises, and unique experiences
                </p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="sticky top-[60px] z-30 bg-white border-b border-neutral-200 shadow-sm">
            <div className="container-page">
              <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
                {TOUR_CATEGORIES.map((cat) => {
                  const isActive = cat.id === 'all' ? !activeCategory : activeCategory === cat.id
                  const href = cat.id === 'all' ? `/${slug}/tours` : `/${slug}/tours?category=${cat.id}`

                  return (
                    <a
                      key={cat.id}
                      href={href}
                      className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-accent-600 text-white'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {cat.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="container-page py-10 md:py-14">
            {tours.length > 0 ? (
              <>
                <div className="mb-8">
                  <p className="text-neutral-600">
                    {tours.length} experience{tours.length !== 1 ? 's' : ''} available
                    {activeCategory && (
                      <span className="ml-1">
                        in{' '}
                        <span className="font-medium text-accent-700">
                          {TOUR_CATEGORIES.find((c) => c.id === activeCategory)?.label}
                        </span>
                      </span>
                    )}
                  </p>
                </div>
                <TourGrid tours={tours} citySlug={slug} />
              </>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  No tours available yet
                </h3>
                <p className="text-neutral-500 max-w-md mx-auto">
                  {activeCategory
                    ? `No ${TOUR_CATEGORIES.find((c) => c.id === activeCategory)?.label.toLowerCase()} found. Try browsing all tours.`
                    : `Tours for ${city.name} are coming soon. Check back later for curated experiences.`}
                </p>
                {activeCategory && (
                  <a
                    href={`/${slug}/tours`}
                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-accent-600 text-white font-medium rounded-full hover:bg-accent-700 transition-colors"
                  >
                    View all tours
                  </a>
                )}
              </div>
            )}

            {/* Affiliate Disclosure */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-xs text-neutral-400 text-center max-w-2xl mx-auto">
                Tours are provided by our partner Viator. We may earn a commission when you book through our links at no extra cost to you.
              </p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </Fragment>
  )
}
