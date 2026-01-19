import type { Business } from '@/types/business'

// Example businesses - replace with real data
export const businesses: Business[] = [
  {
    id: 'spyhouse-coffee-northeast',
    name: 'Spyhouse Coffee - Northeast',
    slug: 'spyhouse-coffee-northeast',
    citySlug: 'minneapolis',
    category: 'cafes',
    subcategory: 'coffee-shops',
    tagline: 'Third-wave coffee roasted in Minneapolis since 2000',
    description:
      'Spyhouse pioneered Minneapolis\'s third-wave coffee scene when it opened in 2000. Today, they roast in-house, source directly from farms, and train baristas like they\'re apprenticing sommeliers. The Northeast location has the best atmosphere: exposed brick, vintage furniture, and enough seating that you can actually camp out with a laptop.',
    established: 2000,
    address: {
      street: '945 Broadway St NE',
      city: 'Minneapolis',
      state: 'MN',
      zip: '55413',
      neighborhood: 'Northeast Minneapolis',
    },
    phone: '(612) 362-2721',
    website: 'https://spyhousecoffee.com',
    hours: {
      monday: '6:30 AM - 7:00 PM',
      tuesday: '6:30 AM - 7:00 PM',
      wednesday: '6:30 AM - 7:00 PM',
      thursday: '6:30 AM - 7:00 PM',
      friday: '6:30 AM - 7:00 PM',
      saturday: '7:00 AM - 7:00 PM',
      sunday: '7:00 AM - 7:00 PM',
    },
    priceRange: '$$',
    specialty: [
      'Single-origin pour-overs',
      'In-house roasting',
      'Seasonal espresso drinks',
    ],
    services: [
      'Espresso drinks',
      'Pour-over coffee',
      'Pastries',
      'Whole bean sales',
    ],
    amenities: ['WiFi', 'Laptop-friendly', 'Outdoor seating (seasonal)'],
    story: {
      title: 'The Coffee Shop That Started a Movement',
      excerpt:
        'When Spyhouse opened in 2000, Minneapolis coffee culture was Folgers and Starbucks. Spyhouse changed that by roasting their own beans, sourcing directly from farms, and treating coffee like wine. Twenty-five years later, they have seven locations and competitors across the city — all following the model Spyhouse pioneered.',
      writtenBy: 'Jennifer Wu',
    },
    location: {
      neighborhood: 'Northeast Minneapolis',
      nearbyLandmarks: ['Bauhaus Brew Labs', 'Anchor Fish & Chips'],
    },
    featuredImage: {
      src: '/minneapolis/businesses/spyhouse-northeast.jpg',
      alt: 'Interior of Spyhouse Coffee Northeast location',
    },
    featured: true,
    verified: true,
    publishedAt: '2024-02-10T10:00:00Z',
    updatedAt: '2025-01-10T14:00:00Z',
    tags: [
      'coffee',
      'cafe',
      'northeast',
      'third-wave',
      'roaster',
      'laptop-friendly',
    ],
    seo: {
      metaDescription:
        'Spyhouse Coffee in Northeast Minneapolis: Third-wave coffee roasted in-house since 2000. Pour-overs, espresso, and the atmosphere that made Minneapolis a coffee city.',
      keywords: [
        'spyhouse coffee',
        'northeast minneapolis coffee',
        'third wave coffee',
        'coffee roaster',
        'best coffee minneapolis',
      ],
    },
  },
  {
    id: 'matts-bar',
    name: "Matt's Bar",
    slug: 'matts-bar',
    citySlug: 'minneapolis',
    category: 'bars',
    subcategory: 'dive-bars',
    tagline: 'Home of the original Jucy Lucy since the 1950s',
    description:
      "Matt's Bar is a South Minneapolis institution and the original home of the Jucy Lucy (spelled without the 'i' in Jucy). This is a no-frills dive bar serving burgers and fries since 1954. The menu has six items. The interior hasn't been updated since 1970. And the Jucy Lucy is still one of Minneapolis's most iconic foods.",
    established: 1954,
    address: {
      street: '3500 Cedar Ave S',
      city: 'Minneapolis',
      state: 'MN',
      zip: '55407',
      neighborhood: 'South Minneapolis',
    },
    phone: '(612) 722-7072',
    hours: {
      monday: '11:00 AM - 8:00 PM',
      tuesday: '11:00 AM - 8:00 PM',
      wednesday: '11:00 AM - 8:00 PM',
      thursday: '11:00 AM - 8:00 PM',
      friday: '11:00 AM - 8:00 PM',
      saturday: '11:00 AM - 8:00 PM',
      sunday: 'Closed',
    },
    priceRange: '$',
    specialty: ['Jucy Lucy', 'Burgers', 'Crinkle-cut fries'],
    services: ['Dine-in', 'Takeout'],
    amenities: ['Cash only', 'Street parking'],
    story: {
      title: "The Bar That Invented Minneapolis's Signature Burger",
      excerpt:
        "In the late 1950s, a customer at Matt's Bar asked if they could put cheese inside a burger instead of on top. The cooks tried it. When the customer bit in, molten cheese exploded everywhere. 'That's one juicy Lucy!' the customer supposedly said. Seventy years later, Matt's is still making them the same way.",
      writtenBy: 'Maria Gonzalez',
    },
    location: {
      neighborhood: 'South Minneapolis',
      nearbyLandmarks: ['Longfellow neighborhood', 'Minnehaha Park'],
    },
    featuredImage: {
      src: '/minneapolis/businesses/matts-bar.jpg',
      alt: "Exterior of Matt's Bar in South Minneapolis",
    },
    featured: true,
    verified: true,
    publishedAt: '2023-09-15T12:00:00Z',
    updatedAt: '2024-12-05T11:00:00Z',
    tags: [
      'dive bar',
      'burgers',
      'jucy lucy',
      'south minneapolis',
      'cash only',
      'classic',
    ],
    seo: {
      metaDescription:
        "Matt's Bar in South Minneapolis: Home of the original Jucy Lucy burger since the 1950s. Cash-only dive bar serving Minneapolis's most iconic food.",
      keywords: [
        'matts bar',
        'jucy lucy',
        'best burgers minneapolis',
        'south minneapolis',
        'dive bar',
      ],
    },
  },
  {
    id: 'zimmerman-reed-law-firm',
    name: 'Zimmerman Reed LLP',
    slug: 'zimmerman-reed-law-firm',
    citySlug: 'minneapolis',
    category: 'lawyers',
    subcategory: 'personal-injury',
    tagline:
      'Personal injury and class action attorneys serving Minnesota since 1990',
    description:
      'Zimmerman Reed is a Minneapolis-based law firm specializing in personal injury, class action litigation, and consumer protection. Founded in 1990, the firm has recovered over $3 billion for clients nationwide. Their Minneapolis office focuses on Minnesota personal injury cases, including car accidents, medical malpractice, and wrongful death claims.',
    established: 1990,
    address: {
      street: '1100 IDS Center, 80 South 8th Street',
      city: 'Minneapolis',
      state: 'MN',
      zip: '55402',
      neighborhood: 'Downtown Minneapolis',
    },
    phone: '(612) 341-0400',
    website: 'https://www.zimmreed.com',
    hours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },
    priceRange: '$$$',
    specialty: [
      'Personal Injury',
      'Class Action Litigation',
      'Product Liability',
      'Consumer Protection',
    ],
    services: [
      'Free consultations',
      'Contingency fee (no fee unless we win)',
      'Trial representation',
      'Settlement negotiation',
    ],
    certifications: [
      'Super Lawyers recognition',
      'AV Preeminent rated by Martindale-Hubbell',
      'Best Lawyers in America',
    ],
    affiliations: [
      'Minnesota State Bar Association',
      'American Association for Justice',
    ],
    story: {
      title: 'From Local Practice to National Class Action Leaders',
      excerpt:
        'Zimmerman Reed started as a small Minneapolis personal injury firm in 1990. Over three decades, they built a national reputation for taking on major corporations in class action cases — while maintaining their commitment to individual injury clients in Minnesota.',
      writtenBy: 'Jennifer Wu',
    },
    location: {
      building: 'IDS Center',
      buildingHistory:
        'The IDS Center, completed in 1973, is Minneapolis\'s tallest building at 792 feet. Designed by Philip Johnson, it\'s a defining feature of the city skyline.',
      neighborhood: 'Downtown Minneapolis',
      nearbyLandmarks: ['Nicollet Mall', 'Orchestra Hall', 'Target Center'],
    },
    featuredImage: {
      src: '/minneapolis/businesses/zimmerman-reed.jpg',
      alt: 'Zimmerman Reed law office in IDS Center, Minneapolis',
    },
    featured: true,
    verified: true,
    publishedAt: '2024-01-20T09:00:00Z',
    updatedAt: '2025-01-12T10:00:00Z',
    tags: [
      'lawyers',
      'personal injury',
      'class action',
      'downtown',
      'legal services',
    ],
    seo: {
      metaDescription:
        'Zimmerman Reed LLP: Personal injury and class action lawyers in Minneapolis. Free consultations, contingency fees, over $3 billion recovered for clients.',
      keywords: [
        'personal injury lawyer minneapolis',
        'class action attorney',
        'car accident lawyer',
        'zimmerman reed',
        'minneapolis law firm',
      ],
    },
  },
]
