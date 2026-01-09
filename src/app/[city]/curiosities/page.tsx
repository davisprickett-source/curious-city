import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCity, getAllCitySlugs, getCityCuriosities } from '@/data/cities'
import { ShareLinks, Footer, NewsletterSignup, RelatedContent } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'

// Dynamically import heavy scroll component
const CuriositiesScroll = dynamic(
  () => import('@/components/CuriositiesScroll').then(mod => ({ default: mod.CuriositiesScroll })),
  {
    loading: () => (
      <div className="container-page py-20">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-neutral-900 border-r-transparent"></div>
          <p className="mt-4 text-neutral-500">Loading...</p>
        </div>
      </div>
    ),
    ssr: false, // Client-only component with animations
  }
)

interface PageProps {
  params: Promise<{ city: string }>
  searchParams: Promise<{ category?: string }>
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
    title: `Curiosities of ${city.name} | Curious City`,
    description: `Fascinating facts, forgotten history, and the strange stories that make ${city.name} unique.`,
  }
}

// Category badge color helper
// @ts-ignore - Function for future use
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

export default async function CityCuriositiesPage({ params, searchParams }: PageProps) {
  const { city: slug } = await params
  const { category: activeCategory } = await searchParams
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const allCuriosities = await getCityCuriosities(slug)

  // Find the curiosities section for title/teaser/intro
  const findSection = (items: any[]): any => {
    for (const item of items) {
      if (item.type === 'section' && item.title?.includes('Curiosit')) {
        return item
      }
      if (item.items && Array.isArray(item.items)) {
        const found = findSection(item.items)
        if (found) return found
      }
    }
    return null
  }
  const section = findSection(city.content)

  // Filter by category if selected
  const curiosities = activeCategory
    ? allCuriosities.filter((c: any) => c.category === activeCategory)
    : allCuriosities

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="curiosities"
      />

      <main className="flex-1 bg-white">
        {/* Hero Header with Banner - Exactly Viewport Height */}
        <div className="relative h-[100dvh] flex flex-col">
          <img
            src={city.slug === 'minneapolis'
              ? "/Minneapolis Curiosities/banner.png"
              : city.slug === 'raleigh'
              ? "/Raleigh/Curiosities/raleigh-curiosities.png"
              : "/global-banners/curiosities.png"}
            alt={`Curiosities of ${city.name}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

          {/* Content centered in hero */}
          <div className="relative flex-1 container-page flex flex-col justify-center items-start py-20">
            <div className="max-w-5xl">
              {/* Title with Share Button */}
              <div className="flex items-start justify-between gap-6 mb-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                  {section?.title ? `${section.title} in ${city.name}` : `Curiosities of ${city.name}`}
                </h1>
                <div className="flex-shrink-0 mt-2">
                  <ShareLinks title={`Curiosities of ${city.name} | Curious City`} variant="banner" />
                </div>
              </div>

              {/* Teaser/Hook */}
              {section?.teaser && (
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium leading-relaxed mb-6">
                  {section.teaser}
                </p>
              )}

              {/* Intro in opacity cell */}
              <div className="bg-black/40 backdrop-blur-sm rounded-lg px-6 py-4 max-w-3xl">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  {section?.intro || `Fascinating facts, forgotten history, and the strange stories that make ${city.name} unique.`}
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

        {/* Scrollytelling Content */}
        {curiosities.length > 0 ? (
          <CuriositiesScroll curiosities={curiosities} cityName={city.name} />
        ) : (
          <div className="container-page py-20">
            <div className="text-center">
              <p className="text-neutral-500 mb-2">No curiosities yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">Check back soon!</p>
            </div>
          </div>
        )}

        {/* End of content section */}
        <div className="container-page py-12 space-y-8">
          <RelatedContent
            citySlug={city.slug}
            cityName={city.name}
            contentType="curiosities"
          />
          <NewsletterSignup currentCity={city.slug} />
        </div>
      </main>

      <Footer />
    </>
  )
}
