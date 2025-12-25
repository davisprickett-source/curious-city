'use client'

import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'

export type EventView = 'today' | 'weekend' | 'week' | 'month'

interface EventFilterProps {
  citySlug: string
}

const viewLabels: Record<EventView, string> = {
  today: 'Today',
  weekend: 'This Weekend',
  week: 'This Week',
  month: 'This Month',
}

export function EventFilter({ citySlug }: EventFilterProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const currentView = (searchParams.get('view') as EventView) || 'week'

  const views: EventView[] = ['today', 'weekend', 'week', 'month']

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      {views.map((view) => {
        const isActive = currentView === view
        const href = view === 'week' ? pathname : `${pathname}?view=${view}`

        return (
          <Link
            key={view}
            href={href}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
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
    </div>
  )
}
