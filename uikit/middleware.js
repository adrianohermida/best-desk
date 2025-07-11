import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Se a URL começar com /admin, redireciona para a porta 3001
  if (url.pathname.startsWith('/admin')) {
    // Remove /admin do path e redireciona para localhost:3001
    const adminPath = url.pathname.replace('/admin', '');
    const adminUrl = `http://localhost:3001${adminPath}${url.search}`;

    // Em desenvolvimento, fazemos redirect para nova aba
    // porque o proxy pode ter problemas com CORS
    return NextResponse.redirect(adminUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};
