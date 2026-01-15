import type { AdSlotConfig, AdSize, AdFormat } from './types'

/**
 * Convenience function to create ad slot configs
 */
export function createAdSlot(
  id: string,
  size: AdSize,
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

/**
 * Create an interstitial ad slot (full-screen)
 */
export function createInterstitialSlot(
  id: string,
  targeting?: Record<string, string>
): AdSlotConfig {
  return {
    id: `interstitial-${id}`,
    size: 'responsive',
    networks: {
      primary: 'opsco',
      fallback: ['yieldlift', 'adsense', 'placeholder'],
    },
    targeting: { ...targeting, format: 'interstitial' },
    format: 'interstitial',
  }
}

/**
 * Create a sticky bottom banner ad slot
 */
export function createStickySlot(
  id: string,
  targeting?: Record<string, string>
): AdSlotConfig {
  return {
    id: `sticky-${id}`,
    size: 'banner', // 320x50 standard mobile banner
    networks: {
      primary: 'opsco',
      fallback: ['yieldlift', 'adsense', 'placeholder'],
    },
    targeting: { ...targeting, format: 'sticky-bottom' },
    format: 'sticky-bottom',
  }
}

/**
 * Create a drawer ad slot
 */
export function createDrawerSlot(
  id: string,
  targeting?: Record<string, string>
): AdSlotConfig {
  return {
    id: `drawer-${id}`,
    size: 'rectangle', // 300x250 medium rectangle
    networks: {
      primary: 'opsco',
      fallback: ['yieldlift', 'adsense', 'placeholder'],
    },
    targeting: { ...targeting, format: 'drawer' },
    format: 'drawer',
  }
}

/**
 * Create a sidebar ad slot
 */
export function createSidebarSlot(
  id: string,
  position: 'left' | 'right',
  size: 'skyscraper' | 'wide-skyscraper' = 'skyscraper',
  targeting?: Record<string, string>
): AdSlotConfig {
  return {
    id: `sidebar-${position}-${id}`,
    size,
    networks: {
      primary: 'opsco',
      fallback: ['yieldlift', 'adsense', 'placeholder'],
    },
    targeting: { ...targeting, format: 'sidebar', position },
    format: 'sidebar',
  }
}

/**
 * Create a map sidebar ad slot
 */
export function createMapSidebarSlot(
  id: string,
  targeting?: Record<string, string>
): AdSlotConfig {
  return {
    id: `map-sidebar-${id}`,
    size: 'rectangle', // 300x250 works well over map
    networks: {
      primary: 'opsco',
      fallback: ['yieldlift', 'adsense', 'placeholder'],
    },
    targeting: { ...targeting, format: 'map-sidebar' },
    format: 'map-sidebar',
  }
}
