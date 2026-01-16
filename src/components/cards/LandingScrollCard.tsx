'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { PageCardData } from '@/lib/content/pages'

interface LandingScrollCardProps {
  data: PageCardData
  index?: number
}

// Page type gradient colors
const typeGradients: Record<string, { overlay: string; fallback: string }> = {
  'dark-history': {
    overlay: 'from-black/90 via-black/60 to-black/30',
    fallback: 'from-neutral-900 to-black',
  },
  'curiosities': {
    overlay: 'from-amber-900/90 via-amber-900/60 to-amber-900/30',
    fallback: 'from-amber-700 to-amber-950',
  },
  'hidden-gems': {
    overlay: 'from-emerald-900/90 via-emerald-900/60 to-emerald-900/30',
    fallback: 'from-emerald-700 to-emerald-950',
  },
  'lost-loved': {
    overlay: 'from-orange-900/90 via-orange-900/60 to-orange-900/30',
    fallback: 'from-orange-700 to-orange-950',
  },
  'history': {
    overlay: 'from-indigo-900/90 via-indigo-900/60 to-indigo-900/30',
    fallback: 'from-indigo-700 to-indigo-950',
  },
  'article': {
    overlay: 'from-blue-900/90 via-blue-900/60 to-blue-900/30',
    fallback: 'from-blue-700 to-blue-950',
  },
}

const defaultGradient = {
  overlay: 'from-neutral-900/90 via-neutral-900/60 to-neutral-900/30',
  fallback: 'from-neutral-700 to-neutral-900',
}

// Type labels for display (note: these are no longer displayed on cards)
const typeLabels: Record<string, string> = {
  'dark-history': 'Dark History',
  'curiosities': 'Curiosity',
  'hidden-gems': 'Hidden Gem',
  'lost-loved': 'Lost & Loved',
  'history': 'History Essay',
  'article': 'Article',
}

/**
 * Landing page scroll card for horizontal sections
 * - Image background with gradient overlay
 * - City name, type badge, title, and teaser
 */
export function LandingScrollCard({ data, index = 0 }: LandingScrollCardProps) {
  const gradient = typeGradients[data.pageType] || defaultGradient
  const typeLabel = typeLabels[data.pageType] || data.pageType

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
        href={data.href}
        className="block group h-full"
      >
        <div className="relative h-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          {/* Background Image or Gradient Fallback */}
          <div className="absolute inset-0">
            {data.thumbnail ? (
              <>
                <Image
                  src={data.thumbnail}
                  alt={data.title}
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
          <div className="relative p-5 md:p-6 flex flex-col justify-end min-h-[280px] md:min-h-[300px] xl:min-h-[320px]">
            {/* City name */}
            <div className="mb-3">
              <span className="text-base md:text-lg font-bold text-white uppercase tracking-wide">
                {data.cityName}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-accent-300 transition-colors">
              {data.title}
            </h3>

            {/* Teaser */}
            {data.teaser && (
              <p className="text-sm md:text-base text-white/80 leading-relaxed line-clamp-2">
                {data.teaser}
              </p>
            )}

            {/* Read more */}
            <div className="mt-4 flex items-center text-white/70 group-hover:text-white transition-colors">
              <span className="text-sm md:text-base font-medium">Read more</span>
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
