import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (!resendApiKey || !audienceId) {
      console.error('[Newsletter] Missing RESEND_API_KEY or RESEND_AUDIENCE_ID')
      // Still accept the signup but log the issue
      console.log('[Newsletter Signup - Not Saved]', { email, timestamp: new Date().toISOString() })
      return NextResponse.json({ success: true })
    }

    // Add contact to Resend audience
    const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('[Newsletter] Resend error:', response.status, errorData)

      // If contact already exists, that's fine
      if (errorData.message?.includes('already exists')) {
        return NextResponse.json({ success: true, message: 'Already subscribed' })
      }

      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }

    console.log('[Newsletter] Subscriber added:', email)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Newsletter] Error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
