import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#0b0908] text-[#f6efe8]">
      {/* Medium-strength hero glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-150px] h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.34)_0%,rgba(245,166,35,0.16)_30%,rgba(245,166,35,0)_72%)] blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-[-20px] h-[220px] w-[420px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,193,90,0.18)_0%,rgba(255,193,90,0)_72%)] blur-3xl" />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 py-4 sm:px-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#f5a623]/20 bg-[#f5a623]/10 text-[10px] font-bold tracking-[-0.08em] text-[#fff8f0] shadow-[0_0_24px_rgba(245,166,35,0.18)]">
              HG
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f6efe8]/55">
              HeGlow
            </p>
          </div>

          <Link
            href="/upload"
            className="rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 px-3 py-1 text-[11px] text-[#f6efe8]/75 transition hover:border-[#f5a623]/35 hover:bg-[#f5a623]/10"
          >
            Try free
          </Link>
        </header>

        {/* Hero */}
        <section className="flex flex-1 flex-col justify-start py-10">
          <div className="w-full">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 px-3 py-1 text-[11px] text-[#f5b544]/90">
              <span className="h-2 w-2 rounded-full bg-[#f5a623] shadow-[0_0_12px_rgba(245,166,35,0.7)]" />
              Built for men who want to level up
            </div>

            <h1 className="max-w-sm text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#fff8f0] sm:text-5xl">
              Your glow-up.
              <br />
              <span className="text-[#f5a623]">Your game plan.</span>
            </h1>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#d8ccc0]/76">
              HeGlow is a personalized appearance improvement system for men.
              Get a clear plan for your hair, skin, style, and daily habits
              based on you.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/upload"
                className="heglow-amber-button inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-semibold active:scale-[0.99]"
              >
                Start your glow-up →
              </Link>

              <a
                href="#preview"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-[#f5a623]/15 bg-[#1a1511] px-5 text-sm font-medium text-[#f6efe8]/90 transition hover:border-[#f5a623]/30 hover:bg-[#211a14] active:scale-[0.99]"
              >
                See what you get
              </a>
            </div>

            <p className="mt-4 text-[12px] text-[#f6efe8]/55">
              Free • No signup • Personalized in about 60 seconds
            </p>
          </div>

          {/* Before / After */}
          <div className="mt-12 grid gap-4">
            <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8ccc0]/55">
                Without a plan
              </p>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    You know you want to improve, but don't know what to fix
                    first.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    Hair, skin, style, and appearance advice is scattered
                    everywhere.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    You keep trying random changes without knowing what will
                    make the biggest difference.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8ccc0]/55">
                With HeGlow
              </p>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    Know your highest-impact improvements first.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    Get personalized direction for your hair, skin, style,
                    and appearance.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#f5a623]/10 bg-[#0f0d0b] p-4">
                  <p className="text-sm text-[#d8ccc0]/80">
                    Follow one focused plan instead of guessing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product preview */}
          <div id="preview" className="mt-16">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#f5a623]/85">
                Your personalized report
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#fff8f0]">
                See what's behind the curtain
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#d8ccc0]/70">
                A preview of the kind of personalized roadmap you'll get after
                completing your profile.
              </p>
            </div>

            {/* Phone preview */}
            <div className="relative mt-10 flex justify-center">
              {/* Medium phone glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.30)_0%,rgba(245,166,35,0.14)_32%,rgba(245,166,35,0)_72%)] blur-3xl"
              />

              {/* Secondary soft glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[42%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#ffc15a]/10 blur-[80px]"
              />

              {/* Phone */}
              <div className="relative w-[292px] rounded-[2.6rem] border-[7px] border-[#050403] bg-[#090806] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.7),0_0_90px_rgba(245,166,35,0.20)]">
                {/* Phone top speaker */}
                <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-1 w-12 -translate-x-1/2 rounded-full bg-[#2d2924]" />

                <div className="overflow-hidden rounded-[2rem] border border-[#f5a623]/10 bg-[#12100e]">
                  {/* Mini result header */}
                  <div className="px-4 pb-2 pt-7">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#f5a623]/70">
                          Your glow report
                        </p>

                        <p className="mt-1 text-[13px] font-semibold text-[#fff8f0]">
                          Your personalized result
                        </p>
                      </div>

                      <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#f5a623]/15 bg-[#f5a623]/8 text-[7px] font-bold text-[#fff8f0]">
                        HG
                      </div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="mx-3 mt-3 rounded-2xl border border-[#f5a623]/15 bg-[#191613] p-4">
                    <p className="text-center text-[7px] font-semibold uppercase tracking-[0.25em] text-[#f5a623]/70">
                      HeGlow Score
                    </p>

                    <div className="mt-1 flex items-end justify-center gap-1">
                      <span className="text-[38px] font-bold leading-none text-[#ffc15a]">
                        74
                      </span>

                      <span className="mb-1 text-[9px] text-[#d8ccc0]/45">
                        /100
                      </span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#2b251f]">
                      <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-[#f59b20] to-[#ffc15a]" />
                    </div>

                    <p className="mt-2 text-center text-[8px] font-medium text-[#d8ccc0]/70">
                      Strong baseline. High upside.
                    </p>
                  </div>

                  {/* Hairstyle */}
                  <div className="mx-3 mt-3 rounded-2xl border border-[#f5a623]/10 bg-[#191613] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#d8ccc0]/45">
                        Best hairstyle
                      </p>

                      <span className="rounded-full border border-[#f5a623]/10 bg-[#211a14] px-2 py-0.5 text-[6px] uppercase tracking-wider text-[#f5a623]/60">
                        Matched
                      </span>
                    </div>

                    <p className="mt-2 text-[14px] font-semibold leading-tight text-[#fff8f0]">
                      Textured Mid-Length Crop
                    </p>

                    <p className="mt-1 text-[8px] leading-4 text-[#d8ccc0]/55">
                      Adds texture and movement while keeping your proportions
                      balanced.
                    </p>

                    <div className="mt-3 flex gap-1.5">
                      <span className="rounded-full bg-[#211a14] px-2 py-1 text-[6px] text-[#d8ccc0]/60">
                        Wavy hair
                      </span>

                      <span className="rounded-full bg-[#211a14] px-2 py-1 text-[6px] text-[#d8ccc0]/60">
                        Oval face
                      </span>
                    </div>
                  </div>

                  {/* Top 3 */}
                  <div className="mx-3 mt-3 rounded-2xl border border-[#f5a623]/10 bg-[#191613] p-4">
                    <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#d8ccc0]/45">
                      Top 3 improvements
                    </p>

                    <div className="mt-3 space-y-2.5">
                      {[
                        "Improve hairstyle direction",
                        "Build a consistent skin routine",
                        "Upgrade overall presentation",
                      ].map((item, index) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffc15a] to-[#f59b20] text-[7px] font-bold text-[#17100a]">
                            {index + 1}
                          </span>

                          <p className="text-[8px] font-medium leading-3 text-[#f6efe8]/85">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product suggestions */}
                  <div className="mx-3 mb-3 mt-3 rounded-2xl border border-[#f5a623]/10 bg-[#191613] p-4">
                    <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#d8ccc0]/45">
                      Product suggestions
                    </p>

                    <div className="mt-3 grid grid-cols-3 gap-1.5">
                      {["Matte Clay", "Brow Gel", "SPF 50"].map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-[#f5a623]/8 bg-[#211a14] p-2 text-center"
                        >
                          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#ffc15a] to-[#9f6418] shadow-[0_4px_12px_rgba(245,166,35,0.15)]" />

                          <p className="mt-2 text-[6px] font-semibold leading-3 text-[#f6efe8]/80">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What you get */}
          <div className="mt-16">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#f5a623]/85">
                What you get
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#fff8f0]">
                Know exactly what to work on
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#d8ccc0]/70">
                Your report turns your answers and profile into a practical
                appearance roadmap built around your priorities.
              </p>
            </div>

            <div className="mt-7 grid gap-4">
              <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5a623]/15 bg-[#f5a623]/8 text-xs font-semibold text-[#f5b544]">
                  01
                </div>

                <h3 className="text-lg font-semibold text-[#fff8f0]">
                  Hair direction
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/76">
                  Get a hairstyle matched to your hair type and facial
                  proportions.
                </p>
              </div>

              <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5a623]/15 bg-[#f5a623]/8 text-xs font-semibold text-[#f5b544]">
                  02
                </div>

                <h3 className="text-lg font-semibold text-[#fff8f0]">
                  Skin routine
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/76">
                  Get a simple skincare direction based on your skin type and
                  biggest concerns.
                </p>
              </div>

              <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5a623]/15 bg-[#f5a623]/8 text-xs font-semibold text-[#f5b544]">
                  03
                </div>

                <h3 className="text-lg font-semibold text-[#fff8f0]">
                  Product suggestions
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/76">
                  See product categories selected around your hair, skin, and
                  appearance goals.
                </p>
              </div>

              <div className="rounded-3xl border border-[#f5a623]/14 bg-[#17130f] p-5 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5a623]/15 bg-[#f5a623]/8 text-xs font-semibold text-[#f5b544]">
                  04
                </div>

                <h3 className="text-lg font-semibold text-[#fff8f0]">
                  Daily action plan
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/76">
                  Get the most important next moves so you know exactly where
                  to start.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-14 rounded-[2rem] border border-[#f5a623]/14 bg-[linear-gradient(180deg,rgba(245,166,35,0.08),rgba(23,19,15,0.95))] px-5 py-8 text-center shadow-[0_0_60px_rgba(245,166,35,0.08)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#f5a623]/85">
              Built for men
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#fff8f0]">
              Find your highest-impact upgrades
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#d8ccc0]/76">
              Upload a selfie, answer a few questions, and get your
              personalized HeGlow roadmap.
            </p>

            <Link
              href="/upload"
              className="heglow-amber-button mt-6 inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold active:scale-[0.99]"
            >
              Start my glow-up →
            </Link>
          </div>
        </section>

        {/* Legal Footer */}
        <Footer />
      </div>
    </main>
  );
}