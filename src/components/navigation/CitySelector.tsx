'use client'

import Link from 'next/link'
import { useState, useRef, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CITY_METADATA } from '@/data/cities'
import { useNavigation } from './hooks/useNavigation'
import type { AnyCitySection } from '@/lib/routes'

interface CitySelectorProps {
  currentCitySlug?: string
  currentCityName?: string
  currentSection?: AnyCitySection
  preserveFilters?: boolean
}

// Individual city item with hover animation
function CityItem({
  city,
  isActive,
  href,
  onClose,
  index,
  totalItems,
  isClosing,
}: {
  city: { slug: string; name: string }
  isActive: boolean
  href: string
  onClose: () => void
  index: number
  totalItems: number
  isClosing: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  // Reverse stagger for exit animation (last items exit first, like closing a fan)
  const exitDelay = isClosing ? (totalItems - index - 1) * 0.025 : 0

  return (
    <motion.div
      initial={{ opacity: 0, x: -16, scale: 0.95 }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: -16,
        scale: 0.92,
        transition: {
          duration: 0.18,
          delay: exitDelay,
          ease: [0.4, 0, 1, 1]
        }
      }}
      transition={{
        duration: 0.25,
        delay: index * 0.03,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      {/* Animated highlight background - fast transition for responsive hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-50 via-accent-100/80 to-accent-50 rounded-md mx-1"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isHovered || isActive ? 1 : 0,
          opacity: isHovered || isActive ? 1 : 0
        }}
        transition={{
          duration: 0.08,
          ease: 'easeOut'
        }}
        style={{ originX: 0 }}
      />

      <Link
        href={href}
        onClick={onClose}
        className="relative block px-4 py-2.5 text-sm transition-colors z-10"
      >
        <motion.span
          className={`
            inline-block
            ${isActive ? 'text-accent-700 font-semibold' : 'text-neutral-700'}
          `}
          animate={{
            x: isHovered ? 4 : 0,
            color: isHovered || isActive ? 'rgb(var(--accent-700))' : 'rgb(64, 64, 64)',
          }}
          transition={{ duration: 0.08, ease: 'easeOut' }}
        >
          {city.name}
        </motion.span>

        {/* Arrow indicator on hover */}
        <motion.span
          className="absolute right-3 top-1/2 -translate-y-1/2 text-accent-500"
          initial={{ opacity: 0, x: -8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -8
          }}
          transition={{ duration: 0.08, ease: 'easeOut' }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  )
}

function CitySelectorContent({
  currentCitySlug,
  currentCityName,
  currentSection,
  preserveFilters = true,
}: CitySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const { buildCityUrl } = useNavigation()

  const cities = [...CITY_METADATA]
    .map((city) => ({ slug: city.slug, name: city.name }))
    .sort((a, b) => a.name.localeCompare(b.name))

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsClosing(false)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    // Mark as closing to trigger reverse animation
    setIsClosing(true)
    // Set isOpen to false to trigger AnimatePresence exit animations
    // Keep isClosing true so exit stagger calculates correctly
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
      // Reset isClosing after exit animations complete
      setTimeout(() => setIsClosing(false), 300)
    }, 50) // Small delay before starting exit
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setTimeout(() => setIsClosing(false), 300)
    }, 50)
  }

  if (!currentCitySlug || !currentCityName) {
    return null
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => {
          if (isOpen) {
            handleClose()
          } else {
            setIsClosing(false)
            setIsOpen(true)
          }
        }}
        className="flex items-center gap-1 px-3 py-2 text-base font-medium text-accent-600 hover:text-accent-700 rounded-lg hover:bg-neutral-50 transition-colors"
      >
        <span className="text-neutral-900">Curious</span>
        <span className="text-neutral-400 mx-0.5">|</span>
        <span>{currentCityName}</span>
        <motion.svg
          className="w-4 h-4"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.96,
              transition: {
                duration: 0.2,
                delay: cities.length * 0.02, // Wait for items to exit first
                ease: [0.4, 0, 1, 1]
              }
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full pt-1 w-56 z-50"
          >
            <motion.div
              className="py-2 bg-white rounded-xl shadow-xl border border-neutral-100 max-h-[70vh] overflow-y-auto overflow-x-hidden"
              initial={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              animate={{ boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="popLayout">
                {cities.map((city, index) => (
                  <CityItem
                    key={city.slug}
                    city={city}
                    isActive={city.slug === currentCitySlug}
                    href={buildCityUrl(city.slug, currentSection, preserveFilters)}
                    onClose={handleClose}
                    index={index}
                    totalItems={cities.length}
                    isClosing={isClosing}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function CitySelector(props: CitySelectorProps) {
  return (
    <Suspense fallback={
      <div className="flex items-center gap-1 px-3 py-2 text-base font-medium">
        <span className="text-neutral-900">Curious</span>
        <span className="text-neutral-400 mx-0.5">|</span>
        <span className="text-accent-600">{props.currentCityName || 'Loading...'}</span>
      </div>
    }>
      <CitySelectorContent {...props} />
    </Suspense>
  )
}
