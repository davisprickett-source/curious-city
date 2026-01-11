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
    title: `${city.name}'s Curiosities | Curious City`,
    description: `${city.name}'s fascinating facts, forgotten history, and strange stories.`,
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
        {/* Article-style Header */}
        <div className="container-page pt-8 pb-12">
          <div className="max-w-3xl">
            {/* Category pill */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                Curiosities
              </span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">
                {city.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {section?.title || `${city.name}'s Curiosities`}
            </h1>

            {/* Teaser/Hook */}
            {section?.teaser && (
              <p className="text-xl md:text-2xl text-neutral-700 font-medium leading-relaxed mb-6">
                {section.teaser}
              </p>
            )}

            {/* Intro */}
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {section?.intro || `Fascinating facts, forgotten history, and the strange stories that make ${city.name} unique.`}
            </p>

            {/* Share links */}
            <div className="flex items-center justify-between py-6 border-y border-neutral-200">
              <span className="text-sm text-neutral-500">{curiosities.length} curiosities</span>
              <ShareLinks title={`${city.name}'s Curiosities | Curious City`} />
            </div>
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
          <NewsletterSignup />
        </div>
      </main>

      <Footer />
    </>
  )
}
