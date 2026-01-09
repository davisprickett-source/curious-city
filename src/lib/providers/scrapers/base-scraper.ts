/**
 * Base class for venue/site scrapers
 */

import { BaseProvider } from '../base'
import type { ProviderConfig } from '../types'

/**
 * Abstract base class for scrapers with common utilities
 */
export abstract class BaseScraperProvider extends BaseProvider {
  protected userAgent = 'Mozilla/5.0 (compatible; CuriousCityBot/1.0; +https://curiouscity.com)'

  constructor(config: Partial<ProviderConfig> & { name: string; slug: string }) {
    super({
      sourceType: 'venue-scraper',
      // Be respectful with rate limits for scrapers
      rateLimit: {
        requestsPerMinute: 10,
        delayMs: 6000,
      },
      timeout: 30000,
      retries: 1, // Don't hammer venues on failure
      ...config,
    })
  }

  /**
   * Fetch a page with proper headers
   */
  protected async fetchPage(url: string): Promise<string> {
    const response = await fetch(url, {
      headers: {
        'User-Agent': this.userAgent,
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    return response.text()
  }

  /**
   * Extract text between two markers
   */
  protected extractBetween(html: string, start: string, end: string): string | null {
    const startIdx = html.indexOf(start)
    if (startIdx === -1) return null

    const endIdx = html.indexOf(end, startIdx + start.length)
    if (endIdx === -1) return null

    return html.substring(startIdx + start.length, endIdx)
  }

  /**
   * Extract all matches between markers
   */
  protected extractAllBetween(html: string, start: string, end: string): string[] {
    const results: string[] = []
    let searchStart = 0

    while (true) {
      const startIdx = html.indexOf(start, searchStart)
      if (startIdx === -1) break

      const endIdx = html.indexOf(end, startIdx + start.length)
      if (endIdx === -1) break

      results.push(html.substring(startIdx + start.length, endIdx))
      searchStart = endIdx + end.length
    }

    return results
  }

  /**
   * Clean HTML to plain text
   */
  protected stripHtml(html: string): string {
    return html
      .replace(/<[^>]*>/g, '') // Remove tags
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim()
  }

  /**
   * Parse a date string to ISO format
   * Handles common patterns like "Jan 10", "January 10, 2026", "2026-01-10"
   */
  protected parseDate(dateStr: string, year?: number): string | null {
    const currentYear = year || new Date().getFullYear()

    // Already ISO format
    if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
      return dateStr
    }

    // Month day format: "Jan 10", "January 10"
    const monthDayMatch = dateStr.match(
      /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{1,2})/i
    )
    if (monthDayMatch) {
      const months: Record<string, string> = {
        jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
        jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
      }
      const month = months[monthDayMatch[1].toLowerCase().slice(0, 3)]
      const day = monthDayMatch[2].padStart(2, '0')
      return `${currentYear}-${month}-${day}`
    }

    // Try native parsing as fallback
    try {
      const parsed = new Date(dateStr)
      if (!isNaN(parsed.getTime())) {
        return parsed.toISOString().split('T')[0]
      }
    } catch {
      // Ignore parse errors
    }

    return null
  }

  /**
   * Parse time string to 24h format
   * Handles "7:00 PM", "7pm", "19:00"
   */
  protected parseTime(timeStr: string): string | null {
    // Already 24h format
    if (/^\d{2}:\d{2}$/.test(timeStr)) {
      return timeStr
    }

    // 12h format: "7:00 PM", "7pm", "7:30pm"
    const match = timeStr.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)/i)
    if (match) {
      let hours = parseInt(match[1], 10)
      const minutes = match[2] || '00'
      const isPM = match[3].toLowerCase() === 'pm'

      if (isPM && hours !== 12) hours += 12
      if (!isPM && hours === 12) hours = 0

      return `${hours.toString().padStart(2, '0')}:${minutes}`
    }

    return null
  }

  /**
   * Combine date and time into ISO 8601 datetime
   */
  protected toIsoDateTime(date: string, time?: string): string {
    if (time) {
      return `${date}T${time}:00`
    }
    // Default to 8pm for events without time
    return `${date}T20:00:00`
  }

  /**
   * Truncate description to reasonable length
   */
  protected truncateDescription(text: string, maxLength: number = 300): string {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength - 3).trim() + '...'
  }

  /**
   * Extract URLs from href attributes
   */
  protected extractHrefs(html: string, pattern?: RegExp): string[] {
    const hrefRegex = /href=["']([^"']+)["']/g
    const urls: string[] = []
    let match

    while ((match = hrefRegex.exec(html)) !== null) {
      const url = match[1]
      if (!pattern || pattern.test(url)) {
        urls.push(url)
      }
    }

    return urls
  }

  /**
   * Extract image src from img tags
   */
  protected extractImageSrc(html: string): string | null {
    const match = html.match(/src=["']([^"']+\.(jpg|jpeg|png|webp|gif)[^"']*)["']/i)
    return match ? match[1] : null
  }
}
