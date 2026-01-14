import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllCities } from '@/data/cities'
import { Footer, ShareButton, NewsletterSignup } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { BreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'All Cities | Curious City',
  description: 'Explore all the cities covered by Curious City - local stories, hidden gems, dark history, and more.',
  alternates: {
    canonical: 'https://thecurious.city/cities',
  },
}

// Helper function to get skyline image path for a city
function getSkylineImage(citySlug: string): string {
  // Map city slugs to skyline image filenames
  const skylineMap: Record<string, string> = {
    'anchorage': 'anchorage-skyline.png',
    'chicago': 'chicago-skyline.png',
    'colorado-springs': 'colorado-springs-skyline.png',
    'dallas': 'dallas-skyline.png',
    'denver': 'denver-skyline.png',
    'fargo': 'fargo-skyline.png',
    'minneapolis': 'minneapolis-skyline.png',
    'phoenix': 'phoenix-skyline.png',
    'portland': 'portland-skyline.png',
    'raleigh': 'raleigh-skyline.png',
    'seattle': 'seattle-skyline.png',
    'salt-lake-city': 'slc-skyline.png',
    'tampa': 'tampa-skyline.png',
  }

  return `/banners/hero-city-images/${skylineMap[citySlug] || 'fallback.png'}`
}

export default async function CitiesPage() {
  const cities = await getAllCities()

  return (
    <div>
      <h1>Cities Page (Debug Mode)</h1>
      {cities.map(city => (
        <p key={city.slug}>{city.name}</p>
      ))}
    </div>
  )
}
