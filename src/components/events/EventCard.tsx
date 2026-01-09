'use client'

import { useState } from 'react'
import type { EventItem } from '@/types/content'
import { EVENT_CATEGORIES } from '@/utils/eventCategoryUtils'
import { getEventDisplayTime } from '@/utils/eventStatus'

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

interface EventCardProps {
  event: EventItem
  onClick?: (event: EventItem) => void
}

export function EventCard({ event, onClick }: EventCardProps) {
  const categoryMeta = EVENT_CATEGORIES[event.category]
  const displayTime = getEventDisplayTime(event)
  const imageSrc = event.image?.src || CATEGORY_PLACEHOLDERS[event.category] || CATEGORY_PLACEHOLDERS.concerts
  const hasRealImage = !!event.image?.src
  const [imageError, setImageError] = useState(false)
  const colorGradient = CATEGORY_COLORS[event.category] || CATEGORY_COLORS.concerts

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      onClick={handleClick}
      className="w-64 flex-shrink-0 group text-left"
      type="button"
    >
      <div className="bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-neutral-400 transition-all duration-200 h-full">
        {/* Image */}
        <div className="aspect-[16/10] bg-neutral-100 overflow-hidden relative">
          {imageError ? (
            <div className={`w-full h-full bg-gradient-to-br ${colorGradient} flex items-center justify-center`}>
              <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                {categoryMeta?.shortLabel || event.category}
              </span>
            </div>
          ) : (
            <img
              src={imageSrc}
              alt={event.image?.alt || event.title}
              className={`w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ${
                !hasRealImage ? 'opacity-80' : ''
              }`}
              onError={() => setImageError(true)}
            />
          )}

          {/* Category tag - subtle top left */}
          <div className="absolute top-2 left-2">
            <span className="bg-white/90 backdrop-blur-sm text-neutral-600 text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wide">
              {categoryMeta?.shortLabel || event.category}
            </span>
          </div>

          {/* Featured indicator - now with accent color */}
          {event.featured && (
            <div className="absolute top-2 right-2">
              <span className="bg-amber-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wide">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col min-h-[88px]">
          {/* Time */}
          {displayTime && (
            <p className="text-[11px] text-neutral-400 mb-1 font-medium uppercase tracking-wide">
              {displayTime}
            </p>
          )}

          {/* Title */}
          <h3 className="font-medium text-neutral-900 text-sm leading-snug group-hover:text-neutral-600 transition-colors line-clamp-2 flex-1">
            {event.title}
          </h3>

          {/* Location */}
          {event.location && (
            <p className="text-xs text-neutral-400 mt-1.5 truncate">
              {event.location}
            </p>
          )}
        </div>
      </div>
    </button>
  )
}
