'use client'

import { useRef, useState, useEffect } from 'react'
import type { EventItem } from '@/types/content'
import { EventCard } from './EventCard'

interface DayEventRowProps {
  date: Date
  events: EventItem[]
  isToday?: boolean
  isTomorrow?: boolean
  onEventClick?: (event: EventItem) => void
}

export function DayEventRow({ date, events, isToday, isTomorrow, onEventClick }: DayEventRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false)

  // Check scroll state
  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 5)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true })
      window.addEventListener('resize', checkScroll)
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [events])

  // Auto-scroll hint when row comes into view (only once per row)
  useEffect(() => {
    const container = containerRef.current
    const scrollEl = scrollRef.current
    if (!container || !scrollEl || hasAutoScrolled) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // Only do auto-scroll if there's content to scroll
            const hasMoreContent = scrollEl.scrollWidth > scrollEl.clientWidth + 50
            if (hasMoreContent && scrollEl.scrollLeft === 0) {
              // Gentle scroll hint - scroll right a bit then back
              setTimeout(() => {
                scrollEl.scrollTo({ left: 80, behavior: 'smooth' })
                setTimeout(() => {
                  scrollEl.scrollTo({ left: 0, behavior: 'smooth' })
                  setHasAutoScrolled(true)
                }, 400)
              }, 200)
            } else {
              setHasAutoScrolled(true)
            }
          }
        })
      },
      { threshold: 0.5, rootMargin: '-50px 0px' }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [hasAutoScrolled])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = 272 // w-64 = 256px + gap
    const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  // Format date label
  const formatDateLabel = () => {
    if (isToday) return 'Today'
    if (isTomorrow) return 'Tomorrow'
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
  }

  const formatSubLabel = () => {
    if (isToday || isTomorrow) {
      return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
    }
    return null
  }

  if (events.length === 0) return null

  return (
    <section ref={containerRef} className="mb-8">
      {/* Date header */}
      <div className="flex items-center gap-3 mb-3 px-4">
        <h2 className="text-lg font-bold text-neutral-900">
          {formatDateLabel()}
        </h2>
        {formatSubLabel() && (
          <span className="text-sm text-neutral-500">{formatSubLabel()}</span>
        )}
        <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
          {events.length} event{events.length !== 1 ? 's' : ''}
        </span>
        {/* Scroll hint for many events */}
        {events.length > 3 && (
          <span className="text-xs text-neutral-400 hidden sm:inline">
            scroll for more
          </span>
        )}
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        {/* Left scroll button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Scrollable event row - natural horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-4 pb-4 pt-1"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
          }}
        >
          {events.map((event, index) => (
            <EventCard key={`${event.title}-${index}`} event={event} onClick={onEventClick} />
          ))}
        </div>

        {/* Right scroll button */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Right fade edge to indicate more content */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-neutral-50 via-neutral-50/80 to-transparent pointer-events-none" />
        )}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-neutral-50 via-neutral-50/80 to-transparent pointer-events-none" />
        )}
      </div>
    </section>
  )
}
