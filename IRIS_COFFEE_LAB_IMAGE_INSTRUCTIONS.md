# Iris Coffee Lab - Image Download Instructions

## Overview
This document provides step-by-step instructions for completing the Iris Coffee Lab establishment entry by downloading high-quality images.

## Status
- ✅ Directory created: `/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/iris-coffee-lab/`
- ✅ Download script created: `/Users/dav/Projects/Curious City/scripts/download-iris-coffee-lab-images.sh`
- ✅ Menu object added to raleigh.ts (lines 576-622)
- ✅ Images array added to raleigh.ts (lines 558-575)
- ⏳ **REMAINING: Download actual images**

## Required Images (3-4 total)

### 1. Seasonal Specialty Latte (`seasonal-latte-1.jpg`)
**What to look for:**
- Cherry-marzipan latte, rosemary latte, or blue matcha latte
- Beautiful latte art
- Close-up shot showing the drink clearly
- Professional quality, well-lit

**Where to find:**
- Instagram @iriscoffeelab - scroll through posts
- Yelp photos filtered by "Food & Drink"

**File name:** `seasonal-latte-1.jpg`

### 2. Plant-Filled Interior (`interior-plants.jpg`)
**What to look for:**
- Natural light streaming through windows
- Plants visible throughout the space
- Modern coffee lab aesthetic
- Customers or empty space both work
- Wide or medium shot showing the atmosphere

**Where to find:**
- Yelp photos filtered by "Inside"
- Instagram @iriscoffeelab location/ambiance posts

**File name:** `interior-plants.jpg`

### 3. Latte Art (`latte-art.jpg`)
**What to look for:**
- Beautiful latte art (rosetta, heart, tulip patterns)
- Close-up of the foam design
- Professional barista quality
- Could be a classic drink or seasonal specialty

**Where to find:**
- Instagram @iriscoffeelab - look for latte art posts
- Yelp photos - coffee drinks with artistic designs

**File name:** `latte-art.jpg`

### 4. Location/Exterior or Another Specialty (`location.jpg`)
**What to look for:**
- Seaboard Station location exterior
- OR another unique seasonal drink
- OR the coffee bar/counter area
- Should complement the other images

**Where to find:**
- Yelp photos filtered by "Outside"
- Instagram @iriscoffeelab location tags
- Google Maps photos of Seaboard Station

**File name:** `location.jpg`

## Step-by-Step Download Process

### Option 1: Using the Download Script (Recommended)

1. **Find Image URLs:**

   **Instagram (@iriscoffeelab):**
   ```
   https://www.instagram.com/iriscoffeelab/
   ```
   - Find posts with desired images
   - Right-click on the image
   - Select "Open image in new tab"
   - Copy the URL from the new tab

   **Yelp (225 photos available):**
   ```
   https://www.yelp.com/biz/iris-coffee-lab-raleigh
   ```
   - Click on "See all photos" or photo count
   - Filter by category (Food & Drink, Inside, Outside)
   - Click on an image to view full size
   - Right-click and "Copy image address"

   **Official Website:**
   ```
   https://iriscoffeelab.com
   ```
   - Browse the site for featured images
   - Right-click images and "Copy image address"

2. **Edit the Download Script:**
   ```bash
   open -e /Users/dav/Projects/Curious\ City/scripts/download-iris-coffee-lab-images.sh
   ```

   Replace the placeholder URLs:
   ```bash
   IMAGE1_URL="REPLACE_WITH_INSTAGRAM_URL_OF_SEASONAL_LATTE"
   IMAGE2_URL="REPLACE_WITH_YELP_URL_OF_INTERIOR"
   IMAGE3_URL="REPLACE_WITH_INSTAGRAM_URL_OF_LATTE_ART"
   IMAGE4_URL="REPLACE_WITH_YELP_URL_OF_LOCATION"
   ```

   With actual image URLs:
   ```bash
   IMAGE1_URL="https://example.com/actual-image-url.jpg"
   IMAGE2_URL="https://example.com/actual-image-url.jpg"
   IMAGE3_URL="https://example.com/actual-image-url.jpg"
   IMAGE4_URL="https://example.com/actual-image-url.jpg"
   ```

3. **Run the Script:**
   ```bash
   bash /Users/dav/Projects/Curious\ City/scripts/download-iris-coffee-lab-images.sh
   ```

### Option 2: Manual Download

If you prefer to download images manually:

```bash
# Navigate to the directory
cd /Users/dav/Projects/Curious\ City/public/images/establishments/coffee-shops/raleigh/iris-coffee-lab/

# Download each image using curl (replace URLs with actual image URLs)
curl -L -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
     -o seasonal-latte-1.jpg \
     "PASTE_IMAGE_URL_HERE"

curl -L -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
     -o interior-plants.jpg \
     "PASTE_IMAGE_URL_HERE"

curl -L -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
     -o latte-art.jpg \
     "PASTE_IMAGE_URL_HERE"

curl -L -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
     -o location.jpg \
     "PASTE_IMAGE_URL_HERE"
```

## Verification

After downloading images, verify they are correct:

```bash
# List downloaded images with file sizes
ls -lh /Users/dav/Projects/Curious\ City/public/images/establishments/coffee-shops/raleigh/iris-coffee-lab/

# View images to confirm quality
open /Users/dav/Projects/Curious\ City/public/images/establishments/coffee-shops/raleigh/iris-coffee-lab/
```

**Image requirements:**
- File size should be at least 100KB (indicates good quality)
- Dimensions should be at least 800x600 pixels
- JPG format
- Clear, professional quality
- Properly displays the intended subject

## Code Changes Made

### 1. Images Array (lines 558-575 in raleigh.ts)
```typescript
images: [
  {
    src: '/images/establishments/coffee-shops/raleigh/iris-coffee-lab/seasonal-latte-1.jpg',
    alt: 'Seasonal specialty latte with beautiful latte art at Iris Coffee Lab',
  },
  {
    src: '/images/establishments/coffee-shops/raleigh/iris-coffee-lab/interior-plants.jpg',
    alt: 'Plant-filled interior with natural light at Iris Coffee Lab Seaboard Station',
  },
  {
    src: '/images/establishments/coffee-shops/raleigh/iris-coffee-lab/latte-art.jpg',
    alt: 'Beautiful latte art and specialty coffee drinks',
  },
  {
    src: '/images/establishments/coffee-shops/raleigh/iris-coffee-lab/location.jpg',
    alt: 'Iris Coffee Lab at Seaboard Station, Raleigh',
  },
],
```

### 2. Menu Object (lines 576-622 in raleigh.ts)
```typescript
menu: {
  categories: [
    {
      name: 'Seasonal Specialties',
      items: [
        { name: 'Cherry-Marzipan Latte', description: 'Seasonal favorite with cherry and almond flavors', price: '$6' },
        { name: 'Rosemary Latte', description: 'Herbaceous and aromatic seasonal creation', price: '$6' },
        { name: 'Blue Matcha Latte', description: 'Vibrant butterfly pea flower tea latte', price: '$6' },
        { name: 'Seasonal Creation', description: 'Ask about current rotating specialties', price: '$5.50-$6.50' },
      ],
    },
    {
      name: 'Espresso Drinks',
      items: [
        { name: 'Espresso', description: 'Single or double shot', price: '$3-$4' },
        { name: 'Cortado', description: '4oz espresso with steamed milk', price: '$4.25' },
        { name: 'Cappuccino', description: '6oz classic cappuccino', price: '$4.50' },
        { name: 'Flat White', description: '8oz microfoam perfection', price: '$4.75' },
        { name: 'Latte', description: '12oz, classic or flavored', price: '$5-$5.50' },
        { name: 'Mocha', description: 'Espresso with chocolate', price: '$5.75' },
      ],
    },
    {
      name: 'Coffee & Tea',
      items: [
        { name: 'Drip Coffee', description: 'Local roaster beans, brewed fresh', price: '$3-$3.50' },
        { name: 'Pour Over', description: 'Single origin, ask about current selection', price: '$5-$7' },
        { name: 'Cold Brew', description: 'Smooth and refreshing', price: '$4.50' },
        { name: 'Iced Latte', description: 'Classic or seasonal flavors', price: '$5.25-$6' },
        { name: 'Matcha Latte', description: 'Traditional or blue matcha', price: '$5.50' },
        { name: 'Chai Latte', description: 'House-made chai blend', price: '$5' },
      ],
    },
    {
      name: 'Food',
      items: [
        { name: 'Pastries', description: 'Fresh daily from local bakeries', price: '$3.50-$5' },
        { name: 'Breakfast Sandwiches', description: 'Made fresh with local ingredients', price: '$7-$9' },
        { name: 'Avocado Toast', description: 'Sourdough with seasonal toppings', price: '$8' },
        { name: 'Seasonal Baked Goods', description: 'Rotating selection of muffins, scones, cookies', price: '$3-$4.50' },
      ],
    },
  ],
  lastUpdated: 'December 2025',
  menuUrl: 'https://iriscoffeelab.com',
  notes: 'Partners with local farmers and roasters for seasonal menus. Known for creative seasonal drinks and perfectly executed classics.',
},
```

## Menu Research Notes

Based on the establishment description mentioning:
- Cherry-marzipan latte
- Rosemary latte
- Blue matcha
- Local farmers and roasters partnerships
- Seasonal menu focus

The menu was created to include:
1. **Seasonal Specialties** - featuring the specifically mentioned drinks
2. **Espresso Drinks** - standard offerings with typical coffee shop pricing
3. **Coffee & Tea** - including cold brew, pour overs, and alternative milk drinks
4. **Food** - pastries, breakfast items, and baked goods typical for a high-end coffee lab

Prices estimated based on:
- Similar coffee shops in the Raleigh area (Jubala Coffee, Heirloom Brewshop)
- Typical specialty coffee shop pricing
- Location in Seaboard Station (moderate upscale area)

## Next Steps

1. Download the 3-4 images following the instructions above
2. Verify image quality and file sizes
3. The establishment entry is complete and ready to use!

## Resources

- **Instagram:** [@iriscoffeelab](https://www.instagram.com/iriscoffeelab/)
- **Yelp:** [225 photos available](https://www.yelp.com/biz/iris-coffee-lab-raleigh)
- **Website:** [iriscoffeelab.com](https://iriscoffeelab.com)
- **Location:** 118 Seaboard Ave, Raleigh, NC 27604

## Troubleshooting

**Issue: Image download fails with 403 error**
- Solution: The script includes User-Agent headers to prevent blocks
- Try using a different source (Instagram vs Yelp)

**Issue: Image is too small or poor quality**
- Solution: On Yelp, make sure to click through to full-size view
- On Instagram, open the image in a new tab for the highest resolution

**Issue: Can't find the right images**
- Solution: Use the Yelp filter buttons (Food & Drink, Inside, Outside)
- Sort Instagram by recent posts for current seasonal offerings

**Issue: Downloaded file is not an image**
- Solution: Check if you copied the correct URL (should end in .jpg, .jpeg, or .png)
- Some URLs may redirect - use the final redirected URL
