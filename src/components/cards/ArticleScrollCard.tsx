'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ArticleSummary } from '@/lib/content/cityHomepage'

interface ArticleScrollCardProps {
  article: ArticleSummary
  index?: number
}

// Source/category-based gradient colors for the overlay
const sourceGradients: Record<string, { overlay: string; fallback: string }> = {
  history: {
    overlay: 'from-amber-900/90 via-amber-900/60 to-amber-900/30',
    fallback: 'from-amber-800 to-amber-950',
  },
  guide: {
    overlay: 'from-blue-900/90 via-blue-900/60 to-blue-900/30',
    fallback: 'from-blue-700 to-blue-900',
  },
  feature: {
    overlay: 'from-purple-900/90 via-purple-900/60 to-purple-900/30',
    fallback: 'from-purple-700 to-purple-900',
  },
  news: {
    overlay: 'from-red-900/90 via-red-900/60 to-red-900/30',
    fallback: 'from-red-700 to-red-900',
  },
  list: {
    overlay: 'from-emerald-900/90 via-emerald-900/60 to-emerald-900/30',
    fallback: 'from-emerald-700 to-emerald-900',
  },
  interview: {
    overlay: 'from-yellow-900/90 via-yellow-900/60 to-yellow-900/30',
    fallback: 'from-yellow-700 to-yellow-900',
  },
  opinion: {
    overlay: 'from-indigo-900/90 via-indigo-900/60 to-indigo-900/30',
    fallback: 'from-indigo-700 to-indigo-900',
  },
  'event-coverage': {
    overlay: 'from-pink-900/90 via-pink-900/60 to-pink-900/30',
    fallback: 'from-pink-700 to-pink-900',
  },
}

// Default gradient for articles without a specific source
const defaultGradient = {
  overlay: 'from-neutral-900/90 via-neutral-900/60 to-neutral-900/30',
  fallback: 'from-neutral-700 to-neutral-900',
}

/**
 * Article card for horizontal scroll sections
 * - Full-bleed image background like establishment cards
 * - Title and teaser with gradient overlay
 * - Source-based color theming
 */
export function ArticleScrollCard({ article, index = 0 }: ArticleScrollCardProps) {
  const gradient = article.source ? (sourceGradients[article.source] || defaultGradient) : defaultGradient
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex-none shrink-0 w-[320px] md:w-[380px] xl:w-[420px]"
      style={{ scrollSnapAlign: 'start' }}
    >
      <Link
        href={article.href}
        className="block group h-full"
      >
        <div className="relative h-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          {/* Background Image or Gradient */}
          <div className="absolute inset-0">
            {article.thumbnail ? (
              <>
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="400px"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${gradient.overlay}`} />
              </>
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient.fallback}`} />
            )}
          </div>

          {/* Content */}
          <div className="relative p-5 md:p-6 flex flex-col justify-end min-h-[260px] md:min-h-[280px] xl:min-h-[300px]">
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 line-clamp-2">
              {article.title}
            </h3>

            {/* Teaser */}
            <p className="text-sm md:text-base text-white/85 leading-relaxed line-clamp-3">
              {article.teaser}
            </p>

            {/* Read link */}
            <div className="mt-4 flex items-center text-white/70 group-hover:text-white transition-colors">
              <span className="text-sm md:text-base font-medium">Read</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
