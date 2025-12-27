'use client'

import { ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ScrollBlurProps {
  children: ReactNode
  className?: string
  blurAmount?: number // Max blur in pixels
  scaleAmount?: number // Max scale (1.0 = none, 1.02 = 2% growth)
}

/**
 * Subtle blur and scale effect as elements scroll through viewport
 * Peaks at the center of the viewport (50% scroll progress)
 * Use sparingly for premium, artistic feel on decorative elements
 */
export function ScrollBlur({
  children,
  className = '',
  blurAmount = 4,
  scaleAmount = 1.02,
}: ScrollBlurProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Smooth spring for blur/scale transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Peak blur at middle of scroll (parabolic curve)
  const blur = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0, blurAmount, 0]
  )

  // Peak scale at middle of scroll
  const scale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [1, scaleAmount, 1]
  )

  const filter = useTransform(blur, (b) => `blur(${b}px)`)

  // No effect for reduced motion preference
  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ filter, scale }}
    >
      {children}
    </motion.div>
  )
}
