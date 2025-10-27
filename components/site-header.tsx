"use client";

import Link from "next/link"
import { MouseEvent } from "react"

type SiteHeaderProps = {
  ctaHref?: string
}

export function SiteHeader({ ctaHref = "#waitlist" }: SiteHeaderProps) {
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
      <span className="text-lg font-semibold sm:text-xl">InstaGrow</span>
      <Link
        href={ctaHref}
        onClick={handleCtaClick}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-900 transition hover:border-zinc-900 hover:text-zinc-900"
      >
        Join waitlist
      </Link>
    </header>
  )
}
