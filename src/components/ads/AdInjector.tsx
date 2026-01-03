'use client'

/**
 * Ad Injector Component
 *
 * Automatically injects ads into content based on placement strategy.
 * Handles header, in-content, and footer ads according to content type.
 */

import { UniversalAd, createAdSlot } from './UniversalAd'
import { adPlacements } from '@/lib/ads/config'
import type { ReactNode } from 'react'

interface AdInjectorProps {
  content: ReactNode[]
  contentType: 'article' | 'collection' | 'premium' | 'feed' | 'homepage'
  citySlug: string
  contentId?: string
}

export function AdInjector({
  content,
  contentType,
  citySlug,
  contentId = 'content',
}: AdInjectorProps) {
  const placement = adPlacements[contentType]
  if (!placement) return <>{content}</>

  const injectedContent: ReactNode[] = []
  let adCounter = 0

  content.forEach((block, index) => {
    // Add header ad
    if (placement.header && index === (placement.header.after || 0)) {
      injectedContent.push(
        <UniversalAd
          key={`ad-header-${adCounter++}`}
          slot={createAdSlot(
            `${citySlug}-${contentType}-${contentId}-header`,
            placement.header.size,
            { city: citySlug, type: contentType, position: 'header' }
          )}
          className="my-8"
        />
      )
    }

    // Add content block
    injectedContent.push(block)

    // Add in-content ads
    if (placement.inContent && placement.inContent.every) {
      const shouldInjectAd = (index + 1) % placement.inContent.every === 0
      const isNotLastItem = index < content.length - 1

      if (shouldInjectAd && isNotLastItem) {
        injectedContent.push(
          <UniversalAd
            key={`ad-content-${adCounter++}`}
            slot={createAdSlot(
              `${citySlug}-${contentType}-${contentId}-content-${index}`,
              placement.inContent.size,
              { city: citySlug, type: contentType, position: 'content' }
            )}
            className="my-8"
          />
        )
      }
    }
  })

  // Add footer ad
  if (placement.footer) {
    injectedContent.push(
      <UniversalAd
        key={`ad-footer-${adCounter++}`}
        slot={createAdSlot(
          `${citySlug}-${contentType}-${contentId}-footer`,
          placement.footer.size,
          { city: citySlug, type: contentType, position: 'footer' }
        )}
        className="my-8"
      />
    )
  }

  return <>{injectedContent}</>
}
