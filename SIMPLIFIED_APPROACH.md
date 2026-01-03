# Simplified City Hub Approach

## Vision
Main city page becomes a **visual hub/dashboard** showing previews of all content, organized by section.

## Main City Page Layout

```
┌─────────────────────────────────────────────┐
│  MINNEAPOLIS Banner                         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  📰 Articles                    [View All →] │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │ The  │ │Guide │ │Music │ │Best  │       │
│  │Story │ │ to   │ │Scene │ │Bars  │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
│  ← Horizontal scroll →                      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  🎬 Dark History               [Explore →]  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │Excl. │ │Shang │ │Van-  │ │I-5   │       │
│  │Laws  │ │hai   │ │port  │ │Kill  │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  💡 Curiosities                [Explore →]  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │Mill  │ │Rain  │ │Parks │ │Food  │       │
│  │Ends  │ │City  │ │System│ │Scene │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  💎 Hidden Gems                [Explore →]  │
│  ┌──────┐ ┌──────┐ ┌──────┐                │
│  │Cold  │ │Shang │ │Lone  │                │
│  │War   │ │hai   │ │Fir   │                │
│  └──────┘ └──────┘ └──────┘                │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  🍺 Bars & Dining              [Guide →]    │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │Marvel│ │Matt's│ │Mort- │ │Young│       │
│  │Bar   │ │Bar   │ │imer's│ │Joni │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  🏛️ Lost & Loved               [Remember →] │
│  ┌──────┐ ┌──────┐ ┌──────┐                │
│  │Nye's │ │Aqua- │ │First │                │
│  │Polon │ │tenni │ │Ave   │                │
│  └──────┘ └──────┘ └──────┘                │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  📅 Upcoming Events            [Calendar →] │
│  Feb 15 - Music Festival                    │
│  Feb 20 - Food Tour                         │
└─────────────────────────────────────────────┘
```

## Card Design

### Small Preview Card
```
┌─────────────┐
│   [Image]   │  ← Featured image
│             │
│ Title Here  │  ← Item title
│             │
│ 🎬 or 📖    │  ← Icon if scrollytelling
└─────────────┘
   ~150px wide
```

## Implementation Plan

### Phase 1: Move History to Articles ✅
- [x] Update article types (DONE)
- [ ] Move `/[city]/history/[slug]` → `/[city]/articles/[slug]`
- [ ] Add redirect for SEO
- [ ] Update navigation

### Phase 2: Create Section Preview Components
```typescript
interface SectionPreview {
  id: string
  title: string
  icon: string
  items: PreviewCard[]
  viewAllLink: string
}

interface PreviewCard {
  title: string
  image?: string
  href: string
  hasScrollytelling?: boolean
}
```

### Phase 3: Build City Hub Page
- Extract preview data from each section
- Create horizontal scrolling rows
- Keep existing pages unchanged
- Just change the main `/[city]` page

### Phase 4: Polish
- Add smooth scrolling
- Make cards clickable
- Add "View All" links
- Test on mobile

## Benefits of This Approach

✅ **Simple** - Just reorganizing the main page
✅ **Low risk** - All existing pages stay the same
✅ **Quick** - Can ship in a week or two
✅ **Scalable** - Easy to add new sections/cards
✅ **No complex loading** - Each card is just a link
✅ **Better discovery** - Users see everything at a glance

## What Changes

### Before
```
/minneapolis
  → Shows full history essay
  → Other content buried in nav
```

### After
```
/minneapolis
  → Shows preview cards of ALL content
  → Organized by section
  → Easy browsing + clicking

/minneapolis/articles
  → History essays live here now

/minneapolis/dark-history
  → Still exists, unchanged
  → Just gets a preview row on main page
```

## Navigation Updates

### Top Nav
```
[City Selector] Minneapolis
  Articles  |  Discover  |  Guide  |  Events
```

### Discover Dropdown/Page
- Dark History
- Curiosities
- Hidden Gems
- Lost & Loved

### Guide Dropdown/Page
- Bars
- Restaurants
- Coffee Shops
- Local Favorites

## Next Steps

1. **Move history essays to /articles**
   - Update routes
   - Add redirects
   - Update links

2. **Create preview extraction utilities**
   ```typescript
   function getArticlePreviews(city: City): PreviewCard[]
   function getDarkHistoryPreviews(city: City): PreviewCard[]
   function getCuriosityPreviews(city: City): PreviewCard[]
   // ... etc
   ```

3. **Build SectionRow component**
   ```typescript
   <SectionRow
     title="Dark History"
     icon="🎬"
     items={darkHistoryPreviews}
     viewAllHref="/minneapolis/dark-history"
   />
   ```

4. **Refactor city page**
   - Remove full history essay
   - Add section rows
   - Keep banner

5. **Test & ship**

Much simpler! Want me to start with moving history to articles?
