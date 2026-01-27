'use client'

/**
 * Mobile scroll fix - light touch approach
 * Clears inline styles on mobile so CSS !important rules can work
 * Runs immediately via inline script to prevent flash of broken scroll
 */
export function MobileScrollFix() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Detect mobile
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

            if (isMobile) {
              // Clear any inline styles that might block scroll
              // Let CSS !important rules in globals.css handle the rest
              function clearScrollBlockingStyles() {
                // Remove inline overflow styles so CSS can take over
                document.documentElement.style.removeProperty('overflow');
                document.documentElement.style.removeProperty('overflow-y');
                document.documentElement.style.removeProperty('height');
                document.body.style.removeProperty('overflow');
                document.body.style.removeProperty('overflow-y');
                document.body.style.removeProperty('height');
                document.body.style.removeProperty('position');

                // Remove Lenis classes (shouldn't be on mobile)
                document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped');
                document.body.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped');
              }

              // Run immediately and after DOM loads
              clearScrollBlockingStyles();
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', clearScrollBlockingStyles);
              }
              // One delayed check in case scripts add styles
              setTimeout(clearScrollBlockingStyles, 500);
            }
          })();
        `,
      }}
    />
  )
}
