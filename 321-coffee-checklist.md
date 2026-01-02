# 321 Coffee Completion Checklist

## Pre-Work Setup ✓
- [x] Directory created: `/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/321-coffee/`
- [x] Download script created: `scripts/download-321-coffee-images.sh`
- [x] Guide document created: `321-coffee-completion-guide.md`
- [x] Template created: `321-coffee-updated-entry.ts.template`

## Step 1: Research Menu Information
- [ ] Visit https://www.321coffee.com
- [ ] Find menu/ordering page
- [ ] Document all espresso drinks with prices
- [ ] Document all coffee & tea items with prices
- [ ] Document all specialty drinks (if any)
- [ ] Document all food items with prices
- [ ] Note any special descriptions or signature items
- [ ] Copy menu URL (might be /menu, /order, or embedded)

**Menu Research Notes:**
```
Write down items and prices here as you find them:

ESPRESSO DRINKS:
-
-

COFFEE & TEA:
-
-

FOOD:
-
-
```

## Step 2: Find and Download Images

### Image Source 1: Instagram (@drink321coffee)
- [ ] Visit https://www.instagram.com/drink321coffee
- [ ] Find image showing: Employees/community atmosphere
  - Right-click → "Open Image in New Tab"
  - URL: ___________________________________
- [ ] Find image showing: Interior/seating
  - Right-click → "Open Image in New Tab"
  - URL: ___________________________________

### Image Source 2: Yelp
- [ ] Search "321 Coffee Raleigh" on Yelp
- [ ] Click "Photos" section (25 photos available)
- [ ] Find image showing: Coffee drinks/latte art
  - Right-click → "Open Image in New Tab"
  - URL: ___________________________________
- [ ] Find image showing: Barista working/counter area
  - Right-click → "Open Image in New Tab"
  - URL: ___________________________________

### Image Source 3: Official Website
- [ ] Visit https://www.321coffee.com
- [ ] Look for high-quality images in About, Gallery, or homepage
- [ ] Note any particularly good images showing the mission

### Download Images
- [ ] Edit `scripts/download-321-coffee-images.sh`
- [ ] Paste the 4 image URLs into the script
- [ ] Run: `./scripts/download-321-coffee-images.sh`
- [ ] Verify downloads: `open "public/images/establishments/coffee-shops/raleigh/321-coffee"`
- [ ] Confirm all 4 images are high quality and appropriate

**Image URLs:**
```
IMAGE 1 (interior/employees):
IMAGE 2 (barista):
IMAGE 3 (drinks):
IMAGE 4 (community):
```

## Step 3: Update raleigh.ts

- [ ] Open `/Users/dav/Projects/Curious City/src/data/cities/raleigh.ts`
- [ ] Navigate to line 530 (321 Coffee entry)
- [ ] Read the template: `321-coffee-updated-entry.ts.template`
- [ ] Update the entry:
  - [ ] Change `instagram: '@321coffee'` to `instagram: '@drink321coffee'`
  - [ ] Replace `image: {...}` with `images: [...]` array (4 images)
  - [ ] Add `menu: {...}` object with all categories and items
  - [ ] Fill in all prices from your menu research
  - [ ] Add descriptive alt text for each image
  - [ ] Update `menuUrl` if different
  - [ ] Add helpful notes about beans, mission, etc.

## Step 4: Verification

- [ ] All 4 image files exist in correct directory
- [ ] Image paths in code match actual filenames exactly
- [ ] All menu items have prices (no "$X.XX" placeholders)
- [ ] Instagram handle is `@drink321coffee` (NOT @321coffee)
- [ ] Menu lastUpdated is "December 2025"
- [ ] Alt text describes what's actually in each image
- [ ] Format matches Jubala Coffee and Bida Manda examples
- [ ] No TypeScript syntax errors

## Step 5: Testing (Optional)

- [ ] Run TypeScript compiler to check for errors
- [ ] View the coffee shops page locally if possible
- [ ] Verify images load correctly
- [ ] Check that menu displays properly

---

## Quick Reference

**Current entry location:** Line 530-545 in `raleigh.ts`

**Example entries to reference:**
- Jubala Coffee: Lines 474-527 (detailed menu)
- Bida Manda: Lines 658-731 (images array format)
- Morning Times: Lines 597-647 (food menu)

**Files created for this task:**
- `/Users/dav/Projects/Curious City/321-coffee-completion-guide.md`
- `/Users/dav/Projects/Curious City/321-coffee-checklist.md` (this file)
- `/Users/dav/Projects/Curious City/321-coffee-updated-entry.ts.template`
- `/Users/dav/Projects/Curious City/scripts/download-321-coffee-images.sh`

**Directory created:**
- `/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/321-coffee/`
