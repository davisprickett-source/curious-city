'use client'

import { useRef, useEffect, useState } from 'react'
import { useScroll, useTransform, useMotionValue } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ImageSequenceScrubberProps {
  sequencePath: string
  frameCount: number
  frameDigits: number
  title?: string
  caption?: string
  scrollHeight?: number
  textContent?: string
  textPosition?: 'left' | 'right' | 'bottom'
}

export function ImageSequenceScrubber({
  sequencePath,
  frameCount,
  frameDigits,
  title,
  caption,
  scrollHeight = 150,
  textContent,
  textPosition = 'bottom'
}: ImageSequenceScrubberProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  // @ts-ignore - Variable for future use
  const [loadedFrames, setLoadedFrames] = useState<Set<number>>(new Set())
  const [isPreloading, setIsPreloading] = useState(true)

  // Scroll-based frame scrubbing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, frameCount - 1]
  )

  const currentFrame = useMotionValue(0)

  useEffect(() => {
    return frameIndex.on('change', (latest) => {
      currentFrame.set(Math.floor(latest))
    })
  }, [frameIndex, currentFrame])

  const [displayFrame, setDisplayFrame] = useState(0)

  useEffect(() => {
    return currentFrame.on('change', (latest) => {
      setDisplayFrame(Math.floor(latest))
    })
  }, [currentFrame])

  // Helper to get frame path
  const getFramePath = (frameNum: number) => {
    const paddedFrame = String(frameNum + 1).padStart(frameDigits, '0')
    // Try SVG first (for placeholders), fallback to WebP for production
    return `/sequences/${sequencePath}/frame_${paddedFrame}.svg`
  }

  // Preload frames
  useEffect(() => {
    const preloadFrames = async () => {
      // Load first 10 frames immediately for smooth start
      const initialFrames = Math.min(10, frameCount)
      const promises = []

      for (let i = 0; i < initialFrames; i++) {
        const img = new Image()
        img.src = getFramePath(i)
        promises.push(
          new Promise((resolve) => {
            img.onload = () => {
              setLoadedFrames(prev => new Set(prev).add(i))
              resolve(true)
            }
            img.onerror = () => resolve(false)
          })
        )
      }

      await Promise.all(promises)
      setIsPreloading(false)

      // Lazy load remaining frames in background
      for (let i = initialFrames; i < frameCount; i++) {
        const img = new Image()
        img.src = getFramePath(i)
        img.onload = () => {
          setLoadedFrames(prev => new Set(prev).add(i))
        }
      }
    }

    preloadFrames()
  }, [sequencePath, frameCount, frameDigits])

  // For reduced motion, just show first frame
  if (prefersReducedMotion) {
    return (
      <div
        className="relative w-full bg-neutral-900"
        style={{ minHeight: `${scrollHeight}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full h-full">
            <img
              src={getFramePath(0)}
              alt={title || 'Illustration'}
              className="w-full h-full object-cover"
            />
            {title && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <h3 className="text-4xl md:text-6xl font-bold text-white text-center px-8">
                  {title}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Capsules-style split layout (desktop: animation left/text right, mobile: top/bottom)
  const isSplitLayout = textContent && (textPosition === 'left' || textPosition === 'right')

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${scrollHeight}vh` }}
    >
      <div className="sticky top-0 h-screen w-full">
        {isSplitLayout ? (
          // Split layout (Capsules style)
          <div className="h-full w-full flex flex-col lg:flex-row">
            {/* Animation half */}
            <div className={`relative flex-1 bg-neutral-900 ${textPosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="absolute inset-0">
                <img
                  src={getFramePath(displayFrame)}
                  alt={title || `Frame ${displayFrame + 1}`}
                  className="w-full h-full object-cover"
                  loading={displayFrame < 10 ? 'eager' : 'lazy'}
                />
                {isPreloading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                    <div className="text-neutral-400 text-sm">Loading...</div>
                  </div>
                )}
                {title && (
                  <div className="absolute top-8 left-8 right-8">
                    <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl">
                      {title}
                    </h3>
                  </div>
                )}
              </div>
            </div>

            {/* Text half */}
            <div className={`flex-1 bg-neutral-50 flex items-center justify-center p-8 md:p-16 ${textPosition === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="max-w-2xl">
                <div className="prose prose-lg prose-neutral">
                  {textContent.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-xl leading-relaxed text-neutral-800 mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {caption && (
                  <p className="text-sm text-neutral-500 italic mt-6 border-l-2 border-neutral-300 pl-4">
                    {caption}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Full-screen animation with optional overlay text
          <div className="relative w-full h-full bg-neutral-900">
            <img
              src={getFramePath(displayFrame)}
              alt={title || `Frame ${displayFrame + 1}`}
              className="w-full h-full object-cover"
              loading={displayFrame < 10 ? 'eager' : 'lazy'}
            />
            {isPreloading && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                <div className="text-neutral-400 text-sm">Loading...</div>
              </div>
            )}
            {title && (
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-8 drop-shadow-2xl">
                  {title}
                </h3>
              </div>
            )}
            {caption && !title && (
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-lg md:text-xl text-white/90 text-center drop-shadow-lg">
                  {caption}
                </p>
              </div>
            )}
            {textContent && textPosition === 'bottom' && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    {textContent}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
