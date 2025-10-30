import { cn } from "@/lib/utils"

type ValuePropSectionProps = {
  title: string
  description: string
  columns: {
    instagrow: string
    chatgpt: string
  }
  features: readonly {
    label: string
    instagrow: boolean
    chatgpt: boolean
  }[]
}

export function ValuePropSection({
  title,
  description,
  columns,
  features,
}: ValuePropSectionProps) {
  return (
    <section className="flex flex-col gap-8 px-6 py-16 sm:px-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        <p className="max-w-3xl text-base text-zinc-600 sm:text-lg">{description}</p>
      </div>

      <div className="mt-4 overflow-hidden">
        <div className="hidden grid-cols-[minmax(0,2fr)_minmax(0,0.5fr)_minmax(0,0.5fr)] border-b border-zinc-200 md:grid">
          <div />
          <div className="flex items-center justify-center bg-[#e3e7ff] px-8 py-5 text-sm font-semibold uppercase tracking-wide text-zinc-600 md:border-l md:border-zinc-200/60 md:rounded-t-[2.5rem]">
            {columns.instagrow}
          </div>
          <div className="flex items-center justify-center bg-zinc-100 px-8 py-5 text-sm font-semibold uppercase tracking-wide text-zinc-600 md:border-l md:border-zinc-200/60 md:rounded-t-[2.5rem]">
            {columns.chatgpt}
          </div>
        </div>

        <div>
          {features.map((feature, index) => {
            const isLast = index === features.length - 1

            return (
              <div
                key={feature.label}
                className={cn(
                  "grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,0.5fr)_minmax(0,0.5fr)]",
                  !isLast && "border-b border-zinc-200"
                )}
              >
                <div className="px-6 py-4 text-base text-zinc-700 sm:px-8 sm:text-lg">
                  {feature.label}

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-600 md:hidden">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-zinc-800">{columns.instagrow}</span>
                      <FeatureIndicator positive={feature.instagrow} variant="mobile" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-zinc-800">{columns.chatgpt}</span>
                      <FeatureIndicator positive={feature.chatgpt} variant="mobile" />
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    "hidden items-center justify-center bg-[#e3e7ff] px-6 py-4 md:flex",
                    "md:border-l md:border-zinc-200",
                    isLast && "md:rounded-bl-[2.5rem] md:rounded-br-[2.5rem]"
                  )}
                >
                  <FeatureIndicator positive={feature.instagrow} />
                </div>

                <div
                  className={cn(
                    "hidden items-center justify-center bg-zinc-100 px-6 py-4 md:flex",
                    "md:border-l md:border-zinc-200",
                    isLast && "md:rounded-bl-[2.5rem] md:rounded-br-[2.5rem]"
                  )}
                >
                  <FeatureIndicator positive={feature.chatgpt} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FeatureIndicator({
  positive,
  variant = "desktop",
}: {
  positive: boolean
  variant?: "desktop" | "mobile"
}) {
  const sizeClasses = variant === "desktop" ? "h-8 w-8" : "h-6 w-6"
  if (positive) {
    return (
      <span
        className={cn(
          "grid place-items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-500",
          sizeClasses
        )}
        aria-label="Included"
      >
        <svg
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={variant === "desktop" ? "h-4 w-4" : "h-3 w-3"}
        >
          <path
            d="M1.333 6.667 5 10.333 14.667 0.667"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    )
  }

  return (
    <span
      className={cn(
        "grid place-items-center rounded-full border border-rose-500/40 bg-rose-500/10 text-rose-500",
        sizeClasses
      )}
      aria-label="Not included"
    >
      <svg
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={variant === "desktop" ? "h-3.5 w-3.5" : "h-3 w-3"}
      >
        <path
          d="m2.333 2.333 9.334 9.334m-9.334 0 9.334-9.334"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
