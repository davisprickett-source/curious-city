import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityScenes } from '@/data/cities'
import { Header, CityNav, ShareLinks } from '@/components'
import { ScenesCategoryFilter } from '@/components/ScenesCategoryFilter'
import { SceneRenderer } from '@/components/content/SceneRenderer'

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
  const city = getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `Scenes from ${city.name} | Curious City`,
    description: `Visual moments from ${city.name} - street photography, architecture, and glimpses of daily life.`,
  }
}

const categoryLabels: Record<string, string> = {
  street: 'Street',
  architecture: 'Architecture',
  nature: 'Nature',
  food: 'Food & Drink',
  people: 'People',
  night: 'After Dark',
  seasons: 'Seasons',
  historic: 'Historic',
  interior: 'Interiors',
  cityscape: 'Cityscape',
  water: 'Waterfront',
  neighborhood: 'Neighborhoods',
  art: 'Art & Murals',
  urban: 'Urban',
  weather: 'Weather',
}


export default async function CityScenesPage({ params, searchParams }: PageProps) {
  const { city: slug } = await params
  const { category: activeCategory } = await searchParams
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  const allScenes = getCityScenes(slug)

  // Get unique categories from available scenes
  const availableCategories = Array.from(new Set(allScenes.map((s: any) => s.category).filter(Boolean)))

  // Filter scenes by category if one is selected
  const scenes = activeCategory
    ? allScenes.filter((s: any) => s.category === activeCategory)
    : allScenes

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} currentSection="scenes" />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
                Scenes from {city.name}
              </h1>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Scenes from ${city.name} | Curious City`} variant="compact" />
              </div>
            </div>
            <p className="text-lg text-neutral-600">
              Visual moments and glimpses of the city.
            </p>
          </div>

          {/* Category Filter */}
          {availableCategories.length > 1 && (
            <ScenesCategoryFilter
              categories={availableCategories}
              categoryLabels={categoryLabels}
              categoryIcons={{}}
              activeCategory={activeCategory}
              citySlug={slug}
            />
          )}

          {/* Scenes List */}
          {scenes.length > 0 ? (
            <div className="space-y-8">
              {scenes.map((scene: any) => {
                const isVideo = scene.media?.type === 'video'

                return (
                  <article
                    key={scene.id}
                    className="border-b border-neutral-200 pb-8 last:border-b-0"
                  >
                    <SceneRenderer item={scene} />
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No scenes captured yet for {city.name}.</p>
              <p className="text-sm text-neutral-400">Check back soon for visual moments from the city!</p>
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
