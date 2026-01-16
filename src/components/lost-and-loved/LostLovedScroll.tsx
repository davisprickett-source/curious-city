'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import MobileLostLovedLayout from './MobileLostLovedLayout'
import DesktopLostLovedLayout from './DesktopLostLovedLayout'
import type { ExploreLink } from '../scrollytelling/ExploreCard'

interface LostLovedItem {
  id: string
  name: string
  description: string
  whyMissed: string
  neighborhood?: string
  yearsOpen?: string
  lastAddress?: string
  communityVoice?: string
  category?: string
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
  sources?: Array<{
    title: string
    url?: string
    publisher?: string
    author?: string
  }>
}

interface LostLovedScrollProps {
  items: LostLovedItem[]
  cityName: string
  exploreLinks?: ExploreLink[]
  footer?: React.ReactNode
  url: string
}

export default function LostLovedScroll({
  items,
  cityName,
  exploreLinks = [],
  footer,
  url
}: LostLovedScrollProps) {
  // Detect desktop viewport (1024px+)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // Render desktop layout for large screens
  if (isDesktop) {
    return (
      <DesktopLostLovedLayout
        items={items}
        cityName={cityName}
        exploreLinks={exploreLinks}
        footer={footer}
        url={url}
      />
    )
  }

  // Render mobile layout for small/medium screens
  return (
    <MobileLostLovedLayout
      items={items}
      cityName={cityName}
      exploreLinks={exploreLinks}
      footer={footer}
      url={url}
    />
  )
}
