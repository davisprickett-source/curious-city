'use client'

import { useRef, useEffect, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface VideoScrubberProps {
  videoPath: string
  title?: string
  caption?: string
  scrollHeight?: number
  textContent?: string
  textPosition?: 'left' | 'right' | 'bottom'
}

export function VideoScrubber({
  videoPath,
  title,
  caption,
  scrollHeight = 150,
  textContent,
  textPosition = 'left'
}: VideoScrubberProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isLoaded, setIsLoaded] = useState(false)
  const [duration, setDuration] = useState(0)

  // Scroll-based video scrubbing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const videoTime = useTransform(
    scrollYProgress,
    [0, 1],
    [0, duration]
  )

  // Update video currentTime based on scroll
  useEffect(() => {
    return videoTime.on('change', (latest) => {
      if (videoRef.current && isLoaded && !isNaN(latest)) {
        videoRef.current.currentTime = latest
      }
    })
  }, [videoTime, isLoaded])

  // Handle video metadata loaded
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
      setIsLoaded(true)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata)
  }, [])

  // For reduced motion, just show video poster or first frame
  if (prefersReducedMotion) {
    return (
      <div
        className="relative w-full bg-neutral-900"
        style={{ minHeight: `${scrollHeight}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={videoPath}
              className="w-full h-full object-cover"
              muted
              playsInline
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
            {/* Video half */}
            <div className={`relative flex-1 bg-neutral-900 ${textPosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="absolute inset-0">
                <video
                  ref={videoRef}
                  src={videoPath}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="auto"
                />
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                    <div className="text-neutral-400 text-sm">Loading video...</div>
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
          // Full-screen video with optional overlay text
          <div className="relative w-full h-full bg-neutral-900">
            <video
              ref={videoRef}
              src={videoPath}
              className="w-full h-full object-cover"
              muted
              playsInline
              preload="auto"
            />
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                <div className="text-neutral-400 text-sm">Loading video...</div>
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
