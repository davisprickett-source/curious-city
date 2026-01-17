'use client'

import { useState, useRef, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ExpandableCardContentProps {
  children: ReactNode
  className?: string
}

export function ExpandableCardContent({
  children,
  className = '',
}: ExpandableCardContentProps) {
  const [isScrollEnabled, setIsScrollEnabled] = useState(false)
  const [hasOverflow, setHasOverflow] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const { scrollHeight, clientHeight } = containerRef.current
        setHasOverflow(scrollHeight > clientHeight + 10)
      }
    }

    checkOverflow()

    // Use ResizeObserver for more reliable detection
    const resizeObserver = new ResizeObserver(checkOverflow)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [children])

  const handleReadMore = () => {
    setIsScrollEnabled(true)
  }

  return (
    <div className={`relative h-full flex flex-col ${className}`}>
      <div
        ref={containerRef}
        className={`flex-1 min-h-0 ${isScrollEnabled ? 'overflow-y-auto scroll-smooth card-scrollbar' : 'overflow-hidden'}`}
        onWheel={(e) => {
          if (!isScrollEnabled) return
          const element = e.currentTarget
          const isAtTop = element.scrollTop === 0
          const isAtBottom = element.scrollHeight - element.scrollTop === element.clientHeight
          if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
            e.stopPropagation()
          }
        }}
      >
        {children}
      </div>

      {/* Gradient fade and "Read more" - only shown when overflow exists and scroll not enabled */}
      <AnimatePresence>
        {hasOverflow && !isScrollEnabled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
          >
            {/* Gradient fade */}
            <div className="h-32 bg-gradient-to-t from-white via-white/90 to-transparent" />

            {/* Read more button */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-auto">
              <button
                onClick={handleReadMore}
                className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-all duration-300"
              >
                <span className="tracking-wide">Read more</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
