import './globals.css';
import Link from 'next/link';
import PanicButton from 'components/panic-btn';
import IdentityProvider from 'components/IdentityProvider';

export const metadata={title:'CTRL+ALT+BLOCK',description:'Break the loop.'};

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-white" suppressHydrationWarning>
        <IdentityProvider>
          <nav className="bg-black/60 backdrop-blur sticky top-0 z-50">
            <ul className="max-w-4xl mx-auto flex gap-6 px-4 py-3 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/signup">Signup</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/blobs">Blobs</Link></li>
              <li><Link href="/closure">Closure</Link></li>
              <li><Link href="/report">Report</Link></li>
            </ul>
          </nav>
          <div className="flex-1">{children}</div>
          <footer className="text-center text-xs text-gray-500 py-6">CTRL+ALT+BLOCK © {new Date().getFullYear()}</footer>
          <PanicButton/>
        </IdentityProvider>
      </body>
    </html>
  );
}