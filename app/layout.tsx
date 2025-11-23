import type React from "react"
// ... existing code ...
import { SiteHeader } from "@/components/site-header"

// ... existing code ...
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased min-h-screen flex flex-col`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.app'
    };
