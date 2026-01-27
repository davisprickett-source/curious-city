'use client'

import { useEffect } from 'react'

/**
 * Ensures body scroll is enabled on mount
 * Fixes issues where modals/menus leave body.style.overflow = 'hidden'
 * Light-touch approach - CSS handles most of the work via !important rules
 */
export function EnsureScrollEnabled() {
  useEffect(() => {
    // Check if mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768

    // On mobile, just clear any inline styles that might block scroll
    // Let CSS !important rules handle the rest
    if (isMobile) {
      // Clear inline styles that might block scroll (let CSS take over)
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('overflow-y')
      document.body.style.removeProperty('height')
      document.body.style.removeProperty('position')
      document.documentElement.style.removeProperty('overflow')
      document.documentElement.style.removeProperty('overflow-y')
      document.documentElement.style.removeProperty('height')

      // Remove any Lenis classes (shouldn't be there on mobile)
      document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped')
      document.body.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped')
    }
  }, [])

  return null
}
