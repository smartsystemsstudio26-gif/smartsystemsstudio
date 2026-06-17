import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Smart Systems Studio — Smart Digital Solutions for Modern Businesses',
  description:
    'Smart Systems Studio helps entrepreneurs and companies build, automate and grow with professional business solutions: business registration, BEE certificates, websites, business software, graphic design and digital automation.',
  keywords: [
    'business registration',
    'CIPC',
    'BEE certificates',
    'website development',
    'business software',
    'POS systems',
    'graphic design',
    'digital solutions',
    'South Africa',
    'Smart Systems Studio',
  ],
  authors: [{ name: 'Smart Systems Studio' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Smart Systems Studio — Smart Digital Solutions for Modern Businesses',
    description:
      'We help entrepreneurs and companies build, automate and grow with professional business solutions.',
    type: 'website',
    siteName: 'Smart Systems Studio',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050816' },
    { media: '(prefers-color-scheme: light)', color: '#f4f6fb' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
