'use client'

import { motion } from 'framer-motion'
import { overlayVariants } from './animations'
import { CitiesNavigation } from './CitiesNavigation'
import { MenuFooter } from './MenuFooter'
import type { MenuOverlayProps } from './types'

export function MenuOverlay({ onClose, currentCitySlug }: MenuOverlayProps) {
  return (
    <motion.div
      id="premium-mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
      className="fixed left-0 right-0 bottom-0 bg-[#f8f7f4] flex flex-col sm:hidden"
      style={{
        top: '3.5rem', // 56px - height of header (h-14)
        zIndex: 40, // Below header (z-50) so hamburger X is clickable
      }}
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto overscroll-contain">
        <CitiesNavigation onClose={onClose} currentCitySlug={currentCitySlug} />
      </div>

      {/* Fixed footer with email */}
      <MenuFooter />
    </motion.div>
  )
}
