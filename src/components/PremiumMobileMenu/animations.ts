/**
 * Animation variants and configuration for Premium Mobile Menu
 * Centralized configuration for all framer-motion animations
 */

import { Variants } from 'framer-motion'

// Animation timing configuration
export const ANIMATION_CONFIG = {
  // Icon transformation
  ICON_DURATION: 0.3,
  ICON_EASING: [0.34, 5.56, 0.64, 1] as const, // Bouncy

  // Overlay animations
  OVERLAY_DURATION: 0.4,
  OVERLAY_EXIT_DURATION: 0.3,
  OVERLAY_EASING: [0.16, 1, 0.3, 1] as const, // Elastic

  // Menu items stagger
  STAGGER_DELAY: 0.05, // 50ms between items
  STAGGER_CHILDREN_DELAY: 0.2, // Delay before first item starts
  ITEM_DURATION: 0.5,

  // Level transitions
  LEVEL_TRANSITION_DURATION: 0.4,
  LEVEL_TRANSITION_DISTANCE: 100, // pixels
}

// Hamburger icon line variants (2 lines forming X)
export const hamburgerLineVariants = {
  top: {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 3 },
  },
  bottom: {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -3 },
  },
}

// Overlay entrance/exit variants (slide from right)
export const overlayVariants: Variants = {
  initial: {
    x: '100%',
  },
  animate: {
    x: 0,
    transition: {
      duration: ANIMATION_CONFIG.OVERLAY_DURATION,
      ease: ANIMATION_CONFIG.OVERLAY_EASING,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: ANIMATION_CONFIG.OVERLAY_EXIT_DURATION,
      ease: ANIMATION_CONFIG.OVERLAY_EASING,
    },
  },
}

// Staggered menu items container variants
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_CONFIG.STAGGER_DELAY,
      delayChildren: ANIMATION_CONFIG.STAGGER_CHILDREN_DELAY,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1, // Reverse order on exit
    },
  },
}

// Individual menu item variants
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.ITEM_DURATION,
      ease: ANIMATION_CONFIG.OVERLAY_EASING,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
}

// Level transition variants (forward: cities -> city-pages)
export const levelTransitionForwardVariants: Variants = {
  initial: {
    opacity: 0,
    x: ANIMATION_CONFIG.LEVEL_TRANSITION_DISTANCE,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_CONFIG.LEVEL_TRANSITION_DURATION,
      ease: ANIMATION_CONFIG.OVERLAY_EASING,
    },
  },
  exit: {
    opacity: 0,
    x: -ANIMATION_CONFIG.LEVEL_TRANSITION_DISTANCE,
    transition: {
      duration: ANIMATION_CONFIG.LEVEL_TRANSITION_DURATION,
      ease: ANIMATION_CONFIG.OVERLAY_EASING,
    },
  },
}

// Level transition variants (backward: city-pages -> cities)
export const levelTransitionBackwardVariants: Variants = {
  initial: {
    opacity: 0,
    x: -ANIMATION_CONFIG.LEVEL_TRANSITION_DISTANCE,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_CONFIG.LEVEL_TRANSITION_DURATION,
      ease: ANIMATION_CONFIG.OVERLAY_EASING,
    },
  },
  exit: {
    opacity: 0,
    x: ANIMATION_CONFIG.LEVEL_TRANSITION_DISTANCE,
    transition: {
      duration: ANIMATION_CONFIG.LEVEL_TRANSITION_DURATION,
      ease: ANIMATION_CONFIG.OVERLAY_EASING,
    },
  },
}

// Reduced motion variants (simple fade only)
export const reducedMotionVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
}

// Grid item variants (for city pages grid)
export const gridItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: ANIMATION_CONFIG.OVERLAY_EASING,
    },
  },
}
