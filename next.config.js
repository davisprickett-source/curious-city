/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  images: {
    unoptimized: false, // Enable Next.js image optimization
    formats: ['image/webp', 'image/avif'],
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
    remotePatterns: [
      // Cloudflare R2 CDN
      {
        protocol: 'https',
        hostname: 'pub-*.r2.dev',
      },
      // Major image hosting services
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com', // images.pexels.com, videos.pexels.com
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: '**.loc.gov', // tile.loc.gov, www.loc.gov
      },
      // News and media
      {
        protocol: 'https',
        hostname: 'mspmag.com',
      },
      {
        protocol: 'https',
        hostname: 'lede-admin.racketmn.com',
      },
      {
        protocol: 'https',
        hostname: 'heavytable.com',
      },
      {
        protocol: 'https',
        hostname: 'sprudge.com',
      },
      {
        protocol: 'https',
        hostname: 'dailycoffeenews.com',
      },
      {
        protocol: 'https',
        hostname: 'roadfood.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.resy.com',
      },
      {
        protocol: 'https',
        hostname: 'hipsterhack.blog',
      },
      {
        protocol: 'https',
        hostname: 'worldsbestcinnamonrolls.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hotel-scoop.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thedenverchannel.com',
      },
      {
        protocol: 'https',
        hostname: 'www.12news.com',
      },
      {
        protocol: 'https',
        hostname: 'www.americanheritage.com',
      },
      {
        protocol: 'https',
        hostname: 'www.phoenixnewtimes.com',
      },
      {
        protocol: 'https',
        hostname: 'www.npr.org',
      },
      // Tourism and city sites
      {
        protocol: 'https',
        hostname: 'www.visitphoenix.com',
      },
      // Government sites (wildcards for .gov domains)
      {
        protocol: 'https',
        hostname: '**.gov', // Covers all .gov sites
      },
      // Museums and attractions (use .org wildcard)
      {
        protocol: 'https',
        hostname: '**.org', // All .org domains (museums, attractions, historical sites)
      },
      // Colorado Springs and other area-specific sites
      {
        protocol: 'https',
        hostname: '**.visitcos.com',
      },
      {
        protocol: 'https',
        hostname: 'gardenofgods.com',
      },
      {
        protocol: 'https',
        hostname: 'ghosttownmuseum.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cograilway.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thebroadmoor.com',
      },
      {
        protocol: 'https',
        hostname: 'media.defense.gov',
      },
      // Coffee shops (Colorado Springs area - use wildcard for *cos.com pattern)
      {
        protocol: 'https',
        hostname: '*cos.com', // pizzeriarusticacos.com, principalsofficecos.com, therabbitholecos.com, diveinncos.com, visitcos.com
      },
      {
        protocol: 'https',
        hostname: 'loyalcoffee.co',
      },
      {
        protocol: 'https',
        hostname: 'storycoffeecompany.com',
      },
      {
        protocol: 'https',
        hostname: 'switchbackroasters.com',
      },
      {
        protocol: 'https',
        hostname: 'shugas.com',
      },
      {
        protocol: 'https',
        hostname: 'phantomcanyon.com',
      },
      {
        protocol: 'https',
        hostname: 'pennyarcadecamparkfun.com',
      },
      {
        protocol: 'https',
        hostname: 'adamsmountaincafe.com',
      },
      {
        protocol: 'https',
        hostname: 'building3coffee.com',
      },
      {
        protocol: 'https',
        hostname: 'jivescoffee.com',
      },
      {
        protocol: 'https',
        hostname: 'wayfindercoffee.com',
      },
      {
        protocol: 'https',
        hostname: 'thefamoussteakhouse.com',
      },
      {
        protocol: 'https',
        hostname: 'www.oskarblues.com',
      },
      {
        protocol: 'https',
        hostname: 'images.getbento.com',
      },
    ],
  },
  // Optimize package imports to reduce bundle size
  experimental: {
    optimizePackageImports: ['framer-motion', 'mapbox-gl'],
  },
}

module.exports = nextConfig
