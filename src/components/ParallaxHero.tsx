'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ParallaxHeroProps {
  imageSrc: string
  title: string
  subtitle?: string
  height?: string
}

/**
 * Parallax hero component with scroll-based animations
 * - Background image parallaxes slower than scroll (0-50% transform)
 * - Title and subtitle fade out and move up as user scrolls
 * - Responsive text sizing and dark overlay
 */
export function ParallaxHero({
  imageSrc,
  title,
  subtitle,
  height = 'h-screen',
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Background image parallaxes slower (0-50% transform)
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Title fades out and moves up as user scrolls
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  // No parallax for reduced motion preference
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={`relative ${height} overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      {/* Parallax background image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Title and subtitle with fade/move animation */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="relative h-full flex items-center justify-center text-center px-4"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90">{subtitle}</p>
          )}
        </div>
      </motion.div>
    </div>
  )
}
