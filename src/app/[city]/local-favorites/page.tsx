import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityLocalFavorites } from '@/data/cities'
import { ShareLinks, MapThumbnail, ImageCarousel, Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `Local Favorites in ${city.name} | Curious City`,
    description: `The landmarks that define ${city.name} - iconic spots everyone knows and locals secretly love.`,
  }
}

export default async function CityLocalFavoritesPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const favorites = await getCityLocalFavorites(slug)

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="local-favorites"
      />

      <main className="flex-1 bg-white">
        {/* Hero Header with Banner - Minneapolis only */}
        {city.slug === 'minneapolis' ? (
          <div className="relative h-[500px] md:h-[600px] border-b border-neutral-200">
            <img
              src="/Minneapolis/local-favorites/local-favorites-banner.png"
              alt="Local Favorites in Minneapolis"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
            <div className="relative container-page h-full flex flex-col justify-center items-start py-20">
              <div className="max-w-5xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                  Local Favorites in {city.name}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl font-medium leading-relaxed">
                  The landmarks that define the city. Places everyone knows, tourists flock to, and locals secretly love despite claiming they're overrated.
                </p>
              </div>
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <ShareLinks title={`Local Favorites in ${city.name} | Curious City`} variant="banner" />
              </div>
            </div>
          </div>
        ) : (
          <div className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
            <div className="container-page py-12 md:py-16">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
                    Local Favorites in {city.name}
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-600 max-w-3xl">
                    The landmarks that define the city. Places everyone knows, tourists flock to, and locals secretly love despite claiming they're overrated.
                  </p>
                </div>
                <div className="hidden sm:block flex-shrink-0">
                  <ShareLinks title={`Local Favorites in ${city.name} | Curious City`} variant="compact" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-page section-spacing">

          {favorites.length > 0 ? (
            <div className="divide-y divide-neutral-100">
              {favorites.map((favorite: any, index: number) => (
                <article key={favorite.id} className="py-10 first:pt-0">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-neutral-900 text-white text-sm font-medium rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">{favorite.name}</h3>

                      {/* Images - use ImageCarousel component for client-side interactivity */}
                      {favorite.images && favorite.images.length > 0 && (
                        <div className="mb-6">
                          <ImageCarousel images={favorite.images} />
                        </div>
                      )}

                      <p className="text-neutral-600 leading-relaxed mb-6">{favorite.description}</p>

                      {/* Map and address section - matching bars format */}
                      {(favorite.coordinates || favorite.address) && (
                        <div className="mt-6 bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200">
                          <div className="flex flex-col md:flex-row">
                            {favorite.coordinates && (
                              <div className="flex-shrink-0">
                                <MapThumbnail
                                  lat={favorite.coordinates.lat}
                                  lng={favorite.coordinates.lng}
                                  name={favorite.name}
                                  width={280}
                                  height={180}
                                  zoom={12}
                                  className="w-full md:w-[280px] h-[180px]"
                                />
                              </div>
                            )}
                            <div className="hidden md:block w-px bg-neutral-200" />
                            <div className="flex flex-col gap-4 p-5 justify-center">
                              {favorite.address && (() => {
                                const addressParts = favorite.address.split(', ')
                                const streetAddress = addressParts[0]
                                const cityStateZip = addressParts.slice(1).join(', ')
                                return (
                                  <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(favorite.address)}`}
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
                              {favorite.website && (
                                <a
                                  href={favorite.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                  </svg>
                                  <span className="text-base underline underline-offset-2">Website</span>
                                </a>
                              )}
                              {favorite.phone && (
                                <a
                                  href={`tel:${favorite.phone}`}
                                  className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                  </svg>
                                  <span className="text-base">{favorite.phone}</span>
                                </a>
                              )}
                              {favorite.hours && (
                                <div className="flex items-start gap-3 text-neutral-600">
                                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-base">{favorite.hours}</span>
                                </div>
                              )}
                              {favorite.price && (
                                <div className="flex items-center gap-3 text-neutral-600">
                                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-base">{favorite.price}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {favorite.tip && (
                        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                          <p className="text-sm text-amber-900 flex items-start gap-2">
                            <svg className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <span><strong>Pro tip:</strong> {favorite.tip}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No local favorites yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
