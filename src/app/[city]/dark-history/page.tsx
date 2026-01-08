import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCity, getAllCitySlugs, getCityDarkHistory, getCityDarkHistorySection } from '@/data/cities'
import { ShareLinks, Footer, NewsletterSignup, RelatedContent } from '@/components'
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
        {/* Hero Header with Banner - Exactly Viewport Height */}
        <div className="relative h-[100dvh] flex flex-col">
          <img
            src="/global-banners/dark-history.png"
            alt={`Dark History of ${city.name}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

          {/* Content centered in hero */}
          <div className="relative flex-1 container-page flex flex-col justify-center items-start py-20">
            <div className="max-w-5xl">
              {/* Title with Share Button */}
              <div className="flex items-start justify-between gap-6 mb-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                  {section?.title ? `${section.title} in ${city.name}` : `Dark History of ${city.name}`}
                </h1>
                <div className="flex-shrink-0 mt-2">
                  <ShareLinks title={`Dark History of ${city.name} | Curious City`} variant="banner" />
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
                  {section?.intro || "Forgotten crimes, unsolved mysteries, and the darker chapters that shaped this city."}
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

        {/* End of Article Flow */}
        <div className="container-page py-12 space-y-8">
          <RelatedContent citySlug={city.slug} cityName={city.name} contentType="dark-history" />
          <NewsletterSignup currentCity={city.slug} />
        </div>
      </main>

      <Footer />
    </>
  )
}
