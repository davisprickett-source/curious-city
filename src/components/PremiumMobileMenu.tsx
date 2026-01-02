'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AnimatedMenuButton } from './PremiumMobileMenu/AnimatedMenuButton'
import { MenuOverlay } from './PremiumMobileMenu/MenuOverlay'
import type { PremiumMobileMenuProps, NavigationLevel } from './PremiumMobileMenu/types'

export function PremiumMobileMenu({ currentCitySlug }: PremiumMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [navigationLevel, setNavigationLevel] = useState<NavigationLevel>('cities')
  const [selectedCity, setSelectedCity] = useState<string | null>(currentCitySlug || null)

  const buttonRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle navigation between levels
  const handleNavigate = (level: NavigationLevel, citySlug?: string) => {
    setNavigationLevel(level)
    if (citySlug) {
      setSelectedCity(citySlug)
    }
  }

  // Close menu and reset state
  const closeMenu = () => {
    setIsOpen(false)
    // Reset to cities list after animation completes
    setTimeout(() => {
      setNavigationLevel('cities')
      setSelectedCity(null)
    }, 400) // Match overlay exit duration
  }

  // Handle Escape key to close menu
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
        // Return focus to hamburger button
        const button = buttonRef.current?.querySelector('button')
        button?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll
      document.body.style.overflow = 'hidden'

      // Try to stop Lenis if it exists
      const lenis = (window as any).lenis
      if (lenis && typeof lenis.stop === 'function') {
        lenis.stop()
      }
    } else {
      // Re-enable body scroll
      document.body.style.overflow = ''

      // Try to start Lenis if it exists
      const lenis = (window as any).lenis
      if (lenis && typeof lenis.start === 'function') {
        lenis.start()
      }
    }

    return () => {
      document.body.style.overflow = ''
      const lenis = (window as any).lenis
      if (lenis && typeof lenis.start === 'function') {
        lenis.start()
      }
    }
  }, [isOpen])

  // Focus trap within menu
  useEffect(() => {
    if (!isOpen) return

    const menuElement = menuRef.current
    if (!menuElement) return

    // Small delay to allow menu to render
    const timeoutId = setTimeout(() => {
      const focusableElements = menuElement.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )

      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      // Focus first element
      firstElement?.focus()

      // Trap focus within menu
      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        if (e.shiftKey) {
          // Shift + Tab (backward)
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          // Tab (forward)
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }

      document.addEventListener('keydown', handleTab)
      return () => document.removeEventListener('keydown', handleTab)
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [isOpen, navigationLevel]) // Re-run when navigation level changes

  // Prevent iOS overscroll/bounce
  useEffect(() => {
    if (!isOpen) return

    const preventScroll = (e: TouchEvent) => {
      const target = e.target as HTMLElement
      const scrollContainer = menuRef.current

      // Allow scroll only within menu container
      if (scrollContainer && !scrollContainer.contains(target)) {
        e.preventDefault()
      }
    }

    document.addEventListener('touchmove', preventScroll, { passive: false })
    return () => document.removeEventListener('touchmove', preventScroll)
  }, [isOpen])

  return (
    <div className="sm:hidden" ref={buttonRef}>
      <AnimatedMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      <div ref={menuRef}>
        <AnimatePresence>
          {isOpen && (
            <MenuOverlay
              onClose={closeMenu}
              navigationLevel={navigationLevel}
              onNavigate={handleNavigate}
              selectedCity={selectedCity}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
