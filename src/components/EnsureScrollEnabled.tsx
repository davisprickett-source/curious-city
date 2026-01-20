'use client'

import { useEffect } from 'react'

/**
 * Ensures body scroll is enabled on mount
 * Fixes issues where modals/menus leave body.style.overflow = 'hidden'
 */
export function EnsureScrollEnabled() {
  useEffect(() => {
    // Force reset body overflow on mount
    document.body.style.overflow = ''

    // Also reset any inline height/position that might prevent scroll
    document.body.style.height = ''
    document.body.style.position = ''

    // Reset html overflow as well
    document.documentElement.style.overflow = ''
    document.documentElement.style.height = ''
  }, [])

  return null
}
