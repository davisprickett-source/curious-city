export interface Business {
  id: string
  name: string
  slug: string
  citySlug: string
  category: BusinessCategory
  subcategory?: string

  // Basic info
  tagline?: string
  description: string
  established?: number

  // Contact
  address: {
    street: string
    city: string
    state: string
    zip: string
    neighborhood?: string
  }
  phone?: string
  email?: string
  website?: string

  // Hours
  hours?: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
  }

  // Pricing
  priceRange?: '$' | '$$' | '$$$' | '$$$$'

  // Features
  specialty?: string[]
  services?: string[]
  amenities?: string[]
  languages?: string[]

  // Story/Editorial
  story?: {
    title: string
    excerpt: string
    content?: string
    writtenBy?: string
  }

  // Location context
  location?: {
    building?: string
    buildingHistory?: string
    neighborhood: string
    nearbyLandmarks?: string[]
  }

  // Media
  featuredImage?: {
    src: string
    alt: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt: string
    credit?: string
  }>

  // Social proof
  awards?: string[]
  certifications?: string[]
  affiliations?: string[]

  // SEO
  seo: {
    metaTitle?: string
    metaDescription: string
    keywords?: string[]
  }

  // Metadata
  featured?: boolean
  verified?: boolean
  publishedAt: string
  updatedAt?: string
  tags: string[]
}

export type BusinessCategory =
  | 'lawyers'
  | 'doctors'
  | 'dentists'
  | 'restaurants'
  | 'bars'
  | 'cafes'
  | 'hotels'
  | 'shops'
  | 'real-estate'
  | 'auto'
  | 'home-services'
  | 'beauty'
  | 'fitness'
  | 'education'
  | 'financial'
  | 'healthcare'
  | 'professional-services'
  | 'entertainment'

export interface DirectoryCategory {
  id: BusinessCategory
  name: string
  description: string
  icon?: string
  subcategories?: Array<{
    id: string
    name: string
    description?: string
  }>
}
