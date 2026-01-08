'use client'

import { ReactNode, useEffect, forwardRef, useRef, useImperativeHandle, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { scaleIn } from '@/lib/animation-variants'

interface ScrollySectionProps {
  children: ReactNode
  index: number // -1 for intro, 0-N for spots
  onInView?: (index: number) => void
  className?: string
}

export const ScrollySection = forwardRef<HTMLElement, ScrollySectionProps>(
  ({ children, index, onInView, className = '' }, forwardedRef) => {
    const internalRef = useRef<HTMLElement>(null)
    // Check mobile only once on mount - no resize listener to prevent flashing
    const [isMobile, setIsMobile] = useState(true) // Default to mobile (no animation) for SSR
    const { ref: inViewRef, inView } = useInView({
      threshold: 0.5, // 50% visibility
      triggerOnce: false, // Re-trigger on scroll back up
    })

    // Check mobile only once on mount - no continuous resize listener
    useEffect(() => {
      // Only enable animations on larger screens at mount time
      // This prevents the flashing/shaking during window resize
      setIsMobile(window.innerWidth < 768)
    }, [])

    // Combine refs for intersection observer and parent
    const setRefs = (element: HTMLElement | null) => {
      inViewRef(element)
      if (internalRef) {
        (internalRef as any).current = element
      }
    }

    // Expose the ref to parent component
    useImperativeHandle(forwardedRef, () => internalRef.current as HTMLElement, [])

    useEffect(() => {
      if (inView && onInView) {
        onInView(index)
      }
    }, [inView, index, onInView])

    // For spot cards (index >= 0), position more to the right to show map on left
    // On mobile, center the cards so they're fully visible
    const isSpotCard = index >= 0
    const justifyClass = isSpotCard ? 'justify-center md:justify-end md:pr-16 lg:pr-24' : 'justify-center'

    // Disable animations on mobile to prevent blinking/shaking
    const animationProps = isMobile
      ? {}
      : {
          initial: "hidden" as const,
          animate: inView ? "visible" as const : "hidden" as const,
          variants: scaleIn,
        }

    return (
      <motion.section
        ref={setRefs}
        {...animationProps}
        className={`min-h-screen flex items-center ${justifyClass} px-4 py-20 contain-layout ${className}`}
      >
        {children}
      </motion.section>
    )
  }
)

ScrollySection.displayName = 'ScrollySection'
