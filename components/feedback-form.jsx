'use client';

import { useState } from 'react';

function FeedbackFormComponent() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('Thanks for the feedback!');
      setMessage('');
    } catch (err) {
      setStatus('Error: ' + err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="my-6 flex flex-col gap-2">
      <textarea
        className="min-h-[120px] rounded border border-gray-300 p-2 text-black"
        placeholder="Your feedback..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button
        type="submit"
        className="rounded bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
      >
        Send Feedback
      </button>
      {status && <p className="text-sm">{status}</p>}
    </form>
  );
}

export function FeedbackForm(props) { return <FeedbackFormComponent {...props} />; }
export default FeedbackFormComponent;
