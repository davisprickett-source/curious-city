'use client'

/**
 * Universal Ad Component
 *
 * Automatically selects the best ad network based on availability and fallback logic.
 * Supports OpsCo, YieldLift, AdSense, and placeholder ads.
 */

import { useEffect } from 'react'
import { getActiveNetwork } from '@/lib/ads/config'
import { trackAdImpression } from '@/lib/analytics'
import type { AdSlotConfig } from '@/lib/ads/types'
import { AdSenseAd } from './networks/AdSenseAd'
import { OpsCoAd } from './networks/OpsCoAd'
import { YieldLiftAd } from './networks/YieldLiftAd'
import { PlaceholderAd } from './networks/PlaceholderAd'

interface UniversalAdProps {
  slot: AdSlotConfig
  className?: string
}

export function UniversalAd({ slot, className }: UniversalAdProps) {
  const activeNetwork = getActiveNetwork(
    slot.networks.primary,
    slot.networks.fallback || []
  )

  // Track ad impression
  useEffect(() => {
    trackAdImpression({
      slotId: slot.id,
      network: activeNetwork,
      size: slot.size,
    })
  }, [slot.id, activeNetwork, slot.size])

  // Render appropriate network component
  switch (activeNetwork) {
    case 'adsense':
      return <AdSenseAd slot={slot} className={className} />
    case 'opsco':
      return <OpsCoAd slot={slot} className={className} />
    case 'yieldlift':
      return <YieldLiftAd slot={slot} className={className} />
    default:
      return <PlaceholderAd slot={slot} className={className} />
  }
}

/**
 * Convenience function to create ad slot configs
 */
export function createAdSlot(
  id: string,
  size: AdSlotConfig['size'],
  targeting?: Record<string, string>
): AdSlotConfig {
  return {
    id,
    size,
    networks: {
      primary: 'opsco',
      fallback: ['yieldlift', 'adsense', 'placeholder'],
    },
    targeting,
  }
}
