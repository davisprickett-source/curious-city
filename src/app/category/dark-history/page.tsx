import Link from 'next/link'
import { Metadata } from 'next'
import { getAllDarkHistory } from '@/data/cities'
import { Header } from '@/components'

export const metadata: Metadata = {
  title: 'Dark History | Curious City',
  description: 'Forgotten crimes, unsolved mysteries, and macabre history from cities across America.',
}

export default function DarkHistoryPage() {
  const allItems = getAllDarkHistory()

  // Group items by city
  const itemsByCity = allItems.reduce((acc, { citySlug, cityName, item }) => {
    if (!acc[citySlug]) {
      acc[citySlug] = { cityName, items: [] }
    }
    acc[citySlug].items.push(item)
    return acc
  }, {} as Record<string, { cityName: string; items: any[] }>)

  const cities = Object.entries(itemsByCity)

  // Category badge color helper
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'unsolved':
        return 'bg-red-50 text-red-700'
      case 'crime':
        return 'bg-orange-50 text-orange-700'
      case 'disaster':
        return 'bg-amber-50 text-amber-700'
      case 'mystery':
        return 'bg-purple-50 text-purple-700'
      case 'macabre':
        return 'bg-neutral-800 text-neutral-200'
      default:
        return 'bg-neutral-100 text-neutral-600'
    }
  }

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Dark History
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Forgotten crimes, unsolved mysteries, and the darker chapters
              that shaped these cities. The stories that don't make it into the brochures.
            </p>
          </div>

          {/* Items by City */}
          {cities.length > 0 ? (
            <div className="space-y-12">
              {cities.map(([citySlug, { cityName, items }]) => (
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
                  <div className="grid gap-4 md:grid-cols-2">
                    {items.map((item: any) => (
                      <div
                        key={item.id}
                        className="p-5 bg-white rounded-xl border border-neutral-200"
                      >
                        {/* Header with category and year */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded ${getCategoryStyle(item.category)}`}>
                            {item.category}
                          </span>
                          {item.year && (
                            <span className="text-xs text-neutral-400">
                              {item.year}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-semibold text-neutral-900 mb-2">
                          {item.title}
                        </h3>

                        {/* Body */}
                        <p className="text-sm text-neutral-600 mb-3">
                          {item.body}
                        </p>

                        {/* Verdict */}
                        {item.verdict && (
                          <div className="bg-neutral-50 rounded-lg px-3 py-2 mb-3">
                            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">What happened</span>
                            <p className="text-neutral-700 text-sm mt-0.5">{item.verdict}</p>
                          </div>
                        )}

                        {/* Footer */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
                          {item.location && (
                            <span>{item.location.name}</span>
                          )}
                          {item.source && (
                            <span className="italic">Source: {item.source}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-4">No dark history entries yet. Check back soon!</p>
              <p className="text-sm text-neutral-400">
                This section will feature forgotten crimes, unsolved mysteries, and macabre historical events from each city.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-neutral-200 mt-12">
        <div className="container-page py-6">
          <p className="text-xs text-neutral-400 text-center">
            Curious City
          </p>
        </div>
      </footer>
    </>
  )
}
