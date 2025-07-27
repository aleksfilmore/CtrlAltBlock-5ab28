import { NextResponse } from 'next/server';
const protected=['/dashboard','/blobs','/closure','/report'];
export function middleware(req){
  if(protected.some(p=>req.nextUrl.pathname.startsWith(p))){
    if(!req.headers.get('x-netlify-identity')){
      return NextResponse.redirect(new URL('/signup',req.url));
    }
  }
  return NextResponse.next();
}