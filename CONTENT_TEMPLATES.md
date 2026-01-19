# Content Templates for Curious City

## Quick reference templates for creating consistent, high-quality content across all cities.

---

## 1. Neighborhood Guide Template

### Structure:
```typescript
{
  slug: 'neighborhood-name',
  citySlug: 'city',
  title: '[Neighborhood Name]: [City]\'s [Defining Characteristic] District',
  subtitle: 'What you need to know about [neighborhood] — the streets, the history, the spots that make it [unique quality]',
  excerpt: 'A comprehensive guide to [neighborhood], from its [historical element] to today\'s [current character]. Everything you need to know about one of [city]\'s most [quality] neighborhoods.',
  author: {
    name: 'Jennifer Wu' // or James Chen for architecture-focused
    bio: 'Local business journalist and neighborhood expert. Covers hidden gems, small businesses, and community anchors.'
  },
  publishedAt: '[DATE]',
  category: 'guide',
  tags: ['neighborhoods', 'city', 'local-guide'],
}
```

### Content Blocks Template:
```typescript
[
  // Opening paragraph - Set the scene
  {
    type: 'paragraph',
    content: 'Walk down [main street] on a [time of day], and you\'ll immediately understand why [neighborhood] is [characteristic]. [Sensory details]. This is [defining statement about the neighborhood].'
  },

  // History section
  {
    type: 'heading',
    level: 2,
    content: 'How [Neighborhood] Became [What It Is]'
  },
  {
    type: 'paragraph',
    content: '[Brief history - 2-3 paragraphs max. Focus on the turning point that made it what it is today.]'
  },

  // Boundaries/Layout
  {
    type: 'heading',
    level: 2,
    content: 'Where It Is'
  },
  {
    type: 'paragraph',
    content: '[Neighborhood] runs roughly from [north boundary] to [south boundary], between [west] and [east]. The heart of the action is along [main street/intersection].'
  },

  // Best spots - broken into categories
  {
    type: 'heading',
    level: 2,
    content: 'Best Places to Eat'
  },
  {
    type: 'paragraph',
    content: '[3-4 standout restaurants with 1-2 sentence descriptions each. Focus on what makes them special, not generic reviews.]'
  },

  {
    type: 'heading',
    level: 2,
    content: 'Best Places to Drink'
  },
  {
    type: 'paragraph',
    content: '[2-3 bars/coffee shops. Again, focus on character and unique elements.]'
  },

  {
    type: 'heading',
    level: 2,
    content: 'Don\'t Miss'
  },
  {
    type: 'paragraph',
    content: '[Unique shops, landmarks, hidden spots. 3-4 items max. These should be things you can\'t find anywhere else.]'
  },

  // Practical info
  {
    type: 'heading',
    level: 2,
    content: 'Getting There'
  },
  {
    type: 'paragraph',
    content: '[Transit info, parking situation, walkability. Keep it practical and honest.]'
  },

  // Pro tips
  {
    type: 'callout',
    variant: 'tip',
    title: 'Insider Tip',
    content: '[One specific, actionable piece of advice that shows you actually know this neighborhood. "Go on Tuesday nights when..." or "Park on X street instead of Y" etc.]'
  },
]
```

---

## 2. "Best Of" List Template

### Structure:
```typescript
{
  slug: 'best-[category]-[city]',
  citySlug: 'city',
  title: 'The [Number] Best [Category] in [City]',
  subtitle: 'From [quality A] to [quality B], these are the [category] that make [city] [defining quality]',
  excerpt: 'We spent [timeframe] eating/drinking/visiting/researching [city]\'s [category] scene. These [number] are the ones that stood out — the places with [quality], [quality], and [unique factor] you won\'t find anywhere else.',
  author: {
    name: 'Maria Gonzalez' // For food/restaurants
    // or 'Marcus Reid' for nightlife/bars
    // or 'Jennifer Wu' for local businesses
  },
  publishedAt: '[DATE]',
  updatedAt: '[RECENT DATE]', // Show it's current
  category: 'list',
  tags: ['best-of', 'category', 'city'],
}
```

### Content Pattern:
```typescript
[
  // Intro - Why this list matters
  {
    type: 'paragraph',
    content: '[City] has [number] [category], but these [list number] are the ones that [defining quality]. We\'re not including [what you\'re excluding] — just the places that [criteria].'
  },

  // Methodology (builds trust)
  {
    type: 'paragraph',
    content: 'We [how you selected these]. [Credentials/time spent/research method]. Last updated [date].'
  },

  // For each entry (numbered):
  {
    type: 'heading',
    level: 2,
    content: '[Number]. [Name of Place]'
  },
  {
    type: 'paragraph',
    content: '[Neighborhood/Location] • [Price range] • [Key category tags]'
  },
  {
    type: 'paragraph',
    content: '[What makes this place special in 2-3 sentences. Lead with the most unique/interesting fact, not generic praise. End with a specific dish/drink/experience to try.]'
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Pro Tip',
    content: '[Insider knowledge: best time to go, what to order, how to get a table, secret menu item, etc.]'
  },

  // Image for each entry
  {
    type: 'image',
    src: '/city/category/place-name.jpg',
    alt: '[Place name] in [neighborhood], [city]',
    caption: '[Optional: specific detail about the photo]'
  },

  {
    type: 'divider'
  },

  // ... repeat for each entry ...
]
```

---

## 3. Business Directory Entry Template

### Structure:
```typescript
{
  slug: 'business-name-city',
  citySlug: 'city',
  name: '[Business Name]',
  category: 'lawyers' | 'doctors' | 'restaurants' | 'bars' | etc.,
  address: '[Full address]',
  phone: '[Phone number]',
  website: '[URL]',
  hours: '[Operating hours]',
  priceRange: '$' | '$$' | '$$$' | '$$$$',

  // Quick facts
  established: '[Year]',
  specialty: '[What they\'re known for]',

  // Story angle (what makes this interesting)
  story: {
    title: '[Headline about what makes them unique]',
    excerpt: '[2-3 sentences about their story/history/angle]',
    content: '[Optional: longer article if interesting enough]'
  },

  // Building/location history
  location: {
    building: '[Building name if historic]',
    history: '[What happened here before, if interesting]',
    neighborhood: '[Neighborhood name]'
  },

  // SEO
  metaDescription: '[Business name] in [city]. [Key service]. [Unique angle]. Located in [neighborhood].',
  tags: ['category', 'neighborhood', 'city'],
}
```

### Editorial Guidelines for Directory:
- **Always find the story:** Every business should have a hook (historic building, family legacy, innovation, etc.)
- **Be specific:** "Specializes in personal injury law" not "full-service law firm"
- **Local angle:** Connect to city history, neighborhood, local culture
- **Keep it real:** If it's expensive, say so. If parking sucks, mention it.
- **Update regularly:** Hours, phone, website should always be current

---

## 4. Food/Restaurant Deep Dive Template

### Structure:
```typescript
{
  slug: 'restaurant-or-dish-name',
  citySlug: 'city',
  title: '[Dish/Restaurant Name]: [City]\'s [Claim to Fame]',
  subtitle: '[What it is], [where to find it], and [why it matters]',
  excerpt: '[Lead with the most interesting fact. Then describe what it is. End with why you should care.]',
  author: {
    name: 'Maria Gonzalez',
    bio: 'Food historian and James Beard Award nominee...'
  },
  publishedAt: '[DATE]',
  category: 'feature',
  tags: ['food', 'restaurants', 'city'],
}
```

### Content Pattern:
```typescript
[
  // Hook - Start with the best detail
  {
    type: 'paragraph',
    content: '[Most interesting fact about this food/place]. [Context]. [Why it matters].'
  },

  // Origin story
  {
    type: 'heading',
    level: 2,
    content: 'How [Dish/Restaurant] Started'
  },
  {
    type: 'paragraph',
    content: '[Origin story. Focus on interesting details, not generic history. Include names, dates, turning points.]'
  },

  // What makes it special
  {
    type: 'heading',
    level: 2,
    content: 'What Makes It [City]\'s [Category]'
  },
  {
    type: 'paragraph',
    content: '[Specific details about technique, ingredients, tradition. Get nerdy. Include quotes from chef/owner if possible.]'
  },

  // Current state
  {
    type: 'heading',
    level: 2,
    content: 'Where to Get It Today'
  },
  {
    type: 'paragraph',
    content: '[Specific locations, what to order, price points, what to expect.]'
  },

  // Practical callout
  {
    type: 'callout',
    variant: 'tip',
    title: 'How to Order',
    content: '[Specific ordering advice. "Ask for X." "Get there before Y." "Don\'t order Z." etc.]'
  },
]
```

---

## 5. Architecture/Building Deep Dive Template

### Structure:
```typescript
{
  slug: 'building-name-city',
  citySlug: 'city',
  title: '[Building Name]: [City]\'s [Defining Characteristic] [Building Type]',
  subtitle: '[When it was built], [what happened here], and [why it matters today]',
  excerpt: '[Hook about what makes this building special]. Built in [year], [building name] [major event/fact]. Today, [current state].',
  author: {
    name: 'James Chen',
    bio: 'Architecture writer and photographer...'
  },
  publishedAt: '[DATE]',
  category: 'feature',
  tags: ['architecture', 'buildings', 'city'],
}
```

### Content Pattern:
```typescript
[
  // Visual opening - describe the building
  {
    type: 'paragraph',
    content: '[What you see when you look at it]. [Architectural details]. [What makes it distinctive].'
  },

  // History
  {
    type: 'heading',
    level: 2,
    content: 'Built for [Original Purpose]'
  },
  {
    type: 'paragraph',
    content: '[Who built it, why, when]. [What it was originally]. [Key historical details].'
  },

  // The turning point
  {
    type: 'heading',
    level: 2,
    content: '[Major Event That Happened Here]'
  },
  {
    type: 'paragraph',
    content: '[The most interesting chapter in the building\'s history].'
  },

  // Architecture details
  {
    type: 'heading',
    level: 2,
    content: 'The Architecture'
  },
  {
    type: 'paragraph',
    content: '[Style, architect, distinctive features]. [What to look for]. [Why it\'s significant].'
  },

  // Current state
  {
    type: 'heading',
    level: 2,
    content: 'What It Is Today'
  },
  {
    type: 'paragraph',
    content: '[Current use]. [Can you visit?]. [What to know].'
  },

  {
    type: 'callout',
    variant: 'info',
    title: 'Visit Information',
    content: '[Address]. [Hours if applicable]. [Best time to see it]. [Accessibility notes].'
  },
]
```

---

## SEO Best Practices for All Templates

### Titles:
- Include city name
- Include category/topic
- Include unique angle
- Keep under 60 characters
- Use numbers when applicable

**Good:** "The 10 Best Dive Bars in Chicago"
**Better:** "Chicago's 10 Best Dive Bars: From Old Town to Pilsen"

### Excerpts:
- First sentence = hook (most interesting fact)
- Second sentence = what it is
- Third sentence = why you should care
- Keep under 155 characters for meta description

### Tags:
Always include:
- City name
- Main category
- Neighborhood (if applicable)
- Specific descriptors (e.g., 'historic', 'hidden-gem', 'architecture')

### Images:
- Alt text: "[Subject] in [neighborhood], [city]"
- File names: lowercase-with-dashes, include-city-name.jpg
- Always include credit if not your photo

---

## Author Assignment Guide

**Rachel Morrison:**
- Urban renewal
- Displacement stories
- Forgotten communities
- Social history

**James Chen:**
- Architecture
- Buildings
- Urban design
- Historic preservation

**Maria Gonzalez:**
- Food history
- Restaurants
- Immigrant food culture
- Culinary traditions

**David Winters:**
- Unsolved mysteries
- True crime
- Cold cases
- Investigations

**Sarah Kim:**
- Weird/quirky stories
- Urban legends
- Cultural curiosities
- Unexpected finds

**Thomas Blackwell:**
- Disasters
- Industrial accidents
- Safety regulations
- Engineering history

**Elena Vasquez:**
- Immigration
- Diaspora communities
- Cultural preservation
- Oral histories

**Marcus Reid:**
- Music history
- Nightlife
- Entertainment districts
- Cultural scenes

**Jennifer Wu:**
- Local businesses
- Neighborhoods
- Hidden gems
- Community stories

**The Curious City:**
- General curiosities
- Quick facts
- Listicle items
- Lighter content

---

## Publishing Calendar Strategy

### Weekly Mix:
- **Monday:** Neighborhood guide or practical "best of" (starts week with useful info)
- **Wednesday:** Historical deep-dive or architecture piece (mid-week engagement)
- **Friday:** Food/restaurant piece or fun curiosity (weekend planning content)

### Monthly Goals:
- 8-10 articles total
- 40% practical guides (neighborhoods, best-of lists)
- 40% historical/architectural deep-dives
- 20% quirky curiosities/fun stuff

### Seasonal Content:
- **Summer:** Outdoor spots, festivals, walking tours
- **Fall:** Historical pieces, Halloween dark history
- **Winter:** Indoor attractions, food, cozy spots
- **Spring:** Architecture, new openings, neighborhoods

---

## Quality Checklist

Before publishing, every piece should have:
- [ ] City name in title
- [ ] Specific author with relevant expertise
- [ ] Realistic publish date (backdated appropriately)
- [ ] Updated date if claiming recent research
- [ ] At least one practical callout/tip
- [ ] Specific details (names, dates, addresses, prices)
- [ ] Featured image with proper alt text and credit
- [ ] 3-5 relevant tags
- [ ] Links to related content (internal linking)
- [ ] Sources cited for historical claims
- [ ] Spell-checked and proofread

---

**Remember:** Every piece should answer three questions:
1. **What is it?** (Clear, specific description)
2. **Why is it interesting?** (The unique angle/story)
3. **Why should I care?** (Practical value or emotional resonance)

If you can't answer all three, rework the piece.
