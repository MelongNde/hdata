import './globals.css'
import type { Metadata } from 'next'
import { Quicksand, Sora } from 'next/font/google'

const quicksand = Quicksand({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'] 
})


export const metadata: Metadata = {
  title: 'Harvest Data',
  description: 'Find The Perfect Job That You Deserves',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
