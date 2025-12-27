'use client'

import { ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { scaleIn } from '@/lib/animation-variants'

interface ScrollySectionProps {
  children: ReactNode
  index: number // -1 for intro, 0-N for spots
  onInView?: (index: number) => void
  className?: string
}

export function ScrollySection({ children, index, onInView, className = '' }: ScrollySectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% visibility
    triggerOnce: false, // Re-trigger on scroll back up
  })

  useEffect(() => {
    if (inView && onInView) {
      onInView(index)
    }
  }, [inView, index, onInView])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={scaleIn}
      className={`min-h-screen flex items-center justify-center px-4 py-20 ${className}`}
    >
      {children}
    </motion.section>
  )
}
