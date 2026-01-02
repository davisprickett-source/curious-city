# Anchorage Dark History Images - Quick Start

## TL;DR - What You Need to Do

1. **Download 36 images** from archival sources to:
   `/Users/dav/Projects/Curious City/public/images/dark-history/anchorage/`

2. **Copy the updated code** from `ANCHORAGE_DARK_HISTORY_UPDATED.ts` into:
   `/Users/dav/Projects/Curious City/src/data/cities/anchorage.ts` (lines 920-1094)

3. **Test it** - Run `npm run dev` and visit `/anchorage/dark-history`

---

## Fastest Path to Completion

### Step 1: Start with Public Domain USGS Images (15 minutes)
Visit: https://www.usgs.gov/media/images

Download these 6 priority earthquake images:
- `earthquake-1964-fourth-avenue.jpg`
- `turnagain-heights-landslide-1964.jpg`
- `government-hill-school-1964-earthquake.jpg`
- Alaska wilderness landscapes (3 images)

### Step 2: Alaska Digital Archives (30 minutes)
Visit: https://vilda.alaska.edu/

Search and download:
- "Anchorage Fourth Avenue 1970s" → `fourth-avenue-1970s-anchorage.jpg`
- "Trans-Alaska Pipeline Anchorage" → `trans-alaska-pipeline-workers.jpg`
- "Anchorage downtown 1980" → `downtown-anchorage-1980.jpg`
- "Ship Creek Anchorage" → `ship-creek-downtown-anchorage.jpg`
- "Eklutna Alaska" → `eklutna-alaska-area.jpg`

### Step 3: Fill Gaps with Unsplash (30 minutes)
Visit: https://unsplash.com/

Search for high-quality contextual images:
- "Alaska wilderness"
- "Alaska winter night"
- "Alaska northern lights"
- "Alaska cabin"
- "small plane Alaska"
- "historic hotel"

Download 25-30 images to fill remaining slots.

### Step 4: Rename and Organize (15 minutes)
Rename all downloaded files to match the list in `ANCHORAGE_DARK_HISTORY_COMPLETE_GUIDE.md`

### Step 5: Update Code (5 minutes)
1. Open `/Users/dav/Projects/Curious City/src/data/cities/anchorage.ts`
2. Delete lines 920-1094
3. Paste content from `ANCHORAGE_DARK_HISTORY_UPDATED.ts`
4. Save

### Step 6: Test (5 minutes)
```bash
cd "/Users/dav/Projects/Curious City"
npm run dev
```
Visit: http://localhost:3000/anchorage/dark-history

---

## Complete File List to Download

```
alaska-remote-wilderness-usgs.jpg
anchorage-aerial-view.jpg
anchorage-winter-darkness.jpg
fourth-avenue-1970s-anchorage.jpg
knik-river-wilderness.jpg
small-aircraft-alaska-wilderness.jpg
eklutna-alaska-area.jpg
alaska-cold-case-investigation.jpg
remote-alaska-landscape.jpg
tudor-road-anchorage.jpg
anchorage-correctional-facility.jpg
alaska-highway-map.jpg
fourth-avenue-night-1970s.jpg
trans-alaska-pipeline-workers.jpg
downtown-anchorage-1980.jpg
alaska-native-village-aerial.jpg
mmiw-memorial-alaska.jpg
remote-village-winter-alaska.jpg
sterling-alaska-area.jpg
alaska-cabin-remote.jpg
alaska-cold-case-files.jpg
earthquake-1964-fourth-avenue.jpg
turnagain-heights-landslide-1964.jpg
government-hill-school-1964-earthquake.jpg
historic-anchorage-hotel-exterior.jpg
historic-anchorage-hotel-interior.jpg
historic-hotel-hallway.jpg
hotel-captain-cook-exterior.jpg
hotel-captain-cook-opening-1972.jpg
hotel-captain-cook-lobby.jpg
ship-creek-downtown-anchorage.jpg
ship-creek-salmon-fishing.jpg
ship-creek-bridge-historical.jpg
anchorage-december-darkness.jpg
northern-lights-anchorage-winter.jpg
anchorage-street-winter-night.jpg
```

---

## Top 5 Archival Sources (In Order of Priority)

1. **USGS** - https://www.usgs.gov/media/images (Earthquake images - PUBLIC DOMAIN)
2. **VILDA** - https://vilda.alaska.edu/ (Historical Anchorage - FREE)
3. **Library of Congress** - https://www.loc.gov/pictures/ (Pipeline era - PUBLIC DOMAIN)
4. **NOAA** - https://www.photolib.noaa.gov/ (Alaska aerial/weather - PUBLIC DOMAIN)
5. **Unsplash** - https://unsplash.com/ (High-quality contextual - FREE)

---

## Pro Tips

- **Download larger than 1200px width** - You can always scale down
- **Save time with batch downloads** - Use browser extensions for Unsplash
- **Optimize after downloading** - Use ImageOptim or similar
- **Check file sizes** - Aim for 200-800KB per image
- **Keep a download log** - Note source URL for each image

---

## If You're Short on Time

**Minimum Viable Product (10 most important images):**
1. earthquake-1964-fourth-avenue.jpg (USGS)
2. turnagain-heights-landslide-1964.jpg (USGS)
3. fourth-avenue-1970s-anchorage.jpg (VILDA)
4. trans-alaska-pipeline-workers.jpg (Library of Congress)
5. knik-river-wilderness.jpg (USGS/Unsplash)
6. alaska-native-village-aerial.jpg (Unsplash)
7. mmiw-memorial-alaska.jpg (Search MMIW Alaska)
8. ship-creek-downtown-anchorage.jpg (USGS)
9. anchorage-winter-darkness.jpg (Unsplash)
10. northern-lights-anchorage-winter.jpg (Unsplash)

Then fill remaining 26 slots with quality Unsplash images using Alaska-related searches.

---

## Verification Command

After downloading, verify all files:

```bash
cd "/Users/dav/Projects/Curious City/public/images/dark-history/anchorage"
ls -1 *.jpg | wc -l
# Should output: 36
```

---

## Emergency Fallback

If archival sources are difficult to access, you can complete the entire project with curated Unsplash images in 1 hour:

```bash
# Use these specific Unsplash photo IDs for quality Alaska images
# (Replace PHOTO_ID with actual IDs)

cd "/Users/dav/Projects/Curious City/public/images/dark-history/anchorage"

# Alaska wilderness
curl -L "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&q=85" -o alaska-remote-wilderness-usgs.jpg

# Winter scenes
curl -L "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1600&q=85" -o anchorage-winter-darkness.jpg

# Northern lights
curl -L "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=1600&q=85" -o northern-lights-anchorage-winter.jpg

# Etc...
```

**Note:** Authentic archival images are strongly preferred, but high-quality Unsplash can work for MVP.

---

## Success Metric

✅ You're done when:
- Directory has 36 JPG files
- anchorage.ts is updated
- `npm run dev` works without errors
- All images load at `/anchorage/dark-history`

**Estimated time:** 90-120 minutes for full implementation
