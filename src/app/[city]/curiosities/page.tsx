import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityCuriosities } from '@/data/cities'
import { Header, CityNav, ShareLinks } from '@/components'

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
    title: `Curiosities of ${city.name} | Curious City`,
    description: `Interesting facts, quirky history, and things that make ${city.name} unique.`,
  }
}

export default async function CityCuriositiesPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  const curiosities = getCityCuriosities(slug)

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} currentSection="curiosities" />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
                Curiosities of {city.name}
              </h1>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Curiosities of ${city.name} | Curious City`} variant="compact" />
              </div>
            </div>
            <p className="text-lg text-neutral-600">
              Interesting facts, quirky history, and the little things that make this city unique.
            </p>
          </div>

          {/* Curiosities List */}
          {curiosities.length > 0 ? (
            <div className="space-y-1">
              {curiosities.map((item: any) => (
                <article key={item.id} className="py-5 border-b border-neutral-100 last:border-b-0">
                  <div className="flex gap-3">
                    {item.icon && (
                      <span className="text-xl flex-shrink-0" aria-hidden="true">
                        {item.icon}
                      </span>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-medium text-neutral-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-neutral-600 text-[15px] leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No curiosities yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">Check back soon!</p>
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
