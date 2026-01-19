import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { getArticlesForCity } from '@/lib/queries/articles'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { ArticleGridCard } from '@/components/ArticleGridCard'
import { DualSidebarAds } from '@/components/ads/desktop/SidebarAd'
import { NativeAdSection } from '@/components/ads/NativeAdCard'
import { BreadcrumbSchema } from '@/components/StructuredData'

interface ArticlesPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: ArticlesPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  const url = `https://thecurious.city/${slug}/articles`

  return {
    title: `Articles about ${city.name} | Curious City`,
    description: `Longform stories, deep dives, and essays exploring ${city.name}'s history, culture, and hidden stories.`,
    alternates: {
      canonical: url,
    },
  }
}

export default async function ArticlesPage({ params }: ArticlesPageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const articles = await getArticlesForCity(slug, { limit: 50 })
  const pageId = `${slug}-articles`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${slug}` },
          { name: 'Articles', url: `https://thecurious.city/${slug}/articles` },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="articles"
      />

      <div className="city-page-wrapper">
        {/* Desktop Sidebar Ads (visible on 1400px+ screens) */}
        <DualSidebarAds
          pageId={pageId}
          targeting={{ city: city.name, category: 'articles' }}
          stickyTop={80}
        />

        <main className="flex-1 bg-white">
          {/* Hero Header */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
            <div className="container-page py-12 md:py-16">
              <div className="max-w-4xl">
                <div className="eyebrow text-accent-400 mb-3">Deep Dives</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Articles
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
                  Longform stories and essays exploring {city.name}&apos;s history, culture, and untold stories.
                </p>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          {articles.length > 0 ? (
            <div className="container-page py-10 md:py-14">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => {
                  const showAdAfter = (index + 1) % 6 === 0 && index < articles.length - 1

                  return (
                    <>
                      <ArticleGridCard
                        key={article.slug}
                        article={article}
                        citySlug={slug}
                      />
                      {showAdAfter && (
                        <div className="md:col-span-2 lg:col-span-3">
                          <NativeAdSection
                            key={`ad-${index}`}
                            pageId={pageId}
                            index={Math.floor(index / 6)}
                            targeting={{ city: city.name, category: 'articles' }}
                          />
                        </div>
                      )}
                    </>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="container-page py-16">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Articles Coming Soon
                </h2>
                <p className="text-lg text-neutral-600">
                  We&apos;re working on bringing you the best stories and essays about {city.name}.
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
