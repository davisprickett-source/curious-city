/**
 * Placeholder Ad Component
 *
 * Shows a placeholder when no ad network is configured.
 * Used during development and as final fallback.
 */

import type { AdSlotConfig } from '@/lib/ads/types'

const sizeStyles = {
  banner: 'h-[50px]',
  rectangle: 'h-[250px]',
  leaderboard: 'h-[90px]',
  responsive: 'min-h-[50px]',
}

interface PlaceholderAdProps {
  slot: AdSlotConfig
  className?: string
}

export function PlaceholderAd({ slot, className = '' }: PlaceholderAdProps) {
  return (
    <div
      className={`
        w-full bg-neutral-100 border border-dashed border-neutral-300
        rounded flex items-center justify-center
        ${sizeStyles[slot.size]} ${className}
      `}
      role="complementary"
      aria-label="Advertisement placeholder"
    >
      <span className="text-xs text-neutral-400 uppercase tracking-wider">
        Ad ({slot.size})
      </span>
    </div>
  )
}
