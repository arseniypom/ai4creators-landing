"use client"

import Link from "next/link"
import { MouseEvent } from "react"

import { i18n, type Locale } from "@/i18n-config"

import { LocaleSwitcher } from "./locale-switcher"

type SiteHeaderProps = {
  brand: string
  ctaLabel: string
  ctaHref?: string
  locale: Locale
  localeSwitcher: {
    label: string
    shortNames: Record<Locale, string>
    localeNames: Record<Locale, string>
  }
}

export function SiteHeader({
  brand,
  ctaLabel,
  ctaHref = "#waitlist",
  locale,
  localeSwitcher,
}: SiteHeaderProps) {
  const handleCtaClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!ctaHref.startsWith("#")) {
      return
    }

    event.preventDefault()

    const target = document.querySelector(ctaHref)
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", ctaHref)
    }
  }

  return (
    <header className="flex flex-col gap-4 border-b border-zinc-200 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-12">
      <span className="text-lg font-semibold sm:text-xl">{brand}</span>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <LocaleSwitcher
          currentLocale={locale}
          label={localeSwitcher.label}
          shortNames={localeSwitcher.shortNames}
          localeNames={localeSwitcher.localeNames}
          availableLocales={i18n.locales}
        />
        <Link
          href={ctaHref}
          onClick={handleCtaClick}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-900 transition hover:border-zinc-900 hover:text-zinc-900"
        >
          {ctaLabel}
        </Link>
      </div>
    </header>
  )
}
