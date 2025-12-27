'use client'

import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface FadeInUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

const fadeInUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Capsule-style easing
    },
  },
}

/**
 * FadeInUp animation component with Capsule-style easing
 * Animates children from opacity 0, y: 50px to opacity 1, y: 0 when entering viewport
 * Respects user's reduced motion preference
 */
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
}: FadeInUpProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
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
      variants={fadeInUpVariant}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
