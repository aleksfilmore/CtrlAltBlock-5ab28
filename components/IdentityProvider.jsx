'use client';
import { IdentityContextProvider } from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
export default function IdentityProvider({children}){
  return <IdentityContextProvider url="/.netlify/identity">{children}</IdentityContextProvider>;
}