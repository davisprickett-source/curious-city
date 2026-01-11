'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ArticleSummary } from '@/lib/content/cityHomepage'

interface ArticleScrollCardProps {
  article: ArticleSummary
  index?: number
}

/**
 * Article card for horizontal scroll sections
 * - Full-bleed image background like establishment cards
 * - Title and teaser with gradient overlay
 * - No badge pills
 */
export function ArticleScrollCard({ article, index = 0 }: ArticleScrollCardProps) {
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
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-neutral-900/30" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-700" />
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
