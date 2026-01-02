# Curious City - Monetization Setup Guide

This guide will walk you through setting up analytics and ad revenue for Curious City.

## 🎯 Quick Start (Do This First)

### 1. Google Analytics 4 Setup

**Why:** Track traffic, user behavior, and content performance.

**Steps:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin" (gear icon in bottom left)
3. Click "Create Property"
4. Fill in:
   - Property name: "Curious City"
   - Reporting time zone: Your timezone
   - Currency: USD
5. Click "Next" → Select industry category (Travel & Tourism)
6. Click "Create" and accept terms
7. Choose "Web" platform
8. Add your website URL: `https://thecurious.city` (or your actual domain)
9. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)
10. Add to `.env.local`:
    ```bash
    NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
    ```

**Verification:**
- Deploy your site and visit it
- In Google Analytics, go to "Reports" → "Realtime"
- You should see yourself as an active user within 30 seconds

---

### 2. Google AdSense Setup

**Why:** This is how you make money from ads.

**Requirements:**
- You must have a deployed website (can't test on localhost)
- Your site needs original content (you have this!)
- Must be 18+ years old

**Steps:**

#### Phase 1: Apply to AdSense
1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Click "Get Started"
3. Enter your website URL (must be live and accessible)
4. Fill in your payment details (where Google will send money)
5. Accept terms and conditions
6. Click "Get Started"

#### Phase 2: Add AdSense Code
7. Copy your **Publisher ID** (looks like `ca-pub-XXXXXXXXXXXXXXXX`)
8. Add to `.env.local`:
    ```bash
    NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
    ```
9. AdSense will ask you to add a verification code to your site
   - **You don't need to do this manually** - it's already in your layout.tsx
10. Click "I've added the code" in AdSense dashboard

#### Phase 3: Wait for Approval
- Google will review your site (can take 1-2 weeks)
- They check for:
  - Original content ✅ (you have this)
  - Privacy policy page ⚠️ (you should add this)
  - Terms of service ⚠️ (you should add this)
  - About page ⚠️ (you should add this)
  - Contact page ⚠️ (you should add this)
  - Sufficient content ✅ (you have plenty)
  - No prohibited content ✅ (you're clean)

#### Phase 4: Create Ad Units (After Approval)
11. Once approved, go to AdSense → "Ads" → "By ad unit"
12. Click "Display ads"
13. Create these ad units:
    - **Name:** "Homepage Banner" → Size: Responsive → Copy "Ad unit ID" (looks like `1234567890`)
    - **Name:** "Article Rectangle" → Size: Responsive → Copy ID
    - **Name:** "Leaderboard Header" → Size: Responsive → Copy ID
    - **Name:** "Mobile Banner" → Size: Responsive → Copy ID
    - **Name:** "Content Native" → Type: In-feed → Copy ID

14. Save these IDs somewhere - you'll use them in your components

---

### 3. Google Search Console Setup

**Why:** Monitor SEO performance and get indexed faster.

**Steps:**
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property"
3. Choose "URL prefix" and enter your domain
4. Verify ownership:
   - Option 1: Upload HTML file (they'll give you one)
   - Option 2: Add DNS record (easier if you have domain access)
   - Option 3: **Use Google Analytics** (if you already set up GA4 - easiest!)
5. Once verified, click "Sitemaps" in left menu
6. Add sitemap URL: `https://yoursite.com/sitemap.xml`
7. Click "Submit"

**What to monitor:**
- Performance → See what keywords bring traffic
- Coverage → Check for indexing errors
- Enhancements → Fix mobile usability issues

---

## 📊 Adding Ads to Your Site

### Basic Usage

The AdSense component is already created. Here's how to use it:

#### Option 1: Use Pre-built Components
```tsx
import { BannerAd, RectangleAd, LeaderboardAd, ResponsiveAd } from '@/components/AdSense'

// In your page:
<BannerAd slot="1234567890" />
<RectangleAd slot="9876543210" className="my-8" />
<LeaderboardAd slot="5555555555" />
<ResponsiveAd slot="1111111111" format="auto" />
```

#### Option 2: Use Main Component
```tsx
import { AdSense } from '@/components/AdSense'

<AdSense
  slot="your-ad-slot-id"
  size="rectangle"
  className="my-4"
/>
```

### Strategic Ad Placements

Here's where to add ads for maximum revenue without annoying users:

#### 1. Homepage (src/app/page.tsx)
```tsx
// After hero section, before featured article
<ResponsiveAd slot="HOMEPAGE_TOP" className="my-8" />

// Between featured and recent history
<RectangleAd slot="HOMEPAGE_MID" className="my-8" />

// At bottom before footer
<LeaderboardAd slot="HOMEPAGE_BOTTOM" className="mt-12" />
```

#### 2. City Pages (src/app/[city]/page.tsx)
```tsx
// After city hero image
<BannerAd slot="CITY_BANNER" className="my-6" />

// Between content sections
<RectangleAd slot="CITY_CONTENT" className="my-8" />
```

#### 3. Dark History / Curiosities Pages
```tsx
// Every 3-4 cards, insert:
<ResponsiveAd slot="CONTENT_NATIVE" format="fluid" className="my-6" />
```

#### 4. Long-form History Articles
```tsx
// After introduction (first 2-3 paragraphs)
<RectangleAd slot="ARTICLE_TOP" className="my-8 mx-auto" />

// Mid-article (around 50% scroll)
<RectangleAd slot="ARTICLE_MID" className="my-8 mx-auto" />

// End of article
<LeaderboardAd slot="ARTICLE_BOTTOM" className="my-8" />
```

### Example: Add Ads to Dark History Page

Edit `src/app/[city]/dark-history/page.tsx`:

```tsx
import { RectangleAd, BannerAd } from '@/components/AdSense'

// Inside the component, after the filter bar:
<BannerAd slot="DARK_HISTORY_TOP" className="my-6" />

// Then in the scrolling content, every 3-4 items:
{items.map((item, index) => (
  <div key={item.id}>
    {/* Render your dark history card */}
    <DarkHistoryCard item={item} />

    {/* Every 4th item, show an ad */}
    {(index + 1) % 4 === 0 && (
      <RectangleAd
        slot="DARK_HISTORY_CONTENT"
        className="my-8"
      />
    )}
  </div>
))}
```

---

## 📈 Analytics Event Tracking

The analytics library is already set up with predefined event trackers.

### Import and Use:

```tsx
import { trackShare, trackFilter, trackContentView } from '@/lib/analytics'

// Track when user shares content
trackShare('twitter', 'Minneapolis Dark History')

// Track filter usage
trackFilter('category', 'crime')

// Track content views
trackContentView('dark-history', 'The Mystery of the Mill')

// Track city switches
trackCitySwitch('Minneapolis', 'Chicago')
```

### Add to Share Buttons:

Edit `src/components/ShareLinks.tsx`:

```tsx
import { trackShare } from '@/lib/analytics'

// In each share button onClick:
onClick={() => {
  trackShare('twitter', title)
  // ... existing share logic
}}
```

### Add to Filters:

Edit filter components to track usage:

```tsx
import { trackFilter } from '@/lib/analytics'

const handleFilterChange = (category: string) => {
  trackFilter('curiosity-category', category)
  setSelectedCategory(category)
}
```

---

## 🚀 Pre-Launch Checklist

Before going live with ads, make sure you have:

### Required Pages (For AdSense Approval)
- [ ] **Privacy Policy** - Create at `src/app/privacy/page.tsx`
  - Explain what data you collect (Analytics, AdSense cookies)
  - How users can opt-out
  - Template: https://www.privacypolicygenerator.info/

- [ ] **Terms of Service** - Create at `src/app/terms/page.tsx`
  - User responsibilities
  - Content ownership
  - Template: https://www.termsofservicegenerator.net/

- [ ] **About Page** - Create at `src/app/about/page.tsx`
  - What Curious City is
  - Who runs it
  - Mission statement

- [ ] **Contact Page** - Create at `src/app/contact/page.tsx`
  - Email address
  - Social media links
  - Feedback form (optional)

### Add Footer Links

Edit your Footer component to include:
```tsx
<Link href="/privacy">Privacy Policy</Link>
<Link href="/terms">Terms of Service</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
```

---

## 💰 Revenue Expectations

### Realistic Projections

| Monthly Traffic | Ad Revenue (AdSense) | Notes |
|----------------|----------------------|-------|
| 10K pageviews | $30-80 | Starting phase |
| 50K pageviews | $150-400 | Growth phase |
| 100K pageviews | $500-1,200 | Apply to Mediavine |
| 250K pageviews | $1,500-4,000 | Premium ad networks |
| 500K pageviews | $4,000-10,000 | Solid revenue |
| 1M pageviews | $10,000-25,000 | Full-time income |

**CPM Ranges:**
- AdSense (beginner): $3-8 CPM
- Mediavine (50K+): $15-25 CPM
- Raptive/AdThrive (100K+): $20-35 CPM

### Revenue Optimization Tips

1. **Traffic Quality > Quantity**
   - US/Canada traffic = higher CPMs
   - Desktop > Mobile CPMs
   - Engaged users (high time on page) = better rates

2. **Content Strategy**
   - Long-form content (2,000+ words) = more ad slots
   - Video content = higher CPMs
   - Evergreen topics = consistent traffic

3. **Ad Placement**
   - Above-the-fold ads = highest revenue
   - In-content ads > sidebar ads
   - Don't overdo it (max 3-4 ads per page initially)

4. **SEO Focus**
   - Target long-tail keywords
   - "Dark history of [city]" type searches
   - Build backlinks from local sites

---

## 🎓 Next Steps After This Setup

1. **Week 1:** Deploy site, add GA4 + Search Console
2. **Week 2:** Apply to AdSense, create required pages
3. **Week 3:** Wait for AdSense approval
4. **Week 4:** Add first 3-5 ad units, test
5. **Month 2:** Monitor analytics, optimize ad placements
6. **Month 3:** Start email list, add affiliate links
7. **Month 6:** Apply to premium ad networks (if traffic qualifies)

---

## 🆘 Troubleshooting

### "My ads aren't showing"
- Check `.env.local` has correct `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
- Make sure site is deployed (ads don't show on localhost)
- Wait 24-48 hours after adding ad units
- Check browser console for errors

### "AdSense rejected my application"
- Add Privacy Policy, Terms, About, Contact pages
- Wait 30 days and reapply
- Make sure content is substantial (you have plenty)
- Ensure site is fully functional (no broken links)

### "Analytics not tracking"
- Check `.env.local` has `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Wait 24-48 hours for data to appear
- Use Realtime view to test immediately
- Disable ad blockers when testing

### "Sitemap not working"
- Visit `/sitemap.xml` directly to test
- Make sure site is deployed
- Resubmit in Search Console if needed

---

## 📞 Support Resources

- **Google Analytics Help:** https://support.google.com/analytics
- **AdSense Help:** https://support.google.com/adsense
- **Search Console Help:** https://support.google.com/webmasters
- **Mediavine Application:** https://www.mediavine.com/apply/
- **Raptive Application:** https://raptive.com/creators/

---

## ✅ What's Already Done

You have:
- ✅ Google Analytics 4 integrated with event tracking
- ✅ AdSense component ready to use
- ✅ Sitemap.xml auto-generated
- ✅ Robots.txt configured
- ✅ SEO meta tags optimized
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data
- ✅ Analytics event tracking library
- ✅ Ad placeholder components

You need:
- ⚠️ `.env.local` file with your IDs
- ⚠️ Privacy Policy page
- ⚠️ Terms of Service page
- ⚠️ About page
- ⚠️ Contact page
- ⚠️ AdSense approval
- ⚠️ Ad unit slots from AdSense

**You're about 70% done! Just need the accounts and legal pages.**
