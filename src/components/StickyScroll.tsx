'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export interface ScrollSection {
  title: string
  content: string
  highlight?: string
}

interface StickyScrollProps {
  imageSrc: string
  sections: ScrollSection[]
}

/**
 * Sticky scroll component with synchronized image and text animations
 * - Image stays fixed on left, scales from 0.8 to 1 during scroll
 * - Text sections on right fade in/out based on scroll progress
 * - Container is 400vh tall to allow extended scrolling
 * - Responsive grid layout (2 columns desktop, 1 column mobile)
 */
export function StickyScroll({ imageSrc, sections }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Image scales from 0.8 to 1 during scroll
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  // No animations for reduced motion preference
  if (prefersReducedMotion) {
    return (
      <div className="relative min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Static image */}
            <div className="lg:sticky lg:top-20 h-fit">
              <img
                src={imageSrc}
                alt="Sticky scroll illustration"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            {/* Text sections */}
            <div className="space-y-20">
              {sections.map((section, index) => (
                <div key={index} className="min-h-[50vh]">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {section.title}
                  </h2>
                  {section.highlight && (
                    <p className="text-xl text-neutral-600 mb-4 font-medium">
                      {section.highlight}
                    </p>
                  )}
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky container that holds image and text */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {/* Sticky image on left with scale animation */}
            <div className="hidden lg:flex items-center justify-center">
              <motion.img
                src={imageSrc}
                alt="Sticky scroll illustration"
                style={{ scale: imageScale }}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            {/* Text sections on right */}
            <div className="relative h-full flex items-center">
              {sections.map((section, index) => {
                // Calculate opacity for each section based on scroll progress
                const sectionCount = sections.length
                const sectionProgress = 1 / sectionCount
                const start = index * sectionProgress
                const middle = start + sectionProgress / 2
                const end = (index + 1) * sectionProgress

                const opacity = useTransform(
                  scrollYProgress,
                  [start, middle, end],
                  [0, 1, 0]
                )

                return (
                  <motion.div
                    key={index}
                    style={{ opacity }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {section.title}
                    </h2>
                    {section.highlight && (
                      <p className="text-xl text-neutral-600 mb-4 font-medium">
                        {section.highlight}
                      </p>
                    )}
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
