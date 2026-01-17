'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ParallaxHeroProps {
  src: string
  alt: string
  className?: string
  children?: ReactNode // For overlay content (titles, gradient overlays, etc.)
  parallaxStrength?: number // 0-1, default 0.5 (50% slower scroll)
}

// Helper function to get R2 URL for images
function getImageUrl(src: string): string {
  const cdnUrl = process.env.NEXT_PUBLIC_SEQUENCES_CDN || ''

  if (!cdnUrl) {
    return src // Fallback to local in development
  }

  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src // Already absolute URL
  }

  const cleanSrc = src.startsWith('/') ? src.slice(1) : src
  return `${cdnUrl}/${cleanSrc}`
}

/**
 * Hero image component with parallax scroll effect
 * Creates depth by moving the image slower than the page scroll
 * Preserves existing .hero-image styling and gradient overlays
 */
export function ParallaxHero({
  src,
  alt,
  className = '',
  children,
  parallaxStrength = 0.5,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // Parallax while hero is in viewport
  })

  // Image scrolls slower than page (creates depth)
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `${parallaxStrength * 50}%`]
  )

  // No parallax for reduced motion preference
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={`hero-image ${className}`}>
        <img src={getImageUrl(src)} alt={alt} className="w-full h-full object-cover" />
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={`hero-image ${className} overflow-hidden`}>
      <motion.div
        style={{ y }}
        className="w-full h-[120%] relative -top-[10%]" // Extra height for parallax room
      >
        <img
          src={getImageUrl(src)}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      {children}
    </div>
  )
}
