'use client'

import dynamic from 'next/dynamic'

/**
 * Client-side wrapper for ScrollyMapView
 * This allows us to use ssr: false with next/dynamic in Next.js 16 App Router
 */
export const ClientScrollyMapView = dynamic(
  () => import('./ScrollyMapView').then(mod => ({ default: mod.ScrollyMapView })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen bg-neutral-900 flex items-center justify-center text-neutral-500">
        Loading Map...
      </div>
    ),
  }
)
