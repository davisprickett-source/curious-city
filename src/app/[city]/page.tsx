import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { Footer, RelatedCities } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import {
  getCityFeaturedEntries,
  getCityArticleSummaries,
  getCityListiclePages,
  getCityEstablishmentCategories,
} from '@/lib/content/cityHomepage'
import { CityHeroSection } from '@/components/city/CityHeroSection'
import { HorizontalScrollSection } from '@/components/city/HorizontalScrollSection'
import { ArticleScrollCard } from '@/components/cards/ArticleScrollCard'
import { ListicleTypeCard } from '@/components/cards/ListicleTypeCard'
import { EstablishmentCategoryCard } from '@/components/cards/EstablishmentCategoryCard'

interface CityPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `${city.name} | Curious City`,
    description: city.tagline || `Discover the untold stories, dark histories, and hidden secrets of ${city.name}`,
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  // Fetch all data for the new homepage layout
  const [
    featuredEntries,
    articles,
    listiclePages,
    establishmentCategories,
  ] = await Promise.all([
    getCityFeaturedEntries(slug),
    getCityArticleSummaries(slug),
    getCityListiclePages(slug),
    getCityEstablishmentCategories(slug),
  ])

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="articles"
      />

      {/* Hero Section with video and featured entries carousel */}
      <CityHeroSection
        city={city}
        featuredEntries={featuredEntries}
      />

      <main className="flex-1 bg-white">
        {/* Articles Section */}
        {articles.length > 0 && (
          <HorizontalScrollSection
            title="Articles"
            eyebrow="Deep Dives"
            description="Longform stories and essays exploring the city's history and culture"
            viewAllLink={{
              href: `/${city.slug}/articles`,
              text: 'View all articles',
            }}
          >
            {articles.map((article, index) => (
              <ArticleScrollCard
                key={article.slug}
                article={article}
                index={index}
              />
            ))}
          </HorizontalScrollSection>
        )}

        {/* Listicles Section (Discover) */}
        {listiclePages.length > 0 && (
          <HorizontalScrollSection
            title="Discover"
            eyebrow="Explore"
            description="Curated collections of curiosities, dark history, hidden gems, and more"
            className="bg-neutral-50"
          >
            {listiclePages.map((listicle, index) => (
              <ListicleTypeCard
                key={listicle.type}
                listicle={listicle}
                index={index}
              />
            ))}
          </HorizontalScrollSection>
        )}

        {/* Establishments Section (The Guide) */}
        {establishmentCategories.length > 0 && (
          <HorizontalScrollSection
            title="The Guide"
            eyebrow="Best Of"
            description="Our picks for the best bars, restaurants, and coffee shops"
            viewAllLink={{
              href: `/${city.slug}/guide`,
              text: 'View full guide',
            }}
          >
            {establishmentCategories.map((category, index) => (
              <EstablishmentCategoryCard
                key={category.category}
                category={category}
                index={index}
              />
            ))}
          </HorizontalScrollSection>
        )}

        {/* Related Cities */}
        <section className="py-16 bg-neutral-50">
          <div className="container-page">
            <RelatedCities currentCitySlug={slug} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
