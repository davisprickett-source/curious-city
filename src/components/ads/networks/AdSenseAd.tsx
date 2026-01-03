'use client'

/**
 * Google AdSense Ad Component
 *
 * Renders Google AdSense ads with proper initialization and error handling
 */

import { useEffect } from 'react'
import { getNetworkConfig } from '@/lib/ads/config'
import type { AdSlotConfig } from '@/lib/ads/types'

const sizeStyles = {
  banner: 'h-[50px]',
  rectangle: 'h-[250px]',
  leaderboard: 'h-[90px]',
  responsive: 'min-h-[50px]',
}

const sizeFormats = {
  banner: { width: 320, height: 50 },
  rectangle: { width: 300, height: 250 },
  leaderboard: { width: 728, height: 90 },
  responsive: 'auto' as const,
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

interface AdSenseAdProps {
  slot: AdSlotConfig
  className?: string
}

export function AdSenseAd({ slot, className = '' }: AdSenseAdProps) {
  const config = getNetworkConfig('adsense')
  const clientId = config.clientId

  useEffect(() => {
    // Initialize AdSense
    try {
      if (typeof window !== 'undefined' && clientId) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [slot.id, clientId])

  if (!clientId) {
    console.warn('AdSense client ID not configured')
    return null
  }

  const sizeFormat = sizeFormats[slot.size]
  const isResponsive = slot.size === 'responsive' || sizeFormat === 'auto'

  const adStyle = isResponsive
    ? { display: 'block', textAlign: 'center' as const }
    : {
        display: 'inline-block',
        width: typeof sizeFormat === 'object' ? `${sizeFormat.width}px` : undefined,
        height: typeof sizeFormat === 'object' ? `${sizeFormat.height}px` : undefined,
      }

  return (
    <div className={`w-full ${sizeStyles[slot.size]} ${className}`}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={clientId}
        data-ad-slot={slot.id}
        data-ad-format={isResponsive ? 'auto' : undefined}
        data-full-width-responsive={isResponsive ? 'true' : undefined}
      />
    </div>
  )
}
