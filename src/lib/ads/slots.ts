import type { AdSlotConfig } from './types'

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
