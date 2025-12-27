'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export interface HorizontalCard {
  image: string
  title: string
  description: string
}

interface HorizontalScrollProps {
  cards: HorizontalCard[]
  title?: string
}

/**
 * Horizontal scrolling card section that moves based on vertical scroll
 * - Container is 200vh tall to allow vertical scrolling
 * - Cards scroll horizontally as user scrolls vertically
 * - Each card: 400px wide with image on top, text below
 * - Responsive: stacks in single column on mobile
 */
export function HorizontalScroll({ cards, title }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Calculate total scroll distance needed
  // Each card is 400px + 24px gap, minus the viewport width to end aligned
  const cardWidth = 400
  const gap = 24
  const totalWidth = cards.length * (cardWidth + gap)

  // Map vertical scroll progress to horizontal movement
  // Move from 0 to negative totalWidth to scroll cards left
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(totalWidth - (typeof window !== 'undefined' ? window.innerWidth : 1200))]
  )

  // No horizontal scroll animation for reduced motion preference
  if (prefersReducedMotion) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {title}
            </h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-neutral-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky container that holds the scrolling content */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="py-12">
          {title && (
            <div className="container mx-auto px-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                {title}
              </h2>
            </div>
          )}

          {/* Desktop: Horizontal scrolling cards */}
          <div className="hidden md:block">
            <motion.div style={{ x }} className="flex gap-6 px-12">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-none w-[400px] bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-neutral-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile: Single column stack */}
          <div className="md:hidden container mx-auto px-4">
            <div className="space-y-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-neutral-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
