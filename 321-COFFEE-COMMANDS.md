# 321 Coffee - Quick Command Reference

## All Commands You Need

### Step 1: Read the Quick Start Guide
```bash
cd "/Users/dav/Projects/Curious City"
cat QUICK_START_321_COFFEE.md
```

### Step 2: Edit the Download Script (Add Your Image URLs)
```bash
nano scripts/download-321-coffee-images.sh
```

In the editor:
1. Find lines with `IMAGE_1_URL="PASTE_URL_HERE"`
2. Replace `PASTE_URL_HERE` with your actual image URLs
3. Save: `Ctrl+O`, `Enter`, `Ctrl+X`

### Step 3: Run the Download Script
```bash
./scripts/download-321-coffee-images.sh
```

### Step 4: Verify Images Downloaded
```bash
ls -lh public/images/establishments/coffee-shops/raleigh/321-coffee/
```

Should show 4 image files:
- `interior-01.jpg`
- `barista-01.jpg`
- `drinks-01.jpg`
- `community-01.jpg`

### Step 5: Open Images to Verify Quality
```bash
open public/images/establishments/coffee-shops/raleigh/321-coffee/
```

### Step 6: Edit raleigh.ts
```bash
nano src/data/cities/raleigh.ts
```

In the editor:
1. Press `Ctrl+_` then type `574` and press `Enter` to go to line 574
2. Make the changes described in `321-coffee-exact-changes.md`
3. Save: `Ctrl+O`, `Enter`, `Ctrl+X`

Or use VS Code:
```bash
code src/data/cities/raleigh.ts
```
Then press `Cmd+G`, type `574`, and hit `Enter`

### Step 7: View Your Changes
```bash
git diff src/data/cities/raleigh.ts
```

## Helpful Reference Commands

### View the Complete Guide
```bash
cat 321-coffee-completion-guide.md
```

### View the Checklist
```bash
cat 321-coffee-checklist.md
```

### View Exact Code Changes
```bash
cat 321-coffee-exact-changes.md
```

### View the Code Template
```bash
cat 321-coffee-updated-entry.ts.template
```

### View This Summary
```bash
cat 321-COFFEE-SUMMARY.md
```

## Where to Get Image URLs

### Instagram (@drink321coffee)
1. Visit: https://www.instagram.com/drink321coffee
2. Right-click on image → "Open Image in New Tab"
3. Copy URL from address bar (starts with `https://scontent-...`)

### Yelp
1. Search "321 Coffee Raleigh" on Yelp
2. Click "Photos" (25 photos available)
3. Click on a photo to enlarge
4. Right-click → "Open Image in New Tab"
5. Copy URL

### Website
1. Visit: https://www.321coffee.com
2. Look for high-quality photos
3. Right-click → "Open Image in New Tab"
4. Copy URL

## One-Liner to Check Everything
```bash
cd "/Users/dav/Projects/Curious City" && \
echo "=== Image Directory ===" && \
ls -lh public/images/establishments/coffee-shops/raleigh/321-coffee/ && \
echo -e "\n=== Guide Files ===" && \
ls -1 321-* QUICK_START_321_COFFEE.md 2>/dev/null && \
echo -e "\n=== Status: Ready to proceed ===" && \
echo "Next: Read QUICK_START_321_COFFEE.md"
```

## Files You'll Edit

1. **`scripts/download-321-coffee-images.sh`**
   - Add your 4 image URLs here
   - Run it to download images

2. **`src/data/cities/raleigh.ts`**
   - Lines 574-589
   - Change instagram handle
   - Change `image` to `images` array
   - Add `menu` object

## Files for Reference (Don't Edit)

- `QUICK_START_321_COFFEE.md` - Main guide
- `321-coffee-completion-guide.md` - Detailed guide
- `321-coffee-checklist.md` - Interactive checklist
- `321-coffee-exact-changes.md` - Exact code changes
- `321-coffee-updated-entry.ts.template` - Code template
- `321-COFFEE-SUMMARY.md` - Overview
- `321-COFFEE-COMMANDS.md` - This file

## Quick Verification

After making all changes, run:
```bash
# Check images exist
test -f public/images/establishments/coffee-shops/raleigh/321-coffee/interior-01.jpg && echo "✓ interior-01.jpg exists"
test -f public/images/establishments/coffee-shops/raleigh/321-coffee/barista-01.jpg && echo "✓ barista-01.jpg exists"
test -f public/images/establishments/coffee-shops/raleigh/321-coffee/drinks-01.jpg && echo "✓ drinks-01.jpg exists"
test -f public/images/establishments/coffee-shops/raleigh/321-coffee/community-01.jpg && echo "✓ community-01.jpg exists"

# Check raleigh.ts was modified
grep -q "drink321coffee" src/data/cities/raleigh.ts && echo "✓ Instagram handle updated"
grep -q "images: \[" src/data/cities/raleigh.ts && echo "✓ Images array exists"

echo -e "\nIf all checks passed, you're good to go!"
```

## Need Help?

Start here: **`QUICK_START_321_COFFEE.md`**

The quick start guide will walk you through everything in ~20 minutes.
