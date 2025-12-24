import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { getEssaysForCity } from '@/data/essays'
import { Header, CityNav, EssayRenderer, ShareLinks, Footer, RelatedCities, Divider } from '@/components'

const cityBanners: Record<string, string> = {
  minneapolis: '/Minneapolis-banner.png',
  dallas: '/Dallas-banner.png',
  raleigh: '/Raleigh-banner.png',
}

interface CityPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `${city.name} | Curious City`,
    description: city.tagline || `Local content from ${city.name}`,
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  // Get essays for this city
  const essays = getEssaysForCity(slug)
  const featuredEssay = essays[0] // Show the first/main essay
  const bannerSrc = cityBanners[city.slug]

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} currentSection="essay" />

      {bannerSrc && (
        <div className="container-page pt-8">
          <div className="overflow-hidden rounded-2xl shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45)]">
            <Image
              src={bannerSrc}
              alt={`${city.name} banner`}
              width={1536}
              height={512}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      )}

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Featured Essay */}
          {featuredEssay ? (
            <article className="prose prose-neutral max-w-none">
              <header className="not-prose mb-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-2">
                      {featuredEssay.title}
                    </h1>
                    {featuredEssay.subtitle && (
                      <p className="text-lg text-neutral-600 italic">
                        {featuredEssay.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <ShareLinks title={`${featuredEssay.title} - ${city.name} | Curious City`} variant="compact" />
                  </div>
                </div>
              </header>

              <EssayRenderer blocks={featuredEssay.blocks} />
            </article>
          ) : (
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-2">
                {city.name}
              </h1>
              {city.tagline && (
                <p className="text-lg text-neutral-600">{city.tagline}</p>
              )}
              <div className="text-center py-12">
                <p className="text-neutral-500 mb-4">No essay yet for {city.name}.</p>
                <p className="text-sm text-neutral-400">
                  Check out the other sections to explore this city.
                </p>
              </div>
            </div>
          )}

          {/* More Essays */}
          {essays.length > 1 && (
            <>
              <Divider variant="ornament" />
              <section>
                <h3 className="eyebrow text-neutral-500 mb-5">
                  More Essays
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {essays.slice(1).map((essay) => (
                    <Link
                      key={essay.slug}
                      href={`/${slug}/essay/${essay.slug}`}
                      className="group block p-5 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <h4 className="font-semibold text-neutral-900 group-hover:text-accent-700 transition-colors ui-sans">
                        {essay.title}
                      </h4>
                      {essay.subtitle && (
                        <p className="text-sm text-neutral-500 mt-2 line-clamp-2">
                          {essay.subtitle}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Related Cities */}
          <RelatedCities currentCitySlug={slug} />
        </div>
      </main>

      <Footer />
    </>
  )
}
