import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const SUBJECT_LABELS: Record<string, string> = {
  'story-tip': 'Story Tip or Hidden Gem',
  'correction': 'Historical Correction',
  'business': 'Business Listing',
  'partnership': 'Partnership Inquiry',
  'press': 'Press & Media',
  'feedback': 'General Feedback',
  'other': 'Other',
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Get the subject label
    const subjectLabel = SUBJECT_LABELS[data.subject] || data.subject

    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error('[Contact API] RESEND_API_KEY not configured')
      // Still accept the form but warn in logs
      console.log('[Contact Form Submission - No Email Sent]', {
        name: data.name,
        email: data.email,
        subject: subjectLabel,
        message: data.message,
        timestamp: new Date().toISOString(),
      })
      // Return success so user doesn't see error, but log the issue
      return NextResponse.json({ success: true })
    }

    console.log('[Contact API] Sending email via Resend...')

    // Send email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Curious City <contact@thecurious.city>',
        to: ['info@thecurious.city'],
        reply_to: data.email,
        subject: `[Contact] ${subjectLabel} - from ${data.name}`,
        html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #c65d3b; margin-bottom: 24px; font-size: 24px;">New Contact Form Submission</h2>

  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 100px; color: #333;">Name:</td>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${data.name}</td>
    </tr>
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Email:</td>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}" style="color: #c65d3b;">${data.email}</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Subject:</td>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${subjectLabel}</td>
    </tr>
  </table>

  <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; border-left: 4px solid #c65d3b;">
    <h3 style="margin: 0 0 12px 0; color: #333; font-size: 16px;">Message:</h3>
    <p style="white-space: pre-wrap; color: #555; margin: 0; line-height: 1.6;">${data.message}</p>
  </div>

  <p style="color: #999; font-size: 12px; margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
    Sent from the contact form at <a href="https://thecurious.city" style="color: #c65d3b;">thecurious.city</a>
  </p>
</div>
        `.trim(),
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('[Contact API] Resend error:', response.status, errorData)
      return NextResponse.json(
        { error: `Email service error: ${errorData.message || 'Unknown error'}` },
        { status: 500 }
      )
    }

    console.log('[Contact API] Email sent successfully')
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact API] Error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}
