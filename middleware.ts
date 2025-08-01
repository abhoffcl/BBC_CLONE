import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Add debug headers for troubleshooting
  const response = NextResponse.next()
  
  // Add headers to help debug routing issues
  if (process.env.NODE_ENV === 'development') {
    response.headers.set('X-Debug-Path', request.nextUrl.pathname)
    response.headers.set('X-Debug-Timestamp', new Date().toISOString())
  }
  
  // Handle specific routes that might cause issues
  const pathname = request.nextUrl.pathname
  
  // Ensure business and other section routes are properly handled
  if (pathname.match(/^\/(business|world|sport|technology|culture|health|innovation|travel|politics|uk|arts|earth|video|live|news)$/)) {
    // Add cache headers to prevent stale content issues
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}