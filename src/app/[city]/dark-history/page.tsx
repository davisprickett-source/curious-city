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
      />

      <main className="flex-1 bg-white">
        {/* Article-style Header */}
        <div className="container-page pt-8 pb-12">
          <div className="max-w-3xl">
            {/* Category pill */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                Dark History
              </span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">
                {city.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {section?.title || `Dark History of ${city.name}`}
            </h1>

            {/* Teaser/Hook */}
            {section?.teaser && (
              <p className="text-xl md:text-2xl text-neutral-700 font-medium leading-relaxed mb-6">
                {section.teaser}
              </p>
            )}

            {/* Intro */}
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {section?.intro || "Forgotten crimes, unsolved mysteries, and the darker chapters that shaped this city."}
            </p>

            {/* Share links */}
            <div className="flex items-center justify-between py-6 border-y border-neutral-200">
              <span className="text-sm text-neutral-500">{items.length} stories</span>
              <ShareLinks title={`Dark History of ${city.name} | Curious City`} />
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

        {/* End of Article Flow */}
        <div className="container-page py-12 space-y-8">
          <RelatedContent citySlug={city.slug} cityName={city.name} contentType="dark-history" />
          <NewsletterSignup />
        </div>
      </main>

      <Footer />
    </>
  )
}
