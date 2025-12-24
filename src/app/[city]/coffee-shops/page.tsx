import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityBestOf } from '@/data/cities'
import { Header, CityNav, ShareLinks, MapThumbnail, ImageCarousel } from '@/components'

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
    title: `Best Coffee Shops in ${city.name} | Curious City`,
    description: `The best coffee shops in ${city.name} - cozy cafes, third-wave roasters, and neighborhood favorites.`,
  }
}

export default async function CityCoffeeShopsPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  const coffeeShops = getCityBestOf(slug, 'coffee-shops')

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} currentSection="coffee-shops" />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
                Best Coffee Shops in {city.name}
              </h1>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Best Coffee Shops in ${city.name} | Curious City`} variant="compact" />
              </div>
            </div>
            <p className="text-lg text-neutral-600">
              Cozy cafes, third-wave roasters, and neighborhood favorites. Where locals get their fix.
            </p>
          </div>

          {/* Coffee Shops List */}
          {coffeeShops.length > 0 ? (
            <div className="divide-y divide-neutral-200">
              {coffeeShops.map((bestOf: any) => (
                <section key={bestOf.id}>
                  {bestOf.intro && (
                    <p className="text-neutral-600 mb-8 pt-2">{bestOf.intro}</p>
                  )}
                  <div className="divide-y divide-neutral-300">
                    {bestOf.spots.map((spot: any, index: number) => (
                      <article key={index} className="py-10 first:pt-0">
                        <div className="flex items-start gap-4">
                          <div className="w-7 h-7 bg-neutral-900 text-white text-sm font-medium rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline gap-3 flex-wrap mb-2">
                              {spot.website ? (
                                <a
                                  href={spot.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-3xl font-bold text-neutral-900 hover:text-neutral-600 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-400"
                                >
                                  {spot.name}
                                </a>
                              ) : (
                                <h3 className="text-3xl font-bold text-neutral-900">{spot.name}</h3>
                              )}
                              <span className="text-sm text-neutral-500">{spot.neighborhood}</span>
                              {spot.price && (
                                <span className="text-sm text-neutral-400 font-medium">{spot.price}</span>
                              )}
                            </div>
                            <p className="text-xl text-neutral-600 italic mb-5">{spot.vibe}</p>

                            {/* Venue image carousel */}
                            {(spot.images || spot.image) && (
                              <div className="mb-4">
                                <ImageCarousel
                                  images={spot.images || (spot.image ? [spot.image] : [])}
                                />
                              </div>
                            )}

                            {spot.order && (
                              <div className="mb-4 bg-amber-50 border-l-4 border-amber-400 px-4 py-3 rounded-r-lg">
                                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">The order</span>
                                <p className="text-neutral-800 mt-1 font-medium">{spot.order}</p>
                              </div>
                            )}
                            <p className="text-neutral-600 leading-relaxed">{spot.why}</p>

                            {/* Map and address section */}
                            {(spot.coordinates || spot.address) && (
                              <div className="mt-6 bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200">
                                <div className="flex flex-col md:flex-row">
                                  {spot.coordinates && (
                                    <div className="flex-shrink-0">
                                      <MapThumbnail
                                        lat={spot.coordinates.lat}
                                        lng={spot.coordinates.lng}
                                        name={spot.name}
                                        width={280}
                                        height={180}
                                        zoom={15}
                                        className="w-full md:w-[280px] h-[180px]"
                                      />
                                    </div>
                                  )}
                                  <div className="hidden md:block w-px bg-neutral-200" />
                                  <div className="flex flex-col gap-4 p-5 justify-center">
                                    {spot.address && (() => {
                                      const addressParts = spot.address.split(', ')
                                      const streetAddress = addressParts[0]
                                      const cityStateZip = addressParts.slice(1).join(', ')
                                      return (
                                        <a
                                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.address)}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-start gap-3 text-neutral-700 hover:text-neutral-900 group"
                                        >
                                          <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-neutral-400 group-hover:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                          </svg>
                                          <div className="flex flex-col">
                                            <span className="text-base font-semibold underline underline-offset-2 decoration-neutral-300 group-hover:decoration-neutral-500">
                                              {streetAddress}
                                            </span>
                                            <span className="text-sm text-neutral-500">
                                              {cityStateZip}
                                            </span>
                                          </div>
                                        </a>
                                      )
                                    })()}
                                    {spot.instagram && (
                                      <a
                                        href={`https://instagram.com/${spot.instagram.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900"
                                      >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        <span className="text-base underline underline-offset-2">{spot.instagram}</span>
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No coffee shop recommendations yet for {city.name}.</p>
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
