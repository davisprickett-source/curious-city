// ============================================
// Composable Mixins
// These interfaces can be combined to create content types
// with shared functionality without duplication
// ============================================

/** Content with an image */
export interface WithImage {
  image?: {
    src: string
    alt: string
    caption?: string
    credit?: string
    year?: string
  }
}

/** Content with multiple images (gallery/carousel) */
export interface WithImages {
  images?: Array<{
    src: string
    alt: string
    caption?: string
    credit?: string
  }>
}

/** Content with geographic coordinates */
export interface WithCoordinates {
  coordinates?: {
    lat: number
    lng: number
  }
}

/** Content with a physical location */
export interface WithLocation {
  location?: {
    name: string
    coordinates?: {
      lat: number
      lng: number
    }
    stillExists?: boolean
  }
}

/** Content with source attribution */
export interface WithSource {
  source?: string
}

/** Content with multiple source links */
export interface WithSources {
  sources?: Array<{
    title: string
    url: string
  }>
}

/** Content with additional info links */
export interface WithMoreInfo {
  moreInfo?: Array<{
    title: string
    url: string
    type?: 'article' | 'video' | 'podcast' | 'book' | 'archive'
  }>
}

/** Content with address and contact info */
export interface WithContactInfo {
  address?: string
  phone?: string
  website?: string
  hours?: string
}

// ============================================
// Base Types
// ============================================

// Base content item that all content types extend
export interface BaseContentItem {
  id: string
  type: string
}

// Generic text content
export interface TextContentItem extends BaseContentItem {
  type: 'text'
  content: string
}

// Card content
export interface CardContentItem extends BaseContentItem {
  type: 'card'
  title: string
  description?: string
  href?: string
  meta?: string
  variant?: 'default' | 'compact' | 'featured'
}

// Card list (multiple cards in a section)
export interface CardListContentItem extends BaseContentItem {
  type: 'card-list'
  title?: string
  cards: Omit<CardContentItem, 'type' | 'id'>[]
}

// ============================================
// Enhanced Event System Types
// ============================================

// Event status for automatic time-based filtering
export type EventStatus =
  | 'happening-now'    // Currently in progress
  | 'starts-soon'      // Within next 2 hours
  | 'today'            // Later today
  | 'tomorrow'         // Tomorrow
  | 'this-weekend'     // Fri-Sun of current week
  | 'this-week'        // Mon-Sun of current week
  | 'next-week'        // Following Mon-Sun
  | 'this-month'       // Current month
  | 'upcoming'         // Future
  | 'ended'            // Past (should be filtered out)

// Enhanced event item with automatic date handling
export interface EventItem {
  // Core info
  title: string
  description: string
  location?: string
  href?: string
  image?: {
    src: string
    alt: string
  }

  // Enhanced temporal data (ISO 8601 format)
  startDate: string // "2025-12-24T19:00:00"
  endDate?: string  // For multi-day events or events with end times
  isAllDay?: boolean // For all-day events

  // Recurrence (future enhancement)
  isRecurring?: boolean
  recurrenceRule?: string // "every Friday" or cron-like syntax

  // Display metadata
  category: 'event' | 'opening' | 'closing' | 'seasonal' | 'limited' | 'popup'
  tags?: string[] // ["free", "family-friendly", "outdoor"]

  // Additional info links
  moreInfo?: Array<{
    title: string
    url: string
    type?: 'tickets' | 'article' | 'video' | 'directions' | 'rsvp'
  }>

  // Auto-expiration
  expiresAt?: string // When to stop showing this event (if different from endDate)
}

// Events content item (can coexist with ThisWeekContentItem)
export interface EventsContentItem extends BaseContentItem {
  type: 'events'
  title?: string
  intro?: string
  items: EventItem[]
}

// Ad placeholder
export interface AdContentItem extends BaseContentItem {
  type: 'ad'
  size?: 'banner' | 'rectangle' | 'leaderboard'
}

// Section with title and nested content
export interface SectionContentItem extends BaseContentItem {
  type: 'section'
  title?: string
  items: ContentItem[]
}

// Curiosity item - short, self-contained fact or explanation
export interface CuriosityContentItem extends BaseContentItem {
  type: 'curiosity'
  title: string
  body: string
  category?: 'history' | 'architecture' | 'underground' | 'science' | 'culture' | 'law' | 'invention' | 'legend' | 'nature'
  year?: string
  illustration?: React.ComponentType
  video?: {
    youtubeId: string
    title?: string
  }
  image?: {
    src: string
    alt: string
    caption?: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt: string
    caption?: string
    credit?: string
  }>
  source?: string
  sources?: Array<{
    title: string
    url: string
  }>
  location?: {
    name: string
    stillExists?: boolean
  }
}

// Hidden gem - a place or experience recommendation
export interface HiddenGemContentItem extends BaseContentItem {
  type: 'hidden-gem'
  name: string
  category: string
  description: string
  location?: string
  tip?: string
  // Extended fields for richer content
  image?: {
    src: string
    alt: string
    caption?: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt: string
    caption?: string
    credit?: string
  }>
  coordinates?: {
    lat: number
    lng: number
  }
  address?: string
  hours?: string
  website?: string
  phone?: string
  price?: string
  accessibility?: string
}

// Individual location for multi-location spots
export interface SpotLocation {
  name: string // e.g., "Whittier", "Northeast", "Downtown"
  address: string
  neighborhood?: string
  coordinates?: {
    lat: number
    lng: number
  }
  hours?: string // If different from main hours
  note?: string // Brief location-specific note
}

// Individual spot in a best-of list
export interface BestOfSpot {
  name: string
  neighborhood: string
  vibe: string // Short, punchy description of the feel
  order: string // What to get - "the move"
  why: string // Why it's special / why locals miss it
  image?: {
    src: string
    alt: string
    caption?: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt: string
    caption?: string
    credit?: string
  }>
  menuImage?: {
    src: string
    alt: string
    credit?: string
  }
  address?: string
  coordinates?: {
    lat: number
    lng: number
  }
  // Multiple locations for chains/multi-location spots
  locations?: SpotLocation[]
  hours?: string
  price?: '$' | '$$' | '$$$' | '$$$$'
  website?: string
  instagram?: string
  facebook?: string
  menu?: string
}

// Best-of list - curated spots locals should know
export interface BestOfContentItem extends BaseContentItem {
  type: 'best-of'
  category: 'bars' | 'restaurants' | 'cafes' | 'bakeries' | 'cocktails' | 'dives' | 'date-night' | 'brunch' | 'late-night' | 'coffee-shops'
  title: string
  intro?: string // Brief editorial intro
  spots: BestOfSpot[]
}

// Obscure history item - deeper historical stories most don't know
export interface HistoryContentItem extends BaseContentItem {
  type: 'history'
  era?: string // e.g., "1890s", "Pre-Colonial", "Prohibition"
  title: string
  body: string
  source?: string // Attribution or where to learn more
  image?: {
    src: string
    alt: string
    credit?: string
    year?: string
  }
  location?: {
    name: string
    coordinates?: {
      lat: number
      lng: number
    }
    stillExists?: boolean
  }
}

// Dark history - forgotten crimes, unsolved mysteries, macabre events
export interface DarkHistoryContentItem extends BaseContentItem {
  type: 'dark-history'
  category: 'unsolved' | 'crime' | 'disaster' | 'mystery' | 'macabre' | 'forgotten' | 'haunting' | 'cold-case'
  year?: string // e.g., "1922", "1890s", "Unknown"
  title: string
  body: string
  verdict?: string // What happened / resolution status
  source?: string // Attribution or where to learn more
  sources?: Array<{
    title: string
    url: string
  }>
  moreInfo?: Array<{
    title: string
    type: 'podcast' | 'video' | 'article' | 'book'
    url: string
  }>
  image?: {
    src: string
    alt: string
    caption?: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt: string
    caption?: string
    credit?: string
  }>
  location?: {
    name: string
    coordinates?: {
      lat: number
      lng: number
    }
    stillExists?: boolean
  }
}

// Lost & Loved - closed businesses with emotional resonance
export interface LostAndLovedContentItem extends BaseContentItem {
  type: 'lost-and-loved'
  category: 'restaurant' | 'bar' | 'shop' | 'theater' | 'music-venue' | 'cafe' | 'bookstore' | 'entertainment' | 'institution'
  name: string
  neighborhood: string
  yearsOpen?: string // e.g., "1952-2019", "1980s-2023"
  description: string // What it was, what made it special
  whyMissed: string // Specific reason people miss it
  communityVoice?: string // Quote or community reaction
  image?: {
    src: string
    alt: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt: string
    credit?: string
  }>
  video?: {
    youtubeId: string
    title?: string
    timestamp?: number // Start time in seconds
  }
  lastAddress?: string
  coordinates?: {
    lat: number
    lng: number
  }
  source?: string
  sources?: Array<{
    title: string
    url: string
  }>
}

// Scene - visual media item (photo or video)
export interface SceneItem {
  type: 'image' | 'video'
  src: string
  alt?: string
  caption?: string
  credit?: string
  location?: string
  date?: string // When it was taken
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16' | 'auto'
  // Video-specific
  poster?: string // Thumbnail for video
  duration?: string // e.g., "0:45", "2:30"
}

export interface SceneContentItem extends BaseContentItem {
  type: 'scene'
  title?: string
  description?: string
  category?: 'street' | 'architecture' | 'nature' | 'food' | 'people' | 'night' | 'seasons' | 'historic' | 'art' | 'urban' | 'weather' | 'interior' | 'cityscape' | 'water' | 'neighborhood'
  media?: SceneItem
  images?: Array<{
    src: string
    alt: string
    caption?: string
    credit?: string
  }>
}

// Union type for all content items
export type ContentItem =
  | TextContentItem
  | CardContentItem
  | CardListContentItem
  | EventsContentItem
  | AdContentItem
  | SectionContentItem
  | CuriosityContentItem
  | HiddenGemContentItem
  | BestOfContentItem
  | HistoryContentItem
  | DarkHistoryContentItem
  | LostAndLovedContentItem
  | SceneContentItem

// Hero image for history articles and cities
export interface HeroImage {
  src: string
  alt: string
  credit?: string
  position?: 'center' | 'top' | 'bottom' // focal point for cropping
}

// City data structure
export interface CityData {
  slug: string
  name: string
  tagline?: string
  heroImage?: HeroImage
  content: ContentItem[]
  // API configuration for event fetching
  eventbriteCity?: string
  latitude?: number
  longitude?: number
}

// Cities index
export interface CitiesIndex {
  [slug: string]: CityData
}

// ============================================
// History / Long-form content types
// ============================================

// Base block for history content
export interface BaseHistoryBlock {
  id: string
  type: string
}

// Paragraph block
export interface ParagraphBlock extends BaseHistoryBlock {
  type: 'paragraph'
  content: string
  dropcap?: boolean
}

// Pull quote block
export interface PullQuoteBlock extends BaseHistoryBlock {
  type: 'pullquote'
  content: string
  attribution?: string
}

// Section break (visual pause)
export interface SectionBreakBlock extends BaseHistoryBlock {
  type: 'break'
  style?: 'dots' | 'line' | 'space'
}

// Subheading within history
export interface SubheadingBlock extends BaseHistoryBlock {
  type: 'subheading'
  content: string
}

// Ad block (sparse, treated as pause)
export interface HistoryAdBlock extends BaseHistoryBlock {
  type: 'ad'
  size?: 'banner' | 'rectangle'
}

// Union of all history block types
export type HistoryBlock =
  | ParagraphBlock
  | PullQuoteBlock
  | SectionBreakBlock
  | SubheadingBlock
  | HistoryAdBlock

// History metadata and content
export interface History {
  slug: string
  citySlug: string
  title: string
  subtitle?: string
  author?: string
  publishedAt?: string
  heroImage?: HeroImage
  blocks: HistoryBlock[]
}

// History index by city then slug
export interface HistoryIndex {
  [citySlug: string]: {
    [historySlug: string]: History
  }
}
