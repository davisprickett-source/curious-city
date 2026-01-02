'use client'

import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'
import type { EventView } from '@/components/EventFilter'

const viewLabels: Record<EventView, string> = {
  today: 'Today',
  weekend: 'Weekend',
  week: 'Week',
  month: 'Month',
}

interface InlineEventTimeFilterProps {
  currentView?: EventView
}

export function InlineEventTimeFilter({ currentView = 'week' }: InlineEventTimeFilterProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const views: EventView[] = ['today', 'weekend', 'week', 'month']

  const buildHref = (view: EventView) => {
    const params = new URLSearchParams(searchParams.toString())
    if (view === 'week') {
      params.delete('view') // Default, clean URL
    } else {
      params.set('view', view)
    }
    const queryString = params.toString()
    return queryString ? `${pathname}?${queryString}` : pathname
  }

  return (
    <>
      {views.map((view) => {
        const isActive = currentView === view

        return (
          <Link
            key={view}
            href={buildHref(view)}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
              ${
                isActive
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }
            `}
          >
            {viewLabels[view]}
          </Link>
        )
      })}
    </>
  )
}
