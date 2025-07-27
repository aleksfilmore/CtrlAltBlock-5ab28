import { NextResponse } from 'next/server';
const protectedRoutes=['/dashboard','/blobs','/closure','/report'];
export function middleware(req){
  if(protectedRoutes.some(p=>req.nextUrl.pathname.startsWith(p))){
    const user=req.headers.get('x-netlify-identity');
    if(!user){
      return NextResponse.redirect(new URL('/signup',req.url));
    }
  }
  return NextResponse.next();
}
