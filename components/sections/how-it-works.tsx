import type { ComponentType } from "react"

import { Rocket, Sparkles } from "lucide-react"

type HowItWorksStep = {
  title: string
  description: string
  highlights: readonly string[]
  icon: "sparkles" | "rocket"
}

type HowItWorksProps = {
  title: string
  description: string
  steps: readonly HowItWorksStep[]
}

const iconMap: Record<HowItWorksStep["icon"], ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  rocket: Rocket,
}

export function HowItWorks({ title, description, steps }: HowItWorksProps) {
  return (
    <section className="relative px-6 py-20 sm:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-16 -z-10 h-[480px] rounded-[3rem] bg-gradient-to-b from-[#d1d4ff]/70 via-white to-white blur-3xl sm:inset-x-12"
      />
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">{title}</h2>
        <p className="text-lg text-zinc-600 sm:text-xl">{description}</p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon]

          return (
            <article key={step.title} className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-[#a855f7]/35 via-[#6366f1]/25 to-[#ec4899]/35 blur-2xl"
              />
              <div className="relative flex h-full flex-col gap-6 rounded-[1.75rem] border border-white/70 bg-white/90 p-8 shadow-[0_35px_100px_-60px_rgba(79,70,229,0.7)] backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-b from-[#6366f1] to-[#a855f7] text-lg font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="flex items-center gap-3 text-[#6366f1]">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-left">
                  <h3 className="text-xl font-semibold text-zinc-900 sm:text-2xl">{step.title}</h3>
                  <p className="text-base text-zinc-600">{step.description}</p>
                </div>

                <ul className="mt-2 space-y-2 text-left">
                  {step.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span className="mt-[6px] inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
