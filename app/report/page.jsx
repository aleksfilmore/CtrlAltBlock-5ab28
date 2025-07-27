'use client';
import { useEffect, useRef } from 'react';

export default function ReportPage(){
  const ref=useRef(null);
  useEffect(()=>{
    if(!ref.current) return;
    const ctx=ref.current.getContext('2d');
    ctx.fillStyle='#0f0f0f';
    ctx.fillRect(0,0,400,200);
    ctx.fillStyle='#fff';
    ctx.font='16px monospace';
    ctx.fillText('Monthly Reformat Report',10,30);
    ctx.fillText('Streak Days: '+localStorage.getItem('cab:lastContact'),10,60);
  },[]);
  return(
    <main className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Reformat Report</h1>
      <canvas ref={ref} width={400} height={200} className="border"/>
    </main>
  );
}
