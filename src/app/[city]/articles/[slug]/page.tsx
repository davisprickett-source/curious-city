import { getArticle, getRelatedArticles } from '@/lib/queries/articles'
import { getCity } from '@/data/cities'
import { getHistory } from '@/data/history'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { ArticleRenderer } from '@/components/ArticleRenderer'
import { VideoHistoryScroll } from '@/components/VideoHistoryScroll'
import { ArticleCardCompact } from '@/components/ArticleCard'
import { ShareLinks } from '@/components/ShareLinks'
import { UniversalAd } from '@/components/ads/UniversalAd'
import { createAdSlot } from '@/lib/ads/slots'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

interface ArticlePageProps {
  params: Promise<{ city: string; slug: string }>
  searchParams: Promise<{ format?: string }>
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { city, slug } = await params
  const article = await getArticle(city, slug)
  if (!article) return {}

  return {
    title: `${article.title} - ${article.citySlug} - The Curious City`,
    description: article.seo.metaDescription || article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: article.seo.ogImage || article.featuredImage?.src
        ? [
            {
              url: article.seo.ogImage || article.featuredImage!.src,
              alt: article.featuredImage?.alt || article.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.seo.ogImage || article.featuredImage?.src || undefined,
    },
  }
}

export default async function ArticlePage({ params, searchParams }: ArticlePageProps) {
  const { city: citySlug, slug } = await params
  const { format } = await searchParams
  const article = await getArticle(citySlug, slug)
  if (!article) notFound()

  const city = await getCity(citySlug)
  if (!city) notFound()

  // Check if this is a premium video history essay
  // First check for -premium version, then fall back to base slug
  let historyEssay = getHistory(citySlug, `${slug}-premium`)
  if (!historyEssay) {
    historyEssay = getHistory(citySlug, slug)
  }
  const hasVideoSequences = historyEssay?.blocks.some(b => b.type === 'video-sequence') || false

  // If it's a video history essay and user didn't request text-only, render with VideoHistoryScroll
  if (hasVideoSequences && historyEssay && format !== 'text') {
    return <VideoHistoryScroll history={historyEssay} />
  }

  // Get related articles
  const relatedArticles = await getRelatedArticles(article, 3)

  const publishDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="articles"
      />

      <main className="flex-1">
        {/* Article Header */}
        <article className="section-spacing">
          {/* Video Version Banner - show if this article has video sequences */}
          {hasVideoSequences && (
            <div className="bg-gradient-to-r from-accent-50 to-accent-100 border-b border-accent-200">
              <div className="container-page py-6">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-accent-900 mb-1">
                        Enhanced Video Experience Available
                      </h3>
                      <p className="text-sm text-accent-700 mb-3">
                        This story includes an immersive scrollytelling experience with synchronized video sequences.
                      </p>
                      <Link
                        href={`/${citySlug}/articles/${slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent-600 text-white text-sm font-medium rounded-lg hover:bg-accent-700 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch the video version
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Featured Image */}
          {article.featuredImage && (
            <div className="relative w-full aspect-[21/9] bg-neutral-900 mb-12">
              <Image
                src={article.featuredImage.src}
                alt={article.featuredImage.alt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              {article.featuredImage.credit && (
                <div className="absolute bottom-4 right-4 text-xs text-white bg-black/50 px-2 py-1 rounded">
                  Photo: {article.featuredImage.credit}
                </div>
              )}
            </div>
          )}

          {/* Article Meta & Title */}
          <div className="container-page">
            <div className="max-w-3xl mx-auto">
              {/* Category, City & Date Pills */}
              <div className="flex items-center flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm font-medium rounded-full">
                  {article.category}
                </span>
                <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">
                  {city.name}
                </span>
                <time className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full" dateTime={article.publishedAt}>
                  {publishDate}
                </time>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Subtitle */}
              {article.subtitle && (
                <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                  {article.subtitle}
                </p>
              )}

              {/* Author */}
              <div className="flex items-center justify-between py-6 border-y border-neutral-200 mb-12">
                <div className="flex items-center gap-3">
                  {article.author.avatar && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-neutral-900">{article.author.name}</p>
                    {article.author.bio && (
                      <p className="text-sm text-neutral-600">{article.author.bio}</p>
                    )}
                  </div>
                </div>

                <ShareLinks
                  title={article.title}
                  url={`https://thecurious.city/${citySlug}/articles/${slug}`}
                />
              </div>

              {/* Header Ad */}
              <UniversalAd
                slot={createAdSlot(
                  `${citySlug}-article-${slug}-header`,
                  'leaderboard',
                  { city: citySlug, type: 'article', position: 'header' }
                )}
                className="mb-12"
              />

              {/* Article Content */}
              <ArticleRenderer
                blocks={article.formats.longform.blocks}
                citySlug={citySlug}
                articleSlug={slug}
              />

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-neutral-200">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Ad */}
              <UniversalAd
                slot={createAdSlot(
                  `${citySlug}-article-${slug}-footer`,
                  'banner',
                  { city: citySlug, type: 'article', position: 'footer' }
                )}
                className="mt-12"
              />
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-neutral-50 py-16">
            <div className="container-page">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                  Related Articles
                </h2>
                <div className="space-y-6">
                  {relatedArticles.map((related) => (
                    <ArticleCardCompact key={related.slug} article={related} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
