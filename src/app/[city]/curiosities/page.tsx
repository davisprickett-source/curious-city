import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCity, getAllCitySlugs, getCityCuriosities } from '@/data/cities'
import { ShareLinks, Footer } from '@/components'
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

  // Get available categories from the data with counts
  const categoryCounts = allCuriosities.reduce((acc: Record<string, number>, c: any) => {
    if (c.category) {
      acc[c.category] = (acc[c.category] || 0) + 1
    }
    return acc
  }, {})

  const availableCategories = Object.keys(categoryCounts)

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
        curiosityCategory={activeCategory}
        availableCuriosityCategories={availableCategories}
        curiosityCategoryCounts={categoryCounts}
      />

      <main className="flex-1 bg-white">
        {/* Hero Header - Cities with special banners */}
        {(city.slug === 'minneapolis' || city.slug === 'raleigh') ? (
          <div className="relative h-[500px] md:h-[600px] border-b border-neutral-200">
            <img
              src={city.slug === 'minneapolis'
                ? "/Minneapolis Curiosities/banner.png"
                : "/Raleigh/Curiosities/raleigh-curiosities.png"}
              alt={`Curiosities of ${city.name}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
            <div className="relative container-page h-full flex flex-col justify-center items-start py-20">
              <div className="max-w-5xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                  Curiosities of {city.name}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl font-medium leading-relaxed">
                  Forgotten history, underground secrets, and the peculiar facts that make this city unlike anywhere else.
                </p>
              </div>
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <ShareLinks title={`Curiosities of ${city.name} | Curious City`} variant="banner" />
              </div>
            </div>
          </div>
        ) : (
          <div className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
            <div className="container-page py-12 md:py-16">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
                    Curiosities of {city.name}
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-600 max-w-3xl">
                    Forgotten history, underground secrets, and the peculiar facts that make this city unlike anywhere else.
                  </p>
                </div>
                <div className="hidden sm:block flex-shrink-0">
                  <ShareLinks title={`Curiosities of ${city.name} | Curious City`} variant="compact" />
                </div>
              </div>
            </div>
          </div>
        )}

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
      </main>

      <Footer />
    </>
  )
}
