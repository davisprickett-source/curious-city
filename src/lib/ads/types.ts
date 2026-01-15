/**
 * Universal Ad System Types
 *
 * Defines types for multi-network ad support (OpsCo, YieldLift, AdSense, etc.)
 */

export type AdNetwork = 'opsco' | 'yieldlift' | 'adsense' | 'placeholder'

export type AdSize = 'banner' | 'rectangle' | 'leaderboard' | 'responsive' | 'skyscraper' | 'wide-skyscraper'

export type AdFormat =
  | 'in-content'
  | 'interstitial'
  | 'sticky-bottom'
  | 'drawer'
  | 'sidebar'
  | 'map-sidebar'

export interface AdNetworkConfig {
  network: AdNetwork
  enabled: boolean
  config: Record<string, any>
}

export interface AdSlotConfig {
  id: string
  size: AdSize
  networks: {
    primary: AdNetwork
    fallback?: AdNetwork[]
  }
  targeting?: Record<string, string>
  format?: AdFormat
}

export interface AdPlacementRule {
  after?: number // Place ad after this index
  before?: number // Place ad before this index (-1 means before last item)
  every?: number // Place ad every N items
  size: AdSize
}

export interface AdPlacementStrategy {
  header?: AdPlacementRule
  inContent?: AdPlacementRule
  footer?: AdPlacementRule
}

// Ad trigger types for mobile ads
export type AdTriggerType = 'page-load' | 'scroll-depth' | 'time-on-page' | 'item-count' | 'navigation'

export interface AdTriggerConfig {
  type: AdTriggerType
  value: number // percentage for scroll-depth, seconds for time-on-page, count for item-count
  delay?: number // ms before showing after trigger
}

export interface FrequencyCapConfig {
  perSession: number
  perPage: number
  cooldownMinutes: number
}

// Mobile ad configuration
export interface MobileAdConfig {
  interstitial: {
    enabled: boolean
    triggers: AdTriggerConfig[]
    countdownSeconds: number
    frequencyCap: FrequencyCapConfig
  }
  sticky: {
    enabled: boolean
    height: number
    dismissible: boolean
    showAfter: AdTriggerConfig
  }
  drawer: {
    enabled: boolean
    triggers: AdTriggerConfig[]
    frequencyCap: FrequencyCapConfig
  }
}

// Desktop ad configuration
export interface DesktopAdConfig {
  sidebars: {
    enabled: boolean
    positions: ('left' | 'right')[]
    minViewportWidth: number
    size: 'skyscraper' | 'wide-skyscraper' | 'rectangle'
  }
  mapSidebar: {
    enabled: boolean
    position: 'left' | 'right'
    minViewportWidth: number
  }
}

// Ad context state for AdProvider
export interface AdContextState {
  // Tracking
  interstitialShownThisPage: boolean
  interstitialsShownThisSession: number
  stickyDismissed: boolean
  drawerShownThisPage: boolean
  drawersShownThisSession: number
  lastInterstitialTime: number | null
  lastDrawerTime: number | null

  // Device info
  isMobile: boolean
}
