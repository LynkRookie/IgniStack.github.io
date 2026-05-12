import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Damián Jinel | IgniStack — Desarrollador Full Stack',
  description: 'Portafolio de Damián Jinel — IgniStack. Desarrollador Web Full Stack con más de 2 años de experiencia. Especializado en aplicaciones web modernas, eficientes y escalables.',
  generator: 'v0.app',
  keywords: ['Damián Jinel', 'IgniStack', 'Full Stack Developer', 'Desarrollador Web', 'React', 'Next.js', 'Ovalle', 'Chile'],
  authors: [{ name: 'Damián Jinel — IgniStack', url: 'https://github.com/LynkRookie' }],
  icons: {
    icon: [
      { url: '/logo-icon.png', type: 'image/png' },
    ],
    apple: '/logo-icon.png',
    shortcut: '/logo-icon.png',
  },
  openGraph: {
    title: 'Damián Jinel | IgniStack — Desarrollador Full Stack',
    description: 'Portafolio de Damián Jinel — IgniStack. Desarrollador Web Full Stack desde Ovalle, Chile.',
    type: 'website',
    images: [{ url: '/logo-full.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
