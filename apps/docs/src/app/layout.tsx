import { RootProvider } from "fumadocs-ui/provider/next"
import type { ReactNode } from "react"

import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: "UI Components Documentation",
  description: "Accessible, customizable components built with Ark UI",
}
