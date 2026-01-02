import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCity, getAllCitySlugs, getCityDarkHistory, getCityDarkHistorySection } from '@/data/cities'
import { ShareLinks, Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'

// Dynamically import heavy scroll component
const DarkHistoryScroll = dynamic(
  () => import('@/components/DarkHistoryScroll').then(mod => ({ default: mod.DarkHistoryScroll })),
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
    title: `Dark History of ${city.name} | Curious City`,
    description: `Forgotten crimes, unsolved mysteries, and the darker chapters of ${city.name}'s history.`,
  }
}

export default async function CityDarkHistoryPage({ params, searchParams }: PageProps) {
  const { city: slug } = await params
  const { category: activeCategory } = await searchParams
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const allItems = await getCityDarkHistory(slug)
  const section = await getCityDarkHistorySection(slug)

  // Get available categories from the data with counts
  const categoryCounts = allItems.reduce((acc: Record<string, number>, item: any) => {
    if (item.category) {
      acc[item.category] = (acc[item.category] || 0) + 1
    }
    return acc
  }, {})

  const availableCategories = Object.keys(categoryCounts)

  // Filter by category if selected
  const items = activeCategory
    ? allItems.filter((item: any) => item.category === activeCategory)
    : allItems

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="dark-history"
        darkHistoryCategory={activeCategory}
        availableDarkHistoryCategories={availableCategories}
        darkHistoryCategoryCounts={categoryCounts}
      />

      <main className="flex-1 bg-white">
        {/* Hero Header with Banner */}
        <div className="relative h-[500px] md:h-[600px] border-b border-neutral-300">
          <img
            src="/global-banners/dark-history.png"
            alt={`Dark History of ${city.name}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
          <div className="relative container-page h-full flex flex-col justify-center items-start py-20">
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Dark History of {city.name}
              </h1>
              {section?.intro ? (
                <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl font-medium leading-relaxed">
                  {section.intro}
                </p>
              ) : (
                <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl font-medium leading-relaxed">
                  Forgotten crimes, unsolved mysteries, and the darker chapters that shaped this city. The stories that don't make it into the brochures.
                </p>
              )}
            </div>
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <ShareLinks title={`Dark History of ${city.name} | Curious City`} variant="banner" />
            </div>
          </div>
        </div>

        {/* Scrollytelling Content */}
        {items.length > 0 ? (
          <DarkHistoryScroll items={items} cityName={city.name} />
        ) : (
          <div className="container-page py-20">
            <div className="text-center">
              <p className="text-neutral-500 mb-2">No dark history entries yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">
                This section will feature forgotten crimes, unsolved mysteries, and macabre historical events.
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
