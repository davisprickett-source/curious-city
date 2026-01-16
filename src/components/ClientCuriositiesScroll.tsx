'use client'

import dynamic from 'next/dynamic'

export const ClientCuriositiesScroll = dynamic(
  () => import('./CuriositiesScroll'),
  {
    ssr: false,
    loading: () => (
      <div className="container-page py-20">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-neutral-900 border-r-transparent"></div>
          <p className="mt-4 text-neutral-500">Loading...</p>
        </div>
      </div>
    ),
  }
)
