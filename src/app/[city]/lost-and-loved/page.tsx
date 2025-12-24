import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityLostAndLoved } from '@/data/cities'
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
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  const items = getCityLostAndLoved(slug)

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} currentSection="lost-and-loved" />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
                Lost & Loved in {city.name}
              </h1>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Lost & Loved in ${city.name} | Curious City`} variant="compact" />
              </div>
            </div>
            <p className="text-lg text-neutral-600">
              The beloved businesses that shaped this city and the spaces they left behind.
              The restaurants, bars, and institutions we still miss.
            </p>
          </div>

          {/* Lost & Loved Items */}
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

                      {/* Image */}
                      {item.image && (
                        <div className="mb-4 overflow-hidden rounded-lg max-w-md">
                          <img
                            src={item.image.src}
                            alt={item.image.alt || item.name}
                            className="w-full h-48 object-cover"
                          />
                          {item.image.credit && (
                            <div className="text-[11px] text-neutral-400 mt-1">
                              {item.image.credit}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Why missed */}
                      <div className="bg-neutral-50 rounded-lg px-4 py-3 mb-4 max-w-xl">
                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Why it's missed</span>
                        <p className="text-neutral-700 mt-1">{item.whyMissed}</p>
                      </div>

                      {/* Community voice */}
                      {item.communityVoice && (
                        <blockquote className="border-l-2 border-accent-300 pl-4 mb-4 max-w-xl">
                          <p className="italic text-neutral-600">{item.communityVoice}</p>
                        </blockquote>
                      )}

                      {/* Footer */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500">
                        {item.lastAddress && (
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {item.lastAddress}
                          </span>
                        )}
                        {item.source && (
                          <span className="italic">Source: {item.source}</span>
                        )}
                      </div>
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
