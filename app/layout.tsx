import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/app/ui/footer'
import Header from '@/app/ui/header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokécommerce',
  description: 'A Pokémon themed ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, 'min-safe-h-screen flex flex-col')}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
