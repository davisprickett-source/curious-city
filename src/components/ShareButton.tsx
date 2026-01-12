'use client'

import { ShareLinks } from './ShareLinks'

interface ShareButtonProps {
  title: string
  url?: string
}

/**
 * Simple share button with rust-colored "SHARE" text
 * Used in article and discover page headers
 */
export function ShareButton({ title, url }: ShareButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#c65d3b] text-sm font-bold tracking-wider uppercase">SHARE</span>
      <ShareLinks title={title} url={url} variant="compact" />
    </div>
  )
}
