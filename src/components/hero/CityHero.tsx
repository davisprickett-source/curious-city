'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export interface CityHeroProps {
  cityName: string
  tagline: string
  image?: {
    src: string
    alt: string
    credit?: string
  }
  variant?: 'minimal' | 'standard' | 'immersive'
  overlay?: boolean
}

/**
 * City Hero Component
 *
 * Premium hero section for city pages with parallax and variants.
 *
 * Variants:
 * - minimal: Text-only with subtle background gradient
 * - standard: Image with text overlay (default)
 * - immersive: Full-screen image with parallax scroll effect
 */
export function CityHero({
  cityName,
  tagline,
  image,
  variant = 'standard',
  overlay = true,
}: CityHeroProps) {
  if (variant === 'minimal') {
    return <MinimalHero cityName={cityName} tagline={tagline} />
  }

  if (variant === 'immersive') {
    return <ImmersiveHero cityName={cityName} tagline={tagline} image={image} />
  }

  return <StandardHero cityName={cityName} tagline={tagline} image={image} overlay={overlay} />
}

/**
 * Minimal Hero - Text-only with gradient background
 */
function MinimalHero({ cityName, tagline }: { cityName: string; tagline: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-neutral-50 via-white to-accent-50 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4"
        >
          {cityName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto"
        >
          {tagline}
        </motion.p>
      </div>
    </motion.div>
  )
}

/**
 * Standard Hero - Image with text overlay
 */
function StandardHero({
  cityName,
  tagline,
  image,
  overlay,
}: {
  cityName: string
  tagline: string
  image?: { src: string; alt: string; credit?: string }
  overlay: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[50vh] md:h-[60vh] bg-neutral-900 overflow-hidden"
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            {cityName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto drop-shadow-lg"
          >
            {tagline}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Immersive Hero - Full-screen with parallax
 */
function ImmersiveHero({
  cityName,
  tagline,
  image,
}: {
  cityName: string
  tagline: string
  image?: { src: string; alt: string; credit?: string }
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background Image */}
      {image && (
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>
      )}

      {/* Content with fade on scroll */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl"
          >
            {cityName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light"
          >
            {tagline}
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
