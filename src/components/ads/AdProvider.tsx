'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react'
import { mobileAdConfig } from '@/lib/ads/config'
import type { AdContextState } from '@/lib/ads/types'

// Session storage keys
const STORAGE_KEYS = {
  interstitialCount: 'ad_interstitial_count',
  lastInterstitialTime: 'ad_last_interstitial_time',
  stickyDismissed: 'ad_sticky_dismissed',
  drawerCount: 'ad_drawer_count',
  lastDrawerTime: 'ad_last_drawer_time',
}

interface AdContextValue {
  // State
  state: AdContextState

  // Interstitial actions
  showInterstitial: () => boolean // Returns true if allowed
  hideInterstitial: () => void
  isInterstitialVisible: boolean

  // Sticky actions
  dismissSticky: () => void
  isStickyVisible: boolean

  // Drawer actions
  showDrawer: () => boolean // Returns true if allowed
  hideDrawer: () => void
  isDrawerVisible: boolean

  // Page lifecycle
  resetPageState: () => void
}

const AdContext = createContext<AdContextValue | null>(null)

export function useAdContext() {
  const context = useContext(AdContext)
  if (!context) {
    throw new Error('useAdContext must be used within an AdProvider')
  }
  return context
}

// Safe context hook that returns null if not within provider
export function useAdContextSafe() {
  return useContext(AdContext)
}

interface AdProviderProps {
  children: ReactNode
}

export function AdProvider({ children }: AdProviderProps) {
  // Visibility states
  const [isInterstitialVisible, setIsInterstitialVisible] = useState(false)
  const [isStickyVisible, setIsStickyVisible] = useState(false)
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  // Tracking state
  const [state, setState] = useState<AdContextState>({
    interstitialShownThisPage: false,
    interstitialsShownThisSession: 0,
    stickyDismissed: false,
    drawerShownThisPage: false,
    drawersShownThisSession: 0,
    lastInterstitialTime: null,
    lastDrawerTime: null,
    isMobile: false,
  })

  // Initialize state from session storage
  useEffect(() => {
    const isMobile = window.innerWidth < 640

    // Load session state
    const interstitialCount = parseInt(
      sessionStorage.getItem(STORAGE_KEYS.interstitialCount) || '0',
      10
    )
    const lastInterstitialTime = sessionStorage.getItem(STORAGE_KEYS.lastInterstitialTime)
    const stickyDismissed =
      sessionStorage.getItem(STORAGE_KEYS.stickyDismissed) === 'true'
    const drawerCount = parseInt(
      sessionStorage.getItem(STORAGE_KEYS.drawerCount) || '0',
      10
    )
    const lastDrawerTime = sessionStorage.getItem(STORAGE_KEYS.lastDrawerTime)

    setState((prev) => ({
      ...prev,
      isMobile,
      interstitialsShownThisSession: interstitialCount,
      lastInterstitialTime: lastInterstitialTime ? parseInt(lastInterstitialTime, 10) : null,
      stickyDismissed,
      drawersShownThisSession: drawerCount,
      lastDrawerTime: lastDrawerTime ? parseInt(lastDrawerTime, 10) : null,
    }))

    // Show sticky after configured delay (mobile only)
    if (isMobile && mobileAdConfig.sticky.enabled && !stickyDismissed) {
      const delay = mobileAdConfig.sticky.showAfter.value * 1000
      const timer = setTimeout(() => {
        setIsStickyVisible(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [])

  // Check if interstitial can be shown based on frequency caps
  const canShowInterstitial = useCallback(() => {
    const { frequencyCap } = mobileAdConfig.interstitial
    const now = Date.now()

    // Check page limit
    if (state.interstitialShownThisPage) {
      return false
    }

    // Check session limit
    if (state.interstitialsShownThisSession >= frequencyCap.perSession) {
      return false
    }

    // Check cooldown
    if (state.lastInterstitialTime) {
      const cooldownMs = frequencyCap.cooldownMinutes * 60 * 1000
      if (now - state.lastInterstitialTime < cooldownMs) {
        return false
      }
    }

    return true
  }, [state])

  // Check if drawer can be shown based on frequency caps
  const canShowDrawer = useCallback(() => {
    const { frequencyCap } = mobileAdConfig.drawer
    const now = Date.now()

    // Check page limit
    if (state.drawerShownThisPage) {
      return false
    }

    // Check session limit
    if (state.drawersShownThisSession >= frequencyCap.perSession) {
      return false
    }

    // Check cooldown
    if (state.lastDrawerTime) {
      const cooldownMs = frequencyCap.cooldownMinutes * 60 * 1000
      if (now - state.lastDrawerTime < cooldownMs) {
        return false
      }
    }

    return true
  }, [state])

  const showInterstitial = useCallback(() => {
    if (!mobileAdConfig.interstitial.enabled || !state.isMobile) {
      return false
    }

    if (!canShowInterstitial()) {
      return false
    }

    const now = Date.now()
    const newCount = state.interstitialsShownThisSession + 1

    // Update session storage
    sessionStorage.setItem(STORAGE_KEYS.interstitialCount, newCount.toString())
    sessionStorage.setItem(STORAGE_KEYS.lastInterstitialTime, now.toString())

    // Update state
    setState((prev) => ({
      ...prev,
      interstitialShownThisPage: true,
      interstitialsShownThisSession: newCount,
      lastInterstitialTime: now,
    }))

    setIsInterstitialVisible(true)
    return true
  }, [state.isMobile, state.interstitialsShownThisSession, canShowInterstitial])

  const hideInterstitial = useCallback(() => {
    setIsInterstitialVisible(false)
  }, [])

  const dismissSticky = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEYS.stickyDismissed, 'true')
    setState((prev) => ({ ...prev, stickyDismissed: true }))
    setIsStickyVisible(false)
  }, [])

  const showDrawer = useCallback(() => {
    if (!mobileAdConfig.drawer.enabled || !state.isMobile) {
      return false
    }

    if (!canShowDrawer()) {
      return false
    }

    const now = Date.now()
    const newCount = state.drawersShownThisSession + 1

    // Update session storage
    sessionStorage.setItem(STORAGE_KEYS.drawerCount, newCount.toString())
    sessionStorage.setItem(STORAGE_KEYS.lastDrawerTime, now.toString())

    // Update state
    setState((prev) => ({
      ...prev,
      drawerShownThisPage: true,
      drawersShownThisSession: newCount,
      lastDrawerTime: now,
    }))

    setIsDrawerVisible(true)
    return true
  }, [state.isMobile, state.drawersShownThisSession, canShowDrawer])

  const hideDrawer = useCallback(() => {
    setIsDrawerVisible(false)
  }, [])

  // Reset page-specific state (call on route change)
  const resetPageState = useCallback(() => {
    setState((prev) => ({
      ...prev,
      interstitialShownThisPage: false,
      drawerShownThisPage: false,
    }))
    setIsInterstitialVisible(false)
    setIsDrawerVisible(false)
  }, [])

  const value: AdContextValue = {
    state,
    showInterstitial,
    hideInterstitial,
    isInterstitialVisible,
    dismissSticky,
    isStickyVisible,
    showDrawer,
    hideDrawer,
    isDrawerVisible,
    resetPageState,
  }

  return <AdContext.Provider value={value}>{children}</AdContext.Provider>
}
