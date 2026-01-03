'use client'

/**
 * Animated Feed Component
 *
 * Renders a list of items with staggered fade-in animations.
 * Perfect for article feeds, content lists, and card grids.
 */

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import type { ReactNode } from 'react'

interface AnimatedFeedProps {
  items: ReactNode[]
  className?: string
  staggerDelay?: number // Custom stagger delay between items
}

export function AnimatedFeed({
  items,
  className = '',
  staggerDelay,
}: AnimatedFeedProps) {
  // Custom stagger variant if delay is specified
  const customStagger = staggerDelay
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: staggerDelay,
          },
        },
      }
    : undefined

  const containerVariant = customStagger || staggerContainer

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className={`space-y-6 ${className}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="transform-gpu" // GPU acceleration for smooth performance
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  )
}

/**
 * Animated Grid Component
 *
 * Similar to AnimatedFeed but for grid layouts
 */
export function AnimatedGrid({
  items,
  className = '',
  columns = 3,
}: {
  items: ReactNode[]
  className?: string
  columns?: number
}) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'md:grid-cols-3'

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={`grid ${gridCols} gap-6 ${className}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="transform-gpu"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  )
}
