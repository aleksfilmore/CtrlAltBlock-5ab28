import { NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard','/blobs','/closure','/report'];

export function middleware(req) {
  if (protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    if (!req.headers.get('x-netlify-identity')) {
      return NextResponse.redirect(new URL('/signup', req.url));
    }
  }
  return NextResponse.next();
}
