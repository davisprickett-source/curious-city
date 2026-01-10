/**
 * Image fetching utilities for events
 *
 * Provides fallback image sources when APIs don't return images.
 * Uses Wikimedia Commons and other open sources.
 */

interface ImageResult {
  url: string
  width?: number
  height?: number
  source: string
  license?: string
}

/**
 * Try to fetch an artist image from Wikimedia Commons
 * Uses the MediaWiki API to search for artist images
 */
export async function fetchArtistImage(artistName: string): Promise<ImageResult | null> {
  if (!artistName || artistName.length < 2) return null

  try {
    // Search Wikipedia for the artist
    const searchUrl = new URL('https://en.wikipedia.org/w/api.php')
    searchUrl.searchParams.set('action', 'query')
    searchUrl.searchParams.set('format', 'json')
    searchUrl.searchParams.set('origin', '*')
    searchUrl.searchParams.set('titles', artistName)
    searchUrl.searchParams.set('prop', 'pageimages')
    searchUrl.searchParams.set('pithumbsize', '800')
    searchUrl.searchParams.set('redirects', '1')

    const response = await fetch(searchUrl.toString())
    if (!response.ok) return null

    const data = await response.json()
    const pages = data.query?.pages

    if (!pages) return null

    // Get the first page with an image
    for (const pageId of Object.keys(pages)) {
      const page = pages[pageId]
      if (page.thumbnail?.source) {
        return {
          url: page.thumbnail.source,
          width: page.thumbnail.width,
          height: page.thumbnail.height,
          source: 'wikipedia',
          license: 'Various (check source)',
        }
      }
    }

    return null
  } catch (error) {
    console.error(`Error fetching artist image for ${artistName}:`, error)
    return null
  }
}

/**
 * Try to fetch a venue image from Wikimedia Commons
 */
export async function fetchVenueImage(venueName: string, city?: string): Promise<ImageResult | null> {
  if (!venueName || venueName.length < 2) return null

  try {
    const searchTerm = city ? `${venueName} ${city}` : venueName

    const searchUrl = new URL('https://en.wikipedia.org/w/api.php')
    searchUrl.searchParams.set('action', 'query')
    searchUrl.searchParams.set('format', 'json')
    searchUrl.searchParams.set('origin', '*')
    searchUrl.searchParams.set('titles', searchTerm)
    searchUrl.searchParams.set('prop', 'pageimages')
    searchUrl.searchParams.set('pithumbsize', '800')
    searchUrl.searchParams.set('redirects', '1')

    const response = await fetch(searchUrl.toString())
    if (!response.ok) return null

    const data = await response.json()
    const pages = data.query?.pages

    if (!pages) return null

    for (const pageId of Object.keys(pages)) {
      const page = pages[pageId]
      if (page.thumbnail?.source) {
        return {
          url: page.thumbnail.source,
          width: page.thumbnail.width,
          height: page.thumbnail.height,
          source: 'wikipedia',
          license: 'Various (check source)',
        }
      }
    }

    return null
  } catch (error) {
    console.error(`Error fetching venue image for ${venueName}:`, error)
    return null
  }
}

/**
 * Extract artist name from event title
 * Common patterns: "Artist Name at Venue", "Artist Name - Tour Name", etc.
 */
export function extractArtistFromTitle(title: string): string | null {
  if (!title) return null

  // Remove common suffixes
  let cleaned = title
    .replace(/\s+at\s+.+$/i, '')
    .replace(/\s+-\s+.+$/i, '')
    .replace(/\s+@\s+.+$/i, '')
    .replace(/\s+w\/\s*.+$/i, '')
    .replace(/\s+with\s+.+$/i, '')
    .replace(/\s+feat\.?\s+.+$/i, '')
    .replace(/\s+live\s*$/i, '')
    .replace(/\s+tour\s*$/i, '')
    .replace(/\s+concert\s*$/i, '')
    .trim()

  // If result is reasonable length, return it
  if (cleaned.length >= 2 && cleaned.length <= 100) {
    return cleaned
  }

  return null
}

/**
 * Try multiple strategies to get an image for an event
 */
export async function fetchEventImage(
  event: { title: string; venue?: string; city?: string; category?: string }
): Promise<ImageResult | null> {
  // For concert events, try to get artist image first
  if (event.category === 'concerts' || event.title.toLowerCase().includes('concert')) {
    const artistName = extractArtistFromTitle(event.title)
    if (artistName) {
      const artistImage = await fetchArtistImage(artistName)
      if (artistImage) return artistImage
    }
  }

  // Try to get venue image as fallback
  if (event.venue) {
    const venueImage = await fetchVenueImage(event.venue, event.city)
    if (venueImage) return venueImage
  }

  return null
}

/**
 * Batch fetch images for multiple events
 * Adds images to events that don't have them
 */
export async function enrichEventsWithImages<T extends { image?: { url: string }; title: string; venue?: string; city?: string; category?: string }>(
  events: T[],
  options?: { concurrency?: number; delayMs?: number }
): Promise<T[]> {
  const concurrency = options?.concurrency || 3
  const delayMs = options?.delayMs || 200

  const eventsNeedingImages = events.filter(e => !e.image?.url)
  const eventsWithImages = events.filter(e => e.image?.url)

  console.log(`  Fetching images for ${eventsNeedingImages.length} events without images...`)

  const enriched: T[] = []

  // Process in batches
  for (let i = 0; i < eventsNeedingImages.length; i += concurrency) {
    const batch = eventsNeedingImages.slice(i, i + concurrency)

    const results = await Promise.all(
      batch.map(async (event) => {
        const image = await fetchEventImage(event)
        if (image) {
          return { ...event, image: { url: image.url } }
        }
        return event
      })
    )

    enriched.push(...results)

    // Rate limiting
    if (i + concurrency < eventsNeedingImages.length) {
      await new Promise(resolve => setTimeout(resolve, delayMs))
    }
  }

  const foundImages = enriched.filter(e => e.image?.url).length - eventsWithImages.length
  console.log(`  Found ${foundImages} additional images from fallback sources`)

  return [...eventsWithImages, ...enriched]
}
