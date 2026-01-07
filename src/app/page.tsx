import Link from 'next/link'
import { getAllCities } from '@/data/cities'
import { Header, Footer } from '@/components'
import { OrganizationSchema, WebsiteSchema } from '@/components/StructuredData'
import { MasonryGrid } from '@/components/layout/MasonryGrid'
import { PageCard } from '@/components/cards/PageCard'
import { curateLandingPageContent } from '@/lib/content/landingPageCurator'
import { HeroCarousel } from '@/components/landing/HeroCarousel'
import { ThemeSection } from '@/components/landing/ThemeSection'
import { SectionHeader } from '@/components/landing/SectionHeader'
import { UniversalAd } from '@/components/ads/UniversalAd'
import { createAdSlot } from '@/lib/ads/slots'

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

      <Header />

      <main className="flex-1">
        {/* Hero Carousel - Auto-rotating featured content */}
        <HeroCarousel slides={curatedContent.heroSlides} />

        {/* Ad Placement #1 - Leaderboard after hero */}
        <div id="content" className="container-page py-8">
          <UniversalAd
            slot={createAdSlot('landing-hero-leaderboard', 'leaderboard', {
              page: 'landing',
              position: 'hero',
            })}
            className="mx-auto"
          />
        </div>

        {/* Dark Stories Section */}
        <ThemeSection theme="dark">
          <SectionHeader
            eyebrow="CHILLING TALES"
            title="Dark Stories"
            description="Unsolved mysteries, true crime, and the darker chapters of American history"
            link={{
              href: '/category/dark-history',
              text: 'View All',
            }}
            theme="light"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 auto-rows-fr">
            {curatedContent.darkStories.map((page, index) => (
              <PageCard
                key={page.href}
                data={page}
                variant="featured"
                index={index}
                priority={index < 2}
              />
            ))}
          </div>
        </ThemeSection>

        {/* Curiosities Section */}
        <ThemeSection theme="discovery">
          <SectionHeader
            eyebrow="STRANGE BUT TRUE"
            title="Local Curiosities"
            description="The weird, wonderful, and downright bizarre things that make each city unique"
            link={{
              href: '/category/curiosities',
              text: 'See More',
            }}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 auto-rows-fr">
            {curatedContent.curiosities.map((page, index) => (
              <PageCard
                key={page.href}
                data={page}
                variant="featured"
                index={index}
              />
            ))}
          </div>
        </ThemeSection>

        {/* Ad Placement #2 - Rectangle between sections */}
        <div className="container-page py-8">
          <UniversalAd
            slot={createAdSlot('landing-section1-rectangle', 'rectangle', {
              page: 'landing',
              position: 'section1',
            })}
            className="mx-auto"
          />
        </div>

        {/* Hidden Discoveries Section */}
        <ThemeSection theme="discovery">
          <SectionHeader
            eyebrow="OFF THE BEATEN PATH"
            title="Hidden Discoveries"
            description="Fascinating curiosities and secret spots you won't find in guidebooks"
            link={{
              href: '/category/hidden-gems',
              text: 'Explore More',
            }}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 auto-rows-fr">
            {curatedContent.discoveries.map((page, index) => (
              <PageCard
                key={page.href}
                data={page}
                variant="featured"
                index={index}
              />
            ))}
          </div>
        </ThemeSection>

        {/* Ad Placement #3 - Banner between sections */}
        <div className="container-page py-8">
          <UniversalAd
            slot={createAdSlot('landing-section2-banner', 'banner', {
              page: 'landing',
              position: 'section2',
            })}
            className="mx-auto"
          />
        </div>

        {/* Lost Landmarks Section */}
        <ThemeSection theme="nostalgic">
          <SectionHeader
            eyebrow="NOSTALGIA"
            title="Lost Landmarks"
            description="Beloved places and cherished memories from cities' golden eras"
            link={{
              href: '/category/lost-and-loved',
              text: 'Remember More',
            }}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 auto-rows-fr">
            {curatedContent.lostLandmarks.map((page, index) => (
              <PageCard
                key={page.href}
                data={page}
                variant="featured"
                index={index}
              />
            ))}
          </div>
        </ThemeSection>

        {/* Ad Placement #4 - Rectangle before more stories */}
        <div className="container-page py-8">
          <UniversalAd
            slot={createAdSlot('landing-section3-rectangle', 'rectangle', {
              page: 'landing',
              position: 'section3',
            })}
            className="mx-auto"
          />
        </div>

        {/* More Stories Grid - Compact cards */}
        <div className="container-page section-spacing">
          <section>
            <SectionHeader
              title="More Stories to Explore"
              description="Discover more fascinating content from cities across America"
            />

            <MasonryGrid
              columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 3,
              }}
            >
              {curatedContent.moreStories.map((page, index) => (
                <PageCard
                  key={page.href}
                  data={page}
                  variant="compact"
                  index={index}
                />
              ))}
            </MasonryGrid>
          </section>
        </div>

        {/* Ad Placement #5 - Leaderboard before cities */}
        <div className="container-page py-8">
          <UniversalAd
            slot={createAdSlot('landing-bottom-leaderboard', 'leaderboard', {
              page: 'landing',
              position: 'bottom',
            })}
            className="mx-auto"
          />
        </div>

        {/* Cities Explorer Section - Redesigned */}
        <div className="bg-gradient-to-b from-neutral-50 to-white border-t border-neutral-200">
          <div className="container-page section-spacing py-16">
            <section>
              <SectionHeader
                title="Explore Cities"
                description="Choose a city to discover its hidden stories, local secrets, and fascinating history"
              />

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="group block p-6 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-accent-700 transition-colors mb-2">
                      {city.name}
                    </h3>
                    {city.tagline && (
                      <p className="text-sm text-neutral-600 mb-4">{city.tagline}</p>
                    )}
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 group-hover:gap-3 transition-all">
                      Explore
                      <svg
                        className="w-4 h-4"
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
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Ad Placement #6 - Banner in footer area */}
        <div className="bg-neutral-50 border-t border-neutral-200">
          <div className="container-page py-8">
            <UniversalAd
              slot={createAdSlot('landing-footer-banner', 'banner', {
                page: 'landing',
                position: 'footer',
              })}
              className="mx-auto"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
