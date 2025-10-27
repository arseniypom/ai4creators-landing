"use client";

import Image from "next/image";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { WordRotate } from "@/components/ui/word-rotate";

type HeroProps = {
  rotatingWords: string[];
  instagramImageSrc: string;
};

export function Hero({ rotatingWords, instagramImageSrc }: HeroProps) {
  const handleJoinWaitlistClick = () => {
    const target = document.querySelector("#waitlist");
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#waitlist");
    }
  };

  return (
    <section className="grid gap-12 px-6 py-12 sm:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-semibold leading-snug sm:text-5xl">
          Grow any Instagram account, the smart way
        </h1>
        <p className="max-w-xl text-lg text-zinc-600">
          Get a growth strategy tailored to your audience and generate
          high-performing Reels with one click.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <InteractiveHoverButton
            type="button"
            onClick={handleJoinWaitlistClick}
          >
            Join the waitlist
          </InteractiveHoverButton>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="rounded-[2.1rem] bg-white p-6">
          <Image
            src={instagramImageSrc}
            alt="Instagram growth preview"
            width={520}
            height={520}
            className="h-auto w-[min(280px,50vw)] sm:w-[320px] md:w-[360px] lg:w-[320px] xl:w-[360px]"
            priority
          />
        </div>

        <div className="flex gap-2 ml-[20%] font-medium self-baseline text-zinc-800">
          <span className="flex items-center justify-center text-4xl text-zinc-900">+</span>
          <WordRotate
            words={rotatingWords}
            className="text-4xl font-medium text-zinc-700"
            duration={2200}
          />
        </div>
      </div>
    </section>
  );
}
