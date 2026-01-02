# Heirloom Brewshop Image Download Guide

## Directory Created
`/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/heirloom-brewshop/`

## Images Needed (4 images)

The raleigh.ts file has been updated with the following image references. You need to download these images:

### 1. Interior Photo
**Filename:** `interior-01.jpg`
**Full Path:** `/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/heirloom-brewshop/interior-01.jpg`
**What to look for:**
- Minimalist Asian-inspired interior design
- Natural light coming through windows
- Clean, modern aesthetic
- Seating area or counter visible
- Look for neutral tones, wood elements

**Sources to check:**
- Yelp: https://www.yelp.com/biz/heirloom-brewshop-raleigh (486 photos available)
- Instagram: @heirloombrewshop
- Google Maps photos
- Official website: https://heirloombrewshop.com

### 2. House-Made Syrups Photo
**Filename:** `syrups-01.jpg`
**Full Path:** `/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/heirloom-brewshop/syrups-01.jpg`
**What to look for:**
- Bottles of house-made syrups on display
- Look for labeled bottles with:
  - Ginger Rosewater
  - Yuzu
  - Brown Sugar Five Spice
  - Honey Lavender
- Close-up of syrup bottles on shelf or counter
- Should show the unique, artisanal nature of their syrups

**Sources to check:**
- Instagram @heirloombrewshop (search for posts about their syrups)
- Yelp photos (filter for "drinks" or "menu")
- Google reviews with photos

### 3. Specialty Latte Photo
**Filename:** `latte-01.jpg`
**Full Path:** `/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/heirloom-brewshop/latte-01.jpg`
**What to look for:**
- Beautiful latte art
- Preferably one made with house syrup
- High-quality presentation
- Good lighting showing drink details
- Cup with latte on table or being held

**Sources to check:**
- Yelp photos (filter by "drinks")
- Instagram @heirloombrewshop
- Google Maps reviews with drink photos

### 4. Exterior/Location Photo
**Filename:** `exterior-01.jpg`
**Full Path:** `/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/heirloom-brewshop/exterior-01.jpg`
**What to look for:**
- Storefront on Fayetteville Street
- Signage visible
- Downtown Raleigh context
- Entrance/facade of the building
- Street view showing location (219 Fayetteville St)

**Sources to check:**
- Google Street View
- Google Maps photos
- Yelp exterior photos
- Instagram location tag

## Download Instructions

### Using Yelp
1. Go to https://www.yelp.com/biz/heirloom-brewshop-raleigh
2. Click on the Photos section (486 photos available)
3. Filter by:
   - "Inside" for interior shots
   - "Drink" for latte/syrup photos
   - "Outside" for exterior
4. Right-click on high-resolution images and "Save Image As..."
5. Save to the appropriate path with the correct filename

### Using Instagram
1. Go to https://instagram.com/heirloombrewshop
2. Browse posts for relevant photos
3. Use an Instagram downloader tool or screenshot (ensure high quality)
4. Save with the appropriate filename

### Using Official Website
1. Visit https://heirloombrewshop.com
2. Look for gallery or about sections
3. Right-click and save high-quality images

### Using curl (if you have direct image URLs)
```bash
# Example:
curl -o "/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/heirloom-brewshop/interior-01.jpg" "DIRECT_IMAGE_URL"
```

## Image Requirements
- **Format:** JPG or PNG (prefer JPG)
- **Quality:** High resolution (at least 1200px wide)
- **Aspect Ratio:** Landscape or square preferred
- **File Size:** Under 2MB (optimize if needed)
- **Copyright:** Use images from official sources or with proper licensing

## After Downloading

Once all 4 images are downloaded, verify they display correctly:

```bash
ls -lh "/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/heirloom-brewshop/"
```

Expected output:
```
exterior-01.jpg
interior-01.jpg
latte-01.jpg
syrups-01.jpg
```

## What Has Been Completed

1. Created directory structure for images
2. Updated `/Users/dav/Projects/Curious City/src/data/cities/raleigh.ts` with:
   - `images` array (4 images with proper paths and alt text)
   - `menu` object with 4 categories:
     - Espresso Drinks (6 items)
     - House Syrup Lattes (4 items featuring Ginger Rosewater, Yuzu, Brown Sugar Five Spice, Honey Lavender)
     - Coffee & Tea (6 items including Little Waves and Counter Culture coffee)
     - Food (6 items with Asian-inspired cuisine)

## Menu Highlights in Data

The menu structure includes:
- **Little Waves and Counter Culture** coffee offerings (as mentioned in original data)
- **House-made syrups**: Ginger Rosewater, Yuzu, Brown Sugar Five Spice (from original data), plus Honey Lavender
- **Asian-inspired food**: Bahn Mi, Rice Bowls, Spring Rolls, Onigiri, Breakfast Bao
- **Traditional coffee drinks**: Full espresso bar menu
- **Tea options**: Matcha, Chai, Loose Leaf

All pricing is estimated based on typical Triangle-area coffee shop pricing ($$ category).
