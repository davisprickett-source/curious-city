'use client'

import type { EventItem } from '@/types/content'
import { EVENT_CATEGORIES, getCategoryColorClass } from '@/utils/eventCategoryUtils'
import { getEventDisplayDate, getEventDisplayTime } from '@/utils/eventStatus'

interface EventCardProps {
  event: EventItem
  size?: 'default' | 'large'
}

export function EventCard({ event, size = 'default' }: EventCardProps) {
  const categoryMeta = EVENT_CATEGORIES[event.category]
  const displayDate = getEventDisplayDate(event)
  const displayTime = getEventDisplayTime(event)

  const cardWidth = size === 'large' ? 'w-64' : 'w-44'
  const imageHeight = size === 'large' ? 'h-40' : 'h-28'

  return (
    <a
      href={event.href || '#'}
      target={event.href ? '_blank' : undefined}
      rel={event.href ? 'noopener noreferrer' : undefined}
      className={`${cardWidth} flex-shrink-0 group cursor-pointer`}
    >
      <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-lg hover:border-neutral-200 transition-all duration-200 hover:-translate-y-1">
        {/* Category header strip */}
        <div className={`${getCategoryColorClass(event.category)} px-2 py-1 flex items-center gap-1.5`}>
          <span className="text-white text-sm">{categoryMeta?.icon}</span>
          <span className="text-white text-xs font-medium truncate">{categoryMeta?.label}</span>
        </div>

        {/* Event image */}
        <div className={`${imageHeight} bg-neutral-100 overflow-hidden`}>
          {event.image ? (
            <img
              src={event.image.src}
              alt={event.image.alt || event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className={`w-full h-full ${getCategoryColorClass(event.category)} opacity-20 flex items-center justify-center`}>
              <span className="text-4xl opacity-50">{categoryMeta?.icon}</span>
            </div>
          )}
        </div>

        {/* Featured badge */}
        {event.featured && (
          <div className="absolute top-8 right-2">
            <span className="bg-accent-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide shadow-sm">
              Featured
            </span>
          </div>
        )}

        {/* Event info */}
        <div className="p-3">
          {/* Date and time */}
          <div className="text-xs text-neutral-500 mb-1 truncate">
            {displayDate}
            {displayTime && <span className="text-neutral-400"> at {displayTime}</span>}
          </div>

          {/* Title */}
          <h3 className={`font-semibold text-neutral-900 group-hover:text-accent-700 transition-colors line-clamp-2 ${size === 'large' ? 'text-base' : 'text-sm'}`}>
            {event.title}
          </h3>

          {/* Location */}
          {event.location && (
            <p className="text-xs text-neutral-500 mt-1 truncate flex items-center gap-1">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate">{event.location}</span>
            </p>
          )}
        </div>
      </div>
    </a>
  )
}
