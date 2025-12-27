'use client'

import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeInUp } from '@/lib/animation-variants'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface AnimatedSectionProps {
  children: ReactNode
  variants?: Variants
  className?: string
  threshold?: number
  triggerOnce?: boolean
  delay?: number
}

/**
 * Wrapper component that animates children when they enter the viewport
 * Respects user's reduced motion preference
 */
export function AnimatedSection({
  children,
  variants = fadeInUp,
  className = '',
  threshold = 0.15,
  triggerOnce = true,
  delay = 0,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  })

  // Skip animation if user prefers reduced motion
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
