'use client';
import { useState } from 'react';

const rituals = [
  "Write a goodbye letter you never send.",
  "Delete one photo that keeps you stuck.",
  "Go for a 15\u2011minute walk without your phone.",
  "List three things you\u2019ve learned from the breakup.",
  "Donate something that reminds you of them."
];

export const metadata = { title: 'Daily Ritual - CTRL+ALT+BLOCK' };

function randomRitual() { return rituals[Math.floor(Math.random()*rituals.length)]; }

export default function RitualPage() {
  const [ritual, setRitual] = useState(randomRitual());
  return (
    <main className="max-w-md mx-auto p-8 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">Your Ritual</h1>
      <p className="text-xl mb-6">{ritual}</p>
      <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded" onClick={() => setRitual(randomRitual())}>
        New Ritual
      </button>
    </main>
  );
}
