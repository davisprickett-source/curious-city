import type { EventItem, EventStatus } from '@/types/content'
import { getEventStatus, getEventDisplayDate, getEventDisplayTime } from '@/utils/eventStatus'

interface EventCardProps {
  event: EventItem
  showFullDetails?: boolean
}

const categoryLabels: Record<string, string> = {
  event: 'Event',
  opening: 'New Opening',
  closing: 'Last Chance',
  seasonal: 'Seasonal',
  limited: 'Limited Time',
  popup: 'Pop-up',
}

const categoryColors: Record<string, string> = {
  event: 'bg-blue-100 text-blue-800',
  opening: 'bg-green-100 text-green-800',
  closing: 'bg-red-100 text-red-800',
  seasonal: 'bg-amber-100 text-amber-800',
  limited: 'bg-purple-100 text-purple-800',
  popup: 'bg-pink-100 text-pink-800',
}

const statusColors: Record<EventStatus, string> = {
  'happening-now': 'bg-red-500 text-white',
  'starts-soon': 'bg-orange-500 text-white',
  today: 'bg-blue-500 text-white',
  tomorrow: 'bg-neutral-500 text-white',
  'this-weekend': 'bg-purple-500 text-white',
  'this-week': 'bg-neutral-400 text-white',
  'next-week': 'bg-neutral-300 text-neutral-700',
  'this-month': 'bg-neutral-200 text-neutral-600',
  upcoming: 'bg-neutral-100 text-neutral-500',
  ended: 'bg-neutral-100 text-neutral-400',
}

const statusLabels: Record<EventStatus, string> = {
  'happening-now': '🔴 Happening Now',
  'starts-soon': 'Starts Soon',
  today: 'Today',
  tomorrow: 'Tomorrow',
  'this-weekend': 'This Weekend',
  'this-week': 'This Week',
  'next-week': 'Next Week',
  'this-month': 'This Month',
  upcoming: 'Upcoming',
  ended: 'Ended',
}

export function EventCard({ event, showFullDetails = true }: EventCardProps) {
  const status = getEventStatus(event)
  const displayDate = getEventDisplayDate(event)
  // @ts-ignore - Variable for future use
  const displayTime = getEventDisplayTime(event)

  return (
    <article className="border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 transition-colors">
      <div className="flex items-start gap-4">
        {event.image && (
          <div className="flex-shrink-0">
            <img
              src={event.image.src}
              alt={event.image.alt || event.title}
              className="w-20 h-20 object-cover rounded-md"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {/* Status badge for high-priority events */}
            {(status === 'happening-now' || status === 'starts-soon') && (
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[status]}`}>
                {statusLabels[status]}
              </span>
            )}

            {/* Category badge */}
            {event.category && (
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  categoryColors[event.category] || 'bg-neutral-100 text-neutral-700'
                }`}
              >
                {categoryLabels[event.category] || event.category}
              </span>
            )}

            {/* Display date and time */}
            <span className="text-xs text-neutral-500">{displayDate}</span>
          </div>

          {/* Title */}
          {event.href ? (
            <a
              href={event.href}
              className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.title}
            </a>
          ) : (
            <h3 className="text-lg font-semibold text-neutral-900">{event.title}</h3>
          )}

          {/* Description */}
          {showFullDetails && (
            <p className="text-neutral-600 mt-1 text-sm leading-relaxed">{event.description}</p>
          )}

          {/* Location */}
          {event.location && (
            <p className="text-xs text-neutral-500 mt-2 flex items-center gap-1">
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
            <div className="flex gap-1.5 mt-2 flex-wrap">
              {event.tags.map((tag) => (
                <span key={tag} className="text-xs text-neutral-400 bg-neutral-50 px-1.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* More Info Links */}
          {event.moreInfo && event.moreInfo.length > 0 && (
            <div className="flex gap-3 mt-3 flex-wrap">
              {event.moreInfo.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
                >
                  <MoreInfoIcon type={link.type} />
                  {link.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

function MoreInfoIcon({ type }: { type?: 'tickets' | 'article' | 'video' | 'directions' | 'rsvp' }) {
  switch (type) {
    case 'tickets':
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      )
    case 'video':
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'directions':
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    case 'rsvp':
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case 'article':
    default:
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )
  }
}
