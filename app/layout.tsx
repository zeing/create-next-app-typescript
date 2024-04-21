import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: { template: 'Next.js | %s', default: 'Home' },
  icons: '/vercel.svg',
  description: 'Next.js',
  keywords: ['Next.js', 'V14'],
  authors: [{ name: 'Zeing', url: 'https://zeing.xyz/' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
