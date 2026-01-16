'use client'

import { StickyBottomAd } from './mobile/StickyBottomAd'

interface ArticleMobileAdsProps {
  pageId: string
  citySlug: string
}

export function ArticleMobileAds({ pageId, citySlug }: ArticleMobileAdsProps) {
  return (
    <StickyBottomAd
      pageId={pageId}
      targeting={{ city: citySlug, type: 'article' }}
    />
  )
}
