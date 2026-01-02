'use client'

import Link from 'next/link'
import { routes } from '@/lib/routes'
import type { MenuFooterProps } from './types'

export function MenuFooter({ onClose }: MenuFooterProps) {
  const browseAllLinks = [
    { label: 'All Hidden Gems', href: routes.category('hidden-gems') },
    { label: 'All Best Bars', href: routes.category('bars') },
    { label: 'All Best Restaurants', href: routes.category('restaurants') },
    { label: 'All Dark History', href: routes.category('dark-history') },
  ]

  return (
    <div className="flex-shrink-0 border-t border-neutral-200 bg-[#f8f7f4] px-8 py-6">
      <div className="eyebrow text-neutral-500 mb-4">Browse All</div>
      <nav aria-label="Browse all categories">
        <ul role="list" className="space-y-3">
          {browseAllLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block text-accent-600 hover:text-accent-700 transition-colors text-base font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
