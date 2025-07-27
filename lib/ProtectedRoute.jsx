'use client';
import { useIdentityContext } from 'react-netlify-identity';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const identity = useIdentityContext();
  const router = useRouter();
  useEffect(()=>{
    if(identity && !identity.user){
      router.replace('/signup?next='+encodeURIComponent(window.location.pathname));
    }
  },[identity,router]);
  if(identity && !identity.user) return null;
  return children;
}
