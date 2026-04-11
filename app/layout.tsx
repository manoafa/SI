import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'S.Innovation — Digital Solutions & Professional Training',
  description:
    'Grow your business with digital solutions and professional training. Since 2019: web services, leadership and team development, and consulting across Europe and Madagascar.',
  keywords:
    'web design, web development, corporate training, leadership, team building, consulting, Madagascar, Europe',
  authors: [{ name: 'S.Innovation' }],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}