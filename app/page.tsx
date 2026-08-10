import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#0b0908] text-[#f6efe8]">
      {/* soft glow from the top */}
      <div className="pointer-events-none absolute left-1/2 top-[-130px] h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.28)_0%,rgba(245,166,35,0.12)_28%,rgba(245,166,35,0)_72%)] blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[180px] w-[360px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,193,90,0.12)_0%,rgba(255,193,90,0)_72%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 py-4 sm:px-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5a623]/20 bg-[#f5a623]/10 text-xs font-semibold text-[#fff8f0] shadow-[0_0_24px_rgba(245,166,35,0.18)]">
              H
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f6efe8]/55">
              HeGlows
            </p>
          </div>

          <Link
            href="/upload"
            className="rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 px-3 py-1 text-[11px] text-[#f6efe8]/75 transition hover:border-[#f5a623]/35 hover:bg-[#f5a623]/10"
          >
            Try free
          </Link>
        </header>

        <section className="flex flex-1 flex-col justify-start py-10">
          <div className="w-full">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 px-3 py-1 text-[11px] text-[#f5b544]/90">
              <span className="h-2 w-2 rounded-full bg-[#f5a623] shadow-[0_0_12px_rgba(245,166,35,0.7)]" />
              Personal glow-up roadmap
            </div>

            <h1 className="max-w-xs text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#fff8f0] sm:text-5xl">
              Build your glow-up with a{" "}
              <span className="text-[#f5a623]">clear plan.</span>
            </h1>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#d8ccc0]/76">
              HeGlows turns your selfie into a simple, practical roadmap for
              your hair, skin, style, and daily upgrades.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/upload"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#ffc15a] to-[#f59b20] px-5 text-sm font-semibold text-[#17100a] shadow-[0_10px_34px_rgba(245,166,35,0.28)] transition hover:brightness-105 active:scale-[0.99]"
              >
                Upload your selfie →
              </Link>

              <a
                href="#preview"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-[#f5a623]/15 bg-[#1a1511] px-5 text-sm font-medium text-[#f6efe8]/90 transition hover:border-[#f5a623]/30 hover:bg-[#211a14] active:scale-[0.99]"
              >
                See what you get
              </a>
            </div>

            <p className="mt-4 text-[12px] text-[#f6efe8]/55">
              Free • No signup • Results in 60 seconds
            </p>
          </div>

          {/* before / after */}
          <div className="mt-12 grid gap-4">
            <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8ccc0]/55">
                Before HeGlows
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    Guessing what to improve first.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    No clear haircut, skin, or style direction.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    Trying random fixes without a plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8ccc0]/55">
                After HeGlows
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    A simple roadmap with the highest-impact next steps.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    Personal guidance for hair, skin, style, and daily habits.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    One focused plan you can follow today.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* what you get */}
          <div id="preview" className="mt-14">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#f5a623]/85">
                What you get
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#fff8f0]">
                A full report on your highest-impact upgrades
              </h2>
            </div>

            <div className="mt-7 grid gap-4">
              <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5a623]/15 bg-[#f5a623]/8 text-[#f5b544]">
                  ✦
                </div>
                <h3 className="text-lg font-semibold text-[#fff8f0]">
                  Hair direction
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/76">
                  Get a hairstyle direction that fits your face and hair type.
                </p>
              </div>

              <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5a623]/15 bg-[#f5a623]/8 text-[#f5b544]">
                  ✦
                </div>
                <h3 className="text-lg font-semibold text-[#fff8f0]">
                  Skin routine
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/76">
                  Get a basic routine based on your skin type and concerns.
                </p>
              </div>

              <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5a623]/15 bg-[#f5a623]/8 text-[#f5b544]">
                  ✦
                </div>
                <h3 className="text-lg font-semibold text-[#fff8f0]">
                  Style direction
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/76">
                  See what clothing and visual style suits you best.
                </p>
              </div>

              <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5a623]/15 bg-[#f5a623]/8 text-[#f5b544]">
                  ✦
                </div>
                <h3 className="text-lg font-semibold text-[#fff8f0]">
                  Daily action plan
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/76">
                  Get the top 3 next moves to improve fast without confusion.
                </p>
              </div>
            </div>
          </div>

          {/* final CTA */}
          <div className="mt-14 rounded-[2rem] border border-[#f5a623]/14 bg-[linear-gradient(180deg,rgba(245,166,35,0.08),rgba(23,19,15,0.95))] px-5 py-8 text-center shadow-[0_0_60px_rgba(245,166,35,0.08)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#f5a623]/85">
              Ready to start?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#fff8f0]">
              Discover your best look today
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#d8ccc0]/76">
              See the highest-impact changes you can make to your appearance.
            </p>

            <Link
              href="/upload"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#ffc15a] to-[#f59b20] px-6 text-sm font-semibold text-[#17100a] shadow-[0_10px_34px_rgba(245,166,35,0.28)] transition hover:brightness-105 active:scale-[0.99]"
            >
              Upload your selfie →
            </Link>
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-[#f5a623]/10 py-4 text-sm text-[#d8ccc0]/55">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f5a623]/20 bg-[#f5a623]/10 text-xs font-semibold text-[#fff8f0]">
              H
            </div>
            <span>HeGlows</span>
          </div>
          <p>© 2026 HeGlows</p>
        </footer>
      </div>
    </main>
  );
}