import Link from 'next/link'

const categories = [
  { href: '/essays', label: 'Essays' },
  { href: '/category/hidden-gems', label: 'Hidden Gems' },
  { href: '/category/bars', label: 'Best Bars' },
  { href: '/category/restaurants', label: 'Best Restaurants' },
  { href: '/category/dark-history', label: 'Dark History' },
]

const cities = [
  { href: '/minneapolis', label: 'Minneapolis' },
  { href: '/fargo', label: 'Fargo' },
  { href: '/denver', label: 'Denver' },
  { href: '/dallas', label: 'Dallas' },
  { href: '/phoenix', label: 'Phoenix' },
  { href: '/portland', label: 'Portland' },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-16">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand & About */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-semibold text-white tracking-tight ui-sans">
                Curious City
              </span>
            </Link>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-6">
              Local content for curious people. We uncover the hidden stories,
              overlooked places, and forgotten history that make each city unique.
            </p>
            <p className="text-sm text-neutral-500">
              Made with curiosity.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-6">
            <h3 className="eyebrow text-neutral-500 mb-4">Explore</h3>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="eyebrow text-neutral-500 mb-4">Cities</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {cities.map((city) => (
                <li key={city.href}>
                  <Link
                    href={city.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} Curious City. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
