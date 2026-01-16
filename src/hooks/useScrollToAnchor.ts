'use client'

import { useEffect } from 'react'

/**
 * Hook that scrolls to an element when the page loads with a hash anchor in the URL.
 * Call this in page components that support deep linking to entries.
 *
 * @param delay - Optional delay in ms before scrolling (useful if content loads async)
 */
export function useScrollToAnchor(delay: number = 100) {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const scrollToElement = () => {
      const elementId = hash.slice(1) // Remove the # prefix
      const element = document.getElementById(elementId)

      if (element) {
        // Add small offset to account for fixed headers
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    // Delay to ensure content has rendered
    const timeoutId = setTimeout(scrollToElement, delay)

    return () => clearTimeout(timeoutId)
  }, [delay])
}
