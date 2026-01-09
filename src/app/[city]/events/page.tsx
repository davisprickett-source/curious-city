import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { getCity, getAllCitySlugs, getCityEvents } from '@/data/cities'
import { ShareLinks, Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { DayEventRow } from '@/components/events/DayEventRow'
import { CategoryFilterPills } from '@/components/events/CategoryFilterPills'
import { TimePeriodTabs } from '@/components/events/TimePeriodTabs'
import { filterEventsByCategories, EVENT_CATEGORIES, getCategoryColorClass } from '@/utils/eventCategoryUtils'
import { filterEventsByDateRange, getPeriodFromParams, getDateRangeLabel } from '@/utils/eventDateFilters'
import {
  filterActiveEvents,
  sortEventsByDate,
  groupEventsByDate,
  getEventDisplayDate,
  getEventDisplayTime,
} from '@/utils/eventStatus'
import { parseDate, isToday as checkIsToday, isTomorrow as checkIsTomorrow } from '@/utils/dateUtils'
import type { EventItem, EventsContentItem } from '@/types/content'
import type { EventCategory } from '@/utils/eventCategoryUtils'

interface PageProps {
  params: Promise<{ city: string }>
  searchParams: Promise<{ categories?: string; period?: string; date?: string }>
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
  const { categories: categoriesParam, period: periodParam, date: dateParam } = await searchParams
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  // Determine time period from URL
  const { period, customDate } = getPeriodFromParams(periodParam, dateParam)

  // Get selected categories from URL
  const selectedCategories = categoriesParam
    ? (categoriesParam.split(',').filter(Boolean) as EventCategory[])
    : []

  // Get events from city data
  const eventsSections = await getCityEvents(slug) as EventsContentItem[]
  const allEvents: EventItem[] = eventsSections.flatMap((section) => section.items)

  // SERVER-SIDE FILTERING: Only load events for the selected time period
  // This keeps the payload small regardless of total event count
  const activeEvents = filterActiveEvents(allEvents)
  const dateFilteredEvents = filterEventsByDateRange(activeEvents, period, customDate)

  // Client-side category filtering within the already-loaded slice
  const filteredEvents = filterEventsByCategories(dateFilteredEvents, selectedCategories)

  // Sort and group by date
  const sortedEvents = sortEventsByDate(filteredEvents)
  const groupedEvents = groupEventsByDate(sortedEvents)

  // Get featured events (only show when no filters active)
  const featuredEvents = period === 'week' && selectedCategories.length === 0
    ? sortedEvents.filter(e => e.featured || (e.relevanceScore && e.relevanceScore >= 70)).slice(0, 6)
    : []

  // Date range label for display
  const dateRangeLabel = getDateRangeLabel(period, customDate)

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
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Events in {city.name}
            </h1>
            <ShareLinks title={`Events in ${city.name} | Curious City`} variant="compact" />
          </div>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-14 z-20 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
          <div className="container-page py-3 space-y-3">
            {/* Time Period Tabs */}
            <Suspense fallback={<div className="h-10" />}>
              <TimePeriodTabs
                currentPeriod={period}
                currentDate={customDate}
                citySlug={city.slug}
              />
            </Suspense>

            {/* Category Filter Pills */}
            <Suspense fallback={<div className="h-10" />}>
              <CategoryFilterPills
                selectedCategories={selectedCategories}
                events={dateFilteredEvents}
              />
            </Suspense>
          </div>
        </div>

        {/* Events Content */}
        <div className="py-6">
          {/* Date range indicator */}
          <div className="container-page mb-4">
            <p className="text-sm text-neutral-500">
              Showing events for <span className="font-medium text-neutral-700">{dateRangeLabel}</span>
              {filteredEvents.length > 0 && (
                <span className="text-neutral-400"> ({filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''})</span>
              )}
            </p>
          </div>

          {filteredEvents.length > 0 ? (
            <>
              {/* Featured Events Row */}
              {featuredEvents.length > 0 && (
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

              {/* Day Rows - All expanded since we're showing a limited time range */}
              {groupedEvents.map((group) => {
                const dateStr = group.date
                const firstEvent = group.events[0]
                const eventDate = parseDate(firstEvent.startDate)
                const isToday = checkIsToday(eventDate)
                const isTomorrow = checkIsTomorrow(eventDate)

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
          ) : dateFilteredEvents.length > 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No events match your selected categories.</p>
              <p className="text-sm text-neutral-400">Try selecting different categories above.</p>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No events found for {dateRangeLabel.toLowerCase()}.</p>
              <p className="text-sm text-neutral-400">
                Try selecting a different time period or check back later.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

// Featured event card (larger format)
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
