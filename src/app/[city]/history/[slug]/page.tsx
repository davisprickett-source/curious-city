import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getCity } from '@/data/cities'
import { getHistory, getAllHistory } from '@/data/history'
import { Header, HistoryRenderer, CityNav } from '@/components'

const cityBanners: Record<string, string> = {
  minneapolis: '/Minneapolis-banner.png',
  dallas: '/Dallas-banner.png',
  raleigh: '/Raleigh-banner.png',
  denver: '/Denver Banner.png',
  phoenix: '/Phoenix Banner.png',
  portland: '/Portland Banner.png',
  tampa: '/Tampa Banner.png',
  'salt-lake-city': '/Salt Lake City Banner.png',
}

interface HistoryPageProps {
  params: Promise<{ city: string; slug: string }>
}

export async function generateStaticParams() {
  const history = getAllHistory()
  return history.map((article) => ({
    city: article.citySlug,
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: HistoryPageProps): Promise<Metadata> {
  const { city: citySlug, slug } = await params
  const article = getHistory(citySlug, slug)
  const city = getCity(citySlug)

  if (!article || !city) {
    return { title: 'History Article Not Found' }
  }

  return {
    title: `${article.title} | ${city.name} | Curious City`,
    description: article.subtitle || `A historical piece about ${city.name}`,
  }
}

export default async function HistoryPage({ params }: HistoryPageProps) {
  const { city: citySlug, slug } = await params
  const article = getHistory(citySlug, slug)
  const city = getCity(citySlug)

  if (!article || !city) {
    notFound()
  }

  const bannerSrc = cityBanners[city.slug]

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} />

      {bannerSrc && (
        <div className="max-w-4xl lg:max-w-5xl mx-auto px-6 md:px-8 pt-8">
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
        <article className="max-w-4xl lg:max-w-5xl mx-auto px-6 md:px-8 py-12">
          {/* History article header */}
          <header className="mb-10">
            <Link
              href={`/${city.slug}`}
              className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-700 transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {city.name}
            </Link>

            <h1 className="text-3xl font-semibold text-neutral-900 leading-tight">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="mt-3 text-lg text-neutral-600 leading-relaxed">
                {article.subtitle}
              </p>
            )}

          </header>

          {/* History article content */}
          <HistoryRenderer blocks={article.blocks} />

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-neutral-200">
            <Link
              href={`/${city.slug}`}
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              More from {city.name}
            </Link>
          </footer>
        </article>
      </main>

      <footer className="border-t border-neutral-200 mt-8">
        <div className="max-w-4xl lg:max-w-5xl mx-auto px-6 md:px-8 py-6">
          <p className="text-xs text-neutral-400 text-center">
            Curious City · {city.name}
          </p>
        </div>
      </footer>
    </>
  )
}
