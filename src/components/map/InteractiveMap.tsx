'use client'

import { useEffect, useRef, useState } from 'react'
import { BestOfSpot } from '@/types/content'
import { MapMarker } from './MapMarker'

interface InteractiveMapProps {
  spots: BestOfSpot[]
  activeSpotIndex: number
  viewMode: 'explore' | 'overview'
  onTransitionStart: () => void
  onTransitionEnd: () => void
  onMarkerClick: (index: number) => void
}

const MAP_STYLES = {
  dark: 'mapbox://styles/mapbox/dark-v11',
  light: 'mapbox://styles/mapbox/streets-v12'
}

export function InteractiveMap({
  spots,
  activeSpotIndex,
  viewMode,
  onTransitionStart,
  onTransitionEnd,
  onMarkerClick
}: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [useStaticFallback, setUseStaticFallback] = useState(false)
  const [mapStyle, setMapStyle] = useState<'dark' | 'light'>('dark')

  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  // Initialize map
  useEffect(() => {
    if (!accessToken || !mapContainer.current || mapRef.current) return

    console.log('Initializing Mapbox map...', { accessToken: accessToken.substring(0, 20), spots: spots.length })

    import('mapbox-gl').then((mapboxgl) => {
      if (!mapboxgl.default.supported()) {
        console.warn('Mapbox GL not supported, using static map fallback')
        setUseStaticFallback(true)
        setIsMapLoaded(true)
        return
      }

      mapboxgl.default.accessToken = accessToken

      // Calculate initial center from first spot
      const firstSpot = spots[0]
      const initialCenter: [number, number] = [
        firstSpot.coordinates!.lng,
        firstSpot.coordinates!.lat
      ]

      console.log('Creating map with center:', initialCenter)

      const map = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: MAP_STYLES[mapStyle],
        center: initialCenter,
        zoom: 15.5,
        attributionControl: false,
        pitch: 0,
        bearing: 0,
        // Performance optimizations
        preserveDrawingBuffer: false,
        antialias: false,
        maxZoom: 18,
        minZoom: 10
      })

      map.on('load', () => {
        console.log('Map loaded successfully!')
        setIsMapLoaded(true)
      })

      map.on('error', (e) => {
        console.error('Map error:', e)
      })

      // Disable all map interactions to prevent zooming/panning
      map.dragRotate.disable()
      map.touchZoomRotate.disableRotation()
      map.scrollZoom.disable()
      map.boxZoom.disable()
      map.dragPan.disable()
      map.keyboard.disable()
      map.doubleClickZoom.disable()
      map.touchZoomRotate.disable()

      mapRef.current = map
      console.log('Map reference stored')
    }).catch((error) => {
      console.error('Failed to load Mapbox:', error)
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [accessToken, spots])

  // Handle view mode changes (explore vs overview)
  useEffect(() => {
    if (!mapRef.current || !isMapLoaded) return

    const map = mapRef.current

    if (viewMode === 'overview') {
      // Zoom out to show all spots
      import('mapbox-gl').then((mapboxgl) => {
        const bounds = new mapboxgl.default.LngLatBounds()

        spots.forEach(spot => {
          if (spot.coordinates) {
            bounds.extend([spot.coordinates.lng, spot.coordinates.lat])
          }
        })

        onTransitionStart()

        map.fitBounds(bounds, {
          padding: {
            top: 100,
            bottom: 100,
            left: 100,
            right: window.innerWidth >= 1024 ? 500 : 100 // Extra padding for sidebar on desktop
          },
          duration: 2000,
          easing: (t: number) => 1 - Math.pow(1 - t, 3) // Cubic ease-out
        })

        setTimeout(() => {
          onTransitionEnd()
        }, 2000)
      })
    }
  }, [viewMode, isMapLoaded, spots, onTransitionStart, onTransitionEnd])

  // Handle active spot changes (pan to new location)
  useEffect(() => {
    if (!mapRef.current || !isMapLoaded || viewMode === 'overview') return

    const map = mapRef.current
    const activeSpot = spots[activeSpotIndex]

    if (!activeSpot?.coordinates) return

    onTransitionStart()

    map.easeTo({
      center: [activeSpot.coordinates.lng, activeSpot.coordinates.lat],
      zoom: 15.5,
      duration: 1800,
      easing: (t: number) => 1 - Math.pow(1 - t, 3) // Cubic ease-out
    })

    setTimeout(() => {
      onTransitionEnd()
    }, 1800)
  }, [activeSpotIndex, isMapLoaded, viewMode, spots, onTransitionStart, onTransitionEnd])

  // Render markers
  useEffect(() => {
    if (!mapRef.current || !isMapLoaded) return

    const map = mapRef.current

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    import('mapbox-gl').then((mapboxgl) => {
      spots.forEach((spot, index) => {
        if (!spot.coordinates) return

        const markerElement = document.createElement('div')
        markerElement.className = 'custom-marker'

        const markerState = index === activeSpotIndex ? 'active' : 'primary'

        // Render React component to DOM element
        import('react-dom/client').then(({ createRoot }) => {
          const root = createRoot(markerElement)
          root.render(
            <MapMarker
              rank={index + 1}
              state={markerState}
              spotName={spot.name}
              onClick={() => onMarkerClick(index)}
            />
          )
        })

        const marker = new mapboxgl.default.Marker({
          element: markerElement,
          anchor: 'bottom'
        })
          .setLngLat([spot.coordinates.lng, spot.coordinates.lat])
          .addTo(map)

        markersRef.current.push(marker)

        // Handle multiple locations
        if (spot.locations && spot.locations.length > 0) {
          spot.locations.forEach((location, locIndex) => {
            if (!location.coordinates) return

            const secondaryMarkerElement = document.createElement('div')
            secondaryMarkerElement.className = 'custom-marker-secondary'

            import('react-dom/client').then(({ createRoot }) => {
              const root = createRoot(secondaryMarkerElement)
              root.render(
                <MapMarker
                  rank={index + 1}
                  state="secondary"
                  spotName={`${spot.name} - ${location.name}`}
                  onClick={() => onMarkerClick(index)}
                />
              )
            })

            const secondaryMarker = new mapboxgl.default.Marker({
              element: secondaryMarkerElement,
              anchor: 'bottom'
            })
              .setLngLat([location.coordinates.lng, location.coordinates.lat])
              .addTo(map)

            markersRef.current.push(secondaryMarker)
          })
        }
      })
    })

    return () => {
      markersRef.current.forEach(marker => marker.remove())
      markersRef.current = []
    }
  }, [spots, activeSpotIndex, isMapLoaded, onMarkerClick])

  // Handle map style changes
  useEffect(() => {
    if (!mapRef.current || !isMapLoaded) return

    const map = mapRef.current
    map.setStyle(MAP_STYLES[mapStyle])
  }, [mapStyle, isMapLoaded])

  if (!accessToken) {
    return (
      <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-400 mb-2">Map unavailable</p>
          <p className="text-xs text-neutral-500">Mapbox token not configured</p>
        </div>
      </div>
    )
  }

  // Static map fallback when WebGL not supported
  if (useStaticFallback) {
    const activeSpot = spots[activeSpotIndex]
    if (!activeSpot?.coordinates) return null

    const { lng, lat } = activeSpot.coordinates
    const zoom = viewMode === 'overview' ? 12 : 15
    const width = typeof window !== 'undefined' ? Math.min(window.innerWidth, 1280) : 1200
    const height = typeof window !== 'undefined' ? Math.min(window.innerHeight, 1280) : 800

    // Build markers parameter for all spots
    const markers = spots
      .filter(s => s.coordinates)
      .map((spot, idx) => {
        const color = idx === activeSpotIndex ? 'c65d3b' : 'd97556'
        const size = idx === activeSpotIndex ? 'l' : 'm'
        return `pin-${size}+${color}(${spot.coordinates!.lng},${spot.coordinates!.lat})`
      })
      .join(',')

    const styleUrl = mapStyle === 'dark' ? 'mapbox/dark-v11' : 'mapbox/streets-v12'
    const staticMapUrl = `https://api.mapbox.com/styles/v1/${styleUrl}/static/${markers}/${lng},${lat},${zoom},0/${width}x${height}@2x?access_token=${accessToken}`

    return (
      <div className="relative w-full h-full bg-neutral-900">
        <img
          key={`${activeSpotIndex}-${viewMode}-${mapStyle}`}
          src={staticMapUrl}
          alt="Map view"
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ minHeight: '100vh' }}
        />

        {/* Map style toggle */}
        <button
          onClick={() => setMapStyle(mapStyle === 'dark' ? 'light' : 'dark')}
          className="absolute top-4 right-4 z-10 bg-white hover:bg-neutral-50 text-neutral-900 px-4 py-2 rounded-lg shadow-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
          aria-label={`Switch to ${mapStyle === 'dark' ? 'light' : 'dark'} map`}
        >
          {mapStyle === 'dark' ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Light
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              Dark
            </>
          )}
        </button>
        {/* Render clickable markers overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {spots.map((spot, idx) => {
            if (!spot.coordinates) return null
            // This would need proper positioning calculation
            // For now, just show it's interactive
            return null
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <div
        ref={mapContainer}
        className="w-full h-full bg-neutral-900"
        style={{ willChange: 'transform', minHeight: '100vh', position: 'absolute', inset: 0 }}
      />

      {/* Map style toggle */}
      {isMapLoaded && (
        <button
          onClick={() => setMapStyle(mapStyle === 'dark' ? 'light' : 'dark')}
          className="absolute top-4 right-4 z-10 bg-white hover:bg-neutral-50 text-neutral-900 px-4 py-2 rounded-lg shadow-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
          aria-label={`Switch to ${mapStyle === 'dark' ? 'light' : 'dark'} map`}
        >
          {mapStyle === 'dark' ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Light
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              Dark
            </>
          )}
        </button>
      )}

      {!isMapLoaded && (
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-neutral-700 border-t-white rounded-full animate-spin mb-4 mx-auto" />
            <p className="text-neutral-400">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  )
}
