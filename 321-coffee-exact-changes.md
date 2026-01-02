# Exact Code Changes for 321 Coffee

## Current Code (Lines 574-589 in raleigh.ts)

```typescript
{
  name: '321 Coffee',
  neighborhood: 'Multiple Locations',
  vibe: 'Excellent drinks with an incredible mission — employing individuals with intellectual and developmental disabilities.',
  order: 'Whatever sounds good. The beans are roasted weekly in-house.',
  why: '321 Coffee started as a pop-up with folding tables and has grown into a beloved local institution with multiple locations. They roast their own beans weekly. But the mission is what sets them apart — creating meaningful employment for people often overlooked. Great coffee, better purpose.',
  address: '524 Hillsborough St, Raleigh, NC 27603',
  coordinates: { lat: 35.7847, lng: -78.6486 },
  hours: '7am-5pm Mon-Fri, 8am-5pm Sat-Sun',
  price: '$$',
  website: 'https://www.321coffee.com',
  instagram: '@321coffee',
  image: {
    src: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80',
    alt: 'Warm community coffee shop with friendly atmosphere',
  },
},
```

## Updated Code (What It Should Become)

```typescript
{
  name: '321 Coffee',
  neighborhood: 'Multiple Locations',
  vibe: 'Excellent drinks with an incredible mission — employing individuals with intellectual and developmental disabilities.',
  order: 'Whatever sounds good. The beans are roasted weekly in-house.',
  why: '321 Coffee started as a pop-up with folding tables and has grown into a beloved local institution with multiple locations. They roast their own beans weekly. But the mission is what sets them apart — creating meaningful employment for people often overlooked. Great coffee, better purpose.',
  address: '524 Hillsborough St, Raleigh, NC 27603',
  coordinates: { lat: 35.7847, lng: -78.6486 },
  hours: '7am-5pm Mon-Fri, 8am-5pm Sat-Sun',
  price: '$$',
  website: 'https://www.321coffee.com',
  instagram: '@drink321coffee',  // CHANGED: Fixed handle
  images: [  // CHANGED: From singular 'image' to plural 'images' array
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/interior-01.jpg',
      alt: '321 Coffee interior showing welcoming community atmosphere',
      credit: '321 Coffee',
    },
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/barista-01.jpg',
      alt: '321 Coffee employee with IDD preparing specialty drinks',
      credit: '321 Coffee',
    },
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/drinks-01.jpg',
      alt: '321 Coffee specialty drinks and latte art',
      credit: '321 Coffee',
    },
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/community-01.jpg',
      alt: '321 Coffee community space showcasing mission-driven approach',
      credit: '321 Coffee',
    },
  ],
  menu: {  // ADDED: Complete menu object
    categories: [
      {
        name: 'Espresso Drinks',
        items: [
          // FILL IN with actual menu items from 321coffee.com
          // Example format:
          { name: 'Espresso', description: 'Single or double shot', price: '$3.50' },
          { name: 'Americano', description: '', price: '$4.00' },
          { name: 'Cappuccino', description: '', price: '$4.50' },
          { name: 'Latte', description: '', price: '$4.75' },
          { name: 'Mocha', description: '', price: '$5.25' },
          // Add all other espresso drinks
        ],
      },
      {
        name: 'Coffee & Tea',
        items: [
          { name: 'Drip Coffee', description: 'Roasted weekly in-house', price: '$3.00' },
          { name: 'Cold Brew', description: '', price: '$4.50' },
          // Add all coffee/tea items
        ],
      },
      {
        name: 'Food',
        items: [
          // Add all food items with prices
          // { name: 'Pastry Name', description: '', price: '$X.XX' },
        ],
      },
    ],
    lastUpdated: 'December 2025',
    menuUrl: 'https://www.321coffee.com/menu',  // Verify this URL is correct
    notes: 'Beans roasted weekly in-house. Mission-driven coffee shop employing individuals with intellectual and developmental disabilities.',
  },
},
```

## Summary of Changes

### 1. Instagram Handle (Line 584)
**Before:** `instagram: '@321coffee',`
**After:** `instagram: '@drink321coffee',`

### 2. Image → Images (Lines 585-589)
**Before:**
```typescript
image: {
  src: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80',
  alt: 'Warm community coffee shop with friendly atmosphere',
},
```

**After:**
```typescript
images: [
  {
    src: '/images/establishments/coffee-shops/raleigh/321-coffee/interior-01.jpg',
    alt: '321 Coffee interior showing welcoming community atmosphere',
    credit: '321 Coffee',
  },
  {
    src: '/images/establishments/coffee-shops/raleigh/321-coffee/barista-01.jpg',
    alt: '321 Coffee employee with IDD preparing specialty drinks',
    credit: '321 Coffee',
  },
  {
    src: '/images/establishments/coffee-shops/raleigh/321-coffee/drinks-01.jpg',
    alt: '321 Coffee specialty drinks and latte art',
    credit: '321 Coffee',
  },
  {
    src: '/images/establishments/coffee-shops/raleigh/321-coffee/community-01.jpg',
    alt: '321 Coffee community space showcasing mission-driven approach',
    credit: '321 Coffee',
  },
],
```

### 3. Menu Object (New - After Images)
```typescript
menu: {
  categories: [
    {
      name: 'Espresso Drinks',
      items: [
        // Your researched items here
      ],
    },
    {
      name: 'Coffee & Tea',
      items: [
        // Your researched items here
      ],
    },
    {
      name: 'Food',
      items: [
        // Your researched items here
      ],
    },
  ],
  lastUpdated: 'December 2025',
  menuUrl: 'https://www.321coffee.com/menu',
  notes: 'Beans roasted weekly in-house. Mission-driven coffee shop employing individuals with intellectual and developmental disabilities.',
},
```

## What You Need to Fill In

1. **Menu Items & Prices**: Visit https://www.321coffee.com and get:
   - All espresso drinks
   - All coffee/tea options
   - All food items
   - Prices for everything

2. **Image Alt Text**: Update the alt text to accurately describe what's shown in each actual image you download

3. **Menu URL**: Verify the correct menu page URL (might be /menu, /order, etc.)

## Important Notes

- Make sure all 4 images are downloaded to the correct directory first
- Filenames must match exactly: `interior-01.jpg`, `barista-01.jpg`, `drinks-01.jpg`, `community-01.jpg`
- No placeholder prices - fill in actual prices from the website
- Keep the same formatting/indentation as shown
- The closing `},` on the last line stays the same

## Verification

After making changes, check:
- [ ] Line 540: `@drink321coffee` (not @321coffee)
- [ ] Changed `image:` to `images:`
- [ ] 4 images in the array
- [ ] Each image has `src`, `alt`, and `credit`
- [ ] Menu object added
- [ ] All menu items have real prices
- [ ] No syntax errors (matching brackets, commas, etc.)
