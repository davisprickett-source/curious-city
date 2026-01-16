'use client'

import { useState } from 'react'

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
 * Premium "Save Info" button that copies formatted entry details to clipboard
 * Designed to paste beautifully into Notes, messages, or any text app
 *
 * @param name - Entry name (e.g., "Williams & Graham Speakeasy")
 * @param description - Brief description or hook
 * @param address - Physical address
 * @param hours - Operating hours
 * @param phone - Phone number
 * @param website - Website URL
 * @param tip - Insider tip or special note
 * @param category - Category label (e.g., "Speakeasy", "Coffee Shop")
 * @param url - Deep link URL back to the entry
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
  const [copied, setCopied] = useState(false)

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

  const handleSave = async () => {
    try {
      const formattedText = formatForNotes()
      await navigator.clipboard.writeText(formattedText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleSave}
      className="flex items-center gap-2 text-neutral-500 hover:text-neutral-700 transition-colors"
      title="Copy info to clipboard"
    >
      {copied ? (
        <>
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium text-green-600">Saved!</span>
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
  )
}
