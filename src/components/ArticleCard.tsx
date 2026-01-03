import Link from 'next/link'
import Image from 'next/image'
import type { Article, ArticleMetadata } from '@/types/article'

interface ArticleCardProps {
  article: Article | ArticleMetadata
  citySlug?: string // Optional override if not in article
}

const categoryColors = {
  guide: 'bg-blue-100 text-blue-800',
  feature: 'bg-purple-100 text-purple-800',
  news: 'bg-red-100 text-red-800',
  list: 'bg-green-100 text-green-800',
  interview: 'bg-yellow-100 text-yellow-800',
  history: 'bg-amber-100 text-amber-800',
  'event-coverage': 'bg-pink-100 text-pink-800',
  opinion: 'bg-indigo-100 text-indigo-800',
}

const categoryLabels = {
  guide: 'Guide',
  feature: 'Feature',
  news: 'News',
  list: 'List',
  interview: 'Interview',
  history: 'History',
  'event-coverage': 'Event Coverage',
  opinion: 'Opinion',
}

export function ArticleCard({ article, citySlug }: ArticleCardProps) {
  const city = citySlug || article.citySlug
  const href = `/${city}/articles/${article.slug}`

  return (
    <Link href={href} className="group block">
      <article className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Featured Image */}
        {article.featuredImage && (
          <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
            <Image
              src={article.featuredImage.src}
              alt={article.featuredImage.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                categoryColors[article.category]
              }`}
            >
              {categoryLabels[article.category]}
            </span>
            <span className="text-xs text-neutral-500">
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
            {article.title}
          </h2>

          {/* Excerpt */}
          <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>{article.author.name}</span>
            {article.tags && article.tags.length > 0 && (
              <div className="flex gap-1">
                {article.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-neutral-400">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}

/**
 * Compact version for sidebars and related articles
 */
export function ArticleCardCompact({ article, citySlug }: ArticleCardProps) {
  const city = citySlug || article.citySlug
  const href = `/${city}/articles/${article.slug}`

  return (
    <Link href={href} className="group block">
      <article className="flex gap-4">
        {/* Thumbnail */}
        {article.featuredImage && (
          <div className="relative w-24 h-24 flex-shrink-0 bg-neutral-100 rounded overflow-hidden">
            <Image
              src={article.featuredImage.src}
              alt={article.featuredImage.alt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-neutral-900 group-hover:text-accent-600 transition-colors line-clamp-2 mb-1">
            {article.title}
          </h3>
          <p className="text-xs text-neutral-500">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
      </article>
    </Link>
  )
}
