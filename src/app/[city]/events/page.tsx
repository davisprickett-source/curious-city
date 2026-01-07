import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityEvents } from '@/data/cities'
import { ShareLinks, EventTimeBuckets, Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { filterEventsByCategories } from '@/utils/eventCategoryUtils'
import {
  filterActiveEvents,
  filterThisWeekEvents,
  filterTodayEvents,
  filterWeekendEvents,
  filterThisMonthEvents,
} from '@/utils/eventStatus'
import type { EventItem, EventsContentItem } from '@/types/content'
import type { EventView } from '@/components/EventFilter'
import type { EventCategory } from '@/utils/eventCategoryUtils'

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
  const city = await getCity(slug)

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
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  // Determine current view
  const view: EventView = (viewParam as EventView) || 'week'

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
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="events"
        eventView={view}
        eventCategories={selectedCategories}
      />

      <main className="flex-1 bg-white">
        <div className="container-page py-6">
          {/* Compact header - title and description inline */}
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
              {viewTitles[view]}
            </h1>
            <ShareLinks title={`Events in ${city.name} | Curious City`} variant="compact" />
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

      <Footer />
    </>
  )
}
