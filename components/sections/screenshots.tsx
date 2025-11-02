'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ScreenshotItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

type ScreenshotsSectionProps = {
  title: string;
  description: string;
  items: readonly ScreenshotItem[];
};

export function ScreenshotsSection({
  title,
  description,
  items,
}: ScreenshotsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const current = items[currentIndex];

  return (
    <section className="relative px-6 py-20 sm:px-12">
      <div
        aria-hidden
        className="absolute inset-x-6 top-10 -z-10 h-[520px] rounded-[3rem] bg-gradient-to-b from-[#d1d4ff]/60 via-white to-white blur-3xl sm:inset-x-12"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-zinc-600 sm:text-xl">{description}</p>
      </div>

      <div className="relative mx-auto mt-12 max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.3)]">
          <div className="relative aspect-[16/9] w-full mt-2">
            <Image
              src={current.imageSrc}
              alt={current.imageAlt ?? current.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-contain"
            />
          </div>
          <div className="px-6 py-6 text-center sm:px-10">
            <h3 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
              {current.title}
            </h3>
            <p className="mt-2 text-base text-zinc-600">
              {current.description}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous screenshot"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white/90 p-2 text-zinc-700 shadow-lg backdrop-blur hover:bg-white sm:left-4"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Next screenshot"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white/90 p-2 text-zinc-700 shadow-lg backdrop-blur hover:bg-white sm:right-4"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          className="mt-6 flex justify-center gap-2"
          role="tablist"
          aria-label="Screenshot navigation"
        >
          {items.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to screenshot ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-[#6366f1] to-[#ec4899]'
                  : 'w-2 bg-zinc-300 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
