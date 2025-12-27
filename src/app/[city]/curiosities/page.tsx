import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityCuriosities } from '@/data/cities'
import { Header, CityNav, ShareLinks } from '@/components'
import { CuriositiesScroll } from '@/components/CuriositiesScroll'

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
    description: `Fascinating facts, forgotten history, and the strange stories that make ${city.name} unique.`,
  }
}

// Category badge color helper
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

      <main className="flex-1 bg-white">
        {/* Hero Header */}
        <div className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-page py-12 md:py-16">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
                  Curiosities of {city.name}
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 max-w-3xl">
                  Forgotten history, strange laws, underground secrets, and the peculiar facts that make this city unlike anywhere else.
                </p>
              </div>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Curiosities of ${city.name} | Curious City`} variant="compact" />
              </div>
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
      </main>

      <footer className="border-t border-neutral-200 mt-20">
        <div className="container-page py-6">
          <p className="text-xs text-neutral-400 text-center">
            Curious City
          </p>
        </div>
      </footer>
    </>
  )
}
