'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { FeaturedEntry, FeaturedEntryType } from '@/lib/content/cityHomepage'

interface FeaturedEntryCarouselProps {
  entries: FeaturedEntry[]
  autoPlayInterval?: number
}

// Type badge colors
const typeBadges: Record<FeaturedEntryType, { bg: string; text: string; label: string }> = {
  article: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Article' },
  curiosity: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Curiosity' },
  'dark-history': { bg: 'bg-red-100', text: 'text-red-800', label: 'Dark History' },
  'hidden-gem': { bg: 'bg-emerald-100', text: 'text-emerald-800', label: 'Hidden Gem' },
  'lost-and-loved': { bg: 'bg-orange-100', text: 'text-orange-800', label: 'Lost & Loved' },
}

/**
 * Auto-play carousel showing curated individual entries from all listicle types
 * - Shows entry type badge, title, teaser, and image
 * - Links to entry within listicle page (deep link with anchor)
 * - Pauses on interaction, resumes after delay
 */
export function FeaturedEntryCarousel({
  entries,
  autoPlayInterval = 6000,
}: FeaturedEntryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-play logic
  useEffect(() => {
    if (isPaused || entries.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % entries.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPaused, entries.length, autoPlayInterval])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsPaused(true)
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsPaused(false), 8000)
  }, [])

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % entries.length)
  }, [currentIndex, entries.length, goToSlide])

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + entries.length) % entries.length)
  }, [currentIndex, entries.length, goToSlide])

  if (entries.length === 0) return null

  const currentEntry = entries[currentIndex]
  const badge = typeBadges[currentEntry.type]

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main content card */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={currentEntry.href}
              className="block group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto bg-neutral-100">
                  {currentEntry.image?.src ? (
                    <Image
                      src={currentEntry.image.src}
                      alt={currentEntry.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                      <span className="text-4xl font-bold text-neutral-400">
                        {currentEntry.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5 md:p-6">
                  {/* Type badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-2.5 py-1 text-xs font-medium ${badge.bg} ${badge.text} rounded-full`}>
                      {badge.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-accent-600 transition-colors">
                    {currentEntry.title}
                  </h3>

                  {/* Teaser */}
                  <p className="text-sm text-neutral-600 line-clamp-3 mb-4">
                    {currentEntry.teaser}
                  </p>

                  {/* Read more */}
                  <span className="inline-flex items-center text-sm font-medium text-accent-600 group-hover:text-accent-700 transition-colors">
                    Read more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {entries.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Previous entry"
            >
              <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Next entry"
            >
              <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Navigation dots */}
      {entries.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {entries.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to entry ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {!isPaused && entries.length > 1 && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-accent-500 rounded-b-2xl"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: autoPlayInterval / 1000, ease: 'linear' }}
          key={currentIndex}
        />
      )}
    </div>
  )
}
