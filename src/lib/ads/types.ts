/**
 * Universal Ad System Types
 *
 * Defines types for multi-network ad support (OpsCo, YieldLift, AdSense, etc.)
 */

export type AdNetwork = 'opsco' | 'yieldlift' | 'adsense' | 'placeholder'

export interface AdNetworkConfig {
  network: AdNetwork
  enabled: boolean
  config: Record<string, any>
}

export interface AdSlotConfig {
  id: string
  size: 'banner' | 'rectangle' | 'leaderboard' | 'responsive'
  networks: {
    primary: AdNetwork
    fallback?: AdNetwork[]
  }
  targeting?: Record<string, string>
}

export interface AdPlacementRule {
  after?: number // Place ad after this index
  before?: number // Place ad before this index (-1 means before last item)
  every?: number // Place ad every N items
  size: 'banner' | 'rectangle' | 'leaderboard' | 'responsive'
}

export interface AdPlacementStrategy {
  header?: AdPlacementRule
  inContent?: AdPlacementRule
  footer?: AdPlacementRule
}
