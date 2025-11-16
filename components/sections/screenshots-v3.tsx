'use client'

import { Root as Tabs, List as TabsList, Trigger as TabsTrigger, Content as TabsContent } from '@radix-ui/react-tabs'
import { ArrowRight, Download, Edit, Lightbulb, Lock, Target, Users } from 'lucide-react'

type ScreenshotsV3Props = {
  title: string
  description?: string
}

export function ScreenshotsV3Section({ title, description }: ScreenshotsV3Props) {
  const tabs: { id: string; label: string; enabled: boolean }[] = [
    { id: 'profile', label: 'Profile', enabled: false },
    { id: 'brand', label: 'Brand', enabled: true },
    { id: 'audience', label: 'Audience', enabled: true },
    { id: 'content', label: 'Content', enabled: false },
    { id: 'topics', label: 'Topics', enabled: false },
  ]

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

      <div className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.3)]">
        <div className="border-b border-zinc-200 bg-white/60 px-6 py-5 backdrop-blur">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-zinc-900">Strategy & Marketing Pack</h3>
              <p className="text-sm text-zinc-600">Your complete Instagram growth blueprint</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-700 opacity-70 cursor-auto"
              >
                <Edit className="h-4 w-4" aria-hidden="true" />
                Edit Brief
              </button>
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-700 opacity-70 cursor-auto"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Export
              </button>
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-700 opacity-70 cursor-auto"
              >
                Open Planner
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="brand" className="bg-white/50 px-6 pb-8 pt-4 backdrop-blur">
          <TabsList className="mb-6 grid w-full grid-cols-5 gap-2">
            {tabs.map((t) => (
              <TabsTrigger
                key={t.id}
                value={t.id}
                disabled={!t.enabled}
                className={[
                  'flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm',
                  'data-[state=active]:[border-color:var(--brand)] data-[state=active]:[background:color-mix(in srgb,var(--brand) 12%,white)] data-[state=active]:[color:var(--brand)]',
                  'data-[state=inactive]:border-zinc-200 data-[state=inactive]:bg-white/80 data-[state=inactive]:text-zinc-700 data-[state=inactive]:hover:bg-zinc-50',
                  'data-[disabled]:bg-white/70 data-[disabled]:text-zinc-400 data-[disabled]:border-zinc-200 data-[disabled]:cursor-auto',
                ].join(' ')}
              >
                <span>{t.label}</span>
                {!t.enabled ? <Lock className="h-4 w-4" aria-hidden="true" /> : null}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="brand">
            <BrandTab />
          </TabsContent>
          <TabsContent value="audience">
            <AudienceTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function BrandTab() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-zinc-900">
            <Target className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--brand)' }} />
            Brand Goal
          </h3>
          <p className="text-sm leading-relaxed text-zinc-600">
            Build a simple, profitable online coaching business that helps tired office workers feel
            strong, clear-headed and proud of their body — without training like athletes or fitness
            influencers.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-zinc-900">
            <Lightbulb className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--brand)' }} />
            Mission
          </h3>
          <p className="text-sm leading-relaxed text-zinc-600">
            Help busy professionals create a clear, realistic fitness routine that survives stress,
            long workdays and travel — so they can look better, feel sharper and actually enjoy
            living in their body.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h3 className="mb-4 text-zinc-900">Core Values</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-zinc-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
                style={{ background: 'var(--brand)' }}>
                1
              </div>
              <h4 className="text-sm text-zinc-900">Evidence over noise</h4>
            </div>
            <p className="text-sm text-zinc-600">
              No fads, no magic tricks. If it doesn&apos;t work in real life and in research, it
              doesn&apos;t go into the plan.
            </p>
          </div>

          <div className="rounded-lg bg-zinc-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
                style={{ background: 'var(--brand)' }}>
                2
              </div>
              <h4 className="text-sm text-zinc-900">Compassionate honesty</h4>
            </div>
            <p className="text-sm text-zinc-600">
              No shaming, no fake positivity. You tell the truth kindly, even when it&apos;s hard to
              hear.
            </p>
          </div>

          <div className="rounded-lg bg-zinc-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
                style={{ background: 'var(--brand)' }}>
                3
              </div>
              <h4 className="text-sm text-zinc-900">Lifestyle-first design</h4>
            </div>
            <p className="text-sm text-zinc-600">
              Workouts, food and recovery are built around work, family and mental health — not in a
              fight with them.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h3 className="mb-4 text-zinc-900">Brand DNA</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="shrink-0 rounded-full border px-2.5 py-1 text-xs"
              style={{ borderColor: 'color-mix(in srgb,var(--brand) 30%, white)', color: 'var(--brand)' }}>
              Role
            </div>
            <p className="text-sm text-zinc-700">
              The Calm Expert — you cut through the chaos and give people the 20% that actually
              changes their body and energy.
            </p>
          </div>

          <div className="h-px w-full bg-zinc-200" />

          <div className="flex gap-4">
            <div className="shrink-0 rounded-full border px-2.5 py-1 text-xs"
              style={{ borderColor: 'color-mix(in srgb,var(--brand) 30%, white)', color: 'var(--brand)' }}>
              Personality
            </div>
            <p className="text-sm text-zinc-700">
              Direct but kind, calm, slightly nerdy. You talk like a smart friend, not a drill
              sergeant.
            </p>
          </div>

          <div className="h-px w-full bg-zinc-200" />

          <div className="flex gap-4">
            <div className="shrink-0 rounded-full border px-2.5 py-1 text-xs"
              style={{ borderColor: 'color-mix(in srgb,var(--brand) 30%, white)', color: 'var(--brand)' }}>
              Promise
            </div>
            <p className="text-sm text-zinc-700">
              "Strong for real life, not just for photos."
            </p>
          </div>

          <div className="h-px w-full bg-zinc-200" />

          <div className="flex gap-4">
            <div className="shrink-0 rounded-full border px-2.5 py-1 text-xs"
              style={{ borderColor: 'color-mix(in srgb,var(--brand) 30%, white)', color: 'var(--brand)' }}>
              Proof
            </div>
            <p className="text-sm text-zinc-700">
              You specialize in people who tried many apps and programs before. With you, they
              finally stay consistent for 6+ months.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AudienceTab() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h3 className="mb-3 flex items-center gap-2 text-zinc-900">
          <Users className="h-5 w-5" aria-hidden="true" style={{ color: 'var(--brand)' }} />
          Short Audience Portrait
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600">
          US-based men and women, 27–40 years old, who work at a computer (developers, product
          managers, marketers, consultants, designers). They earn well, sit a lot, feel tired and
          are not happy with their body, even if they "know what they should do".
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h3 className="mb-3 text-zinc-900">
          Top 3 Pains <span className="text-sm text-zinc-500">(what they would say out loud)</span>
        </h3>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 p-3">
            <div className="mb-1.5 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
                style={{ background: 'var(--brand)' }}>
                1
              </div>
              <h4 className="text-sm text-zinc-900">All-or-nothing loop</h4>
            </div>
            <p className="text-xs italic text-zinc-600">
              "I&apos;m either 100% on a plan… or I crash by Thursday and give up."
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 p-3">
            <div className="mb-1.5 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
                style={{ background: 'var(--brand)' }}>
                2
              </div>
              <h4 className="text-sm text-zinc-900">Low energy vs. responsibilities</h4>
            </div>
            <p className="text-xs italic text-zinc-600">
              "After work and family stuff, my brain is done. I don&apos;t have energy left for gym
              or cooking."
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 p-3">
            <div className="mb-1.5 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
                style={{ background: 'var(--brand)' }}>
                3
              </div>
              <h4 className="text-sm text-zinc-900">Information overload & distrust</h4>
            </div>
            <p className="text-xs italic text-zinc-600">
              "Everyone says something different. I don&apos;t know who to trust, so I freeze or keep
              restarting."
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h3 className="mb-4 text-zinc-900">Deep, Unspoken Desires</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-zinc-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
                style={{ background: 'var(--success)' }}>
                1
              </div>
              <h4 className="text-sm text-zinc-900">Identity upgrade</h4>
            </div>
            <p className="text-sm text-zinc-600">
              Quietly become that person who takes care of their body — consistent, disciplined and
              calm about food and training.
            </p>
          </div>

          <div className="rounded-lg bg-zinc-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
                style={{ background: 'var(--success)' }}>
                2
              </div>
              <h4 className="text-sm text-zinc-900">Calm confidence in their body</h4>
            </div>
            <p className="text-sm text-zinc-600">
              Look in the mirror, in clothes or naked, and think: "Yes. This finally matches how
              good I am in other areas of life."
            </p>
          </div>

          <div className="rounded-lg bg-zinc-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
                style={{ background: 'var(--success)' }}>
                3
              </div>
              <h4 className="text-sm text-zinc-900">A guide who sees the whole picture</h4>
            </div>
            <p className="text-sm text-zinc-600">
              A coach who understands deadlines, stress, kids, travel and anxiety — and says: "Here
              is the smallest, realistic plan that still gets you real results."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


