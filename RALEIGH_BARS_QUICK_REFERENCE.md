# Raleigh Bars - Quick Reference

## What Was Completed

All 4 Raleigh bars now have:
- ✅ Images arrays (3 images each, 12 total)
- ✅ Menu data with categories and pricing
- ✅ Website and social media links
- ✅ Directory structure created
- ✅ Download instructions in README files

---

## Download Images Now

### Step 1: The Borough
```bash
cd /Users/dav/Projects/Curious\ City/public/images/establishments/bars/raleigh/the-borough
```
Download 3 images:
- `interior-pool-01.jpg` - Google Maps: "The Borough Raleigh" (pool table shot)
- `neon-bar-01.jpg` - Instagram @theboroughraleigh (neon signs)
- `exterior-01.jpg` - Google Street View (317 W Morgan St)

### Step 2: Watts & Ward
```bash
cd /Users/dav/Projects/Curious\ City/public/images/establishments/bars/raleigh/watts-and-ward
```
Download 3 images:
- `interior-dark-01.jpg` - Google Maps: "Watts & Ward Raleigh" (dark interior)
- `cocktails-01.jpg` - Instagram @wattsandward (craft cocktails)
- `entrance-01.jpg` - Instagram or Google Maps (entrance)

### Step 3: Ruby Deluxe
```bash
cd /Users/dav/Projects/Curious\ City/public/images/establishments/bars/raleigh/ruby-deluxe
```
Download 3 images:
- `drag-show-01.jpg` - Facebook: RubyDeluxeRaleigh (drag show, wide shot)
- `interior-lights-01.jpg` - Google Maps (colorful interior)
- `dance-floor-01.jpg` - Instagram @rubydeluxeraleigh (dance floor)

### Step 4: Architect Bar
```bash
cd /Users/dav/Projects/Curious\ City/public/images/establishments/bars/raleigh/architect-bar
```
Download 3 images:
- `exterior-bungalow-01.jpg` - Google Street View (108 S Person St)
- `cocktails-seasonal-01.jpg` - Instagram @architectbarraleigh
- `interior-cozy-01.jpg` - Google Maps (cozy interior)

---

## Image Sources

### Google Maps
1. Search business name + address
2. Click "Photos" tab
3. Right-click user photos (not Google's photos)
4. Save as exact filename

### Instagram
1. Search handle (e.g., @theboroughraleigh)
2. Find appropriate post
3. Use Instagram downloader or screenshot
4. Crop and resize to 1200px+ width

### Yelp
1. Search business name
2. Browse photo gallery
3. Right-click user photos
4. Save as exact filename

### Google Street View
1. Enter address
2. Position view of exterior
3. Use screenshot tool
4. Crop to building

---

## After Downloading

1. Verify all 12 files exist:
   ```bash
   ls -la /Users/dav/Projects/Curious\ City/public/images/establishments/bars/raleigh/*/
   ```

2. Check file sizes (should be under 500KB each)

3. Test in the app to ensure images load

---

## File Locations

**Data file**: `/Users/dav/Projects/Curious City/src/data/cities/raleigh.ts`

**Image directories**:
- `/Users/dav/Projects/Curious City/public/images/establishments/bars/raleigh/the-borough/`
- `/Users/dav/Projects/Curious City/public/images/establishments/bars/raleigh/watts-and-ward/`
- `/Users/dav/Projects/Curious City/public/images/establishments/bars/raleigh/ruby-deluxe/`
- `/Users/dav/Projects/Curious City/public/images/establishments/bars/raleigh/architect-bar/`

**Documentation**:
- `RALEIGH_BAR_IMAGES_GUIDE.md` - Detailed image sourcing
- `RALEIGH_BARS_COMPLETION_SUMMARY.md` - Complete project summary
- `RALEIGH_BARS_QUICK_REFERENCE.md` - This file

---

## Priority

1. The Borough (easiest - dive bar has lots of photos)
2. Architect Bar (easy - exterior on Street View)
3. Watts & Ward (medium - fewer public photos)
4. Ruby Deluxe (medium - privacy considerations for drag photos)
