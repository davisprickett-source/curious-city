import { getArticlesForCity } from '@/lib/queries/articles'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { ArticleCard } from '@/components/ArticleCard'
import { AnimatedFeed } from '@/components/animations/AnimatedFeed'
import { UniversalAd, createAdSlot } from '@/components/ads/UniversalAd'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface ArticlesPageProps {
  params: Promise<{ city: string }>
  searchParams: Promise<{ category?: string; tag?: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: ArticlesPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)
  if (!city) return {}

  return {
    title: `Articles - ${city.name} - The Curious City`,
    description: `Read the latest articles, guides, and stories about ${city.name}. Local insights, hidden gems, and everything worth knowing.`,
  }
}

export default async function ArticlesPage({ params, searchParams }: ArticlesPageProps) {
  const { city: slug } = await params
  const { category, tag } = await searchParams
  const city = await getCity(slug)
  if (!city) notFound()

  // Get articles with optional filters
  const articles = await getArticlesForCity(slug, {
    category: category as any,
    tags: tag ? [tag] : undefined,
    limit: 50,
  })

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="articles"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-neutral-900 text-white">
          <div className="container-page py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Articles About {city.name}
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Guides, features, and local stories from {city.name}'s best writers.
              </p>
            </div>
          </div>
        </div>

        {/* Header Ad */}
        <div className="container-page my-8">
          <UniversalAd
            slot={createAdSlot(
              `${slug}-articles-header`,
              'leaderboard',
              { city: slug, type: 'feed', position: 'header' }
            )}
          />
        </div>

        {/* Articles Feed */}
        <div className="container-page section-spacing">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-neutral-600 text-lg mb-4">
                No articles yet for {city.name}.
              </p>
              <p className="text-neutral-500 text-sm">
                Check back soon for local guides, features, and stories!
              </p>
            </div>
          ) : (
            <AnimatedFeed
              items={articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            />
          )}
        </div>

        {/* Footer Ad */}
        {articles.length > 0 && (
          <div className="container-page my-8">
            <UniversalAd
              slot={createAdSlot(
                `${slug}-articles-footer`,
                'banner',
                { city: slug, type: 'feed', position: 'footer' }
              )}
            />
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
