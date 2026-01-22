'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'
import { AnimatedMenuButton } from './PremiumMobileMenu/AnimatedMenuButton'
import { MenuOverlay } from './PremiumMobileMenu/MenuOverlay'
import type { PremiumMobileMenuProps } from './PremiumMobileMenu/types'

export function PremiumMobileMenu({ currentCitySlug }: PremiumMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const buttonRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Track if component is mounted (for portal)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu
  const closeMenu = () => {
    setIsOpen(false)
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
      // Add class to body to indicate menu is open (used by CSS safeguards)
      document.body.classList.add('menu-open')

      // Disable body scroll - but NOT on mobile devices (they don't use Lenis)
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768

      if (!isMobile) {
        document.body.style.overflow = 'hidden'
      }

      // Try to stop Lenis if it exists (desktop only)
      const lenis = (window as any).__lenis
      if (lenis && typeof lenis.stop === 'function') {
        lenis.stop()
      }
    } else {
      // Remove menu-open class
      document.body.classList.remove('menu-open')

      // Re-enable body scroll
      document.body.style.overflow = ''

      // Try to start Lenis if it exists
      const lenis = (window as any).__lenis
      if (lenis && typeof lenis.start === 'function') {
        lenis.start()
      }
    }

    // CRITICAL FIX: Cleanup must ALWAYS run, regardless of isOpen state
    // When this effect unmounts or isOpen changes, we must reset overflow
    return () => {
      // ALWAYS remove menu-open class
      document.body.classList.remove('menu-open')

      // ALWAYS reset overflow on cleanup
      document.body.style.overflow = ''
      document.body.style.overflowY = ''

      // ALWAYS restart Lenis on cleanup
      const lenis = (window as any).__lenis
      if (lenis && typeof lenis.start === 'function') {
        lenis.start()
      }

      console.log('[PremiumMobileMenu] Cleanup: Reset body overflow and restarted Lenis')
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
  }, [isOpen]) // Re-run when menu opens/closes

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
    <>
      <div className="sm:hidden" ref={buttonRef}>
        <AnimatedMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {mounted && createPortal(
        <div ref={menuRef}>
          <AnimatePresence>
            {isOpen && <MenuOverlay onClose={closeMenu} currentCitySlug={currentCitySlug} />}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </>
  )
}
