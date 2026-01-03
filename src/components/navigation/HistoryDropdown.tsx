'use client'

import Link from 'next/link'
import { useState } from 'react'
import { getAllHistory } from '@/data/history'
import { CITY_METADATA } from '@/data/cities'
import { routes } from '@/lib/routes'

// Get all history articles grouped by city
const allHistory = getAllHistory()
const historyByCity = allHistory.reduce(
  (acc, article) => {
    if (!acc[article.citySlug]) {
      acc[article.citySlug] = []
    }
    acc[article.citySlug].push(article)
    return acc
  },
  {} as Record<string, typeof allHistory>
)

// City name lookup from data
const cityNames = [...CITY_METADATA].reduce(
  (acc, city) => {
    acc[city.slug] = city.name
    return acc
  },
  {} as Record<string, string>
)

export function HistoryDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-accent-600 transition-colors"
      >
        History
        <svg
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-72 py-2 bg-white rounded-xl shadow-xl border border-neutral-100 max-h-[70vh] overflow-y-auto z-50">
          {Object.entries(historyByCity).map(([citySlug, cityHistory]) => (
            <div key={citySlug}>
              <div className="px-4 py-2 text-xs font-semibold text-accent-600 uppercase tracking-wide">
                {cityNames[citySlug] || citySlug}
              </div>
              {cityHistory.map((article) => (
                <Link
                  key={article.slug}
                  href={routes.cityArticle(article.citySlug, article.slug)}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-accent-50 hover:text-accent-700 transition-colors"
                >
                  {article.title}
                </Link>
              ))}
            </div>
          ))}

          <div className="my-2 border-t border-neutral-100" />

          <Link
            href={routes.categoryHistory()}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 px-4 py-2 text-sm text-accent-600 hover:bg-accent-50 font-medium"
          >
            View all history
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  )
}
