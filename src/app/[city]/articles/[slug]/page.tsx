import { getArticle } from '@/lib/queries/articles'
import { getCity } from '@/data/cities'
import { getHistory } from '@/data/history'
import { Footer, RelatedContent, NewsletterSignup, ShareLinks } from '@/components'
import { ArticleRenderer } from '@/components/ArticleRenderer'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { ShareButton } from '@/components/ShareButton'
import { VideoHistoryScroll } from '@/components/VideoHistoryScroll'
import { UniversalAd } from '@/components/ads/UniversalAd'
import { createAdSlot } from '@/lib/ads/slots'
import { ArticleSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { notFound } from 'next/navigation'
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

  const url = `https://thecurious.city/${city}/articles/${slug}`

  return {
    title: `${article.title} - ${article.citySlug} - The Curious City`,
    description: article.seo.metaDescription || article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
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

  const url = `https://thecurious.city/${citySlug}/articles/${slug}`

  return (
    <>
      <ArticleSchema
        headline={article.title}
        description={article.excerpt}
        author={article.author.name}
        datePublished={article.publishedAt}
        dateModified={article.updatedAt}
        image={article.featuredImage?.src}
        url={url}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${citySlug}` },
          { name: 'Articles', url: `https://thecurious.city/${citySlug}/articles` },
          { name: article.title, url },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="articles"
      />

      <div className="city-page-wrapper">
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

            {/* Hero Section - Dark Background */}
            <div className="bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
              <div className="container-page py-12 md:py-16">
                <div className="max-w-3xl mx-auto">
                  {/* Share Button at Top */}
                  <div className="mb-6">
                    <ShareButton title={article.title} url={url} />
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {article.title}
                  </h1>

                  {/* Subtitle/Hook in Italics */}
                  {article.subtitle && (
                    <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed">
                      {article.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="container-page">
              <div className="max-w-3xl mx-auto">
                {article.formats.longform.enabled && (
                  <ArticleRenderer
                    blocks={article.formats.longform.blocks}
                    citySlug={citySlug}
                    articleSlug={slug}
                  />
                )}
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

          {/* End of Article Flow */}
          <div className="container-page py-12 space-y-8">
            {/* 1. Share (bottom) */}
            <ShareLinks title={article.title} url={url} />

            {/* 2. Subscribe */}
            <NewsletterSignup />

            {/* 3. Explore More */}
            <RelatedContent citySlug={citySlug} contentType="articles" currentSlug={slug} />

            {/* 4. Feedback (placeholder) */}
            <div className="bg-neutral-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2 text-neutral-800">Your Feedback Matters!</h3>
              <p className="text-neutral-600 mb-4">Help us improve Curious City by sharing your thoughts on this page or any suggestions you have.</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 transition-colors shadow-sm"
              >
                Send Feedback
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
