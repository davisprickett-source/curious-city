import { Header, Footer } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - The Curious City',
  description: 'Learn about The Curious City - Your guide to the hidden stories, dark history, and local secrets of American cities.',
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 mb-6">About The Curious City</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Our Mission</h2>
                <p className="text-neutral-700 mb-4 text-lg leading-relaxed">
                  The Curious City is dedicated to uncovering and sharing the untold stories that make American cities fascinating. We believe every city has layers of history, hidden gems, and curious tales waiting to be discovered by those willing to look beyond the surface.
                </p>
                <p className="text-neutral-700 mb-4 text-lg leading-relaxed">
                  Our mission is to be your guide to the curious side of urban life—from dark history and forgotten mysteries to the best local establishments that locals actually love.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">What We Cover</h2>
                <p className="text-neutral-700 mb-4">
                  The Curious City explores cities through multiple lenses:
                </p>

                <div className="grid gap-6 md:grid-cols-2 my-6">
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Dark History</h3>
                    <p className="text-neutral-700 text-sm">
                      Unsolved mysteries, forgotten crimes, and the macabre events that shaped our cities.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Curiosities</h3>
                    <p className="text-neutral-700 text-sm">
                      Fascinating facts, underground secrets, and the peculiar details that make each city unique.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Hidden Gems</h3>
                    <p className="text-neutral-700 text-sm">
                      The spots locals know but tourists don't—from speakeasies to secret gardens.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Local Favorites</h3>
                    <p className="text-neutral-700 text-sm">
                      Curated guides to the best restaurants, bars, and coffee shops that define local culture.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">History Essays</h3>
                    <p className="text-neutral-700 text-sm">
                      Deep-dive narratives exploring the pivotal moments and characters that built our cities.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Lost & Loved</h3>
                    <p className="text-neutral-700 text-sm">
                      Celebrating beloved places that are gone but not forgotten—the establishments that defined an era.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Our Approach</h2>
                <p className="text-neutral-700 mb-4">
                  We combine rigorous research with engaging storytelling. Each article is:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li><strong>Well-researched:</strong> We cite our sources and dig into archives, historical records, and local accounts</li>
                  <li><strong>Authentically local:</strong> We focus on what makes each city genuinely unique, not tourist clichés</li>
                  <li><strong>Thoughtfully curated:</strong> Every recommendation reflects quality and character, not just popularity</li>
                  <li><strong>Visually rich:</strong> We use historical photos, maps, and multimedia to bring stories to life</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Cities We Cover</h2>
                <p className="text-neutral-700 mb-4">
                  We're building comprehensive guides for cities across America, currently featuring:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
                  <div className="text-neutral-700">Minneapolis</div>
                  <div className="text-neutral-700">Chicago</div>
                  <div className="text-neutral-700">Portland</div>
                  <div className="text-neutral-700">Denver</div>
                  <div className="text-neutral-700">Phoenix</div>
                  <div className="text-neutral-700">Salt Lake City</div>
                  <div className="text-neutral-700">Raleigh</div>
                  <div className="text-neutral-700">Dallas</div>
                  <div className="text-neutral-700">Tampa</div>
                  <div className="text-neutral-700">Fargo</div>
                  <div className="text-neutral-700">Colorado Springs</div>
                  <div className="text-neutral-700">Anchorage</div>
                </div>
                <p className="text-neutral-700 mb-4 italic">
                  We're constantly expanding. Is your city next? Let us know!
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Why "The Curious City"?</h2>
                <p className="text-neutral-700 mb-4">
                  Cities are endlessly curious—both in the sense that they inspire curiosity and in that they contain curious (peculiar, fascinating, strange) elements around every corner. We believe the best way to experience a city is with an open mind and a curious spirit.
                </p>
                <p className="text-neutral-700 mb-4">
                  Whether you're a longtime resident looking to see your city with fresh eyes, a visitor seeking authentic experiences, or simply someone who loves urban history and culture, The Curious City is your companion for discovery.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Support Independent Media</h2>
                <p className="text-neutral-700 mb-4">
                  The Curious City is independently operated and supported by our readers. We display tasteful advertisements to keep our content free and accessible to everyone. We never compromise our editorial integrity—our recommendations are based on quality and authenticity, not payment.
                </p>
                <p className="text-neutral-700 mb-4">
                  If you find our content valuable, the best way to support us is to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>Share articles with friends and on social media</li>
                  <li>Visit the local establishments we recommend</li>
                  <li>Subscribe to our newsletter for weekly discoveries</li>
                  <li>Follow us on social media for daily curiosities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Get in Touch</h2>
                <p className="text-neutral-700 mb-4">
                  We love hearing from curious minds! Whether you have:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>A story tip or hidden gem to share</li>
                  <li>Corrections or additional historical context</li>
                  <li>Questions about our content</li>
                  <li>Partnership or collaboration inquiries</li>
                  <li>Feedback to make us better</li>
                </ul>
                <p className="text-neutral-700 mb-4">
                  Please reach out at{' '}
                  <a href="mailto:info@thecurious.city" className="text-accent-600 hover:text-accent-700 underline font-medium">
                    info@thecurious.city
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Stay Curious</h2>
                <p className="text-neutral-700 mb-4 text-lg font-medium">
                  Every city has secrets. We're here to help you find them.
                </p>
                <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-r-lg mt-6">
                  <p className="text-neutral-900 font-semibold mb-2">Explore. Discover. Share.</p>
                  <p className="text-neutral-700 text-sm">
                    The Curious City—Where every street has a story.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
