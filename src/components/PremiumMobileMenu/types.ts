/**
 * TypeScript types for Premium Mobile Menu
 */

export interface PremiumMobileMenuProps {
  currentCitySlug?: string
}

export interface AnimatedMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export interface MenuOverlayProps {
  onClose: () => void
  currentCitySlug?: string
}

export interface CitiesNavigationProps {
  onClose: () => void
  currentCitySlug?: string
}
