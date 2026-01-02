import Link from 'next/link'
import { Metadata } from 'next'
import { getAllBestOf } from '@/data/cities'
import { Header, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'Best Bars | Curious City',
  description: 'The best bars across American cities - dive bars, cocktail lounges, and neighborhood favorites.',
}

export default async function BarsPage() {
  const allBars = await getAllBestOf('bars')

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Best Bars
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Dive bars, cocktail lounges, and neighborhood favorites.
              Where locals actually drink.
            </p>
          </div>

          {/* Bars by City */}
          {allBars.length > 0 ? (
            <div className="space-y-12">
              {allBars.map(({ citySlug, cityName, bestOf }) => (
                <section key={`${citySlug}-${bestOf.category}`}>
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
                  {bestOf.intro && (
                    <p className="text-neutral-600 mb-4">{bestOf.intro}</p>
                  )}
                  <div className="grid gap-4 md:grid-cols-2">
                    {bestOf.spots.map((spot: any, index: number) => (
                      <div
                        key={`${citySlug}-bar-${index}`}
                        className="p-5 bg-white rounded-xl border border-neutral-200"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-neutral-900">
                              {spot.name}
                            </h3>
                            <p className="text-xs text-neutral-500">
                              {spot.neighborhood}
                              {spot.price && ` · ${spot.price}`}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-neutral-600 mb-2 italic">
                          {spot.vibe}
                        </p>
                        {spot.order && (
                          <p className="text-sm text-neutral-700 mb-2">
                            <span className="font-medium">Order:</span> {spot.order}
                          </p>
                        )}
                        <p className="text-sm text-neutral-500">
                          {spot.why}
                        </p>
                        {spot.address && (
                          <p className="text-xs text-neutral-400 mt-3">
                            {spot.address}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <p className="text-neutral-500">No bar recommendations yet. Check back soon!</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
