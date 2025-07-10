import { NextResponse } from 'next/server';

export function middleware(request) {
  // Verificar se a rota é para admin
  if (
    request.nextUrl.pathname.startsWith('/admin/dashboard') ||
    request.nextUrl.pathname.startsWith('/admin/analytics') ||
    request.nextUrl.pathname.startsWith('/admin/users')
  ) {
    // Para desenvolvimento, vamos manter as rotas como estão
    // mas poderiam ser redirecionadas para um servidor admin separado
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
