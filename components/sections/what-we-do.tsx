import Image from "next/image"

type StepContent = {
  title: string
  description: string
  imageAlt?: string
}

type WhatWeDoProps = {
  title: string
  steps: readonly StepContent[]
  schemaImageSrc: string
}

export function WhatWeDo({ title, steps, schemaImageSrc }: WhatWeDoProps) {
  const [firstStep, secondStep] = steps

  return (
    <section className="flex flex-col gap-10 border-t border-zinc-200 px-6 py-12 sm:px-12">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      </div>

      <div className="flex flex-col gap-14">
        <article className="flex flex-col gap-8 lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
          <div>
            <span className="inline-flex h-12 min-w-12 items-center justify-center rounded-2xl border border-zinc-200 px-4 text-lg font-semibold">
              1
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold sm:text-2xl">
                {firstStep?.title}
              </h3>
              <p className="max-w-xl text-base text-zinc-600">
                {firstStep?.description}
              </p>
            </div>
            <div className="w-full overflow-hidden rounded-3xl border border-zinc-200">
              <Image
                src={schemaImageSrc}
                alt={firstStep?.imageAlt ?? firstStep?.title ?? ""}
                width={1200}
                height={840}
                className="h-auto w-full"
              />
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-8 lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
          <div>
            <span className="inline-flex h-12 min-w-12 items-center justify-center rounded-2xl border border-zinc-200 px-4 text-lg font-semibold">
              2
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold sm:text-2xl">
              {secondStep?.title}
            </h3>
            <p className="max-w-2xl text-base text-zinc-600">
              {secondStep?.description}
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
