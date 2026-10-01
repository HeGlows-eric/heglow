import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Lovable landing-page assets
 */
const beforeImage =
  "https://id-preview--7846045f-6f71-4533-b66b-01cdc9f6d2db.lovable.app/__l5e/assets-v1/7a097b87-983c-40f8-87f2-b43d8d3404a4/before.jpeg";

const afterImage =
  "https://id-preview--7846045f-6f71-4533-b66b-01cdc9f6d2db.lovable.app/__l5e/assets-v1/ec463e17-3173-471b-9770-10bb76d02073/after.jpeg";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative grid h-7 w-7 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,oklch(0.95_0.12_85),oklch(0.55_0.15_50))] shadow-[0_0_20px_-2px_oklch(0.82_0.15_70)]">
        <span className="text-[10px] font-black text-[oklch(0.16_0.01_60)]">
          H
        </span>
      </div>

      <span className="text-base font-semibold tracking-tight text-white">
        He
        <span className="bg-gradient-to-b from-[oklch(0.98_0.02_85)] to-[oklch(0.82_0.13_75)] bg-clip-text text-transparent">
          Glows
        </span>
      </span>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="ml-2 h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CTAButton({
  children,
  full = false,
}: {
  children: ReactNode;
  full?: boolean;
}) {
  return (
    <Link
      href="/upload"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight text-[oklch(0.16_0.01_60)] transition-transform duration-150 hover:-translate-y-px sm:px-7 sm:py-4 sm:text-base ${
        full ? "w-full" : ""
      }`}
      style={{
        background:
          "linear-gradient(180deg, oklch(0.88 0.14 80) 0%, oklch(0.72 0.16 60) 100%)",
        boxShadow:
          "0 0 0 1px color-mix(in oklab, oklch(0.82 0.15 70) 30%, transparent), 0 10px 40px -10px color-mix(in oklab, oklch(0.82 0.15 70) 50%, transparent), inset 0 1px 0 oklch(1 0 0 / 0.4)",
      }}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="rounded-2xl p-4 sm:p-5"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.22 0.01 60) 0%, oklch(0.18 0.008 60) 100%)",
        border:
          "1px solid color-mix(in oklab, oklch(0.82 0.15 70) 12%, oklch(0.30 0.01 60))",
        boxShadow:
          "0 1px 0 oklch(1 0 0 / 0.04) inset, 0 20px 40px -30px oklch(0 0 0 / 0.8)",
      }}
    >
      <div
        className="grid h-9 w-9 place-items-center rounded-xl sm:h-10 sm:w-10"
        style={{
          background:
            "color-mix(in oklab, oklch(0.82 0.15 70) 15%, transparent)",
          color: "oklch(0.82 0.13 75)",
        }}
      >
        {icon}
      </div>

      <h3 className="mt-3 text-sm font-semibold text-[oklch(0.97_0.01_80)] sm:mt-4 sm:text-base">
        {title}
      </h3>

      <p className="mt-1.5 text-[13px] leading-relaxed text-[oklch(0.70_0.02_70)] sm:text-sm">
        {desc}
      </p>
    </div>
  );
}

function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const faqs = [
  {
    question: "How does HeGlows work?",
    answer:
      "Upload a clear selfie and HeGlows analyzes your appearance to generate personalized recommendations for your hairstyle, grooming, style, and overall presentation.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. You can start your analysis without signing up. Just upload your selfie and begin.",
  },
  {
    question: "How long does the analysis take?",
    answer:
      "Your personalized glow-up plan is designed to be generated in about 60 seconds.",
  },
  {
    question: "What kind of selfie should I upload?",
    answer:
      "Use a clear, front-facing photo with good lighting. Avoid sunglasses, heavy filters, and photos where your face is mostly hidden.",
  },
  {
    question: "What will my results include?",
    answer:
      "Your results focus on practical, high-impact improvements such as hairstyle direction, grooming, style choices, and your next steps.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[oklch(0.16_0.008_60)] text-[oklch(0.97_0.01_80)]">
      {/* NAV */}
      <header className="mx-auto flex w-full max-w-2xl items-center justify-between px-4 pt-5 sm:px-5 sm:pt-6">
        <Logo />

        <a
          href="#cta"
          className="text-xs font-medium text-[oklch(0.70_0.02_70)] transition-colors hover:text-[oklch(0.97_0.01_80)]"
        >
          Try free
        </a>
      </header>

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `
            radial-gradient(
              60% 50% at 50% 0%,
              color-mix(in oklab, oklch(0.82 0.15 70) 22%, transparent) 0%,
              transparent 70%
            ),
            radial-gradient(
              40% 30% at 80% 20%,
              color-mix(in oklab, oklch(0.70 0.12 50) 18%, transparent) 0%,
              transparent 70%
            ),
            oklch(0.16 0.008 60)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-2xl px-4 pb-14 pt-10 sm:px-5 sm:pb-16 sm:pt-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[oklch(0.30_0.01_60_/_60%)] bg-[oklch(0.20_0.01_60_/_60%)] px-3 py-1.5 text-xs text-[oklch(0.70_0.02_70)] backdrop-blur">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{
                background: "oklch(0.82 0.13 75)",
                boxShadow: "0 0 8px oklch(0.82 0.15 70)",
              }}
            />
            AI glow-up engine for men
          </div>

          <h1 className="text-balance text-[2.15rem] font-black leading-[1.06] tracking-[-0.025em] sm:text-5xl sm:tracking-tight">
            Upload a Selfie and Get Your{" "}
            <span className="bg-gradient-to-b from-[oklch(0.98_0.02_85)] to-[oklch(0.82_0.13_75)] bg-clip-text text-transparent">
              Personal Glow-Up Plan
            </span>{" "}
            in 60 Seconds
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[oklch(0.70_0.02_70)] sm:text-lg">
            HeGlows analyzes your face, hair, skin, and overall appearance to
            show you the highest-impact changes for your glow up — including
            hairstyle, grooming, style, and more.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8">
            <CTAButton full>Upload your selfie</CTAButton>

            <p className="text-center text-xs text-[oklch(0.70_0.02_70)]">
              Free • No signup • Results in 60 seconds
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="mx-auto w-full max-w-2xl px-4 py-14 sm:px-5 sm:py-16">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.82_0.13_75)]">
            My 6-month transformation
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            This transformation is what inspired HeGlows.
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-5">
          <figure
            className="overflow-hidden rounded-2xl"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.22 0.01 60) 0%, oklch(0.18 0.008 60) 100%)",
              border:
                "1px solid color-mix(in oklab, oklch(0.82 0.15 70) 12%, oklch(0.30 0.01 60))",
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={beforeImage}
                alt="Before transformation"
                className="h-full w-full object-cover grayscale-[20%]"
                loading="lazy"
              />

              <span className="absolute left-2 top-2 rounded-full bg-[oklch(0.16_0.008_60_/_80%)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.70_0.02_70)] backdrop-blur">
                Before
              </span>
            </div>
          </figure>

          <figure
            className="overflow-hidden rounded-2xl"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.22 0.01 60) 0%, oklch(0.18 0.008 60) 100%)",
              border:
                "1px solid color-mix(in oklab, oklch(0.82 0.15 70) 25%, transparent)",
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={afterImage}
                alt="After transformation"
                className="h-full w-full object-cover"
                loading="lazy"
              />

              <span
                className="absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: "oklch(0.82 0.13 75)",
                  color: "oklch(0.18 0.01 60)",
                }}
              >
                After
              </span>
            </div>
          </figure>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-5 sm:py-12">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.82_0.13_75)]">
            What you get
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            A full report on your highest-impact upgrades
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
          <FeatureCard
            icon={
              <Icon d="M4 20c2-6 6-9 8-9s6 3 8 9M8 8a4 4 0 118 0c0 3-2 5-4 5s-4-2-4-5z" />
            }
            title="Best hairstyle"
            desc="Find the haircut that fits your face and features."
          />

          <FeatureCard
            icon={
              <Icon d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            }
            title="Grooming upgrades"
            desc="Discover the highest-impact improvements for your face and presentation."
          />

          <FeatureCard
            icon={<Icon d="M6 3h12l-2 6h-8L6 3zM8 9v12M16 9v12M4 21h16" />}
            title="Style direction"
            desc="See what aesthetic and styling choices suit you best."
          />

          <FeatureCard
            icon={<Icon d="M3 12l4-4 4 4 4-6 6 8M3 20h18" />}
            title="Glow-up roadmap"
            desc="Get your top 3 most important next moves."
          />
        </div>
      </section>

      {/* RESULTS PREVIEW */}
      <section
        className="relative px-4 py-14 sm:px-5 sm:py-16"
        style={{
          background: `
            radial-gradient(
              60% 50% at 50% 0%,
              color-mix(in oklab, oklch(0.82 0.15 70) 22%, transparent) 0%,
              transparent 70%
            ),
            radial-gradient(
              40% 30% at 80% 20%,
              color-mix(in oklab, oklch(0.70 0.12 50) 18%, transparent) 0%,
              transparent 70%
            ),
            oklch(0.16 0.008 60)
          `,
        }}
      >
        <div className="mx-auto w-full max-w-md">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.82_0.13_75)]">
              Sample result
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Here's what you'll get
            </h2>
          </div>

          {/* PHONE MOCKUP */}
          <div
            className="mx-auto mt-7 w-full max-w-[340px] rounded-[2rem] border border-[oklch(0.30_0.01_60_/_60%)] p-1.5 sm:mt-8 sm:max-w-sm sm:rounded-[2.2rem] sm:p-2"
            style={{
              background: "oklch(0.10 0.005 60)",
              boxShadow:
                "0 40px 80px -30px oklch(0 0 0 / 0.8), 0 0 60px -20px oklch(0.82 0.15 70)",
            }}
          >
            <div className="overflow-hidden rounded-[1.55rem] bg-[oklch(0.20_0.01_60)] sm:rounded-[1.8rem]">
              {/* Notch */}
              <div className="flex justify-center pt-2.5">
                <div className="h-1 w-14 rounded-full bg-[oklch(0.30_0.01_60)] sm:w-16" />
              </div>

              <div className="space-y-3 p-3.5 sm:space-y-4 sm:p-5">
                {/* SCORE */}
                <div
                  className="rounded-2xl p-4 text-center sm:p-5"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0.22 0.01 60) 0%, oklch(0.18 0.008 60) 100%)",
                    border:
                      "1px solid color-mix(in oklab, oklch(0.82 0.15 70) 12%, oklch(0.30 0.01 60))",
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[oklch(0.70_0.02_70)] sm:text-[11px]">
                    HeGlows Score
                  </p>

                  <div className="mt-1.5 flex items-baseline justify-center gap-1 sm:mt-2">
                    <span className="bg-gradient-to-b from-[oklch(0.98_0.02_85)] to-[oklch(0.82_0.13_75)] bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                      7.4
                    </span>

                    <span className="text-base font-semibold text-[oklch(0.70_0.02_70)] sm:text-lg">
                      /10
                    </span>
                  </div>

                  <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[oklch(0.26_0.012_60)] sm:mt-3">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "74%",
                        background:
                          "linear-gradient(90deg, oklch(0.72 0.16 60), oklch(0.88 0.14 85))",
                      }}
                    />
                  </div>

                  <p className="mt-2 text-[11px] text-[oklch(0.70_0.02_70)] sm:text-xs">
                    Strong baseline. High upside.
                  </p>
                </div>

                {/* BEST HAIRSTYLE */}
                <div
                  className="rounded-2xl p-3.5 sm:p-4"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0.22 0.01 60) 0%, oklch(0.18 0.008 60) 100%)",
                    border:
                      "1px solid color-mix(in oklab, oklch(0.82 0.15 70) 12%, oklch(0.30 0.01 60))",
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[oklch(0.70_0.02_70)] sm:text-[11px]">
                    Best hairstyle
                  </p>

                  <p className="mt-1 text-sm font-semibold sm:text-base">
                    Textured Mid-Length Crop
                  </p>

                  <p className="mt-1 text-[11px] leading-relaxed text-[oklch(0.70_0.02_70)] sm:text-xs">
                    Adds height + softens your jawline ratio.
                  </p>
                </div>

                {/* TOP 3 */}
                <div
                  className="rounded-2xl p-3.5 sm:p-4"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0.22 0.01 60) 0%, oklch(0.18 0.008 60) 100%)",
                    border:
                      "1px solid color-mix(in oklab, oklch(0.82 0.15 70) 12%, oklch(0.30 0.01 60))",
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[oklch(0.70_0.02_70)] sm:text-[11px]">
                    Top 3 improvements
                  </p>

                  <ul className="mt-2 space-y-2">
                    {[
                      "Define brow shape",
                      "Lean body fat -4%",
                      "Switch to warm-tone wardrobe",
                    ].map((item, index) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-xs sm:gap-3 sm:text-sm"
                      >
                        <span
                          className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-bold sm:text-xs"
                          style={{
                            background: "oklch(0.82 0.13 75)",
                            color: "oklch(0.18 0.01 60)",
                          }}
                        >
                          {index + 1}
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PRODUCTS */}
                <div
                  className="rounded-2xl p-3.5 sm:p-4"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0.22 0.01 60) 0%, oklch(0.18 0.008 60) 100%)",
                    border:
                      "1px solid color-mix(in oklab, oklch(0.82 0.15 70) 12%, oklch(0.30 0.01 60))",
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[oklch(0.70_0.02_70)] sm:text-[11px]">
                    Product suggestions
                  </p>

                  <div className="mt-2 grid grid-cols-3 gap-1.5 sm:gap-2">
                    {["Matte Clay", "Brow Gel", "SPF 50"].map((product) => (
                      <div
                        key={product}
                        className="rounded-xl p-2.5 text-center text-[10px] font-medium sm:p-3 sm:text-[11px]"
                        style={{
                          border:
                            "1px solid oklch(0.30 0.01 60 / 60%)",
                          background: "oklch(0.26 0.012 60 / 60%)",
                        }}
                      >
                        <div
                          className="mx-auto mb-1.5 h-7 w-7 rounded-lg sm:h-8 sm:w-8"
                          style={{
                            background:
                              "radial-gradient(circle_at_30%_30%,oklch(0.85_0.12_80),oklch(0.4_0.05_60))",
                          }}
                        />

                        {product}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-2xl px-4 py-12 sm:px-5 sm:py-16">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.82_0.13_75)]">
            FAQ
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Questions, answered.
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[oklch(0.70_0.02_70)]">
            Everything you need to know before starting your glow-up.
          </p>
        </div>

        <div className="mx-auto mt-7 w-full max-w-xl space-y-2.5 sm:mt-8 sm:space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.22 0.01 60) 0%, oklch(0.18 0.008 60) 100%)",
                border:
                  "1px solid color-mix(in oklab, oklch(0.82 0.15 70) 12%, oklch(0.30 0.01 60))",
                boxShadow:
                  "0 1px 0 oklch(1 0 0 / 0.04) inset, 0 15px 35px -30px oklch(0 0 0 / 0.8)",
              }}
            >
              <summary className="flex min-h-[58px] cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-[13px] font-semibold sm:px-5 sm:py-4 sm:text-sm">
                <span>{faq.question}</span>

                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[oklch(0.30_0.01_60_/_70%)] text-[oklch(0.70_0.02_70)] transition-transform duration-200 group-open:rotate-45">
                  <span className="text-lg font-light leading-none">+</span>
                </span>
              </summary>

              <div className="px-4 pb-4 text-[13px] leading-relaxed text-[oklch(0.70_0.02_70)] sm:px-5 sm:pb-5 sm:text-sm">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="px-4 py-16 sm:px-5 sm:py-20">
        <div className="mx-auto w-full max-w-xl text-center">
          <h2 className="text-balance text-[1.9rem] font-black leading-tight tracking-tight sm:text-4xl">
            Discover your{" "}
            <span className="bg-gradient-to-b from-[oklch(0.98_0.02_85)] to-[oklch(0.82_0.13_75)] bg-clip-text text-transparent">
              best look
            </span>{" "}
            today
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[oklch(0.70_0.02_70)] sm:text-base">
            Join the men leveling up their appearance with AI-powered
            analysis.
          </p>

          <div className="mx-auto mt-7 max-w-md sm:mt-8">
            <CTAButton full>Try HeGlows now</CTAButton>

            <p className="mt-3 text-center text-xs text-[oklch(0.70_0.02_70)]">
              Free • No signup • Results in 60 seconds
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[oklch(0.30_0.01_60_/_60%)] px-4 py-7 sm:px-5 sm:py-8">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 text-xs text-[oklch(0.70_0.02_70)]">
          <Logo />

          <p>© {new Date().getFullYear()} HeGlows</p>
        </div>
      </footer>
    </main>
  );
}