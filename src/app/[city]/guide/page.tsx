import { getCity, getAllCitySlugs } from '@/data/cities'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

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

  return {
    title: `${city.name} Guide - Best Bars, Restaurants & Coffee Shops | Curious City`,
    description: `Your essential guide to ${city.name} - the best bars, restaurants, and coffee shops curated by locals.`,
  }
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)
  if (!city) notFound()

  // Only establishment categories - listicles (hidden gems, local favorites, lost & loved) are in Discover
  const guideCategories = [
    {
      title: 'Best Bars',
      description: 'Cocktail lounges, dive bars, and neighborhood favorites',
      href: `/${slug}/bars`,
      gradient: 'from-indigo-600 to-indigo-900',
    },
    {
      title: 'Best Restaurants',
      description: 'From fine dining to neighborhood spots, the city\'s culinary highlights',
      href: `/${slug}/restaurants`,
      gradient: 'from-amber-600 to-amber-900',
    },
    {
      title: 'Best Coffee Shops',
      description: 'Local roasters, cozy cafes, and third wave coffee',
      href: `/${slug}/coffee-shops`,
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
                  {/* Gradient Side */}
                  <div className={`md:w-2/5 h-64 md:h-full bg-gradient-to-br ${category.gradient}`} />

                  {/* Content */}
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 group-hover:text-accent-600 transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-neutral-600 text-lg leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="inline-flex items-center text-accent-600 font-semibold group-hover:gap-2 transition-all">
                      Explore
                      <svg
                        className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
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
                Every spot in this guide has been personally visited and vetted. We don't accept
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

      <Footer />
    </>
  )
}
