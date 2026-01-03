# Content Architecture Refactoring Plan

## Vision

Create a natural, scalable content system where:
- **History essays are articles** - they live in the articles feed, not a separate section
- **Articles can toggle between formats** - seamlessly switch between scrollytelling video and longform essay
- **Main city page is a feed** - shows previews of all content types with easy expansion
- **Lost & Loved moves to Discover** - better categorization
- **Scalable article system** - easy to add new articles over time

## Current Structure

```
/[city]
  /articles       - New article system (separate from history)
  /history        - History essays (treated separately)
  /discover       - Discovery content
  /guide          - Practical guides
  /events         - Events
  /lost-and-loved - Memorial content (legacy)
  /dark-history   - Dark history (legacy scrollytelling)
  /curiosities    - Curiosities (legacy scrollytelling)
  /hidden-gems    - Hidden gems
  /scenes         - Photo essays
  ... other legacy sections
```

## Proposed Structure

```
/[city]
  page.tsx        - MAIN FEED (all content types)

  /articles
    page.tsx      - All articles feed
    /[slug]
      page.tsx    - Individual article (with format toggle)

  /discover
    page.tsx      - Discovery hub
    /lost-and-loved - Memorial content (moved here)
    /hidden-gems    - Hidden gems
    /curiosities    - Curiosities

  /guide
    page.tsx      - Practical guide hub
    /bars
    /restaurants
    /coffee-shops
    /local-favorites

  /events
    page.tsx      - Events calendar
```

## Key Changes

### 1. **Articles Unification**

**History essays become articles:**
- `category: 'history'` in article type
- History content moves from `/[city]/history/[slug]` to `/[city]/articles/[slug]`
- All history essays get proper article metadata

**Article Format Toggle:**
```typescript
interface Article {
  // ... existing fields
  formats: {
    longform: {
      enabled: boolean
      blocks: ArticleBlock[]
    }
    scrollytelling?: {
      enabled: boolean
      videoSequence: string // path to video
      scrollData: ScrollData[]
    }
  }
  defaultFormat: 'longform' | 'scrollytelling'
}
```

### 2. **Main City Page as Feed**

Transform `/[city]/page.tsx` from history-focused to article feed:

```typescript
// Preview different content types
- Featured history article (expandable)
- Recent articles (click to read more)
- Upcoming events
- Discover highlights
- Guide recommendations
```

**Progressive Disclosure:**
- Show article preview/excerpt
- "Read More" expands inline OR navigates to full article page
- Seamless UX

### 3. **Lost & Loved → Discover**

Move memorial content into discover section:
- `/[city]/discover/lost-and-loved`
- Better thematic fit (discovering the past)
- Discover becomes: Hidden Gems + Curiosities + Lost & Loved + Dark History

### 4. **Navigation Updates**

```typescript
// Main nav
- Articles (all articles including history)
- Discover (hidden gems, curiosities, lost&loved, dark history)
- Guide (practical info - bars, restaurants, coffee, etc.)
- Events

// Remove "History" as separate section
```

### 5. **Routing Changes**

```typescript
// OLD
routes.cityHistory(city, slug)           // /minneapolis/history/overview
routes.cityDarkHistory(city)             // /minneapolis/dark-history

// NEW
routes.cityArticle(city, slug)           // /minneapolis/articles/overview
routes.cityDiscover(city, 'dark-history') // /minneapolis/discover/dark-history

// Legacy redirects for SEO
/[city]/history/[slug] → /[city]/articles/[slug]
```

## Implementation Phases

### Phase 1: Type System Updates ✅
- [ ] Update Article type with format toggle
- [ ] Add ScrollytellingFormat interface
- [ ] Update ArticleCategory to ensure 'history' is included

### Phase 2: Content Migration
- [ ] Convert history essays to Article format
- [ ] Add metadata (author, publishedAt, category: 'history')
- [ ] Keep both formats (longform + scrollytelling option for future)
- [ ] Move lost-and-loved data into discover section

### Phase 3: Routing Refactor
- [ ] Update routes.ts to deprecate history routes
- [ ] Add article routes for history content
- [ ] Create redirect mapping for legacy URLs
- [ ] Update all Link components

### Phase 4: UI Components
- [ ] Create ArticleFeed component (for main city page)
- [ ] Create ArticlePreview component (with expand/navigate)
- [ ] Create FormatToggle component (switch between scrollytelling/longform)
- [ ] Update navigation to remove History, enhance Articles

### Phase 5: Page Refactoring
- [ ] Refactor `/[city]/page.tsx` to show article feed
- [ ] Create new `/[city]/articles/page.tsx` for all articles
- [ ] Update `/[city]/discover/page.tsx` to include lost-and-loved
- [ ] Move `/[city]/lost-and-loved/*` to `/[city]/discover/lost-and-loved/*`

### Phase 6: SEO & Polish
- [ ] Set up 301 redirects for old URLs
- [ ] Update sitemap.xml generation
- [ ] Update metadata/OG tags
- [ ] Test all navigation flows

## Benefits

✅ **Natural mental model** - articles are articles, regardless of topic
✅ **Scalable** - easy to add new articles without creating new sections
✅ **Flexible formats** - toggle between reading modes
✅ **Better discovery** - feed-based main page surfaces all content
✅ **Cleaner navigation** - fewer top-level sections, better organization
✅ **Future-proof** - article system ready for growth

## Questions to Resolve

1. **Format toggle UX** - Where does the toggle live? Top of article? Floating?
2. **Feed sorting** - Chronological? Category-based sections? Mix?
3. **Inline expansion** - Do article previews expand inline or always navigate?
4. **Mobile navigation** - How do we handle more complex discover section on mobile?
5. **Legacy content** - Do we keep scrollytelling pages as-is and only apply new system to new content?

## Next Steps

1. Review and approve this architecture
2. Start with Phase 1 (type system updates)
3. Create example converted article to validate approach
4. Build feed components
5. Migrate content section by section
