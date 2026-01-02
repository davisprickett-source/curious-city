import Link from 'next/link'
import Image from 'next/image'
import { getAllCities } from '@/data/cities'
import { getAllHistory } from '@/data/history'
import { getCity } from '@/data/cities'
import { Header, Footer } from '@/components'
import { OrganizationSchema, WebsiteSchema } from '@/components/StructuredData'

export default async function HomePage() {
  const cities = await getAllCities()
  const history = getAllHistory()

  // Sort history by date, newest first
  const sortedHistory = history.sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
    return dateB - dateA
  })

  // Featured history article (most recent)
  const featuredArticle = sortedHistory[0]
  const featuredCity = featuredArticle ? await getCity(featuredArticle.citySlug) : null

  // Recent history articles (next 4)
  const recentHistory = sortedHistory.slice(1, 5)

  // Pre-load city data for recent history
  const recentCitySlugs = Array.from(new Set(recentHistory.map(a => a.citySlug)))
  const recentCities = await Promise.all(recentCitySlugs.map(slug => getCity(slug)))
  const cityMap = new Map(recentCities.filter(c => c !== null).map(c => [c!.slug, c!]))

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
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="text-center mb-12">
            <span className="sr-only">Curious City</span>
            <div className="max-w-4xl mx-auto mb-5 overflow-hidden rounded-2xl shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45)]">
              <Image
                src="/Curious%20Banner.png"
                alt="Curious City banner"
                width={1536}
                height={512}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Local content for curious people. History, guides, and hidden gems from cities across America.
            </p>
          </div>

          {/* Featured History Article */}
          {featuredArticle && (
            <section className="mb-12">
              <Link
                href={`/${featuredArticle.citySlug}/history/${featuredArticle.slug}`}
                className="group block p-8 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl text-white hover:from-neutral-800 hover:to-neutral-700 transition-all duration-300 hover:shadow-2xl"
              >
                <span className="kicker !text-accent-400">
                  Featured History · {featuredCity?.name}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold mt-3 mb-3 group-hover:text-neutral-200 transition-colors">
                  {featuredArticle.title}
                </h2>
                {featuredArticle.subtitle && (
                  <p className="text-neutral-300 text-lg italic mb-4">
                    {featuredArticle.subtitle}
                  </p>
                )}
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-300 group-hover:text-accent-200 transition-colors">
                  Read article
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </section>
          )}

          {/* Recent History Articles */}
          {recentHistory.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center justify-between mb-5">
                <h2 className="eyebrow text-neutral-500">
                  Recent History
                </h2>
                <Link
                  href="/history"
                  className="flex items-center gap-1 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
                >
                  View all
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {recentHistory.map((article) => {
                  const city = cityMap.get(article.citySlug)
                  return (
                    <Link
                      key={`${article.citySlug}-${article.slug}`}
                      href={`/${article.citySlug}/history/${article.slug}`}
                      className="group block p-5 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <span className="kicker">
                        {city?.name}
                      </span>
                      <h3 className="text-lg font-semibold text-neutral-900 mt-1 group-hover:text-accent-700 transition-colors ui-sans">
                        {article.title}
                      </h3>
                      {article.subtitle && (
                        <p className="text-sm text-neutral-500 mt-2 line-clamp-2">
                          {article.subtitle}
                        </p>
                      )}
                    </Link>
                  )
                })}
              </div>
            </section>
          )}

          {/* Cities */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="eyebrow text-neutral-500">
                Explore Cities
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="group block p-5 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span className="font-semibold text-neutral-900 group-hover:text-accent-700 transition-colors ui-sans">
                    {city.name}
                  </span>
                  {city.tagline && (
                    <p className="text-sm text-neutral-500 mt-1">{city.tagline}</p>
                  )}
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-accent-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h2 className="eyebrow text-neutral-500 mb-5">
              Browse by Category
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/history"
                className="px-5 py-2.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:border-accent-300 hover:text-accent-700 hover:bg-accent-50 transition-all ui-sans"
              >
                History
              </Link>
              <Link
                href="/category/hidden-gems"
                className="px-5 py-2.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:border-accent-300 hover:text-accent-700 hover:bg-accent-50 transition-all ui-sans"
              >
                Hidden Gems
              </Link>
              <Link
                href="/category/bars"
                className="px-5 py-2.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:border-accent-300 hover:text-accent-700 hover:bg-accent-50 transition-all ui-sans"
              >
                Best Bars
              </Link>
              <Link
                href="/category/restaurants"
                className="px-5 py-2.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:border-accent-300 hover:text-accent-700 hover:bg-accent-50 transition-all ui-sans"
              >
                Best Restaurants
              </Link>
              <Link
                href="/category/dark-history"
                className="px-5 py-2.5 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:border-accent-300 hover:text-accent-700 hover:bg-accent-50 transition-all ui-sans"
              >
                Dark History
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
