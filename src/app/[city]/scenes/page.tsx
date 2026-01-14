import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityScenes } from '@/data/cities'
import { ShareLinks, Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
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
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `Scenes from ${city.name} | Curious City`,
    description: `Visual moments from ${city.name} - street photography, architecture, and glimpses of daily life.`,
  }
}

export default async function CityScenesPage({ params, searchParams }: PageProps) {
  const { city: slug } = await params
  const { category: activeCategory } = await searchParams
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const allScenes = await getCityScenes(slug)

  // Filter scenes by category if one is selected
  const scenes = activeCategory
    ? allScenes.filter((s: any) => s.category === activeCategory)
    : allScenes

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="scenes"
        sceneCategory={activeCategory}
      />

      <main className="flex-1 bg-white">
        {/* Article-style Header */}
        <div className="container-page pt-8 pb-12">
          <div className="max-w-3xl">
            {/* Category pill */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-full">
                Scenes
              </span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">
                {city.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Scenes from {city.name}
            </h1>

            {/* Intro */}
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Visual moments and glimpses of daily life. Street photography, architecture, and the character that makes {city.name} unique.
            </p>

            {/* Share links */}
            <div className="flex items-center justify-between py-6 border-y border-neutral-200">
              <span className="text-sm text-neutral-500">{scenes.length} scenes</span>
              <ShareLinks title={`Scenes from ${city.name} | Curious City`} />
            </div>
          </div>
        </div>

        <div className="container-page section-spacing">

          {/* Scenes List */}
          {scenes.length > 0 ? (
            <div className="space-y-8">
              {scenes.map((scene: any) => {
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

      <Footer />
    </>
  )
}
