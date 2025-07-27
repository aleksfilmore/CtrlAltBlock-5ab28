'use client';
import { use, useEffect, useState } from 'react';

export default function BlobsPage() {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/list-blobs');
        const data = await res.json();
        setKeys(data.keys);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  async function handleSubmit(formData) {
    const text = formData.get('blob')?.toString() || '';
    if (!text) return;
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    location.reload();
  }

  return (
    <main className="p-8">
      <form action={handleSubmit} className="flex gap-2 mb-6">
        <input
          name="blob"
          placeholder="Write something..."
          className="flex-1 p-2 rounded text-black"
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">
          Add
        </button>
      </form>

      <h1 className="text-3xl font-bold mb-6">Blob Submissions</h1>

      {keys.length === 0 ? (
        <p className="text-gray-400">No blobs yet.</p>
      ) : (
        <ul className="space-y-2">
          {keys.map((k) => (
            <li key={k} className="break-all">{k}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
