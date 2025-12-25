import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityCuriosities } from '@/data/cities'
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
    title: `Curiosities of ${city.name} | Curious City`,
    description: `Fascinating facts, forgotten history, and the strange stories that make ${city.name} unique.`,
  }
}

// Category badge color helper
const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'history':
      return 'bg-amber-50 text-amber-700'
    case 'architecture':
      return 'bg-blue-50 text-blue-700'
    case 'underground':
      return 'bg-neutral-800 text-neutral-200'
    case 'science':
      return 'bg-emerald-50 text-emerald-700'
    case 'culture':
      return 'bg-purple-50 text-purple-700'
    case 'law':
      return 'bg-red-50 text-red-700'
    case 'invention':
      return 'bg-cyan-50 text-cyan-700'
    case 'legend':
      return 'bg-violet-50 text-violet-700'
    case 'nature':
      return 'bg-green-50 text-green-700'
    default:
      return 'bg-neutral-100 text-neutral-600'
  }
}

export default async function CityCuriositiesPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  const curiosities = getCityCuriosities(slug)

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} currentSection="curiosities" />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
                Curiosities of {city.name}
              </h1>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Curiosities of ${city.name} | Curious City`} variant="compact" />
              </div>
            </div>
            <p className="text-lg text-neutral-600">
              Forgotten history, strange laws, underground secrets, and the peculiar facts that make this city unlike anywhere else.
            </p>
          </div>

          {/* Curiosities List */}
          {curiosities.length > 0 ? (
            <div className="divide-y divide-neutral-100">
              {curiosities.map((item: any, index: number) => (
                <article key={item.id} className="py-8 first:pt-0">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-neutral-900 text-white text-sm font-medium rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      {/* Header with category and year */}
                      <div className="flex items-baseline gap-2 flex-wrap mb-1">
                        <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                        {item.category && (
                          <span className={`text-xs font-medium px-2 py-0.5 rounded ${getCategoryStyle(item.category)}`}>
                            {item.category}
                          </span>
                        )}
                        {item.year && (
                          <span className="text-xs text-neutral-400">{item.year}</span>
                        )}
                      </div>

                      {/* Body */}
                      <p className="text-neutral-600 leading-relaxed mb-4">{item.body}</p>

                      {/* Image */}
                      {item.image && (
                        <div className="mb-4 overflow-hidden rounded-lg max-w-md">
                          <img
                            src={item.image.src}
                            alt={item.image.alt || item.title}
                            className="w-full h-48 object-cover"
                          />
                          {item.image.credit && (
                            <div className="text-[11px] text-neutral-400 mt-1">
                              {item.image.credit}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500">
                        {item.location && (
                          <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {item.location.name}
                            {item.location.stillExists === false && (
                              <span className="text-neutral-400">(no longer exists)</span>
                            )}
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
              <p className="text-neutral-500 mb-2">No curiosities yet for {city.name}.</p>
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
