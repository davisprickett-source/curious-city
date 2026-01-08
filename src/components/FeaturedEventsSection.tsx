import type { EventItem, EventStatus } from '@/types/content'
import { getEventStatus, getEventDisplayDate, getEventDisplayTime } from '@/utils/eventStatus'

interface FeaturedEventsSectionProps {
  events: EventItem[]
  maxEvents?: number
}

const categoryColors: Record<string, string> = {
  event: 'bg-blue-500',
  opening: 'bg-green-500',
  closing: 'bg-red-500',
  seasonal: 'bg-amber-500',
  limited: 'bg-purple-500',
  popup: 'bg-pink-500',
}

const statusBadges: Record<EventStatus, { bg: string; text: string; label: string } | null> = {
  'happening-now': { bg: 'bg-red-500', text: 'text-white', label: 'Happening Now' },
  'starts-soon': { bg: 'bg-orange-500', text: 'text-white', label: 'Starts Soon' },
  today: { bg: 'bg-blue-500', text: 'text-white', label: 'Today' },
  tomorrow: { bg: 'bg-neutral-700', text: 'text-white', label: 'Tomorrow' },
  'this-weekend': { bg: 'bg-purple-500', text: 'text-white', label: 'This Weekend' },
  'this-week': null,
  'next-week': null,
  'this-month': null,
  upcoming: null,
  ended: null,
}

export function FeaturedEventsSection({ events, maxEvents = 5 }: FeaturedEventsSectionProps) {
  // Get featured events (marked as featured or top relevance score)
  const featuredEvents = events
    .filter(e => e.featured || (e.relevanceScore && e.relevanceScore >= 70))
    .slice(0, maxEvents)

  // If no featured events, take top 3 by start date
  const displayEvents = featuredEvents.length > 0
    ? featuredEvents
    : events.slice(0, 3)

  if (displayEvents.length === 0) return null

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-bold text-accent-600 uppercase tracking-wider">Featured</span>
        <div className="flex-1 h-px bg-gradient-to-r from-accent-200 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayEvents.map((event, index) => (
          <FeaturedEventCard key={`${event.title}-${index}`} event={event} />
        ))}
      </div>
    </section>
  )
}

function FeaturedEventCard({ event }: { event: EventItem }) {
  const status = getEventStatus(event)
  const displayDate = getEventDisplayDate(event)
  const displayTime = getEventDisplayTime(event)
  const statusBadge = statusBadges[status]

  return (
    <article className="group relative bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-accent-300 hover:shadow-lg transition-all">
      {/* Image or gradient placeholder */}
      {event.image ? (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={event.image.src}
            alt={event.image.alt || event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className={`aspect-[16/9] ${categoryColors[event.category]} opacity-10`} />
      )}

      {/* Badges overlay */}
      <div className="absolute top-3 left-3 flex items-center gap-2">
        {event.featured && (
          <span className="text-[10px] font-bold text-white bg-accent-600 px-2 py-1 rounded-md uppercase tracking-wide shadow-sm">
            Featured
          </span>
        )}
        {statusBadge && (
          <span className={`text-[10px] font-bold ${statusBadge.text} ${statusBadge.bg} px-2 py-1 rounded-md uppercase tracking-wide shadow-sm`}>
            {statusBadge.label}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category dot + date */}
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-2 h-2 rounded-full ${categoryColors[event.category]}`} />
          <span className="text-xs text-neutral-500 font-medium">
            {displayDate}
            {displayTime && <span className="text-neutral-400 ml-1">at {displayTime}</span>}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-neutral-900 group-hover:text-accent-700 line-clamp-2 mb-2">
          {event.href ? (
            <a href={event.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {event.title}
            </a>
          ) : (
            event.title
          )}
        </h3>

        {/* Description - truncated */}
        <p className="text-sm text-neutral-600 line-clamp-2 mb-3">{event.description}</p>

        {/* Location */}
        {event.location && (
          <p className="text-xs text-neutral-500 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{event.location}</span>
          </p>
        )}

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex gap-1 mt-2 flex-wrap">
            {event.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
