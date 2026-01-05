'use client'

import { motion } from 'framer-motion'
import { overlayVariants } from './animations'
import { CitiesNavigation } from './CitiesNavigation'
import { MenuFooter } from './MenuFooter'
import type { MenuOverlayProps } from './types'

export function MenuOverlay({ onClose }: MenuOverlayProps) {
  return (
    <motion.div
      id="premium-mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
      className="fixed inset-0 bg-[#f8f7f4] flex flex-col sm:hidden"
      style={{
        zIndex: 60,
      }}
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={(e) => {
        // Close menu if clicking the overlay background (not content)
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto overscroll-contain">
        <CitiesNavigation onClose={onClose} />
      </div>

      {/* Fixed footer with email */}
      <MenuFooter onClose={onClose} />
    </motion.div>
  )
}
