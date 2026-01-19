'use client'

import { useState } from 'react'

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'dark'
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export function NewsletterSignup({ variant = 'default' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  const submitted = status === 'success'
  const isSubmitting = status === 'submitting'

  // Compact inline variant
  if (variant === 'compact') {
    return (
      <div className="pt-6">
        {submitted ? (
          <p className="text-sm text-[#c65d3b] font-medium">You&apos;re in! Watch your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c65d3b]/30 focus:border-[#c65d3b]"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-white bg-[#c65d3b] rounded-lg hover:bg-[#a54d30] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
        )}
      </div>
    )
  }

  // Dark background variant (for hidden gems, etc.)
  if (variant === 'dark') {
    return (
      <div>
        <h4 className="text-xl font-bold text-white mb-2">Stay curious</h4>
        <p className="text-sm text-neutral-300 mb-4">New stories and hidden gems delivered to your inbox.</p>
        {submitted ? (
          <p className="text-sm text-[#c65d3b] font-medium">You&apos;re in! Watch your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#c65d3b]/50 focus:border-[#c65d3b]"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 text-sm font-medium text-white bg-[#c65d3b] rounded-lg hover:bg-[#a54d30] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-400 mt-2">{errorMessage}</p>
        )}
        <p className="text-xs text-neutral-400 mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    )
  }

  // Default variant - clean, minimal
  return (
    <div className="border-t border-neutral-200 pt-8">
      <h4 className="text-lg font-bold text-neutral-900 mb-2">Stay curious</h4>
      <p className="text-sm text-neutral-600 mb-4">
        Get the best stories, hidden gems, and local secrets delivered to your inbox.
      </p>

      {submitted ? (
        <p className="text-[#c65d3b] font-medium">
          You&apos;re in. Watch your inbox for curious things.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c65d3b]/30 focus:border-[#c65d3b]"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 font-medium text-white bg-[#c65d3b] rounded-lg hover:bg-[#a54d30] transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
      )}

      <p className="text-xs text-neutral-500 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  )
}
