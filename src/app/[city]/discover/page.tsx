import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { getCityListiclePages } from '@/lib/content/cityHomepage'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { SubsectionCard } from '@/components/SubsectionCard'
import { BreadcrumbSchema } from '@/components/StructuredData'

interface DiscoverPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: DiscoverPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  const url = `https://thecurious.city/${slug}/discover`

  return {
    title: `${city.name} Curiosities, Dark History & Hidden Gems | Curious City`,
    description: `Explore the weird, wonderful, and dark side of ${city.name}. A curated collection of local legends, secrets, and untold stories.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${city.name} Curiosities & Dark History | Curious City`,
      description: `Explore the weird, wonderful, and dark side of ${city.name}.`,
      url,
      images: [`/banners/hero-city-images/${city.slug}-skyline.png`],
    }
  }
}

// Type-based styling for cards
const typeStyles: Record<string, { gradient: string; fallback: string }> = {
  'dark-history': {
    gradient: 'from-red-900/90 via-red-900/60 to-red-900/30',
    fallback: 'from-red-800 to-red-950',
  },
  curiosities: {
    gradient: 'from-purple-900/90 via-purple-900/60 to-purple-900/30',
    fallback: 'from-purple-700 to-indigo-800',
  },
  'hidden-gems': {
    gradient: 'from-emerald-900/90 via-emerald-900/60 to-emerald-900/30',
    fallback: 'from-emerald-700 to-teal-800',
  },
  'lost-loved': {
    gradient: 'from-amber-900/90 via-amber-900/60 to-amber-900/30',
    fallback: 'from-orange-700 to-amber-800',
  },
}

export default async function DiscoverPage({ params }: DiscoverPageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const listiclePages = await getCityListiclePages(slug)

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${slug}` },
          { name: 'Discover', url: `https://thecurious.city/${slug}/discover` },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="discover"
      />

      <div className="city-page-wrapper">
        <main className="flex-1 bg-white">
          {/* Hero Header */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
            <div className="container-page py-12 md:py-16">
              <div className="max-w-4xl">
                <div className="eyebrow text-accent-400 mb-3">Explore</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Discover {city.name}
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
                  Curated collections of curiosities, dark history, hidden gems, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Listicle Collections Grid */}
          {listiclePages.length > 0 ? (
            <div className="container-page py-10 md:py-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {listiclePages.map((page) => {
                  const style = typeStyles[page.type] || typeStyles.curiosities
                  return (
                    <SubsectionCard
                      key={page.type}
                      title={page.title}
                      teaser={page.teaser}
                      href={page.href}
                      thumbnail={page.thumbnail ? { src: page.thumbnail, alt: page.title } : undefined}
                      gradient={style.gradient}
                      fallbackGradient={style.fallback}
                    />
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="container-page py-16">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Collections Coming Soon
                </h2>
                <p className="text-lg text-neutral-600">
                  We&apos;re working on curating collections of curiosities, dark history, and hidden gems for {city.name}.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </>
  )
}
