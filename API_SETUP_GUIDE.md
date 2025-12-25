# API Integration Setup Guide

Complete guide to setting up Ticketmaster and Eventbrite API integration for automatic event fetching.

---

## Quick Start (5 Minutes)

### Step 1: Get API Keys

**Ticketmaster (Free):**
1. Go to https://developer.ticketmaster.com/
2. Click "Get Your API Key"
3. Sign up for free account
4. Create an app
5. Copy your API key (looks like: `7elxis6fAfZ8GfzXb55yZy8yLjnKDq4v`)

**Eventbrite (Free):**
1. Go to https://www.eventbrite.com/platform/api
2. Sign in to your Eventbrite account
3. Click "Create Token"
4. Copy your private token (looks like: `VYNQ5TY6KB6QNEYTBTYP`)

---

### Step 2: Create `.env` File

```bash
# In project root
cp .env.example .env
```

Edit `.env`:
```bash
# Replace with your actual keys
TICKETMASTER_API_KEY=7elxis6fAfZ8GfzXb55yZy8yLjnKDq4v
EVENTBRITE_API_TOKEN=VYNQ5TY6KB6QNEYTBTYP
```

**Important:** `.env` is in `.gitignore` - never commit API keys!

---

### Step 3: Install Dependencies

```bash
npm install dotenv
```

---

### Step 4: Fetch Events

```bash
# Fetch for a specific city
npx tsx scripts/fetch-events.ts chicago
npx tsx scripts/fetch-events.ts denver
npx tsx scripts/fetch-events.ts portland
```

**Output:**
- Shows top 30 events with details
- Generates code template for top 10
- Ready to copy into `cities.ts`

---

## How It Works

### 1. API Clients Fetch Events

```
Ticketmaster API     Eventbrite API
       ↓                   ↓
   50 events          50 events
       ↓                   ↓
   Normalized         Normalized
       └─────────┬─────────┘
                 ↓
          Merged (100 events)
                 ↓
          Deduplicated (~85 events)
                 ↓
          Filtered by relevance
                 ↓
          Top 30 events
                 ↓
     Output for review
```

### 2. Relevance Scoring

Events are automatically scored 0-100:

| Factor | Points |
|--------|--------|
| Starts within 7 days | +20 |
| Starts within 14 days | +10 |
| Free event | +10-15 |
| Music/Arts event | +10 |
| Has image | +5 |
| Public/listed | +10 |

**Base score:** 50 points

---

### 3. Deduplication

Events are considered duplicates if:
- Same title (85%+ similar) AND same date
- OR exact title AND same venue

Keeps the event with the higher relevance score.

---

## Usage Examples

### Fetch Events for One City

```bash
npx tsx scripts/fetch-events.ts chicago
```

**Output:**
```
🔍 Fetching events for Chicago...

📡 Fetching from Ticketmaster...
   ✅ Found 47 events from Ticketmaster

📡 Fetching from Eventbrite...
   ✅ Found 38 events from Eventbrite

🔄 Merging and deduplicating...

═══════════════════════════════════════════════════════════
📋 TOP EVENTS FOR CHICAGO
═══════════════════════════════════════════════════════════
Found 30 events
════════════════════════════════════════════════════════════

1. Chicago Bulls vs. LA Lakers
   📅 Dec 26, 2025, 7:00 PM
   📍 United Center, Chicago
   ⭐ Relevance: 75/100
   🏷️  Tags: sports, nba, basketball
   💰 $45-$250
   🔗 https://ticketmaster.com/event/...
   📝 Catch the Bulls take on the Lakers in this exciting matchup...

[... more events ...]

═══════════════════════════════════════════════════════════
📝 CODE TEMPLATE (Top 10 events)
═══════════════════════════════════════════════════════════

Copy this into src/data/cities.ts:

```typescript
{
  id: 'events-this-week',
  type: 'events',
  title: 'Events This Week',
  items: [
    {
      title: 'Chicago Bulls vs. LA Lakers',
      description: 'Catch the Bulls take on the Lakers...',
      startDate: '2025-12-26T19:00:00',
      endDate: '2025-12-26T22:00:00',
      location: 'United Center, Chicago',
      category: 'event',
      tags: ['sports'],
      href: 'https://ticketmaster.com/event/...',
    },
    // ... more events
  ],
},
```
```

---

### Fetch for Multiple Cities

```bash
# Fetch for top 4 cities
for city in chicago denver portland minneapolis; do
  npx tsx scripts/fetch-events.ts $city > output/$city-events.txt
done
```

---

## City Configuration

### Available Cities

All 12 cities are pre-configured in `src/lib/city-configs.ts`:

- `chicago` - Chicago, IL
- `denver` - Denver, CO
- `portland` - Portland, OR
- `minneapolis` - Minneapolis, MN
- `phoenix` - Phoenix, AZ
- `dallas` - Dallas, TX
- `salt-lake-city` - Salt Lake City, UT
- `raleigh` - Raleigh, NC
- `anchorage` - Anchorage, AK
- `colorado-springs` - Colorado Springs, CO
- `fargo` - Fargo, ND
- `tampa` - Tampa, FL

### Adding a New City

Edit `src/lib/city-configs.ts`:

```typescript
export const cityConfigs: Record<string, CityConfig> = {
  // ... existing cities ...
  'new-city': {
    slug: 'new-city',
    name: 'New City',
    eventbriteCity: 'New City, STATE',
    latitude: 40.7128,
    longitude: -74.0060,
  },
}
```

---

## Curation Workflow

### Weekly Workflow (15 minutes)

**Monday Morning:**

1. **Fetch events:**
   ```bash
   npx tsx scripts/fetch-events.ts chicago
   ```

2. **Review output:**
   - Check top 30 events
   - Note which ones are interesting
   - Identify any to skip

3. **Copy code template:**
   - Code is generated automatically
   - Copy into `cities.ts`

4. **Edit descriptions:**
   - Make them more engaging
   - Add local context
   - Keep to 2-3 sentences

5. **Download images (optional):**
   - Save to `/public/images/events/`
   - Update image paths

6. **Validate:**
   ```bash
   npx tsx scripts/validate-events.ts
   ```

7. **Test locally:**
   ```bash
   npm run dev
   # Visit /chicago/this-week
   ```

8. **Commit and deploy**

---

## API Limits & Best Practices

### Ticketmaster

**Free Tier:**
- 5,000 calls per day
- Rate limit: 5 requests/second

**Best Practices:**
- Fetch once per day per city
- Cache results
- Don't fetch during peak hours

---

### Eventbrite

**Free Tier:**
- 1,000 calls per hour
- No daily limit

**Best Practices:**
- Spread out requests
- One city at a time
- Rate limit: ~15 requests/minute

---

## Advanced: Automated Curation

### Setup Cron Job (Optional)

Fetch events automatically every Monday:

```bash
# Add to crontab
0 9 * * 1 cd /path/to/curious-city && npx tsx scripts/fetch-events.ts chicago >> logs/events.log 2>&1
```

---

### Filter Events Programmatically

Edit `scripts/fetch-events.ts`:

```typescript
const filteredEvents = filterEvents(mergedEvents, {
  minRelevanceScore: 60,  // Higher threshold
  isFree: true,           // Only free events
  tags: ['music', 'art'], // Only music/art
  maxPrice: 50,           // Max $50
})
```

---

## Troubleshooting

### "API key is required"

**Problem:** API key not found

**Fix:**
1. Check `.env` file exists
2. Verify keys are correct
3. No quotes around keys
4. Restart terminal

---

### "Failed to fetch from Ticketmaster"

**Possible causes:**
- Invalid API key
- Rate limit exceeded
- Network error

**Fix:**
```bash
# Test API key manually
curl "https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_KEY&city=Chicago&size=1"
```

---

### "No events found"

**Possible causes:**
- City name mismatch
- No events in next 60 days
- API returned empty

**Fix:**
- Check city name in config
- Try different city
- Increase date range in code

---

### "TypeError: Cannot read property..."

**Problem:** Missing dependencies

**Fix:**
```bash
npm install
npm install dotenv
```

---

## Cost Analysis

### Current Setup (Free)

**Monthly API calls** (assuming weekly fetching for 12 cities):
- Ticketmaster: ~200 calls/month
- Eventbrite: ~200 calls/month

**Cost:** $0 (well within free tiers)

---

### If Scaling Up

**Daily fetching for 12 cities:**
- Ticketmaster: ~1,500 calls/month (still free)
- Eventbrite: ~1,500 calls/month (still free)

**Cost:** $0

---

### Enterprise Option

**PredictHQ:**
- $500-2000/month
- 25,000+ cities
- AI-ranked events
- Demand intelligence

**When to upgrade:**
- 50+ cities
- Need automation
- Want demand forecasting

---

## Next Steps

1. **Get API keys** (5 minutes)
2. **Create `.env` file** (1 minute)
3. **Fetch for one city** (1 minute)
4. **Review and curate** (5 minutes)
5. **Add to all cities** (repeat)

---

## Resources

**API Documentation:**
- [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
- [Eventbrite API](https://www.eventbrite.com/platform/api)

**Support:**
- Ticketmaster: developer@ticketmaster.com
- Eventbrite: api@eventbrite.com

**Related Docs:**
- [EVENT_DATA_SOURCES.md](./EVENT_DATA_SOURCES.md) - All sourcing options
- [EVENTS_GUIDE.md](./EVENTS_GUIDE.md) - Adding/managing events
