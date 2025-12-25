import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityHiddenGems } from '@/data/cities'
import { Header, CityNav, ShareLinks, MapThumbnail } from '@/components'
import Image from 'next/image'

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
                <article key={gem.id} className="py-10 first:pt-0">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-neutral-900 text-white text-sm font-medium rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap mb-2">
                        <h3 className="text-xl font-semibold text-neutral-900">{gem.name}</h3>
                        <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                          {gem.category}
                        </span>
                      </div>

                      {/* Image */}
                      {gem.image && (
                        <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                          <Image
                            src={gem.image.src}
                            alt={gem.image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 800px"
                          />
                        </div>
                      )}

                      <p className="text-neutral-600 leading-relaxed mb-6">{gem.description}</p>

                      {/* Map and address section - matching bars format */}
                      {(gem.coordinates || gem.address) && (
                        <div className="mt-6 bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200">
                          <div className="flex flex-col md:flex-row">
                            {gem.coordinates && (
                              <div className="flex-shrink-0">
                                <MapThumbnail
                                  lat={gem.coordinates.lat}
                                  lng={gem.coordinates.lng}
                                  name={gem.name}
                                  width={280}
                                  height={180}
                                  zoom={15}
                                  className="w-full md:w-[280px] h-[180px]"
                                />
                              </div>
                            )}
                            <div className="hidden md:block w-px bg-neutral-200" />
                            <div className="flex flex-col gap-4 p-5 justify-center">
                              {gem.address && (() => {
                                const addressParts = gem.address.split(', ')
                                const streetAddress = addressParts[0]
                                const cityStateZip = addressParts.slice(1).join(', ')
                                return (
                                  <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gem.address)}`}
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
                              {gem.website && (
                                <a
                                  href={gem.website}
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
                              {gem.phone && (
                                <a
                                  href={`tel:${gem.phone}`}
                                  className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                  </svg>
                                  <span className="text-base">{gem.phone}</span>
                                </a>
                              )}
                              {gem.hours && (
                                <div className="flex items-start gap-3 text-neutral-600">
                                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-base">{gem.hours}</span>
                                </div>
                              )}
                              {gem.price && (
                                <div className="flex items-center gap-3 text-neutral-600">
                                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-base">{gem.price}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {gem.tip && (
                        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                          <p className="text-sm text-amber-900 flex items-start gap-2">
                            <svg className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <span><strong>Pro tip:</strong> {gem.tip}</span>
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
