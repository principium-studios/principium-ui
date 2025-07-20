import type {Metadata} from 'next';

import {Outfit} from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <html lang="en">
      <body className={`${outfit.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
