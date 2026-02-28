import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { siteConfig } from '@/data/site';
import { Header, Footer, SkipLink } from '@/components/layout';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Keshav Trikha',
    'Software Engineer',
    'Machine Learning',
    'AI',
    'Data Science',
    'UIUC',
    'Chicago',
    'Full Stack Developer',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Auto-recovery script for ChunkLoadError - reloads page once to get fresh chunks
  const chunkRecoveryScript = `
    (function() {
      var hasReloaded = sessionStorage.getItem('__chunk_reload__');
      
      window.addEventListener('error', function(e) {
        var isChunk = e.message && (e.message.indexOf('ChunkLoadError') > -1 || e.message.indexOf('Loading chunk') > -1);
        
        if (isChunk) {
          if (!hasReloaded) {
            sessionStorage.setItem('__chunk_reload__', 'true');
            window.location.reload();
          } else {
            sessionStorage.removeItem('__chunk_reload__');
          }
        }
      });
      
      window.addEventListener('load', function() {
        sessionStorage.removeItem('__chunk_reload__');
      });
    })();
  `;

  return (
    <html lang="en">
      <head>
        <Script
          id="chunk-recovery"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: chunkRecoveryScript }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-primary antialiased bg-white text-sharp-black`}
      >
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
