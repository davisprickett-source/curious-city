'use client'

/**
 * NUCLEAR OPTION: Force mobile scroll to work
 * This component aggressively ensures scrolling works on mobile devices
 * Runs immediately on mount with inline script
 */
export function MobileScrollFix() {
  return (
    <>
      {/* Inline script runs IMMEDIATELY before React hydration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Detect mobile
              var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

              if (isMobile) {
                console.log('[MobileScrollFix] Mobile detected - forcing scroll enabled');

                // Force enable scroll IMMEDIATELY
                function forceEnableScroll() {
                  document.documentElement.style.overflow = 'visible';
                  document.documentElement.style.overflowY = 'auto';
                  document.documentElement.style.height = 'auto';
                  document.documentElement.style.position = 'static';

                  document.body.style.overflow = 'visible';
                  document.body.style.overflowY = 'auto';
                  document.body.style.height = 'auto';
                  document.body.style.position = 'static';
                  document.body.style.minHeight = '100vh';

                  // Remove any Lenis or scroll-blocking classes
                  document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped');
                  document.body.classList.remove('lenis', 'lenis-smooth', 'lenis-scrolling', 'lenis-stopped', 'overflow-hidden', 'no-scroll');
                }

                // Run immediately
                forceEnableScroll();

                // Run after DOM loads
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', forceEnableScroll);
                } else {
                  forceEnableScroll();
                }

                // Run after a short delay (catch any async scripts)
                setTimeout(forceEnableScroll, 100);
                setTimeout(forceEnableScroll, 500);
                setTimeout(forceEnableScroll, 1000);

                // Monitor for changes and fix them
                var checkCount = 0;
                var maxChecks = 50; // Check for 5 seconds
                var checkInterval = setInterval(function() {
                  var bodyOverflow = document.body.style.overflow;
                  var htmlOverflow = document.documentElement.style.overflow;

                  if (bodyOverflow === 'hidden' || htmlOverflow === 'hidden' ||
                      bodyOverflow === '' || htmlOverflow === '') {
                    console.warn('[MobileScrollFix] Detected overflow issue, fixing...');
                    forceEnableScroll();
                  }

                  checkCount++;
                  if (checkCount >= maxChecks) {
                    clearInterval(checkInterval);
                    console.log('[MobileScrollFix] Monitoring complete');
                  }
                }, 100);
              }
            })();
          `,
        }}
      />

      {/* Add aggressive CSS overrides */}
      <style jsx global>{`
        /* CRITICAL: Force scrolling on mobile - nuclear option */
        @media (max-width: 767px) {
          html, body {
            overflow-y: auto !important;
            overflow-x: hidden !important;
            height: auto !important;
            max-height: none !important;
            position: static !important;
          }

          body {
            min-height: 100vh !important;
          }

          /* Ensure main content can scroll */
          #main-content {
            overflow-y: visible !important;
            height: auto !important;
            max-height: none !important;
          }

          /* Prevent any fixed positioning on mobile (except modals) */
          .city-page-wrapper:not(.modal-open):not(.menu-open) {
            overflow-y: visible !important;
            height: auto !important;
          }

          /* Ensure article content is scrollable */
          article {
            overflow-y: visible !important;
            height: auto !important;
          }
        }
      `}</style>
    </>
  )
}
