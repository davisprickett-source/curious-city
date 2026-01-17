'use client'

import { useState, useRef, useEffect } from 'react'

interface ShareButtonProps {
  title: string
  url?: string
  anchor?: string // Optional anchor ID for deep linking (e.g., "gem-underground-3")
  shareText?: string // Optional compelling text for social shares (uses description/hook)
  dropdownPosition?: 'above' | 'below' // Where to show dropdown (default: above)
  onDark?: boolean // Whether button is on dark background
}

/**
 * Share button with rust-colored "SHARE" text and icon
 * Used in article and discover page headers, and individual entry cards
 *
 * @param title - Entry or page title
 * @param url - Optional base URL (defaults to current page)
 * @param anchor - Optional anchor ID to append as hash fragment for deep linking
 * @param shareText - Optional compelling text for Twitter/social (e.g., entry description)
 * @param dropdownPosition - 'above' or 'below' (default: above)
 * @param onDark - Use light colors for dark backgrounds
 */
export function ShareButton({ title, url, anchor, shareText, dropdownPosition = 'above', onDark = false }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const getShareUrl = () => {
    let baseUrl = url
    if (!baseUrl && typeof window !== 'undefined') {
      // Get URL without existing hash
      baseUrl = window.location.href.split('#')[0]
    }
    // Append anchor if provided
    if (anchor && baseUrl) {
      return `${baseUrl}#${anchor}`
    }
    return baseUrl || ''
  }

  const shareUrl = getShareUrl()
  const encodedUrl = encodeURIComponent(shareUrl)
  // Use shareText for social if provided, otherwise fall back to title
  const socialText = shareText || title
  const encodedSocialText = encodeURIComponent(socialText)
  const encodedTitle = encodeURIComponent(title)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    // Delay closing to allow moving to menu
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
        setIsOpen(false)
      }, 1500)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareLinks = [
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?text=${encodedSocialText}&url=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  // Button colors based on background
  const buttonColors = onDark
    ? 'text-white/90 hover:text-white'
    : 'text-[#c65d3b] hover:text-[#a54d30]'

  // Dropdown position classes
  const dropdownPositionClasses = dropdownPosition === 'below'
    ? 'top-full mt-2'
    : 'bottom-full mb-2'

  return (
    <div
      className="relative inline-block"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 ${buttonColors} transition-colors`}
      >
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-12 scale-110' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        <span className="text-sm font-bold tracking-wider uppercase">SHARE</span>
      </button>

      {/* Dropdown with animation */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 ${dropdownPositionClasses} w-48 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-[70] transition-all duration-200 ease-out ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 pointer-events-none ' + (dropdownPosition === 'below' ? '-translate-y-2' : 'translate-y-2')
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {shareLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 hover:bg-[#c65d3b]/10 hover:text-[#c65d3b] transition-all duration-150"
            style={{ transitionDelay: isOpen ? `${index * 30}ms` : '0ms' }}
          >
            <span className="text-neutral-400 group-hover:text-[#c65d3b] transition-colors">{link.icon}</span>
            {link.name}
          </a>
        ))}
        <hr className="my-2 border-neutral-100" />
        <button
          onClick={(e) => {
            e.preventDefault()
            handleCopyLink()
          }}
          className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 hover:bg-[#c65d3b]/10 hover:text-[#c65d3b] transition-all duration-150 w-full text-left"
        >
          <span className="text-neutral-400">
            {copied ? (
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </span>
          {copied ? 'Copied!' : 'Copy link'}
        </button>
      </div>
    </div>
  )
}
