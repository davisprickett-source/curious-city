'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { CITY_METADATA } from '@/data/cities'
import type { CitiesNavigationProps } from './types'

// Sort cities alphabetically
const cities = [...CITY_METADATA].sort((a, b) => a.name.localeCompare(b.name))

// Custom variants without exit animation to prevent disappearing on click
// Wave animation: items slide in from bottom-left with stagger
const noExitContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06, // Slightly slower stagger for more pronounced wave
      delayChildren: 0.15,
    },
  },
}

const noExitItemVariants: Variants = {
  hidden: { opacity: 0, y: 24, x: -16 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const, // Smooth ease-out for wave effect
    },
  },
}

export function CitiesNavigation({ onClose, currentCitySlug }: CitiesNavigationProps) {
  return (
    <motion.div
      variants={noExitContainerVariants}
      initial="hidden"
      animate="visible"
      className="px-8 pt-20 pb-6"
    >
      <div className="eyebrow text-accent-600 mb-8">Cities</div>

      <motion.ul role="list" className="space-y-6">
        {cities.map((city) => {
          const isCurrent = city.slug === currentCitySlug
          return (
            <motion.li key={city.slug} variants={noExitItemVariants}>
              <Link
                href={`/${city.slug}`}
                onClick={onClose}
                className="group flex items-center gap-3 w-full text-left transition-colors hover:text-accent-600 focus:outline-none focus:text-accent-600"
                aria-current={isCurrent ? 'page' : undefined}
              >
                {isCurrent && (
                  <span className="text-accent-600 text-2xl">→</span>
                )}
                <span
                  className={`text-[clamp(2.5rem,8vw,3.8rem)] font-semibold leading-none tracking-tight transition-colors ${
                    isCurrent
                      ? 'text-accent-600'
                      : 'text-neutral-900 group-hover:text-accent-600 group-focus:text-accent-600'
                  }`}
                >
                  {city.name}
                </span>
              </Link>
            </motion.li>
          )
        })}
      </motion.ul>
    </motion.div>
  )
}
