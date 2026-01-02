import { Header, Footer } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - The Curious City',
  description: 'Get in touch with The Curious City - Share tips, ask questions, or connect with our team.',
}

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 mb-6">Contact Us</h1>
            <p className="text-lg text-neutral-600 mb-8">
              We'd love to hear from you! Whether you have a story tip, question, or just want to say hello, we're all ears.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Email Card */}
              <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-accent-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-neutral-900">Email</h2>
                </div>
                <p className="text-neutral-600 mb-3 text-sm">
                  Send us a message and we'll respond as soon as possible.
                </p>
                <a
                  href="mailto:info@thecurious.city"
                  className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center gap-1 group"
                >
                  info@thecurious.city
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Website Card */}
              <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-accent-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-neutral-900">Website</h2>
                </div>
                <p className="text-neutral-600 mb-3 text-sm">
                  Explore cities and discover hidden stories.
                </p>
                <a
                  href="https://thecurious.city"
                  className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center gap-1 group"
                >
                  thecurious.city
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">What to Contact Us About</h2>

                <div className="space-y-6">
                  <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-accent-500">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">📍 Story Tips & Hidden Gems</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      Know a fascinating local story we haven't covered? Have a hidden gem to share? We're always looking for new angles and undiscovered places.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">📚 Historical Corrections & Context</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      If you have additional information, corrections, or historical context for our articles, we want to hear from you. Accuracy matters.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">🏪 Business Listings</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      Restaurant, bar, or coffee shop owner? While we discover most places independently, you're welcome to share updates about your establishment.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">🤝 Partnerships & Collaborations</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      Interested in partnering with The Curious City? We're open to collaborations with local organizations, tourism boards, and media outlets.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">💼 Press & Media Inquiries</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      Journalists and media professionals: we're happy to provide interviews, expert commentary, or access to our research.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">⚖️ Legal & Copyright</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      For copyright concerns, DMCA notices, or other legal matters, please email us with "LEGAL" in the subject line.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-neutral-400">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">💬 General Feedback</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      Have thoughts on how we can improve? Found a bug on the site? We appreciate all feedback, positive or constructive.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Response Time</h2>
                <p className="text-neutral-700 mb-4">
                  We typically respond to emails within 2-3 business days. If your inquiry is time-sensitive, please mention that in your subject line.
                </p>
                <p className="text-neutral-700 mb-4">
                  For the fastest response, please include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-1">
                  <li>A clear subject line describing your inquiry</li>
                  <li>Relevant links or references (if applicable)</li>
                  <li>Your preferred contact method for our response</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Stay Connected</h2>
                <p className="text-neutral-700 mb-4">
                  Don't want to wait for a response? Stay up to date with our latest discoveries:
                </p>
                <div className="bg-accent-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">Newsletter</h3>
                  <p className="text-neutral-700 mb-4 text-sm">
                    Subscribe to our weekly newsletter for hidden gems, dark history, and local secrets delivered straight to your inbox.
                  </p>
                  <p className="text-sm text-neutral-500 italic">Coming soon!</p>
                </div>
              </section>

              <section>
                <div className="bg-neutral-100 border border-neutral-200 rounded-xl p-8 text-center">
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-3">Ready to Reach Out?</h2>
                  <p className="text-neutral-600 mb-6">
                    We're excited to hear from you!
                  </p>
                  <a
                    href="mailto:info@thecurious.city"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white font-medium rounded-lg hover:bg-accent-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Us an Email
                  </a>
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
