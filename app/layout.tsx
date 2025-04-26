import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anthropic: AI Research and Products',
  description: 'AI research and products that put safety at the frontier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 