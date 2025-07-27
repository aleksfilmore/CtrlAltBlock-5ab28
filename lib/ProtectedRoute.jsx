'use client';
import { useIdentityContext } from 'react-netlify-identity-widget';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function ProtectedRoute({children}){
  const id=useIdentityContext();
  const router=useRouter();
  useEffect(()=>{
    if(id && !id.user){ router.replace('/signup'); }
  },[id,router]);
  if(id && !id.user) return null;
  return children;
}