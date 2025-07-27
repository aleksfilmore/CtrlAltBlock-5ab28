'use client';
import { IdentityContextProvider } from 'react-netlify-identity';

export default function IdentityProvider({ children }) {
  return (
    <IdentityContextProvider url="/.netlify/identity">
      {children}
    </IdentityContextProvider>
  );
}
