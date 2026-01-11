'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CityScrollCardProps {
  city: {
    slug: string
    name: string
    tagline?: string
  }
  index?: number
}

// City-based gradient colors - each city gets a unique color
const cityGradients: Record<string, string> = {
  'minneapolis': 'from-blue-700 to-blue-950',
  'raleigh': 'from-emerald-700 to-emerald-950',
  'chicago': 'from-red-700 to-red-950',
  'salt-lake-city': 'from-sky-600 to-sky-900',
  'colorado-springs': 'from-amber-700 to-amber-950',
  'dallas': 'from-orange-700 to-orange-950',
  'anchorage': 'from-cyan-700 to-cyan-950',
  'fargo': 'from-indigo-700 to-indigo-950',
  'denver': 'from-purple-700 to-purple-950',
  'tampa': 'from-teal-600 to-teal-900',
  'phoenix': 'from-rose-700 to-rose-950',
  'portland': 'from-green-700 to-green-950',
  'seattle': 'from-slate-600 to-slate-900',
}

const defaultGradient = 'from-neutral-700 to-neutral-900'

/**
 * City card for horizontal scroll sections
 * - Gradient background unique to each city
 * - City name and tagline
 */
export function CityScrollCard({ city, index = 0 }: CityScrollCardProps) {
  const gradient = cityGradients[city.slug] || defaultGradient

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
        href={`/${city.slug}`}
        className="block group h-full"
      >
        <div className="relative h-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

          {/* Content */}
          <div className="relative p-5 md:p-6 flex flex-col justify-end min-h-[260px] md:min-h-[280px] xl:min-h-[300px]">
            {/* City Name */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {city.name}
            </h3>

            {/* Tagline */}
            {city.tagline && (
              <p className="text-sm md:text-base text-white/80 leading-relaxed line-clamp-2">
                {city.tagline}
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
