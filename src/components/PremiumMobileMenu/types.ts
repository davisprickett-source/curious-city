/**
 * TypeScript types for Premium Mobile Menu
 */

export type NavigationLevel = 'cities' | 'city-pages'

export interface PremiumMobileMenuProps {
  currentCitySlug?: string
}

export interface AnimatedMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export interface MenuOverlayProps {
  onClose: () => void
  navigationLevel: NavigationLevel
  onNavigate: (level: NavigationLevel, citySlug?: string) => void
  selectedCity: string | null
}

export interface CitiesNavigationProps {
  onSelectCity: (citySlug: string) => void
}

export interface CityPagesNavigationProps {
  citySlug: string
  onBack: () => void
  onClose: () => void
}

export interface MenuFooterProps {
  onClose: () => void
}
