'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { CITY_METADATA } from '@/data/cities'
import { routes } from '@/lib/routes'
import { PremiumMobileMenu } from './PremiumMobileMenu'

interface HeaderProps {
  cityName?: string
}

// Get cities from static metadata (name + slug only, no heavy content)
const cities = [...CITY_METADATA].sort((a, b) => a.name.localeCompare(b.name))

export function Header({ cityName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-neutral-100 ui-sans">
      <div className="container-page">
        <div className="flex items-center h-14 gap-2">
          {/* Logo */}
          <Link
            href={routes.home()}
            className="flex items-center font-semibold text-neutral-900 hover:text-accent-600 transition-colors tracking-tight"
          >
            {/* Mobile: Small logo */}
            <img
              src="/logos/CCs.png"
              alt="Curious City"
              className="h-7 w-auto sm:hidden"
            />
            {/* Desktop: Full logo */}
            <img
              src="/logos/CCs.png"
              alt="Curious City"
              className="hidden sm:block h-8 w-auto"
            />
          </Link>

          {/* Cities dropdown - after logo like city pages */}
          <CitiesDropdown />

          {cityName && (
            <span className="text-neutral-500 font-normal text-[15px]">{cityName}</span>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Premium mobile menu button */}
          <PremiumMobileMenu />
        </div>
      </div>
    </header>
  )
}

// Animation variants for staggered dropdown
const dropdownVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren', // Wait for children to exit before container fades
      staggerChildren: 0.03,
      staggerDirection: -1, // Reverse stagger on exit (bottom to top)
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren', // Container fades in, then children stagger
      staggerChildren: 0.04,
      delayChildren: 0.05,
      staggerDirection: 1, // Normal stagger on enter (top to bottom)
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.15,
      ease: 'easeIn' as const,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut' as const,
    },
  },
}

function CitiesDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative hidden sm:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-accent-600 transition-colors">
        Cities
        <motion.svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Dropdown - Simple city list only */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 top-full mt-1 w-48 py-2 bg-white rounded-xl shadow-xl border border-neutral-100 overflow-hidden"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {cities.map((city) => (
              <motion.div key={city.slug} variants={itemVariants}>
                <Link
                  href={routes.city(city.slug)}
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-accent-50 hover:text-accent-700 transition-colors"
                >
                  {city.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
