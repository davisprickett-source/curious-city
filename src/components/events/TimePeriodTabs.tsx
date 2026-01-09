'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export type TimePeriod = 'today' | 'weekend' | 'week' | 'custom'

interface TimePeriodTabsProps {
  currentPeriod: TimePeriod
  currentDate?: string // ISO date for custom
  citySlug: string
}

const PERIODS: { id: TimePeriod; label: string }[] = [
  { id: 'today', label: 'Today' },
  { id: 'weekend', label: 'This Weekend' },
  { id: 'week', label: 'This Week' },
]

export function TimePeriodTabs({ currentPeriod, currentDate, citySlug }: TimePeriodTabsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handlePeriodChange = (period: TimePeriod) => {
    const params = new URLSearchParams(searchParams.toString())

    if (period === 'custom') {
      setShowDatePicker(true)
      return
    }

    // Remove date param if switching to a preset period
    params.delete('date')

    if (period === 'week') {
      // 'week' is the default, so remove the param
      params.delete('period')
    } else {
      params.set('period', period)
    }

    const queryString = params.toString()
    router.push(`/${citySlug}/events${queryString ? `?${queryString}` : ''}`)
  }

  const handleDateSelect = (date: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('period')
    params.set('date', date)
    setShowDatePicker(false)

    const queryString = params.toString()
    router.push(`/${citySlug}/events?${queryString}`)
  }

  const isCustomDate = currentPeriod === 'custom' || !!currentDate

  return (
    <div className="flex items-center gap-2">
      {/* Period tabs */}
      <div className="flex items-center gap-1 bg-neutral-100 rounded-lg p-1">
        {PERIODS.map((period) => (
          <button
            key={period.id}
            onClick={() => handlePeriodChange(period.id)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
              currentPeriod === period.id && !isCustomDate
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>

      {/* Date picker button */}
      <button
        onClick={() => setShowDatePicker(true)}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
          isCustomDate
            ? 'bg-accent-100 text-accent-700 border border-accent-200'
            : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border border-transparent'
        }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {isCustomDate && currentDate ? formatDateForDisplay(currentDate) : 'Pick Date'}
      </button>

      {/* Date picker modal */}
      {showDatePicker && (
        <DatePickerModal
          currentDate={currentDate}
          onSelect={handleDateSelect}
          onClose={() => setShowDatePicker(false)}
        />
      )}
    </div>
  )
}

function formatDateForDisplay(isoDate: string): string {
  const date = new Date(isoDate + 'T00:00:00')
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

interface DatePickerModalProps {
  currentDate?: string
  onSelect: (date: string) => void
  onClose: () => void
}

function DatePickerModal({ currentDate, onSelect, onClose }: DatePickerModalProps) {
  const today = new Date()
  const [viewMonth, setViewMonth] = useState(currentDate ? new Date(currentDate + 'T00:00:00') : today)

  const year = viewMonth.getFullYear()
  const month = viewMonth.getMonth()

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDay = firstDay.getDay()

  const monthName = viewMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const prevMonth = () => setViewMonth(new Date(year, month - 1, 1))
  const nextMonth = () => setViewMonth(new Date(year, month + 1, 1))

  const handleDayClick = (day: number) => {
    const selectedDate = new Date(year, month, day)
    // Don't allow past dates
    if (selectedDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
      return
    }
    const isoDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    onSelect(isoDate)
  }

  const isToday = (day: number) => {
    return year === today.getFullYear() && month === today.getMonth() && day === today.getDate()
  }

  const isPast = (day: number) => {
    const date = new Date(year, month, day)
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
  }

  const isSelected = (day: number) => {
    if (!currentDate) return false
    const selected = new Date(currentDate + 'T00:00:00')
    return year === selected.getFullYear() && month === selected.getMonth() && day === selected.getDate()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-xl p-4 w-full max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="font-semibold text-neutral-900">{monthName}</h3>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-neutral-400 py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before start of month */}
          {Array.from({ length: startingDay }).map((_, i) => (
            <div key={`empty-${i}`} className="h-10" />
          ))}

          {/* Day cells */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const past = isPast(day)
            const selected = isSelected(day)
            const todayDate = isToday(day)

            return (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                disabled={past}
                className={`h-10 rounded-lg text-sm font-medium transition-all ${
                  selected
                    ? 'bg-accent-600 text-white'
                    : todayDate
                    ? 'bg-accent-100 text-accent-700 hover:bg-accent-200'
                    : past
                    ? 'text-neutral-300 cursor-not-allowed'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {day}
              </button>
            )
          })}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
