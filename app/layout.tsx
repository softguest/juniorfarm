import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mbi Enoh Tennyson Junior | Award-Winning Agronomist & Climate Advocate',
  description: 'Transforming Agriculture Through Innovation, Soil Health, and Youth Empowerment. Championing climate-smart agriculture and building sustainable food systems in Cameroon.',
  keywords: ['agronomist', 'climate advocate', 'agriculture', 'Cameroon', 'EcoShield', 'Mekor Bobos', 'sustainable farming', 'youth empowerment'],
  authors: [{ name: 'Mbi Enoh Tennyson Junior' }],
  openGraph: {
    title: 'Mbi Enoh Tennyson Junior | Award-Winning Agronomist',
    description: 'Transforming Agriculture Through Innovation, Soil Health, and Youth Empowerment',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#228B22' },
    { media: '(prefers-color-scheme: dark)', color: '#1a472a' },
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
            {children}
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
