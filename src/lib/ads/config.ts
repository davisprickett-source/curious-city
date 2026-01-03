/**
 * Universal Ad System Configuration
 *
 * Central configuration for all ad networks and placement strategies
 */

import type { AdNetwork, AdNetworkConfig, AdPlacementStrategy } from './types'

/**
 * Ad Network Configurations
 *
 * Each network is enabled if its environment variable is set
 */
export const adNetworkConfigs: Record<AdNetwork, AdNetworkConfig> = {
  opsco: {
    network: 'opsco',
    enabled: !!process.env.NEXT_PUBLIC_OPSCO_SITE_ID,
    config: {
      siteId: process.env.NEXT_PUBLIC_OPSCO_SITE_ID,
      scriptUrl: 'https://cdn.opsco.network/ads.js', // Update with actual URL
    },
  },
  yieldlift: {
    network: 'yieldlift',
    enabled: !!process.env.NEXT_PUBLIC_YIELDLIFT_PUBLISHER_ID,
    config: {
      publisherId: process.env.NEXT_PUBLIC_YIELDLIFT_PUBLISHER_ID,
      scriptUrl: 'https://cdn.yieldlift.com/yl.js', // Update with actual URL
    },
  },
  adsense: {
    network: 'adsense',
    enabled: !!process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
    config: {
      clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
    },
  },
  placeholder: {
    network: 'placeholder',
    enabled: true, // Always enabled as fallback
    config: {},
  },
}

/**
 * Ad Placement Strategies by Content Type
 *
 * Defines where ads should appear in different types of content
 */
export const adPlacements: Record<string, AdPlacementStrategy> = {
  // Article pages: More ads for higher revenue
  article: {
    header: {
      after: 0, // After title/intro
      size: 'leaderboard',
    },
    inContent: {
      every: 5, // Every 5 blocks (paragraphs, images, etc.)
      size: 'rectangle',
    },
    footer: {
      before: -1, // Before footer
      size: 'banner',
    },
  },

  // Collection pages (curiosities, dark history, etc.): Moderate ad density
  collection: {
    header: {
      after: 0,
      size: 'banner',
    },
    inContent: {
      every: 8, // Every 8 items
      size: 'rectangle',
    },
    footer: {
      before: -1,
      size: 'banner',
    },
  },

  // Premium content: Minimal ads to preserve experience
  premium: {
    footer: {
      before: -1,
      size: 'banner',
    },
  },

  // Feed pages: Ads between feed items
  feed: {
    header: {
      after: 0,
      size: 'leaderboard',
    },
    inContent: {
      every: 6, // Every 6 feed items
      size: 'rectangle',
    },
  },

  // City homepage: Subtle ad placement
  homepage: {
    header: {
      after: 1, // After hero section
      size: 'banner',
    },
    inContent: {
      every: 10,
      size: 'rectangle',
    },
  },
}

/**
 * Get active ad network based on priority
 *
 * Returns the first enabled network from the priority list
 */
export function getActiveNetwork(
  primary: AdNetwork,
  fallback: AdNetwork[] = []
): AdNetwork {
  // Check primary network first
  if (adNetworkConfigs[primary]?.enabled) {
    return primary
  }

  // Try fallback networks in order
  for (const network of fallback) {
    if (adNetworkConfigs[network]?.enabled) {
      return network
    }
  }

  // Default to placeholder
  return 'placeholder'
}

/**
 * Get network-specific configuration
 */
export function getNetworkConfig(network: AdNetwork): AdNetworkConfig['config'] {
  return adNetworkConfigs[network]?.config || {}
}
