'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

export function HomepageGAMAd() {
  const isLoaded = useRef(false)

  useEffect(() => {
    // @ts-ignore
    window.googletag = window.googletag || { cmd: [] }

    // @ts-ignore
    window.googletag.cmd.push(function() {
      // Define the slot if it doesn't exist
      // @ts-ignore
      const existingSlots = window.googletag.pubads().getSlots()
      // @ts-ignore
      const existingSlot = existingSlots.find(s => s.getSlotElementId() === 'div-gpt-ad-1769799240744-0')

      if (!existingSlot) {
        // @ts-ignore
        window.googletag.defineSlot('/23337244170/homepage', [[160, 600], [970, 250], [300, 250], [728, 90], [320, 50]], 'div-gpt-ad-1769799240744-0')
          // @ts-ignore
          .addService(window.googletag.pubads())
        
        // Only enable services if not already enabled (though checking is hard, calling it again is usually safe or ignored)
        // @ts-ignore
        window.googletag.pubads().enableSingleRequest()
        // @ts-ignore
        window.googletag.enableServices()
      }

      // Display the ad
      // @ts-ignore
      window.googletag.display('div-gpt-ad-1769799240744-0')
    })

    return () => {
      // Cleanup on unmount to prevent slot collisions when navigating back
      // @ts-ignore
      window.googletag.cmd.push(function() {
        // @ts-ignore
        const slots = window.googletag.pubads().getSlots()
        // @ts-ignore
        const slotToRemove = slots.find(s => s.getSlotElementId() === 'div-gpt-ad-1769799240744-0')
        if (slotToRemove) {
          // @ts-ignore
          window.googletag.destroySlots([slotToRemove])
        }
      })
    }
  }, [])

  return (
    <div className="flex justify-center my-8">
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <div
        id="div-gpt-ad-1769799240744-0"
        style={{ minWidth: '160px', minHeight: '50px' }}
      />
    </div>
  )
}
