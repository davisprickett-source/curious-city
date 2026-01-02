# Quick Start: Complete 321 Coffee Entry

## TL;DR - What You Need to Do

1. **Get Menu Info** → Visit https://www.321coffee.com and write down all menu items & prices
2. **Get 4 Images** → Find URLs from Instagram (@drink321coffee), Yelp, or their website
3. **Download Images** → Edit and run `./scripts/download-321-coffee-images.sh`
4. **Update Code** → Edit `src/data/cities/raleigh.ts` lines 530-545

---

## Step 1: Research Menu (5-10 minutes)

Visit https://www.321coffee.com and document:
- Coffee drinks & prices
- Food items & prices
- Any specialty/signature items

Write them down - you'll need them for Step 4.

---

## Step 2: Get Image URLs (5-10 minutes)

### Option A: Instagram (Best for community/mission photos)
1. Go to https://www.instagram.com/drink321coffee
2. Find a good photo showing employees or interior
3. Right-click → "Open Image in New Tab"
4. Copy the URL (starts with `https://scontent-...`)

### Option B: Yelp (Best for interior/drinks)
1. Search "321 Coffee Raleigh" on Yelp
2. Click "Photos" (25 available)
3. Right-click photo → "Open Image in New Tab"
4. Copy URL

**You need 4 image URLs total.** Look for variety:
- 1 interior/atmosphere
- 1 employee/barista
- 1 drinks/coffee
- 1 community/exterior

---

## Step 3: Download Images (2 minutes)

```bash
cd "/Users/dav/Projects/Curious City"

# Edit this file and paste your 4 URLs:
nano scripts/download-321-coffee-images.sh

# Run it:
./scripts/download-321-coffee-images.sh

# Verify:
open public/images/establishments/coffee-shops/raleigh/321-coffee/
```

---

## Step 4: Update raleigh.ts (5-10 minutes)

Open: `/Users/dav/Projects/Curious City/src/data/cities/raleigh.ts`

**Find this (line 574):**
```typescript
{
  name: '321 Coffee',
  // ... existing fields ...
  instagram: '@321coffee',
  image: {
    src: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80',
    alt: 'Warm community coffee shop with friendly atmosphere',
  },
},
```

**Replace with:**
```typescript
{
  name: '321 Coffee',
  // ... keep existing fields (neighborhood, vibe, order, why, address, etc.) ...
  instagram: '@drink321coffee',  // CHANGED
  images: [  // CHANGED from 'image'
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/interior-01.jpg',
      alt: 'Describe what this image shows',
      credit: '321 Coffee',
    },
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/barista-01.jpg',
      alt: 'Describe what this image shows',
      credit: '321 Coffee',
    },
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/drinks-01.jpg',
      alt: 'Describe what this image shows',
      credit: '321 Coffee',
    },
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/community-01.jpg',
      alt: 'Describe what this image shows',
      credit: '321 Coffee',
    },
  ],
  menu: {  // ADDED
    categories: [
      {
        name: 'Espresso Drinks',
        items: [
          { name: 'Latte', description: '', price: '$X.XX' },
          // Add all items from your research
        ],
      },
      {
        name: 'Coffee & Tea',
        items: [
          { name: 'Drip Coffee', description: 'Roasted weekly in-house', price: '$X.XX' },
          // Add all items
        ],
      },
      {
        name: 'Food',
        items: [
          // Add all food items
        ],
      },
    ],
    lastUpdated: 'December 2025',
    menuUrl: 'https://www.321coffee.com/menu',
    notes: 'Beans roasted weekly in-house. Mission-driven coffee shop employing individuals with IDD.',
  },
},
```

---

## Reference Examples in Same File

- **Jubala Coffee** (lines 474-527) - See how menu is structured
- **Bida Manda** (lines 658-731) - See how images array works
- **Morning Times** (lines 597-647) - See food menu examples

---

## Verify Your Work

- [ ] Instagram handle is `@drink321coffee` (not @321coffee)
- [ ] Changed `image:` to `images:` (plural, array)
- [ ] 4 images in the array
- [ ] All image files exist in the directory
- [ ] Added `menu:` object
- [ ] No "$X.XX" placeholders - all real prices
- [ ] `lastUpdated: 'December 2025'`

---

## Need Help?

See detailed guides:
- `321-coffee-completion-guide.md` - Full instructions
- `321-coffee-checklist.md` - Step-by-step checklist
- `321-coffee-updated-entry.ts.template` - Complete code template
