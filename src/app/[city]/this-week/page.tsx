import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityThisWeek, getCityEvents } from '@/data/cities'
import { Header, CityNav, ShareLinks, EventTimeBuckets, EventFilter } from '@/components'
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
  searchParams: Promise<{ view?: string }>
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
    title: `This Week in ${city.name} | Curious City`,
    description: `What's happening in ${city.name} this week - events, pop-ups, limited-time experiences, and things you shouldn't miss.`,
  }
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

export default async function CityThisWeekPage({ params, searchParams }: PageProps) {
  const { city: slug } = await params
  const { view: viewParam } = await searchParams
  const city = getCity(slug)

  if (!city) {
    notFound()
  }

  // Determine current view
  const view: EventView = (viewParam as EventView) || 'week'

  const thisWeekSections = getCityThisWeek(slug)
  const eventsSections = getCityEvents(slug) as EventsContentItem[]

  // Extract all events from events sections
  const allEvents: EventItem[] = eventsSections.flatMap((section) => section.items)

  // Filter to only active events
  const activeEvents = filterActiveEvents(allEvents)

  // Filter based on selected view
  const filteredEvents = (() => {
    switch (view) {
      case 'today':
        return filterTodayEvents(activeEvents)
      case 'weekend':
        return filterWeekendEvents(activeEvents)
      case 'week':
        return filterThisWeekEvents(activeEvents)
      case 'month':
        return filterThisMonthEvents(activeEvents)
      default:
        return filterThisWeekEvents(activeEvents)
    }
  })()

  return (
    <>
      <Header cityName={city.name} citySlug={city.slug} />
      <CityNav citySlug={city.slug} cityName={city.name} currentSection="this-week" />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
                {view === 'today' && `Today in ${city.name}`}
                {view === 'weekend' && `This Weekend in ${city.name}`}
                {view === 'week' && `This Week in ${city.name}`}
                {view === 'month' && `This Month in ${city.name}`}
              </h1>
              <div className="hidden sm:block flex-shrink-0">
                <ShareLinks title={`Events in ${city.name} | Curious City`} variant="compact" />
              </div>
            </div>
            <p className="text-lg text-neutral-600">
              Events, pop-ups, and things you shouldn't miss right now.
            </p>
          </div>

          {/* Event Filter */}
          {activeEvents.length > 0 && (
            <div className="mb-8">
              <EventFilter citySlug={city.slug} />
            </div>
          )}

          {/* Events Content (new system) */}
          {filteredEvents.length > 0 ? (
            <EventTimeBuckets events={filteredEvents} view={view} />
          ) : thisWeekSections.length > 0 ? (
            <div className="space-y-12">
              {thisWeekSections.map((section: any) => (
                <section key={section.id}>
                  {section.title && (
                    <h2 className="text-xl font-semibold text-neutral-900 mb-4">{section.title}</h2>
                  )}
                  {section.intro && (
                    <p className="text-neutral-600 mb-6">{section.intro}</p>
                  )}
                  <div className="grid gap-4 md:grid-cols-2">
                    {section.items.map((item: any, index: number) => (
                      <article
                        key={index}
                        className="border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          {item.image && (
                            <div className="flex-shrink-0">
                              <img
                                src={item.image.src}
                                alt={item.image.alt || item.title}
                                className="w-20 h-20 object-cover rounded-md"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              {item.category && (
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[item.category] || 'bg-neutral-100 text-neutral-700'}`}>
                                  {categoryLabels[item.category] || item.category}
                                </span>
                              )}
                              {item.date && (
                                <span className="text-xs text-neutral-500">{item.date}</span>
                              )}
                              {item.time && (
                                <span className="text-xs text-neutral-400">{item.time}</span>
                              )}
                            </div>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-400"
                              >
                                {item.title}
                              </a>
                            ) : (
                              <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                            )}
                            <p className="text-neutral-600 mt-1 text-sm leading-relaxed">{item.description}</p>
                            {item.location && (
                              <p className="text-xs text-neutral-500 mt-2 flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {item.location}
                              </p>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-2">No current happenings listed for {city.name}.</p>
              <p className="text-sm text-neutral-400">Check back soon for what's happening this week!</p>
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
