import Image from 'next/image'
import Screen1 from '@/public/images/screenshots/instagrow-screen-1.png'
import Screen2 from '@/public/images/screenshots/instagrow-screen-2.png'

type ScreenshotsV2Props = {
  title: string
  description?: string
}

export function ScreenshotsV2Section({ title, description }: ScreenshotsV2Props) {
  const images = [
    { src: Screen1, alt: 'InstaGrow – screen 1' },
    { src: Screen2, alt: 'InstaGrow – screen 2' },
  ] as const

  return (
    <section className="relative px-6 py-20 sm:px-12">
      <div
        aria-hidden
        className="absolute inset-x-6 top-10 -z-10 h-[520px] rounded-[3rem] bg-gradient-to-b from-[#d1d4ff]/60 via-white to-white blur-3xl sm:inset-x-12"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">{title}</h2>
        {description ? (
          <p className="text-lg text-zinc-600 sm:text-xl">{description}</p>
        ) : null}
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.3)]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              priority={idx === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </section>
  )

}


