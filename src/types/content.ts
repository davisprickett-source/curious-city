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

// This week / current happenings item
export interface ThisWeekItem {
  title: string
  description: string
  date?: string // e.g., "Dec 24", "Dec 24-26", "Through Dec 31"
  time?: string // e.g., "7pm", "All day"
  location?: string
  category?: 'event' | 'opening' | 'closing' | 'seasonal' | 'limited' | 'popup'
  href?: string
  image?: {
    src: string
    alt: string
  }
}

export interface ThisWeekContentItem extends BaseContentItem {
  type: 'this-week'
  title?: string
  intro?: string
  items: ThisWeekItem[]
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
  image?: {
    src: string
    alt: string
    credit?: string
  }
  source?: string
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
    credit?: string
  }
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
    credit?: string
  }
  images?: Array<{
    src: string
    alt: string
    credit?: string
  }>
  address?: string
  coordinates?: {
    lat: number
    lng: number
  }
  hours?: string
  price?: '$' | '$$' | '$$$' | '$$$$'
  website?: string
  instagram?: string
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
  image?: {
    src: string
    alt: string
    credit?: string
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
  lastAddress?: string
  coordinates?: {
    lat: number
    lng: number
  }
  source?: string
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
  category?: 'street' | 'architecture' | 'nature' | 'food' | 'people' | 'night' | 'seasons' | 'historic'
  media: SceneItem
}

// Union type for all content items
export type ContentItem =
  | TextContentItem
  | CardContentItem
  | CardListContentItem
  | ThisWeekContentItem
  | AdContentItem
  | SectionContentItem
  | CuriosityContentItem
  | HiddenGemContentItem
  | BestOfContentItem
  | HistoryContentItem
  | DarkHistoryContentItem
  | LostAndLovedContentItem
  | SceneContentItem

// Hero image for essays and cities
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
}

// Cities index
export interface CitiesIndex {
  [slug: string]: CityData
}

// ============================================
// Essay / Long-form content types
// ============================================

// Base block for essay content
export interface BaseEssayBlock {
  id: string
  type: string
}

// Paragraph block
export interface ParagraphBlock extends BaseEssayBlock {
  type: 'paragraph'
  content: string
  dropcap?: boolean
}

// Pull quote block
export interface PullQuoteBlock extends BaseEssayBlock {
  type: 'pullquote'
  content: string
  attribution?: string
}

// Section break (visual pause)
export interface SectionBreakBlock extends BaseEssayBlock {
  type: 'break'
  style?: 'dots' | 'line' | 'space'
}

// Subheading within essay
export interface SubheadingBlock extends BaseEssayBlock {
  type: 'subheading'
  content: string
}

// Ad block (sparse, treated as pause)
export interface EssayAdBlock extends BaseEssayBlock {
  type: 'ad'
  size?: 'banner' | 'rectangle'
}

// Union of all essay block types
export type EssayBlock =
  | ParagraphBlock
  | PullQuoteBlock
  | SectionBreakBlock
  | SubheadingBlock
  | EssayAdBlock

// Essay metadata and content
export interface Essay {
  slug: string
  citySlug: string
  title: string
  subtitle?: string
  author?: string
  publishedAt?: string
  heroImage?: HeroImage
  blocks: EssayBlock[]
}

// Essays index by city then slug
export interface EssaysIndex {
  [citySlug: string]: {
    [essaySlug: string]: Essay
  }
}
