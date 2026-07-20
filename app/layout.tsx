import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Lucas Pires — Senior Full Stack Software Engineer',
  description:
    'Senior Full Stack Software Engineer with 6+ years building scalable web and mobile applications with Java, .NET, Node.js, React and AI.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Logo profissional maquiadora moderno preto (1).png',
      },
    ],
    apple: '/Logo profissional maquiadora moderno preto (1).png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f1419',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
