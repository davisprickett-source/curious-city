'use client'

import { motion } from 'framer-motion'
import { hamburgerLineVariants, ANIMATION_CONFIG } from './animations'
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        {/* Top line - rotates to form X */}
        <motion.line
          x1="4"
          y1="9"
          x2="20"
          y2="9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={hamburgerLineVariants.top}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{
            duration: ANIMATION_CONFIG.ICON_DURATION,
            ease: ANIMATION_CONFIG.ICON_EASING,
          }}
          style={{ originX: '12px', originY: '12px' }}
        />

        {/* Bottom line - rotates to form X */}
        <motion.line
          x1="4"
          y1="15"
          x2="20"
          y2="15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={hamburgerLineVariants.bottom}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{
            duration: ANIMATION_CONFIG.ICON_DURATION,
            ease: ANIMATION_CONFIG.ICON_EASING,
          }}
          style={{ originX: '12px', originY: '12px' }}
        />
      </svg>
    </button>
  )
}
