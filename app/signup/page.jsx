'use client';
import { useIdentityContext } from 'react-netlify-identity-widget';
export default function Signup(){
  const id=useIdentityContext();
  if(id && id.user){
    return <main className="p-8">Logged in as {id.user.email}</main>;
  }
  return <main className="p-8"><id.LogIn/></main>;
}