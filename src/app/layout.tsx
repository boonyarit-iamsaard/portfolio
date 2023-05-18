import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Portfolio',
    template: '%s | Portfolio',
  },
  description: 'A personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        <main>
          <div className="container pb-8 pt-24">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
