'use client'

import { useState } from 'react'
import { CITY_METADATA } from '@/data/cities'

interface NewsletterSignupProps {
  currentCity?: string
  variant?: 'default' | 'compact'
}

export function NewsletterSignup({ currentCity, variant = 'default' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [selectedCity, setSelectedCity] = useState(currentCity || '')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Dummy handler - just show success state
    if (email) {
      setSubmitted(true)
      // Reset after 3 seconds for demo
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  if (variant === 'compact') {
    return (
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
        {submitted ? (
          <p className="text-sm text-accent-600 font-medium">Thanks! We'll be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-accent-600 rounded-lg hover:bg-accent-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    )
  }

  return (
    <section className="bg-accent-50 border border-accent-200 rounded-xl p-6 md:p-8">
      <div className="max-w-xl">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
          Stay curious
        </h3>
        <p className="text-neutral-600 text-sm mb-4">
          Get the best stories, hidden gems, and local secrets delivered to your inbox.
        </p>

        {submitted ? (
          <div className="bg-white border border-accent-200 rounded-lg p-4">
            <p className="text-accent-700 font-medium">
              You're in. Watch your inbox for curious things.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white"
                required
              />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white text-neutral-700"
              >
                <option value="">All cities</option>
                {CITY_METADATA.map((city) => (
                  <option key={city.slug} value={city.slug}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 font-medium text-white bg-accent-600 rounded-lg hover:bg-accent-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-neutral-500 mt-3">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
