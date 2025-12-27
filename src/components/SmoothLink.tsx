'use client'

import Link from 'next/link'
import { ComponentProps, MouseEvent } from 'react'
import { scrollToElement } from '@/hooks/useLenis'

type SmoothLinkProps = ComponentProps<typeof Link>

/**
 * Drop-in replacement for Next.js Link that smoothly scrolls to anchor links
 * For regular links, behaves exactly like Next.js Link
 * For anchor links (#section), uses Lenis for butter-smooth scrolling
 */
export function SmoothLink({ href, onClick, ...props }: SmoothLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)

    // Check if it's an anchor link (#something)
    if (typeof href === 'string' && href.startsWith('#')) {
      e.preventDefault()
      const target = href.slice(1)
      scrollToElement(`#${target}`, -80) // -80px offset for sticky header
    }
  }

  return <Link href={href} onClick={handleClick} {...props} />
}
