import { getAllCities } from '@/data/cities'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { OrganizationSchema, WebsiteSchema } from '@/components/StructuredData'
import { curateLandingPageContent } from '@/lib/content/landingPageCurator'
import { LandingHeroSection } from '@/components/landing/LandingHeroSection'
import { HorizontalScrollSection } from '@/components/city/HorizontalScrollSection'
import { LandingScrollCard } from '@/components/cards/LandingScrollCard'
import { ArticleScrollCard } from '@/components/cards/ArticleScrollCard'
import { CityScrollCard } from '@/components/cards/CityScrollCard'

export default async function HomePage() {
  const cities = await getAllCities()
  const curatedContent = await curateLandingPageContent()

  return (
    <>
      <OrganizationSchema
        name="Curious City"
        url="https://thecurious.city"
        logo="https://thecurious.city/icon.png"
        description="Discover the untold stories, hidden gems, dark history, and local secrets of cities across America."
      />
      <WebsiteSchema
        name="Curious City"
        url="https://thecurious.city"
        description="Local content for curious people. History, guides, and hidden gems from cities across America."
      />

      <div className="city-page-wrapper">
        <UnifiedNav />

        {/* Hero Section with featured content carousel */}
        <LandingHeroSection slides={curatedContent.heroSlides} />

      <main className="flex-1 bg-white">
        {/* Featured Articles Section */}
        {curatedContent.featuredArticles.length > 0 && (
          <HorizontalScrollSection
            title="Featured Articles"
            eyebrow="Deep Dives"
            description="Longform stories exploring the untold histories and hidden secrets of American cities"
            viewAllLink={{
              href: '/articles',
              text: 'View all articles',
            }}
          >
            {curatedContent.featuredArticles.map((article, index) => (
              <ArticleScrollCard
                key={article.href}
                article={article}
                index={index}
              />
            ))}
          </HorizontalScrollSection>
        )}

        {/* Dark History Section */}
        {curatedContent.darkStories.length > 0 && (
          <HorizontalScrollSection
            title="Dark History"
            eyebrow="Chilling Tales"
            description="Unsolved mysteries, true crime, and the darker chapters of American history"
            viewAllLink={{
              href: '/category/dark-history',
              text: 'View all dark history',
            }}
          >
            {curatedContent.darkStories.map((page, index) => (
              <LandingScrollCard
                key={page.href}
                data={page}
                index={index}
              />
            ))}
          </HorizontalScrollSection>
        )}

        {/* Curiosities Section */}
        {curatedContent.curiosities.length > 0 && (
          <HorizontalScrollSection
            title="Local Curiosities"
            eyebrow="Strange But True"
            description="The weird, wonderful, and downright bizarre things that make each city unique"
            className="bg-neutral-50"
            viewAllLink={{
              href: '/category/curiosities',
              text: 'View all curiosities',
            }}
          >
            {curatedContent.curiosities.map((page, index) => (
              <LandingScrollCard
                key={page.href}
                data={page}
                index={index}
              />
            ))}
          </HorizontalScrollSection>
        )}

        {/* Hidden Gems Section */}
        {curatedContent.discoveries.length > 0 && (
          <HorizontalScrollSection
            title="Hidden Gems"
            eyebrow="Off The Beaten Path"
            description="Secret spots and fascinating discoveries you won't find in guidebooks"
            viewAllLink={{
              href: '/category/hidden-gems',
              text: 'View all hidden gems',
            }}
          >
            {curatedContent.discoveries.map((page, index) => (
              <LandingScrollCard
                key={page.href}
                data={page}
                index={index}
              />
            ))}
          </HorizontalScrollSection>
        )}

        {/* Lost & Loved Section */}
        {curatedContent.lostLandmarks.length > 0 && (
          <HorizontalScrollSection
            title="Lost & Loved"
            eyebrow="Nostalgia"
            description="Beloved places and cherished memories from cities' golden eras"
            className="bg-neutral-50"
            viewAllLink={{
              href: '/category/lost-and-loved',
              text: 'View all lost landmarks',
            }}
          >
            {curatedContent.lostLandmarks.map((page, index) => (
              <LandingScrollCard
                key={page.href}
                data={page}
                index={index}
              />
            ))}
          </HorizontalScrollSection>
        )}

        {/* Cities Section */}
        {cities.length > 0 && (
          <HorizontalScrollSection
            title="Explore Cities"
            eyebrow="Journey"
            description="Choose a city to discover its hidden stories and local secrets"
            viewAllLink={{
              href: '/cities',
              text: 'View all cities',
            }}
          >
            {cities.map((city, index) => (
              <CityScrollCard
                key={city.slug}
                city={city}
                index={index}
              />
            ))}
          </HorizontalScrollSection>
        )}
      </main>

        <Footer />
      </div>
    </>
  )
}
