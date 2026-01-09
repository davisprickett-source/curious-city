import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { getCity, getAllCitySlugs, getCityEvents } from '@/data/cities'
import { ShareLinks, Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { CategoryFilterPills } from '@/components/events/CategoryFilterPills'
import { TimePeriodTabs } from '@/components/events/TimePeriodTabs'
import { EventsListWithModal } from '@/components/events/EventsListWithModal'
import { filterEventsByCategories } from '@/utils/eventCategoryUtils'
import { filterEventsByDateRange, getPeriodFromParams, getDateRangeLabel } from '@/utils/eventDateFilters'
import {
  filterActiveEvents,
  sortEventsByDate,
  groupEventsByDate,
} from '@/utils/eventStatus'
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
      />

      <main className="flex-1 bg-neutral-50 min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-neutral-200">
          <div className="container-page py-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-neutral-900">
                  Events
                </h1>
                <p className="text-sm text-neutral-500 mt-1">
                  {dateRangeLabel}
                  {filteredEvents.length > 0 && (
                    <span> · {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}</span>
                  )}
                </p>
              </div>
              <ShareLinks title={`Events in ${city.name} | Curious City`} variant="compact" />
            </div>
          </div>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-14 z-20 bg-white border-b border-neutral-200">
          <div className="container-page py-3 space-y-2">
            {/* Time Period Tabs */}
            <Suspense fallback={<div className="h-9" />}>
              <TimePeriodTabs
                currentPeriod={period}
                currentDate={customDate}
                citySlug={city.slug}
              />
            </Suspense>

            {/* Category Filter Pills */}
            <Suspense fallback={<div className="h-8" />}>
              <CategoryFilterPills
                selectedCategories={selectedCategories}
                events={dateFilteredEvents}
              />
            </Suspense>
          </div>
        </div>

        {/* Events Content */}
        <div className="py-6">
          {filteredEvents.length > 0 ? (
            <EventsListWithModal
              featuredEvents={featuredEvents}
              groupedEvents={groupedEvents}
              showFeatured={featuredEvents.length > 0}
            />
          ) : dateFilteredEvents.length > 0 ? (
            <div className="text-center py-16">
              <p className="text-neutral-500 mb-2">No events match your filters.</p>
              <p className="text-sm text-neutral-400">Try different categories.</p>
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-neutral-500 mb-2">No events for this period.</p>
              <p className="text-sm text-neutral-400">Try a different date range.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
