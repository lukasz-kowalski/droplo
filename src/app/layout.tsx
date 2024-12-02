import type { Metadata } from 'next';

import { Providers } from './Providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'Droplo',
  description: 'Droplo recruitment task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="px-6 py-7">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
