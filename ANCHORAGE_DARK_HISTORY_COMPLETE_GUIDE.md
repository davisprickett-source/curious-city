# Anchorage Dark History - Complete Implementation Guide

## Executive Summary

This guide provides everything needed to implement authentic images for all 12 dark history entries in Anchorage, Alaska. Due to network limitations, images must be downloaded manually, but all sources, paths, and code are ready.

---

## Files Created

1. **ANCHORAGE_DARK_HISTORY_IMAGE_SOURCES.md** - Detailed image sourcing for all 12 entries
2. **ANCHORAGE_DARK_HISTORY_UPDATED.ts** - Complete TypeScript code ready to paste
3. **ANCHORAGE_ARCHIVAL_SOURCES.md** - Direct links to archival sources
4. **scripts/download-anchorage-dark-history-images.sh** - Download script (reference)

---

## All 12 Dark History Entries Identified

### Entry 0: America's Serial Killer Capital (Overview)
- **Year:** Overview
- **Category:** mystery
- **Images Needed:** 3 (Alaska wilderness, Anchorage aerial, winter darkness)

### Entry 1: Robert Hansen - The Butcher Baker
- **Year:** 1971–1983
- **Category:** crime
- **Images Needed:** 3 (Fourth Avenue 1970s, Knik River, small aircraft)

### Entry 2: Hansen's Unidentified Victims
- **Year:** 1979–1980s
- **Category:** cold-case
- **Images Needed:** 3 (Eklutna area, cold case investigation, remote landscape)

### Entry 3: Israel Keyes - The Meticulous Monster
- **Year:** 2001–2012
- **Category:** crime
- **Images Needed:** 3 (Tudor Road, Anchorage jail, Alaska highway)

### Entry 4: Fourth Avenue - The Hunting Ground
- **Year:** 1970s–1980s
- **Category:** forgotten
- **Images Needed:** 3 (Fourth Avenue night, pipeline workers, downtown 1980)

### Entry 5: Missing and Murdered Indigenous Women
- **Year:** Ongoing
- **Category:** unsolved
- **Images Needed:** 3 (Native village aerial, MMIW memorial, remote village winter)

### Entry 6: The Fandell Siblings
- **Year:** 1978
- **Category:** cold-case
- **Images Needed:** 3 (Sterling area, Alaska cabin, cold case files)

### Entry 7: Good Friday Earthquake
- **Year:** 1964
- **Category:** disaster
- **Images Needed:** 3 (Fourth Avenue damage, Turnagain Heights, Government Hill school)

### Entry 8: Historic Anchorage Hotel Ghosts
- **Year:** Ongoing
- **Category:** haunting
- **Images Needed:** 3 (Hotel exterior, historic interior, third floor hallway)

### Entry 9: Hotel Captain Cook - Woman in White
- **Year:** 1972–present
- **Category:** haunting
- **Images Needed:** 3 (Hotel exterior, 1972 opening, lobby)

### Entry 10: The Spirit of Ship Creek
- **Year:** 1987–present
- **Category:** haunting
- **Images Needed:** 3 (Ship Creek downtown, salmon fishing, historical bridge)

### Entry 11: The Darkness That Lives Here
- **Year:** Ongoing
- **Category:** macabre
- **Images Needed:** 3 (December darkness, northern lights, winter night street)

---

## Total Images Required: 36

---

## Implementation Steps

### Step 1: Create Directory Structure
```bash
mkdir -p "/Users/dav/Projects/Curious City/public/images/dark-history/anchorage"
```

### Step 2: Download Images from Archival Sources

**Priority Order:**
1. **USGS** (https://www.usgs.gov/media/images) - Earthquake, wilderness, landscapes
2. **Alaska Digital Archives - VILDA** (https://vilda.alaska.edu/) - Historical Anchorage photos
3. **Library of Congress** (https://www.loc.gov/pictures/) - Pipeline era, workers
4. **NOAA Photo Library** (https://www.photolib.noaa.gov/) - Weather, coastal, aerial
5. **Anchorage Museum** (Contact: collections@anchoragemuseum.org) - Local history

### Step 3: Download Specific Priority Images

**Must-Have Authentic Images:**

1. **Good Friday Earthquake (Entry 7)** - USGS has excellent public domain images:
   - Search: https://www.usgs.gov/media/images
   - Keywords: "1964 Alaska earthquake Anchorage"
   - Download: Fourth Avenue collapse, Turnagain Heights landslide

2. **Fourth Avenue 1970s (Entries 1, 4)** - Alaska Digital Archives:
   - Visit: https://vilda.alaska.edu/
   - Search: "Anchorage Fourth Avenue 1970s"
   - Look for: Pipeline boom era, nightlife, street scenes

3. **Trans-Alaska Pipeline (Entry 4)** - Library of Congress:
   - Visit: https://www.loc.gov/pictures/
   - Search: "Trans-Alaska Pipeline workers"
   - Public domain government photos

4. **Alaska Wilderness (Entries 0, 1, 2)** - USGS:
   - Search: "Alaska wilderness" "Knik River" "Eklutna"
   - All USGS images are public domain

5. **Ship Creek (Entry 10)** - Alaska Dept Fish & Game or USGS:
   - Search: "Ship Creek Anchorage"
   - Both salmon fishing and historical views

### Step 4: Fallback to High-Quality Contextual Images

For images not available from archives, use Unsplash:

```bash
# Example Unsplash downloads (already in download script)
curl -L "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&q=90" -o anchorage-aerial-view.jpg
```

**Unsplash Search Terms:**
- "Alaska wilderness remote"
- "Alaska winter darkness"
- "Alaska cabin snow"
- "small airplane Alaska"
- "Alaska northern lights"
- "historic hotel exterior"
- "Alaska river salmon"

### Step 5: Optimize Images

```bash
# If you have ImageMagick installed
cd "/Users/dav/Projects/Curious City/public/images/dark-history/anchorage"

# Resize to max 1600px width, optimize quality
for img in *.jpg; do
  convert "$img" -resize 1600x\> -quality 85 "optimized-$img"
  mv "optimized-$img" "$img"
done
```

### Step 6: Update anchorage.ts

Replace lines 920-1094 in `/Users/dav/Projects/Curious City/src/data/cities/anchorage.ts` with the content from `ANCHORAGE_DARK_HISTORY_UPDATED.ts`

**Quick method:**
1. Open anchorage.ts
2. Find line 920 (the dark-history section)
3. Delete lines 920-1094
4. Paste the content from ANCHORAGE_DARK_HISTORY_UPDATED.ts

### Step 7: Verify All Images Exist

```bash
cd "/Users/dav/Projects/Curious City"

# Check if all referenced images exist
grep -o "'/images/dark-history/anchorage/[^']*'" ANCHORAGE_DARK_HISTORY_UPDATED.ts | \
  sed "s/'//g" | \
  while read path; do
    if [ ! -f "public$path" ]; then
      echo "MISSING: public$path"
    fi
  done
```

---

## Image File Naming Convention

All images follow this pattern: `[subject]-[descriptor]-[source].jpg`

**Examples:**
- `earthquake-1964-fourth-avenue.jpg`
- `fourth-avenue-1970s-anchorage.jpg`
- `knik-river-wilderness.jpg`
- `hotel-captain-cook-exterior.jpg`

---

## Complete File List (36 images)

```
/Users/dav/Projects/Curious City/public/images/dark-history/anchorage/

Entry 0:
  - alaska-remote-wilderness-usgs.jpg
  - anchorage-aerial-view.jpg
  - anchorage-winter-darkness.jpg

Entry 1:
  - fourth-avenue-1970s-anchorage.jpg
  - knik-river-wilderness.jpg
  - small-aircraft-alaska-wilderness.jpg

Entry 2:
  - eklutna-alaska-area.jpg
  - alaska-cold-case-investigation.jpg
  - remote-alaska-landscape.jpg

Entry 3:
  - tudor-road-anchorage.jpg
  - anchorage-correctional-facility.jpg
  - alaska-highway-map.jpg

Entry 4:
  - fourth-avenue-night-1970s.jpg
  - trans-alaska-pipeline-workers.jpg
  - downtown-anchorage-1980.jpg

Entry 5:
  - alaska-native-village-aerial.jpg
  - mmiw-memorial-alaska.jpg
  - remote-village-winter-alaska.jpg

Entry 6:
  - sterling-alaska-area.jpg
  - alaska-cabin-remote.jpg
  - alaska-cold-case-files.jpg

Entry 7:
  - earthquake-1964-fourth-avenue.jpg
  - turnagain-heights-landslide-1964.jpg
  - government-hill-school-1964-earthquake.jpg

Entry 8:
  - historic-anchorage-hotel-exterior.jpg
  - historic-anchorage-hotel-interior.jpg
  - historic-hotel-hallway.jpg

Entry 9:
  - hotel-captain-cook-exterior.jpg
  - hotel-captain-cook-opening-1972.jpg
  - hotel-captain-cook-lobby.jpg

Entry 10:
  - ship-creek-downtown-anchorage.jpg
  - ship-creek-salmon-fishing.jpg
  - ship-creek-bridge-historical.jpg

Entry 11:
  - anchorage-december-darkness.jpg
  - northern-lights-anchorage-winter.jpg
  - anchorage-street-winter-night.jpg
```

---

## Quality Checklist

Before finalizing, verify:

- [ ] All 36 images downloaded
- [ ] Images are minimum 1200px width
- [ ] File sizes are reasonable (200-800KB each)
- [ ] Credits are accurate
- [ ] Public domain images properly attributed
- [ ] Museum/archive permissions obtained where needed
- [ ] Images are authentic to the subject matter
- [ ] anchorage.ts updated with correct paths
- [ ] No broken image links
- [ ] Alt text is descriptive and accessible

---

## Attribution Requirements

### Public Domain (No Permission Needed):
- U.S. Geological Survey (Public Domain)
- NOAA (Public Domain)
- Library of Congress (verify license)
- National Archives (verify license)

### Permission Required:
- Anchorage Museum - Email: collections@anchoragemuseum.org
- Alaska State Archives - Email: archives@alaska.gov
- Hotel archives - Contact hotels directly
- News archives - Contact newspaper

### Attribution Format in Code:
```typescript
{
  src: '/images/dark-history/anchorage/filename.jpg',
  alt: 'Descriptive alt text for accessibility',
  credit: 'Source Name (License if applicable)',
}
```

---

## Top Priority Images to Source First

**These 10 images are most important for authenticity:**

1. **earthquake-1964-fourth-avenue.jpg** - USGS
2. **turnagain-heights-landslide-1964.jpg** - USGS
3. **fourth-avenue-1970s-anchorage.jpg** - VILDA/Anchorage Museum
4. **trans-alaska-pipeline-workers.jpg** - Library of Congress
5. **knik-river-wilderness.jpg** - USGS/Alaska Dept Fish & Game
6. **downtown-anchorage-1980.jpg** - Alaska State Archives
7. **ship-creek-downtown-anchorage.jpg** - USGS
8. **alaska-native-village-aerial.jpg** - Bureau of Indian Affairs
9. **mmiw-memorial-alaska.jpg** - Alaska Native Women's Resource Center
10. **historic-anchorage-hotel-exterior.jpg** - Contemporary photo or VILDA

---

## Contact List for Image Permissions

### Anchorage Museum
- **Email:** collections@anchoragemuseum.org
- **Phone:** (907) 929-9200
- **URL:** https://www.anchoragemuseum.org/

### Alaska State Archives
- **Email:** archives@alaska.gov
- **Phone:** (907) 465-2270
- **URL:** http://archives.alaska.gov/

### Alaska Digital Archives (VILDA)
- **Email:** library@alaska.edu
- **URL:** https://vilda.alaska.edu/

### Historic Anchorage Hotel
- **Address:** 330 E St, Anchorage, AK 99501
- **Phone:** (907) 272-4553
- **Request:** Historical photos for educational use

### Hotel Captain Cook
- **Address:** 939 W 5th Ave, Anchorage, AK 99501
- **Phone:** (907) 276-6000
- **Request:** 1972 opening photos

### Alaska Native Women's Resource Center
- **URL:** https://www.aknwrc.org/
- **Email:** info@aknwrc.org
- **Request:** MMIW awareness imagery

---

## Testing the Implementation

After updating anchorage.ts:

```bash
# Start the development server
cd "/Users/dav/Projects/Curious City"
npm run dev

# Navigate to:
# http://localhost:3000/anchorage/dark-history
```

Check:
1. All images load correctly
2. No broken image links
3. Images are appropriately sized
4. Credits display correctly
5. Alt text is present

---

## Troubleshooting

### If images don't load:
1. Verify file exists in `/public/images/dark-history/anchorage/`
2. Check filename matches exactly (case-sensitive)
3. Ensure path starts with `/images/` not `/public/images/`
4. Clear Next.js cache: `rm -rf .next`

### If images are too large:
```bash
# Install imagemagick if needed: brew install imagemagick
cd "/Users/dav/Projects/Curious City/public/images/dark-history/anchorage"

# Optimize all images
for img in *.jpg; do
  convert "$img" -quality 80 -resize 1600x\> "$img"
done
```

---

## Final Notes

1. **Authenticity is key** - Always prefer archival images over stock photos
2. **Public domain first** - Start with USGS, NOAA, LOC before seeking permissions
3. **Document sources** - Keep a spreadsheet of where each image came from
4. **Respect cultural sensitivity** - Especially for MMIW and Native community images
5. **Get permissions** - Museums and archives may require formal requests
6. **Credit accurately** - Proper attribution protects you legally and honors sources

---

## Success Criteria

✅ All 12 dark history entries have 2-3 authentic images each
✅ Images sourced from credible archival sources
✅ Proper credits and attributions documented
✅ anchorage.ts updated with local image paths
✅ All images optimized for web
✅ No copyright violations
✅ Accessibility alt text provided
✅ Images enhance the storytelling authentically

---

## Comparison to Fargo Template

The Fargo implementation shows:
- 2-3 images per entry
- Mix of archival and contextual images
- Proper credits to sources
- Public domain when possible
- Descriptive alt text
- Local file paths

Anchorage follows the same pattern with Alaska-specific authentic sources.

---

## Ready to Implement

All documentation, code, and sourcing guides are complete. The implementation is ready when images are downloaded and placed in the correct directory.

**Estimated time to complete:** 3-5 hours
- 2-3 hours: Downloading from archival sources
- 30 minutes: Optimization
- 30 minutes: Code update and testing
- 30 minutes: Verification

Good luck! The dark history of Anchorage deserves authentic visual storytelling.
