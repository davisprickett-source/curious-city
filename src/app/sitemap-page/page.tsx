import { getAllCities } from '@/data/cities'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import Link from 'next/link'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sitemap - Curious City',
  description: 'Complete directory of all cities, sections, and content on Curious City.',
}

// Article data by city - imported dynamically
async function getCityArticles(citySlug: string) {
  try {
    const module = await import(`@/data/cities/${citySlug}/articles`)
    return module.articles || []
  } catch {
    return []
  }
}

export default async function SitemapPage() {
  const cities = await getAllCities()

  // Get articles for each city
  const citiesWithArticles = await Promise.all(
    cities.map(async (city) => {
      const articles = await getCityArticles(city.slug)
      return { ...city, articles }
    })
  )

  const globalCategories = [
    { label: 'Curiosities', path: '/category/curiosities', description: 'Strange facts and oddities' },
    { label: 'Dark History', path: '/category/dark-history', description: 'Crimes, disasters, and mysteries' },
    { label: 'Hidden Gems', path: '/category/hidden-gems', description: 'Secret spots and discoveries' },
    { label: 'Lost & Loved', path: '/category/lost-and-loved', description: 'Closed places we miss' },
    { label: 'Best Bars', path: '/category/bars', description: 'Top bars in every city' },
    { label: 'Best Restaurants', path: '/category/restaurants', description: 'Top restaurants in every city' },
  ]

  return (
    <>
      <UnifiedNav />

      <div className="city-page-wrapper">
        <main className="flex-1 bg-neutral-50">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
            <div className="container-page py-16 md:py-20">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Sitemap
                </h1>
                <p className="text-xl text-neutral-300 leading-relaxed">
                  Complete directory of all cities, categories, and content on Curious City
                </p>
              </div>
            </div>
          </div>

          <div className="container-page py-12 md:py-16">
            <div className="max-w-5xl mx-auto">

              {/* Main Pages */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b-2 border-accent-600">
                  Main Pages
                </h2>
                <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <li>
                    <Link
                      href="/"
                      className="block p-4 bg-white border border-neutral-200 rounded-lg hover:border-accent-600 hover:shadow-md transition-all"
                    >
                      <span className="text-accent-600 font-medium">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cities"
                      className="block p-4 bg-white border border-neutral-200 rounded-lg hover:border-accent-600 hover:shadow-md transition-all"
                    >
                      <span className="text-accent-600 font-medium">All Cities</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block p-4 bg-white border border-neutral-200 rounded-lg hover:border-accent-600 hover:shadow-md transition-all"
                    >
                      <span className="text-accent-600 font-medium">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="block p-4 bg-white border border-neutral-200 rounded-lg hover:border-accent-600 hover:shadow-md transition-all"
                    >
                      <span className="text-accent-600 font-medium">Contact</span>
                    </Link>
                  </li>
                </ul>
              </section>

              {/* Browse All Categories */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b-2 border-accent-600">
                  Browse by Category
                </h2>
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {globalCategories.map((category) => (
                    <li key={category.path}>
                      <Link
                        href={category.path}
                        className="block p-4 bg-white border border-neutral-200 rounded-lg hover:border-accent-600 hover:shadow-md transition-all"
                      >
                        <span className="text-accent-600 font-medium block mb-1">
                          {category.label}
                        </span>
                        <span className="text-sm text-neutral-500">
                          {category.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Cities */}
              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b-2 border-accent-600">
                  Cities ({cities.length})
                </h2>

                <div className="space-y-8">
                  {citiesWithArticles.map((city) => (
                    <div key={city.slug} className="bg-white border border-neutral-200 rounded-xl p-6">
                      {/* City Name */}
                      <h3 className="text-xl font-bold mb-6">
                        <Link
                          href={`/${city.slug}`}
                          className="text-accent-600 hover:text-accent-700 transition-colors"
                        >
                          {city.name}
                        </Link>
                      </h3>

                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Discover Section */}
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
                            Discover
                          </h4>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href={`/${city.slug}/curiosities`}
                                className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-2"
                              >
                                <span className="text-accent-500">→</span>
                                <span>Curiosities</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/${city.slug}/dark-history`}
                                className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-2"
                              >
                                <span className="text-accent-500">→</span>
                                <span>Dark History</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/${city.slug}/hidden-gems`}
                                className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-2"
                              >
                                <span className="text-accent-500">→</span>
                                <span>Hidden Gems</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/${city.slug}/lost-and-loved`}
                                className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-2"
                              >
                                <span className="text-accent-500">→</span>
                                <span>Lost & Loved</span>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Guide Section */}
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
                            Guide
                          </h4>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href={`/${city.slug}/guide`}
                                className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-2"
                              >
                                <span className="text-accent-500">→</span>
                                <span>City Guide</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/${city.slug}/bars`}
                                className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-2"
                              >
                                <span className="text-accent-500">→</span>
                                <span>Bars</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/${city.slug}/restaurants`}
                                className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-2"
                              >
                                <span className="text-accent-500">→</span>
                                <span>Restaurants</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/${city.slug}/coffee-shops`}
                                className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-2"
                              >
                                <span className="text-accent-500">→</span>
                                <span>Coffee Shops</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/${city.slug}/local-favorites`}
                                className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-2"
                              >
                                <span className="text-accent-500">→</span>
                                <span>Local Favorites</span>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Articles Section */}
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
                            Articles {city.articles.length > 0 && `(${city.articles.length})`}
                          </h4>
                          {city.articles.length > 0 ? (
                            <ul className="space-y-2">
                              {city.articles.map((article: { slug: string; title: string }) => (
                                <li key={article.slug}>
                                  <Link
                                    href={`/${city.slug}/articles/${article.slug}`}
                                    className="text-sm text-neutral-600 hover:text-accent-600 transition-colors inline-flex items-start gap-2"
                                  >
                                    <span className="text-accent-500 mt-0.5">•</span>
                                    <span className="line-clamp-2">{article.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-neutral-400 italic">Coming soon</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Legal Pages */}
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b-2 border-accent-600">
                  Legal
                </h2>
                <ul className="flex flex-wrap gap-4">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </section>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
