import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCity, getAllCitySlugs, getCityLostAndLoved, getCityLostAndLovedSection } from '@/data/cities'
import { ShareLinks, Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'

// Dynamically import the scroll component (client-only)
const LostLovedScroll = dynamic(() => import('@/components/LostLovedScroll').then(mod => ({ default: mod.LostLovedScroll })), {
  loading: () => (
    <div className="container-page py-20 text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-neutral-900 border-r-transparent"></div>
      <p className="mt-4 text-neutral-500">Loading...</p>
    </div>
  ),
  ssr: false,
})

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

export default async function CityLostAndLovedPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const items = await getCityLostAndLoved(slug)
  const section = await getCityLostAndLovedSection(slug)

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="lost-and-loved"
      />

      <main className="flex-1">
        {/* Hero Header with Banner - Full Screen */}
        <div className="relative min-h-screen flex flex-col">
          <img
            src={city.slug === 'minneapolis'
              ? "/Minneapolis/lost-and-loved/lovedlost-banner.png"
              : "/global-banners/lost-and-loved.png"}
            alt={`Lost & Loved in ${city.name}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Vintage sepia overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-orange-900/30 to-amber-950/60" />

          {/* Content centered in hero */}
          <div className="relative flex-1 container-page flex flex-col justify-center items-start py-20">
            <div className="max-w-5xl">
              {/* Title with Share Button */}
              <div className="flex items-start justify-between gap-6 mb-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                  {section?.title ? `${section.title} in ${city.name}` : `Lost & Loved in ${city.name}`}
                </h1>
                <div className="flex-shrink-0 mt-2">
                  <ShareLinks title={`Lost & Loved in ${city.name} | Curious City`} variant="banner" />
                </div>
              </div>

              {/* Teaser/Hook */}
              {section?.teaser && (
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium leading-relaxed mb-6">
                  {section.teaser}
                </p>
              )}

              {/* Intro in opacity cell */}
              <div className="bg-amber-950/40 backdrop-blur-sm rounded-lg px-6 py-4 max-w-3xl">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  {section?.intro || "The beloved businesses that shaped this city and the spaces they left behind. The restaurants, bars, and institutions we still miss."}
                </p>
              </div>
            </div>
          </div>

          {/* Scroll indicator arrow */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </div>

        {/* Premium Scroll Component */}
        <LostLovedScroll items={items} cityName={city.name} />
      </main>

      <Footer />
    </>
  )
}
