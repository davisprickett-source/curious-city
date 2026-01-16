/**
 * Custom image loader for Cloudflare R2 CDN
 *
 * This loader automatically serves all images from R2 instead of local /public folder
 * when NEXT_PUBLIC_SEQUENCES_CDN is set (production mode).
 */

export default function cloudflareR2Loader({ src, width, quality }: {
  src: string
  width: number
  quality?: number
}) {
  const cdnUrl = process.env.NEXT_PUBLIC_SEQUENCES_CDN || ''

  // If no CDN configured, return original path (local development)
  if (!cdnUrl) {
    return src
  }

  // If src is already an absolute URL (external image), return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  // Remove leading slash if present
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src

  // Return R2 CDN URL with the image path
  // Note: We're not using Next.js image optimization params (width, quality)
  // because R2 serves static files. For optimization, consider:
  // - Cloudflare Images (paid service with automatic resizing)
  // - Pre-optimized images in R2
  // - Client-side lazy loading
  return `${cdnUrl}/${cleanSrc}`
}
