import './globals.css';
import Link from 'next/link';
import PanicButton from 'components/panic-btn';   // ✅ keep this

export const metadata = { title: 'CTRL+ALT+BLOCK', description: 'Break the loop.' };

// 🚮 REMOVE the whole duplicated function PanicButton() { … } block

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

        {/* Client-side panic button */}
        <PanicButton />
      </body>
    </html>
  );
}
