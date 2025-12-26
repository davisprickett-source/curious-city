import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityEvents } from '@/data/cities'
import { Header, CityNav, ShareLinks, EventTimeBuckets, EventFilter, EventCategoryFilter } from '@/components'
import { filterEventsByCategories } from '@/utils/eventCategoryUtils'
import {
  filterActiveEvents,
  filterThisWeekEvents,
  filterTodayEvents,
  filterWeekendEvents,
  filterThisMonthEvents,
} from '@/utils/eventStatus'
import type { EventItem, EventsContentItem } from '@/types/content'
import type { EventView } from '@/components'

interface PageProps {
  params: Promise<{ city: string }>
  searchParams: Promise<{ view?: string; categories?: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `Events in ${city.name} | Curious City`,
    description: `Discover events, new openings, pop-ups, and limited-time experiences in ${city.name}.`,
  }
}

export default async function CityEventsPage({ params, searchParams }: PageProps) {
  const { city: slug } = await params
  const { view: viewParam, categories: categoriesParam } = await searchParams
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  // Determine current view
  const view: EventView = (viewParam as EventView) || 'week'

  // Get selected categories from URL
  const selectedCategories = categoriesParam
    ? (categoriesParam.split(',').filter(Boolean) as Array<'event' | 'opening' | 'closing' | 'seasonal' | 'limited' | 'popup'>)
    : []

  // Get events from city data
  const eventsSections = getCityEvents(slug) as EventsContentItem[]
  const allEvents: EventItem[] = eventsSections.flatMap((section) => section.items)

  // Filter to only active events
  const activeEvents = filterActiveEvents(allEvents)

  // Filter by selected categories
  const categoryFilteredEvents = filterEventsByCategories(activeEvents, selectedCategories)

  // Filter by time period
  const filteredEvents = (() => {
    switch (view) {
      case 'today':
        return filterTodayEvents(categoryFilteredEvents)
      case 'weekend':
        return filterWeekendEvents(categoryFilteredEvents)
      case 'week':
        return filterThisWeekEvents(categoryFilteredEvents)
      case 'month':
        return filterThisMonthEvents(categoryFilteredEvents)
      default:
        return filterThisWeekEvents(categoryFilteredEvents)
    }
  })()

  const viewTitles: Record<EventView, string> = {
    today: `Today in ${city.name}`,
    weekend: `This Weekend in ${city.name}`,
    week: `This Week in ${city.name}`,
    month: `This Month in ${city.name}`,
  }

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} currentSection="events" />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
                {viewTitles[view]}
              </h1>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Events in ${city.name} | Curious City`} variant="compact" />
              </div>
            </div>
            <p className="text-lg text-neutral-600">
              Events, new openings, pop-ups, and limited-time experiences.
            </p>
          </div>

          {/* Filters */}
          <div className="space-y-4 mb-8">
            {/* Time filter */}
            <EventFilter citySlug={city.slug} />

            {/* Category filter */}
            <EventCategoryFilter />
          </div>

          {/* Events Content */}
          {filteredEvents.length > 0 ? (
            <EventTimeBuckets events={filteredEvents} view={view} />
          ) : activeEvents.length > 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No events match your current filters.</p>
              <p className="text-sm text-neutral-400">Try adjusting the time period or category filters above.</p>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No events listed for {city.name} yet.</p>
              <p className="text-sm text-neutral-400">Check back soon for upcoming events!</p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-neutral-200 mt-12">
        <div className="container-page py-6">
          <p className="text-xs text-neutral-400 text-center">
            Curious City
          </p>
        </div>
      </footer>
    </>
  )
}
