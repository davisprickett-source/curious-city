'use client'

import { motion } from 'framer-motion'
import { ANIMATION_CONFIG } from './animations'
import type { AnimatedMenuButtonProps } from './types'

export function AnimatedMenuButton({ isOpen, onClick }: AnimatedMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 text-neutral-900 transition-colors hover:text-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 rounded"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="premium-mobile-menu"
      aria-haspopup="true"
    >
      {/* Container for the hamburger/X icon */}
      <div className="relative w-6 h-6 flex flex-col items-center justify-center">
        {/* Top line */}
        <motion.span
          className="absolute w-5 h-0.5 bg-current rounded-full"
          initial={false}
          animate={{
            y: isOpen ? 0 : -4,
            rotate: isOpen ? 45 : 0,
          }}
          transition={{
            duration: ANIMATION_CONFIG.ICON_DURATION,
            ease: ANIMATION_CONFIG.ICON_EASING,
          }}
        />

        {/* Bottom line */}
        <motion.span
          className="absolute w-5 h-0.5 bg-current rounded-full"
          initial={false}
          animate={{
            y: isOpen ? 0 : 4,
            rotate: isOpen ? -45 : 0,
          }}
          transition={{
            duration: ANIMATION_CONFIG.ICON_DURATION,
            ease: ANIMATION_CONFIG.ICON_EASING,
          }}
        />
      </div>
    </button>
  )
}
