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
    title: `${city.name}'s Lost & Loved | Curious City`,
    description: `${city.name}'s beloved businesses and the spaces they left behind. Restaurants, bars, and institutions we still miss.`,
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

      <main className="flex-1 bg-white">
        {/* Article-style Header */}
        <div className="container-page pt-8 pb-12">
          <div className="max-w-3xl">
            {/* Category pill */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                Lost & Loved
              </span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">
                {city.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {section?.title || `${city.name}'s Lost & Loved`}
            </h1>

            {/* Teaser/Hook */}
            {section?.teaser && (
              <p className="text-xl md:text-2xl text-neutral-700 font-medium leading-relaxed mb-6">
                {section.teaser}
              </p>
            )}

            {/* Intro */}
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {section?.intro || "The beloved businesses that shaped this city and the spaces they left behind. The restaurants, bars, and institutions we still miss."}
            </p>

            {/* Share links */}
            <div className="flex items-center justify-between py-6 border-y border-neutral-200">
              <span className="text-sm text-neutral-500">{items.length} places</span>
              <ShareLinks title={`${city.name}'s Lost & Loved | Curious City`} />
            </div>
          </div>
        </div>

        {/* Premium Scroll Component */}
        <LostLovedScroll items={items} cityName={city.name} />
      </main>

      <Footer />
    </>
  )
}
