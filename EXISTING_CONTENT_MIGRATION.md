# Migrating Existing Content to Article Feed

## Current Content Types to Migrate

### 1. History Essays (in `/history`)
Already in good shape, just need to:
- Convert to Article type
- Add metadata
- Remove separate /history routes

### 2. Dark History (scrollytelling)
- Currently: Separate page at `/[city]/dark-history`
- Has: Premium scrollytelling with video sequences
- Migration: Each dark history entry becomes an article

### 3. Curiosities (scrollytelling)
- Currently: Separate page at `/[city]/curiosities`
- Has: Premium scrollytelling with video sequences
- Migration: Each curiosity becomes an article

### 4. Lost & Loved
- Currently: `/[city]/lost-and-loved`
- Migration: Move to `/[city]/discover/lost-and-loved`
- Also: Each entry could be an article

### 5. Hidden Gems
- Currently: `/[city]/hidden-gems`
- Keep as-is in Discover section
- Consider: Also show in feed as articles?

## Conversion Strategy

### Automatic Conversion Function

```typescript
// src/lib/content/convertToArticles.ts

import { City } from '@/types/city'
import { Article } from '@/types/article'

/**
 * Converts existing city content into article format
 * without modifying source data
 */
export function generateArticlesFromCity(city: City): Article[] {
  const articles: Article[] = []

  // 1. Convert Dark History entries
  if (city.darkHistory?.items) {
    city.darkHistory.items.forEach((item, index) => {
      articles.push({
        slug: slugify(item.title),
        citySlug: city.slug,
        title: item.title,
        subtitle: item.verdict, // Use verdict as subtitle
        excerpt: truncate(item.body, 200),

        author: {
          name: 'Curious City',
          bio: 'Exploring the untold stories of American cities'
        },

        publishedAt: item.year || '2024',

        featuredImage: item.images?.[0] ? {
          src: item.images[0].src,
          alt: item.images[0].alt
        } : undefined,

        category: 'history',
        tags: [item.category, 'dark-history'],

        formats: {
          // Scrollytelling is default
          scrollytelling: {
            enabled: true,
            videoSequence: `/videos/${city.slug}/dark-history/${slugify(item.title)}`,
            // Reuse existing premium scrollytelling data structure
            premium: true,
            sequences: city.premiumScrollytelling?.darkHistory?.[item.id]
          },

          // Also provide longform reading version
          longform: {
            enabled: true,
            blocks: [
              // Year/Category badge
              {
                type: 'callout',
                variant: 'info',
                content: `${item.year} · ${item.category}`
              },

              // Main body
              { type: 'paragraph', content: item.body },

              // Images
              ...item.images.map(img => ({
                type: 'image',
                src: img.src,
                alt: img.alt,
                caption: img.caption
              })),

              // Verdict as callout
              {
                type: 'callout',
                variant: 'warning',
                title: 'The Verdict',
                content: item.verdict
              },

              // Sources
              ...(item.sources ? [{
                type: 'heading',
                level: 2,
                content: 'Sources'
              }, {
                type: 'paragraph',
                content: item.sources.map(s => {
                  if (s.type === 'article') {
                    return `- [${s.title}](${s.url}) - ${s.publisher}`
                  }
                  // Handle other source types
                }).join('\n')
              }] : [])
            ]
          }
        },

        defaultFormat: 'scrollytelling', // ✅ Your preference

        seo: {
          metaDescription: truncate(item.body, 160),
          ogImage: item.images?.[0]?.src
        },

        premium: true, // Dark history has premium scrollytelling

        relatedArticles: [], // TODO: Could auto-relate by tags
      })
    })
  }

  // 2. Convert Curiosities
  if (city.curiosities?.items) {
    city.curiosities.items.forEach(item => {
      articles.push({
        slug: slugify(item.title),
        citySlug: city.slug,
        title: item.title,
        excerpt: item.body,

        author: { name: 'Curious City' },
        publishedAt: item.year || '2024',

        featuredImage: item.image ? {
          src: item.image.src,
          alt: item.image.alt
        } : undefined,

        category: 'feature', // Curiosities are feature articles
        tags: [item.category, 'curiosities'],

        formats: {
          scrollytelling: {
            enabled: city.premiumScrollytelling?.curiosities?.[item.id] != null,
            videoSequence: `/videos/${city.slug}/curiosities/${slugify(item.title)}`,
            premium: true,
            sequences: city.premiumScrollytelling?.curiosities?.[item.id]
          },
          longform: {
            enabled: true,
            blocks: [
              {
                type: 'callout',
                variant: 'info',
                content: `${item.category} · ${item.year}`
              },
              { type: 'paragraph', content: item.body },
              ...(item.image ? [{
                type: 'image',
                src: item.image.src,
                alt: item.image.alt
              }] : [])
            ]
          }
        },

        defaultFormat: city.premiumScrollytelling?.curiosities?.[item.id]
          ? 'scrollytelling'
          : 'longform',

        seo: {
          metaDescription: truncate(item.body, 160)
        },

        premium: city.premiumScrollytelling?.curiosities?.[item.id] != null
      })
    })
  }

  // 3. Convert History Essays
  if (city.historyEssays) {
    city.historyEssays.forEach(essay => {
      articles.push({
        slug: essay.slug,
        citySlug: city.slug,
        title: essay.title,
        subtitle: essay.subtitle,
        excerpt: essay.blocks?.[0]?.content || '',

        author: essay.author || { name: 'Curious City' },
        publishedAt: essay.publishedAt || '2024',
        updatedAt: essay.updatedAt,

        featuredImage: essay.featuredImage,

        category: 'history',
        tags: essay.tags || ['history'],

        formats: {
          longform: {
            enabled: true,
            blocks: essay.blocks
          },
          // TODO: Add scrollytelling when videos are ready
          scrollytelling: essay.scrollytellingData ? {
            enabled: true,
            videoSequence: essay.scrollytellingData.videoSequence,
            sequences: essay.scrollytellingData.sequences
          } : undefined
        },

        defaultFormat: essay.scrollytellingData ? 'scrollytelling' : 'longform',

        seo: essay.seo,
        premium: essay.premium,
        relatedArticles: essay.relatedArticles
      })
    })
  }

  // 4. Convert Lost & Loved
  if (city.lostAndLoved?.items) {
    city.lostAndLoved.items.forEach(item => {
      articles.push({
        slug: slugify(item.name),
        citySlug: city.slug,
        title: item.name,
        subtitle: `${item.yearOpened}${item.yearClosed ? ` - ${item.yearClosed}` : ''}`,
        excerpt: truncate(item.story, 200),

        author: { name: 'Curious City' },
        publishedAt: item.yearClosed || '2024',

        featuredImage: item.images?.[0] ? {
          src: item.images[0].src,
          alt: item.images[0].alt
        } : undefined,

        category: 'feature',
        tags: ['lost-and-loved', item.type],

        formats: {
          longform: {
            enabled: true,
            blocks: [
              {
                type: 'callout',
                variant: 'warning',
                content: `${item.yearOpened}${item.yearClosed ? ` - ${item.yearClosed}` : ' - Present'} · ${item.location.neighborhood}`
              },
              { type: 'paragraph', content: item.story },
              ...item.images.map(img => ({
                type: 'image',
                src: img.src,
                alt: img.alt,
                caption: img.caption
              })),
              {
                type: 'callout',
                title: 'What Replaced It',
                content: item.whatReplacedIt || 'Information not available'
              }
            ]
          }
        },

        defaultFormat: 'longform',

        seo: {
          metaDescription: truncate(item.story, 160)
        }
      })
    })
  }

  return articles
}

// Helper functions
function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length).trim() + '...'
}
```

## Feed Generation

```typescript
// src/lib/content/generateFeed.ts

export interface FeedOptions {
  featuredCount?: number
  recentCount?: number
  randomCount?: number
  categories?: string[]
}

export function generateArticleFeed(
  city: City,
  options: FeedOptions = {}
): Article[] {
  const {
    featuredCount = 1,
    recentCount = 8,
    randomCount = 3
  } = options

  // Get all articles from existing content
  const allArticles = generateArticlesFromCity(city)

  // Sort by date
  const sorted = allArticles.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  const feed: Article[] = []

  // Featured (main history essay if exists)
  const historyArticles = sorted.filter(a => a.category === 'history')
  if (historyArticles.length > 0) {
    feed.push(historyArticles[0])
  }

  // Recent (excluding featured)
  const recent = sorted
    .filter(a => !feed.includes(a))
    .slice(0, recentCount)
  feed.push(...recent)

  // Random (for discovery)
  const remaining = sorted.filter(a => !feed.includes(a))
  const random = shuffle(remaining).slice(0, randomCount)
  feed.push(...random)

  return feed
}

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
```

## Usage in City Page

```typescript
// src/app/[city]/page.tsx

import { generateArticleFeed } from '@/lib/content/generateFeed'
import { ArticleFeed } from '@/components/ArticleFeed'

export default async function CityPage({ params }) {
  const city = await getCity(params.city)

  // Generate feed from existing content
  const feed = generateArticleFeed(city, {
    featuredCount: 1,
    recentCount: 8,
    randomCount: 3
  })

  // Extract just previews for initial load
  const previews = feed.map(article => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    featuredImage: article.featuredImage,
    category: article.category,
    publishedAt: article.publishedAt,
    author: article.author,
    hasScrollytelling: article.formats.scrollytelling?.enabled || false,
    premium: article.premium
  }))

  return (
    <main>
      <ArticleFeed initialPreviews={previews} citySlug={city.slug} />
    </main>
  )
}
```

## API Route for Content Loading

```typescript
// src/app/api/articles/[city]/[slug]/content/route.ts

import { generateArticlesFromCity } from '@/lib/content/convertToArticles'
import { getCity } from '@/data/cities'

export async function GET(
  request: Request,
  { params }: { params: { city: string; slug: string } }
) {
  const city = await getCity(params.city)
  if (!city) {
    return Response.json({ error: 'City not found' }, { status: 404 })
  }

  // Generate all articles
  const articles = generateArticlesFromCity(city)

  // Find the requested article
  const article = articles.find(a => a.slug === params.slug)
  if (!article) {
    return Response.json({ error: 'Article not found' }, { status: 404 })
  }

  // Return full content
  return Response.json({
    slug: article.slug,
    formats: article.formats,
    content: article.formats.longform?.blocks || [],
    scrollytelling: article.formats.scrollytelling
  })
}
```

## Benefits of This Approach

✅ **No data duplication** - Conversion happens at runtime
✅ **Preserve existing structure** - Don't touch source data files
✅ **Backward compatible** - Old pages still work during migration
✅ **Easy to toggle** - Can show/hide content types in feed
✅ **Automatic updates** - When source data changes, feed updates
✅ **Type-safe** - Full TypeScript support

## Migration Checklist

- [ ] Create `convertToArticles.ts` utility
- [ ] Create `generateFeed.ts` utility
- [ ] Update `ArticleFeed` component to use previews
- [ ] Create API route for content loading
- [ ] Test with Minneapolis (has all content types)
- [ ] Update sitemap to include article URLs
- [ ] Add 301 redirects from old URLs
- [ ] Remove `/history` routes
- [ ] Update navigation

## Timeline

**Week 1:** Build conversion utilities + API
**Week 2:** Build ArticleFeed component + inline expansion
**Week 3:** Add format toggle + scrollytelling integration
**Week 4:** Testing, optimization, migration

## Testing Strategy

1. **Start with one city** - Minneapolis (has everything)
2. **Verify conversion** - All content appears in feed
3. **Test expansion** - Inline loading works
4. **Test formats** - Toggle between read/watch
5. **Performance** - Check load times
6. **Mobile** - Test on phone
7. **SEO** - Verify URLs, redirects, metadata
8. **Gradual rollout** - One city at a time
