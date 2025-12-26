import { describe, it, expect } from 'vitest'
import { routes, citySections, externalLinks, bannerPaths } from './routes'

describe('routes', () => {
  describe('home', () => {
    it('returns root path', () => {
      expect(routes.home()).toBe('/')
    })
  })

  describe('essays', () => {
    it('returns essays listing path', () => {
      expect(routes.essays()).toBe('/essays')
    })
  })

  describe('essay', () => {
    it('builds essay path from city and essay slugs', () => {
      expect(routes.essay('minneapolis', 'meeting-of-waters')).toBe(
        '/minneapolis/essay/meeting-of-waters'
      )
    })

    it('handles hyphenated city slugs', () => {
      expect(routes.essay('salt-lake-city', 'zion-in-the-desert')).toBe(
        '/salt-lake-city/essay/zion-in-the-desert'
      )
    })
  })

  describe('city', () => {
    it('builds city path', () => {
      expect(routes.city('chicago')).toBe('/chicago')
    })
  })

  describe('citySection', () => {
    it('returns city root for essay section', () => {
      expect(routes.citySection('denver', 'essay')).toBe('/denver')
    })

    it('builds section path for other sections', () => {
      expect(routes.citySection('denver', 'this-week')).toBe('/denver/this-week')
      expect(routes.citySection('denver', 'hidden-gems')).toBe('/denver/hidden-gems')
      expect(routes.citySection('denver', 'dark-history')).toBe('/denver/dark-history')
    })
  })

  describe('category', () => {
    it('builds category path', () => {
      expect(routes.category('hidden-gems')).toBe('/category/hidden-gems')
      expect(routes.category('bars')).toBe('/category/bars')
    })
  })
})

describe('citySections', () => {
  it('has expected number of sections', () => {
    expect(citySections.length).toBe(10)
  })

  it('essay section has empty path', () => {
    const essay = citySections.find((s) => s.id === 'essay')
    expect(essay?.path).toBe('')
  })

  it('all sections have id, label, and path', () => {
    citySections.forEach((section) => {
      expect(section.id).toBeDefined()
      expect(section.label).toBeDefined()
      expect(section.path).toBeDefined()
    })
  })
})

describe('externalLinks', () => {
  describe('googleMaps.search', () => {
    it('encodes query for URL', () => {
      const url = externalLinks.googleMaps.search('123 Main St, Chicago')
      expect(url).toContain('123%20Main%20St')
      expect(url).toContain('Chicago')
    })
  })

  describe('googleMaps.coordinates', () => {
    it('builds coordinate URL', () => {
      const url = externalLinks.googleMaps.coordinates(41.8781, -87.6298)
      expect(url).toBe('https://www.google.com/maps?q=41.8781,-87.6298')
    })
  })

  describe('instagram', () => {
    it('builds instagram URL', () => {
      expect(externalLinks.instagram('curiouscity')).toBe(
        'https://instagram.com/curiouscity'
      )
    })

    it('removes @ prefix', () => {
      expect(externalLinks.instagram('@curiouscity')).toBe(
        'https://instagram.com/curiouscity'
      )
    })
  })
})

describe('bannerPaths', () => {
  it('builds city banner path', () => {
    expect(bannerPaths.city('chicago')).toBe('/banners/chicago-banner.jpg')
  })

  it('returns fallback path', () => {
    expect(bannerPaths.cityFallback()).toBe('/banners/default-banner.jpg')
  })
})
