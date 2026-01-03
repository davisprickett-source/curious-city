// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined' && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Predefined event trackers for common actions
export const trackShare = (platform: string, content: string) => {
  event('share', 'engagement', `${platform}: ${content}`)
}

export const trackFilter = (filterType: string, filterValue: string) => {
  event('filter', 'interaction', `${filterType}: ${filterValue}`)
}

export const trackCitySwitch = (fromCity: string, toCity: string) => {
  event('city_switch', 'navigation', `${fromCity} → ${toCity}`)
}

export const trackContentView = (contentType: string, contentTitle: string) => {
  event('content_view', 'engagement', `${contentType}: ${contentTitle}`)
}

export const trackMapInteraction = (action: string, location?: string) => {
  event('map_interaction', 'engagement', location ? `${action}: ${location}` : action)
}

export const trackScrollDepth = (depth: number) => {
  event('scroll_depth', 'engagement', `${depth}%`, depth)
}

export const trackEmailSignup = (source: string) => {
  event('email_signup', 'conversion', source)
}

export const trackAdView = (adPosition: string) => {
  event('ad_view', 'monetization', adPosition)
}

export const trackAdClick = (adPosition: string) => {
  event('ad_click', 'monetization', adPosition)
}

// Track ad impressions with network info
export const trackAdImpression = (data: {
  slotId: string
  network: string
  size: string
}) => {
  event(
    'ad_impression',
    'monetization',
    `${data.network}:${data.size}:${data.slotId}`
  )
}

export const trackExternalLink = (url: string, label: string) => {
  event('external_link', 'navigation', `${label}: ${url}`)
}
