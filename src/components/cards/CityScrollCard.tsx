'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface CityScrollCardProps {
  city: {
    slug: string
    name: string
    tagline?: string
  }
  index?: number
}

// City-based gradient overlays - each city gets a unique color
const cityGradients: Record<string, { overlay: string; fallback: string }> = {
  'minneapolis': {
    overlay: 'from-blue-900/90 via-blue-900/60 to-blue-900/30',
    fallback: 'from-blue-700 to-blue-950',
  },
  'raleigh': {
    overlay: 'from-emerald-900/90 via-emerald-900/60 to-emerald-900/30',
    fallback: 'from-emerald-700 to-emerald-950',
  },
  'chicago': {
    overlay: 'from-red-900/90 via-red-900/60 to-red-900/30',
    fallback: 'from-red-700 to-red-950',
  },
  'salt-lake-city': {
    overlay: 'from-sky-900/90 via-sky-900/60 to-sky-900/30',
    fallback: 'from-sky-600 to-sky-900',
  },
  'colorado-springs': {
    overlay: 'from-amber-900/90 via-amber-900/60 to-amber-900/30',
    fallback: 'from-amber-700 to-amber-950',
  },
  'dallas': {
    overlay: 'from-orange-900/90 via-orange-900/60 to-orange-900/30',
    fallback: 'from-orange-700 to-orange-950',
  },
  'anchorage': {
    overlay: 'from-cyan-900/90 via-cyan-900/60 to-cyan-900/30',
    fallback: 'from-cyan-700 to-cyan-950',
  },
  'fargo': {
    overlay: 'from-indigo-900/90 via-indigo-900/60 to-indigo-900/30',
    fallback: 'from-indigo-700 to-indigo-950',
  },
  'denver': {
    overlay: 'from-purple-900/90 via-purple-900/60 to-purple-900/30',
    fallback: 'from-purple-700 to-purple-950',
  },
  'tampa': {
    overlay: 'from-teal-900/90 via-teal-900/60 to-teal-900/30',
    fallback: 'from-teal-600 to-teal-900',
  },
  'phoenix': {
    overlay: 'from-rose-900/90 via-rose-900/60 to-rose-900/30',
    fallback: 'from-rose-700 to-rose-950',
  },
  'portland': {
    overlay: 'from-green-900/90 via-green-900/60 to-green-900/30',
    fallback: 'from-green-700 to-green-950',
  },
  'seattle': {
    overlay: 'from-slate-900/90 via-slate-900/60 to-slate-900/30',
    fallback: 'from-slate-600 to-slate-900',
  },
}

const defaultGradient = {
  overlay: 'from-neutral-900/90 via-neutral-900/60 to-neutral-900/30',
  fallback: 'from-neutral-700 to-neutral-900',
}

// Map city slugs to their skyline image filenames
const citySkylineImages: Record<string, string> = {
  'minneapolis': '/banners/hero-city-images/minneapolis-skyline.png',
  'raleigh': '/banners/hero-city-images/raleigh-skyline.png',
  'chicago': '/banners/hero-city-images/chicago-skyline.png',
  'salt-lake-city': '/banners/hero-city-images/SLC-skyline.png',
  'colorado-springs': '/banners/hero-city-images/colorado-springs-skyline.png',
  'dallas': '/banners/hero-city-images/dallas-skyline.png',
  'anchorage': '/banners/hero-city-images/anchorage-skyline.png',
  'fargo': '/banners/hero-city-images/fargo-skyline.png',
  'denver': '/banners/hero-city-images/denver-skyline.png',
  'tampa': '/banners/hero-city-images/tampa-skyline.png',
  'phoenix': '/banners/hero-city-images/phoenix-skyline.png',
  'portland': '/banners/hero-city-images/portland-skyline.png',
  'seattle': '/banners/hero-city-images/seattle-skyline.png',
}

/**
 * City card for horizontal scroll sections
 * - Skyline image background with gradient overlay
 * - City name and tagline
 */
export function CityScrollCard({ city, index = 0 }: CityScrollCardProps) {
  const gradient = cityGradients[city.slug] || defaultGradient
  const skylineImage = citySkylineImages[city.slug]

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
          {/* Background Image or Gradient Fallback */}
          <div className="absolute inset-0">
            {skylineImage ? (
              <>
                <Image
                  src={skylineImage}
                  alt={`${city.name} skyline`}
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
