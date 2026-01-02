'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { overlayVariants, levelTransitionForwardVariants, levelTransitionBackwardVariants } from './animations'
import { CitiesNavigation } from './CitiesNavigation'
import { CityPagesNavigation } from './CityPagesNavigation'
import { MenuFooter } from './MenuFooter'
import type { MenuOverlayProps } from './types'

export function MenuOverlay({
  onClose,
  navigationLevel,
  onNavigate,
  selectedCity,
}: MenuOverlayProps) {
  const handleSelectCity = (citySlug: string) => {
    onNavigate('city-pages', citySlug)
  }

  const handleBack = () => {
    onNavigate('cities')
  }

  // Determine which transition variant to use based on navigation direction
  const getContentVariants = () => {
    if (navigationLevel === 'cities') {
      return levelTransitionBackwardVariants // Coming back from city-pages
    }
    return levelTransitionForwardVariants // Going to city-pages
  }

  return (
    <motion.div
      id="premium-mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
      className="fixed inset-0 bg-[#f8f7f4] flex flex-col sm:hidden gpu-accelerate"
      style={{
        zIndex: 60,
        transformOrigin: 'bottom center',
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
      <div className="flex-1 overflow-y-auto overscroll-contain scroll-smooth-menu">
        <AnimatePresence mode="wait">
          {navigationLevel === 'cities' && (
            <motion.div
              key="cities"
              variants={getContentVariants()}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CitiesNavigation onSelectCity={handleSelectCity} />
            </motion.div>
          )}

          {navigationLevel === 'city-pages' && selectedCity && (
            <motion.div
              key="city-pages"
              variants={getContentVariants()}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CityPagesNavigation
                citySlug={selectedCity}
                onBack={handleBack}
                onClose={onClose}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fixed footer */}
      <MenuFooter onClose={onClose} />

      {/* Screen reader live region for navigation changes */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {navigationLevel === 'cities' && 'Showing all cities'}
        {navigationLevel === 'city-pages' && selectedCity && `Showing ${selectedCity} pages`}
      </div>
    </motion.div>
  )
}
