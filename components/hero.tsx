"use client";

type HeroProps = {
  eyebrow: string;
  titlePrimary: string;
  titleHighlight: string;
  description: string;
  ctaLabel: string;
};

export function Hero({
  eyebrow,
  titlePrimary,
  titleHighlight,
  description,
  ctaLabel,
}: HeroProps) {
  const handleJoinWaitlistClick = () => {
    const target = document.querySelector("#waitlist");
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#waitlist");
    }
  };

  return (
    <section className="relative flex flex-col items-center gap-6 overflow-hidden px-6 py-20 text-center sm:px-12 sm:py-24 md:gap-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-b from-[#f4f1ff] via-white to-white" />
      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
        {eyebrow}
      </span>
      <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl md:text-6xl">
        {titlePrimary}{" "}
        <span className="bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] bg-clip-text text-transparent">
          {titleHighlight}
        </span>
      </h1>
      <p className="max-w-2xl text-lg text-zinc-600 sm:text-xl">
        {description}
      </p>
      <button
        type="button"
        onClick={handleJoinWaitlistClick}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] px-8 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-20px_rgba(168,85,247,0.8)] transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ec4899]"
      >
        {ctaLabel}
      </button>
    </section>
  );
}
