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
        {/* Hero Header with Banner - Minneapolis only */}
        {city.slug === 'minneapolis' ? (
          <div className="relative h-[500px] md:h-[600px] border-b border-neutral-200">
            <img
              src="/Minneapolis/lost-and-loved/lovedlost-banner.png"
              alt="Lost & Loved in Minneapolis"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Vintage sepia overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-orange-900/30 to-amber-950/60" />
            <div className="relative container-page h-full flex flex-col justify-center items-start py-20">
              <div className="max-w-5xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                  {section?.title || `Lost & Loved in ${city.name}`}
                </h1>
                {section?.teaser && (
                  <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium leading-relaxed mb-4">
                    {section.teaser}
                  </p>
                )}
                {section?.intro ? (
                  <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed">
                    {section.intro}
                  </p>
                ) : (
                  <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed">
                    The beloved businesses that shaped this city and the spaces they left behind. The restaurants, bars, and institutions we still miss.
                  </p>
                )}
              </div>
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <ShareLinks title={`Lost & Loved in ${city.name} | Curious City`} variant="banner" />
              </div>
            </div>
          </div>
        ) : (
          <div className="border-b border-neutral-200 bg-gradient-to-b from-amber-50/40 via-white to-white">
            <div className="container-page py-12 md:py-16">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
                    {section?.title || `Lost & Loved in ${city.name}`}
                  </h1>
                  {section?.teaser && (
                    <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mb-2">
                      {section.teaser}
                    </p>
                  )}
                  {section?.intro ? (
                    <p className="text-base md:text-lg text-neutral-500 max-w-3xl">
                      {section.intro}
                    </p>
                  ) : (
                    <p className="text-lg md:text-xl text-neutral-600 max-w-3xl">
                      The beloved businesses that shaped this city and the spaces they left behind. The restaurants, bars, and institutions we still miss.
                    </p>
                  )}
                </div>
                <div className="hidden sm:block flex-shrink-0">
                  <ShareLinks title={`Lost & Loved in ${city.name} | Curious City`} variant="compact" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Premium Scroll Component */}
        <LostLovedScroll items={items} cityName={city.name} />
      </main>

      <Footer />
    </>
  )
}
