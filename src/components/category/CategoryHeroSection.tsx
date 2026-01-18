'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { PageCardData } from '@/lib/content/pages'

type CategoryType = 'dark-history' | 'curiosities' | 'hidden-gems' | 'lost-loved'

interface CategoryHeroSectionProps {
  category: CategoryType
  title: string
  tagline: string
  slides: PageCardData[]
  autoPlayInterval?: number
}

// Category theme colors
const categoryThemes: Record<CategoryType, {
  accent: string
  badge: string
  gradient: string
}> = {
  'dark-history': {
    accent: 'text-red-400',
    badge: 'bg-red-500',
    gradient: 'from-red-900/30 via-transparent to-purple-900/10',
  },
  'curiosities': {
    accent: 'text-amber-400',
    badge: 'bg-amber-500',
    gradient: 'from-amber-900/30 via-transparent to-orange-900/10',
  },
  'hidden-gems': {
    accent: 'text-emerald-400',
    badge: 'bg-emerald-500',
    gradient: 'from-emerald-900/30 via-transparent to-teal-900/10',
  },
  'lost-loved': {
    accent: 'text-orange-400',
    badge: 'bg-orange-500',
    gradient: 'from-orange-900/30 via-transparent to-amber-900/10',
  },
}


/**
 * Category page hero section
 * - Intro slide with category branding rotates with featured content
 * - Matches landing/city hero section style
 */
export function CategoryHeroSection({
  category,
  title,
  tagline,
  slides,
  autoPlayInterval = 8000,
}: CategoryHeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const theme = categoryThemes[category]
  const totalSlides = 1 + slides.length
  const isIntroSlide = currentIndex === 0
  const currentSlide = !isIntroSlide ? slides[currentIndex - 1] : null

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
      // Use the first slide's thumbnail for intro background
      return slides[0]?.thumbnail
    }
    return currentSlide?.thumbnail
  }

  return (
    <section className="relative w-full bg-neutral-900">
      {/* Banner Container */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] max-h-[400px] sm:max-h-[500px] md:max-h-[600px] overflow-hidden">
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
                alt={isIntroSlide ? title : (currentSlide?.title || 'Featured content')}
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

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />

        {/* Content - positioned near top on mobile, bottom on desktop */}
        <div className="relative h-full container-page flex flex-col justify-start pt-10 sm:justify-end sm:pt-0 pb-8 sm:pb-10 md:pb-14">
          <AnimatePresence mode="wait">
            {isIntroSlide ? (
              /* Intro Slide - Category Branding */
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-4">
                  <span className={theme.accent}>{title}</span>
                </h1>

                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-1.5 w-28 md:w-36 ${theme.badge} rounded-full mb-6`}
                  style={{ transformOrigin: 'left' }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-3xl leading-relaxed"
                >
                  {tagline}
                </motion.p>
              </motion.div>
            ) : currentSlide ? (
              /* Featured Content Slide */
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Link href={currentSlide.href} className="group block">
                  {/* City indicator */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${theme.badge}`} />
                    <span className="text-xs uppercase tracking-wider text-white/70">
                      {currentSlide.cityName}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors max-w-4xl">
                    {currentSlide.title}
                  </h2>

                  {/* Teaser */}
                  {currentSlide.teaser && (
                    <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl line-clamp-2 mb-4">
                      {currentSlide.teaser}
                    </p>
                  )}

                  {/* Read more CTA */}
                  <span className="inline-flex items-center text-base md:text-lg font-semibold text-white group-hover:text-accent-300 transition-colors">
                    Explore
                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        {totalSlides > 1 && (
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-8 flex items-center gap-1 sm:gap-1.5 md:gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-4 h-1 sm:w-5 sm:h-1.5 md:w-6 md:h-2 bg-white'
                    : 'w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={index === 0 ? 'Go to intro' : `Go to slide ${index}`}
              />
            ))}
          </div>
        )}

        {/* Progress bar */}
        {!isPaused && totalSlides > 1 && (
          <motion.div
            className={`absolute bottom-0 left-0 h-1 ${theme.badge}`}
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
