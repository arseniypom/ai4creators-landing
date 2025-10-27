import { Hero } from "@/components/hero"
import { SiteHeader } from "@/components/site-header"
import { ValuePropSection } from "@/components/sections/value-prop"
import { WaitlistSection } from "@/components/sections/waitlist"
import { WhatWeDo } from "@/components/sections/what-we-do"

const rotatingWords = ["views", "followers", "engagement", "sales"]

const checklistItems = [
  "A proprietary unpacking strategy used by top producers worldwide",
  "A detailed report with a thoughtful structure and a step-by-step plan to grow your blog",
  "Reels templates that have hit millions of views — for any niche",
]

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 py-10 text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.3)]">
        <SiteHeader />

        <Hero
          rotatingWords={rotatingWords}
          instagramImageSrc="/images/instagram.webp"
        />

        <WhatWeDo schemaImageSrc="/images/strategy-schema.png" />

        <ValuePropSection checklistItems={checklistItems} />

        <WaitlistSection />
      </main>
    </div>
  )
}
