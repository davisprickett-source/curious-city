'use client'

import { useEffect, useRef, useCallback } from 'react'
import type { AdTriggerConfig } from '@/lib/ads/types'

interface AdTriggerProps {
  triggers: AdTriggerConfig[]
  onTrigger: () => void
  enabled?: boolean
}

export function AdTrigger({ triggers, onTrigger, enabled = true }: AdTriggerProps) {
  const hasTriggered = useRef(false)
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])

  const handleTrigger = useCallback(
    (trigger: AdTriggerConfig) => {
      if (hasTriggered.current || !enabled) return

      const execute = () => {
        if (hasTriggered.current) return
        hasTriggered.current = true
        onTrigger()
      }

      if (trigger.delay && trigger.delay > 0) {
        const timeout = setTimeout(execute, trigger.delay)
        timeoutRefs.current.push(timeout)
      } else {
        execute()
      }
    },
    [enabled, onTrigger]
  )

  useEffect(() => {
    if (!enabled) return

    // Page load trigger
    const pageLoadTrigger = triggers.find((t) => t.type === 'page-load')
    if (pageLoadTrigger) {
      const delay = pageLoadTrigger.delay || 0
      const timeout = setTimeout(() => handleTrigger(pageLoadTrigger), delay)
      timeoutRefs.current.push(timeout)
    }

    // Time on page trigger
    const timeTrigger = triggers.find((t) => t.type === 'time-on-page')
    if (timeTrigger) {
      const delay = timeTrigger.value * 1000 + (timeTrigger.delay || 0)
      const timeout = setTimeout(() => handleTrigger(timeTrigger), delay)
      timeoutRefs.current.push(timeout)
    }

    // Scroll depth trigger
    const scrollTrigger = triggers.find((t) => t.type === 'scroll-depth')
    if (scrollTrigger) {
      const handleScroll = () => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = (scrollTop / docHeight) * 100

        if (scrollPercent >= scrollTrigger.value) {
          handleTrigger(scrollTrigger)
          window.removeEventListener('scroll', handleScroll)
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      // Check initial scroll position
      handleScroll()

      return () => {
        window.removeEventListener('scroll', handleScroll)
        timeoutRefs.current.forEach(clearTimeout)
        timeoutRefs.current = []
      }
    }

    return () => {
      timeoutRefs.current.forEach(clearTimeout)
      timeoutRefs.current = []
    }
  }, [triggers, enabled, handleTrigger])

  // Reset on unmount
  useEffect(() => {
    return () => {
      hasTriggered.current = false
    }
  }, [])

  return null // This is a behavior-only component
}

// Hook version for more flexibility
export function useAdTrigger(
  triggers: AdTriggerConfig[],
  onTrigger: () => void,
  enabled: boolean = true
) {
  const hasTriggered = useRef(false)
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])

  const handleTrigger = useCallback(
    (trigger: AdTriggerConfig) => {
      if (hasTriggered.current || !enabled) return

      const execute = () => {
        if (hasTriggered.current) return
        hasTriggered.current = true
        onTrigger()
      }

      if (trigger.delay && trigger.delay > 0) {
        const timeout = setTimeout(execute, trigger.delay)
        timeoutRefs.current.push(timeout)
      } else {
        execute()
      }
    },
    [enabled, onTrigger]
  )

  useEffect(() => {
    if (!enabled) return

    const pageLoadTrigger = triggers.find((t) => t.type === 'page-load')
    if (pageLoadTrigger) {
      const delay = pageLoadTrigger.delay || 0
      const timeout = setTimeout(() => handleTrigger(pageLoadTrigger), delay)
      timeoutRefs.current.push(timeout)
    }

    const timeTrigger = triggers.find((t) => t.type === 'time-on-page')
    if (timeTrigger) {
      const delay = timeTrigger.value * 1000 + (timeTrigger.delay || 0)
      const timeout = setTimeout(() => handleTrigger(timeTrigger), delay)
      timeoutRefs.current.push(timeout)
    }

    const scrollTrigger = triggers.find((t) => t.type === 'scroll-depth')
    if (scrollTrigger) {
      const handleScroll = () => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

        if (scrollPercent >= scrollTrigger.value) {
          handleTrigger(scrollTrigger)
          window.removeEventListener('scroll', handleScroll)
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()

      return () => {
        window.removeEventListener('scroll', handleScroll)
        timeoutRefs.current.forEach(clearTimeout)
        timeoutRefs.current = []
      }
    }

    return () => {
      timeoutRefs.current.forEach(clearTimeout)
      timeoutRefs.current = []
    }
  }, [triggers, enabled, handleTrigger])

  // Reset function to allow re-triggering
  const reset = useCallback(() => {
    hasTriggered.current = false
  }, [])

  return { reset }
}
