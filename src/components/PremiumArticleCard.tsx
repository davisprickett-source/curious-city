'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Article, ArticleMetadata } from '@/types/article'

interface PremiumArticleCardProps {
  article: Article | ArticleMetadata
  citySlug?: string
  index: number
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

export function PremiumArticleCard({ article, citySlug, index }: PremiumArticleCardProps) {
  const city = citySlug || article.citySlug
  const href = `/${city}/articles/${article.slug}`

  // Alternating layout direction
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1], // Elastic easing
      }}
    >
      <Link href={href} className="group block">
        <article className="relative bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent-300 transition-all duration-500">
          <div
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 md:gap-8`}
          >
            {/* Featured Image */}
            {article.featuredImage && (
              <div className="relative aspect-[16/9] md:aspect-square md:w-1/2 bg-neutral-100 overflow-hidden">
                <Image
                  src={article.featuredImage.src}
                  alt={article.featuredImage.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              {/* Category & Date */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider ${
                    categoryColors[article.category]
                  }`}
                >
                  {categoryLabels[article.category]}
                </span>
                <span className="text-sm text-neutral-500">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight group-hover:text-accent-600 transition-colors duration-300">
                {article.title}
              </h2>

              {/* Excerpt */}
              <p className="text-lg text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Meta & CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-neutral-700">
                    {article.author.name}
                  </span>
                  {article.tags && article.tags.length > 0 && (
                    <div className="hidden sm:flex gap-2">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-neutral-400 bg-neutral-100 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Read Arrow */}
                <div className="inline-flex items-center text-accent-600 font-semibold gap-2 group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm uppercase tracking-wider">Read</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5-5 5M6 12h12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}
