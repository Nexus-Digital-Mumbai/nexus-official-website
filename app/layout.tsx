import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageLoader from '../components/PageLoader';
import ScrollToTop from '../components/ScrollToTop';
import SmoothScroll from '../components/motion/SmoothScroll';
import CursorGlow from '../components/motion/CursorGlow';
import ScrollProgress from '../components/motion/ScrollProgress';

export const viewport: Viewport = {
  themeColor: '#092147',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nexusdig.in'),
  title: {
    default: 'Nexus — IT Solutions, NexLock & NexWarranty',
    template: '%s | Nexus Digital',
  },
  description:
    "Nexus is a technology company. Nexus IT Solutions builds and maintains software for businesses; NexLock and NexWarranty are Nexus's own products.",
  keywords: [
    'Nexus',
    'Nexus Digital',
    'Nexus Digital Services',
    'IT Solutions',
    'NexLock',
    'NexWarranty',
    'Device Financing',
    'EMI Security',
    'Extended Warranty',
    'Software Engineering',
    'Custom Software',
    'Mumbai IT Company',
  ],
  authors: [{ name: 'Nexus Digital Services Pvt. Ltd.', url: 'https://nexusdig.in' }],
  creator: 'Nexus Digital Services Pvt. Ltd.',
  publisher: 'Nexus Digital Services Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nexus — IT Solutions, NexLock & NexWarranty',
    description:
      "Nexus is a technology company. Nexus IT Solutions builds and maintains software for businesses; NexLock and NexWarranty are Nexus's own products.",
    url: 'https://nexusdig.in',
    siteName: 'Nexus Digital',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nexus — Warranties, EMI Security, IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus — IT Solutions, NexLock & NexWarranty',
    description:
      "Nexus is a technology company. Nexus IT Solutions builds and maintains software for businesses; NexLock and NexWarranty are Nexus's own products.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon-180.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas text-slate-900 font-body antialiased selection:bg-primary-electric/20 selection:text-navy">
        {/* Accessible Skip to Main Content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-primary-electric focus:text-white focus:rounded-xl focus:shadow-2xl focus:font-medium focus:text-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <ScrollProgress />
          <CursorGlow />
          <ScrollToTop />
          <PageLoader />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
