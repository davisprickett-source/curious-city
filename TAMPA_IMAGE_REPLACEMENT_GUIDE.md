# Tampa Establishments Image Replacement Guide

This guide explains how to replace the placeholder image URLs in the Tampa establishments data with real, authentic images from Google Maps and establishment websites.

## Overview

All Tampa bars (5), restaurants (5), and coffee shops (6) have been updated with:
- **Image carousels**: 3-4 images per establishment showing exterior, interior, food/drinks
- **Menu images**: Reference to menu photos stored in `/public/images/establishments/`
- **Placeholder URLs**: Google Maps-style URLs that need to be replaced with real images

## Directory Structure Created

```
public/images/establishments/
├── bars/tampa/menus/
│   ├── jekyll/
│   ├── the-bricks-of-ybor/
│   ├── the-independent/
│   ├── cigar-city-cider-mead/
│   └── madame-fortune/
├── restaurants/tampa/menus/
│   ├── rooster-and-the-till/
│   ├── la-segunda/
│   ├── berns-steak-house/
│   ├── ulele/
│   └── west-tampa-sandwich/
└── coffee-shops/tampa/menus/
    ├── buddy-brew/
    ├── blind-tiger/
    ├── kahwa/
    ├── the-lab-coffee/
    ├── cafe-quiquiriqui/
    └── shortwave-coffee/
```

## How to Replace Placeholder Images

### Step 1: Find Real Images on Google Maps

1. Go to [Google Maps](https://maps.google.com)
2. Search for the establishment (use the address from `tampa.ts`)
3. Click on the establishment
4. Click "Photos" to see all photos
5. Find authentic photos showing:
   - **Exterior**: Building/storefront
   - **Interior**: Dining room, bar area, seating
   - **Food/Drinks**: Signature dishes, cocktails, coffee
   - **Ambiance**: Unique features (like Bern's dessert room, Ulele's barbacoa grill)

### Step 2: Get the Image URL

**Method 1: Right-click (Desktop)**
1. Right-click on the photo
2. Select "Copy image address" or "Open image in new tab"
3. The URL should look like: `https://lh3.googleusercontent.com/p/AF1QipXXXXX=s1360-w1360-h1020`

**Method 2: Inspect Element (More reliable)**
1. Right-click on photo → "Inspect" or "Inspect Element"
2. Look for `<img>` tag with `src` attribute
3. Find URL starting with `https://lh3.googleusercontent.com/`
4. Copy the full URL including the size parameters

**Method 3: Network Tab (Most reliable)**
1. Open browser DevTools (F12)
2. Go to Network tab
3. Click on a photo
4. Look for requests to `googleusercontent.com`
5. Copy the URL from the request

### Step 3: Update tampa.ts

Open `/Users/dav/Projects/Curious City/src/data/cities/tampa.ts` and replace placeholder URLs:

**Before:**
```typescript
images: [
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipNBVH5X8QJ2kYZ0kx7cqQ9xY8J5zG3L6mH0kXqE=s1360-w1360-h1020',
    alt: 'Jekyll speakeasy dimly lit interior with plush velvet seating',
    credit: 'Google Maps',
  },
]
```

**After:**
```typescript
images: [
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipM_REAL_HASH_HERE=s1360-w1360-h1020',
    alt: 'Jekyll speakeasy dimly lit interior with plush velvet seating',
    credit: 'Google Maps',
  },
]
```

### Step 4: Add Menu Images

1. Visit the establishment's website or Google Maps
2. Find menu photos (PDF menus, menu boards, printed menus)
3. Screenshot or download the menu
4. Save as `menu.jpg` in the appropriate directory:
   - Example: `public/images/establishments/bars/tampa/menus/jekyll/menu.jpg`

## Tampa Establishments Checklist

### Bars (5)
- [ ] **Jekyll** (705 S Oregon Ave) - 3 images + menu
- [ ] **The Bricks of Ybor** (1327 E 7th Ave) - 3 images + menu
- [ ] **The Independent** (5016 N Florida Ave) - 3 images + menu
- [ ] **Cigar City Cider and Mead** (1812 N 15th St) - 3 images + menu
- [ ] **Madame Fortune** (1930 E 7th Ave) - 3 images + menu

### Restaurants (5)
- [ ] **Rooster & the Till** (6500 N Florida Ave) - 4 images + menu
- [ ] **La Segunda Central Bakery** (2512 N 15th St) - 4 images + menu
- [ ] **Bern's Steak House** (1208 S Howard Ave) - 4 images + menu
- [ ] **Ulele** (1810 N Highland Ave) - 4 images + menu
- [ ] **West Tampa Sandwich Shop** (3904 N Armenia Ave) - 4 images + menu

### Coffee Shops (6)
- [ ] **Buddy Brew Coffee** (2020 W Kennedy Blvd) - 3 images + menu
- [ ] **Blind Tiger Coffee** (1901 E 7th Ave) - 4 images + menu
- [ ] **Kahwa Coffee** (1218 E Kennedy Blvd) - 4 images + menu
- [ ] **The Lab Coffee** (703 S Howard Ave) - 4 images + menu
- [ ] **Cafe Quiquiriqui** (1412 E 7th Ave) - 3 images + menu
- [ ] **Shortwave Coffee** (615 Channelside Dr) - 4 images + menu

## Image Requirements

### Quality
- **Resolution**: At least 1360x1020 (matches Google Maps format)
- **Format**: JPG preferred
- **Authentic**: Must be actual photos of the establishment (NO stock photos, NO Unsplash)

### Content Guidelines
1. **Exterior**: Show the actual building/storefront
2. **Interior**: Capture the atmosphere and unique design features
3. **Food/Drinks**: Photograph signature items mentioned in the description
4. **Authenticity**: Every image must be specific to that establishment

### Image Credits
- Google Maps photos: `credit: 'Google Maps'`
- Establishment website: `credit: '[Establishment Name]'`
- Other sources: List the actual source

## Tips for Finding Good Images

1. **Google Maps is best** - Usually has the most authentic, high-quality photos
2. **Check Instagram** - Many establishments post professional photos
   - Use the Instagram handle listed in the data (e.g., `@buddybrewcoffee`)
3. **Visit establishment websites** - Often have professional photography
4. **Yelp** - Backup option, but verify image quality

## Example: Complete Workflow for Jekyll

1. **Search Google Maps**: "Jekyll Tampa FL"
2. **Find photos showing**:
   - Hidden entrance through Sesame bagel shop
   - Dimly lit interior with velvet seating
   - Craft cocktails at the bar
3. **Copy image URLs** from Google Maps (Method 2 or 3 above)
4. **Update tampa.ts** with real URLs
5. **Get menu**: Visit jekyllhydepark.com or Instagram @jekyllhydepark
6. **Save menu** to: `public/images/establishments/bars/tampa/menus/jekyll/menu.jpg`

## Verification

After replacing images:
1. Run `npm run build` to check for errors
2. Start dev server: `npm run dev`
3. Navigate to Tampa bars/restaurants/coffee-shops pages
4. Verify all images load correctly
5. Check that carousels display properly

## Notes

- The placeholder URLs use fake hashes - they won't actually load images
- Each establishment needs authentic photos showing its unique character
- Menu images are optional but highly recommended
- Follow the same pattern as Minneapolis and Raleigh establishments

## Need Help?

- Check [minneapolis.ts](src/data/cities/minneapolis.ts) for examples of properly sourced images
- See how Raleigh establishments use Google Maps photo URLs
- The image carousel component handles arrays of images automatically
