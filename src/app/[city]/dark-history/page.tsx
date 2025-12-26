import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityDarkHistory } from '@/data/cities'
import { Header, CityNav, ShareLinks } from '@/components'
import { DarkHistoryRenderer } from '@/components/content/DarkHistoryRenderer'

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

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
                Dark History of {city.name}
              </h1>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Dark History of ${city.name} | Curious City`} variant="compact" />
              </div>
            </div>
            <p className="text-lg text-neutral-600">
              Forgotten crimes, unsolved mysteries, and the darker chapters that shaped this city.
              The stories that don't make it into the brochures.
            </p>
          </div>

          {/* Dark History Items */}
          {items.length > 0 ? (
            <div className="divide-y divide-neutral-100">
              {items.map((item: any, index: number) => (
                <article key={item.id} className="py-8 first:pt-0">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-neutral-900 text-white text-sm font-medium rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <DarkHistoryRenderer item={item} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No dark history entries yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">
                This section will feature forgotten crimes, unsolved mysteries, and macabre historical events.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-neutral-200 mt-12">
        <div className="container-page py-6">
          <p className="text-xs text-neutral-400 text-center">
            Curious City
          </p>
        </div>
      </footer>
    </>
  )
}
