// 'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Quicksand, Sora, Inter } from 'next/font/google'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeToggle } from '@/components/ThemeToggle'
import { Toaster } from '@/components/ui/toaster'

// const quicksand = Quicksand({ 
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'] 
// })

const inter = Inter({ 
  weight: ['100','200','300','400', '500', '600', '700', '800', '900'],
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
      {/* <NextThemesProvider attribute='class' defaultTheme='dark' enableSystem>
        <div className='min-h-screen'>

        </div>
      </NextThemesProvider> */}
          <body className={inter.className}>{children}</body>
    </html>
  )
}
