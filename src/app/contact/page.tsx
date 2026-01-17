import { Header, Footer } from '@/components'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Curious City',
  description: 'Get in touch with Curious City - Share tips, ask questions, or connect with our team.',
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
              We&apos;d love to hear from you. Whether you have a story tip, question, or just want to say hello—reach out at{' '}
              <a href="mailto:info@thecurious.city" className="text-accent-600 hover:text-accent-700 underline font-medium">
                info@thecurious.city
              </a>
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">What to Contact Us About</h2>

                <div className="space-y-4">
                  <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-[#c65d3b]">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Story Tips & Hidden Gems</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      Know a fascinating local story we haven&apos;t covered? Have a hidden gem to share? We&apos;re always looking for new angles and undiscovered places.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-[#c65d3b]">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Historical Corrections & Context</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      If you have additional information, corrections, or historical context for our articles, we want to hear from you. Accuracy matters.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-[#c65d3b]">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Business Listings</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      Restaurant, bar, or coffee shop owner? While we discover most places independently, you&apos;re welcome to share updates about your establishment.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-[#c65d3b]">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Partnerships & Collaborations</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      Interested in partnering with Curious City? We&apos;re open to collaborations with local organizations, tourism boards, and media outlets.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-[#c65d3b]">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Press & Media Inquiries</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      Journalists and media professionals: we&apos;re happy to provide interviews, expert commentary, or access to our research.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-[#c65d3b]">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">General Feedback</h3>
                    <p className="text-neutral-700 text-sm mb-0">
                      Have thoughts on how we can improve? Found a bug on the site? We appreciate all feedback, positive or constructive.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Response Time</h2>
                <p className="text-neutral-700 mb-4">
                  We typically respond to emails within 2-3 business days. For the fastest response, include a clear subject line and any relevant links.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Stay Connected</h2>
                <p className="text-neutral-700 mb-6">
                  Get our best stories, hidden gems, and local secrets delivered to your inbox.
                </p>
                <div className="max-w-md">
                  <NewsletterSignup variant="default" />
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
