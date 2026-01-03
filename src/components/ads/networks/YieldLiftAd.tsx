'use client'

/**
 * YieldLift Ad Network Component
 *
 * Renders YieldLift ads with proper initialization
 * Update scriptUrl in ads/config.ts with actual YieldLift CDN URL
 */

import { useEffect } from 'react'
import { getNetworkConfig } from '@/lib/ads/config'
import type { AdSlotConfig } from '@/lib/ads/types'

declare global {
  interface Window {
    YieldLift?: {
      displayAd: (config: any) => void
    }
  }
}

const sizeStyles = {
  banner: 'h-[50px]',
  rectangle: 'h-[250px]',
  leaderboard: 'h-[90px]',
  responsive: 'min-h-[50px]',
}

interface YieldLiftAdProps {
  slot: AdSlotConfig
  className?: string
}

export function YieldLiftAd({ slot, className = '' }: YieldLiftAdProps) {
  const config = getNetworkConfig('yieldlift')

  useEffect(() => {
    // Load YieldLift script if not already loaded
    if (!window.YieldLift && config.scriptUrl) {
      const script = document.createElement('script')
      script.src = config.scriptUrl
      script.async = true
      script.onload = () => {
        initializeAd()
      }
      document.head.appendChild(script)
    } else if (window.YieldLift) {
      initializeAd()
    }

    function initializeAd() {
      if (window.YieldLift) {
        window.YieldLift.displayAd({
          publisherId: config.publisherId,
          slotId: slot.id,
          size: slot.size,
          targeting: slot.targeting,
        })
      }
    }
  }, [slot.id, config])

  return (
    <div
      id={`yieldlift-ad-${slot.id}`}
      className={`w-full ${sizeStyles[slot.size]} ${className}`}
      data-yieldlift-slot={slot.id}
      data-yieldlift-size={slot.size}
    />
  )
}
