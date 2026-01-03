/**
 * Article Type Definitions
 *
 * Unified article system that supports multiple formats:
 * - Longform reading (traditional article)
 * - Scrollytelling (animated video with synchronized content)
 *
 * Articles can have one or both formats, allowing seamless toggling.
 */

export interface Article {
  slug: string
  citySlug: string
  title: string
  subtitle?: string
  excerpt: string
  author: {
    name: string
    bio?: string
    avatar?: string
  }
  publishedAt: string
  updatedAt?: string
  featuredImage?: {
    src: string
    alt: string
    credit?: string
  }
  category: ArticleCategory
  tags: string[]

  // Multi-format support
  formats: ArticleFormats
  defaultFormat: 'longform' | 'scrollytelling'

  seo: {
    metaDescription: string
    ogImage?: string
  }
  premium?: boolean
  relatedArticles?: string[] // Array of article slugs
}

/**
 * Article format configurations
 * At least one format must be enabled
 */
export interface ArticleFormats {
  longform: LongformFormat
  scrollytelling?: ScrollytellingFormat
}

/**
 * Traditional article reading format
 */
export interface LongformFormat {
  enabled: boolean
  blocks: ArticleBlock[]
}

/**
 * Scrollytelling format with video and synchronized content
 */
export interface ScrollytellingFormat {
  enabled: boolean
  videoSequence: string // Path to video or image sequence
  sequences: ScrollSequence[]
  premium?: boolean
}

export interface ScrollSequence {
  id: string
  frame: number
  title?: string
  body?: string
  citation?: string
  style?: 'overlay' | 'side' | 'bottom'
  textPosition?: 'left' | 'right' | 'center'
}

export type ArticleCategory =
  | 'guide' // How-to, where to go, practical advice
  | 'feature' // In-depth exploration, long-form journalism
  | 'news' // Local news, updates, current events
  | 'list' // "Best of" lists, rankings, curated collections
  | 'interview' // Q&A with locals, business owners, artists
  | 'history' // Historical deep-dive, archival research
  | 'event-coverage' // Event recaps, festival coverage
  | 'opinion' // Commentary, essays, perspectives

export type ArticleBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | GalleryBlock
  | QuoteBlock
  | EmbedBlock
  | AdBlock
  | DividerBlock
  | CalloutBlock

export interface ParagraphBlock {
  type: 'paragraph'
  content: string
}

export interface HeadingBlock {
  type: 'heading'
  level: 2 | 3 | 4
  content: string
}

export interface ImageBlock {
  type: 'image'
  src: string
  alt: string
  caption?: string
  credit?: string
}

export interface GalleryBlock {
  type: 'gallery'
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
}

export interface QuoteBlock {
  type: 'quote'
  content: string
  attribution?: string
  role?: string // e.g., "Local Historian", "Restaurant Owner"
}

export interface EmbedBlock {
  type: 'embed'
  url: string
  platform: 'youtube' | 'instagram' | 'twitter' | 'vimeo' | 'spotify'
  caption?: string
}

export interface AdBlock {
  type: 'ad'
  size: 'banner' | 'rectangle' | 'leaderboard'
}

export interface DividerBlock {
  type: 'divider'
  style?: 'solid' | 'dashed' | 'dotted'
}

export interface CalloutBlock {
  type: 'callout'
  content: string
  variant?: 'info' | 'tip' | 'warning' | 'success'
  title?: string
}

/**
 * Article Metadata (for feeds and listings)
 * Lightweight version for initial page load
 */
export interface ArticleMetadata {
  slug: string
  citySlug: string
  title: string
  subtitle?: string
  excerpt: string
  category: ArticleCategory
  tags: string[]
  publishedAt: string
  featuredImage?: {
    src: string
    alt: string
  }
  author: {
    name: string
  }
  // Format availability (to show icons/badges)
  hasScrollytelling: boolean
  hasLongform: boolean
  defaultFormat: 'longform' | 'scrollytelling'
  premium?: boolean
  readTime?: string // e.g., "8 min read"
}

/**
 * Article Query Options
 */
export interface ArticleQueryOptions {
  limit?: number
  offset?: number
  category?: ArticleCategory
  tags?: string[]
  citySlug?: string
  sortBy?: 'publishedAt' | 'updatedAt' | 'title'
  sortOrder?: 'asc' | 'desc'
}
