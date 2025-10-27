import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="flex flex-col gap-8 border-t border-zinc-200 px-6 py-12 sm:px-12"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Be the first to try and finally get results
        </h2>
        <p className="max-w-2xl text-base text-zinc-600">
          Join our waitlist and get notified when the app is launched. No spam, no newsletter.
        </p>
      </div>
      <form className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex w-full flex-1 items-center rounded-full border border-zinc-200 bg-white px-5 py-3 shadow-inner focus-within:border-zinc-900">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full bg-transparent text-base text-zinc-700 outline-none placeholder:text-zinc-400"
            autoComplete="email"
          />
        </div>
        <InteractiveHoverButton
          type="submit"
          className="w-full px-6 py-3 text-sm font-semibold uppercase tracking-wide sm:w-auto"
        >
          Join waitlist
        </InteractiveHoverButton>
      </form>
    </section>
  )
}
