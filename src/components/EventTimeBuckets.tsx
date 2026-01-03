import type { EventItem, EventStatus } from '@/types/content'
import { groupEventsByStatus, sortEventsByDate, groupEventsByDate } from '@/utils/eventStatus'
import { EventCard } from './EventCard'

interface EventTimeBucketsProps {
  events: EventItem[]
  view?: 'today' | 'weekend' | 'week' | 'month'
}

const sectionLabels: Record<EventStatus, string> = {
  'happening-now': 'Happening Now',
  'starts-soon': 'Starting Soon',
  today: 'Today',
  tomorrow: 'Tomorrow',
  'this-weekend': 'This Weekend',
  'this-week': 'This Week',
  'next-week': 'Next Week',
  'this-month': 'This Month',
  upcoming: 'Upcoming',
  ended: 'Ended',
}

export function EventTimeBuckets({ events, view = 'week' }: EventTimeBucketsProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500 mb-2">No events found for this time period.</p>
        <p className="text-sm text-neutral-400">Check back soon for updates!</p>
      </div>
    )
  }

  // Group events by status
  const grouped = groupEventsByStatus(events)

  // Determine which sections to show based on view
  const sectionsToShow: EventStatus[] = (() => {
    switch (view) {
      case 'today':
        return ['happening-now', 'starts-soon', 'today']
      case 'weekend':
        return ['happening-now', 'starts-soon', 'today', 'tomorrow', 'this-weekend']
      case 'week':
        return ['happening-now', 'starts-soon', 'today', 'tomorrow', 'this-weekend', 'this-week']
      case 'month':
        return [
          'happening-now',
          'starts-soon',
          'today',
          'tomorrow',
          'this-weekend',
          'this-week',
          'next-week',
          'this-month',
        ]
      default:
        return ['happening-now', 'starts-soon', 'today', 'tomorrow', 'this-week']
    }
  })()

  return (
    <div className="space-y-12">
      {sectionsToShow.map((status) => {
        const sectionEvents = grouped[status]
        if (sectionEvents.length === 0) return null

        const sortedEvents = sortEventsByDate(sectionEvents)

        return (
          <section key={status}>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-1">{sectionLabels[status]}</h2>
              <div className="h-0.5 w-12 bg-neutral-900 rounded" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {sortedEvents.map((event, index) => (
                <EventCard
                  key={`${event.title}-${index}`}
                  event={event}
                  showFullDetails={status === 'happening-now' || status === 'starts-soon' || status === 'today'}
                />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

/**
 * Alternative view: Groups events by date instead of status
 * Useful for calendar-style views
 */
export function EventsByDate({ events }: { events: EventItem[] }) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500 mb-2">No events found.</p>
        <p className="text-sm text-neutral-400">Check back soon for updates!</p>
      </div>
    )
  }

  const grouped = groupEventsByDate(events)

  return (
    <div className="space-y-12">
      {grouped.map((group) => (
        <section key={group.date}>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-1">{group.date}</h2>
            <div className="h-0.5 w-12 bg-neutral-900 rounded" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {group.events.map((event, index) => (
              <EventCard key={`${event.title}-${index}`} event={event} showFullDetails />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
