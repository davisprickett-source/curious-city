# Performance Optimization Plan

## Current Issues

### Compilation Time: 30.7s for dark-history page
- 1486 modules being compiled
- ALL city data (22,628 lines) imported on every page
- Heavy animation libraries (Framer Motion, Mapbox) not code-split

### Page Navigation: Slow transitions
- Large JavaScript bundles
- No dynamic imports
- All city data loaded upfront

---

## High-Impact Fixes (Ranked by Impact)

### 🔥 PRIORITY 1: Dynamic City Data Loading (80% improvement expected)

**Problem:** ALL 12 cities loaded on every page
**Solution:** Dynamic imports per city

**Changes Needed:**

1. **src/data/cities/index.ts** - Replace static imports with dynamic loading:
```typescript
// BEFORE (current - loads all cities):
import { minneapolis } from './minneapolis'
import { raleigh } from './raleigh'
// ... all 12 cities

// AFTER (dynamic - only load needed city):
const cityModules: Record<string, () => Promise<{ default: CityData }>> = {
  'minneapolis': () => import('./minneapolis').then(m => ({ default: m.minneapolis })),
  'raleigh': () => import('./raleigh').then(m => ({ default: m.raleigh })),
  // ... etc
}

export async function getCity(slug: string): Promise<CityData | null> {
  const loader = cityModules[slug]
  if (!loader) return null
  const { default: city } = await loader()
  return city
}
```

**Expected Result:**
- Reduce initial bundle by ~2MB
- Cut compilation from 30s → 10s
- Only load 1 city file (~200KB) instead of all 12 (~2MB)

---

### 🔥 PRIORITY 2: Dynamic Import Heavy Components (40% improvement)

**Problem:** Framer Motion + Mapbox loaded on every page
**Solution:** Code-split with Next.js dynamic imports

**Changes Needed:**

1. **src/app/[city]/dark-history/page.tsx**:
```typescript
// Add at top
import dynamic from 'next/dynamic'

// Replace direct import with dynamic
const DarkHistoryScroll = dynamic(
  () => import('@/components/DarkHistoryScroll'),
  {
    loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>,
    ssr: false // Client-only component
  }
)
```

2. Same for:
- CuriositiesScroll
- InteractiveMap (mapbox)
- Any component using Framer Motion

**Expected Result:**
- Reduce initial JS bundle by ~500KB
- Faster page navigation
- Animations load only when needed

---

### 🟡 PRIORITY 3: Image Optimization (20% improvement)

**Problem:** 490MB of unoptimized images, Next.js optimization disabled

**Changes Needed:**

1. **next.config.js** - Enable optimization:
```javascript
const nextConfig = {
  images: {
    unoptimized: false, // Enable Next.js image optimization
    formats: ['image/webp', 'image/avif'],
  },
}
```

2. **Replace `<img>` with Next.js `<Image>`**:
```typescript
// BEFORE:
<img src="/Raleigh/dark-history/coup.png" alt="..." />

// AFTER:
import Image from 'next/image'
<Image
  src="/Raleigh/dark-history/coup.png"
  alt="..."
  width={800}
  height={600}
  loading="lazy"
/>
```

**Expected Result:**
- Automatic WebP conversion (60% smaller)
- Lazy loading (only load visible images)
- Faster page loads

---

### 🟡 PRIORITY 4: Enable Static Generation Caching

**Problem:** Pages recompile every time in dev mode

**Changes Needed:**

1. Add to **next.config.js**:
```javascript
const nextConfig = {
  images: { unoptimized: false },
  experimental: {
    optimizePackageImports: ['framer-motion', 'mapbox-gl'],
  },
}
```

**Expected Result:**
- Faster rebuilds in dev
- Tree-shake unused exports from large libraries

---

## Implementation Order

### Phase 1 (Quick Wins - 1 hour)
1. ✅ Dynamic import DarkHistoryScroll, CuriositiesScroll
2. ✅ Add loading states
3. ✅ Test one city page

### Phase 2 (Big Impact - 2 hours)
1. ✅ Convert city data loading to dynamic imports
2. ✅ Update all getCity() calls to be async
3. ✅ Test all pages still work

### Phase 3 (Polish - 2 hours)
1. ✅ Enable image optimization
2. ✅ Convert critical `<img>` to `<Image>`
3. ✅ Add optimizePackageImports config

---

## Expected Results

### Before:
- Compilation: 30.7s (1486 modules)
- Initial load: ~3-4MB JS
- Page navigation: 2-3s

### After:
- Compilation: 8-12s (500-700 modules)
- Initial load: ~800KB JS
- Page navigation: <500ms

---

## Risks & Considerations

1. **Dynamic city loading changes API:**
   - `getCity()` becomes async
   - All page components already use async, so minimal impact

2. **Image optimization requires build:**
   - Images optimized at build time
   - Dev mode may be slower initially, but production much faster

3. **Code splitting increases requests:**
   - More HTTP requests, but smaller chunks
   - HTTP/2 makes this negligible

---

## What NOT to Change

- Keep data structure as-is (no need to refactor content)
- Keep component logic unchanged
- Keep TypeScript strict mode (good for catching errors)
