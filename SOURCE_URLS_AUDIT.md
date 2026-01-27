# Source URLs Audit - Curious City

*Created: 2026-01-26 by Magnus*

## Problem

Many entries use `source: 'Text Name'` without actual URLs. Per THEBIGTASK.txt:
> "if a source is mentioned, it MUST have a link to verified, related information"

## Cities with Text-Only Sources

### Tampa (17 entries need URLs)
- Tampa Bay History Center (×2)
- Ybor City State Museum
- National Weather Service
- City of Tampa ordinance
- Ybor City Museum State Park
- Henry B. Plant Museum
- Tampa Bay Times (×6)
- Tampa Tribune, Creative Loafing Tampa (×4)
- Wine Spectator

### Portland (7 entries need URLs)
- The Oregonian, Portland Mercury (×3)
- The Oregonian, Willamette Week (×2)
- The Oregonian, Publisher's Weekly
- Yelp, Portland restaurant archives

### Phoenix (6 entries need URLs)
- Superstition Mountain Museum
- Phoenix History Project
- Arizona Historical Society
- Phoenix Magazine, Salt River Stories, MLB.com
- Phoenix New Times (×3)

## Already Found (in TAMPA_SOURCE_URLS.md)

### Gasparilla Pirate Festival
- https://www.tampa.gov/special-events-coordination/news-and-events/featured-events/gasparilla
- https://tampahistorical.org/items/show/92
- https://ymkg.com/the-history-of-gasparilla/
- https://tampamagazines.com/treasured-history/

### Cigar Lectors
- https://www.jcnewman.com/el-lector-the-voice-of-ybor-city/
- https://tampahistorical.org/items/show/123
- https://www.wfla.com/hidden-history/hispanic-heritage-month/the-historic-role-of-el-lector-in-educating-cigar-factory-workers/
- https://www.fox13news.com/news/after-90-years-lectors-return-to-ybor-cigar-factory-at-least-for-one-day

### Feral Chickens
- https://www.motherjones.com/environment/2018/07/chickens-ybor-city-dispute-roosters-florida/
- https://tampahistorical.org/items/show/138
- https://www.tampabay.com/news/tampa/2021/02/17/tampa-legal-advice-run-wild-run-free-you-chickens-of-ybor-city/

## Still Need Research

### Tampa
- [ ] José Martí Park / Cuban territory
- [ ] Rough Riders / Henry B. Plant Museum
- [ ] TECO Manatee Viewing Center
- [ ] Tampa Bay Lightning (NHL) / Lightning Capital
- [ ] Tampa Bay Times archive links
- [ ] Lost & Loved venue sources

### Portland
- [ ] All Oregonian/Mercury sources
- [ ] Willamette Week sources

### Phoenix
- [ ] Superstition Mountain Museum
- [ ] Phoenix History Project
- [ ] Arizona Historical Society
- [ ] Phoenix New Times links

## Recommendation

Convert all `source: 'Text'` to `sources: [{ type, title, url }]` format:

**Before:**
```typescript
source: 'Tampa Bay History Center'
```

**After:**
```typescript
sources: [
  {
    type: 'museum',
    title: 'Tampa Bay History Center',
    url: 'https://tampabayhistorycenter.org/...'
  }
]
```

This ensures all sources are clickable and verifiable.

---

## Time Estimate

- Research remaining URLs: ~2-3 hours
- Code updates to convert format: ~1 hour per city
- Total: ~10-15 hours for all cities

## Priority Order

1. **Tampa** - Most entries, Davis's home area
2. **Portland** - Popular tourist city
3. **Phoenix** - Good content, needs polish
4. Other cities as needed
