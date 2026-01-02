import { Header, Footer } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - The Curious City',
  description: 'Terms of Service for The Curious City - Read our terms and conditions for using our website.',
}

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Terms of Service</h1>
            <p className="text-sm text-neutral-500 mb-8">Last Updated: January 2, 2026</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Agreement to Terms</h2>
                <p className="text-neutral-700 mb-4">
                  Welcome to The Curious City. By accessing or using our website at thecurious.city (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.
                </p>
                <p className="text-neutral-700 mb-4">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Site after changes are posted constitutes your acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Description of Service</h2>
                <p className="text-neutral-700 mb-4">
                  The Curious City provides curated content about cities across America, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>Historical articles and essays</li>
                  <li>Guides to hidden gems and local establishments</li>
                  <li>Dark history and curiosities</li>
                  <li>Event listings and city information</li>
                  <li>Restaurant, bar, and coffee shop recommendations</li>
                </ul>
                <p className="text-neutral-700 mb-4">
                  All content is provided for informational and entertainment purposes only.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Use of the Site</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Permitted Use</h3>
                <p className="text-neutral-700 mb-4">
                  You may use the Site for lawful, personal, non-commercial purposes. You agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>Access the Site only through approved interfaces</li>
                  <li>Respect all intellectual property rights</li>
                  <li>Not interfere with the Site's operation or security</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Prohibited Use</h3>
                <p className="text-neutral-700 mb-4">
                  You may not:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>Use the Site for any illegal purpose</li>
                  <li>Copy, reproduce, or distribute content without permission</li>
                  <li>Attempt to gain unauthorized access to any part of the Site</li>
                  <li>Use automated systems (bots, scrapers) to access the Site</li>
                  <li>Transmit viruses, malware, or harmful code</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Impersonate any person or entity</li>
                  <li>Collect personal information about other users</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Intellectual Property</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Our Content</h3>
                <p className="text-neutral-700 mb-4">
                  All content on the Site, including text, graphics, logos, images, videos, and software, is the property of The Curious City or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-neutral-700 mb-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content without our express written permission.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">User Contributions</h3>
                <p className="text-neutral-700 mb-4">
                  If you submit comments, suggestions, or other content to us, you grant us a non-exclusive, worldwide, royalty-free, perpetual license to use, reproduce, modify, and display such content.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Third-Party Content</h3>
                <p className="text-neutral-700 mb-4">
                  Some content on the Site may be sourced from third parties. We respect intellectual property rights and attribute content where appropriate. If you believe any content infringes your copyright, please contact us at{' '}
                  <a href="mailto:info@thecurious.city" className="text-accent-600 hover:text-accent-700 underline">
                    info@thecurious.city
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Disclaimers</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">"As Is" Basis</h3>
                <p className="text-neutral-700 mb-4">
                  THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Accuracy of Information</h3>
                <p className="text-neutral-700 mb-4">
                  While we strive for accuracy, we do not guarantee that all information on the Site is complete, accurate, current, or error-free. Content about establishments, events, and historical facts may become outdated or contain errors. We recommend verifying information independently before making decisions based on it.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">No Professional Advice</h3>
                <p className="text-neutral-700 mb-4">
                  The Site does not provide professional advice (legal, medical, financial, or otherwise). Content is for general informational purposes only and should not be relied upon as a substitute for professional consultation.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">External Links</h3>
                <p className="text-neutral-700 mb-4">
                  The Site may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is at your own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Limitation of Liability</h2>
                <p className="text-neutral-700 mb-4">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, THE CURIOUS CITY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>Your use or inability to use the Site</li>
                  <li>Any unauthorized access to or use of our servers</li>
                  <li>Any bugs, viruses, or similar issues transmitted through the Site</li>
                  <li>Any errors or omissions in content</li>
                  <li>Your reliance on content provided on the Site</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Indemnification</h2>
                <p className="text-neutral-700 mb-4">
                  You agree to indemnify, defend, and hold harmless The Curious City and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>Your use of the Site</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Any content you submit to the Site</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Advertising</h2>
                <p className="text-neutral-700 mb-4">
                  The Site displays advertisements provided by third-party advertising networks, including Google AdSense. We do not control the content of these advertisements and are not responsible for the products or services advertised.
                </p>
                <p className="text-neutral-700 mb-4">
                  Advertisers may use cookies and other tracking technologies. Your interactions with advertisements are subject to the advertiser's own privacy policies and terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Termination</h2>
                <p className="text-neutral-700 mb-4">
                  We reserve the right to terminate or suspend your access to the Site at any time, without notice, for any reason, including if we believe you have violated these Terms.
                </p>
                <p className="text-neutral-700 mb-4">
                  Upon termination, your right to use the Site will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including intellectual property provisions, disclaimers, and limitations of liability.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Governing Law</h2>
                <p className="text-neutral-700 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
                <p className="text-neutral-700 mb-4">
                  Any disputes arising from these Terms or your use of the Site shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court to prevent infringement of intellectual property rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Severability</h2>
                <p className="text-neutral-700 mb-4">
                  If any provision of these Terms is found to be invalid or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Entire Agreement</h2>
                <p className="text-neutral-700 mb-4">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and The Curious City regarding the use of the Site and supersede any prior agreements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Us</h2>
                <p className="text-neutral-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="text-neutral-900 font-semibold mb-2">The Curious City</p>
                  <p className="text-neutral-700">
                    Email:{' '}
                    <a href="mailto:info@thecurious.city" className="text-accent-600 hover:text-accent-700 underline">
                      info@thecurious.city
                    </a>
                  </p>
                  <p className="text-neutral-700">
                    Website:{' '}
                    <a href="https://thecurious.city" className="text-accent-600 hover:text-accent-700 underline">
                      thecurious.city
                    </a>
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
