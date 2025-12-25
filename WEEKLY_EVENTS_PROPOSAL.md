# Weekly Events Scaffolding Proposal
## Curious City - Dynamic Time-Based Event System

**Date:** December 25, 2025
**Status:** Proposal / Discussion Draft

---

## 1. Current State Analysis

### What Exists
- ✅ `/[city]/this-week` route already implemented
- ✅ Type definitions for `ThisWeekItem` in `src/types/content.ts`
- ✅ UI components for displaying events with categories
- ✅ Static data structure in `src/data/cities.ts`

### Current Limitations
- ❌ **No automatic date handling** - dates are hardcoded strings (e.g., "Dec 24")
- ❌ **No expiration logic** - old events don't automatically disappear
- ❌ **Manual updates required** - someone must edit `cities.ts` to update events
- ❌ **Single view only** - only "this week" exists (no "today", "this weekend", "this month")
- ❌ **No navigation between time periods** - can't browse forward/backward
- ❌ **No event status tracking** - can't show "happening now", "starts soon", "last chance"

---

## 2. Research Findings

### Industry Best Practices

Based on research of Time Out, Eventbrite, and UX pattern libraries:

#### **Time Bucket Organization** (Facebook/Eventbrite Pattern)
> *Source: [The Most Popular Date Filter UI Patterns](https://evolvingweb.com/blog/most-popular-date-filter-ui-patterns-and-how-decide-each-one)*

Humans think in time buckets, not exact dates:
- **Today** / Tonight
- **Tomorrow**
- **This Weekend** (Fri-Sun)
- **This Week** (Mon-Sun)
- **Next Week**
- **This Month**
- **Upcoming** (future events beyond current month)

**Why this matters:** Users scan events differently based on proximity. Events happening tonight need full details (time, location). Events next month just need awareness.

#### **Progressive Detail Pattern**
> *Source: [Event Calendar design pattern](https://ui-patterns.com/patterns/EventCalendar)*

Show more detail as events approach:
- **Far future** → Title + Date only
- **This month** → + Time + Category
- **This week** → + Location + Image + Description
- **Today** → + "Happening Now" status

#### **Navigation Structures**
> *Source: [Time Out Chicago Events Calendar](https://www.timeout.com/chicago/events-calendar)*

Time Out uses:
1. **Seasonal calendars** - "Fall 2025 Events", "Winter 2026 Events"
2. **Weekend pages** - Dedicated "This Weekend in [City]" pages
3. **Quick filters** - "Today", "This Weekend", "This Week"

---

## 3. Proposed Scaffolding Architecture

### 3.1 Data Structure Enhancement

**Current:**
```typescript
interface ThisWeekItem {
  title: string
  description: string
  date?: string // ❌ Static string like "Dec 24"
  time?: string
  location?: string
  category?: 'event' | 'opening' | 'closing' | 'seasonal' | 'limited' | 'popup'
  href?: string
  image?: { src: string; alt: string }
}
```

**Proposed:**
```typescript
interface EventItem {
  // Core info
  title: string
  description: string
  location?: string
  href?: string
  image?: { src: string; alt: string }

  // Enhanced temporal data
  startDate: string // ISO 8601: "2025-12-24T19:00:00"
  endDate?: string  // For multi-day events
  isRecurring?: boolean
  recurrenceRule?: string // "every Friday" or cron-like syntax

  // Display metadata
  category: 'event' | 'opening' | 'closing' | 'seasonal' | 'limited' | 'popup'
  tags?: string[] // ["free", "family-friendly", "outdoor"]

  // Auto-expiration
  expiresAt?: string // When to stop showing this event
}
```

### 3.2 Computed Event Status

**New utility:** `src/utils/eventStatus.ts`

```typescript
export type EventStatus =
  | 'happening-now'    // Currently in progress
  | 'starts-soon'      // Within next 2 hours
  | 'today'            // Later today
  | 'tomorrow'         // Tomorrow
  | 'this-weekend'     // Fri-Sun of current week
  | 'this-week'        // Mon-Sun of current week
  | 'next-week'        // Following Mon-Sun
  | 'this-month'       // Current month
  | 'upcoming'         // Future
  | 'ended'            // Past (should be filtered out)

export function getEventStatus(event: EventItem): EventStatus {
  // Calculate based on current time vs event.startDate
}

export function isEventActive(event: EventItem): boolean {
  // Check if event should still be displayed
}

export function getDisplayDate(event: EventItem): string {
  // Returns human-friendly date: "Tonight at 7pm", "Tomorrow", "Dec 24"
}
```

### 3.3 Page Structure Proposal

**Option A: Single Dynamic Page (Recommended)**
```
/[city]/events
  - Default view: "This Week"
  - Quick filter tabs: Today | This Weekend | This Week | This Month
  - URL params: /[city]/events?view=today
```

**Pros:**
- Single page to maintain
- Easy filtering with URL params
- Smooth transitions between views
- SEO-friendly with query params

**Option B: Separate Pages**
```
/[city]/events/today
/[city]/events/this-weekend
/[city]/events/this-week
/[city]/events/this-month
```

**Pros:**
- Clear URLs
- Can optimize each page separately
- Better for deep linking

**Cons:**
- More pages to maintain
- Duplicate component logic

---

## 4. UI/UX Mockup (Text-Based)

```
╔════════════════════════════════════════════════════════════════╗
║ CURIOUS CITY: CHICAGO                                          ║
║ Essay | Events | Scenes | Coffee Shops | Bars | ...            ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  📅 EVENTS IN CHICAGO                                          ║
║                                                                ║
║  [ Today ] [ This Weekend ] [ THIS WEEK ] [ This Month ]       ║
║                                                   ← Dec 23-29 →║
║                                                                ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  🔴 HAPPENING NOW                                              ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║                                                                ║
║  ┌────────────────────────────────────────────────────────┐   ║
║  │ [IMAGE]  Holiday Market at Millennium Park             │   ║
║  │          🎄 Seasonal                                    │   ║
║  │          Through Dec 28 · 10am-8pm · Millennium Park   │   ║
║  │          Handcrafted gifts, hot cocoa, ice skating...  │   ║
║  └────────────────────────────────────────────────────────┘   ║
║                                                                ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  🟢 TODAY - DEC 25                                             ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║                                                                ║
║  [Event cards...]                                              ║
║                                                                ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║  📆 TOMORROW - DEC 26                                          ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║                                                                ║
║  [Event cards...]                                              ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

## 5. Technical Implementation Plan

### Phase 1: Core Infrastructure (Foundation)
**Goal:** Set up date utilities and types without breaking existing code

- [ ] Create `src/utils/dateUtils.ts`
  - Current date/time helpers
  - Week/month boundary calculations
  - Timezone handling (per city)

- [ ] Create `src/utils/eventStatus.ts`
  - Status calculation functions
  - Event filtering by time bucket
  - Active event checker

- [ ] Update type definitions in `src/types/content.ts`
  - Add new `EventItem` interface (keep `ThisWeekItem` for backward compat)
  - Add `EventStatus` type

- [ ] Write unit tests for utilities
  - Test date calculations
  - Test edge cases (midnight, timezone transitions)

**Deliverable:** Utility library ready to use

---

### Phase 2: Data Layer (Migration Path)
**Goal:** Support both old and new data formats

- [ ] Create `src/utils/eventAdapter.ts`
  - Convert old `ThisWeekItem` → new `EventItem`
  - Handle missing fields gracefully

- [ ] Update `src/data/cities.ts` helper functions
  - Add `getCityEvents(slug, filter?)` function
  - Keep `getCityThisWeek()` for backward compatibility

- [ ] Add sample event data for ONE city (e.g., Chicago)
  - 5-10 test events with real dates
  - Mix of categories and time ranges

**Deliverable:** Data layer that works with both formats

---

### Phase 3: UI Components (Display Logic)
**Goal:** Create reusable components for event display

- [ ] Create `src/components/EventCard.tsx`
  - Display event with computed status
  - Show relative dates ("Tonight at 7pm", "Tomorrow")
  - Status badges ("Happening Now", "Last Chance")

- [ ] Create `src/components/EventTimeBuckets.tsx`
  - Group events by status (Today, Tomorrow, This Week, etc.)
  - Collapsible sections
  - Empty states ("No events today")

- [ ] Create `src/components/EventFilter.tsx`
  - Tab navigation (Today, This Weekend, This Week, This Month)
  - URL param support
  - Active state styling

**Deliverable:** Component library for events

---

### Phase 4: Page Refactor (Integration)
**Goal:** Modernize the `/this-week` page with new components

**Option A: Minimal Update**
- [ ] Update `src/app/[city]/this-week/page.tsx`
  - Use new EventCard component
  - Add automatic filtering for current week
  - Add time bucket grouping

**Option B: New Events Hub** (More ambitious)
- [ ] Create `src/app/[city]/events/page.tsx`
  - Replace `/this-week` with `/events`
  - Add filter tabs
  - Support URL params (`?view=today`)
  - Add week navigation (← Previous Week | Next Week →)

- [ ] Add redirect: `/this-week` → `/events?view=this-week`
- [ ] Update navigation in `src/components/CityNav.tsx`

**Deliverable:** Working events page with automatic updates

---

### Phase 5: Automation & Polish
**Goal:** Make it truly automatic

- [ ] Add build-time filtering
  - Filter out expired events during build
  - Show warning if events are stale

- [ ] Add client-side refresh (optional)
  - Detect when day changes (midnight)
  - Update "Today" events without page reload

- [ ] Add admin helpers (future)
  - Script to check for outdated events
  - Template for adding new events
  - Validation script

**Deliverable:** Self-maintaining event system

---

## 6. Open Questions for Discussion

### 6.1 Routing Strategy
**Question:** Should we keep `/this-week` or move to `/events`?

| Option | Pros | Cons |
|--------|------|------|
| Keep `/this-week` | No breaking changes | Limited to one view |
| New `/events` page | Flexible, room to grow | Need redirects |
| Both (with redirect) | Backward compatible | Slight complexity |

**Recommendation:** Create `/events` with redirect from `/this-week`

---

### 6.2 Time Zones
**Question:** How do we handle multi-timezone cities?

Chicago (CST), Denver (MST), Phoenix (MST/no DST)...

**Options:**
1. **City-specific timezone config** - Store timezone per city
2. **User browser timezone** - Use client's local time
3. **Ignore for now** - Use server time (Central Time)

**Recommendation:** Start with option 3, add option 1 later

---

### 6.3 Recurring Events
**Question:** Do we need recurring events? (e.g., "Every Friday Happy Hour")

**Use cases:**
- Weekly farmers markets
- Monthly art walks
- Daily happy hours

**Options:**
1. **Not yet** - Add each instance manually
2. **Simple recurrence** - "Every Friday" flag
3. **Full iCal/RRULE** - Complex recurrence rules

**Recommendation:** Start with option 1, add option 2 if needed

---

### 6.4 Event Sources
**Question:** Where will event data come from?

**Now:** Manual entry in `cities.ts`

**Future options:**
- Google Calendar integration
- Eventbrite API
- Local event aggregators
- User submissions
- Scraping/automation

**Recommendation:** Discuss in next phase (after scaffolding is complete)

---

### 6.5 Navigation Between Time Periods
**Question:** Should users be able to browse past/future weeks?

**Example:** "← Previous Week | This Week | Next Week →"

**Pros:**
- Can plan ahead
- See past events (FOMO!)

**Cons:**
- More complex state management
- Need to generate future placeholders

**Recommendation:** Add "Next Week" navigation, skip "Previous Week" for now

---

## 7. Success Metrics

How will we know this is working?

### Automatic Updates
- ✅ Events automatically disappear after `endDate`
- ✅ "Today" section updates at midnight
- ✅ No manual date string editing needed

### User Experience
- ✅ Users can find tonight's events in < 5 seconds
- ✅ Clear visual hierarchy (happening now → today → this week)
- ✅ Mobile-friendly time filters

### Maintainability
- ✅ Adding new event takes < 2 minutes
- ✅ No stale events older than 7 days
- ✅ Build warns if event data is outdated

---

## 8. Next Steps

### Immediate Actions (This Discussion)
1. ✅ Review this proposal
2. ⏳ Decide on routing strategy (`/events` vs `/this-week`)
3. ⏳ Prioritize which phases to implement
4. ⏳ Discuss event data sources (how to find real events)

### After Approval
1. Create feature branch: `feature/weekly-events-scaffolding`
2. Implement Phase 1 (utilities)
3. Set up demo with sample data
4. Iterate based on feedback

---

## 9. Appendix: Research Sources

### UX Best Practices
- [The Most Popular Date Filter UI Patterns](https://evolvingweb.com/blog/most-popular-date-filter-ui-patterns-and-how-decide-each-one)
- [Event Calendar design pattern](https://ui-patterns.com/patterns/EventCalendar)

### Industry Examples
- [Time Out Chicago Events Calendar](https://www.timeout.com/chicago/events-calendar)
- [NYC Events Calendar](https://www.timeout.com/newyork/events-calendar)
- [Things to Do This Weekend in London](https://www.timeout.com/london/things-to-do-in-london-this-weekend)

### Technical Resources
- [Events Calendar Pro Widget Shortcodes](https://theeventscalendar.com/knowledgebase/events-calendar-pro-widget-shortcodes-overview/)
- [EventCartel Events Platform](https://eventcartel.com/events/all-categories/all-cities/today)

### Calendar Best Practices
- [Social media calendar: Top tools and templates for 2025](https://blog.hootsuite.com/social-media-calendar/)
- [Content Calendar Best Practices for 2025](https://districtconsulting.co/content-calendar-best-practices)

---

## 10. Visual Reference - Component Hierarchy

```
EventsPage
├── EventFilter (tabs: Today | Weekend | Week | Month)
├── WeekNavigation (← Prev | Dec 23-29 | Next →)
└── EventTimeBuckets
    ├── HappeningNowSection (if any)
    │   └── EventCard[]
    ├── TodaySection (if any)
    │   └── EventCard[]
    ├── TomorrowSection (if any)
    │   └── EventCard[]
    └── ThisWeekSection
        └── EventCard[]
```

**EventCard Props:**
```typescript
{
  event: EventItem
  showFullDetails: boolean // true for today/tomorrow, false for this week
  status: EventStatus
}
```

---

**End of Proposal**

*Let's discuss! What parts resonate? What needs adjustment?*
