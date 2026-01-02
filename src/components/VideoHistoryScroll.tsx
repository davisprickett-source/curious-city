'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { History } from '@/types/content'
import { UnifiedNav } from './navigation/UnifiedNav'
import { MobileNavMenu } from './navigation/MobileNavMenu'
import { ShareLinks } from './ShareLinks'

interface VideoHistoryScrollProps {
  history: History
}

// Frame counts for each video sequence (after trimming)
const FRAME_COUNTS: Record<string, number> = {
  // Tampa sequences
  'tampa-1': 89,
  'tampa-2': 75,
  'tampa-3': 89,
  'tampa-4': 70,
  'tampa-5': 69,
  'tampa-6': 89,
  'tampa-7': 89,
  'tampa-8': 136,
  'tampa-9': 136,
  'tampa-10': 89,
  'tampa-11': 36,
  'tampa-12': 89,

  // Phoenix sequences (custom counts for trimmed videos)
  'phoenix-3': 93,
  'phoenix-11': 54,
  'phoenix-17': 50,
  'phoenix-18': 91,
  'phoenix-20': 91,
}

export function VideoHistoryScroll({ history }: VideoHistoryScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(1)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const loadedFramesRef = useRef<Set<string>>(new Set())
  const imagesRef = useRef<Map<string, HTMLImageElement>>(new Map())

  // Get all video sequence blocks
  const videoBlocks = history.blocks.filter(
    b => b.type === 'video-sequence'
  ) as Array<any>

  const totalVideos = videoBlocks.length

  // Get sequence name from video path
  const getSequenceName = (videoPath: string): string => {
    const sequenceMatch = videoPath.match(/\/sequences\/([^\/]+)\/([^\/]+)$/)
    if (sequenceMatch) {
      return sequenceMatch[2]
    }
    const videoMatch = videoPath.match(/([a-z-]+)-(\d+)\.mp4$/)
    if (videoMatch) {
      return `${videoMatch[1]}-${videoMatch[2]}`
    }
    return 'tampa-1'
  }

  // Get frame count for a sequence
  const getFrameCount = (sequenceName: string): number => {
    if (FRAME_COUNTS[sequenceName]) {
      return FRAME_COUNTS[sequenceName]
    }
    return 94
  }

  // Get frame path
  const getFramePath = (sequenceName: string, frameNum: number): string => {
    const paddedNum = String(frameNum).padStart(4, '0')
    const city = sequenceName.split('-')[0]
    const frameName = city === 'tampa' ? `frame_${paddedNum}.jpg` : `frame-${paddedNum}.jpg`
    return `/sequences/${city}/${sequenceName}/${frameName}`
  }

  // Preload frames progressively
  useEffect(() => {
    const totalFramesToLoad: string[] = []

    videoBlocks.forEach((block) => {
      const seqName = getSequenceName(block.videoPath)
      const frameCount = getFrameCount(seqName)
      for (let i = 1; i <= frameCount; i++) {
        totalFramesToLoad.push(getFramePath(seqName, i))
      }
    })

    const totalFrames = totalFramesToLoad.length
    let loadedCount = 0

    const loadBatch = async (startIdx: number, batchSize: number) => {
      const batch = totalFramesToLoad.slice(startIdx, startIdx + batchSize)

      await Promise.all(
        batch.map((framePath) => {
          return new Promise<void>((resolve) => {
            if (loadedFramesRef.current.has(framePath)) {
              loadedCount++
              resolve()
              return
            }

            const img = new Image()
            img.onload = () => {
              loadedFramesRef.current.add(framePath)
              imagesRef.current.set(framePath, img)
              loadedCount++
              setLoadingProgress(Math.round((loadedCount / totalFrames) * 100))
              resolve()
            }
            img.onerror = () => {
              loadedCount++
              resolve()
            }
            img.src = framePath
          })
        })
      )

      if (startIdx + batchSize < totalFrames) {
        setTimeout(() => loadBatch(startIdx + batchSize, batchSize), 10)
      } else {
        setIsLoading(false)
      }
    }

    loadBatch(0, 20)
  }, [videoBlocks])

  // Handle scroll
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const containerTop = Math.max(0, -rect.top)
    const containerHeight = Math.max(1, container.scrollHeight - window.innerHeight)

    // Clamp progress to prevent overshoot at start/end
    const rawProgress = containerTop / containerHeight
    const progress = Math.max(0, Math.min(0.9999, rawProgress)) // Cap at 0.9999 to prevent last frame shift

    setScrollProgress(progress * 100)

    const progressPerVideo = 1 / totalVideos
    const currentIdx = Math.min(Math.floor(progress / progressPerVideo), totalVideos - 1)
    const progressInVideo = Math.max(0, Math.min(0.9999, (progress - (currentIdx * progressPerVideo)) / progressPerVideo))

    setCurrentVideoIndex(currentIdx)

    const currentBlock = videoBlocks[currentIdx]
    if (currentBlock) {
      const seqName = getSequenceName(currentBlock.videoPath)
      const frameCount = getFrameCount(seqName)
      // Clamp frame number strictly within bounds, use floor instead of ceil to prevent overshoot
      const targetFrame = Math.floor(progressInVideo * frameCount) + 1
      const frameNum = Math.max(1, Math.min(frameCount, targetFrame))
      setCurrentFrame(frameNum)
    }
  }, [totalVideos, videoBlocks])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const getCurrentFramePath = () => {
    const currentBlock = videoBlocks[currentVideoIndex]
    if (!currentBlock) return ''
    const seqName = getSequenceName(currentBlock.videoPath)
    return getFramePath(seqName, currentFrame)
  }

  const framePath = getCurrentFramePath()
  const frameOpacity = loadedFramesRef.current.has(framePath) ? 1 : 0.5

  return (
    <>
      {/* Navigation - simplified on mobile, full UnifiedNav on desktop */}
      {/* Mobile nav - simple fixed header with hamburger menu */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
        <div className="container-page">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center font-semibold text-neutral-900 tracking-tight">
              <span className="text-lg">Curious City</span>
            </Link>
            <MobileNavMenu
              citySlug={history.citySlug}
              currentSection="history"
            />
          </div>
        </div>
      </div>

      {/* Desktop nav - full UnifiedNav wrapped in fixed container */}
      <div className="hidden sm:block fixed top-0 left-0 right-0 z-50 bg-white">
        <UnifiedNav
          citySlug={history.citySlug}
          currentSection="history"
        />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-[60]">
        <motion.div
          className="h-full bg-neutral-900"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div style={{ position: 'fixed', top: 1, left: 0, right: 0, height: 1, zIndex: 50 }}>
          <div style={{ height: '100%', backgroundColor: 'rgba(251,191,36,0.6)', width: `${loadingProgress}%`, transition: 'width 150ms' }} />
        </div>
      )}

      {/* White letterbox bars - fixed position, crop both video and text (desktop only) */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 h-[25vh] bg-white z-40 pointer-events-none" />
      <div className="hidden lg:block fixed bottom-0 left-0 right-0 h-[25vh] bg-white z-40 pointer-events-none" />

      {/* Split Screen Section - starts below nav to make video flush */}
      <div className="lg:flex lg:flex-row pt-[57px]" ref={containerRef}>
        {/* Left Side: Video (Sticky on both mobile and desktop) */}
        <div className="w-full h-[50vh] sticky top-[57px] -mt-[57px] lg:w-[70%] lg:h-screen lg:top-[57px] lg:mt-0 bg-white flex items-center justify-center relative z-20">
          <img
            src={framePath}
            alt=""
            className="w-full h-full object-cover lg:object-contain"
            style={{
              opacity: frameOpacity,
            }}
          />

          {isLoading && loadingProgress < 10 && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
              <span className="text-neutral-400 text-sm">{loadingProgress}%</span>
            </div>
          )}
        </div>

        {/* Right Side: Text (Scrollable, 30% width on desktop, full width on mobile) */}
        <div className="w-full lg:w-[30%] bg-white relative">
          {/* Fade overlay - only fade the text on mobile at the top, positioned below video */}
          {/* Calculate: 57px nav + 50vh video = position for top gradient */}
          {/* Bottom gradient removed to avoid conflicts with Chrome's mobile nav bar */}
          <div className="lg:hidden fixed left-0 right-0 h-16 bg-gradient-to-b from-white/80 via-white/40 to-transparent z-30 pointer-events-none" style={{ top: 'calc(57px + 50vh)' }} />

          {/* Desktop fade overlays - fade text at top and bottom of visible area */}
          <div className="hidden lg:block fixed top-[25vh] right-0 w-[30%] h-24 bg-gradient-to-b from-white/90 via-white/60 to-transparent z-30 pointer-events-none" />
          <div className="hidden lg:block fixed bottom-[25vh] right-0 w-[30%] h-24 bg-gradient-to-t from-white/90 via-white/60 to-transparent z-30 pointer-events-none" />

          {/* Top spacing - centers content in middle of screen on desktop */}
          <div className="hidden lg:block" style={{ height: '50vh' }} />

          {/* Mobile spacing - push content below the gradient */}
          <div className="lg:hidden h-24" />

          <div className="px-6 md:px-10 pb-4 lg:pb-0 lg:py-0">
            {/* Title with Share Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-neutral-900 flex-1">
                  {history.title}
                </h1>
                <ShareLinks title={history.title} variant="compact" />
              </div>
              {history.subtitle && (
                <p className="text-base md:text-lg text-neutral-600 mb-3 leading-relaxed">
                  {history.subtitle}
                </p>
              )}
              <div className="flex flex-col gap-1 text-xs text-neutral-500">
                {history.author && <span>By {history.author}</span>}
                {history.premium?.estimatedReadTime && (
                  <span>{history.premium.estimatedReadTime}</span>
                )}
              </div>
            </motion.div>

            {/* All content blocks in continuous flow */}
            <div className="space-y-6">
              {videoBlocks.map((videoBlock, vIdx) => (
                <div key={videoBlock.id}>
                  {videoBlock.textBlocks.map((block: any, bIdx: number) => (
                    <TextBlock
                      key={block.id || `${vIdx}-${bIdx}`}
                      block={block}
                      isFirst={vIdx === 0 && bIdx === 0}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom spacing - centers content in middle of screen on desktop, minimal on mobile */}
          <div className="h-4 lg:h-[50vh]" />

          {/* Footer - appears at end of scroll */}
          <footer className="px-6 md:px-10 py-12 border-t border-neutral-200 bg-white">
            <p className="text-sm text-neutral-500">
              {history.author && `Written by ${history.author}`}
            </p>
            {history.publishedAt && (
              <p className="text-xs text-neutral-400 mt-1">
                Published {new Date(history.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </footer>
        </div>
      </div>
    </>
  )
}

function TextBlock({ block, isFirst }: { block: any; isFirst?: boolean }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          className={`text-lg md:text-xl leading-relaxed text-neutral-800 mb-6 ${
            isFirst && block.dropcap
              ? 'first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:text-neutral-900'
              : ''
          }`}
        >
          {block.content}
        </p>
      )

    case 'pullquote':
      return (
        <blockquote className="pl-6 border-l-4 border-neutral-300 text-2xl md:text-3xl italic text-neutral-700 my-8">
          {block.content}
          {block.attribution && (
            <footer className="text-base not-italic text-neutral-500 mt-3">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      )

    case 'subheading':
      return (
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
          {block.content}
        </h2>
      )

    case 'break':
      if (block.style === 'dots') {
        return (
          <div className="flex justify-center gap-2 my-8">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
          </div>
        )
      } else if (block.style === 'line') {
        return <hr className="border-neutral-200 my-8" />
      }
      return <div className="h-8" />

    default:
      return null
  }
}
