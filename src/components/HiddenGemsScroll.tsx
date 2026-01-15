'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import MobileHiddenGemsLayout from './hidden-gems/MobileHiddenGemsLayout'
import DesktopHiddenGemsLayout from './hidden-gems/DesktopHiddenGemsLayout'
import type { ExploreLink } from './scrollytelling/ExploreCard'

interface HiddenGemItem {
  id: string
  name: string
  description: string
  category?: string
  address?: string
  website?: string
  phone?: string
  hours?: string
  price?: string
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
  coordinates?: {
    lat: number
    lng: number
  }
}

interface HiddenGemsScrollProps {
  gems: HiddenGemItem[]
  cityName: string
  exploreLinks?: ExploreLink[]
  footer?: React.ReactNode
  url: string
}

export default function HiddenGemsScroll({
  gems,
  cityName,
  exploreLinks = [],
  footer,
  url
}: HiddenGemsScrollProps) {
  // Detect desktop viewport (1024px+)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // Render desktop layout for large screens
  if (isDesktop) {
    return (
      <DesktopHiddenGemsLayout
        gems={gems}
        cityName={cityName}
        exploreLinks={exploreLinks}
        footer={footer}
        url={url}
      />
    )
  }

  // Render mobile layout for small/medium screens
  return (
    <MobileHiddenGemsLayout
      gems={gems}
      cityName={cityName}
      exploreLinks={exploreLinks}
      footer={footer}
      url={url}
    />
  )
}
