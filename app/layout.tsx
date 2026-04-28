import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"   // 👈 ADD THIS

import Navbar from "@/components/navbar"
import DownloadButton from "@/components/sections/download"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RecoveryAssist - Scam Case Documentation and Reporting Guidance",
  description:
    "RecoveryAssist helps users organize scam case details, prepare documentation, and understand the next steps for reporting and follow-up.",
  icons: {
    apple: "./apple-touch-icon.png",
  },
  manifest: "./site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">

        {/* ✅ Google Ads Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18125078694"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18125078694');
          `}
        </Script>

        <Navbar />
        {children}
        <DownloadButton />
      </body>
    </html>
  )
}