import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-80px] top-[220px] h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-6">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
              HeGlows
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
            Mobile MVP
          </div>
        </header>

        <section className="flex flex-1 flex-col justify-center pb-10 pt-10">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
            <span className="h-2 w-2 rounded-full bg-white" />
            AI glow-up roadmap
          </div>

          <h1 className="max-w-xs text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            Build your glow-up with a clear plan.
          </h1>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65 sm:text-base">
            HeGlows gives you a simple mobile-first plan for your looks,
            confidence, and daily habits.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/upload"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-5 text-sm font-semibold text-black transition active:scale-[0.99]"
            >
              Get early access
            </Link>

            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition active:scale-[0.99]"
            >
              See features
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] text-white/40">Plan</p>
              <p className="mt-1 text-sm font-semibold">Personal</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] text-white/40">Tracking</p>
              <p className="mt-1 text-sm font-semibold">Daily</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] text-white/40">Advice</p>
              <p className="mt-1 text-sm font-semibold">Simple</p>
            </div>
          </div>
        </section>

        <section id="features" className="pb-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                  Step 1
                </p>
                <h2 className="mt-1 text-base font-semibold">Upload a selfie</h2>
                <p className="mt-1 text-sm leading-5 text-white/60">
                  Start with one clear photo so the app can build your profile.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                  Step 2
                </p>
                <h2 className="mt-1 text-base font-semibold">Answer a few questions</h2>
                <p className="mt-1 text-sm leading-5 text-white/60">
                  Tell us your hair, skin, body type, and goals.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                  Step 3
                </p>
                <h2 className="mt-1 text-base font-semibold">Get your report</h2>
                <p className="mt-1 text-sm leading-5 text-white/60">
                  Receive a personalized plan with clear actions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}