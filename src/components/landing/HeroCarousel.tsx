'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeroSlide } from './HeroSlide'
import type { PageCardData } from '@/lib/content/pages'

interface HeroCarouselProps {
  slides: PageCardData[]
  autoPlayInterval?: number
}

export function HeroCarousel({ slides, autoPlayInterval = 6000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [showBranding, setShowBranding] = useState(true)

  // Auto-play logic
  useEffect(() => {
    if (isPaused || slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPaused, slides.length, autoPlayInterval])

  // Hide branding after 6 seconds (longer for description to show)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBranding(false)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsPaused(true)

    // Resume auto-play after 8 seconds
    setTimeout(() => setIsPaused(false), 8000)
  }, [])

  const progress = ((currentIndex + 1) / slides.length) * 100

  return (
    <div className="relative w-full overflow-hidden">
      {/* Animated Branding Overlay - Shows on first load */}
      <AnimatePresence>
        {showBranding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pointer-events-none"
          >
            <div className="text-center">
              {/* "Curious City" title with staggered animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="inline-block"
                  >
                    Curious
                  </motion.span>
                  {' '}
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="inline-block text-accent-400"
                  >
                    City
                  </motion.span>
                </h1>
              </motion.div>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 h-1 w-32 mx-auto bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 rounded-full"
                style={{ transformOrigin: 'left' }}
              />

              {/* Site description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="mt-8 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed"
              >
                Discover the untold stories, dark histories, and hidden secrets of cities across America
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slides */}
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={slide.href}
            className={`${index === currentIndex ? 'block' : 'hidden'}`}
          >
            <HeroSlide
              data={slide}
              isFirst={index === 0}
              isActive={index === currentIndex}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots - Bottom Center (higher on mobile to avoid CTA overlap) */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-10">
          <div className="container-page">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {!isPaused && slides.length > 1 && (
        <motion.div
          className="absolute top-0 left-0 h-1 bg-accent-500 z-20"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  )
}
