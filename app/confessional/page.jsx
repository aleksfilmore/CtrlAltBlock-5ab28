'use client';
import { useState } from 'react';
import { FeedbackForm } from 'components/feedback-form';

export const metadata = { title: 'Confessional - CTRL+ALT+BLOCK' };

export default function ConfessionalPage() {
  const [sub, setSub] = useState(false);

  return (
    <main className="max-w-xl mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">Confessional</h1>
      <p className="mb-6 text-gray-400">
        Vent anonymously. Your rant is saved to the void (Submissions bucket) and will
        never be tied back to you.
      </p>

      {sub ? (
        <p className="text-green-400">Your confession has been received. 🙏</p>
      ) : (
        <FeedbackForm onSubmit={() => setSub(true)} />
      )}
    </main>
  );
}
