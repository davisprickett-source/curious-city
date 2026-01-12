import { Metadata } from 'next'
import { getAllArticles } from '@/lib/queries/articles'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { PremiumArticleCard } from '@/components/PremiumArticleCard'

export const metadata: Metadata = {
  title: 'Articles | Curious City',
  description: 'Longform stories, deep dives, and essays exploring the untold histories and hidden secrets of American cities.',
}

export default async function ArticlesPage() {
  const articles = await getAllArticles({ limit: 100, sortBy: 'publishedAt', sortOrder: 'desc' })

  return (
    <>
      <div className="city-page-wrapper">
        <UnifiedNav />

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
                  Longform stories and essays exploring the untold histories and hidden secrets of American cities.
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
                    key={`${article.citySlug}-${article.slug}`}
                    article={article}
                    citySlug={article.citySlug}
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
                  We're working on bringing you the best stories and essays from cities across America.
                </p>
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  )
}
