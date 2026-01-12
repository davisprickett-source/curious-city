'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { PageCardData } from '@/lib/content/pages'

interface CategoryCardProps {
  data: PageCardData
  index?: number
  priority?: boolean
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
}

const defaultGradient = {
  overlay: 'from-neutral-900/90 via-neutral-900/60 to-neutral-900/30',
  fallback: 'from-neutral-700 to-neutral-900',
}

/**
 * Category page card for grid layouts
 * - Image background with gradient overlay
 * - City name and teaser
 * - Designed for grid, not horizontal scroll
 */
export function CategoryCard({ data, index = 0, priority = false }: CategoryCardProps) {
  const gradient = typeGradients[data.pageType] || defaultGradient

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
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
                  alt={data.cityName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={priority}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${gradient.overlay}`} />
              </>
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient.fallback}`} />
            )}
          </div>

          {/* Content */}
          <div className="relative p-5 md:p-6 flex flex-col justify-end min-h-[240px] md:min-h-[280px]">
            {/* City name */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">
              {data.cityName}
            </h3>

            {/* Teaser */}
            {data.teaser && (
              <p className="text-sm md:text-base text-white/80 leading-relaxed line-clamp-2">
                {data.teaser}
              </p>
            )}

            {/* Explore link */}
            <div className="mt-4 flex items-center text-white/70 group-hover:text-white transition-colors">
              <span className="text-sm md:text-base font-medium">Explore</span>
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
