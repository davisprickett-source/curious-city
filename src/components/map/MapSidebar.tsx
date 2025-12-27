'use client'

import { useEffect, useRef, useState } from 'react'
import { BestOfSpot } from '@/types/content'

interface MapSidebarProps {
  spots: BestOfSpot[]
  activeSpotIndex: number
}

const MAP_STYLES = {
  dark: 'mapbox://styles/mapbox/dark-v11',
  light: 'mapbox://styles/mapbox/streets-v12'
}

export function MapSidebar({ spots, activeSpotIndex }: MapSidebarProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [mapStyle, setMapStyle] = useState<'dark' | 'light'>('dark')

  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  // Initialize map - show all spots at once
  useEffect(() => {
    if (!accessToken || !mapContainer.current || mapRef.current) return

    import('mapbox-gl').then((mapboxgl) => {
      if (!mapboxgl.default.supported()) {
        console.warn('Mapbox GL not supported')
        return
      }

      mapboxgl.default.accessToken = accessToken

      // Calculate bounds to fit all spots
      const bounds = new mapboxgl.default.LngLatBounds()
      spots.forEach(spot => {
        if (spot.coordinates) {
          bounds.extend([spot.coordinates.lng, spot.coordinates.lat])
        }
      })

      const map = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: MAP_STYLES[mapStyle],
        bounds: bounds,
        fitBoundsOptions: {
          padding: { top: 50, bottom: 50, left: 50, right: 50 }
        },
        attributionControl: false,
        interactive: false, // Disable all interactions
      })

      map.on('load', () => {
        setIsMapLoaded(true)
      })

      // Disable interactions
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
  }, [accessToken, spots])

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

        const isActive = index === activeSpotIndex

        // Create marker element
        const el = document.createElement('div')
        el.className = 'custom-marker'
        el.style.width = isActive ? '40px' : '32px'
        el.style.height = isActive ? '40px' : '32px'
        el.style.borderRadius = '50%'
        el.style.backgroundColor = isActive ? '#c65d3b' : '#d97556'
        el.style.border = '3px solid white'
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)'
        el.style.display = 'flex'
        el.style.alignItems = 'center'
        el.style.justifyContent = 'center'
        el.style.fontWeight = 'bold'
        el.style.color = 'white'
        el.style.fontSize = '14px'
        el.style.transition = 'all 0.3s ease'
        el.style.cursor = 'pointer'
        el.textContent = (index + 1).toString()

        if (isActive) {
          el.style.animation = 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }

        const marker = new mapboxgl.default.Marker({ element: el })
          .setLngLat([spot.coordinates.lng, spot.coordinates.lat])
          .addTo(map)

        markersRef.current.push(marker)
      })
    })

    return () => {
      markersRef.current.forEach(marker => marker.remove())
      markersRef.current = []
    }
  }, [spots, activeSpotIndex, isMapLoaded])

  // Handle map style changes
  useEffect(() => {
    if (!mapRef.current || !isMapLoaded) return
    mapRef.current.setStyle(MAP_STYLES[mapStyle])
  }, [mapStyle, isMapLoaded])

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

      {/* Map style toggle */}
      {isMapLoaded && (
        <button
          onClick={() => setMapStyle(mapStyle === 'dark' ? 'light' : 'dark')}
          className="absolute top-4 right-4 z-10 bg-white hover:bg-neutral-50 text-neutral-900 px-3 py-2 rounded-lg shadow-lg text-sm font-medium transition-all hover:scale-105 flex items-center gap-2"
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
          <div className="w-8 h-8 border-4 border-neutral-700 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
