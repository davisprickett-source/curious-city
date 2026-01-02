import Link from 'next/link'
import { Metadata } from 'next'
import { getAllHiddenGems } from '@/data/cities'
import { Header, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Hidden Gems | Curious City',
  description: 'Discover hidden gems and local favorites across American cities.',
}

export default async function HiddenGemsPage() {
  const allGems = await getAllHiddenGems()

  // Group gems by city
  const gemsByCity = allGems.reduce((acc, { citySlug, cityName, gem }) => {
    if (!acc[citySlug]) {
      acc[citySlug] = { cityName, gems: [] }
    }
    acc[citySlug].gems.push(gem)
    return acc
  }, {} as Record<string, { cityName: string; gems: any[] }>)

  const cities = Object.entries(gemsByCity)

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Hidden Gems
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Places the locals know about. Museums, parks, shops, and experiences
              that don't make it into the tourist guides.
            </p>
          </div>

          {/* Gems by City */}
          {cities.length > 0 ? (
            <div className="space-y-12">
              {cities.map(([citySlug, { cityName, gems }]) => (
                <section key={citySlug}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-neutral-900">
                      {cityName}
                    </h2>
                    <Link
                      href={`/${citySlug}`}
                      className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      View city →
                    </Link>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {gems.map((gem) => (
                      <div
                        key={gem.id}
                        className="p-5 bg-white rounded-xl border border-neutral-200"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-neutral-900">
                            {gem.name}
                          </h3>
                          <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                            {gem.category}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-600 mb-3">
                          {gem.description}
                        </p>
                        {gem.location && (
                          <p className="text-xs text-neutral-500">
                            {gem.location}
                          </p>
                        )}
                        {gem.tip && (
                          <p className="text-xs text-neutral-500 mt-2 italic">
                            Tip: {gem.tip}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <p className="text-neutral-500">No hidden gems yet. Check back soon!</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
