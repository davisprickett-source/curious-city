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

      <main className="flex-1">
        {/* Hero Header with Banner - Exactly Viewport Height */}
        <div className="relative h-[100dvh] flex flex-col">
          <img
            src="/global-banners/scenes.png"
            alt={`Scenes from ${city.name}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

          {/* Content centered in hero */}
          <div className="relative flex-1 container-page flex flex-col justify-center items-start py-20">
            <div className="max-w-5xl">
              {/* Title with Share Button */}
              <div className="flex items-start justify-between gap-6 mb-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                  Scenes from {city.name}
                </h1>
                <div className="flex-shrink-0 mt-2">
                  <ShareLinks title={`Scenes from ${city.name} | Curious City`} variant="banner" />
                </div>
              </div>

              {/* Intro in opacity cell */}
              <div className="bg-black/40 backdrop-blur-sm rounded-lg px-6 py-4 max-w-3xl">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Visual moments and glimpses of daily life. Street photography, architecture, and the character that makes {city.name} unique.
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

        <div className="container-page section-spacing">

          {/* Scenes List */}
          {scenes.length > 0 ? (
            <div className="space-y-8">
              {scenes.map((scene: any) => {
                // @ts-ignore - Variable for future use
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

      <Footer />
    </>
  )
}
