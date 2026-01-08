'use client'

import { useState } from 'react'
import type { EventItem, EventStatus } from '@/types/content'
import { getEventStatus, getEventDisplayDate, getEventDisplayTime } from '@/utils/eventStatus'

interface CompactEventRowProps {
  event: EventItem
}

const categoryColors: Record<string, string> = {
  event: 'bg-blue-500',
  opening: 'bg-green-500',
  closing: 'bg-red-500',
  seasonal: 'bg-amber-500',
  limited: 'bg-purple-500',
  popup: 'bg-pink-500',
}

const statusIndicators: Record<EventStatus, { dot: string; label: string } | null> = {
  'happening-now': { dot: 'bg-red-500 animate-pulse', label: 'NOW' },
  'starts-soon': { dot: 'bg-orange-500', label: 'SOON' },
  today: null,
  tomorrow: null,
  'this-weekend': null,
  'this-week': null,
  'next-week': null,
  'this-month': null,
  upcoming: null,
  ended: null,
}

export function CompactEventRow({ event }: CompactEventRowProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const status = getEventStatus(event)
  const displayDate = getEventDisplayDate(event)
  const displayTime = getEventDisplayTime(event)
  const statusIndicator = statusIndicators[status]

  return (
    <div className="border-b border-neutral-100 last:border-b-0">
      {/* Compact Row */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 transition-colors text-left group"
      >
        {/* Status indicator or category dot */}
        <div className="flex-shrink-0 flex items-center gap-1.5">
          {statusIndicator ? (
            <>
              <div className={`w-2 h-2 rounded-full ${statusIndicator.dot}`} />
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide">
                {statusIndicator.label}
              </span>
            </>
          ) : (
            <div className={`w-2 h-2 rounded-full ${categoryColors[event.category] || 'bg-neutral-400'}`} />
          )}
        </div>

        {/* Date/Time - fixed width for alignment */}
        <div className="flex-shrink-0 w-24 text-xs text-neutral-500 font-medium">
          {displayDate}
          {displayTime && <span className="text-neutral-400 ml-1">{displayTime}</span>}
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <span className="font-medium text-neutral-900 group-hover:text-accent-700 truncate block">
            {event.title}
          </span>
        </div>

        {/* Venue - truncated */}
        {event.location && (
          <div className="hidden sm:block flex-shrink-0 max-w-[180px] text-xs text-neutral-500 truncate">
            @ {event.location}
          </div>
        )}

        {/* Expand indicator */}
        <svg
          className={`w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="px-4 pb-4 pt-1 bg-neutral-50 border-t border-neutral-100">
          <div className="pl-[3.25rem]">
            {/* Description */}
            <p className="text-sm text-neutral-700 leading-relaxed mb-3">{event.description}</p>

            {/* Location on mobile */}
            {event.location && (
              <p className="sm:hidden text-xs text-neutral-500 mb-2 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </p>
            )}

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <div className="flex gap-1.5 mb-3 flex-wrap">
                {event.tags.map((tag) => (
                  <span key={tag} className="text-xs text-neutral-500 bg-white px-2 py-0.5 rounded border border-neutral-200">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              {event.href && (
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-accent-600 hover:bg-accent-700 px-3 py-1.5 rounded-md transition-colors"
                >
                  View Details
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {event.moreInfo?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-accent-600 hover:text-accent-800"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
