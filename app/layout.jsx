import './globals.css';

export const metadata = {
  title: 'CTRL+ALT+BLOCK',
  description: 'Countdown to creativity.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
