import './globals.css';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const display = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'opsz'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bhamora Foundation — Empowering Communities, Transforming Lives',
  description:
    'Bhamora Foundation works towards a better future for all through education, healthcare, women empowerment, and sustainable community development.',
  keywords: [
    'Bhamora Foundation',
    'NGO India',
    'Education',
    'Healthcare',
    'Women Empowerment',
    'Community Development',
    'Donate India',
  ],
  openGraph: {
    title: 'Bhamora Foundation — Empowering Communities, Transforming Lives',
    description:
      'Working towards a better future for all through education, healthcare, and sustainable development initiatives.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable}`}
    >
      <head>
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8409995603224151"
          crossOrigin="anonymous"
        />
      </head>

      <body
        suppressHydrationWarning
        className="bg-canvas font-sans text-ink antialiased"
      >
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}