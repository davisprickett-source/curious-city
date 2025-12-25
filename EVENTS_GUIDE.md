# Events Guide: Adding & Managing Events

Complete guide for adding, managing, and maintaining events in Curious City.

---

## Table of Contents

1. [Quick Add: Your First Event](#quick-add-your-first-event)
2. [Event Structure Reference](#event-structure-reference)
3. [Categories & Tags](#categories--tags)
4. [Date Formatting](#date-formatting)
5. [Validation & Testing](#validation--testing)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

---

## Quick Add: Your First Event

### Step 1: Open `src/data/cities.ts`

Find your city's section. Example for Chicago starts around line 2318.

### Step 2: Locate the Events Section

Look for:
```typescript
{
  id: 'events-this-week',
  type: 'events',
  title: 'Events This Week',
  items: [
    // Events go here
  ],
}
```

If it doesn't exist, add it after the `ad-1` section.

### Step 3: Add Your Event

```typescript
{
  title: 'Your Event Name',
  description: 'Brief, engaging description (2-3 sentences max)',
  startDate: '2025-12-26T19:00:00', // Dec 26, 2025 at 7:00 PM
  endDate: '2025-12-26T22:00:00',   // Same day at 10:00 PM
  location: 'Venue Name, Neighborhood',
  category: 'event', // See categories below
  tags: ['music', 'free', 'outdoor'], // Optional
  href: 'https://event-website.com', // Optional
  image: { // Optional
    src: '/images/events/your-event.jpg',
    alt: 'Description for accessibility',
  },
},
```

### Step 4: Validate

```bash
npx tsx scripts/validate-events.ts
```

### Step 5: Test Locally

```bash
npm run dev
# Visit http://localhost:3000/chicago/this-week
```

---

## Event Structure Reference

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `title` | string | Event name | `"Winter Jazz Festival"` |
| `description` | string | 2-3 sentence description | `"Four nights of..."`|
| `startDate` | string | ISO 8601 date | `"2025-12-26T19:00:00"` |
| `category` | string | Event type | `"event"` |

### Optional Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `endDate` | string | When event ends | `"2025-12-28T22:00:00"` |
| `location` | string | Venue + neighborhood | `"Millennium Park"` |
| `isAllDay` | boolean | All-day event | `true` |
| `tags` | string[] | Descriptive tags | `["free", "family"]` |
| `href` | string | Event website | `"https://..."` |
| `image` | object | Event image | See below |
| `expiresAt` | string | Override auto-expiry | `"2025-12-31..."` |

### Image Structure

```typescript
image: {
  src: '/images/events/filename.jpg', // Path to image
  alt: 'Descriptive text for screen readers',
}
```

---

## Categories & Tags

### Categories (Required)

Choose **one** that best describes the event:

| Category | Label | Use For | Color |
|----------|-------|---------|-------|
| `event` | Event | General events | Blue |
| `opening` | New Opening | Grand openings, debuts | Green |
| `closing` | Last Chance | Final days, closures | Red |
| `seasonal` | Seasonal | Holiday/seasonal events | Amber |
| `limited` | Limited Time | Pop-ups, short runs | Purple |
| `popup` | Pop-up | Temporary installations | Pink |

### Tags (Optional)

Add 1-4 tags that describe the event:

**Common Tags:**
- `free` - No admission fee
- `family-friendly` - Good for kids
- `outdoor` - Takes place outside
- `food` - Food-focused event
- `music` - Live music
- `art` - Art exhibition/event
- `sports` - Sports event
- `nightlife` - Evening/bar event
- `theater` - Theater performance
- `comedy` - Comedy show
- `market` - Market/fair

**Example:**
```typescript
category: 'seasonal',
tags: ['free', 'family-friendly', 'outdoor'],
```

---

## Date Formatting

### ISO 8601 Format

All dates must be in ISO 8601 format: `YYYY-MM-DDTHH:mm:ss`

```
2025-12-26T19:00:00
│    │  │ │  │  │
│    │  │ │  │  └─ Seconds (00-59)
│    │  │ │  └──── Minutes (00-59)
│    │  │ └─────── Hour (00-23, 24-hour format)
│    │  └────────── Day (01-31)
│    └───────────── Month (01-12)
└────────────────── Year
```

### Quick Date Generator

```typescript
import { createEventDate } from '@/utils/eventHelpers'

// December 26, 2025 at 7:00 PM
const startDate = createEventDate(2025, 12, 26, 19, 0)
// Returns: "2025-12-26T19:00:00"
```

### Common Patterns

**Single Day Event (with specific time):**
```typescript
startDate: '2025-12-26T19:00:00', // 7 PM
endDate: '2025-12-26T22:00:00',   // 10 PM
```

**All-Day Event:**
```typescript
startDate: '2025-12-26T00:00:00',
endDate: '2025-12-26T23:59:59',
isAllDay: true,
```

**Multi-Day Event:**
```typescript
startDate: '2025-12-26T10:00:00', // Dec 26, 10 AM
endDate: '2025-12-28T22:00:00',   // Dec 28, 10 PM
```

**Ongoing Event (runs for weeks):**
```typescript
startDate: '2025-12-01T00:00:00',
endDate: '2026-01-31T23:59:59',
```

---

## Display Behavior

### How Events Auto-Organize

The system automatically groups events based on **current time**:

| Status | When It Shows | Display |
|--------|---------------|---------|
| **Happening Now** 🔴 | Currently in progress | Full details + red badge |
| **Starts Soon** ⏰ | Within next 2 hours | Full details + orange badge |
| **Today** 📍 | Later today | Full details |
| **Tomorrow** 📅 | Tomorrow | Standard display |
| **This Weekend** 🎉 | Fri-Sun of current week | Standard display |
| **This Week** 📆 | Current Mon-Sun | Standard display |
| **Next Week** ⏭️ | Following Mon-Sun | Compact display |
| **Ended** ❌ | Past events | Hidden (auto-removed) |

### Date Display Examples

The system auto-formats dates based on proximity:

| Actual Date | If Today Is | Displays As |
|-------------|-------------|-------------|
| `2025-12-26T19:00:00` | Dec 26 | "Tonight at 7pm" |
| `2025-12-26T14:00:00` | Dec 26 | "Today at 2pm" |
| `2025-12-27T19:00:00` | Dec 26 | "Tomorrow at 7pm" |
| `2025-12-28T19:00:00` | Dec 26 | "Dec 28 at 7pm" |

---

## Validation & Testing

### Run Validation Script

```bash
npx tsx scripts/validate-events.ts
```

**Output:**
```
🔍 Validating events across all cities...

📍 Chicago (8 events)
──────────────────────────────────────────────────
  ✅ All events are valid and current

═══════════════════════════════════════════════════
📊 Summary
═══════════════════════════════════════════════════
Total Events:    8
Valid:           8 ✅

✅ All events are valid!
```

### Common Validation Errors

**❌ Invalid date format:**
```
Error: Start date must be in ISO 8601 format (e.g., "2025-12-25T19:00:00")
```

**Fix:** Use YYYY-MM-DDTHH:mm:ss format

---

**❌ End before start:**
```
Error: End date must be after start date
```

**Fix:** Check your end date is later than start date

---

**❌ Missing required field:**
```
Error: Title is required
Error: Description is required
```

**Fix:** Add the missing field

---

### Stale Event Warning

```
⚠️  Stale Events (ended >7 days ago):
   "Old Event" (ended: 2025-12-15)
```

**What it means:** Event ended over 7 days ago and should be removed.

**Fix:** Delete the event from `cities.ts`

---

## Best Practices

### Writing Good Descriptions

✅ **DO:**
```typescript
description: 'Four nights of free jazz in Millennium Park featuring local legends and emerging artists. Bring blankets for the lawn seating.',
```

❌ **DON'T:**
```typescript
description: 'Jazz festival. Music. Park.', // Too short
description: 'The Chicago Jazz Festival is an annual event that has been happening since 1979 and features jazz musicians from around the world playing various styles of jazz music in a park setting with food vendors and...', // Too long
```

**Guidelines:**
- 2-3 sentences max
- Include key details: what, where, why it's special
- Add a tip or insider info
- Keep it conversational

---

### Choosing Event Images

✅ **Good images:**
- High resolution (min 800px wide)
- Representative of the event
- Well-lit, clear subject
- Properly licensed

❌ **Avoid:**
- Low resolution/pixelated
- Watermarked
- Copyrighted without permission
- Generic stock photos

**Image sizes:** 800x800px to 1200x800px recommended

---

### Timing Your Events

**When to add:**
- **2-4 weeks before** for major events
- **1 week before** for regular events
- **Same week** for last-minute/breaking events

**When to remove:**
- **Automatically:** After `endDate` passes
- **Manually:** If event is cancelled

---

### Location Formatting

✅ **Good:**
```typescript
location: 'Millennium Park, The Loop'
location: 'Green Mill Cocktail Lounge, Uptown'
location: 'Pilsen Community Center, Pilsen'
```

❌ **Too specific:**
```typescript
location: '201 E Randolph St, Chicago, IL 60601' // Use neighborhood instead
```

❌ **Too vague:**
```typescript
location: 'Chicago' // Where in Chicago?
```

**Format:** `Venue Name, Neighborhood`

---

## Troubleshooting

### Event Doesn't Appear on Page

**Check:**
1. Is the date in the past? (Will auto-hide)
2. Is it properly nested in the `items` array?
3. Did you save `cities.ts`?
4. Did validation pass?
5. Is the event in the right city section?

---

### Event Shows on Wrong Day

**Check:**
1. Verify your `startDate` format
2. Make sure time is in 24-hour format
3. Check month (12 = December, not 11)

**Example:**
```typescript
// ❌ WRONG: Midnight = "12:00:00"
startDate: '2025-12-26T12:00:00' // This is NOON

// ✅ CORRECT: Midnight = "00:00:00"
startDate: '2025-12-26T00:00:00'
```

---

### Event Won't Disappear After Ending

**Possible causes:**
1. `endDate` is in the future
2. No `endDate` set (uses `startDate`)
3. Custom `expiresAt` date set

**Fix:**
```typescript
// Make sure endDate is in the past
endDate: '2025-12-26T22:00:00', // Event ended Dec 26 at 10 PM
```

---

### Image Not Showing

**Check:**
1. Image exists at the path specified
2. Path starts with `/images/`
3. File extension matches (`.jpg` vs `.jpeg`)
4. Image file isn't too large (> 5MB)

---

## Quick Reference

### Event Template (Copy-Paste)

```typescript
{
  title: '',
  description: '',
  startDate: '2025-12-26T19:00:00',
  endDate: '2025-12-26T22:00:00',
  location: '',
  category: 'event',
  tags: [],
  href: '',
  image: {
    src: '/images/events/',
    alt: '',
  },
},
```

### Validation Command

```bash
npx tsx scripts/validate-events.ts
```

### Date Helper

```typescript
import { createEventDate } from '@/utils/eventHelpers'
createEventDate(year, month, day, hour, minute)
```

### Template Generator

```typescript
import { generateEventTemplate } from '@/utils/eventHelpers'
console.log(generateEventTemplate('Event Name', 'category'))
```

---

## Next Steps

1. **Add your first event** using the quick add guide
2. **Run validation** to check for errors
3. **Test locally** at `/[city]/this-week`
4. **Read [Event Data Sources](./EVENT_DATA_SOURCES.md)** for automation ideas

---

**Need Help?**
- Check validation output for specific errors
- Review example events in `cities.ts` (Chicago section)
- See [EVENT_DATA_SOURCES.md](./EVENT_DATA_SOURCES.md) for sourcing events
