import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/lib/firebase/authContext"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Radius Store | Game Enhancement Tools",
  description: "Premium game enhancement tools and utilities for competitive gaming. Features include Fortnite enhancement, HWID spoofing, and more.",
  keywords: ["game enhancement", "gaming tools", "Fortnite enhancer", "HWID spoofer", "gaming utilities"],
  authors: [{ name: "Radius Store" }],
  creator: "Radius Store",
  publisher: "Radius Store",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://radiusstore.com",
    siteName: "Radius Store",
    title: "Radius Store | Premium Game Enhancement Tools",
    description: "Elevate your gaming experience with Radius Store's premium enhancement tools. Professional-grade utilities for competitive gaming.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radius Store Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radius Store | Game Enhancement Tools",
    description: "Premium game enhancement tools and utilities for competitive gaming",
    images: ["/og-image.png"],
    creator: "@RadiusStore",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
