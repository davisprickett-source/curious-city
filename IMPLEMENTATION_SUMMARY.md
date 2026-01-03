# Content Architecture Implementation Summary

## ✅ Decisions Made

### 1. Format Toggle
- **Location:** Floating bottom (sticky footer on article)
- **Design:** Simple toggle between 📖 Read and 🎥 Watch
- **Default:** Scrollytelling (animated video) when available

### 2. Article Expansion
- **Strategy:** Inline expansion with lazy loading
- **Initial Load:** Only article previews (~100-200kb for 20 articles)
- **On Click:** Load full content dynamically
- **Navigation:** URL hash updates (shareable, back button works)
- **Benefits:** Fast, seamless, no page reloads

### 3. Feed Sorting
- **Featured:** Main history essay (if exists)
- **Recent:** Last 8 published articles
- **Random:** 3 random articles for discovery
- **Mix:** All content types together (history, guides, features, etc.)

### 4. Content Migration
- **Automatic conversion:** Runtime conversion from existing data structures
- **No data duplication:** Source files stay as-is
- **Gradual migration:** Can keep old pages during transition
- **All content in feed:** Dark history, curiosities, lost & loved, history essays

### 5. Routing Changes
- **Remove:** `/[city]/history` (completely eliminated)
- **Consolidate:** All content → `/[city]/articles/[slug]`
- **Move:** Lost & Loved → `/[city]/discover/lost-and-loved`
- **Simplify:** Main nav becomes: Articles | Discover | Guide | Events

## 📁 Documents Created

1. **[CONTENT_ARCHITECTURE_PLAN.md](CONTENT_ARCHITECTURE_PLAN.md)**
   - Overall refactoring strategy
   - Phase-by-phase implementation plan
   - Type system updates
   - Navigation changes

2. **[FEED_DESIGN.md](FEED_DESIGN.md)**
   - Main city page feed layout
   - Article card designs
   - Filter/sort controls
   - Mobile considerations
   - Accessibility

3. **[INLINE_EXPANSION_STRATEGY.md](INLINE_EXPANSION_STRATEGY.md)**
   - Three-tier loading system
   - Lazy loading architecture
   - Prefetching strategy
   - Performance optimization
   - Memory management

4. **[EXISTING_CONTENT_MIGRATION.md](EXISTING_CONTENT_MIGRATION.md)**
   - Automatic conversion utilities
   - Dark History → Articles
   - Curiosities → Articles
   - History Essays → Articles
   - Lost & Loved → Articles

## 🎨 New Type System

```typescript
interface Article {
  // ... metadata
  formats: {
    longform: {
      enabled: boolean
      blocks: ArticleBlock[]
    }
    scrollytelling?: {
      enabled: boolean
      videoSequence: string
      sequences: ScrollSequence[]
      premium?: boolean
    }
  }
  defaultFormat: 'longform' | 'scrollytelling'
}

interface ArticleMetadata {
  // ... basic info
  hasScrollytelling: boolean
  hasLongform: boolean
  defaultFormat: 'longform' | 'scrollytelling'
  readTime?: string
}
```

## 🏗️ Architecture

```
City Page (/)
  └─ ArticleFeed Component
      ├─ Load previews (initial)
      ├─ ArticleCard (collapsed)
      │   └─ [Read More] → Lazy load content
      │       └─ ArticleCard (expanded)
      │           ├─ Longform Content OR
      │           └─ Scrollytelling Viewer
      │               └─ Format Toggle (floating)
      └─ Infinite scroll / Load more
```

## 📊 Performance Strategy

### Initial Load
- 6-8 article previews: ~100-200kb
- Images: Lazy loaded with blur placeholder
- Fast First Contentful Paint

### On Expansion
- Fetch article content: ~20-50kb
- Show loading skeleton immediately
- Smooth animation when content loads

### Prefetching
- Hover on article → prefetch content
- Expand article → prefetch next/previous
- Aggressive caching in memory

### Memory Management
- Auto-collapse articles far from viewport (after 30s)
- Virtual scrolling for 50+ articles (optional)
- Clear cache on navigation away

## 🎯 User Experience

### Main Feed Flow
```
1. Land on /minneapolis
   ↓
2. See article feed with previews
   ↓
3. Click "Read More" on interesting article
   ↓
4. Article expands inline (smooth)
   ↓
5. Choose format: 📖 Read or 🎥 Watch
   ↓
6. Scroll to next article preview
   ↓
7. Repeat (stay in feed, no navigation)
```

### Format Toggle Flow
```
1. Article expanded in longform mode
   ↓
2. Click 🎥 Watch in floating toggle
   ↓
3. Content swaps to scrollytelling (no reload)
   ↓
4. Full screen video with scroll-synced text
   ↓
5. Can toggle back to 📖 Read anytime
```

## 🔄 Migration Path

### Phase 1: Foundation (Week 1)
- ✅ Update Article types (DONE)
- Create conversion utilities
- Build API routes for content loading
- Create ArticleMetadata extractor

### Phase 2: Feed Component (Week 2)
- Build ArticleFeed component
- Implement inline expansion
- Add loading states & animations
- Test with Minneapolis data

### Phase 3: Format Toggle (Week 3)
- Create FormatToggle component (floating)
- Integrate existing scrollytelling viewers
- Implement format switching
- Add preferences persistence

### Phase 4: Integration (Week 4)
- Refactor main city page to use feed
- Move lost & loved to discover
- Remove /history routes
- Update all navigation

### Phase 5: Polish & Launch
- Performance optimization
- SEO (redirects, sitemaps)
- Analytics events
- Mobile testing
- Gradual rollout

## 📝 Next Immediate Steps

1. **Create conversion utilities**
   - `src/lib/content/convertToArticles.ts`
   - `src/lib/content/generateFeed.ts`

2. **Build API routes**
   - `/api/articles/[city]/feed` - Get article previews
   - `/api/articles/[city]/[slug]/content` - Get full content

3. **Start ArticleFeed component**
   - Article preview card
   - Expand/collapse logic
   - Lazy loading integration

4. **Test with one city first**
   - Minneapolis (has all content types)
   - Validate the approach
   - Iterate based on learnings

## 🤔 Open Questions

1. **Virtual scrolling:** Needed for 50+ articles or wait and see?
2. **Auto-collapse:** 30 seconds after leaving viewport or different timing?
3. **Prefetch aggressiveness:** How many articles ahead to prefetch?
4. **Mobile gestures:** Swipe to next article? Pinch to close scrollytelling?
5. **Analytics:** What events to track for feed engagement?

## 🎉 Benefits Summary

✅ **Natural:** Articles are articles, regardless of topic
✅ **Fast:** Only load what you need, when you need it
✅ **Seamless:** No page reloads, smooth transitions
✅ **Flexible:** Toggle between reading and watching
✅ **Scalable:** Easy to add new articles forever
✅ **Discoverable:** Feed format encourages exploration
✅ **Mobile-friendly:** Works great on phones
✅ **SEO-friendly:** Proper URLs, metadata, redirects

## 💬 Final Notes

This is a significant refactoring but the approach is:
- **Low risk:** Old pages work during migration
- **Incremental:** Can ship piece by piece
- **Reversible:** Can roll back if issues arise
- **Future-proof:** Built for long-term growth

The inline expansion strategy is ambitious but achievable with:
- Smart lazy loading
- Aggressive prefetching
- Good loading states
- Performance monitoring

Ready to start building! 🚀
