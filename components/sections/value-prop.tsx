type ValuePropSectionProps = {
  checklistItems: string[]
}

export function ValuePropSection({ checklistItems }: ValuePropSectionProps) {
  return (
    <section className="flex flex-col gap-8 border-t border-zinc-200 px-6 py-12 sm:px-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold sm:text-3xl">Why can&apos;t I just do this with ChatGPT?</h2>
        <p className="max-w-2xl text-base text-zinc-600">
          You can try — but only our system gives you the ingredients creators use to grow consistently without guesswork.
        </p>
      </div>
      <ul className="flex flex-col gap-4 text-base text-zinc-700">
        {checklistItems.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3"
          >
            <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-md border border-emerald-500 bg-emerald-500/10">
              <svg
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-emerald-600"
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
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
