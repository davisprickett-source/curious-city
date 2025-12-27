'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'

/**
 * Hook to access the global Lenis instance
 */
export function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // Access Lenis instance from window (set by SmoothScrollProvider)
    const lenisInstance = (window as any).__lenis as Lenis | undefined
    if (lenisInstance) {
      setLenis(lenisInstance)
    }
  }, [])

  return lenis
}

/**
 * Utility function to smoothly scroll to an element or selector
 * @param target - CSS selector string or HTMLElement
 * @param offset - Offset in pixels (useful for sticky headers)
 */
export function scrollToElement(target: string | HTMLElement, offset = 0) {
  const lenis = (window as any).__lenis as Lenis | undefined
  if (!lenis) {
    // Fallback to native scroll if Lenis not available
    const element = typeof target === 'string' ? document.querySelector(target) : target
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    return
  }

  lenis.scrollTo(target, {
    offset,
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })
}
