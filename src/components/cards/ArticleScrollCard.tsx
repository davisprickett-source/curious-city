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
 * - Larger card with prominent image
 * - Title and longer teaser
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
      className="flex-none w-[340px] md:w-[400px]"
      style={{ scrollSnapAlign: 'start' }}
    >
      <Link
        href={article.href}
        className="block group h-full"
      >
        <div className="relative bg-white rounded-xl border border-neutral-200 overflow-hidden h-full hover:border-accent-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
            {article.thumbnail ? (
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="400px"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-5xl font-bold text-white/20">
                  {article.title.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Title */}
            <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-accent-600 transition-colors">
              {article.title}
            </h3>

            {/* Teaser */}
            <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
              {article.teaser}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
