import { Urbanist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import './globals.css';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: process.env.NEXT_PUBLIC_STORE_NAME,
  description: `${process.env.NEXT_PUBLIC_STORE_NAME} - The place for all your purchases.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Analytics />
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
