import { NextResponse } from 'next/server';
import { adminMiddleware, shouldApplyAdminMiddleware } from './src/middleware/adminMiddleware';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Apply admin middleware for admin routes
  if (shouldApplyAdminMiddleware(pathname)) {
    return adminMiddleware(request);
  }

  // Handle other middleware logic here if needed
  // For example: rate limiting, CORS, etc.

  return NextResponse.next();
}

// Configure which paths should be processed by middleware
export const config = {
  matcher: [
    // Match admin routes
    '/admin/:path*',

    // Match API routes that need protection
    '/api/admin/:path*',

    // Exclude static files and API routes that don't need middleware
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'
  ]
};
