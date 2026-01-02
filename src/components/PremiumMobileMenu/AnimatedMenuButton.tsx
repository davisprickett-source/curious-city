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
        {/* Top line */}
        <motion.line
          x1="4"
          y1="6"
          x2="20"
          y2="6"
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
          style={{ originX: '12px', originY: '6px' }}
        />

        {/* Middle line */}
        <motion.line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={hamburgerLineVariants.middle}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{
            duration: ANIMATION_CONFIG.ICON_DURATION,
            ease: ANIMATION_CONFIG.ICON_EASING,
          }}
        />

        {/* Bottom line */}
        <motion.line
          x1="4"
          y1="18"
          x2="20"
          y2="18"
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
          style={{ originX: '12px', originY: '18px' }}
        />
      </svg>
    </button>
  )
}
