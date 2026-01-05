'use client'

import { useEffect, useRef, useState } from 'react'
import { BestOfSpot } from '@/types/content'
import { getAllCoordinates, getBounds } from '@/lib/mapbox-utils'
import { createCoffeeMarker } from '@/components/map/createCoffeeMarker'

interface ScrollyMapProps {
  spots: BestOfSpot[]
  activeSpotIndex: number
  markerType?: 'coffee' | 'cocktail' | 'restaurant' | 'default'
  onMapLoaded?: (loaded: boolean) => void
  onMarkerClick?: (index: number) => void
}

const MAP_STYLE = 'mapbox://styles/mapbox/dark-v11'

export function ScrollyMap({
  spots,
  activeSpotIndex,
  onMapLoaded,
  onMarkerClick
}: ScrollyMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  // Initialize map
  useEffect(() => {
    if (!accessToken || !mapContainer.current || mapRef.current) return

    import('mapbox-gl').then((mapboxgl) => {
      if (!mapboxgl.default.supported()) {
        console.warn('Mapbox GL not supported')
        return
      }

      mapboxgl.default.accessToken = accessToken

      // Calculate bounds to fit all spots
      const allCoords = getAllCoordinates(spots)
      const bounds = getBounds(allCoords)

      if (!bounds) {
        console.warn('No coordinates found for spots')
        return
      }

      // Calculate center point from bounds for initial view
      const centerLng = (bounds.sw.lng + bounds.ne.lng) / 2
      const centerLat = (bounds.sw.lat + bounds.ne.lat) / 2

      const map = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: MAP_STYLE,
        center: [centerLng, centerLat],
        zoom: 11,
        attributionControl: false,
        interactive: false, // Disable all interactions for cinematic experience
      })

      map.on('load', () => {
        // Fit to bounds once map is loaded
        map.fitBounds([
          [bounds.sw.lng, bounds.sw.lat],
          [bounds.ne.lng, bounds.ne.lat],
        ], {
          padding: { top: 200, bottom: 200, left: 200, right: 200 },
          duration: 0 // Instant fit on load
        })

        setIsMapLoaded(true)
        onMapLoaded?.(true)
      })

      // Disable most interactions but allow clicking
      map.scrollZoom.disable()
      map.boxZoom.disable()
      map.dragPan.disable()
      map.dragRotate.disable()
      map.keyboard.disable()
      map.doubleClickZoom.disable()
      map.touchZoomRotate.disable()

      mapRef.current = map
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [accessToken, spots, onMapLoaded])

  // Render markers (including all locations for multi-location spots)
  useEffect(() => {
    if (!mapRef.current || !isMapLoaded) return

    const map = mapRef.current

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    import('mapbox-gl').then((mapboxgl) => {
      spots.forEach((spot, index) => {
        if (!spot.coordinates) return

        const isActive = index === activeSpotIndex

        // Create primary marker with name
        const el = createCoffeeMarker({
          isActive,
          rank: index + 1,
          name: spot.name
        })

        // Add click handler
        el.addEventListener('click', (e) => {
          e.stopPropagation()
          onMarkerClick?.(index)
        })
        el.style.cursor = 'pointer'
        el.style.pointerEvents = 'auto'

        const marker = new mapboxgl.default.Marker({ element: el })
          .setLngLat([spot.coordinates.lng, spot.coordinates.lat])
          .addTo(map)

        markersRef.current.push(marker)

        // Add markers for additional locations (but not numbered)
        if (spot.locations) {
          spot.locations.forEach(location => {
            if (!location.coordinates) return

            const locEl = document.createElement('div')
            locEl.style.width = '24px'
            locEl.style.height = '24px'
            locEl.style.borderRadius = '50%'
            locEl.style.backgroundColor = '#d97556'
            locEl.style.border = '2px solid white'
            locEl.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)'
            locEl.style.opacity = '0.7'

            const locMarker = new mapboxgl.default.Marker({ element: locEl })
              .setLngLat([location.coordinates.lng, location.coordinates.lat])
              .addTo(map)

            markersRef.current.push(locMarker)
          })
        }
      })
    })

    return () => {
      markersRef.current.forEach(marker => marker.remove())
      markersRef.current = []
    }
  }, [spots, activeSpotIndex, isMapLoaded])

  // Fly to active spot
  useEffect(() => {
    if (!mapRef.current || !isMapLoaded) return

    if (activeSpotIndex < 0) {
      // Intro section - show wider overview with more padding
      const allCoords = getAllCoordinates(spots)
      const bounds = getBounds(allCoords)
      if (bounds) {
        mapRef.current.fitBounds([
          [bounds.sw.lng, bounds.sw.lat],
          [bounds.ne.lng, bounds.ne.lat],
        ], {
          padding: { top: 250, bottom: 250, left: 250, right: 250 },
          duration: 1500,
          pitch: 0,
          bearing: 0,
        })
      }
      return
    }

    const spot = spots[activeSpotIndex]
    if (!spot?.coordinates) return

    // Use asymmetric padding to shift the view left while keeping marker visible
    // This creates more space on the right for the card overlay
    const rightPadding = typeof window !== 'undefined' ? window.innerWidth * 0.4 : 400

    mapRef.current.flyTo({
      center: [spot.coordinates.lng, spot.coordinates.lat],
      zoom: 15,
      pitch: 45,
      bearing: 0,
      duration: 1500,
      essential: true,
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: rightPadding // Shift view left by adding padding to right
      }
    })
  }, [activeSpotIndex, isMapLoaded, spots])

  if (!accessToken) {
    return (
      <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
        <p className="text-neutral-400 text-sm">Map unavailable</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <div
        ref={mapContainer}
        className="w-full h-full bg-neutral-900"
      />

      {!isMapLoaded && (
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-neutral-700 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
