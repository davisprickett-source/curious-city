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

    // Force reset body overflow on mount
    document.body.style.overflow = ''
    document.body.style.overflowY = ''
    document.body.style.overflowX = ''

    // Also reset any inline height/position that might prevent scroll
    document.body.style.height = ''
    document.body.style.maxHeight = ''
    document.body.style.position = ''

    // Reset html overflow as well
    document.documentElement.style.overflow = ''
    document.documentElement.style.overflowY = ''
    document.documentElement.style.height = ''
    document.documentElement.style.maxHeight = ''

    // On mobile, be extra aggressive - check every 100ms for the first second
    // to combat any scripts that might be setting overflow hidden
    if (isMobile) {
      let checkCount = 0
      const maxChecks = 10

      const interval = setInterval(() => {
        if (document.body.style.overflow === 'hidden') {
          document.body.style.overflow = ''
        }
        if (document.documentElement.style.overflow === 'hidden') {
          document.documentElement.style.overflow = ''
        }

        checkCount++
        if (checkCount >= maxChecks) {
          clearInterval(interval)
        }
      }, 100)

      return () => clearInterval(interval)
    }
  }, [])

  return null
}
