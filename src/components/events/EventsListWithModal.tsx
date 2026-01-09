'use client'

import { useState } from 'react'
import type { EventItem } from '@/types/content'
import { DayEventRow } from './DayEventRow'
import { EventModal } from './EventModal'
import { EVENT_CATEGORIES } from '@/utils/eventCategoryUtils'
import { getEventDisplayDate, getEventDisplayTime } from '@/utils/eventStatus'
import { parseDate, isToday as checkIsToday, isTomorrow as checkIsTomorrow } from '@/utils/dateUtils'

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

interface EventGroup {
  dateKey: string
  events: EventItem[]
}

interface EventsListWithModalProps {
  featuredEvents: EventItem[]
  groupedEvents: EventGroup[]
  showFeatured?: boolean
}

// Featured event card with modal support
function FeaturedEventCard({
  event,
  onClick
}: {
  event: EventItem
  onClick: (event: EventItem) => void
}) {
  const categoryMeta = EVENT_CATEGORIES[event.category]
  const displayDate = getEventDisplayDate(event)
  const displayTime = getEventDisplayTime(event)
  const imageSrc = event.image?.src || CATEGORY_PLACEHOLDERS[event.category] || CATEGORY_PLACEHOLDERS.concerts
  const hasImage = !!event.image?.src

  return (
    <button
      onClick={() => onClick(event)}
      className="w-64 flex-shrink-0 group text-left"
      type="button"
    >
      <div className="bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-neutral-400 transition-all duration-200 h-full">
        {/* Image */}
        <div className="aspect-[16/10] bg-neutral-100 overflow-hidden relative">
          <img
            src={imageSrc}
            alt={event.image?.alt || event.title}
            className={`w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 ${
              !hasImage ? 'opacity-60' : ''
            }`}
          />

          {/* Category tag */}
          <div className="absolute top-2 left-2">
            <span className="bg-white/90 backdrop-blur-sm text-neutral-600 text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wide">
              {categoryMeta?.shortLabel || event.category}
            </span>
          </div>

          {/* Featured badge - now amber */}
          <div className="absolute top-2 right-2">
            <span className="bg-amber-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wide">
              Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col min-h-[88px]">
          <p className="text-[11px] text-neutral-400 mb-1 font-medium uppercase tracking-wide">
            {displayDate}{displayTime && ` · ${displayTime}`}
          </p>
          <h3 className="font-medium text-neutral-900 text-sm leading-snug group-hover:text-neutral-600 transition-colors line-clamp-2 flex-1">
            {event.title}
          </h3>
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

export function EventsListWithModal({
  featuredEvents,
  groupedEvents,
  showFeatured = true
}: EventsListWithModalProps) {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEventClick = (event: EventItem) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Delay clearing the event to allow modal close animation
    setTimeout(() => setSelectedEvent(null), 200)
  }

  return (
    <>
      {/* Featured Events */}
      {showFeatured && featuredEvents.length > 0 && (
        <section className="mb-8">
          <div className="container-page mb-3">
            <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
              Featured
            </h2>
          </div>
          <div
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredEvents.map((event, index) => (
              <FeaturedEventCard
                key={`featured-${event.title}-${index}`}
                event={event}
                onClick={handleEventClick}
              />
            ))}
          </div>
        </section>
      )}

      {/* Day Rows */}
      {groupedEvents.map((group) => {
        const firstEvent = group.events[0]
        const eventDate = parseDate(firstEvent.startDate)
        const isToday = checkIsToday(eventDate)
        const isTomorrow = checkIsTomorrow(eventDate)

        return (
          <DayEventRow
            key={group.dateKey}
            date={eventDate}
            events={group.events}
            isToday={isToday}
            isTomorrow={isTomorrow}
            onEventClick={handleEventClick}
          />
        )
      })}

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
