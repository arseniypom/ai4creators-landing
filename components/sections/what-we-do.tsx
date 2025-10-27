import Image from "next/image"

type WhatWeDoProps = {
  schemaImageSrc: string
}

export function WhatWeDo({ schemaImageSrc }: WhatWeDoProps) {
  return (
    <section className="flex flex-col gap-10 border-t border-zinc-200 px-6 py-12 sm:px-12">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">What can InstaGrow do for you?</h2>
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
              <h3 className="text-xl font-semibold sm:text-2xl">Create a strategy</h3>
              <p className="max-w-xl text-base text-zinc-600">
                We turn your business goals, niche, and audience insights into a clear Instagram growth playbook tailored to your brand.
              </p>
            </div>
            <div className="w-full overflow-hidden rounded-3xl border border-zinc-200">
              <Image
                src={schemaImageSrc}
                alt="Strategy creation flow diagram"
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
              Generate Reels scripts and posts for thousands of views with one click
            </h3>
            <p className="max-w-2xl text-base text-zinc-600">
              InstaGrow instantly crafts ready-to-post scripts, captions, and content calendars that are optimized for reach, engagement, and conversions.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
