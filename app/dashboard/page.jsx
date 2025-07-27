'use client';
import { useEffect, useState } from 'react';

const KEY = 'cab:lastContact';
const SHIELD_KEY = 'cab:shield';
const DAY_MS = 86400000;

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(KEY);
    const last = stored ? parseInt(stored, 10) : Date.now();
    const calc = () => Math.floor((Date.now() - last) / DAY_MS);
    setDays(calc());
    const id = setInterval(() => setDays(calc()), 60000);
    return () => clearInterval(id);
  }, []);

  function reset() {
    if (typeof window === 'undefined') return;
    const now = Date.now();
    const monthMs = 30 * 24 * 60 * 60 * 1000;
    const shield = localStorage.getItem(SHIELD_KEY);

    // Use shield if available
    if (shield && now - parseInt(shield, 10) < monthMs) {
      alert('Streak Shield activated — no days lost!');
      localStorage.removeItem(SHIELD_KEY);
      return;
    }

    // Grant a new shield timestamp
    localStorage.setItem(SHIELD_KEY, String(now));

    const goRecovery = confirm('Slip recorded. Start a Recovery Ritual?');
    if (goRecovery) location.href = '/ritual';

    localStorage.setItem(KEY, String(now));
    setDays(0);
  }

  return (
    <main className="flex flex-col items-center justify-center h-full p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">No‑Contact Streak</h1>
      <p className="text-6xl font-mono mb-6">{days}d</p>
      <button
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        onClick={reset}
      >
        I Broke No‑Contact 😭
      </button>
    </main>
  );
}
