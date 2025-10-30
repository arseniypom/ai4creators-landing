import { ChevronDown } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  title: string
  description: string
  items: readonly FaqItem[]
}

export function FaqSection({ title, description, items }: FaqSectionProps) {
  return (
    <section className="relative px-6 py-20 sm:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-[#f4f1ff]/70 to-transparent"
      />

      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl whitespace-pre-line text-base text-zinc-600 sm:text-lg">{description}</p>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-3xl flex-col gap-4">
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
    </section>
  )
}
