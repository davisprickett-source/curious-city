import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityLostAndLoved } from '@/data/cities'
import { ShareLinks, Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
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
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `Lost & Loved in ${city.name} | Curious City`,
    description: `The beloved businesses that shaped ${city.name} and the spaces they left behind. Restaurants, bars, and institutions we still miss.`,
  }
}

// Category badge color helper
const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'restaurant':
      return 'bg-rose-50 text-rose-700'
    case 'bar':
      return 'bg-amber-50 text-amber-700'
    case 'shop':
      return 'bg-blue-50 text-blue-700'
    case 'theater':
      return 'bg-purple-50 text-purple-700'
    case 'music-venue':
      return 'bg-indigo-50 text-indigo-700'
    case 'cafe':
      return 'bg-emerald-50 text-emerald-700'
    case 'bookstore':
      return 'bg-slate-100 text-slate-700'
    case 'entertainment':
      return 'bg-pink-50 text-pink-700'
    default:
      return 'bg-neutral-100 text-neutral-600'
  }
}

export default async function CityLostAndLovedPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const items = await getCityLostAndLoved(slug)

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="lost-and-loved"
      />

      <main className="flex-1 bg-white">
        {/* Hero Header with Banner - Minneapolis only */}
        {city.slug === 'minneapolis' ? (
          <div className="relative h-[500px] md:h-[600px] border-b border-neutral-200">
            <img
              src="/Minneapolis/lost-and-loved/lovedlost-banner.png"
              alt="Lost & Loved in Minneapolis"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
            <div className="relative container-page h-full flex flex-col justify-center items-start py-20">
              <div className="max-w-5xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                  Lost & Loved in {city.name}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl font-medium leading-relaxed">
                  The beloved businesses that shaped this city and the spaces they left behind. The restaurants, bars, and institutions we still miss.
                </p>
              </div>
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <ShareLinks title={`Lost & Loved in ${city.name} | Curious City`} variant="banner" />
              </div>
            </div>
          </div>
        ) : (
          <div className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
            <div className="container-page py-12 md:py-16">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
                    Lost & Loved in {city.name}
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-600 max-w-3xl">
                    The beloved businesses that shaped this city and the spaces they left behind. The restaurants, bars, and institutions we still miss.
                  </p>
                </div>
                <div className="hidden sm:block flex-shrink-0">
                  <ShareLinks title={`Lost & Loved in ${city.name} | Curious City`} variant="compact" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-page section-spacing">

          {items.length > 0 ? (
            <div className="divide-y divide-neutral-100">
              {items.map((item: any, index: number) => (
                <article key={item.id} className="py-8 first:pt-0">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-neutral-900 text-white text-sm font-medium rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      {/* Header with category and years */}
                      <div className="flex items-baseline gap-2 flex-wrap mb-1">
                        <h3 className="text-lg font-semibold text-neutral-900">{item.name}</h3>
                        <span className="text-sm text-neutral-500">{item.neighborhood}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${getCategoryStyle(item.category)}`}>
                          {item.category.replace('-', ' ')}
                        </span>
                        {item.yearsOpen && (
                          <span className="text-xs text-neutral-400">{item.yearsOpen}</span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-neutral-600 leading-relaxed mb-4">{item.description}</p>

                      {/* Images - carousel or single */}
                      {item.images && item.images.length > 0 && (
                        <div className="mb-4">
                          {item.images.length === 1 ? (
                            <div className="relative w-full h-80 rounded-xl overflow-hidden">
                              <Image
                                src={item.images[0].src}
                                alt={item.images[0].alt || item.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 800px"
                              />
                            </div>
                          ) : (
                            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
                              {item.images.map((img: any, imgIdx: number) => (
                                <div key={imgIdx} className="relative flex-shrink-0 w-[85%] h-80 rounded-xl overflow-hidden snap-center">
                                  <Image
                                    src={img.src}
                                    alt={img.alt || item.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 85vw, 680px"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      {/* Single image fallback */}
                      {item.image && !item.images && (
                        <div className="mb-4 relative w-full h-80 rounded-xl overflow-hidden">
                          <Image
                            src={item.image.src}
                            alt={item.image.alt || item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 800px"
                          />
                        </div>
                      )}

                      {/* Why missed */}
                      <div className="bg-neutral-50 rounded-lg px-4 py-3 mb-4">
                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Why it's missed</span>
                        <p className="text-neutral-700 mt-1">{item.whyMissed}</p>
                      </div>

                      {/* Community voice */}
                      {item.communityVoice && (
                        <blockquote className="border-l-2 border-accent-300 pl-4 mb-4">
                          <p className="italic text-neutral-600">{item.communityVoice}</p>
                        </blockquote>
                      )}

                      {/* Sources and Metadata Table */}
                      {((item.sources && item.sources.length > 0) || item.lastAddress || item.category || item.yearsOpen) && (
                        <div className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Sources Column */}
                            {item.sources && item.sources.length > 0 && (
                              <div>
                                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Sources</h4>
                                <ul className="space-y-2">
                                  {item.sources.map((source: { title: string; url: string }, idx: number) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                      </svg>
                                      {source.url ? (
                                        <a
                                          href={source.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors text-sm font-medium"
                                        >
                                          {source.title}
                                        </a>
                                      ) : (
                                        <span className="text-neutral-700 text-sm">{source.title}</span>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Metadata Column (Address, Category, Years) */}
                            {(item.category || item.yearsOpen || item.lastAddress) && (
                              <div className="space-y-4">
                                {/* Last Address with Google Maps link */}
                                {item.lastAddress && (
                                  <div>
                                    <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Last Known Address</h4>
                                    <div className="flex items-start gap-2 text-sm">
                                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                      </svg>
                                      <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.lastAddress)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors font-medium"
                                      >
                                        {item.lastAddress}
                                      </a>
                                    </div>
                                  </div>
                                )}

                                {/* Category */}
                                {item.category && (
                                  <div>
                                    <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Category</h4>
                                    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${getCategoryStyle(item.category)}`}>
                                      {item.category.replace('-', ' ')}
                                    </span>
                                  </div>
                                )}

                                {/* Years Open */}
                                {item.yearsOpen && (
                                  <div>
                                    <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Years Open</h4>
                                    <span className="text-base text-neutral-700 font-semibold">{item.yearsOpen}</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {/* Fallback for old source format */}
                      {item.source && !item.sources && (
                        <div className="text-sm text-neutral-500 italic border-t border-neutral-200 pt-4">
                          Source: {item.source}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No Lost & Loved entries yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">
                This section will feature beloved businesses that have closed and the memories they left behind.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
