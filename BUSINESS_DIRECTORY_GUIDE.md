# Business Directory System Guide

## Overview

The Curious City business directory is designed to create high-quality, story-driven listings for local businesses across all cities. Unlike traditional directories that just list contact info, our approach combines practical information with editorial storytelling to make each listing interesting and valuable.

## Directory Structure

```
src/
├── types/
│   └── business.ts                    # TypeScript interfaces for businesses
├── data/
│   ├── directory-categories.ts        # Category definitions
│   └── cities/
│       └── [city]/
│           └── businesses/
│               └── index.ts           # City-specific business listings
```

## Business Categories

We support the following main categories (with subcategories):

1. **Lawyers & Attorneys** - Personal injury, criminal defense, family law, estate planning, business law, etc.
2. **Doctors & Physicians** - Primary care, pediatrics, specialists
3. **Dentists** - General, cosmetic, orthodontics
4. **Restaurants** - All cuisines and dining styles
5. **Bars & Nightlife** - Cocktail bars, dive bars, breweries, music venues
6. **Coffee Shops & Cafes** - Coffee, bakeries, tea houses
7. **Hotels & Lodging** - Luxury, boutique, budget accommodations
8. **Real Estate** - Residential, commercial, property management
9. **Home Services** - Contractors, plumbers, electricians, HVAC, landscaping
10. **Beauty & Wellness** - Salons, spas, massage, nail salons
11. **Fitness & Recreation** - Gyms, yoga, martial arts, personal training
12. **Financial Services** - Banks, financial advisors, accountants, insurance

## Business Entry Template

### Required Fields

```typescript
{
  id: 'unique-slug-identifier',
  name: 'Business Name',
  slug: 'business-name-slug',
  citySlug: 'city',
  category: 'lawyers' | 'doctors' | 'restaurants' | etc.,
  description: 'Detailed description of the business (2-3 sentences)',

  address: {
    street: '123 Main St',
    city: 'City',
    state: 'ST',
    zip: '12345',
    neighborhood: 'Neighborhood Name'
  },

  seo: {
    metaDescription: 'SEO-optimized description (155 characters max)'
  },

  verified: true | false,
  publishedAt: '2024-01-15T10:00:00Z',
  tags: ['tag1', 'tag2', 'tag3']
}
```

### Optional But Recommended Fields

```typescript
{
  tagline: 'One-line hook (under 80 characters)',
  subcategory: 'personal-injury',
  established: 2000,

  phone: '(123) 456-7890',
  email: 'info@business.com',
  website: 'https://business.com',

  hours: {
    monday: '9:00 AM - 5:00 PM',
    tuesday: '9:00 AM - 5:00 PM',
    // etc.
  },

  priceRange: '$' | '$$' | '$$$' | '$$$$',

  specialty: ['What they\'re known for'],
  services: ['Services offered'],
  amenities: ['WiFi', 'Parking', 'Wheelchair accessible'],

  story: {
    title: 'Editorial headline',
    excerpt: '2-3 sentence story hook',
    content: 'Full story (optional, for featured businesses)',
    writtenBy: 'Author Name'
  },

  location: {
    building: 'Historic building name',
    buildingHistory: 'Story about the building',
    neighborhood: 'Neighborhood Name',
    nearbyLandmarks: ['Landmark 1', 'Landmark 2']
  },

  featuredImage: {
    src: '/city/businesses/business-name.jpg',
    alt: 'Description of image'
  },

  awards: ['Award Name', 'Recognition'],
  certifications: ['Certification 1', 'Certification 2'],
  affiliations: ['Association 1', 'Association 2'],

  featured: true,
  updatedAt: '2025-01-15T10:00:00Z'
}
```

## Content Guidelines

### 1. Story-Driven Listings

Every business should have a story. Don't just list facts — find the angle:

**Bad:**
> Joe's Pizza serves pizza in downtown Minneapolis. They have been in business since 1985.

**Good:**
> Joe's Pizza has been making New York-style pies in downtown Minneapolis since 1985, back when nobody in the Twin Cities knew what real New York pizza was supposed to taste like. Joe moved from Brooklyn, brought his grandmother's recipe, and spent 40 years convincing Minnesotans that pizza doesn't need Ranch dressing.

### 2. Focus on What Makes Them Unique

Find the hook:
- **Historic building?** Tell that story.
- **Family legacy?** Explain the generations.
- **Innovation?** What did they pioneer?
- **Local impact?** How do they serve the community?
- **Credentials?** Highlight awards, certifications, recognitions.

### 3. Be Honest and Specific

- If it's expensive, say so (with $$$$).
- If parking is difficult, mention it in amenities.
- If hours are limited, be clear about when they're open.
- If they specialize in one thing, emphasize that over generic services.

### 4. Local Context Matters

Always include:
- Neighborhood name
- Nearby landmarks
- Building history (if interesting)
- How long they've been there
- What was there before (if relevant)

### 5. SEO Best Practices

**Meta descriptions should:**
- Include business name
- Include city/neighborhood
- Highlight unique selling point
- Include category keywords
- Stay under 155 characters

**Example:**
> Matt's Bar in South Minneapolis: Home of the original Jucy Lucy burger since the 1950s. Cash-only dive bar serving Minneapolis's most iconic food.

**Tags should include:**
- Category (e.g., 'lawyers', 'coffee-shops')
- Neighborhood (e.g., 'downtown', 'northeast')
- Specialty (e.g., 'personal-injury', 'third-wave-coffee')
- Characteristics (e.g., 'cash-only', 'wheelchair-accessible')
- Style/vibe (e.g., 'dive-bar', 'upscale', 'family-friendly')

## Example Entries

### Coffee Shop Example

```typescript
{
  id: 'spyhouse-coffee-northeast',
  name: 'Spyhouse Coffee - Northeast',
  slug: 'spyhouse-coffee-northeast',
  citySlug: 'minneapolis',
  category: 'cafes',
  subcategory: 'coffee-shops',
  tagline: 'Third-wave coffee roasted in Minneapolis since 2000',
  description: 'Spyhouse pioneered Minneapolis\'s third-wave coffee scene when it opened in 2000. They roast in-house, source directly from farms, and train baristas like apprentices. The Northeast location has exposed brick, vintage furniture, and enough seating that you can actually work here.',
  established: 2000,
  priceRange: '$$',
  specialty: ['Single-origin pour-overs', 'In-house roasting'],
  amenities: ['WiFi', 'Laptop-friendly', 'Outdoor seating'],
  story: {
    title: 'The Coffee Shop That Started a Movement',
    excerpt: 'When Spyhouse opened in 2000, Minneapolis coffee culture was Folgers and Starbucks. Twenty-five years later, they have seven locations and competitors across the city — all following the model Spyhouse pioneered.',
  },
  featured: true,
  seo: {
    metaDescription: 'Spyhouse Coffee in Northeast Minneapolis: Third-wave coffee roasted in-house since 2000. Pour-overs, espresso, and the café that made Minneapolis a coffee city.'
  }
}
```

### Law Firm Example

```typescript
{
  id: 'zimmerman-reed-law-firm',
  name: 'Zimmerman Reed LLP',
  slug: 'zimmerman-reed-law-firm',
  citySlug: 'minneapolis',
  category: 'lawyers',
  subcategory: 'personal-injury',
  tagline: 'Personal injury and class action attorneys since 1990',
  description: 'Zimmerman Reed specializes in personal injury and class action litigation. Founded in 1990, the firm has recovered over $3 billion for clients nationwide while maintaining their commitment to individual injury clients in Minnesota.',
  established: 1990,
  priceRange: '$$$',
  specialty: ['Personal Injury', 'Class Action', 'Product Liability'],
  services: ['Free consultations', 'Contingency fee', 'Trial representation'],
  certifications: ['Super Lawyers', 'AV Preeminent', 'Best Lawyers in America'],
  location: {
    building: 'IDS Center',
    buildingHistory: 'The IDS Center, completed in 1973, is Minneapolis\'s tallest building at 792 feet.',
    neighborhood: 'Downtown Minneapolis'
  },
  featured: true,
  seo: {
    metaDescription: 'Zimmerman Reed LLP: Personal injury lawyers in Minneapolis. Free consultations, contingency fees, $3 billion+ recovered for clients.'
  }
}
```

## Verification System

Businesses can be marked as:
- `verified: true` - We've confirmed the information is accurate
- `verified: false` - Information sourced from public data, needs verification

Verification should include:
- Confirming hours, phone, address
- Visiting the location (for local businesses)
- Checking website and social media
- Verifying certifications/awards claimed

## Monetization Strategy

The directory supports multiple revenue streams:

1. **Featured Listings** - Premium placement for paying businesses
2. **Affiliate Links** - For chains/franchises with referral programs
3. **Ad Placement** - Traditional display ads within directory pages
4. **Lead Generation** - For service businesses (lawyers, doctors, contractors)
5. **Premium Content** - Detailed business stories/profiles as sponsored content

## Content Production Goals

### Phase 1: Foundation (Months 1-2)
- 50+ businesses per major city
- Focus on high-value categories (lawyers, doctors, restaurants)
- All verified and story-driven

### Phase 2: Expansion (Months 3-6)
- 200+ businesses per city
- Add mid-tier categories (home services, beauty, fitness)
- Develop featured business program

### Phase 3: Scale (Months 6-12)
- 500+ businesses per city
- Expand to secondary markets
- Launch monetization programs

## Quality Checklist

Before publishing a business listing:
- [ ] All required fields completed
- [ ] Description is story-driven, not just facts
- [ ] Contact info verified (if verified: true)
- [ ] Hours are current
- [ ] Neighborhood and location context included
- [ ] Story/hook is present and interesting
- [ ] SEO meta description under 155 characters
- [ ] Tags include category, neighborhood, specialties
- [ ] Price range is accurate
- [ ] Featured image (if featured listing)
- [ ] Building history included (if interesting)
- [ ] Nearby landmarks listed

## Writing Style

Match the Curious City editorial voice:
- **Informative but not boring** - Facts with personality
- **Honest** - Say if something is expensive, hard to find, or limited
- **Local** - Emphasize neighborhood, history, community connections
- **Story-first** - Lead with the interesting detail, not the basic facts
- **Specific** - Names, dates, prices, addresses — no vague descriptions

## Example Story Hooks

Instead of:
> Smith Law Firm provides legal services in Minneapolis.

Try:
> Smith Law Firm has been defending criminal cases from a converted firehouse in North Loop since 1985. The building's brass pole is still there — lawyers use it to get to court faster.

Instead of:
> Good Hair Salon offers haircuts and color services.

Try:
> Good Hair Salon's owner learned to cut hair in Tokyo before moving to Minneapolis in 2010. The Japanese precision cutting technique she brought with her has made her Northeast salon impossible to get into without a three-week wait.

---

**Remember:** Every business has a story. Our job is to find it and tell it well.
