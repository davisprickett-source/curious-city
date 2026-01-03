# Article Pages Are Live! 🎉

Your complete article publishing system is now ready to use.

---

## ✅ What's New

### 1. **Article Feed Page**
**URL:** `/minneapolis/articles` (and for every city)

**What it shows:**
- Grid of article cards with featured images
- Category badges (Guide, Feature, List, etc.)
- Publish dates and author names
- Animated fade-in as you scroll
- Header and footer ads
- "No articles yet" message if empty

### 2. **Article Detail Page**
**URL:** `/minneapolis/articles/best-new-restaurants-northeast-2025`

**Features:**
- Full article with all content blocks rendered
- Featured image hero
- Author info with avatar
- Share buttons
- Category and tags
- Related articles sidebar
- Automatic ad placement throughout content
- Beautiful typography optimized for reading

### 3. **Example Article**
**File:** `src/data/cities/minneapolis/articles/index.ts`

**Content:** "The 5 Best New Restaurants in Northeast Minneapolis"
- Demonstrates all article block types
- Shows how ads are automatically injected
- Includes quotes, callouts, images
- Proper SEO metadata

---

## 🚀 See It In Action

### Start the Dev Server:
```bash
npm run dev
```

### Visit These URLs:
1. **Article Feed:** http://localhost:3000/minneapolis/articles
2. **Article Detail:** http://localhost:3000/minneapolis/articles/best-new-restaurants-northeast-2025

You should see:
- ✅ Animated article feed with one article card
- ✅ Full article with formatted content
- ✅ Placeholder ads (since no ad networks configured yet)
- ✅ Share buttons
- ✅ Professional layout

---

## 📝 How to Add More Articles

### Quick Method (5 minutes):

1. Open `src/data/cities/minneapolis/articles/index.ts`

2. Add a new article object:
```typescript
export const hiddenGems: Article = {
  slug: 'hidden-gems-winter-2025',
  citySlug: 'minneapolis',
  title: '10 Hidden Gems for Winter in Minneapolis',
  excerpt: 'Beat the cold with these insider spots...',
  author: { name: 'Your Name' },
  publishedAt: '2025-01-20T12:00:00Z',
  category: 'guide',
  tags: ['hidden-gems', 'winter', 'local'],
  content: [
    { type: 'paragraph', content: 'Winter in Minneapolis...' },
    { type: 'heading', level: 2, content: '1. The Underground Food Hall' },
    { type: 'paragraph', content: 'Beneath the skyway...' },
    { type: 'ad', size: 'rectangle' }, // Auto ad injection!
    // ... more blocks
  ],
  seo: {
    metaDescription: 'Discover 10 hidden gems...',
  },
}
```

3. Add to exports:
```typescript
export const articles: Article[] = [
  newRestaurantsNortheast,
  hiddenGems, // Add here
]
```

4. Save and refresh `/minneapolis/articles`

**That's it!** Your new article appears instantly.

---

## 🎨 Article Block Types You Can Use

All defined in `src/types/article.ts`:

### Text Blocks:
```typescript
{ type: 'paragraph', content: '...' }
{ type: 'heading', level: 2, content: '...' }
{ type: 'quote', content: '...', attribution: 'Name', role: 'Title' }
```

### Visual Blocks:
```typescript
{ type: 'image', src: '/path.jpg', alt: '...', caption: '...', credit: '...' }
{ type: 'gallery', images: [{ src: '...', alt: '...', caption: '...' }] }
```

### Embeds:
```typescript
{ type: 'embed', url: 'youtube.com/watch?v=...', platform: 'youtube', caption: '...' }
// Platforms: youtube, instagram, twitter, vimeo, spotify
```

### Interactive:
```typescript
{ type: 'ad', size: 'rectangle' } // Auto ad placement
{ type: 'callout', variant: 'tip', title: 'Pro Tip', content: '...' }
// Variants: info, tip, warning, success
{ type: 'divider' }
```

---

## 🎯 New Components Created

### 1. **ArticleCard** (`src/components/ArticleCard.tsx`)
- Full card for feeds
- Compact card for sidebars/related articles
- Hover effects, category badges
- Automatic image optimization

### 2. **ArticleRenderer** (`src/components/ArticleRenderer.tsx`)
- Renders all article block types
- Handles YouTube/Instagram/Twitter embeds
- Automatic ad injection based on block position
- Beautiful typography

### 3. **Article Feed Page** (`src/app/[city]/articles/page.tsx`)
- Animated feed with `<AnimatedFeed />`
- SEO metadata
- Universal ads (header + footer)
- Empty state handling

### 4. **Article Detail Page** (`src/app/[city]/articles/[slug]/page.tsx`)
- Full article layout
- Author info, share buttons
- Related articles
- SEO + Open Graph + Twitter cards
- Automatic ad placement

---

## 🔗 Integration with Existing Site

### Add Link to Navigation:

Want to add "Articles" to your navigation? Update your navigation component:

```typescript
const sections = [
  { id: 'history', label: 'History', path: '/history' },
  { id: 'articles', label: 'Articles', path: '/articles' }, // NEW
  { id: 'curiosities', label: 'Curiosities', path: '/curiosities' },
  // ... rest
]
```

### Add to City Homepage:

Show recent articles on city homepage:

```typescript
import { getArticlesForCity } from '@/lib/queries/articles'
import { ArticleCard } from '@/components/ArticleCard'

// In your page component
const recentArticles = await getArticlesForCity(params.city, { limit: 3 })

// In your JSX
<section>
  <h2>Recent Articles</h2>
  {recentArticles.map(article => (
    <ArticleCard key={article.slug} article={article} />
  ))}
</section>
```

---

## 📊 What You Get

**For Each Article:**
- ✅ Automatic SEO optimization
- ✅ Open Graph tags (Facebook previews)
- ✅ Twitter Card tags (Twitter previews)
- ✅ Structured data (Google rich results)
- ✅ Automatic ad placement
- ✅ Share buttons
- ✅ Related articles
- ✅ Mobile-responsive layout
- ✅ Fast, optimized images

**For the Feed:**
- ✅ Animated entry (smooth fade-in)
- ✅ Grid layout (responsive)
- ✅ Category filtering (ready to add)
- ✅ Tag filtering (ready to add)
- ✅ Pagination (ready to add)

---

## 🎨 Customization Ideas

### Add a Featured Article to Homepage:
```typescript
const featured = await getArticlesForCity('minneapolis', { limit: 1 })
// Render with special styling
```

### Create Category Pages:
The query API already supports this:
```typescript
const guides = await getArticlesByCategory('guide')
```

### Add Tag Pages:
```typescript
const restaurantArticles = await getArticlesByTag('restaurants')
```

### Global Article Feed:
Create `/articles/page.tsx` for cross-city articles:
```typescript
const allArticles = await getAllArticles({ limit: 50 })
```

---

## 💡 Pro Tips

### 1. **Reuse Content Blocks**
Create reusable blocks in a separate file:

```typescript
// src/data/shared/article-blocks.ts
export const standardDisclaimer = {
  type: 'callout',
  variant: 'info',
  content: 'Prices and hours subject to change. Call ahead to confirm.',
}
```

### 2. **Image Optimization**
Use Next.js Image component benefits:
- Automatic WebP conversion
- Lazy loading
- Responsive sizes
- Blur placeholder (add `blurDataURL`)

### 3. **Ad Strategy**
- Articles get ads every 5 blocks (configurable in `src/lib/ads/config.ts`)
- Adjust `adPlacements.article.inContent.every` to change frequency

### 4. **Writing Workflow**
1. Draft in Notion/Google Docs
2. Copy content into article blocks
3. Add images from `/public`
4. Preview locally
5. Push to production

Takes ~10 minutes per article once you're familiar with the format.

---

## 🚀 Next Steps

1. **Start Writing** - Add 3-5 articles for Minneapolis
2. **Test Locally** - Make sure everything looks good
3. **Add to Navigation** - Link from your main nav
4. **Enable Real Ads** - Configure OpsCo/YieldLift when ready
5. **Promote** - Share articles on social media

---

## ✅ Summary

**You now have:**
- ✅ Complete article publishing system
- ✅ Beautiful, responsive layouts
- ✅ Automatic SEO optimization
- ✅ Built-in ad placement
- ✅ Smooth animations
- ✅ One example article to learn from

**To publish a new article:**
1. Add article object to `articles/index.ts`
2. Save file
3. Done! (takes <5 minutes)

**URLs to visit:**
- Feed: `/minneapolis/articles`
- Detail: `/minneapolis/articles/best-new-restaurants-northeast-2025`

Enjoy your new publishing workflow! 🎉
