'use client'

import { useEffect } from 'react'

/**
 * Ensures body scroll is enabled on mount
 * Fixes issues where modals/menus leave body.style.overflow = 'hidden'
 * Particularly aggressive on mobile to prevent scroll lock
 */
export function EnsureScrollEnabled() {
  useEffect(() => {
    // Check if mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768

    console.log('[EnsureScrollEnabled] Component mounted, mobile:', isMobile)

    // Force enable scrolling immediately
    const enableScroll = () => {
      // Set overflow to visible/auto instead of empty string for more explicit control
      document.body.style.overflow = 'visible'
      document.body.style.overflowY = 'auto'
      document.body.style.overflowX = 'hidden'

      // Reset any inline height/position that might prevent scroll
      document.body.style.height = 'auto'
      document.body.style.maxHeight = 'none'
      document.body.style.minHeight = '100vh'
      document.body.style.position = 'static'

      // Reset html overflow as well
      document.documentElement.style.overflow = 'visible'
      document.documentElement.style.overflowY = 'auto'
      document.documentElement.style.height = 'auto'
      document.documentElement.style.maxHeight = 'none'

      // Remove any Lenis or scroll-locking classes
      document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped')
      document.body.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped', 'overflow-hidden', 'no-scroll')

      // Remove any data attributes that might indicate scroll lock
      document.body.removeAttribute('data-scroll-locked')
      document.documentElement.removeAttribute('data-scroll-locked')
    }

    // Enable scroll immediately
    enableScroll()

    // On mobile, be VERY aggressive - check frequently to combat any scripts
    if (isMobile) {
      let checkCount = 0
      const maxChecks = 20 // Check for 2 seconds

      console.log('[EnsureScrollEnabled] Starting aggressive scroll monitoring on mobile')

      const interval = setInterval(() => {
        // Check if overflow got set to hidden
        if (document.body.style.overflow === 'hidden' || document.body.style.overflowY === 'hidden') {
          console.warn('[EnsureScrollEnabled] Detected overflow:hidden on body, fixing...')
          enableScroll()
        }
        if (document.documentElement.style.overflow === 'hidden' || document.documentElement.style.overflowY === 'hidden') {
          console.warn('[EnsureScrollEnabled] Detected overflow:hidden on html, fixing...')
          enableScroll()
        }

        // Check if Lenis classes were added (shouldn't happen on mobile)
        if (document.body.classList.contains('lenis') || document.documentElement.classList.contains('lenis')) {
          console.warn('[EnsureScrollEnabled] Detected Lenis classes on mobile, removing...')
          enableScroll()
        }

        checkCount++
        if (checkCount >= maxChecks) {
          console.log('[EnsureScrollEnabled] Finished aggressive monitoring')
          clearInterval(interval)
        }
      }, 100)

      return () => {
        clearInterval(interval)
        console.log('[EnsureScrollEnabled] Cleanup')
      }
    } else {
      console.log('[EnsureScrollEnabled] Desktop detected, single cleanup only')
    }
  }, [])

  return null
}
