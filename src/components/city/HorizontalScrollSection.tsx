'use client'

import { useRef, useEffect, useCallback, Children, cloneElement, isValidElement, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

interface HorizontalScrollSectionProps {
  title: string
  eyebrow?: string
  description?: string
  viewAllLink?: {
    href: string
    text: string
  }
  children: React.ReactNode
  className?: string
}

// Premium reveal animation variants for text
const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const eyebrowVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

/**
 * Infinite horizontal scroll section
 * - Section header with title and optional "View All" link
 * - Infinite loop scrolling (wraps around seamlessly)
 * - Edge fade indicators
 * - Scroll snap for card alignment
 */
export function HorizontalScrollSection({
  title,
  eyebrow,
  description,
  viewAllLink,
  children,
  className = '',
}: HorizontalScrollSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const isResettingRef = useRef(false)
  const [isReady, setIsReady] = useState(false)

  // Intersection observers for scroll animations
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })
  const cardsInView = useInView(cardsRef, { once: true, margin: '-100px' })

  // Convert children to array for duplication
  const childArray = Children.toArray(children)
  const itemCount = childArray.length

  // Only enable infinite scroll if we have enough items
  const enableInfinite = itemCount >= 3

  // Check scroll position for infinite loop
  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el || isResettingRef.current) return

    if (!enableInfinite) return

    const { scrollLeft, scrollWidth } = el

    // Calculate the width of one set of items (approximate)
    const oneSetWidth = scrollWidth / 3 // We have 3 copies

    // If scrolled past the second set, jump back to first set
    if (scrollLeft >= oneSetWidth * 2 - 50) {
      isResettingRef.current = true
      el.scrollLeft = scrollLeft - oneSetWidth
      requestAnimationFrame(() => {
        isResettingRef.current = false
      })
    }
    // If scrolled before the first set, jump to second set
    else if (scrollLeft <= 50) {
      isResettingRef.current = true
      el.scrollLeft = scrollLeft + oneSetWidth
      requestAnimationFrame(() => {
        isResettingRef.current = false
      })
    }
  }, [enableInfinite])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    // Start in the middle set for infinite scroll
    if (enableInfinite) {
      // Use double RAF to ensure layout is complete before positioning
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const oneSetWidth = el.scrollWidth / 3
          // Add small offset to hide any gap/sliver from previous set
          // Use smaller offset on mobile to prevent cutting off first card
          const offset = window.innerWidth < 768 ? 5 : 20
          el.scrollLeft = oneSetWidth + offset
          // Small delay to ensure scroll position is applied before showing
          setTimeout(() => {
            setIsReady(true)
          }, 50)
        })
      })
    } else {
      setIsReady(true)
    }

    checkScroll()
    el.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)

    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll, enableInfinite])

  // Re-check when children change
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    if (enableInfinite) {
      // Reset to middle position when children change
      requestAnimationFrame(() => {
        const oneSetWidth = el.scrollWidth / 3
        // Add small offset to hide any gap/sliver from previous set
        // Use smaller offset on mobile to prevent cutting off first card
        const offset = window.innerWidth < 768 ? 5 : 20
        el.scrollLeft = oneSetWidth + offset
        checkScroll()
      })
    } else {
      checkScroll()
    }
  }, [children, enableInfinite, checkScroll])

  // Clone children with unique keys for infinite scroll
  const renderItems = () => {
    // Pass inView state to children for staggered animations
    const addInViewProp = (items: React.ReactNode[], keyPrefix: string) => {
      return items.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            key: `${keyPrefix}-${index}`,
            index: index,
            inView: cardsInView,
          } as Record<string, unknown>)
        }
        return child
      })
    }

    if (!enableInfinite) {
      return addInViewProp(childArray, 'item')
    }

    // Create 3 copies: [clone] [original] [clone]
    // This allows seamless looping in both directions
    return [
      ...addInViewProp(childArray, 'clone-start'),
      ...addInViewProp(childArray, 'original'),
      ...addInViewProp(childArray, 'clone-end'),
    ]
  }

  return (
    <section className={`py-8 md:py-10 overflow-x-hidden ${className}`}>
      {/* Section Header with reveal animation */}
      <motion.div
        ref={headerRef}
        className="container-page mb-6 md:mb-8"
        variants={headerVariants}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
      >
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0 flex-1">
            {eyebrow && (
              <motion.div
                variants={eyebrowVariants}
                className="eyebrow mb-2 text-accent-600 text-sm md:text-base"
              >
                {eyebrow}
              </motion.div>
            )}
            <motion.h2
              variants={titleVariants}
              className="text-3xl md:text-4xl xl:text-5xl font-bold text-neutral-900"
            >
              {title}
            </motion.h2>
            {description && (
              <motion.p
                variants={descriptionVariants}
                className="mt-2 text-lg md:text-xl xl:text-2xl text-neutral-600 max-w-3xl"
              >
                {description}
              </motion.p>
            )}
          </div>
          {viewAllLink && (
            <motion.div variants={linkVariants}>
              <Link
                href={viewAllLink.href}
                className="ui-sans text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors flex-shrink-0 flex items-center gap-1 group"
              >
                <span className="hidden sm:inline">{viewAllLink.text}</span>
                <span className="sm:hidden">View All</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5-5 5M6 12h12"
                  />
                </svg>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scrollable Content */}
      <div ref={cardsRef} className={`relative ${isReady ? '' : 'overflow-hidden'}`}>
        {/* Scroll container - match container-page padding (px-6 md:px-8 xl:px-12) */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-5 overflow-x-auto scrollbar-hide px-6 md:px-8 xl:px-12"
          style={{
            scrollSnapType: enableInfinite ? 'none' : 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            opacity: isReady ? 1 : 0,
            visibility: isReady ? 'visible' : 'hidden',
            transition: 'opacity 150ms ease-out',
          }}
        >
          {renderItems()}
        </div>
      </div>
    </section>
  )
}
