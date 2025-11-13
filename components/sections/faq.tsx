import Script from "next/script"
import { ChevronDown, MessageSquare } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  leftTitleStart: string
  leftTitleEmphasis: string
  leftTitleEnd?: string
  leftDescription: string
  ctaLabel: string
  items: readonly FaqItem[]
}

export function FaqSection({
  leftTitleStart,
  leftTitleEmphasis,
  leftTitleEnd = "",
  leftDescription,
  ctaLabel,
  items,
}: FaqSectionProps) {
  return (
    <>
      <section className="relative px-6 py-20 sm:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-full bg-linear-to-b from-transparent via-[#f4f1ff]/70 to-transparent"
        />

        <div className="mx-auto mt-2 grid w-full max-w-6xl grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
              {leftTitleStart}
              <em className="italic">{leftTitleEmphasis}</em>
              {leftTitleEnd}
            </h2>
            <p className="mt-3 max-w-md whitespace-pre-line text-base text-zinc-600 sm:text-lg">
              {leftDescription}
            </p>
            <div className="mt-5">
              <button
                type="button"
                data-tally-open="GxvGok"
                className="inline-flex items-center justify-center rounded-full bg-[#6366f1] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#555ae9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]"
              >
                {ctaLabel}
                <MessageSquare aria-hidden="true" className="ml-2 size-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex w-full flex-col gap-4">
              {items.map((item) => (
                <details
                  key={item.question}
                  className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_40px_120px_-80px_rgba(79,70,229,0.45)] transition-shadow"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left text-lg font-medium text-zinc-800 sm:px-8 sm:py-6 sm:text-xl [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#f3f4ff] text-[#4338ca] transition-transform duration-200 group-open:rotate-180">
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-base leading-relaxed text-zinc-600 sm:px-8 sm:pb-7">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Script
        id="tally-js-faq"
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
    </>
  )
}
