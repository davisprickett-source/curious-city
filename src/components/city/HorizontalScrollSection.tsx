'use client'

import { useRef, useEffect, useCallback, Children, cloneElement, isValidElement } from 'react'
import Link from 'next/link'

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
  const isResettingRef = useRef(false)

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
      const oneSetWidth = el.scrollWidth / 3
      el.scrollLeft = oneSetWidth
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
        el.scrollLeft = oneSetWidth
        checkScroll()
      })
    } else {
      checkScroll()
    }
  }, [children, enableInfinite, checkScroll])

  // Clone children with unique keys for infinite scroll
  const renderItems = () => {
    if (!enableInfinite) {
      return childArray
    }

    // Create 3 copies: [clone] [original] [clone]
    // This allows seamless looping in both directions
    const cloneItems = (items: React.ReactNode[], keyPrefix: string) => {
      return items.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            key: `${keyPrefix}-${index}`,
            index: index, // Reset animation index for clones
          } as Record<string, unknown>)
        }
        return child
      })
    }

    return [
      ...cloneItems(childArray, 'clone-start'),
      ...cloneItems(childArray, 'original'),
      ...cloneItems(childArray, 'clone-end'),
    ]
  }

  return (
    <section className={`py-10 md:py-16 ${className}`}>
      {/* Section Header */}
      <div className="container-page mb-6 md:mb-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            {eyebrow && (
              <div className="eyebrow mb-2 text-accent-600">
                {eyebrow}
              </div>
            )}
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-neutral-900">
              {title}
            </h2>
            {description && (
              <p className="mt-2 text-base md:text-lg xl:text-xl text-neutral-600 max-w-2xl">
                {description}
              </p>
            )}
          </div>
          {viewAllLink && (
            <Link
              href={viewAllLink.href}
              className="ui-sans text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors whitespace-nowrap flex items-center gap-1 group"
            >
              {viewAllLink.text}
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
          )}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="relative">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-5 overflow-x-auto scrollbar-hide px-6 md:px-8 xl:px-12"
          style={{
            scrollSnapType: enableInfinite ? 'none' : 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {renderItems()}
        </div>
      </div>
    </section>
  )
}
