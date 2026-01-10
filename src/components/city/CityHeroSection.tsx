'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { FeaturedEntry, FeaturedEntryType } from '@/lib/content/cityHomepage'
import type { CityData } from '@/types/content'

interface CityHeroSectionProps {
  city: CityData
  featuredEntries: FeaturedEntry[]
  autoPlayInterval?: number
}

// Type badge colors for the small indicator
const typeColors: Record<FeaturedEntryType, string> = {
  curiosity: 'bg-purple-500',
  'dark-history': 'bg-red-500',
  'hidden-gem': 'bg-emerald-500',
  'lost-and-loved': 'bg-orange-500',
}

/**
 * City homepage hero section - Full-width carousel banner
 * - Normal height (not full viewport)
 * - Featured entries ARE the hero banner (full-width images with content overlay)
 * - Auto-rotating with navigation dots
 */
export function CityHeroSection({
  city,
  featuredEntries,
  autoPlayInterval = 6000,
}: CityHeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Fallback to city banner if no featured entries
  const fallbackImage = city.heroVideo?.fallbackImage || city.heroImage?.src
  const hasEntries = featuredEntries.length > 0

  // Auto-play logic
  useEffect(() => {
    if (isPaused || !hasEntries || featuredEntries.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredEntries.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPaused, featuredEntries.length, autoPlayInterval, hasEntries])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 8000)
  }, [])

  const currentEntry = hasEntries ? featuredEntries[currentIndex] : null

  return (
    <section className="relative w-full bg-neutral-900">
      {/* Banner Container - Normal height */}
      <div className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        {/* Background Images */}
        <AnimatePresence mode="wait">
          {currentEntry?.image?.src ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={currentEntry.image.src}
                alt={currentEntry.image.alt}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="100vw"
              />
            </motion.div>
          ) : fallbackImage ? (
            <Image
              src={fallbackImage}
              alt={`${city.name} cityscape`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
          )}
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* Content */}
        <div className="relative h-full container-page flex flex-col justify-end pb-10 md:pb-14">
          {/* City name - always visible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              {city.name}
            </h1>
          </motion.div>

          {/* Featured entry content or city tagline */}
          <AnimatePresence mode="wait">
            {currentEntry ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Link href={currentEntry.href} className="group block">
                  {/* Type indicator dot */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${typeColors[currentEntry.type]}`} />
                    <span className="text-xs uppercase tracking-wider text-white/70">
                      {currentEntry.type.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors max-w-3xl">
                    {currentEntry.title}
                  </h2>

                  {/* Teaser */}
                  <p className="text-base md:text-lg text-white/80 max-w-2xl line-clamp-2">
                    {currentEntry.teaser}
                  </p>
                </Link>
              </motion.div>
            ) : city.tagline ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-white/80 max-w-2xl"
              >
                {city.tagline}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        {hasEntries && featuredEntries.length > 1 && (
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-8 flex items-center gap-2">
            {featuredEntries.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Progress bar */}
        {hasEntries && !isPaused && featuredEntries.length > 1 && (
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-accent-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: autoPlayInterval / 1000, ease: 'linear' }}
            key={currentIndex}
          />
        )}
      </div>
    </section>
  )
}
