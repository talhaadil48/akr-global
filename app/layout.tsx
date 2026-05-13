import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'AKR Global | 24/7 Taxi Dispatch Outsourcing for UK Operators',
  description:
    'AKR Global provides 24/7 taxi dispatch outsourcing, call handling, admin, and back-office support for UK taxi and private hire operators.',
  keywords: [
    'taxi dispatch outsourcing',
    'UK taxi call handling',
    'private hire support',
    'overflow dispatch support',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--bg-main)] text-[var(--text-main)]">
        <SmoothScrollProvider>
          <div className="flex flex-col min-h-full">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
