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
  article: 'bg-blue-500',
  curiosity: 'bg-purple-500',
  'dark-history': 'bg-red-500',
  'hidden-gem': 'bg-emerald-500',
  'lost-and-loved': 'bg-orange-500',
}

// City hero banner images for intro slide
const cityHeroBanners: Record<string, string> = {
  'anchorage': '/banners/hero-city-images/anchorage-skyline.png',
  'chicago': '/banners/hero-city-images/chicago-skyline.png',
  'colorado-springs': '/banners/hero-city-images/colorado-springs-skyline.png',
  'dallas': '/banners/hero-city-images/dallas-skyline.png',
  'denver': '/banners/hero-city-images/denver-skyline.png',
  'fargo': '/banners/hero-city-images/fargo-skyline.png',
  'minneapolis': '/banners/hero-city-images/minneapolis-skyline.png',
  'phoenix': '/banners/hero-city-images/phoenix-skyline.png',
  'portland': '/banners/hero-city-images/portland-skyline.png',
  'raleigh': '/banners/hero-city-images/raleigh-skyline.png',
  'seattle': '/banners/hero-city-images/seattle-skyline.png',
  'salt-lake-city': '/banners/hero-city-images/SLC-skyline.png',
  'tampa': '/banners/hero-city-images/tampa-skyline.png',
}

/**
 * City homepage hero section - Full-width carousel banner
 * - Intro slide (city name + tagline) rotates with featured entries
 * - Featured entries show as subsequent slides
 * - Auto-rotating with navigation dots
 */
export function CityHeroSection({
  city,
  featuredEntries,
  autoPlayInterval = 8000, // Slower timing
}: CityHeroSectionProps) {
  // Index 0 = intro slide, 1+ = featured entries
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Fallback to city banner if no featured entries
  const fallbackImage = city.heroVideo?.fallbackImage || city.heroImage?.src

  // Total slides = 1 (intro) + number of featured entries
  const totalSlides = 1 + featuredEntries.length
  const isIntroSlide = currentIndex === 0
  const currentEntry = !isIntroSlide ? featuredEntries[currentIndex - 1] : null

  // Auto-play logic
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPaused, totalSlides, autoPlayInterval])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }, [])

  // Get current background image
  const getCurrentImage = () => {
    if (isIntroSlide) {
      // Use city-specific hero banner for intro slide
      return cityHeroBanners[city.slug] || fallbackImage
    }
    return currentEntry?.image?.src || fallbackImage
  }

  return (
    <section className="relative w-full bg-neutral-900">
      {/* Banner Container - shorter/wider aspect on mobile for better skyline visibility */}
      <div className="relative h-[35vh] sm:h-[45vh] md:h-[50vh] min-h-[200px] max-h-[350px] sm:max-h-[500px] md:max-h-[600px] overflow-hidden">
        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {getCurrentImage() ? (
              <Image
                src={getCurrentImage()!}
                alt={isIntroSlide ? `${city.name} cityscape` : (currentEntry?.image?.alt || city.name)}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="100vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay - bottom only for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        {/* Content */}
        <div className="relative h-full container-page flex flex-col justify-end pb-8 sm:pb-10 md:pb-14">
          <AnimatePresence mode="wait">
            {isIntroSlide ? (
              /* Intro Slide - City name and tagline */
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4">
                  <span className="text-accent-400">Curious</span> {city.name}
                </h1>

                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-1 w-24 md:w-32 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full mb-6"
                  style={{ transformOrigin: 'left' }}
                />

                {city.tagline && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xl sm:text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed"
                  >
                    {city.tagline}
                  </motion.p>
                )}
              </motion.div>
            ) : currentEntry ? (
              /* Featured Entry Slide */
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
                  <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors max-w-3xl">
                    {currentEntry.title}
                  </h2>

                  {/* Teaser */}
                  <p className="text-base sm:text-base md:text-lg text-white/80 max-w-2xl line-clamp-2 mb-4">
                    {currentEntry.teaser}
                  </p>

                  {/* Read more CTA */}
                  <span className="inline-flex items-center text-base md:text-base font-semibold text-white group-hover:text-accent-300 transition-colors">
                    Read more
                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Navigation dots - extremely tiny on mobile */}
        {totalSlides > 1 && (
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-8 flex items-center gap-[3px] sm:gap-1 md:gap-1.5">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-2 h-[3px] sm:w-3 sm:h-1 md:w-5 md:h-1.5 bg-white'
                    : 'w-[3px] h-[3px] sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={index === 0 ? 'Go to intro' : `Go to slide ${index}`}
              />
            ))}
          </div>
        )}

        {/* Progress bar */}
        {!isPaused && totalSlides > 1 && (
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
