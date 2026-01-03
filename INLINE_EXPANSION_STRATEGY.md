# Inline Article Expansion Strategy

## Goal
Fast, seamless article browsing in a single feed without full page navigations.

## The Problem
- Can't load 20+ full articles upfront (slow initial load)
- Need instant expansion when user clicks "Read More"
- Must feel native and fast

## Solution: Smart Lazy Loading

### Architecture

```typescript
interface ArticleState {
  preview: 'loaded'      // Always loaded (title, excerpt, thumbnail)
  content: 'unloaded' | 'loading' | 'loaded' | 'error'
  expanded: boolean
}
```

### Three-Tier Loading Strategy

#### Tier 1: Initial Page Load
```
Load only previews:
- Title
- Excerpt (2-3 sentences)
- Featured image thumbnail
- Metadata (category, date, read time)
- hasScrollytelling flag

Size: ~5-10kb per article preview
Total: ~100-200kb for 20 articles
```

#### Tier 2: On "Read More" Click
```javascript
async function expandArticle(slug: string) {
  // 1. Immediately show loading state (skeleton)
  setExpanded(slug, 'loading')

  // 2. Fetch full article content in background
  const article = await fetchArticleContent(slug)

  // 3. Smooth expand with loaded content
  setArticleContent(slug, article)
  setExpanded(slug, 'loaded')

  // 4. Scroll article into view (smooth)
  scrollToArticle(slug)
}
```

#### Tier 3: Aggressive Prefetching
```javascript
// When user hovers/scrolls near an article
onArticleNearViewport((slug) => {
  // Prefetch content in background
  prefetchArticleContent(slug)
})

// When one article is open, prefetch next/previous
onArticleExpanded((slug) => {
  const nextArticle = getNextArticle(slug)
  const prevArticle = getPrevArticle(slug)

  prefetchArticleContent(nextArticle.slug)
  prefetchArticleContent(prevArticle.slug)
})
```

## Feed Component Structure

```typescript
// Feed Page
<ArticleFeed>
  <ArticleCard
    preview={article1Preview}    // ✅ Loaded initially
    content={article1Content}     // ⏳ Lazy loaded
    expanded={false}
  />
  <ArticleCard
    preview={article2Preview}    // ✅ Loaded initially
    content={article2Content}     // ⏳ Lazy loaded
    expanded={false}
  />
  ...
</ArticleFeed>
```

## Data Fetching Strategy

### API Routes

```typescript
// GET /api/articles/[city]/feed
// Returns: Array of article previews only
{
  articles: [
    {
      slug: "story-of-minneapolis",
      title: "...",
      excerpt: "...",
      featuredImage: "...",
      category: "history",
      hasScrollytelling: true,
      // NO full content blocks
    }
  ]
}

// GET /api/articles/[city]/[slug]/content
// Returns: Full article content
{
  slug: "story-of-minneapolis",
  formats: {
    longform: { blocks: [...] },
    scrollytelling: { videoSequence: "...", scrollData: [...] }
  }
}
```

### Client-Side Caching

```typescript
// In-memory cache
const articleCache = new Map<string, Article>()

async function getArticleContent(slug: string) {
  // Check cache first
  if (articleCache.has(slug)) {
    return articleCache.get(slug)
  }

  // Fetch from API
  const content = await fetch(`/api/articles/${city}/${slug}/content`)

  // Cache it
  articleCache.set(slug, content)

  return content
}
```

## UX Flow

### Collapsed State
```
┌────────────────────────────────────────┐
│ 🎬 HISTORY · 8 min                     │
│ The Story of Minneapolis               │
│ From flour mills to modern city...    │
│                                        │
│ By Sarah Chen · Dec 15, 2024          │
│ [Read More ↓]                          │
└────────────────────────────────────────┘
```

### Expanding (Loading State)
```
┌────────────────────────────────────────┐
│ 🎬 HISTORY · 8 min                     │
│ The Story of Minneapolis               │
│ ╔════════════════════════════════════╗ │
│ ║ ⟳ Loading article...              ║ │
│ ║ [Skeleton UI for content]          ║ │
│ ╚════════════════════════════════════╝ │
└────────────────────────────────────────┘
```

### Expanded State
```
┌────────────────────────────────────────┐
│ 🎬 HISTORY · 8 min                     │
│ The Story of Minneapolis               │
│ ╔════════════════════════════════════╗ │
│ ║ [Full article content loads here] ║ │
│ ║                                    ║ │
│ ║ Minneapolis began as a mill town...║ │
│ ║ [Image]                            ║ │
│ ║ ...full article content...         ║ │
│ ║                                    ║ │
│ ║ [Show Less ↑]                      ║ │
│ ╚════════════════════════════════════╝ │
│                                        │
│ ┌────────────────────────────────────┐ │
│ │ 🎬 Toggle: 📖 Read | 🎥 Watch      │ │ ← Floating
│ └────────────────────────────────────┘ │
└────────────────────────────────────────┘
```

## Performance Optimization

### 1. Virtual Scrolling (Optional)
For feeds with 50+ articles:
```typescript
import { useVirtualizer } from '@tanstack/react-virtual'

// Only render articles in viewport + buffer
const virtualizer = useVirtualizer({
  count: articles.length,
  getScrollElement: () => scrollRef.current,
  estimateSize: () => 200, // Collapsed height
  overscan: 3
})
```

### 2. Code Splitting
```typescript
// Lazy load heavy components
const ScrollytellingViewer = lazy(() =>
  import('@/components/ScrollytellingViewer')
)
const ArticleRenderer = lazy(() =>
  import('@/components/ArticleRenderer')
)
```

### 3. Image Optimization
```typescript
// Use blur placeholders, lazy loading
<Image
  src={article.featuredImage}
  alt={article.title}
  loading="lazy"
  placeholder="blur"
  blurDataURL={article.blurDataURL}
/>
```

## URL Strategy (without navigation)

### Keep URL in sync with expanded state

```typescript
// When article expands
router.push(`/${city}/articles#${slug}`, { scroll: false })

// On page load, check hash
useEffect(() => {
  const hash = window.location.hash.slice(1)
  if (hash) {
    expandArticle(hash)
  }
}, [])
```

**Benefits:**
- Shareable URLs (link to specific expanded article)
- Browser back button works (collapses article)
- No full page reload

## Scrollytelling Considerations

### Scrollytelling is ALWAYS in expanded view

```typescript
if (article.expanded && selectedFormat === 'scrollytelling') {
  return (
    <div className="fixed inset-0 z-50 bg-black">
      <ScrollytellingViewer
        videoSequence={article.formats.scrollytelling.videoSequence}
        scrollData={article.formats.scrollytelling.scrollData}
        onClose={() => collapseArticle(slug)}
      />
    </div>
  )
}
```

**For scrollytelling:**
- Takes over full screen (position: fixed)
- Escape key or X button to close → collapses article
- Still in feed, no navigation

## Loading Existing Scrollytelling Pages

### Current Dark History/Curiosities Structure

```typescript
// In city data
darkHistory: {
  items: [
    {
      title: "Shanghai Tunnels",
      body: "...",
      images: [...]
    }
  ]
}
```

### Convert to Article Format

```typescript
// Programmatic conversion
function convertDarkHistoryToArticles(city: City): Article[] {
  return city.darkHistory.items.map(item => ({
    slug: slugify(item.title),
    citySlug: city.slug,
    title: item.title,
    excerpt: item.body.slice(0, 200) + '...',
    category: 'history',
    featuredImage: item.images[0],
    formats: {
      scrollytelling: {
        enabled: true,
        // Use existing scrollytelling data
        videoSequence: city.darkHistoryScrollytelling?.[item.id],
        scrollData: [...] // Convert from existing structure
      },
      longform: {
        enabled: true,
        blocks: [
          { type: 'paragraph', content: item.body },
          ...item.images.map(img => ({
            type: 'image',
            src: img.src,
            alt: img.alt
          }))
        ]
      }
    },
    defaultFormat: 'scrollytelling',
    publishedAt: item.year || '2024',
    author: { name: 'Curious City' }
  }))
}
```

## Feed Mixing Strategy

```typescript
// Get all article types
const historyArticles = getHistoryArticles(city)
const darkHistoryArticles = convertDarkHistoryToArticles(city)
const curiositiesArticles = convertCuriositiesToArticles(city)
const guidesArticles = getGuideArticles(city)

// Combine and shuffle intelligently
const feed = createFeed({
  featured: historyArticles[0], // Main history essay
  recent: [...].slice(0, 5),    // Last 5 published
  random: shuffle([...all]).slice(0, 3), // 3 random
  categories: {
    history: [...],
    guides: [...],
    features: [...]
  }
})
```

## Memory Management

### Auto-collapse on scroll away

```typescript
// When user scrolls far from expanded article
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If expanded article goes way out of view
      if (!entry.isIntersecting && entry.target.dataset.expanded) {
        // Collapse it after 30s to free memory
        setTimeout(() => {
          collapseArticle(entry.target.dataset.slug)
        }, 30000)
      }
    })
  }, { rootMargin: '200% 0px' }) // Large margin

  return () => observer.disconnect()
}, [])
```

## Prototype Code

```typescript
'use client'

import { useState } from 'react'

export function ArticleFeed({ initialPreviews }: Props) {
  const [articles, setArticles] = useState(
    new Map(initialPreviews.map(p => [p.slug, { preview: p, content: null, expanded: false }]))
  )

  async function toggleArticle(slug: string) {
    const article = articles.get(slug)!

    if (article.expanded) {
      // Collapse
      setArticles(prev => new Map(prev).set(slug, {
        ...article,
        expanded: false
      }))
      return
    }

    // Expand - load content if not loaded
    if (!article.content) {
      // Show loading state
      setArticles(prev => new Map(prev).set(slug, {
        ...article,
        expanded: true,
        loading: true
      }))

      // Fetch content
      const content = await fetchArticleContent(slug)

      setArticles(prev => new Map(prev).set(slug, {
        ...article,
        content,
        expanded: true,
        loading: false
      }))
    } else {
      // Just expand
      setArticles(prev => new Map(prev).set(slug, {
        ...article,
        expanded: true
      }))
    }

    // Update URL
    window.history.pushState({}, '', `#${slug}`)
  }

  return (
    <div className="space-y-8">
      {Array.from(articles.values()).map(article => (
        <ArticleCard
          key={article.preview.slug}
          preview={article.preview}
          content={article.content}
          expanded={article.expanded}
          loading={article.loading}
          onToggle={() => toggleArticle(article.preview.slug)}
        />
      ))}
    </div>
  )
}
```

## Migration Path

### Phase 1: Preview Data
- Export all existing content as article previews
- Create feed API endpoint
- Build ArticleFeed component with collapse/expand

### Phase 2: Content Loading
- Create content API endpoints
- Implement lazy loading
- Add prefetching

### Phase 3: Format Toggle
- Add floating toggle component
- Implement format switching
- Default to scrollytelling

### Phase 4: Optimize
- Add virtual scrolling if needed
- Implement auto-collapse
- Performance tuning

## Result

✅ Fast initial load (only previews)
✅ Instant expansion (with loading state)
✅ Prefetching for smooth UX
✅ No full page navigations
✅ Shareable URLs
✅ Works with existing scrollytelling content
✅ Scalable to 100+ articles
