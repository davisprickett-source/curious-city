import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityHiddenGems } from '@/data/cities'
import { Header, CityNav, ShareLinks } from '@/components'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `Hidden Gems in ${city.name} | Curious City`,
    description: `Discover hidden gems and local favorites in ${city.name} - places the tourists don't know about.`,
  }
}

export default async function CityHiddenGemsPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  const gems = getCityHiddenGems(slug)

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} currentSection="hidden-gems" />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
                Hidden Gems in {city.name}
              </h1>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Hidden Gems in ${city.name} | Curious City`} variant="compact" />
              </div>
            </div>
            <p className="text-lg text-neutral-600">
              Places the locals know about. Museums, parks, shops, and experiences that don't make it into the tourist guides.
            </p>
          </div>

          {/* Gems List */}
          {gems.length > 0 ? (
            <div className="divide-y divide-neutral-100">
              {gems.map((gem: any, index: number) => (
                <article key={gem.id} className="py-8 first:pt-0">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-neutral-900 text-white text-sm font-medium rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap mb-1">
                        <h3 className="text-lg font-semibold text-neutral-900">{gem.name}</h3>
                        <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                          {gem.category}
                        </span>
                      </div>
                      <p className="text-neutral-600 leading-relaxed mb-4">{gem.description}</p>

                      {/* Details */}
                      <div className="space-y-1 text-sm text-neutral-500 mb-4">
                        {gem.address && (
                          <p className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {gem.address}
                          </p>
                        )}
                        {gem.hours && (
                          <p className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {gem.hours}
                          </p>
                        )}
                        {gem.price && (
                          <p className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {gem.price}
                          </p>
                        )}
                      </div>

                      {gem.tip && (
                        <p className="text-sm italic text-neutral-500 mb-4">Tip: {gem.tip}</p>
                      )}

                      {/* Links */}
                      {(gem.website || gem.coordinates) && (
                        <div className="flex gap-4">
                          {gem.website && (
                            <a
                              href={gem.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
                            >
                              Website
                            </a>
                          )}
                          {gem.coordinates && (
                            <a
                              href={`https://www.google.com/maps?q=${gem.coordinates.lat},${gem.coordinates.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
                            >
                              View on Map
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No hidden gems yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">Check back soon!</p>
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
