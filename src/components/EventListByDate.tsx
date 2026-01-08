import type { EventItem } from '@/types/content'
import { CompactEventRow } from './CompactEventRow'
import { groupEventsByDate } from '@/utils/eventStatus'

interface EventListByDateProps {
  events: EventItem[]
  emptyMessage?: string
}

export function EventListByDate({ events, emptyMessage = 'No events found' }: EventListByDateProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-neutral-400 mb-2">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-neutral-500">{emptyMessage}</p>
      </div>
    )
  }

  // groupEventsByDate returns array of { date: string, events: EventItem[] }
  const groupedEvents = groupEventsByDate(events)

  return (
    <div className="space-y-6">
      {groupedEvents.map((group) => {
        const { date, events: dateEvents } = group

        // Parse the human-readable date back to a Date object for comparison
        // The date from groupEventsByDate is already formatted like "Wednesday, January 8, 2026"
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        // Check if it's today or tomorrow by comparing the formatted date
        const todayFormatted = today.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
        const tomorrowFormatted = tomorrow.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })

        const isToday = date === todayFormatted
        const isTomorrow = date === tomorrowFormatted

        // Simplify the date display (remove year for cleaner look)
        const shortDate = date.replace(/, \d{4}$/, '')
        let dateLabel = shortDate
        if (isToday) dateLabel = 'Today'
        if (isTomorrow) dateLabel = 'Tomorrow'

        return (
          <div key={date}>
            {/* Date header */}
            <div className="sticky top-14 z-10 bg-white/95 backdrop-blur-sm border-b border-neutral-200 py-2 px-4 -mx-4">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-neutral-900">
                  {dateLabel}
                </h3>
                {(isToday || isTomorrow) && (
                  <span className="text-xs text-neutral-500">{shortDate}</span>
                )}
                <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                  {dateEvents.length} event{dateEvents.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>

            {/* Events for this date */}
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden mt-2">
              {dateEvents.map((event, index) => (
                <CompactEventRow key={`${event.title}-${index}`} event={event} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
