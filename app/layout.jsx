import './globals.css';
import Link from 'next/link';

export const metadata = { title: 'CTRL+ALT+BLOCK', description: 'Break the loop.' };


function PanicButton() {
  const lines = [
    "Block. Breathe. Repeat.",
    "Close the chat—open your future.",
    "They’re not your rehab center.",
    "Craving chaos? Do 20 push‑ups instead."
  ];
  function fire() {
    const line = lines[Math.floor(Math.random() * lines.length)];
    alert(line);
  }
  return (
    <button
      onClick={fire}
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 1000
      }}
      className="bg-pink-600 hover:bg-pink-700 text-sm px-3 py-2 rounded shadow-lg"
    >
      About to text them?
    </button>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <nav className="bg-black/60 backdrop-blur sticky top-0 z-50">
          <ul className="max-w-4xl mx-auto flex gap-6 px-4 py-3 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/confessional">Confessional</Link></li>
            <li><Link href="/ritual">Ritual</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/blobs">Blobs</Link></li>
            <li><Link href="/closure">AI Closure</Link></li>
          </ul>
        </nav>
        <div className="flex-1">{children}</div>
        <footer className="text-center text-xs text-gray-500 py-6">
          CTRL+ALT+BLOCK © {new Date().getFullYear()}
        </footer>
        <PanicButton />
</body>
    </html>
  );
}
