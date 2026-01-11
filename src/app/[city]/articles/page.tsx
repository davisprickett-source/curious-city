import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { getArticlesForCity } from '@/lib/queries/articles'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { PremiumArticleCard } from '@/components/PremiumArticleCard'

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

  return {
    title: `Articles about ${city.name} | Curious City`,
    description: `Longform stories, deep dives, and essays exploring ${city.name}'s history, culture, and hidden stories.`,
  }
}

export default async function ArticlesPage({ params }: ArticlesPageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const articles = await getArticlesForCity(slug, { limit: 50 })

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="articles"
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
                Longform stories and essays exploring {city.name}'s history, culture, and untold stories.
              </p>
            </div>
          </div>
        </div>

        {/* Articles Feed */}
        {articles.length > 0 ? (
          <div className="container-page py-10 md:py-14">
            <div className="max-w-5xl mx-auto space-y-10">
              {articles.map((article, index) => (
                <PremiumArticleCard
                  key={article.slug}
                  article={article}
                  citySlug={slug}
                  index={index}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="container-page py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Articles Coming Soon
              </h2>
              <p className="text-lg text-neutral-600">
                We're working on bringing you the best stories and essays about {city.name}.
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
