'use client'

import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'
import { getWeekRangeLabel } from '@/utils/dateUtils'

interface WeekNavigationProps {
  citySlug: string
}

export function WeekNavigation({ citySlug }: WeekNavigationProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const currentWeekOffset = parseInt(searchParams.get('week') || '0')

  // Get week range label for current week
  const currentDate = new Date()
  const offsetDate = new Date(currentDate)
  offsetDate.setDate(offsetDate.getDate() + currentWeekOffset * 7)
  const weekLabel = getWeekRangeLabel(offsetDate)

  // Build URLs for previous/next week
  const buildWeekUrl = (offset: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (offset === 0) {
      params.delete('week')
    } else {
      params.set('week', offset.toString())
    }
    const queryString = params.toString()
    return queryString ? `${pathname}?${queryString}` : pathname
  }

  const prevWeekUrl = buildWeekUrl(currentWeekOffset - 1)
  const nextWeekUrl = buildWeekUrl(currentWeekOffset + 1)
  const thisWeekUrl = buildWeekUrl(0)

  return (
    <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-200">
      <Link
        href={prevWeekUrl}
        className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Previous Week
      </Link>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-neutral-900">{weekLabel}</span>
        {currentWeekOffset !== 0 && (
          <Link
            href={thisWeekUrl}
            className="text-xs text-neutral-500 hover:text-neutral-700 underline underline-offset-2"
          >
            Back to This Week
          </Link>
        )}
      </div>

      <Link
        href={nextWeekUrl}
        className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
      >
        Next Week
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
