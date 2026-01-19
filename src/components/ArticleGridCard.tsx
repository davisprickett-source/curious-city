import Link from 'next/link'
import Image from 'next/image'
import type { Article, ArticleMetadata } from '@/types/article'

interface ArticleGridCardProps {
  article: Article | ArticleMetadata
  citySlug?: string
}

export function ArticleGridCard({ article, citySlug }: ArticleGridCardProps) {
  const city = citySlug || article.citySlug
  const href = `/${city}/articles/${article.slug}`

  return (
    <Link href={href} className="group block">
      <div className="relative rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Featured Image */}
        {article.featuredImage && (
          <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
            <Image
              src={article.featuredImage.src}
              alt={article.featuredImage.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-6 bg-white border border-neutral-200 border-t-0 rounded-b-xl flex flex-col">
          {/* Title */}
          <h2 className="text-xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-accent-600 transition-colors duration-300 line-clamp-2">
            {article.title}
          </h2>

          {/* Excerpt/Teaser */}
          <p className="text-base text-neutral-600 leading-relaxed mb-4 line-clamp-3 flex-1">
            {article.excerpt}
          </p>

          {/* Read link */}
          <div className="flex items-center text-accent-600 group-hover:text-accent-700 transition-colors">
            <span className="text-sm font-bold uppercase tracking-wider">Read More</span>
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
