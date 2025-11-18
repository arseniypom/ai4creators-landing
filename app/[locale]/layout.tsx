import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"

import { i18n, resolveLocale } from "@/i18n-config"
import { getDictionary } from "@/lib/get-dictionary"

import "../globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const resolvedLocale = resolveLocale(locale)
  const dictionary = await getDictionary(resolvedLocale)
  const metadata = dictionary.metadata

  return {
    title: metadata.title,
    description: metadata.description,
    applicationName: "InstaGrow",
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.svg?v=2", type: "image/svg+xml" },
        { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
        {
          url: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.svg?v=2",
    },
  }
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const resolvedLocale = resolveLocale(locale)

  return (
    <html lang={resolvedLocale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="65affb1c-3e1c-461a-bab4-e9561bf480c9"
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17739393932"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17739393932');`}
        </Script>
        {children}
      </body>
    </html>
  )
}
