# Event Data Sources & Integration Guide

A comprehensive guide to finding, sourcing, and integrating real event data for Curious City.

---

## Table of Contents

1. [Quick Start: Manual Event Entry](#quick-start-manual-event-entry)
2. [Event API Options](#event-api-options)
3. [Free/Low-Cost Solutions](#freelow-cost-solutions)
4. [Web Scraping Approaches](#web-scraping-approaches)
5. [City-Specific Resources](#city-specific-resources)
6. [Integration Strategies](#integration-strategies)
7. [Best Practices](#best-practices)

---

## Quick Start: Manual Event Entry

### Template Generator

Use the built-in template generator:

```typescript
import { generateEventTemplate } from '@/utils/eventHelpers'

// Generate a template
const template = generateEventTemplate('Winter Market', 'seasonal')
console.log(template)
```

### Manual Entry in `cities.ts`

```typescript
{
  id: 'events-this-week',
  type: 'events',
  title: 'Events This Week',
  items: [
    {
      title: 'Chicago Jazz Festival',
      description: 'Four days of free jazz performances in Millennium Park...',
      startDate: '2025-09-04T12:00:00',
      endDate: '2025-09-07T22:00:00',
      location: 'Millennium Park',
      category: 'event',
      tags: ['free', 'music', 'outdoor'],
      image: {
        src: '/images/events/jazz-fest.jpg',
        alt: 'Chicago Jazz Festival performance',
      },
    },
  ],
}
```

### Date Helper

```typescript
import { createEventDate } from '@/utils/eventHelpers'

// Create: September 4, 2025 at 12:00 PM
const startDate = createEventDate(2025, 9, 4, 12, 0)
// Returns: "2025-09-04T12:00:00"
```

---

## Event API Options

### 1. Ticketmaster Discovery API ⭐ Recommended

**Coverage:** Concerts, sports, theater, festivals
**Pricing:** Free tier available (5,000 calls/day)
**Best For:** Large-scale events with tickets

```typescript
// Example API call
const response = await fetch(
  `https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_KEY&city=Chicago&size=50`
)
```

**Pros:**
- ✅ Comprehensive event coverage
- ✅ Well-documented API
- ✅ Includes images, venues, dates
- ✅ Free tier is generous

**Cons:**
- ❌ Focuses on ticketed events
- ❌ May miss small/local events

**Resources:**
- [Discovery API Docs](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
- [Top 10 Best Events APIs](https://blog.api.rakuten.net/top-10-best-events-apis/)

---

### 2. Eventbrite API

**Coverage:** Community events, classes, local gatherings
**Pricing:** Free (1,000 calls/hour)
**Best For:** Community-driven events

```typescript
// Example: Get Chicago events
const response = await fetch(
  `https://www.eventbriteapi.com/v3/events/search/?location.address=Chicago&token=YOUR_TOKEN`
)
```

**Pros:**
- ✅ Great for local community events
- ✅ Free tier
- ✅ Easy integration

**Cons:**
- ❌ Smaller than Ticketmaster
- ❌ Rate limits

**Resources:**
- [Eventbrite API Platform](https://www.eventbrite.com/platform/api)

---

### 3. PredictHQ (Premium)

**Coverage:** 18 categories, 25,000+ cities
**Pricing:** Paid (starts ~$500/month)
**Best For:** Enterprise demand forecasting

**Features:**
- Concerts, festivals, sports, school holidays
- Demand intelligence ranking
- Unscheduled events (weather, disasters)

**Pros:**
- ✅ Most comprehensive
- ✅ AI-ranked by impact
- ✅ Global coverage

**Cons:**
- ❌ Expensive
- ❌ Overkill for small sites

**Resources:**
- [Festivals API](https://www.predicthq.com/events/festivals)
- [Concerts API](https://www.predicthq.com/events/concerts)
- [Local Events API](https://www.predicthq.com/events/local-events)

---

### 4. SeatGeek API

**Coverage:** Sports, concerts, theater
**Pricing:** Free
**Best For:** Ticketed events

**Pros:**
- ✅ Completely free
- ✅ Good sports coverage
- ✅ Simple API

**Cons:**
- ❌ Smaller event database
- ❌ Ticketed events only

---

## Free/Low-Cost Solutions

### 1. Google Events (via SerpApi)

**What it is:** Scrape Google's event listings
**Pricing:** Free tier available

```typescript
// Using SerpApi
const response = await fetch(
  `https://serpapi.com/search?engine=google_events&q=Events+in+Chicago&api_key=YOUR_KEY`
)
```

**Pros:**
- ✅ Aggregates from many sources
- ✅ Good local coverage

**Cons:**
- ❌ Requires scraping service
- ❌ Less structured data

**Resources:**
- [Google Events API - SerpApi](https://serpapi.com/google-events-api)

---

### 2. City-Specific Calendars

Many cities publish official event calendars:

**Chicago:**
- [Choose Chicago Events](https://www.choosechicago.com/events/)
- [Chicago Events Calendar](https://chicagoevents.com/upcoming-events/)
- [Time Out Chicago](https://www.timeout.com/chicago/events-calendar)

**Denver:**
- [Denver Special Events](https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Office-of-Special-Events/Event-Calendar)

**Portland:**
- Travel Portland events calendar

**Approach:**
1. Check if they offer RSS feeds
2. Look for iCal/ICS exports
3. Last resort: scrape (see below)

---

### 3. RSS/iCal Aggregation

Many event sites offer RSS or iCal feeds:

**Tools:**
- The Events Calendar (WordPress plugin)
- WP Event Aggregator

**Sources to check:**
- Local news sites (often have RSS feeds)
- Meetup.com (iCal export)
- Facebook Events (limited API)
- Google Calendar (public calendars)

---

## Web Scraping Approaches

### Open Source Projects

#### City Scrapers (Recommended for Civic Events)

**What:** Scrape public meetings and civic events
**GitHub:** [City-Bureau/city-scrapers](https://github.com/City-Bureau/city-scrapers)

```bash
# Set up for your city
pip install city-scrapers
city-scrapers init my-city
```

**Best for:** Government meetings, public hearings

---

#### Eventbrite Scraper

**GitHub:** [lorenanicole/eventbrite_scraper](https://www.scrapediary.com/best-eventbrite-scraper/)

Scrapes Eventbrite events by city and stores in database.

---

### Custom Scraping

**Framework:** [Scrapy (Python)](https://scrapy.org/)

```python
# Example: Scrape local news events
import scrapy

class EventSpider(scrapy.Spider):
    name = 'events'
    start_urls = ['https://city-news.com/events']

    def parse(self, response):
        for event in response.css('.event-item'):
            yield {
                'title': event.css('.title::text').get(),
                'date': event.css('.date::text').get(),
                'location': event.css('.location::text').get(),
            }
```

**Best Practices:**
- Always check `robots.txt`
- Respect rate limits
- Cache responses
- Handle errors gracefully

**Resources:**
- [Writing an Events Scraper - Open Civic Data](https://open-civic-data.readthedocs.io/en/latest/scrape/events.html)
- [Building an Event Aggregator](https://www.blog.datahut.co/post/building-an-event-aggregator-using-web-scraping)

---

## City-Specific Resources

### Chicago

| Source | Type | Coverage |
|--------|------|----------|
| Choose Chicago | Official | Festivals, concerts, sports |
| Time Out Chicago | Editorial | Curated events |
| Chicago Events | Aggregator | All types |
| Eventbrite Chicago | Platform | Community events |

---

### Denver

| Source | Type | Coverage |
|--------|------|----------|
| Denver Special Events | Official | Public events |
| Westword | Editorial | Arts, music, food |
| 303 Magazine | Editorial | Culture, nightlife |

---

### Portland

| Source | Type | Coverage |
|--------|------|----------|
| Travel Portland | Official | Tourism events |
| Portland Mercury | Editorial | Arts, music |
| PDX Pipeline | Editorial | Local events |

---

## Integration Strategies

### Strategy 1: Manual Curation (Current) ⭐ Easiest

**Effort:** 30 min/week per city
**Quality:** High (curated)
**Cost:** Free

**Process:**
1. Check 2-3 event sources weekly
2. Copy best events to `cities.ts`
3. Run validation: `npx tsx scripts/validate-events.ts`

**Pros:**
- Full control over quality
- No API costs
- Can add local context

**Cons:**
- Labor intensive
- Doesn't scale

---

### Strategy 2: API + Manual Curation ⭐ Recommended

**Effort:** Initial setup + 15 min/week
**Quality:** High
**Cost:** Free (Ticketmaster + Eventbrite)

**Process:**
1. Fetch 50-100 events from Ticketmaster + Eventbrite
2. Filter by category and ranking
3. Manually review and curate top 10-20
4. Add to `cities.ts` with editorial descriptions

**Implementation:**
```typescript
// scripts/fetch-events.ts
async function fetchAndCurate(city: string) {
  const [ticketmaster, eventbrite] = await Promise.all([
    fetchTicketmaster(city),
    fetchEventbrite(city),
  ])

  // Merge and deduplicate
  const allEvents = mergeEvents(ticketmaster, eventbrite)

  // Filter and rank
  const topEvents = allEvents
    .filter(e => isInteresting(e))
    .sort(byRelevance)
    .slice(0, 20)

  // Generate template for manual review
  console.log(formatForReview(topEvents))
}
```

---

### Strategy 3: Fully Automated

**Effort:** High upfront, minimal ongoing
**Quality:** Medium (needs filtering)
**Cost:** $0 - $500/month

**Process:**
1. Set up automated fetching from APIs
2. Build ML classifier to filter relevant events
3. Auto-generate descriptions
4. Manual spot-check

**Best for:** Sites with 20+ cities

---

## Best Practices

### Data Quality

✅ **DO:**
- Verify dates before publishing
- Include clear descriptions (not copy-paste from source)
- Add local context and tips
- Check for duplicates
- Run validation before build

❌ **DON'T:**
- Copy descriptions verbatim (copyright issues)
- Include events without clear dates
- List every event (curate!)

---

### Maintenance

**Weekly:**
- [ ] Check for stale events
- [ ] Add 5-10 new events per city
- [ ] Update "happening now" events

**Monthly:**
- [ ] Review top traffic events
- [ ] Update event categories if needed
- [ ] Clean up old images

**Use the validator:**
```bash
npx tsx scripts/validate-events.ts
```

---

### Legal Considerations

- **API Terms:** Read and follow API ToS
- **Scraping:** Check `robots.txt`, respect rate limits
- **Content:** Don't copy descriptions (write your own)
- **Images:** Use your own or properly licensed images
- **Attribution:** Link to source when appropriate

---

## Recommended Approach for Curious City

### Phase 1: Manual Curation (Now)
- Spend 30 min/week per city
- Focus on 3-5 cities initially
- Curate 8-12 events per city
- Quality over quantity

### Phase 2: Semi-Automated (Month 2-3)
- Set up Ticketmaster + Eventbrite APIs
- Build fetch script to get candidates
- Still manually curate, but from larger pool
- Scale to all 12 cities

### Phase 3: Automated Pipeline (Month 4+)
- Add filtering/ranking logic
- Auto-fetch weekly
- Manual review/approval workflow
- Consider PredictHQ if revenue allows

---

## Resources & Links

### APIs
- [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
- [Eventbrite API Platform](https://www.eventbrite.com/platform/api)
- [SeatGeek API](https://platform.seatgeek.com/)
- [PredictHQ](https://www.predicthq.com/)

### Tools
- [SerpApi (Google Events)](https://serpapi.com/google-events-api)
- [City Scrapers](https://github.com/City-Bureau/city-scrapers)
- [Scrapy Framework](https://scrapy.org/)

### Guides
- [Top 10 Best Events APIs](https://blog.api.rakuten.net/top-10-best-events-apis/)
- [Building an Event Aggregator](https://www.blog.datahut.co/post/building-an-event-aggregator-using-web-scraping)
- [Writing an Events Scraper](https://open-civic-data.readthedocs.io/en/latest/scrape/events.html)

---

**Next Steps:**
1. Choose your integration strategy
2. Set up API keys (if using APIs)
3. Create weekly event curation workflow
4. Run validation script before each deploy
