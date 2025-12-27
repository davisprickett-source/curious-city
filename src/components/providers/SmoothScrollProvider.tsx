'use client'

import { useEffect, useRef, ReactNode } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Initialize Lenis with luxurious butter-smooth settings
    const lenis = new Lenis({
      duration: 1.8, // 1.8s for butter smooth feel (1.5-2.0s range)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5, // Lighter touch sensitivity for mobile performance
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

  // Scroll to top smoothly on route change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: false })
  }, [pathname])

  return <>{children}</>
}
