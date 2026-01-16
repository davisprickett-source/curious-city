'use client'

import dynamic from 'next/dynamic'

export const ClientMapThumbnail = dynamic(
  () => import('./MapThumbnail').then(mod => ({ default: mod.MapThumbnail })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full md:w-[280px] h-[180px] bg-neutral-200 flex items-center justify-center text-neutral-500">
        Loading Map...
      </div>
    ),
  }
)
