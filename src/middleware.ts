import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /[city]/history/[slug] → /[city]/articles/[slug]
  const historyMatch = pathname.match(/^\/([^\/]+)\/history\/(.+)$/)
  if (historyMatch) {
    const [, city, slug] = historyMatch
    const url = request.nextUrl.clone()
    url.pathname = `/${city}/articles/${slug}`
    return NextResponse.redirect(url, 301) // Permanent redirect
  }

  // Redirect /[city]/history → /[city]/articles
  const historyPageMatch = pathname.match(/^\/([^\/]+)\/history\/?$/)
  if (historyPageMatch) {
    const [, city] = historyPageMatch
    const url = request.nextUrl.clone()
    url.pathname = `/${city}/articles`
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2)$).*)',
  ],
}
