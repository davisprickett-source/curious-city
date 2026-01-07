import { getCity, getAllCitySlugs } from '@/data/cities'
import { getArticlesForCity } from '@/lib/queries/articles'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { PremiumArticleCard } from '@/components/PremiumArticleCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Force dynamic rendering since we use client components with useSearchParams
export const dynamic = 'force-dynamic'

interface DiscoverPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: DiscoverPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)
  if (!city) return {}

  return {
    title: `Discover ${city.name} - Interactive Experiences - The Curious City`,
    description: `Explore ${city.name} through interactive experiences - curiosities, dark history, photo galleries, and more.`,
  }
}

export default async function DiscoverPage({ params }: DiscoverPageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)
  if (!city) notFound()

  // Fetch articles for this city
  const articles = await getArticlesForCity(slug, { limit: 20 })

  const experiences = [
    {
      title: 'Curiosities',
      description: 'Fascinating facts and peculiar details',
      href: `/${slug}/curiosities`,
    },
    {
      title: 'Dark History',
      description: 'Unsolved mysteries and forgotten crimes',
      href: `/${slug}/dark-history`,
    },
    // Scenes hidden for v1 launch
    // {
    //   title: 'Scenes',
    //   description: 'Photo and video galleries',
    //   href: `/${slug}/scenes`,
    // },
  ]

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="discover"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
          <div className="container-page py-16 md:py-24">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Discover {city.name}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
                Stories, guides, and experiences that bring the city to life
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Experiences - Quick Access */}
        <div className="bg-neutral-50 border-b border-neutral-200">
          <div className="container-page py-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {experiences.map((experience) => (
                <Link
                  key={experience.href}
                  href={experience.href}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-full hover:border-accent-600 hover:shadow-md transition-all duration-300"
                >
                  <span className="font-semibold text-neutral-900 group-hover:text-accent-600 transition-colors">
                    {experience.title}
                  </span>
                  <svg
                    className="w-4 h-4 text-neutral-400 group-hover:text-accent-600 group-hover:translate-x-0.5 transition-all"
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
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Feed */}
        {articles.length > 0 ? (
          <div className="container-page py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
                  Latest Articles
                </h2>
                <p className="text-lg text-neutral-600">
                  Deep dives, guides, and stories about {city.name}
                </p>
              </div>

              <div className="space-y-12">
                {articles.map((article, index) => (
                  <PremiumArticleCard
                    key={article.slug}
                    article={article}
                    citySlug={slug}
                    index={index}
                  />
                ))}
              </div>

              {/* View All Link */}
              <div className="mt-16 text-center">
                <Link
                  href={`/${slug}/articles`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full font-semibold hover:bg-accent-600 transition-colors duration-300"
                >
                  View All Articles
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5-5 5M6 12h12"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-page py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Articles Coming Soon
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                We're working on bringing you the best stories and guides about {city.name}.
                In the meantime, explore our interactive experiences.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {experiences.map((experience) => (
                  <Link
                    key={experience.href}
                    href={experience.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full font-semibold hover:bg-accent-600 transition-colors"
                  >
                    {experience.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
