'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

// Lazy import Lenis only when needed (desktop only)
let Lenis: any = null

interface SmoothScrollProviderProps {
  children: ReactNode
}

// Check if device is mobile/touch-primary
// Be conservative - if in doubt, treat as mobile to preserve native scrolling
function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return true // SSR: assume mobile for safety

  // Check for touch capability and screen size
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  const isSmallScreen = window.innerWidth < 768

  // Also check user agent for mobile devices
  const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  // Conservative approach: any indication of mobile = use native scroll
  return hasTouch || isSmallScreen || mobileUA
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<any>(null)
  const rafRef = useRef<number | null>(null)
  const isMobileRef = useRef<boolean>(true) // Track if mobile
  const pathname = usePathname()

  useEffect(() => {
    // Check if mobile on mount
    const mobile = isMobileDevice()
    isMobileRef.current = mobile

    // Skip Lenis entirely on mobile - native scrolling works better
    if (mobile) {
      // Ensure scroll is enabled on mobile - be very aggressive
      document.body.style.overflow = 'visible'
      document.body.style.overflowY = 'auto'
      document.body.style.height = 'auto'
      document.body.style.position = 'static'
      document.documentElement.style.overflow = 'visible'
      document.documentElement.style.overflowY = 'auto'
      document.documentElement.style.height = 'auto'

      // Remove any Lenis classes that might have been added
      document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling')
      document.body.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling')

      console.log('[SmoothScroll] Mobile detected - using native scroll')
      return
    }

    // Desktop only: dynamically import and initialize Lenis
    console.log('[SmoothScroll] Desktop detected - loading Lenis')
    import('lenis').then((module) => {
      const LenisClass = module.default

      // Initialize Lenis with luxurious butter-smooth settings (desktop only)
      const lenis = new LenisClass({
        duration: 1.8, // 1.8s for butter smooth feel (1.5-2.0s range)
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.8, // Slower wheel scroll for desktop luxury feel
        infinite: false,
        autoResize: true,
      })

      lenisRef.current = lenis

      // Expose Lenis instance globally for anchor navigation
      if (typeof window !== 'undefined') {
        ;(window as any).__lenis = lenis
      }

      // RequestAnimationFrame loop for 60fps smooth updates
      function raf(time: number) {
        lenis.raf(time)
        rafRef.current = requestAnimationFrame(raf)
      }
      rafRef.current = requestAnimationFrame(raf)
    })

    // Cleanup on unmount
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
      if (typeof window !== 'undefined') {
        delete (window as any).__lenis
      }
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    // Small delay to ensure page has loaded
    const timeoutId = setTimeout(() => {
      if (!isMobileRef.current && lenisRef.current) {
        // Desktop: use Lenis smooth scroll
        lenisRef.current.scrollTo(0, { immediate: false })
      } else if (isMobileRef.current) {
        // Mobile: use native scroll (but don't force it - let browser handle it)
        // Removed window.scrollTo to prevent interfering with natural scroll restoration
        console.log('[SmoothScroll] Route changed on mobile - allowing natural scroll behavior')
      }
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return <>{children}</>
}
