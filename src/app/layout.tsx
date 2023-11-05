import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Dev Khandelwal',
    template: '%s - Dev Khandelwal',
  },
  description: 'Solo developer kinda student',
  metadataBase: new URL('https://slyro.vercel.app'),
  openGraph: {
    title: 'Dev Khandelwal',
    description: 'Solo developer kinda student',
    type: 'website',
    url: '/',
    siteName: 'Dev Khandelwal',
    locale: 'en-IN',
  },
  twitter: {
    title: 'Dev Khandelwal',
    card: 'summary_large_image',
    creator: '@i_slyro',
  },
  authors: [{ name: 'Dev Khandelwal' }],
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
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-NZ" className="scroll-smooth motion-reduce:scroll-auto">
      <body className="flex min-h-[100svh] flex-col bg-body-light text-gray-800 antialiased selection:bg-primary-500/30 dark:bg-body-dark dark:text-gray-50 lg:grid lg:grid-cols-[270px_1fr] lg:grid-rows-[1fr_auto] xl:grid-cols-[320px_1fr]">
        <Header />
        <main className="min-w-0 grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
