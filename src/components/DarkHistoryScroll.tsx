'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import MobileDarkHistoryLayout from './dark-history/MobileDarkHistoryLayout'
import DesktopDarkHistoryLayout from './dark-history/DesktopDarkHistoryLayout'
import type { ExploreLink } from './scrollytelling/ExploreCard'

interface DarkHistoryItem {
  id: string
  title: string
  body: string
  category?: 'unsolved' | 'crime' | 'disaster' | 'mystery' | 'macabre' | 'haunting' | 'cold-case'
  year?: string
  verdict?: string
  articleSlug?: string
  image?: {
    src: string
    alt?: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt?: string
    credit?: string
  }>
  location?: {
    name: string
    stillExists?: boolean
    coordinates?: {
      lat: number
      lng: number
    }
  }
  source?: string
  sources?: Array<{
    type?: 'article' | 'book' | 'documentary' | 'podcast' | 'film' | 'video' | 'report' | 'other'
    title: string
    url?: string
    publisher?: string
    author?: string
    isbn?: string
    platform?: string
    show?: string
    director?: string
    year?: string | number
  }>
}

interface DarkHistoryScrollProps {
  items: DarkHistoryItem[]
  cityName: string
  citySlug: string
  exploreLinks?: ExploreLink[]
  footer?: React.ReactNode
  url: string
}

export function DarkHistoryScroll({
  items,
  cityName,
  citySlug,
  exploreLinks = [],
  footer,
  url
}: DarkHistoryScrollProps) {
  // Detect desktop viewport (1024px+)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // Render desktop layout for large screens
  if (isDesktop) {
    return (
      <DesktopDarkHistoryLayout
        items={items}
        cityName={cityName}
        citySlug={citySlug}
        exploreLinks={exploreLinks}
        footer={footer}
        url={url}
      />
    )
  }

  // Render mobile layout for small/medium screens
  return (
    <MobileDarkHistoryLayout
      items={items}
      cityName={cityName}
      citySlug={citySlug}
      exploreLinks={exploreLinks}
      footer={footer}
      url={url}
    />
  )
}
