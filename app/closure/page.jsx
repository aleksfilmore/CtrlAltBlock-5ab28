'use client';
import { useState } from 'react';

export default function ClosurePage() {
  const [input, setInput] = useState('');
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const res = await fetch('/api/generate-closure', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });
    const data = await res.json();
    setLetter(data.text || 'Error generating letter.');
    setLoading(false);
  }
  return (
    <main className="max-w-2xl mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">AI Closure Letter</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <textarea
          className="p-3 rounded text-black"
          rows={4}
          placeholder="Tell the AI the situation..."
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          required
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">
          {loading? 'Generating...' : 'Generate Letter'}
        </button>
      </form>
      {letter && (
        <div className="whitespace-pre-wrap bg-gray-800 p-4 rounded">{letter}</div>
      )}
    </main>
  );
}
