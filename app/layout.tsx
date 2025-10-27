import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"
import GoogleAnalytics from "@/components/google-analytics"
import GoogleTagManager, { GoogleTagManagerNoScript } from "@/components/google-tag-manager"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Circulyst - Building the Operating System for India's Circular Economy",
  description:
    "Transforming how India manages waste—from efficient collection to advanced recycling, creating a future where resources are perpetually renewed.",
  keywords: [
    "circular economy",
    "waste management",
    "recycling",
    "sustainability",
    "India",
    "environment",
    "waste collection",
    "resource management"
  ],
  authors: [{ name: "Circulyst Team" }],
  creator: "Circulyst",
  publisher: "Circulyst",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://circulyst.in'),
  alternates: {
    canonical: 'https://circulyst.in/',
    languages: {
      'en-US': 'https://circulyst.in/',
    },
    types: {
      'application/rss+xml': 'https://circulyst.in/rss.xml',
    },
  },
  openGraph: {
    title: "Circulyst - Building the Operating System for India's Circular Economy",
    description: "Transforming how India manages waste—from efficient collection to advanced recycling, creating a future where resources are perpetually renewed.",
    url: 'https://circulyst.in',
    siteName: 'Circulyst',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Circulyst - Circular Economy Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Circulyst - Building the Operating System for India's Circular Economy",
    description: "Transforming how India manages waste—from efficient collection to advanced recycling, creating a future where resources are perpetually renewed.",
    images: ['/images/og-image.jpg'],
    creator: '@circulyst',
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
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/images/favicon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/favicon.png',
        color: '#000000',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
      </head>
      <body className={`font-sans ${inter.variable}`}>
        <GoogleTagManagerNoScript gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
        <GoogleAnalytics />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
