import type {Metadata} from 'next';

import {Outfit} from 'next/font/google';

import './globals.css';
import {Providers} from './providers';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const runtime = 'edge';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Principium UI',
  description: 'Principium UI is a modern, accessible, and customizable UI library for React.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${outfit.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
