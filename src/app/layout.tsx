import { PropsWithChildren } from 'react'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

/** Body default font - Poppins */
const defaultFont = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], fallback: ['sans-serif'] })

export const metadata: Metadata = {
  title: {
    template: 'IMG - %s',
    default: 'Image Music Gallery'
  },
  authors: [{ name: 'Daniel Pelajo', url: 'https://github.com/T4rr4sk3' }],
  keywords: ['next', 'nextjs', 'tailwindcss', 'tailwind', 'image', 'images', 'image gallery', 'music', 'musics','image gallery music', 'drawings', 'drawing', 'next development', 'react'],
  description: 'Project for an image gallery with background music for the images/gifs, using Next, Tailwind and others.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-Br">
      <body className={defaultFont.className}>{children}</body>
    </html>
  )
}
