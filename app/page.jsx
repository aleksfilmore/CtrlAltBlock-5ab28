'use client';

import { useEffect, useState } from 'react';
import blobshape from 'blobshape';

const LAUNCH = new Date('2025-12-31T00:00:00Z').getTime();

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(target - Date.now());
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);
  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        dangerouslySetInnerHTML={{ __html: blobshape({ growth: 8, edges: 7, size: 400, seed: 42 }).path }}
        className="fill-indigo-500/20 animate-pulse absolute -z-10"
      />
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-8">
        CTRL<span className="text-indigo-500">+</span>ALT<span className="text-indigo-500">+</span>BLOCK
      </h1>
      <p className="text-xl mb-4">Launching soon. Time left:</p>
      <div className="flex gap-4 text-3xl font-mono">
        <span>{days.toString().padStart(2, '0')}d</span>
        <span>{hours.toString().padStart(2, '0')}h</span>
        <span>{minutes.toString().padStart(2, '0')}m</span>
        <span>{seconds.toString().padStart(2, '0')}s</span>
      </div>
    </main>
  );
}
