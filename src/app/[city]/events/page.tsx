import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { getCity, getAllCitySlugs, getCityEvents } from '@/data/cities'
import { ShareLinks, Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { DayEventRow } from '@/components/events/DayEventRow'
import { CategoryFilterPills } from '@/components/events/CategoryFilterPills'
import { filterEventsByCategories } from '@/utils/eventCategoryUtils'
import {
  filterActiveEvents,
  sortEventsByDate,
  groupEventsByDate,
} from '@/utils/eventStatus'
import { parseDate, isToday as checkIsToday, isTomorrow as checkIsTomorrow } from '@/utils/dateUtils'
import type { EventItem, EventsContentItem } from '@/types/content'
import type { EventCategory } from '@/utils/eventCategoryUtils'

interface PageProps {
  params: Promise<{ city: string }>
  searchParams: Promise<{ categories?: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `Events in ${city.name} | Curious City`,
    description: `Discover concerts, nightlife, food & drink events, art shows, comedy, sports, theater, and markets in ${city.name}.`,
  }
}

export default async function CityEventsPage({ params, searchParams }: PageProps) {
  const { city: slug } = await params
  const { categories: categoriesParam } = await searchParams
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  // Get selected categories from URL
  const selectedCategories = categoriesParam
    ? (categoriesParam.split(',').filter(Boolean) as EventCategory[])
    : []

  // Get events from city data
  const eventsSections = await getCityEvents(slug) as EventsContentItem[]
  const allEvents: EventItem[] = eventsSections.flatMap((section) => section.items)

  // Filter to only active events
  const activeEvents = filterActiveEvents(allEvents)

  // Filter by selected categories
  const filteredEvents = filterEventsByCategories(activeEvents, selectedCategories)

  // Sort and group by date
  const sortedEvents = sortEventsByDate(filteredEvents)
  const groupedEvents = groupEventsByDate(sortedEvents)

  // Get featured events (top featured or high relevance)
  const featuredEvents = sortedEvents
    .filter(e => e.featured || (e.relevanceScore && e.relevanceScore >= 70))
    .slice(0, 6)

  // Determine which days to show expanded (first 4 days)
  const EXPANDED_DAYS = 4

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="events"
        eventCategories={selectedCategories}
      />

      <main className="flex-1 bg-white">
        {/* Header */}
        <div className="container-page pt-6 pb-4">
          <div className="flex items-baseline justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Events in {city.name}
            </h1>
            <ShareLinks title={`Events in ${city.name} | Curious City`} variant="compact" />
          </div>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-14 z-20 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
          <div className="container-page">
            <Suspense fallback={<div className="h-12" />}>
              <CategoryFilterPills
                selectedCategories={selectedCategories}
                events={activeEvents}
              />
            </Suspense>
          </div>
        </div>

        {/* Events Content */}
        <div className="py-6">
          {filteredEvents.length > 0 ? (
            <>
              {/* Featured Events Row */}
              {featuredEvents.length > 0 && selectedCategories.length === 0 && (
                <section className="mb-8">
                  <div className="flex items-center gap-3 mb-3 px-4">
                    <h2 className="text-lg font-bold text-accent-600">Featured</h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-accent-200 to-transparent" />
                  </div>
                  <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {featuredEvents.map((event, index) => (
                      <FeaturedEventCard key={`featured-${event.title}-${index}`} event={event} />
                    ))}
                  </div>
                </section>
              )}

              {/* Day Rows */}
              {groupedEvents.map((group, index) => {
                // Parse the date from the group
                // The date string is formatted like "Wednesday, January 8, 2026" or "Today", "Tomorrow"
                const dateStr = group.date
                const firstEvent = group.events[0]
                const eventDate = parseDate(firstEvent.startDate)
                const isToday = checkIsToday(eventDate)
                const isTomorrow = checkIsTomorrow(eventDate)

                // Only show first N days expanded
                if (index >= EXPANDED_DAYS) {
                  return (
                    <CollapsedDayRow
                      key={dateStr}
                      dateLabel={dateStr}
                      eventCount={group.events.length}
                      events={group.events}
                      date={eventDate}
                    />
                  )
                }

                return (
                  <DayEventRow
                    key={dateStr}
                    date={eventDate}
                    events={group.events}
                    isToday={isToday}
                    isTomorrow={isTomorrow}
                  />
                )
              })}
            </>
          ) : activeEvents.length > 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No events match your current filters.</p>
              <p className="text-sm text-neutral-400">Try selecting different categories above.</p>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No events listed for {city.name} yet.</p>
              <p className="text-sm text-neutral-400">Check back soon for upcoming events!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

// Featured event card (larger format)
import { EVENT_CATEGORIES, getCategoryColorClass } from '@/utils/eventCategoryUtils'
import { getEventDisplayDate, getEventDisplayTime } from '@/utils/eventStatus'

function FeaturedEventCard({ event }: { event: EventItem }) {
  const categoryMeta = EVENT_CATEGORIES[event.category]
  const displayDate = getEventDisplayDate(event)
  const displayTime = getEventDisplayTime(event)

  return (
    <a
      href={event.href || '#'}
      target={event.href ? '_blank' : undefined}
      rel={event.href ? 'noopener noreferrer' : undefined}
      className="w-72 flex-shrink-0 group"
    >
      <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-lg hover:border-neutral-200 transition-all duration-200 hover:-translate-y-1">
        {/* Category header */}
        <div className={`${getCategoryColorClass(event.category)} px-3 py-1.5 flex items-center gap-2`}>
          <span className="text-white text-base">{categoryMeta?.icon}</span>
          <span className="text-white text-sm font-medium">{categoryMeta?.label}</span>
        </div>

        {/* Image */}
        <div className="h-44 bg-neutral-100 overflow-hidden">
          {event.image ? (
            <img
              src={event.image.src}
              alt={event.image.alt || event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className={`w-full h-full ${getCategoryColorClass(event.category)} opacity-20 flex items-center justify-center`}>
              <span className="text-5xl opacity-50">{categoryMeta?.icon}</span>
            </div>
          )}
        </div>

        {/* Featured badge */}
        <div className="absolute top-10 right-2">
          <span className="bg-accent-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide shadow-sm">
            Featured
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="text-xs text-neutral-500 mb-1">
            {displayDate}
            {displayTime && <span className="text-neutral-400"> at {displayTime}</span>}
          </div>
          <h3 className="font-semibold text-neutral-900 group-hover:text-accent-700 transition-colors line-clamp-2 mb-1">
            {event.title}
          </h3>
          {event.location && (
            <p className="text-xs text-neutral-500 truncate flex items-center gap-1">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="truncate">{event.location}</span>
            </p>
          )}
        </div>
      </div>
    </a>
  )
}

// Collapsed day row (for days beyond the first few)
function CollapsedDayRow({
  dateLabel,
  eventCount,
  events,
  date
}: {
  dateLabel: string
  eventCount: number
  events: EventItem[]
  date: Date
}) {
  // This is a server component, but we need client interactivity
  // For now, render as a simple expandable section
  return (
    <details className="mb-4 group">
      <summary className="cursor-pointer list-none px-4 py-3 bg-neutral-50 hover:bg-neutral-100 transition-colors rounded-lg mx-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg
              className="w-4 h-4 text-neutral-400 transition-transform group-open:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-semibold text-neutral-900">{dateLabel}</span>
          </div>
          <span className="text-xs text-neutral-400 bg-neutral-200 px-2 py-0.5 rounded-full">
            {eventCount} event{eventCount !== 1 ? 's' : ''}
          </span>
        </div>
      </summary>
      <div className="mt-2">
        <DayEventRow date={date} events={events} />
      </div>
    </details>
  )
}
