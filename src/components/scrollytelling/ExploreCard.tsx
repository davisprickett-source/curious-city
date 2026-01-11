'use client'

import Link from 'next/link'
import Image from 'next/image'

export interface ExploreLink {
  type: 'bars' | 'restaurants' | 'coffee-shops' | 'curiosities' | 'dark-history' | 'hidden-gems' | 'lost-loved'
  title: string
  teaser: string
  thumbnail?: string
  href: string
}

interface ExploreCardProps {
  link: ExploreLink
}

// Type-based gradient colors for the overlay
const typeGradients: Record<string, { overlay: string; fallback: string }> = {
  bars: {
    overlay: 'from-indigo-900/90 via-indigo-900/60 to-indigo-900/30',
    fallback: 'from-indigo-700 to-indigo-900',
  },
  restaurants: {
    overlay: 'from-amber-900/90 via-amber-900/60 to-amber-900/30',
    fallback: 'from-amber-700 to-amber-900',
  },
  'coffee-shops': {
    overlay: 'from-stone-900/90 via-stone-900/60 to-stone-900/30',
    fallback: 'from-stone-700 to-stone-900',
  },
  curiosities: {
    overlay: 'from-purple-900/90 via-purple-900/60 to-purple-900/30',
    fallback: 'from-purple-700 to-indigo-800',
  },
  'dark-history': {
    overlay: 'from-red-900/90 via-red-900/60 to-red-900/30',
    fallback: 'from-red-800 to-red-950',
  },
  'hidden-gems': {
    overlay: 'from-emerald-900/90 via-emerald-900/60 to-emerald-900/30',
    fallback: 'from-emerald-700 to-teal-800',
  },
  'lost-loved': {
    overlay: 'from-orange-900/90 via-orange-900/60 to-orange-900/30',
    fallback: 'from-orange-700 to-amber-800',
  },
}

/**
 * Card for explore section at bottom of establishment pages
 * - Full-bleed image with gradient overlay
 * - Type-specific colors
 * - Hover animations
 */
export function ExploreCard({ link }: ExploreCardProps) {
  const gradient = typeGradients[link.type] || typeGradients.curiosities

  return (
    <Link
      href={link.href}
      className="block group"
    >
      <div className="relative rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
        {/* Background Image or Gradient */}
        <div className="absolute inset-0">
          {link.thumbnail ? (
            <>
              <Image
                src={link.thumbnail}
                alt={link.title}
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
        <div className="relative p-5 md:p-6 flex flex-col justify-end min-h-[180px] md:min-h-[200px]">
          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2">
            {link.title}
          </h3>

          {/* Teaser */}
          <p className="text-sm text-white/80 leading-relaxed line-clamp-2">
            {link.teaser}
          </p>

          {/* Explore link */}
          <div className="mt-3 flex items-center text-white/70 group-hover:text-white transition-colors">
            <span className="text-sm font-medium">Explore</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
