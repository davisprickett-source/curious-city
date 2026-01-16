'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import MobileCuriositiesLayout from './curiosities/MobileCuriositiesLayout'
import DesktopCuriositiesLayout from './curiosities/DesktopCuriositiesLayout'
import type { ExploreLink } from './scrollytelling/ExploreCard'

interface CuriosityItem {
  id: string
  title: string
  body: string
  category?: string
  year?: string
  image?: {
    src: string
    alt?: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt: string
    caption?: string
    credit?: string
  }>
  video?: {
    youtubeId: string
    title?: string
  }
  location?: {
    name: string
    url?: string
    stillExists?: boolean
  }
  source?: string
  sources?: Array<{
    type?: 'article' | 'book' | 'documentary' | 'podcast' | 'film' | 'video' | 'report' | 'other'
    title: string
    url?: string
  }>
}

interface CuriositiesScrollProps {
  curiosities: CuriosityItem[]
  cityName: string
  exploreLinks?: ExploreLink[]
  footer?: React.ReactNode
  url: string
}

export default function CuriositiesScroll({
  curiosities,
  cityName,
  exploreLinks = [],
  footer,
  url
}: CuriositiesScrollProps) {
  // Detect desktop viewport (1024px+)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // Render desktop layout for large screens
  if (isDesktop) {
    return (
      <DesktopCuriositiesLayout
        curiosities={curiosities}
        cityName={cityName}
        exploreLinks={exploreLinks}
        footer={footer}
        url={url}
      />
    )
  }

  // Render mobile layout for small/medium screens
  return (
    <MobileCuriositiesLayout
      curiosities={curiosities}
      cityName={cityName}
      exploreLinks={exploreLinks}
      footer={footer}
      url={url}
    />
  )
}
