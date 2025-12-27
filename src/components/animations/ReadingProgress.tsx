'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ReadingProgressProps {
  color?: string
  height?: number
}

/**
 * Reading progress bar that shows scroll progress through the page
 * Displays as a thin bar at the top of the viewport
 * Perfect for history articles and long-form content
 */
export function ReadingProgress({
  color = '#c65d3b', // Terracotta accent from design system
  height = 3,
}: ReadingProgressProps) {
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll()

  // Smooth spring animation for butter-smooth progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Hide for reduced motion preference
  if (prefersReducedMotion) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        height: `${height}px`,
        backgroundColor: color,
        scaleX,
      }}
    />
  )
}
