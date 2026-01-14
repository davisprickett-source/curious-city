import { getCity, getAllCitySlugs, getCityBestOf } from '@/data/cities'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/StructuredData'

interface GuidePageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)
  if (!city) return {}

  const url = `https://thecurious.city/${slug}/guide`

  return {
    title: `${city.name} Guide - Best Bars, Restaurants & Coffee Shops | Curious City`,
    description: `Your essential guide to ${city.name} - the best bars, restaurants, and coffee shops curated by locals.`,
    alternates: {
      canonical: url,
    },
  }
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)
  if (!city) notFound()

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${slug}` },
          { name: 'Guide', url: `https://thecurious.city/${slug}/guide` },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="guide"
      />

  // Fetch representative establishments for each category
  const barsList = await getCityBestOf(slug, 'bars')
  const restaurantsList = await getCityBestOf(slug, 'restaurants')
  const coffeeList = await getCityBestOf(slug, 'coffee-shops')

  // Get first spot with image from each category
  const getFirstSpotWithImage = (lists: any[]) => {
    for (const list of lists) {
      const spot = list.spots?.find((s: any) => s.images && s.images.length > 0)
      if (spot) return spot
    }
    return null
  }

  const barSpot = getFirstSpotWithImage(barsList)
  const restaurantSpot = getFirstSpotWithImage(restaurantsList)
  const coffeeSpot = getFirstSpotWithImage(coffeeList)

  // Only establishment categories - listicles (hidden gems, local favorites, lost & loved) are in Discover
  const guideCategories = [
    {
      title: 'Best Bars',
      description: 'Cocktail lounges, dive bars, and neighborhood favorites',
      href: `/${slug}/bars`,
      image: barSpot?.images?.[0],
      gradient: 'from-indigo-600 to-indigo-900',
    },
    {
      title: 'Best Restaurants',
      description: 'From fine dining to neighborhood spots, the city&apos;s culinary highlights',
      href: `/${slug}/restaurants`,
      image: restaurantSpot?.images?.[0],
      gradient: 'from-amber-600 to-amber-900',
    },
    {
      title: 'Best Coffee Shops',
      description: 'Local roasters, cozy cafes, and third wave coffee',
      href: `/${slug}/coffee-shops`,
      image: coffeeSpot?.images?.[0],
      gradient: 'from-stone-600 to-stone-900',
    },
  ]

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="guide"
      />

      <div className="city-page-wrapper">
        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
            <div className="container-page py-16 md:py-24">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Your Guide to {city.name}
                </h1>
                <p className="text-xl text-neutral-300 leading-relaxed">
                  The essential guide to eating and drinking in {city.name}.
                  Curated lists of the best bars, restaurants, and coffee shops—all
                  vetted by locals who know the city inside out.
                </p>
              </div>
            </div>
          </div>

          {/* Guide Categories */}
          <div className="container-page section-spacing">
            <div className="space-y-8 max-w-4xl mx-auto">
              {guideCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="md:flex">
                    {/* Image or Gradient Side */}
                    <div className="md:w-2/5 h-64 md:h-full relative">
                      {category.image ? (
                        <>
                          <Image
                            src={category.image.src}
                            alt={category.image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-40 group-hover:opacity-30 transition-opacity`} />
                        </>
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${category.gradient}`} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-8 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 group-hover:text-accent-600 transition-colors">
                        {category.title}
                      </h2>
                      <p className="text-neutral-600 text-lg leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-accent-600 font-bold group-hover:bg-accent-600 group-hover:text-white px-4 py-2 rounded-full border-2 border-accent-600 transition-all duration-300">
                        Explore
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* How We Curate */}
          <div className="bg-neutral-50 py-16">
            <div className="container-page">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Locally Curated, Carefully Selected
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Every spot in this guide has been personally visited and vetted. We don&apos;t accept
                  payments for inclusion—these are genuine recommendations from people who live,
                  work, and explore {city.name} every day.
                </p>
                <p className="text-neutral-600">
                  Whether you're a longtime resident looking for something new or a visitor wanting
                  to skip the tourist traps, this guide will point you in the right direction.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
