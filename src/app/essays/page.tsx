import Link from 'next/link'
import { Metadata } from 'next'
import { getAllEssays } from '@/data/essays'
import { getCity } from '@/data/cities'
import { Header } from '@/components'

export const metadata: Metadata = {
  title: 'Essays | Curious City',
  description: 'Long-form writing about American cities - their histories, contradictions, and what makes them tick.',
}

export default function EssaysPage() {
  const essays = getAllEssays()

  // Sort by date, newest first
  const sortedEssays = essays.sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
    return dateB - dateA
  })

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Essays
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Long-form writing about American cities — their histories, contradictions,
              and what makes them tick.
            </p>
          </div>

          {/* Essays Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {sortedEssays.map((essay) => {
              const city = getCity(essay.citySlug)
              const cityName = city?.name || essay.citySlug

              // Get first paragraph as excerpt
              const firstParagraph = essay.blocks.find(b => b.type === 'paragraph')
              const excerpt = firstParagraph && 'content' in firstParagraph
                ? firstParagraph.content.slice(0, 200) + '...'
                : essay.subtitle

              return (
                <Link
                  key={`${essay.citySlug}-${essay.slug}`}
                  href={`/${essay.citySlug}/essay/${essay.slug}`}
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
                    {essay.title}
                  </h2>

                  {/* Subtitle */}
                  {essay.subtitle && (
                    <p className="text-neutral-600 mb-3 italic">
                      {essay.subtitle}
                    </p>
                  )}

                  {/* Excerpt */}
                  <p className="text-sm text-neutral-500 line-clamp-3">
                    {excerpt}
                  </p>

                  {/* Read more */}
                  <div className="mt-4 text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    Read essay →
                  </div>
                </Link>
              )
            })}
          </div>
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
