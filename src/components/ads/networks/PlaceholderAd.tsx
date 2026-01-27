/**
 * Placeholder Ad Component
 *
 * In production, returns null to avoid blank space when no ad network serves.
 * In development, shows a visible placeholder for layout testing.
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
  // In production, don't show placeholder - avoid blank spaces
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  // In development, show placeholder for layout testing
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
