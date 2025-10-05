import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'S.INNOVATION - Solutions Numériques Responsables',
  description: 'Depuis plus de 5 ans, nous accompagnons nos clients dans leurs projets les plus ambitieux. Conception, développement, formation et consultation d\'entreprise.',
  keywords: 'développement web, applications mobiles, formation, consultation, transformation digitale',
  authors: [{ name: 'S.INNOVATION' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}