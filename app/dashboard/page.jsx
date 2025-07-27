'use client';
import { useEffect, useState } from 'react';

const KEY = 'cab:lastContact';

function daysSince(ts){ return Math.floor((Date.now()-ts)/86400000); }

export const metadata = { title: 'Dashboard - CTRL+ALT+BLOCK' };

export default function DashboardPage(){
  const [last,setLast]=useState(()=>{const v=localStorage.getItem(KEY);return v?parseInt(v,10):Date.now();});
  const [days,setDays]=useState(daysSince(last));
  useEffect(()=>{const id=setInterval(()=>setDays(daysSince(last)),60000);return ()=>clearInterval(id);},[last]);
  function reset(){const n=Date.now();localStorage.setItem(KEY,String(n));setLast(n);setDays(0);}
  return(
    <main className="flex flex-col items-center justify-center h-full p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">No‑Contact Streak</h1>
      <p className="text-6xl font-mono mb-6">{days}d</p>
      <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded" onClick={reset}>I Broke No‑Contact 😭</button>
    </main>);
}
