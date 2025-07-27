'use client';
import { useIdentityContext } from 'react-netlify-identity';
import 'react-netlify-identity-widget/styles.css';

export default function SignupPage(){
  const id=useIdentityContext();
  if(id && id.user){
    return <p className="p-8 text-green-400">Logged in as {id.user.email}</p>;
  }
  return (
    <main className="max-w-lg mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Join CTRL+ALT+BLOCK</h1>
      <id.LogIn className="mb-6"/>
      <Pricing/>
    </main>
  );
}

function Pricing(){
  const tiers=[
    {tier:'Free',price:'$0',blurb:'3 AI msgs / mo'},
    {tier:'Graduate',price:'$4.99/mo',blurb:'Unlimited AI, reports'},
    {tier:'Program',price:'$9 one-time',blurb:'Guided 30‑day tasks'}
  ];
  return (
    <div className="grid gap-4">
      {tiers.map(t=>(
        <div key={t.tier} className="border p-4 rounded">
          <h2 className="font-bold">{t.tier}</h2>
          <p className="text-2xl mb-2">{t.price}</p>
          <p className="text-sm mb-4">{t.blurb}</p>
          <button disabled className="bg-gray-600 cursor-not-allowed px-3 py-1 rounded text-sm">
            {t.tier==='Free'?'Included':'Coming Soon'}
          </button>
        </div>
      ))}
    </div>
  )
}
