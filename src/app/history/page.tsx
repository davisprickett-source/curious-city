import Link from 'next/link'
import { Metadata } from 'next'
import { getAllHistory } from '@/data/history'
import { getCity } from '@/data/cities'
import { Header, Footer, ShareButton, NewsletterSignup } from '@/components'
import { BreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'History | Curious City',
  description: 'Long-form writing about American cities - their histories, contradictions, and what makes them tick.',
  alternates: {
    canonical: 'https://thecurious.city/history',
  },
}

export default async function HistoryPage() {
  const history = getAllHistory()

  // Sort by date, newest first
  const sortedHistory = history.sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
    return dateB - dateA
  })

  // Pre-load all city data for the articles
  const uniqueCitySlugs = Array.from(new Set(sortedHistory.map(a => a.citySlug)))
  const cities = await Promise.all(uniqueCitySlugs.map(slug => getCity(slug)))
  const cityMap = new Map(cities.filter(c => c !== null).map(c => [c!.slug, c!]))

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: 'History', url: 'https://thecurious.city/history' },
        ]}
      />
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              History
            </h1>
            <div className="mb-8">
              <ShareButton title="History | The Curious City" url="https://thecurious.city/history" />
            </div>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Long-form writing about American cities — their histories, contradictions,
              and what makes them tick.
            </p>
          </div>

          {/* History Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {sortedHistory.map((article) => {
              const city = cityMap.get(article.citySlug)
              const cityName = city?.name || article.citySlug

              // Get first paragraph as excerpt
              const firstParagraph = article.blocks.find(b => b.type === 'paragraph')
              const excerpt = firstParagraph && 'content' in firstParagraph
                ? firstParagraph.content.slice(0, 200) + '...'
                : article.subtitle

              return (
                <Link
                  key={`${article.citySlug}-${article.slug}`}
                  href={`/${article.citySlug}/articles/${article.slug}`}
                  className="group block p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-400 hover:shadow-sm transition-all"
                >
                  {/* City tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                      {cityName}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors mb-2">
                    {article.title}
                  </h2>

                  {/* Subtitle */}
                  {article.subtitle && (
                    <p className="text-neutral-600 mb-3 italic">
                      {article.subtitle}
                    </p>
                  )}

                  {/* Excerpt */}
                  <p className="text-sm text-neutral-500 line-clamp-3">
                    {excerpt}
                  </p>

                  {/* Read more */}
                  <div className="mt-4 text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    Read article →
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
              </main>
      
            {/* End of History Page Flow - Share, Subscribe, Feedback */}
            <div className="container-page py-12 space-y-8">
              {/* Share Component */}
              <ShareButton title="History | The Curious City" url="https://thecurious.city/history" />
      
              {/* Subscribe */}
              <NewsletterSignup />
      
              {/* Feedback Component (mailto link) */}
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Give Feedback</h3>
                <p className="text-neutral-700">
                  Found an error or have a suggestion? {' '}
                  <Link
                    href={`mailto:hello@thecurious.city?subject=Feedback on History Page`}
                    className="text-accent-600 hover:text-accent-700 font-semibold"
                  >
                    Send us feedback
                  </Link>
                  .
                </p>
              </div>
            </div>
      
            <Footer />    </>
  )
}
