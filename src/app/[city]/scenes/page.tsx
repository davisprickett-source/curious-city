import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityScenes } from '@/data/cities'
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
    title: `Scenes from ${city.name} | Curious City`,
    description: `Visual moments from ${city.name} - street photography, architecture, and glimpses of daily life.`,
  }
}

const categoryLabels: Record<string, string> = {
  street: 'Street',
  architecture: 'Architecture',
  nature: 'Nature',
  food: 'Food',
  people: 'People',
  night: 'After Dark',
  seasons: 'Seasons',
  historic: 'Historic',
}

export default async function CityScenesPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  const scenes = getCityScenes(slug)

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

          {/* Scenes Grid */}
          {scenes.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {scenes.map((scene: any) => (
                <article
                  key={scene.id}
                  className="group relative bg-neutral-100 rounded-lg overflow-hidden"
                >
                  {scene.media.type === 'video' ? (
                    <div className="relative aspect-video">
                      <video
                        src={scene.media.src}
                        poster={scene.media.poster}
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                      />
                      {scene.media.duration && (
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                          {scene.media.duration}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`relative ${
                        scene.media.aspectRatio === '1:1'
                          ? 'aspect-square'
                          : scene.media.aspectRatio === '9:16'
                          ? 'aspect-[9/16]'
                          : scene.media.aspectRatio === '4:3'
                          ? 'aspect-[4/3]'
                          : 'aspect-video'
                      }`}
                    >
                      <img
                        src={scene.media.src}
                        alt={scene.media.alt || scene.title || 'Scene from the city'}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      {scene.category && (
                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                          {categoryLabels[scene.category] || scene.category}
                        </span>
                      )}
                      {scene.media.location && (
                        <span className="text-xs text-neutral-400">
                          {scene.media.location}
                        </span>
                      )}
                    </div>
                    {scene.title && (
                      <h3 className="font-semibold text-neutral-900 mb-1">{scene.title}</h3>
                    )}
                    {(scene.description || scene.media.caption) && (
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {scene.description || scene.media.caption}
                      </p>
                    )}
                    {scene.media.credit && (
                      <p className="text-xs text-neutral-400 mt-2">
                        Photo: {scene.media.credit}
                      </p>
                    )}
                  </div>
                </article>
              ))}
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
