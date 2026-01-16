'use client'

import { useState, useRef, useEffect } from 'react'

interface SaveButtonProps {
  name: string
  description?: string
  address?: string
  hours?: string
  phone?: string
  website?: string
  tip?: string // Special tip or insider info
  category?: string
  url?: string // Deep link URL to the entry
}

/**
 * Enhanced "Save Info" button with multiple save options
 * - Native share (mobile)
 * - Add to calendar
 * - Copy to clipboard
 * - Email to self
 * - Download as file
 */
export function SaveButton({
  name,
  description,
  address,
  hours,
  phone,
  website,
  tip,
  category,
  url
}: SaveButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null)
  const [supportsShare, setSupportsShare] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Check if Web Share API is supported (mainly mobile)
  useEffect(() => {
    setSupportsShare(typeof navigator !== 'undefined' && 'share' in navigator)
  }, [])

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

  const formatForNotes = () => {
    const lines: string[] = []

    // Header with name
    lines.push(name.toUpperCase())
    if (category) {
      lines.push(category)
    }
    lines.push('')

    // Description
    if (description) {
      lines.push(description)
      lines.push('')
    }

    // Details section
    const details: string[] = []
    if (address) details.push(address)
    if (hours) details.push(`Hours: ${hours}`)
    if (phone) details.push(`Tel: ${phone}`)
    if (website) details.push(website)

    if (details.length > 0) {
      lines.push(...details)
      lines.push('')
    }

    // Tip section
    if (tip) {
      lines.push(`Tip: ${tip}`)
      lines.push('')
    }

    // Attribution with link
    if (url) {
      lines.push(`via Curious City`)
      lines.push(url)
    } else {
      lines.push(`via Curious City`)
    }

    return lines.join('\n')
  }

  const showFeedback = (type: 'success' | 'error', message: string) => {
    setFeedback({ type, message })
    setTimeout(() => {
      setFeedback(null)
      if (type === 'success') {
        setIsOpen(false)
      }
    }, 2000)
  }

  const handleNativeShare = async () => {
    if (!navigator.share) return

    try {
      await navigator.share({
        title: name,
        text: formatForNotes(),
        url: url
      })
      showFeedback('success', 'Shared!')
    } catch (err) {
      // User cancelled or error occurred
      if ((err as Error).name !== 'AbortError') {
        console.error('Share failed:', err)
      }
    }
  }

  const handleCopyToClipboard = async () => {
    try {
      const formattedText = formatForNotes()
      await navigator.clipboard.writeText(formattedText)
      showFeedback('success', 'Copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy:', err)
      showFeedback('error', 'Failed to copy')
    }
  }

  const handleAddToCalendar = () => {
    // Create an .ics file for calendar apps
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Curious City//EN',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@curiouscity.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `SUMMARY:Visit ${name}`,
      description ? `DESCRIPTION:${description.replace(/\n/g, '\\n')}` : '',
      address ? `LOCATION:${address}` : '',
      url ? `URL:${url}` : '',
      'STATUS:TENTATIVE',
      'END:VEVENT',
      'END:VCALENDAR'
    ].filter(Boolean).join('\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${name.replace(/[^a-z0-9]/gi, '_')}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)

    showFeedback('success', 'Calendar event created!')
  }

  const handleEmailToSelf = () => {
    const subject = encodeURIComponent(`Visit: ${name}`)
    const body = encodeURIComponent(formatForNotes())
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
    showFeedback('success', 'Opening email...')
  }

  const handleDownloadNote = () => {
    const content = formatForNotes()
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${name.replace(/[^a-z0-9]/gi, '_')}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)

    showFeedback('success', 'Note downloaded!')
  }

  const saveOptions = [
    ...(supportsShare ? [{
      name: 'Share to app',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      description: 'Choose your favorite app',
      action: handleNativeShare
    }] : []),
    {
      name: 'Add to calendar',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Create calendar reminder',
      action: handleAddToCalendar
    },
    {
      name: 'Copy to clipboard',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Paste into notes',
      action: handleCopyToClipboard
    },
    {
      name: 'Email to self',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Send via email',
      action: handleEmailToSelf
    },
    {
      name: 'Download note',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: 'Save as text file',
      action: handleDownloadNote
    }
  ]

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-neutral-500 hover:text-neutral-700 transition-colors"
        title="Save info"
      >
        {feedback ? (
          <>
            <svg
              className={`w-5 h-5 ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {feedback.type === 'success' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              )}
            </svg>
            <span className={`text-sm font-medium ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {feedback.message}
            </span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="text-sm font-medium tracking-wide uppercase">Save</span>
          </>
        )}
      </button>

      {isOpen && !feedback && (
        <div className="absolute left-0 bottom-full mb-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-50">
          <div className="px-4 py-2 border-b border-neutral-100">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Save to</p>
          </div>
          {saveOptions.map((option) => (
            <button
              key={option.name}
              onClick={option.action}
              className="flex items-start gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors w-full text-left group"
            >
              <span className="text-neutral-400 group-hover:text-accent-600 transition-colors mt-0.5">
                {option.icon}
              </span>
              <div className="flex flex-col">
                <span className="font-medium">{option.name}</span>
                <span className="text-xs text-neutral-500">{option.description}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
