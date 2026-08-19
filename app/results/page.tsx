
"use client";

import { useRouter } from "next/navigation";
import { readFlow } from "@/lib/flow";
import { buildReport } from "@/lib/buildReport";

function mapBodyType(bodyType?: string) {
  if (!bodyType) return "";

  if (bodyType === "Slim") return "skinny";

  return bodyType.toLowerCase();
}

function mapGoal(goal?: string) {
  switch (goal) {
    case "Improve looks":
      return "improveLooks";

    case "Fix skin":
      return "clearSkin";

    case "Build confidence":
      return "buildConfidence";

    case "Get a glow up":
      return "glowUp";

    case "Improve style":
      return "improveStyle";

    case "Improve fitness":
      return "improveFitness";

    case "All of the above":
      return "all";

    default:
      return "";
  }
}

export default function ResultsPage() {
  const router = useRouter();
  const flow = readFlow();

  if (!flow.answers) {
    return (
      <main className="min-h-screen w-full bg-[#0f0d0b] px-4 py-6 text-[#f6efe8]">
        <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md items-center justify-center overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#f5a623]/10 blur-[100px]"
          />

          <div className="relative w-full rounded-[2rem] border border-[#f5a623]/15 bg-[#17130f] p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]/70">
              HeGlows
            </p>

            <h1 className="mt-3 text-2xl font-semibold text-[#fff8f0]">
              No report found
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#d8ccc0]/65">
              Complete the questionnaire first.
            </p>

            <button
              onClick={() => router.push("/questionnaire")}
              className="mt-6 h-12 w-full rounded-2xl bg-gradient-to-r from-[#ffc15a] to-[#f59b20] px-6 font-semibold text-[#17100a] shadow-[0_8px_30px_rgba(245,166,35,0.2)] transition hover:brightness-105"
            >
              Go to Questionnaire
            </button>
          </div>
        </div>
      </main>
    );
  }

  const answers = flow.answers;

  const report = buildReport({
    hairType: answers.hairType?.toLowerCase(),
    beardStyle: answers.beardStyle?.toLowerCase(),
    faceShape: answers.faceShape?.toLowerCase(),
    skinType: answers.skinType?.toLowerCase(),
    skinConcern: answers.skinConcern,
    bodyType: mapBodyType(answers.bodyType),
    goal: mapGoal(answers.goal),
    climate: answers.climate,
    age: answers.age,
  });

  const score = report.glowScore;

  const scoreOutOf100 = Math.round(score * 10);

  const scoreMessage =
    scoreOutOf100 >= 85
      ? "Strong baseline. High upside."
      : scoreOutOf100 >= 70
        ? "Good foundation. Clear opportunities."
        : scoreOutOf100 >= 55
          ? "Solid starting point. Room to level up."
          : "Your improvement starts here.";

  const scoreDescription =
    scoreOutOf100 >= 85
      ? "You already have a strong base. Focus on the highest-impact changes."
      : scoreOutOf100 >= 70
        ? "You have a solid foundation. A few focused changes can make a visible difference."
        : "You have plenty of room to improve, which means plenty of upside.";

  const isBald = answers.hairType === "Bald";

  const fallbackImprovements = [
    isBald
      ? "Keep your scalp clean, moisturized, and protected from the sun"
      : "Choose a hairstyle that complements your face shape",
    "Improve your overall presentation and daily habits",
    "Build a consistent skincare routine",
  ];

  const improvements =
    report.topImprovements?.length > 0
      ? report.topImprovements.slice(0, 3)
      : fallbackImprovements;

  const products = report.products ?? [];

  const hairstyle = report.hairstyle ?? {
    name: isBald ? "Own the Bald Look" : "Your recommended hairstyle",
    description: isBald
      ? "Focus on scalp care, clean grooming, and facial-hair styling rather than a conventional haircut."
      : "Complete your face-shape profile to unlock a more specific hairstyle recommendation.",
  };

  const beardRecommendations = report.beardRecommendations ?? [];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0f0d0b] px-4 py-6 text-[#f6efe8]">
      {/* ============================================================
          BACKGROUND GLOW
          ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-170px] h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.18)_0%,rgba(245,166,35,0.08)_30%,rgba(245,166,35,0)_72%)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-60px] h-[220px] w-[300px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,193,90,0.10)_0%,rgba(255,193,90,0)_72%)] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-md">
        {/* ============================================================
            HEADER
            ============================================================ */}

        <header className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="rounded-full border border-[#f5a623]/15 bg-[#17130f]/80 px-4 py-2 text-sm text-[#d8ccc0]/80 backdrop-blur-sm transition hover:border-[#f5a623]/30 hover:bg-[#211a14]"
          >
            ← Back
          </button>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#f5a623]/20 bg-[#f5a623]/10 text-[9px] font-bold tracking-[-0.08em] text-[#fff8f0]">
              HG
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f6efe8]/45">
              HeGlows
            </span>
          </div>
        </header>

        {/* ============================================================
            TITLE
            ============================================================ */}

        <section className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]/70">
            Step 4 of 4
          </p>

          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#fff8f0]">
            Your Glow Report
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[#d8ccc0]/65">
            Your personalized appearance roadmap is ready.
          </p>
        </section>

        {/* ============================================================
            GLOW SCORE
            ============================================================ */}

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-[#f5a623]/20 bg-[#17130f]/90 p-6 text-center shadow-[0_20px_70px_rgba(245,166,35,0.08)] backdrop-blur-sm">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[#f5a623]/8 blur-3xl"
          />

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f5a623]/70">
              HeGlows Score
            </p>

            <div className="mt-4 flex items-end justify-center gap-1">
              <span className="text-7xl font-bold leading-none tracking-[-0.05em] text-[#ffc15a]">
                {scoreOutOf100}
              </span>

              <span className="mb-2 text-lg font-medium text-[#d8ccc0]/45">
                /100
              </span>
            </div>

            <div className="mx-auto mt-6 h-2 max-w-xs overflow-hidden rounded-full bg-[#2a241e]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#f59b20] to-[#ffc15a]"
                style={{
                  width: `${Math.min(100, Math.max(0, scoreOutOf100))}%`,
                }}
              />
            </div>

            <p className="mt-4 text-sm font-medium text-[#f6efe8]">
              {scoreMessage}
            </p>

            <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-[#d8ccc0]/55">
              {scoreDescription}
            </p>
          </div>
        </section>

        {/* ============================================================
            HAIRSTYLE / BALD DIRECTION
            ============================================================ */}

        <section className="mt-5 rounded-[2rem] border border-[#f5a623]/10 bg-[#17130f] p-5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8ccc0]/45">
              {isBald ? "Best hair direction" : "Best hairstyle"}
            </p>

            <span className="rounded-full border border-[#f5a623]/15 bg-[#211a14] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f5a623]/70">
              Personalized
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#fff8f0]">
            {hairstyle.name}
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/65">
            {hairstyle.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {answers.hairType && (
              <span className="rounded-full bg-[#211a14] px-3 py-1.5 text-[11px] text-[#d8ccc0]/65">
                {isBald ? "Bald" : `${answers.hairType} hair`}
              </span>
            )}

            {answers.faceShape && (
              <span className="rounded-full bg-[#211a14] px-3 py-1.5 text-[11px] text-[#d8ccc0]/65">
                {answers.faceShape} face
              </span>
            )}
          </div>
        </section>

        {/* ============================================================
            FACIAL HAIR
            ============================================================ */}

        <section className="mt-5 rounded-[2rem] border border-[#f5a623]/10 bg-[#17130f] p-5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8ccc0]/45">
              Facial hair
            </p>

            <span className="rounded-full border border-[#f5a623]/15 bg-[#211a14] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f5a623]/70">
              Personalized
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#fff8f0]">
            {answers.beardStyle || "Your facial hair profile"}
          </h2>

          {beardRecommendations.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {beardRecommendations.map(
                (item: string, index: number) => (
                  <li
                    key={`beard-${index}`}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 text-[#f5a623]">•</span>

                    <span className="text-sm leading-6 text-[#d8ccc0]/70">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          ) : (
            <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/60">
              Your facial-hair profile will guide grooming recommendations.
            </p>
          )}
        </section>

        {/* ============================================================
            TOP 3 IMPROVEMENTS
            ============================================================ */}

        <section className="mt-8">
          <div className="mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f5a623]/65">
              Highest impact
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#fff8f0]">
              Top 3 improvements
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#f5a623]/10 bg-[#17130f]">
            {improvements.map((item: string, index: number) => (
              <div
                key={`${item}-${index}`}
                className={`flex items-start gap-4 p-5 ${
                  index !== improvements.length - 1
                    ? "border-b border-[#f5a623]/8"
                    : ""
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffc15a] to-[#f59b20] text-sm font-bold text-[#17100a]">
                  {index + 1}
                </span>

                <p className="pt-1 text-sm font-medium leading-6 text-[#f6efe8]/90">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            PRODUCT SUGGESTIONS
            ============================================================ */}

        <section className="mt-8">
          <div className="mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f5a623]/65">
              Product suggestions
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#fff8f0]">
              Recommended for you
            </h2>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-3 gap-3">
              {products.slice(0, 3).map((product: any) => (
                <div
                  key={product.name}
                  className="rounded-2xl border border-[#f5a623]/10 bg-[#17130f] p-3"
                >
                  <div className="flex h-20 items-center justify-center rounded-xl bg-[#211a14]">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#ffc15a] to-[#9f6418] shadow-[0_6px_20px_rgba(245,166,35,0.18)]" />
                  </div>

                  <p className="mt-3 text-[11px] font-semibold leading-4 text-[#fff8f0]">
                    {product.name}
                  </p>

                  <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#f5a623]/55">
                    {product.category}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-[#f5a623]/10 bg-[#17130f] p-5">
              <p className="text-sm leading-6 text-[#d8ccc0]/60">
                Product recommendations will appear here based on your hair,
                skin, and body profile.
              </p>
            </div>
          )}
        </section>

        {/* ============================================================
            ACTION PLAN
            ============================================================ */}

        <section className="mt-8">
          <div className="mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f5a623]/65">
              Your roadmap
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#fff8f0]">
              Start here
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#f5a623]/10 bg-[#17130f] p-5">
            {report.actionPlan?.length > 0 ? (
              <div className="space-y-5">
                {report.actionPlan.map((item: string, index: number) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-start gap-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[10px] font-semibold text-[#f5a623]">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-6 text-[#d8ccc0]/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#d8ccc0]/60">
                No action plan available yet.
              </p>
            )}
          </div>
        </section>

        {/* ============================================================
            DETAILED RECOMMENDATIONS
            ============================================================ */}

        <section className="mt-8">
          <div className="mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f5a623]/65">
              Detailed guidance
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#fff8f0]">
              Your recommendations
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Skin",
                items: report.skinRecommendations,
              },
              {
                title: isBald ? "Scalp & Hair" : "Hair",
                items: report.hairRecommendations,
              },
              {
                title: "Beard & Grooming",
                items: report.beardRecommendations,
              },
              {
                title: "Body",
                items: report.bodyRecommendations,
              },
              {
                title: "Goal",
                items: report.goalRecommendations,
              },
            ].map((section) => (
              <details
                key={section.title}
                className="group overflow-hidden rounded-3xl border border-[#f5a623]/10 bg-[#17130f]"
              >
                <summary className="cursor-pointer list-none p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#fff8f0]">
                      {section.title}
                    </span>

                    <span className="text-lg text-[#f5a623]/70 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <div className="border-t border-[#f5a623]/10 px-5 pb-5 pt-4">
                  {section.items?.length > 0 ? (
                    <ul className="space-y-3">
                      {section.items.map(
                        (item: string, index: number) => (
                          <li
                            key={`${section.title}-${index}`}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-1 text-[#f5a623]">•</span>

                            <span className="text-sm leading-6 text-[#d8ccc0]/70">
                              {item}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="text-sm text-[#d8ccc0]/55">
                      No recommendations available yet.
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ============================================================
            FOOTER CTA
            ============================================================ */}

        <button
          onClick={() => router.push("/")}
          className="mb-8 mt-8 h-14 w-full rounded-2xl bg-gradient-to-r from-[#ffc15a] to-[#f59b20] text-base font-semibold text-[#17100a] shadow-[0_8px_30px_rgba(245,166,35,0.2)] transition hover:brightness-105"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}