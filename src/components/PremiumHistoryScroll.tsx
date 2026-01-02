'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { History, HistoryBlock } from '@/types/content'
import { ImageSequenceScrubber } from './ImageSequenceScrubber'

interface PremiumHistoryScrollProps {
  history: History
}

export function PremiumHistoryScroll({ history }: PremiumHistoryScrollProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative bg-white">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-50">
        <motion.div
          className="h-full bg-neutral-900"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {history.title}
            </h1>
            {history.subtitle && (
              <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                {history.subtitle}
              </p>
            )}
            {history.author && (
              <p className="text-sm text-neutral-400 uppercase tracking-wider">
                By {history.author}
              </p>
            )}
            {history.premium?.estimatedReadTime && (
              <p className="text-sm text-neutral-400 mt-2">
                {history.premium.estimatedReadTime} read
              </p>
            )}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-neutral-400 flex items-start justify-center p-2"
              >
                <div className="w-1 h-2 rounded-full bg-neutral-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Essay Container - Always Split Screen on Desktop */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side: Visual/Animation Column (Sticky on desktop) */}
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen bg-neutral-900 order-1 lg:order-1">
          <EssayVisualColumn blocks={history.blocks} />
        </div>

        {/* Right Side: Text Column (Scrollable) */}
        <div className="lg:w-1/2 bg-white order-2 lg:order-2">
          <EssayTextColumn blocks={history.blocks} />
        </div>
      </div>

      {/* Footer / Credits */}
      <section className="min-h-[50vh] flex items-center justify-center bg-neutral-900 text-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-neutral-400 mb-6">
              {history.author && `Written by ${history.author}`}
            </p>
            {history.publishedAt && (
              <p className="text-sm text-neutral-500">
                Published {new Date(history.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Visual column component - manages which image sequence is visible
function EssayVisualColumn({ blocks }: { blocks: HistoryBlock[] }) {
  const [activeSequenceIndex, setActiveSequenceIndex] = useState(0)

  // Get all image sequence blocks
  const sequenceBlocks = blocks.filter(
    b => b.type === 'image-sequence' || b.type === 'mixed-sequence'
  ) as Array<any>

  // Listen to scroll to determine which sequence should be active
  useEffect(() => {
    const handleScroll = () => {
      // Simple logic: change sequence based on scroll depth
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      const sequenceIndex = Math.min(
        Math.floor(scrollPercentage * sequenceBlocks.length * 1.2),
        sequenceBlocks.length - 1
      )
      setActiveSequenceIndex(Math.max(0, sequenceIndex))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sequenceBlocks.length])

  if (sequenceBlocks.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-neutral-500 text-sm">No visuals</p>
      </div>
    )
  }

  const activeBlock = sequenceBlocks[activeSequenceIndex]

  return (
    <div className="w-full h-full relative">
      <ImageSequenceScrubber
        key={activeBlock.id}
        sequencePath={activeBlock.sequencePath}
        frameCount={activeBlock.frameCount}
        frameDigits={activeBlock.frameDigits}
        title={activeBlock.title}
        caption={activeBlock.caption}
        scrollHeight={100} // Full viewport height
      />
    </div>
  )
}

// Text column component - renders all text content
function EssayTextColumn({ blocks }: { blocks: HistoryBlock[] }) {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-2xl mx-auto">
        {blocks.map((block, index) => (
          <EssayTextBlock key={block.id} block={block} index={index} />
        ))}
      </div>
    </div>
  )
}

// Individual text block renderer
function EssayTextBlock({ block, index }: { block: HistoryBlock; index: number }) {
  const baseDelay = index * 0.05 // Stagger animation slightly

  switch (block.type) {
    case 'paragraph':
      return (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: baseDelay }}
          className={`text-xl md:text-2xl leading-relaxed text-neutral-800 mb-8 ${
            block.dropcap ? 'first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:text-neutral-900' : ''
          }`}
        >
          {block.content}
        </motion.p>
      )

    case 'scroll-text':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: baseDelay }}
          className="my-12"
        >
          {block.content.split('\n\n').map((para, i) => (
            <p key={i} className="text-xl md:text-2xl leading-relaxed text-neutral-800 mb-6">
              {para}
            </p>
          ))}
        </motion.div>
      )

    case 'mixed-sequence':
      // For mixed sequence, just render the text portion
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: baseDelay }}
          className="my-12"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-neutral-800">
            {block.text}
          </p>
        </motion.div>
      )

    case 'image-sequence':
      // Image sequences don't render text (they're purely visual)
      // But we can show title/caption if present
      if (block.title || block.caption) {
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: baseDelay }}
            className="my-12 p-6 bg-neutral-50 rounded-lg border-l-4 border-neutral-900"
          >
            {block.title && (
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{block.title}</h3>
            )}
            {block.caption && (
              <p className="text-lg text-neutral-600 italic">{block.caption}</p>
            )}
          </motion.div>
        )
      }
      return null

    case 'pullquote':
      return (
        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: baseDelay }}
          className="my-12 pl-6 border-l-4 border-neutral-900 text-2xl md:text-3xl italic text-neutral-700 font-serif"
        >
          {block.content}
          {block.attribution && (
            <footer className="text-lg not-italic text-neutral-500 mt-4 font-sans">
              — {block.attribution}
            </footer>
          )}
        </motion.blockquote>
      )

    case 'subheading':
      return (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: baseDelay }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 mt-16 mb-8"
        >
          {block.content}
        </motion.h2>
      )

    case 'break':
      if (block.style === 'dots') {
        return (
          <div className="my-12 flex justify-center gap-3">
            <div className="w-2 h-2 rounded-full bg-neutral-400" />
            <div className="w-2 h-2 rounded-full bg-neutral-400" />
            <div className="w-2 h-2 rounded-full bg-neutral-400" />
          </div>
        )
      } else if (block.style === 'line') {
        return <hr className="my-12 border-neutral-300" />
      } else {
        return <div className="h-12" />
      }

    case 'ad':
      // Skip ads in premium
      return null

    default:
      return null
  }
}
