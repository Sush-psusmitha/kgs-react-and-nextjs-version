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
  title: {
    default: 'Kotnani Global Solutions (KGS) | AI-Driven Business Operations',
    template: '%s | Kotnani Global Solutions (KGS)',
  },
  description:
    'KGS delivers enterprise-grade AI operations, business process automation, data engineering, and digital transformation solutions.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-body text-neutral-900 antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
