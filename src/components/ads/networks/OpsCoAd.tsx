'use client'

/**
 * OpsCo Ad Network Component
 *
 * Renders OpsCo ads with proper initialization
 * Update scriptUrl in ads/config.ts with actual OpsCo CDN URL
 */

import { useEffect } from 'react'
import { getNetworkConfig } from '@/lib/ads/config'
import type { AdSlotConfig } from '@/lib/ads/types'

declare global {
  interface Window {
    OpsCoAds?: {
      push: (config: any) => void
    }
  }
}

const sizeStyles = {
  banner: 'h-[50px]',
  rectangle: 'h-[250px]',
  leaderboard: 'h-[90px]',
  responsive: 'min-h-[50px]',
}

interface OpsCoAdProps {
  slot: AdSlotConfig
  className?: string
}

export function OpsCoAd({ slot, className = '' }: OpsCoAdProps) {
  const config = getNetworkConfig('opsco')

  useEffect(() => {
    // Load OpsCo script if not already loaded
    if (!window.OpsCoAds && config.scriptUrl) {
      const script = document.createElement('script')
      script.src = config.scriptUrl
      script.async = true
      script.onload = () => {
        initializeAd()
      }
      document.head.appendChild(script)
    } else if (window.OpsCoAds) {
      initializeAd()
    }

    function initializeAd() {
      if (window.OpsCoAds) {
        window.OpsCoAds.push({
          siteId: config.siteId,
          slotId: slot.id,
          size: slot.size,
          targeting: slot.targeting,
        })
      }
    }
  }, [slot.id, config])

  return (
    <div
      id={`opsco-ad-${slot.id}`}
      className={`w-full ${sizeStyles[slot.size]} ${className}`}
      data-opsco-slot={slot.id}
      data-opsco-size={slot.size}
    />
  )
}
