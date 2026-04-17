import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tiago Daneluzz — Software Developer',
  description: 'Personal portfolio of Tiago Daneluzz, software developer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  )
}
