import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { getCityListiclePages } from '@/lib/content/cityHomepage'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'

interface DiscoverPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: DiscoverPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `Discover ${city.name} | Curious City`,
    description: `Explore ${city.name}'s curiosities, dark history, hidden gems, and more through curated collections.`,
  }
}

// Type-based styling for cards
const typeStyles: Record<string, { gradient: string; fallback: string; icon: React.ReactNode }> = {
  'dark-history': {
    gradient: 'from-red-900/90 via-red-900/60 to-red-900/30',
    fallback: 'from-red-800 to-red-950',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
  },
  curiosities: {
    gradient: 'from-purple-900/90 via-purple-900/60 to-purple-900/30',
    fallback: 'from-purple-700 to-indigo-800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  'hidden-gems': {
    gradient: 'from-emerald-900/90 via-emerald-900/60 to-emerald-900/30',
    fallback: 'from-emerald-700 to-teal-800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  'lost-loved': {
    gradient: 'from-amber-900/90 via-amber-900/60 to-amber-900/30',
    fallback: 'from-orange-700 to-amber-800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
}

export default async function DiscoverPage({ params }: DiscoverPageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const listiclePages = await getCityListiclePages(slug)

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="discover"
      />

      <main className="flex-1 bg-white">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
          <div className="container-page py-12 md:py-16">
            <div className="max-w-4xl">
              <div className="eyebrow text-accent-400 mb-3">Explore</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Discover {city.name}
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
                Curated collections of curiosities, dark history, hidden gems, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Listicle Collections Grid */}
        {listiclePages.length > 0 ? (
          <div className="container-page py-10 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listiclePages.map((page) => {
                const style = typeStyles[page.type] || typeStyles.curiosities
                return (
                  <Link
                    key={page.type}
                    href={page.href}
                    className="group block"
                  >
                    <div className="relative rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      {/* Background */}
                      <div className="absolute inset-0">
                        {page.thumbnail ? (
                          <>
                            <Image
                              src={page.thumbnail}
                              alt={page.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${style.gradient}`} />
                          </>
                        ) : (
                          <div className={`absolute inset-0 bg-gradient-to-br ${style.fallback}`} />
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative p-6 md:p-8 min-h-[220px] md:min-h-[260px] flex flex-col justify-end">
                        {/* Entry count badge */}
                        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-white/90">
                            {page.entryCount} {page.entryCount === 1 ? 'entry' : 'entries'}
                          </span>
                        </div>

                        {/* Icon */}
                        <div className="text-white/80 mb-3">
                          {style.icon}
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {page.title}
                        </h2>

                        {/* Teaser */}
                        <p className="text-base text-white/85 leading-relaxed line-clamp-2 mb-4">
                          {page.teaser}
                        </p>

                        {/* Explore link */}
                        <div className="flex items-center text-white/70 group-hover:text-white transition-colors">
                          <span className="text-sm font-medium">Explore</span>
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="container-page py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Collections Coming Soon
              </h2>
              <p className="text-lg text-neutral-600">
                We're working on curating collections of curiosities, dark history, and hidden gems for {city.name}.
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
