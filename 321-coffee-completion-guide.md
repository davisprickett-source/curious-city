# 321 Coffee Completion Guide

## Overview
Complete the 321 Coffee establishment entry in `/Users/dav/Projects/Curious City/src/data/cities/raleigh.ts` (lines 530-545).

## Step 1: Research Menu Information

Visit https://www.321coffee.com and look for:
- Menu page or ordering section
- Coffee drinks (espresso, lattes, specialty drinks)
- Food items (pastries, sandwiches, breakfast items)
- Prices for all items

### Menu Structure to Create:
Based on the Jubala Coffee and Morning Times examples, create categories like:
- Espresso Drinks
- Coffee & Tea
- Specialty Drinks
- Food/Pastries
- Add-ons (if applicable)

## Step 2: Download Images

### Image Sources:
1. **Instagram: @drink321coffee** (Note: The correct handle is @drink321coffee, NOT @321coffee)
2. **Yelp**: Search "321 Coffee Raleigh" - they have 25+ photos
3. **Official Website**: 321coffee.com

### What to Look For:
- **Community/Mission Photos**: Employees with IDD working, showcasing their mission
- **Interior**: Coffee shop atmosphere, seating areas
- **Products**: Coffee drinks, latte art, food items
- **Exterior**: Building/storefront (if high quality)

### Download 3-4 Images:
Choose the best 3-4 images that show variety. Use the download script:

```bash
cd "/Users/dav/Projects/Curious City"

# Example downloads (replace URLs with actual image URLs you find):
./scripts/download-image.sh "IMAGE_URL_1" "public/images/establishments/coffee-shops/raleigh/321-coffee/interior-01.jpg"
./scripts/download-image.sh "IMAGE_URL_2" "public/images/establishments/coffee-shops/raleigh/321-coffee/barista-01.jpg"
./scripts/download-image.sh "IMAGE_URL_3" "public/images/establishments/coffee-shops/raleigh/321-coffee/drinks-01.jpg"
./scripts/download-image.sh "IMAGE_URL_4" "public/images/establishments/coffee-shops/raleigh/321-coffee/interior-02.jpg"
```

### Instagram Image URLs:
To get Instagram image URLs:
1. Visit https://www.instagram.com/drink321coffee
2. Find good photos showing employees, interior, drinks
3. Right-click on the image → "Open Image in New Tab" or use browser DevTools
4. Copy the image URL (usually starts with https://scontent-...)

### Yelp Image URLs:
1. Visit Yelp page for 321 Coffee Raleigh
2. Click on "Photos" section (25 photos available)
3. Right-click images → "Open Image in New Tab"
4. Copy high-resolution URLs

## Step 3: Update raleigh.ts

Once you have menu information and downloaded images, update the 321 Coffee entry (currently lines 574-589):

### Current Code:
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

### Updated Code Template:
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
  instagram: '@drink321coffee',  // CORRECTED HANDLE
  images: [
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/interior-01.jpg',
      alt: '321 Coffee interior with employees working',
      credit: '321 Coffee',
    },
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/barista-01.jpg',
      alt: '321 Coffee barista preparing drinks',
      credit: '321 Coffee',
    },
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/drinks-01.jpg',
      alt: '321 Coffee specialty drinks and latte art',
      credit: '321 Coffee',
    },
    {
      src: '/images/establishments/coffee-shops/raleigh/321-coffee/interior-02.jpg',
      alt: '321 Coffee community atmosphere and seating',
      credit: '321 Coffee',
    },
  ],
  menu: {
    categories: [
      {
        name: 'Espresso Drinks',
        items: [
          { name: 'Espresso', description: 'Single or double shot', price: '$X.XX' },
          { name: 'Americano', price: '$X.XX' },
          { name: 'Cappuccino', price: '$X.XX' },
          { name: 'Latte', price: '$X.XX' },
          { name: 'Mocha', price: '$X.XX' },
          // Add more items from menu
        ],
      },
      {
        name: 'Coffee & Tea',
        items: [
          { name: 'Drip Coffee', description: 'Roasted weekly in-house', price: '$X.XX' },
          { name: 'Cold Brew', price: '$X.XX' },
          // Add more items
        ],
      },
      {
        name: 'Food',
        items: [
          // Add food items from menu
        ],
      },
    ],
    lastUpdated: 'December 2025',
    menuUrl: 'https://www.321coffee.com/menu',  // Update if different
    notes: 'Beans roasted weekly in-house. All locations employ individuals with intellectual and developmental disabilities.',
  },
},
```

## Step 4: Verification

After making changes:
1. Check that all image files exist in the correct directory
2. Verify image paths match exactly in the TypeScript file
3. Ensure menu prices are current (December 2025)
4. Confirm Instagram handle is @drink321coffee (not @321coffee)

## Notes

- The directory has been created: `/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/321-coffee/`
- Follow the same format as Jubala Coffee (lines 474-527) and Bida Manda (lines 658-731)
- Instagram handle correction: Use `@drink321coffee` instead of `@321coffee`
- Prioritize images showing the mission-driven aspect (employees with IDD)
- Aim for 3-4 high-quality images showing variety
