# How to Get Real Google Maps Image URLs - Step by Step

Since automated downloading isn't possible due to Google Maps' protections, here's the exact manual process. Once you do this for one establishment, it takes about 2-3 minutes per location.

## Method 1: Browser Developer Tools (Most Reliable)

### For Jekyll (Example):

1. **Open Google Maps**
   - Go to: https://www.google.com/maps/place/Jekyll/@27.9369,-82.4808,17z
   - Or search: "Jekyll Tampa FL"

2. **Click Photos Tab**
   - Click on the establishment
   - Click "Photos" (usually shows number like "264 photos")

3. **Open First Photo**
   - Click on any interior photo (dimly lit bar interior)

4. **Open DevTools**
   - Press `F12` (Windows) or `Cmd+Option+I` (Mac)
   - Click "Network" tab

5. **Reload the Image**
   - Click the next/previous arrow to switch photos
   - In Network tab, filter by "googleusercontent"
   - Look for requests to `lh3.googleusercontent.com`

6. **Copy the URL**
   - Right-click the request → Copy → Copy URL
   - Should look like: `https://lh3.googleusercontent.com/p/AF1QipO...=s1360-w1360-h1020`

7. **Test the URL**
   - Paste in new browser tab
   - If it loads, you have the correct URL!

## Method 2: Direct Image URL (Easier but less reliable)

1. **Open Google Maps** → Search establishment
2. **Click Photos** → Click a specific photo to open lightbox
3. **Right-click the image** → "Open image in new tab"
4. **Look at the URL bar** - it should contain the `lh3.googleusercontent.com` URL
5. **Add size parameters** if missing: `=s1360-w1360-h1020` at the end

## Method 3: Use This Browser Console Script

1. Open Google Maps photo view
2. Press F12 → Console tab
3. Paste this script:

```javascript
// Get all image elements in Google Maps photo viewer
const images = document.querySelectorAll('img[src*="googleusercontent"]');
images.forEach((img, i) => {
  console.log(`Image ${i + 1}:`, img.src);
});
```

4. Copy the URLs from console output

## What You Need for Each Tampa Establishment

### Bars (5):
1. **Jekyll** - Need 3 photos:
   - Interior with velvet seating
   - Bar with craft cocktails
   - A signature cocktail

2. **The Bricks of Ybor** - Need 3 photos:
   - Exterior corner on 7th Ave
   - Indoor-outdoor seating
   - Beer and sandwich

3. **The Independent** - Need 3 photos:
   - Converted gas station exterior
   - European pub interior
   - Belgian beer selection

4. **Cigar City Cider and Mead** - Need 3 photos:
   - Exterior in Ybor
   - Tasting room with tanks
   - Cider/mead flight

5. **Madame Fortune** - Need 3 photos:
   - Entrance through Roast
   - Intimate interior
   - Dessert and cocktail

### Restaurants (5):
1. **Rooster & the Till** - Need 4 photos
2. **La Segunda** - Need 4 photos
3. **Bern's** - Need 4 photos
4. **Ulele** - Need 4 photos
5. **West Tampa Sandwich** - Need 4 photos

### Coffee Shops (6):
1. **Buddy Brew** - Need 3 photos
2. **Blind Tiger** - Need 4 photos
3. **Kahwa** - Need 4 photos
4. **The Lab** - Need 4 photos
5. **Cafe Quiquiriqui** - Need 3 photos
6. **Shortwave** - Need 4 photos

## Time Estimate

- Per establishment: 3-5 minutes
- Total for all 16: About 1 hour

## Once You Have URLs

Replace them in `src/data/cities/tampa.ts`:

```typescript
// OLD (placeholder):
src: 'https://lh3.googleusercontent.com/p/AF1QipNBVH5X8QJ2kYZ0kx7cqQ9xY8J5zG3L6mH0kXqE=s1360-w1360-h1020',

// NEW (real URL you copied):
src: 'https://lh3.googleusercontent.com/p/AF1QipM_ACTUAL_HASH_FROM_GOOGLE_MAPS=s1360-w1360-h1020',
```

## Quick Links to Google Maps

**Bars:**
- [Jekyll](https://www.google.com/maps/place/705+S+Oregon+Ave,+Tampa,+FL+33606)
- [The Bricks](https://www.google.com/maps/place/1327+E+7th+Ave,+Tampa,+FL+33605)
- [The Independent](https://www.google.com/maps/place/5016+N+Florida+Ave,+Tampa,+FL+33603)
- [Cigar City Cider](https://www.google.com/maps/place/1812+N+15th+St,+Tampa,+FL+33605)
- [Madame Fortune](https://www.google.com/maps/place/1930+E+7th+Ave,+Tampa,+FL+33605)

**Restaurants:**
- [Rooster & the Till](https://www.google.com/maps/place/6500+N+Florida+Ave,+Tampa,+FL+33604)
- [La Segunda](https://www.google.com/maps/place/2512+N+15th+St,+Tampa,+FL+33605)
- [Bern's](https://www.google.com/maps/place/1208+S+Howard+Ave,+Tampa,+FL+33606)
- [Ulele](https://www.google.com/maps/place/1810+N+Highland+Ave,+Tampa,+FL+33602)
- [West Tampa Sandwich](https://www.google.com/maps/place/3904+N+Armenia+Ave,+Tampa,+FL+33607)

**Coffee Shops:**
- [Buddy Brew](https://www.google.com/maps/place/2020+W+Kennedy+Blvd,+Tampa,+FL+33606)
- [Blind Tiger](https://www.google.com/maps/place/1901+E+7th+Ave,+Tampa,+FL+33605)
- [Kahwa](https://www.google.com/maps/place/1218+E+Kennedy+Blvd,+Tampa,+FL+33602)
- [The Lab Coffee](https://www.google.com/maps/place/703+S+Howard+Ave,+Tampa,+FL+33606)
- [Cafe Quiquiriqui](https://www.google.com/maps/place/1412+E+7th+Ave,+Tampa,+FL+33605)
- [Shortwave](https://www.google.com/maps/place/615+Channelside+Dr,+Tampa,+FL+33602)

## Pro Tips

1. **Look for user photos** not business photos - more authentic
2. **Choose high-resolution** images (avoid blurry ones)
3. **Verify the =s1360-w1360-h1020** size parameter is at the end
4. **Test each URL** in browser before adding to code
5. **Save URLs to a text file** as you go so you don't lose them

## Need Help?

If you get stuck, you can:
1. Share one URL you found and I'll verify the format is correct
2. Ask about specific establishments
3. I can help troubleshoot if URLs don't work
