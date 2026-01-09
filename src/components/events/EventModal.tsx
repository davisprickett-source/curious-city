'use client'

import { useEffect, useCallback, useState } from 'react'
import type { EventItem } from '@/types/content'
import { EVENT_CATEGORIES } from '@/utils/eventCategoryUtils'
import { getEventDisplayDate, getEventDisplayTime } from '@/utils/eventStatus'

interface EventModalProps {
  event: EventItem | null
  isOpen: boolean
  onClose: () => void
}

// Category-specific placeholder images
const CATEGORY_PLACEHOLDERS: Record<string, string> = {
  concerts: '/placeholders/concerts.jpg',
  nightlife: '/placeholders/nightlife.jpg',
  'food-drink': '/placeholders/food-drink.jpg',
  art: '/placeholders/art.jpg',
  comedy: '/placeholders/comedy.jpg',
  sports: '/placeholders/sports.jpg',
  theater: '/placeholders/theater.jpg',
  markets: '/placeholders/markets.jpg',
  free: '/placeholders/free.jpg',
}

// Fallback colors for categories when images fail to load
const CATEGORY_COLORS: Record<string, string> = {
  concerts: 'from-purple-900 to-indigo-900',
  nightlife: 'from-violet-900 to-purple-900',
  'food-drink': 'from-amber-800 to-orange-900',
  art: 'from-pink-800 to-rose-900',
  comedy: 'from-yellow-700 to-amber-800',
  sports: 'from-green-800 to-emerald-900',
  theater: 'from-red-900 to-rose-900',
  markets: 'from-teal-800 to-cyan-900',
  free: 'from-blue-800 to-indigo-900',
}

// Icon for moreInfo types
function getActionIcon(type?: string) {
  switch (type) {
    case 'tickets':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      )
    case 'rsvp':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case 'directions':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    default:
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
  }
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
  // Handle escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  const [imageError, setImageError] = useState(false)

  // Reset image error when event changes
  useEffect(() => {
    setImageError(false)
  }, [event?.title])

  if (!isOpen || !event) return null

  const categoryMeta = EVENT_CATEGORIES[event.category]
  const displayDate = getEventDisplayDate(event)
  const displayTime = getEventDisplayTime(event)
  const imageSrc = event.image?.src || CATEGORY_PLACEHOLDERS[event.category] || CATEGORY_PLACEHOLDERS.concerts
  const colorGradient = CATEGORY_COLORS[event.category] || CATEGORY_COLORS.concerts

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal - slides up from bottom on mobile, centered on desktop */}
      <div className="fixed inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50 pointer-events-none">
        <div
          className="pointer-events-auto bg-white w-full sm:max-w-lg sm:rounded-xl rounded-t-xl max-h-[90vh] overflow-hidden shadow-2xl animate-slide-up sm:animate-scale-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
        >
          {/* Image header */}
          <div className="relative aspect-[16/9] bg-neutral-100">
            {imageError ? (
              <div className={`w-full h-full bg-gradient-to-br ${colorGradient} flex items-center justify-center`}>
                <span className="text-white/30 text-sm font-medium uppercase tracking-wider">
                  {categoryMeta?.shortLabel || event.category}
                </span>
              </div>
            ) : (
              <img
                src={imageSrc}
                alt={event.image?.alt || event.title}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Category badge */}
            <div className="absolute bottom-3 left-3">
              <span className="bg-white/95 backdrop-blur-sm text-neutral-700 text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wide">
                {categoryMeta?.shortLabel || event.category}
              </span>
            </div>

            {/* Featured badge */}
            {event.featured && (
              <div className="absolute bottom-3 right-3">
                <span className="bg-amber-500 text-white text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wide">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 overflow-y-auto max-h-[50vh]">
            {/* Date and time */}
            <p className="text-sm text-neutral-500 font-medium mb-1">
              {displayDate}
              {displayTime && <span className="ml-2">{displayTime}</span>}
            </p>

            {/* Title */}
            <h2 id="event-modal-title" className="text-xl font-semibold text-neutral-900 mb-2">
              {event.title}
            </h2>

            {/* Location */}
            {event.location && (
              <p className="text-sm text-neutral-600 mb-3 flex items-start gap-1.5">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </p>
            )}

            {/* Description */}
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              {event.description}
            </p>

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {event.tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="bg-neutral-100 text-neutral-600 text-xs px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className="space-y-2">
              {/* Primary CTA - external link */}
              {event.href && (
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-lg transition-colors"
                >
                  <span>View Event</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {/* Secondary actions from moreInfo */}
              {event.moreInfo && event.moreInfo.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {event.moreInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-sm font-medium rounded-lg transition-colors"
                    >
                      {getActionIcon(info.type)}
                      <span>{info.title}</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Share button */}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: event.title,
                      text: event.description,
                      url: event.href || window.location.href,
                    })
                  } else {
                    navigator.clipboard.writeText(event.href || window.location.href)
                  }
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-neutral-600 hover:text-neutral-900 font-medium rounded-lg transition-colors border border-neutral-200 hover:border-neutral-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </>
  )
}
