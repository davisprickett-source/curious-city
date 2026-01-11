'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ListiclePage } from '@/lib/content/cityHomepage'

interface ListicleTypeCardProps {
  listicle: ListiclePage
  index?: number
}

// Color and icon mappings for each listicle type
const typeConfig: Record<string, {
  gradient: string
  fallbackGradient: string
  icon: JSX.Element
}> = {
  'dark-history': {
    gradient: 'from-neutral-900/90 via-neutral-900/50 to-neutral-900/30',
    fallbackGradient: 'from-red-900 to-red-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
  },
  curiosities: {
    gradient: 'from-neutral-900/90 via-neutral-900/50 to-neutral-900/30',
    fallbackGradient: 'from-purple-700 to-indigo-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  'hidden-gems': {
    gradient: 'from-neutral-900/90 via-neutral-900/50 to-neutral-900/30',
    fallbackGradient: 'from-emerald-700 to-teal-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  'lost-loved': {
    gradient: 'from-neutral-900/90 via-neutral-900/50 to-neutral-900/30',
    fallbackGradient: 'from-amber-700 to-orange-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
}

/**
 * Card representing an entire listicle type (e.g., "Dark History", "Curiosities")
 * - Large card with gradient over image
 * - Icon + title + full teaser description
 * - No entry count badge
 */
export function ListicleTypeCard({ listicle, index = 0 }: ListicleTypeCardProps) {
  const config = typeConfig[listicle.type] || typeConfig.curiosities

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
        href={listicle.href}
        className="block group h-full"
      >
        <div className="relative h-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          {/* Background Image or Gradient */}
          <div className="absolute inset-0">
            {listicle.thumbnail ? (
              <>
                <Image
                  src={listicle.thumbnail}
                  alt={listicle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="400px"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${config.gradient}`} />
              </>
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${config.fallbackGradient}`} />
            )}
          </div>

          {/* Content */}
          <div className="relative p-5 md:p-6 flex flex-col justify-end min-h-[260px] md:min-h-[280px] xl:min-h-[300px]">
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {listicle.title}
            </h3>

            {/* Full teaser */}
            <p className="text-sm md:text-base text-white/85 leading-relaxed line-clamp-3">
              {listicle.teaser}
            </p>

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
