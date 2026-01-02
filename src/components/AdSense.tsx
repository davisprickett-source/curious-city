'use client'

import { useEffect } from 'react'
import { trackAdView } from '@/lib/analytics'

interface AdSenseProps {
  slot: string
  size?: 'banner' | 'rectangle' | 'leaderboard' | 'responsive'
  className?: string
  format?: 'auto' | 'fluid' | 'rectangle'
}

const sizeStyles = {
  banner: 'h-[50px]',      // Mobile banner (320x50)
  rectangle: 'h-[250px]',   // Medium rectangle (300x250)
  leaderboard: 'h-[90px]',  // Leaderboard (728x90)
  responsive: 'min-h-[50px]', // Responsive ad
}

const sizeFormats = {
  banner: { width: 320, height: 50 },
  rectangle: { width: 300, height: 250 },
  leaderboard: { width: 728, height: 90 },
  responsive: 'auto',
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export function AdSense({
  slot,
  size = 'responsive',
  className = '',
  format = 'auto'
}: AdSenseProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID

  useEffect(() => {
    // Track ad view for analytics
    trackAdView(`adsense-${slot}-${size}`)

    // Initialize AdSense
    try {
      if (typeof window !== 'undefined' && clientId) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [slot, size, clientId])

  // If no client ID is set, show placeholder
  if (!clientId) {
    return (
      <div
        className={`
          w-full bg-neutral-100 border border-dashed border-neutral-300
          rounded flex items-center justify-center
          ${sizeStyles[size]} ${className}
        `}
        role="complementary"
        aria-label="Advertisement placeholder"
      >
        <span className="text-xs text-neutral-400 uppercase tracking-wider">
          Ad Slot: {slot}
        </span>
      </div>
    )
  }

  const sizeFormat = sizeFormats[size]
  const isResponsive = size === 'responsive' || sizeFormat === 'auto'

  const adStyle = isResponsive
    ? { display: 'block', textAlign: 'center' as const }
    : {
        display: 'inline-block',
        width: typeof sizeFormat === 'object' ? `${sizeFormat.width}px` : undefined,
        height: typeof sizeFormat === 'object' ? `${sizeFormat.height}px` : undefined,
      }

  return (
    <div className={`w-full ${sizeStyles[size]} ${className}`}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={isResponsive ? format : undefined}
        data-full-width-responsive={isResponsive ? 'true' : undefined}
      />
    </div>
  )
}

// Convenience components for common ad sizes
export function BannerAd({ slot, className }: { slot: string; className?: string }) {
  return <AdSense slot={slot} size="banner" className={className} />
}

export function RectangleAd({ slot, className }: { slot: string; className?: string }) {
  return <AdSense slot={slot} size="rectangle" className={className} />
}

export function LeaderboardAd({ slot, className }: { slot: string; className?: string }) {
  return <AdSense slot={slot} size="leaderboard" className={className} />
}

export function ResponsiveAd({ slot, className, format = 'auto' }: { slot: string; className?: string; format?: 'auto' | 'fluid' | 'rectangle' }) {
  return <AdSense slot={slot} size="responsive" format={format} className={className} />
}
