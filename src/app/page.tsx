import Link from 'next/link'
import Image from 'next/image'
import { getAllCities } from '@/data/cities'
import { Header, Footer } from '@/components'
import { OrganizationSchema, WebsiteSchema } from '@/components/StructuredData'
import { MasonryGrid } from '@/components/layout/MasonryGrid'
import { PageCard } from '@/components/cards/PageCard'
import { getAllPageCards, sortPageCards } from '@/lib/content/pages'

export default async function HomePage() {
  const cities = await getAllCities()

  // Get all page cards from all cities
  const allPageCards = await getAllPageCards()
  const sortedPageCards = sortPageCards(allPageCards, 'recent')

  // Featured pages (top 2 for hero - likely history essays)
  const featuredPages = sortedPageCards.slice(0, 2)

  return (
    <>
      <OrganizationSchema
        name="Curious City"
        url="https://thecurious.city"
        logo="https://thecurious.city/icon.png"
        description="Discover the untold stories, hidden gems, dark history, and local secrets of cities across America."
      />
      <WebsiteSchema
        name="Curious City"
        url="https://thecurious.city"
        description="Local content for curious people. History, guides, and hidden gems from cities across America."
      />

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-neutral-50 via-white to-accent-50 border-b border-neutral-200">
          <div className="container-page section-spacing">
            <div className="text-center mb-12">
              <span className="sr-only">Curious City</span>
              <div className="max-w-4xl mx-auto mb-5 overflow-hidden rounded-2xl shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45)]">
                <Image
                  src="/banners/Curious-Banner.png"
                  alt="Curious City banner"
                  width={1536}
                  height={512}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <h1 className="sr-only">Curious City - Local Content for Curious People</h1>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                Local content for curious people. History, guides, and hidden gems from cities across America.
              </p>
            </div>

            {/* Featured Content - Magazine Style */}
            {featuredPages.length > 0 && (
              <section className="mb-12">
                <div className="grid gap-6 md:grid-cols-2">
                  {featuredPages.map((page, index) => (
                    <PageCard
                      key={`featured-${page.href}`}
                      data={page}
                      variant="featured"
                      index={index}
                      priority={index === 0}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Main Content Feed - Masonry Layout */}
        <div className="container-page section-spacing">
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                Latest Stories
              </h2>
              <div className="flex gap-2">
                <Link
                  href="/history"
                  className="text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
                >
                  View All →
                </Link>
              </div>
            </div>

            <MasonryGrid
              columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 3,
              }}
            >
              {sortedPageCards.slice(2).map((page, index) => (
                <PageCard
                  key={`${page.citySlug}-${page.pageType}`}
                  data={page}
                  variant="standard"
                  index={index}
                  priority={false}
                />
              ))}
            </MasonryGrid>
          </section>

          {/* Cities Section */}
          <section className="mt-16 pt-16 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                Explore Cities
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="group block p-6 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-accent-700 transition-colors mb-2">
                    {city.name}
                  </h3>
                  {city.tagline && (
                    <p className="text-sm text-neutral-600 mb-4">{city.tagline}</p>
                  )}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 group-hover:gap-3 transition-all">
                    Explore
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Category Pills */}
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-neutral-700 mb-4">
              Browse by Category
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/history"
                className="px-5 py-2.5 bg-white border-2 border-neutral-200 rounded-full text-sm font-semibold text-neutral-700 hover:border-accent-500 hover:text-accent-700 hover:bg-accent-50 transition-all"
              >
                History
              </Link>
              <Link
                href="/category/hidden-gems"
                className="px-5 py-2.5 bg-white border-2 border-neutral-200 rounded-full text-sm font-semibold text-neutral-700 hover:border-accent-500 hover:text-accent-700 hover:bg-accent-50 transition-all"
              >
                Hidden Gems
              </Link>
              <Link
                href="/category/bars"
                className="px-5 py-2.5 bg-white border-2 border-neutral-200 rounded-full text-sm font-semibold text-neutral-700 hover:border-accent-500 hover:text-accent-700 hover:bg-accent-50 transition-all"
              >
                Best Bars
              </Link>
              <Link
                href="/category/restaurants"
                className="px-5 py-2.5 bg-white border-2 border-neutral-200 rounded-full text-sm font-semibold text-neutral-700 hover:border-accent-500 hover:text-accent-700 hover:bg-accent-50 transition-all"
              >
                Best Restaurants
              </Link>
              <Link
                href="/category/coffee-shops"
                className="px-5 py-2.5 bg-white border-2 border-neutral-200 rounded-full text-sm font-semibold text-neutral-700 hover:border-accent-500 hover:text-accent-700 hover:bg-accent-50 transition-all"
              >
                Coffee Shops
              </Link>
              <Link
                href="/category/dark-history"
                className="px-5 py-2.5 bg-white border-2 border-neutral-200 rounded-full text-sm font-semibold text-neutral-700 hover:border-accent-500 hover:text-accent-700 hover:bg-accent-50 transition-all"
              >
                Dark History
              </Link>
              <Link
                href="/category/lost-and-loved"
                className="px-5 py-2.5 bg-white border-2 border-neutral-200 rounded-full text-sm font-semibold text-neutral-700 hover:border-accent-500 hover:text-accent-700 hover:bg-accent-50 transition-all"
              >
                Lost & Loved
              </Link>
              <Link
                href="/category/curiosities"
                className="px-5 py-2.5 bg-white border-2 border-neutral-200 rounded-full text-sm font-semibold text-neutral-700 hover:border-accent-500 hover:text-accent-700 hover:bg-accent-50 transition-all"
              >
                Curiosities
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
