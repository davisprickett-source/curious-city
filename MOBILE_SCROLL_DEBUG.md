# Mobile Scroll Debugging Guide

## Issue: Longform Articles Can't Scroll on Mobile

### Root Causes Identified

1. **Body Overflow Lock Not Cleared** - Multiple components set `document.body.style.overflow = 'hidden'` but may fail to clear it:
   - PremiumMobileMenu
   - EventModal
   - InterstitialAd
   - DrawerAd

2. **History Essay 404s** - History essays linked as `/articles/{slug}` were 404ing because article check happened before history check

### Fixes Applied

#### 1. History Essay Routing (FIXED)
**File:** `src/app/[city]/articles/[slug]/page.tsx:61-83`

Moved history essay check BEFORE article null check. History essays now render correctly when accessed via `/articles/{slug}` URL.

#### 2. Horizontal Scroll Drift (FIXED)
**Files:**
- `src/components/city/HorizontalScrollSection.tsx:297`
- `src/components/events/CategoryFilterPills.tsx:54`
- `src/components/navigation/UnifiedNav.tsx:158`

Added `touchAction: 'pan-x'` to prevent vertical scroll drift when swiping horizontal carousels.

#### 3. Lenis Reference Fix (FIXED)
**File:** `src/components/PremiumMobileMenu.tsx:51,60,70`

Changed `window.lenis` → `window.__lenis` (correct reference with double underscore).

### Still Testing

#### Body Overflow Reset
The mobile scroll lock issue may persist if body overflow isn't cleared. To debug on live site:

**Open browser console on mobile and run:**
```javascript
// Check if body overflow is locked
console.log(document.body.style.overflow); // Should be empty string, not 'hidden'

// Force unlock if needed
document.body.style.overflow = '';
```

If this fixes scrolling, the issue is a component not properly cleaning up its overflow lock.

### Prevention Strategy

1. **Never set body.style.overflow directly** - Create a centralized ScrollLockManager
2. **Always test mobile after CSS changes** - Especially globals.css
3. **Document touch behavior patterns** - Create component guidelines for horizontal scroll
4. **Add regression tests** - Playwright tests for scroll on mobile

### Testing Checklist

Before deploying, test on actual mobile device:
- [ ] Can scroll longform articles (e.g., Fargo Lake Agassiz)
- [ ] Can scroll history essays (e.g., Anchorage Butcher Baker)
- [ ] Horizontal carousels don't cause vertical drift
- [ ] Links to history essays work (don't 404)
- [ ] After opening/closing mobile menu, scroll still works
- [ ] After viewing ads, scroll still works
