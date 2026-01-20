'use client'

import { useEffect, useRef, ReactNode, useState } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

interface SmoothScrollProviderProps {
  children: ReactNode
}

// Check if device is mobile/touch-primary
function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false

  // Check for touch capability and screen size
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  const isSmallScreen = window.innerWidth < 768

  // Also check user agent for mobile devices
  const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  return (hasTouch && isSmallScreen) || mobileUA
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)
  const pathname = usePathname()
  // Initialize as true to prevent Lenis from starting on mobile during SSR/hydration
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Check if mobile on mount
    const mobile = isMobileDevice()
    setIsMobile(mobile)

    // Skip Lenis on mobile - native scrolling works better
    if (mobile) {
      // Ensure scroll is enabled on mobile
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
      document.documentElement.style.height = ''
      return
    }

    // Initialize Lenis with luxurious butter-smooth settings (desktop only)
    const lenis = new Lenis({
      duration: 1.8, // 1.8s for butter smooth feel (1.5-2.0s range)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
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

    // Cleanup on unmount
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      lenis.destroy()
      if (typeof window !== 'undefined') {
        delete (window as any).__lenis
      }
    }
  }, [])

  // Scroll to top smoothly on route change (desktop only)
  useEffect(() => {
    if (!isMobile && lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false })
    } else if (isMobile) {
      // Native scroll to top on mobile
      window.scrollTo(0, 0)
    }
  }, [pathname, isMobile])

  return <>{children}</>
}
