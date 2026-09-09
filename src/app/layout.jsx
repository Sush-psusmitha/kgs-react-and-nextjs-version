import Script from 'next/script'
import { Montserrat } from 'next/font/google'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.kotnaniglobal.com'),
  title: {
    default: 'Kotnani Global Solutions (KGS) | AI-Driven Business Operations',
    template: '%s | Kotnani Global Solutions (KGS)',
  },
  description:
    'KGS delivers enterprise-grade AI operations, business process automation, data engineering, and digital transformation solutions.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: 'Kotnani Global Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RXL9Z84WRG"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RXL9Z84WRG');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white font-body text-neutral-900 antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

