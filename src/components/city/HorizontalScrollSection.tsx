'use client'

import { useRef, useState, useEffect } from 'react'
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
 * Horizontal scroll section with native scroll behavior
 * - Section header with title and optional "View All" link
 * - Native horizontal scroll on all devices
 * - Edge fade indicators when content overflows
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
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  // Check scroll position for fade indicators
  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return

    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    checkScroll()
    el.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)

    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  // Re-check when children change
  useEffect(() => {
    checkScroll()
  }, [children])

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
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              {title}
            </h2>
            {description && (
              <p className="mt-2 text-base md:text-lg text-neutral-600 max-w-2xl">
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
        {/* Left fade indicator */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Right fade indicator */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            canScrollRight ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Scroll container - left padding matches container-page for alignment */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pl-6 pr-6 md:pl-8 md:pr-8 xl:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] xl:pr-12"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
