import { getAllCities } from '@/data/cities'
import { getAllHistory } from '@/data/history'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import Link from 'next/link'
import type { Metadata } from 'next'

// Force dynamic rendering since we use client components with useSearchParams
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sitemap - The Curious City',
  description: 'Complete directory of all cities, sections, and content on The Curious City.',
}

export default async function SitemapPage() {
  const cities = await getAllCities()
  const allHistory = await getAllHistory()

  // Group history articles by city
  const historyByCity = allHistory.reduce(
    (acc, article) => {
      if (!acc[article.citySlug]) {
        acc[article.citySlug] = []
      }
      acc[article.citySlug].push(article)
      return acc
    },
    {} as Record<string, typeof allHistory>
  )

  const citySections = [
    { id: 'articles', label: 'Articles', path: 'articles' },
    { id: 'discover', label: 'Discover', path: 'discover' },
    { id: 'events', label: 'Events', path: 'events' },
    { id: 'guide', label: 'Guide', path: 'guide' },
  ]

  const guideSubsections = [
    { label: 'Bars', path: 'bars' },
    { label: 'Restaurants', path: 'restaurants' },
    { label: 'Coffee Shops', path: 'coffee-shops' },
    { label: 'Hidden Gems', path: 'hidden-gems' },
    { label: 'Local Favorites', path: 'local-favorites' },
    { label: 'Lost & Loved', path: 'lost-and-loved' },
  ]

  const discoverSubsections = [
    { label: 'Curiosities', path: 'curiosities' },
    { label: 'Dark History', path: 'dark-history' },
    // { label: 'Scenes', path: 'scenes' }, // Hidden for v1 launch
  ]

  const globalCategories = [
    { label: 'All Hidden Gems', path: '/category/hidden-gems' },
    { label: 'All Best Bars', path: '/category/bars' },
    { label: 'All Best Restaurants', path: '/category/restaurants' },
    { label: 'All Dark History', path: '/category/dark-history' },
  ]

  return (
    <>
      <UnifiedNav />

      <main className="flex-1 bg-neutral-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
          <div className="container-page py-16 md:py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sitemap
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Complete directory of all cities, sections, and content on The Curious City
              </p>
            </div>
          </div>
        </div>

        <div className="container-page py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            {/* Global Pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b-2 border-accent-600">
                Main Pages
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/history"
                    className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
                  >
                    History (All Articles)
                  </Link>
                </li>
              </ul>
            </section>

            {/* Global Categories */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b-2 border-accent-600">
                Browse All Categories
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {globalCategories.map((category) => (
                  <li key={category.path}>
                    <Link
                      href={category.path}
                      className="block p-4 bg-white border border-neutral-200 rounded-lg hover:border-accent-600 hover:shadow-md transition-all"
                    >
                      <span className="text-accent-600 hover:text-accent-700 font-medium">
                        {category.label}
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
                {cities.map((city) => {
                  const cityHistory = historyByCity[city.slug] || []

                  return (
                    <div key={city.slug} className="bg-white border border-neutral-200 rounded-xl p-6">
                      {/* City Name */}
                      <h3 className="text-xl font-bold text-neutral-900 mb-4">
                        <Link
                          href={`/${city.slug}`}
                          className="text-accent-600 hover:text-accent-700 transition-colors"
                        >
                          {city.name}
                        </Link>
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Main Sections */}
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
                            Main Sections
                          </h4>
                          <ul className="space-y-2">
                            {citySections.map((section) => (
                              <li key={section.id}>
                                <Link
                                  href={`/${city.slug}/${section.path}`}
                                  className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-1"
                                >
                                  <span>→</span>
                                  <span>{section.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Guide Subsections */}
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
                            Guide
                          </h4>
                          <ul className="space-y-2">
                            {guideSubsections.map((subsection) => (
                              <li key={subsection.path}>
                                <Link
                                  href={`/${city.slug}/${subsection.path}`}
                                  className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-1"
                                >
                                  <span>→</span>
                                  <span>{subsection.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Discover Subsections */}
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
                            Discover
                          </h4>
                          <ul className="space-y-2">
                            {discoverSubsections.map((subsection) => (
                              <li key={subsection.path}>
                                <Link
                                  href={`/${city.slug}/${subsection.path}`}
                                  className="text-neutral-700 hover:text-accent-600 transition-colors inline-flex items-center gap-1"
                                >
                                  <span>→</span>
                                  <span>{subsection.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* History Articles */}
                        {cityHistory.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
                              History Articles ({cityHistory.length})
                            </h4>
                            <ul className="space-y-2 max-h-64 overflow-y-auto pr-2">
                              {cityHistory.map((article) => (
                                <li key={article.slug}>
                                  <Link
                                    href={`/${city.slug}/history/${article.slug}`}
                                    className="text-sm text-neutral-600 hover:text-accent-600 transition-colors inline-flex items-center gap-1"
                                  >
                                    <span>•</span>
                                    <span className="line-clamp-1">{article.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
