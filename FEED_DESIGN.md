# Main City Page Feed Design

## Current Flow (History-Focused)
```
/minneapolis
├─ Banner Image
├─ Full History Essay (entire content shown)
├─ "More History" section
└─ Related Cities
```

## New Flow (Article Feed)
```
/minneapolis
├─ Banner Image
├─ City Introduction
├─ Featured Article Preview
│  ├─ Title + Subtitle
│  ├─ Excerpt (2-3 sentences)
│  ├─ Featured Image
│  ├─ [Read More] → expands OR navigates
│  └─ Format toggle (if scrollytelling available)
│
├─ Recent Articles Feed
│  ├─ Article Card (History: "The Story of Minneapolis")
│  ├─ Article Card (Guide: "Best Coffee Shops")
│  ├─ Article Card (Feature: "The Music Scene")
│  └─ [View All Articles]
│
├─ Discover Highlights
│  ├─ Hidden Gems Preview
│  ├─ Dark History Preview
│  └─ [Explore Discover]
│
├─ Upcoming Events
│  └─ [View All Events]
│
└─ Related Cities
```

## Article Card Design

```typescript
interface ArticleCard {
  image: string          // Featured image
  category: string       // "History", "Guide", "Feature", etc.
  title: string
  excerpt: string        // 1-2 sentences
  author: string
  publishedAt: string
  readTime: string       // "8 min read"
  hasScrollytelling: boolean  // Show video icon if true
}
```

### Visual Layout

```
┌─────────────────────────────────────────────┐
│  ┌─────────┐  HISTORY                       │
│  │         │  The Story of Minneapolis      │
│  │  Image  │  From mill town to modern...  │
│  │         │  By Sarah Chen · Dec 15 · 8min │
│  └─────────┘  [📖 Read] [🎬 Watch]          │
└─────────────────────────────────────────────┘
```

## Format Toggle Design

When scrollytelling version exists:

```
┌─────────────────────────────────────────┐
│  Article Title                          │
│  ┌──────────────────────────────────┐  │
│  │  📖 Read  |  🎬 Watch             │  │
│  └──────────────────────────────────┘  │
│                                         │
│  [Content loads based on selection]    │
└─────────────────────────────────────────┘
```

### Toggle States:
- Default: Uses `article.defaultFormat` (either 'longform' or 'scrollytelling')
- Persisted: User preference saved to localStorage
- Seamless: Content swaps without page reload

## Feed Filtering & Sorting

```typescript
interface FeedControls {
  filters: {
    category: 'all' | 'history' | 'guide' | 'feature' | ...
    tags: string[]
  }
  sort: 'recent' | 'popular' | 'trending'
  view: 'grid' | 'list' | 'compact'
}
```

### Filter UI
```
[All] [History] [Guides] [Features] [Lists]
                                    [Sort: Recent ▾]
```

## Progressive Disclosure Options

### Option 1: Inline Expansion
```
[Article Preview]
   ↓ Click "Read More"
[Article Preview EXPANDED showing full content]
   ↓ Click "Show Less"
[Article Preview collapsed]
```

### Option 2: Navigation
```
[Article Preview]
   ↓ Click "Read More"
   → Navigate to /articles/slug
[Full Article Page with format toggle]
```

### Recommendation: **Hybrid Approach**
- Short articles (< 1000 words): Inline expansion
- Long articles (> 1000 words): Navigate to full page
- Scrollytelling: Always navigate (needs full screen)

## Mobile Considerations

### Mobile Feed
```
┌─────────────────┐
│  Featured       │
│  [Image]        │
│  Title          │
│  Excerpt...     │
│  [Read More]    │
├─────────────────┤
│  Article 1      │
│  [Thumbnail]    │
│  Title          │
├─────────────────┤
│  Article 2      │
│  ...            │
└─────────────────┘
```

### Mobile Nav
```
☰ Menu
├─ Articles
├─ Discover
│  ├─ Hidden Gems
│  ├─ Curiosities
│  ├─ Lost & Loved
│  └─ Dark History
├─ Guide
│  ├─ Bars
│  ├─ Restaurants
│  └─ Coffee Shops
└─ Events
```

## Article Metadata Display

Show helpful context:

```typescript
{
  category: "History",
  publishedAt: "Dec 15, 2024",
  updatedAt: "Jan 2, 2025",
  readTime: "8 min read",
  author: "Sarah Chen",
  tags: ["mills", "industry", "immigration"],
  hasScrollytelling: true,
  premium: false
}
```

Display as:
```
HISTORY · 8 min read · Dec 15, 2024
By Sarah Chen
#mills #industry #immigration
```

## Empty States

### No Articles Yet
```
┌────────────────────────────────────┐
│  📝 No articles yet                │
│  Check back soon for local stories │
│  and in-depth guides.              │
└────────────────────────────────────┘
```

### Filtered to Zero
```
┌────────────────────────────────────┐
│  No articles match these filters   │
│  Try adjusting your selection      │
│  [Clear Filters]                   │
└────────────────────────────────────┘
```

## Performance Considerations

- **Lazy load**: Article cards below fold
- **Image optimization**: Next.js Image with proper sizing
- **Pagination**: Load more (infinite scroll or "Load More" button)
- **Initial load**: Show 6-8 articles, then load more
- **Prefetch**: Hover on article card prefetches the full page

## Accessibility

- Semantic HTML: `<article>`, `<h2>` for titles
- Skip links for feed navigation
- Keyboard navigation for format toggle
- Screen reader: Announce format changes
- Focus management when expanding inline

## Analytics Events

Track:
- `article_preview_viewed` - Card impression
- `article_clicked` - Clicked to read
- `format_toggled` - Switched between read/watch
- `article_expanded_inline` - Expanded in feed
- `feed_filtered` - Applied filter
- `feed_sorted` - Changed sort order
