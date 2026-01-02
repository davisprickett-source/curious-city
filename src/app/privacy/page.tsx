import { Header, Footer } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - The Curious City',
  description: 'Privacy policy for The Curious City - Learn how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Privacy Policy</h1>
            <p className="text-sm text-neutral-500 mb-8">Last Updated: January 2, 2026</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Introduction</h2>
                <p className="text-neutral-700 mb-4">
                  Welcome to The Curious City ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you understand how we collect, use, and safeguard your information when you visit our website at thecurious.city (the "Site").
                </p>
                <p className="text-neutral-700 mb-4">
                  This Privacy Policy explains our practices regarding the collection, use, and disclosure of information we receive through the Site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Information We Collect</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Automatically Collected Information</h3>
                <p className="text-neutral-700 mb-4">
                  When you visit our Site, we automatically collect certain information about your device and browsing behavior, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website or source</li>
                  <li>Date and time of visit</li>
                  <li>Geographic location (city/region level)</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Cookies and Tracking Technologies</h3>
                <p className="text-neutral-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our Site. These include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our Site (Google Analytics)</li>
                  <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements (Google AdSense)</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Information You Provide</h3>
                <p className="text-neutral-700 mb-4">
                  If you choose to contact us or subscribe to our newsletter, we collect:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>Email address</li>
                  <li>Name (if provided)</li>
                  <li>Any information included in your message</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">How We Use Your Information</h2>
                <p className="text-neutral-700 mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>To operate and maintain the Site</li>
                  <li>To understand how visitors use our Site and improve user experience</li>
                  <li>To analyze trends and gather demographic information</li>
                  <li>To deliver relevant advertisements</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send newsletters or updates (only if you've subscribed)</li>
                  <li>To detect, prevent, and address technical issues or fraud</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Third-Party Services</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Google Analytics</h3>
                <p className="text-neutral-700 mb-4">
                  We use Google Analytics to analyze how visitors use our Site. Google Analytics collects information anonymously and reports website trends without identifying individual visitors. You can opt out of Google Analytics by installing the{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent-600 hover:text-accent-700 underline" target="_blank" rel="noopener noreferrer">
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Google AdSense</h3>
                <p className="text-neutral-700 mb-4">
                  We use Google AdSense to display advertisements on our Site. Google uses cookies to serve ads based on your prior visits to our Site or other websites. You can opt out of personalized advertising by visiting{' '}
                  <a href="https://www.google.com/settings/ads" className="text-accent-600 hover:text-accent-700 underline" target="_blank" rel="noopener noreferrer">
                    Google's Ads Settings
                  </a>.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">External Links</h3>
                <p className="text-neutral-700 mb-4">
                  Our Site may contain links to external websites not operated by us. We are not responsible for the privacy practices of these third-party sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Data Security</h2>
                <p className="text-neutral-700 mb-4">
                  We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Your Rights and Choices</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Cookie Control</h3>
                <p className="text-neutral-700 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can choose to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
                  <li>Block all cookies</li>
                  <li>Accept only first-party cookies</li>
                  <li>Delete cookies after each browsing session</li>
                </ul>
                <p className="text-neutral-700 mb-4">
                  Note that blocking cookies may affect your experience on our Site.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Email Unsubscribe</h3>
                <p className="text-neutral-700 mb-4">
                  If you've subscribed to our newsletter, you can unsubscribe at any time by clicking the "unsubscribe" link at the bottom of any email we send, or by contacting us at{' '}
                  <a href="mailto:info@thecurious.city" className="text-accent-600 hover:text-accent-700 underline">
                    info@thecurious.city
                  </a>.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Do Not Track</h3>
                <p className="text-neutral-700 mb-4">
                  Some browsers include a "Do Not Track" feature. Our Site does not currently respond to Do Not Track signals.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Children's Privacy</h2>
                <p className="text-neutral-700 mb-4">
                  Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">California Privacy Rights</h2>
                <p className="text-neutral-700 mb-4">
                  If you are a California resident, you have the right to request information about the categories of personal information we collect and how we use it. You also have the right to request deletion of your personal information. To exercise these rights, contact us at{' '}
                  <a href="mailto:info@thecurious.city" className="text-accent-600 hover:text-accent-700 underline">
                    info@thecurious.city
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">International Users</h2>
                <p className="text-neutral-700 mb-4">
                  Our Site is operated in the United States. If you are visiting from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our Site, you consent to this transfer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-neutral-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Us</h2>
                <p className="text-neutral-700 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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
