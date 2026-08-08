import Link from "next/link";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-6">
      <header className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
          HeGlows
        </p>

        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
          Mobile MVP
        </div>
      </header>

      <section className="flex flex-1 flex-col justify-center pb-8 pt-10">
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
            href="#preview"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition active:scale-[0.99]"
          >
            See a sample report
          </a>
        </div>

        <div
          id="preview"
          className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-4"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
            Preview
          </p>
          <h2 className="mt-2 text-lg font-semibold">
            What your report will look like
          </h2>

          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                Skin
              </p>
              <p className="mt-1 text-sm text-white/75">
                Basic routine, oil control, and daily consistency.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                Hair
              </p>
              <p className="mt-1 text-sm text-white/75">
                Style direction based on your face and hair type.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                Daily plan
              </p>
              <p className="mt-1 text-sm text-white/75">
                Simple actions you can actually follow every day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}