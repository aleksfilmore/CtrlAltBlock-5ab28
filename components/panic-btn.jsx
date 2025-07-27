'use client';
export default function PanicButton() {
  const lines = [
    "Block. Breathe. Repeat.",
    "Close the chat—open your future.",
    "They’re not your rehab center.",
    "Craving chaos? Do 20 push‑ups instead."
  ];
  function fire() {
    const line = lines[Math.floor(Math.random()*lines.length)];
    alert(line);
  }
  return (
    <button
      onClick={fire}
      style={{
        position:'fixed',
        bottom:'1rem',
        right:'1rem',
        zIndex:1000
      }}
      className="bg-pink-600 hover:bg-pink-700 text-sm px-3 py-2 rounded shadow-lg"
    >
      About to text them?
    </button>
  );
}
