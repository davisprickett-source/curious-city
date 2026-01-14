import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllCities } from '@/data/cities'
import { Footer, ShareButton, NewsletterSignup } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { BreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'All Cities | Curious City',
  description: 'Explore all the cities covered by Curious City - local stories, hidden gems, dark history, and more.',
  alternates: {
    canonical: 'https://thecurious.city/cities',
  },
}

// Helper function to get skyline image path for a city
function getSkylineImage(citySlug: string): string {
  // Map city slugs to skyline image filenames
  const skylineMap: Record<string, string> = {
    'anchorage': 'anchorage-skyline.png',
    'chicago': 'chicago-skyline.png',
    'colorado-springs': 'colorado-springs-skyline.png',
    'dallas': 'dallas-skyline.png',
    'denver': 'denver-skyline.png',
    'fargo': 'fargo-skyline.png',
    'minneapolis': 'minneapolis-skyline.png',
    'phoenix': 'phoenix-skyline.png',
    'portland': 'portland-skyline.png',
    'raleigh': 'raleigh-skyline.png',
    'seattle': 'seattle-skyline.png',
    'salt-lake-city': 'slc-skyline.png',
    'tampa': 'tampa-skyline.png',
  }

  return `/banners/hero-city-images/${skylineMap[citySlug] || 'fallback.png'}`
}

export default async function CitiesPage() {
  const cities = await getAllCities()

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: 'Cities', url: 'https://thecurious.city/cities' },
        ]}
      />
      <UnifiedNav />

      <div className="city-page-wrapper">
        <main className="flex-1 bg-white">
          {/* Hero Header */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
            <div className="container-page py-12 md:py-16">
              <div className="max-w-4xl">
                <div className="eyebrow text-accent-400 mb-3">Explore</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  All Cities
                </h1>
                <div className="mb-8">
                  <ShareButton title="All Cities | The Curious City" url="https://thecurious.city/cities" />
                </div>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
                  Local stories, hidden gems, and untold history from cities across America.
                </p>
              </div>
            </div>
          </div>

          {/* Cities Grid */}
          <div className="container-page py-10 md:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => {
                const skylineImage = getSkylineImage(city.slug)

                return (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="group block"
                  >
                    <div className="relative rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      {/* Background */}
                      <div className="absolute inset-0">
                        <Image
                          src={skylineImage}
                          alt={`${city.name} skyline`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-neutral-900/20" />
                      </div>

                      {/* Content */}
                      <div className="relative p-6 min-h-[200px] flex flex-col justify-end">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {city.name}
                        </h2>

                        {city.tagline && (
                          <p className="text-sm text-white/80 leading-relaxed line-clamp-2 mb-3">
                            {city.tagline}
                          </p>
                        )}

                        {/* Explore link */}
                        <div className="flex items-center text-white/70 group-hover:text-white transition-colors">
                          <span className="text-sm font-medium">Explore</span>
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </main>

      {/* End of Cities Page Flow - Share, Subscribe, Feedback */}
      <div className="container-page py-12 space-y-8">
        {/* Share Component */}
        <ShareButton title="All Cities | The Curious City" url="https://thecurious.city/cities" />

        {/* Subscribe */}
        <NewsletterSignup />

        {/* Feedback Component (mailto link) */}
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">Give Feedback</h3>
          <p className="text-neutral-700">
            Found an error or have a suggestion? {' '}
            <Link
              href={`mailto:hello@thecurious.city?subject=Feedback on All Cities Page`}
              className="text-accent-600 hover:text-accent-700 font-semibold"
            >
              Send us feedback
            </Link>
            .
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
