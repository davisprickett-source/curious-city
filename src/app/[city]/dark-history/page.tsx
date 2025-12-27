import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityDarkHistory } from '@/data/cities'
import { Header, CityNav, ShareLinks } from '@/components'
import { DarkHistoryScroll } from '@/components/DarkHistoryScroll'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `Dark History of ${city.name} | Curious City`,
    description: `Forgotten crimes, unsolved mysteries, and the darker chapters of ${city.name}'s history.`,
  }
}

export default async function CityDarkHistoryPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  const items = getCityDarkHistory(slug)

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} currentSection="dark-history" />

      <main className="flex-1 bg-white">
        {/* Hero Header - darker theme */}
        <div className="border-b border-neutral-300 bg-gradient-to-b from-neutral-900 to-neutral-800">
          <div className="container-page py-12 md:py-16">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  Dark History of {city.name}
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 max-w-3xl">
                  Forgotten crimes, unsolved mysteries, and the darker chapters that shaped this city. The stories that don't make it into the brochures.
                </p>
              </div>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Dark History of ${city.name} | Curious City`} variant="compact" />
              </div>
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

      <footer className="border-t border-neutral-200 mt-20 bg-neutral-900">
        <div className="container-page py-6">
          <p className="text-xs text-neutral-400 text-center">
            Curious City
          </p>
        </div>
      </footer>
    </>
  )
}
