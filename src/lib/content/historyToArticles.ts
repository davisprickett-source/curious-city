/**
 * Convert History essays to Article format
 *
 * This allows history essays to be accessed through the /articles route
 * while maintaining backward compatibility with existing data structures.
 */

import type { History } from '@/types/content'
import type { Article, ArticleBlock } from '@/types/article'
import { getAllHistory, getHistory as getHistoryEssay } from '@/data/history'

/**
 * Convert a single History essay to Article format
 */
export function historyToArticle(history: History): Article {
  // For video-sequence history essays, use the first frame as the featured image
  const featuredImage = history.heroImage
    ? {
        src: history.heroImage.src,
        alt: history.heroImage.alt || history.title,
        credit: history.heroImage.credit,
      }
    : extractFirstVideoFrame(history.blocks, history.citySlug)

  return {
    slug: history.slug,
    citySlug: history.citySlug,
    title: history.title,
    subtitle: history.subtitle,
    excerpt: extractExcerpt(history.blocks),

    author: {
      name: history.author || 'Curious City',
      bio: 'Exploring the untold stories of American cities',
    },

    publishedAt: history.publishedAt || new Date().toISOString(),
    updatedAt: undefined,

    featuredImage,

    category: 'history',
    tags: extractTags(),

    // History essays are longform only (for now)
    formats: {
      longform: {
        enabled: true,
        blocks: convertBlocks(history.blocks),
      },
      // TODO: Add scrollytelling when videos are available
      scrollytelling: undefined,
    },

    defaultFormat: 'longform',

    seo: {
      metaDescription: extractExcerpt(history.blocks, 160),
      ogImage: history.heroImage?.src,
    },

    premium: history.premium?.enabled || history.premium?.isPremium || false,
    relatedArticles: [],
  }
}

/**
 * Convert History blocks to Article blocks
 * History blocks include scrollytelling types we'll skip for now
 */
function convertBlocks(historyBlocks: History['blocks']): ArticleBlock[] {
  return historyBlocks
    .map((block): ArticleBlock | null => {
      switch (block.type) {
        case 'paragraph':
          return {
            type: 'paragraph',
            content: block.content,
          }

        case 'subheading':
          return {
            type: 'heading',
            level: 3,
            content: block.content,
          }

        case 'pullquote':
          return {
            type: 'quote',
            content: block.content,
          }

        case 'ad':
          return {
            type: 'ad',
            size: 'banner',
          }

        case 'break':
          return {
            type: 'divider',
            style: 'solid',
          }

        // Skip scrollytelling-specific blocks for now
        // (will be used when scrollytelling format is enabled)
        case 'image-sequence':
        case 'scroll-text':
        case 'mixed-sequence':
        case 'video-sequence':
          return null

        default:
          // Unknown block type
          return null
      }
    })
    .filter((block): block is ArticleBlock => block !== null)
}

/**
 * Extract the first video frame as featured image for video-sequence essays
 */
function extractFirstVideoFrame(blocks: History['blocks'], citySlug: string): Article['featuredImage'] {
  const firstVideoBlock = blocks.find(b => b.type === 'video-sequence')
  if (!firstVideoBlock || firstVideoBlock.type !== 'video-sequence') {
    return undefined
  }

  // Extract sequence name from video path
  const videoPath = firstVideoBlock.videoPath

  // Handle new sequences format: /sequences/phoenix/phoenix-1
  const sequenceMatch = videoPath.match(/\/sequences\/([^\/]+)\/([^\/]+)$/)
  if (sequenceMatch) {
    const city = sequenceMatch[1]
    const sequenceName = sequenceMatch[2]
    const frameName = city === 'tampa' ? 'frame_0001.jpg' : 'frame-0001.jpg'
    return {
      src: `/sequences/${city}/${sequenceName}/${frameName}`,
      alt: `${citySlug} video sequence`,
    }
  }

  // Handle Tampa old format: /Tampa/history-video/tampa-1.mp4
  const tampaMatch = videoPath.match(/\/Tampa\/history-video\/([a-z-]+)-(\d+)\.mp4$/)
  if (tampaMatch) {
    const prefix = tampaMatch[1]
    const num = tampaMatch[2]
    return {
      src: `/sequences/tampa/${prefix}-${num}/frame_0001.jpg`,
      alt: `${citySlug} video sequence`,
    }
  }

  return undefined
}

/**
 * Extract excerpt from blocks (first paragraph)
 */
function extractExcerpt(blocks: History['blocks'], maxLength: number = 200): string {
  const firstParagraph = blocks.find(b => b.type === 'paragraph')
  if (!firstParagraph || firstParagraph.type !== 'paragraph') {
    return ''
  }

  const content = firstParagraph.content
  if (content.length <= maxLength) {
    return content
  }

  return content.slice(0, maxLength).trim() + '...'
}

/**
 * Extract tags from history essay
 */
function extractTags(): string[] {
  const tags: string[] = ['history']

  // Could add more sophisticated tag extraction here
  // based on content, title, etc.

  return tags
}

/**
 * Get all history essays as articles
 */
export async function getAllHistoryArticles(): Promise<Article[]> {
  const allHistory = getAllHistory()
  return allHistory.map(historyToArticle)
}

/**
 * Get history essays for a specific city as articles
 */
export async function getHistoryArticlesForCity(citySlug: string): Promise<Article[]> {
  const allHistory = getAllHistory()
  const cityHistory = allHistory.filter(h => h.citySlug === citySlug)
  return cityHistory.map(historyToArticle)
}

/**
 * Get a single history essay as an article
 */
export async function getHistoryArticle(citySlug: string, slug: string): Promise<Article | null> {
  const history = getHistoryEssay(citySlug, slug)
  if (!history) return null

  return historyToArticle(history)
}
