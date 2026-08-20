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
          BACKGROUND
          ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-150px] h-[360px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.14)_0%,rgba(245,166,35,0.05)_35%,rgba(245,166,35,0)_72%)] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-md">
        {/* ============================================================
            HEADER
            ============================================================ */}

        <header className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="rounded-full border border-[#d8ccc0]/10 bg-[#17130f]/80 px-4 py-2 text-sm text-[#d8ccc0]/80 backdrop-blur-sm transition hover:border-[#d8ccc0]/20 hover:bg-[#211a14]"
          >
            ← Back
          </button>

          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#d8ccc0]/10 bg-[#17130f] text-[9px] font-bold tracking-[-0.08em] text-[#fff8f0]">
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8ccc0]/45">
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

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-[#f5a623]/20 bg-[#17130f]/95 p-6 text-center shadow-[0_20px_70px_rgba(245,166,35,0.08)] backdrop-blur-sm">
          <div className="relative">
            <div className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f5a623]/70">
                HeGlows Score
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
            </div>

            <div className="mt-5 flex items-end justify-center gap-1">
              <span className="text-7xl font-bold leading-none tracking-[-0.05em] text-[#ffc15a]">
                {scoreOutOf100}
              </span>

              <span className="mb-2 text-lg font-medium text-[#d8ccc0]/45">
                /100
              </span>
            </div>

            <p className="mt-3 text-sm font-medium text-[#f6efe8]">
              {scoreMessage}
            </p>

            <div className="mx-auto mt-6 h-2 max-w-xs overflow-hidden rounded-full bg-[#2a241e]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#f59b20] to-[#ffc15a]"
                style={{
                  width: `${Math.min(100, Math.max(0, scoreOutOf100))}%`,
                }}
              />
            </div>

            <p className="mx-auto mt-4 max-w-xs text-xs leading-5 text-[#d8ccc0]/55">
              {scoreDescription}
            </p>
          </div>
        </section>

        {/* ============================================================
            PERSONALIZATION SUMMARY
            ============================================================ */}

        <section className="mt-5 rounded-[1.5rem] border border-[#d8ccc0]/8 bg-[#141210] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8ccc0]/45">
                Your profile
              </p>

              <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-[#fff8f0]">
                Built from your answers
              </h2>
            </div>

            <span className="shrink-0 rounded-full border border-[#d8ccc0]/10 bg-[#211a14] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#d8ccc0]/45">
              Personalized
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {answers.hairType && (
              <span className="rounded-full bg-[#211a14] px-3 py-1.5 text-[11px] text-[#d8ccc0]/65">
                {answers.hairType} hair
              </span>
            )}

            {answers.skinType && (
              <span className="rounded-full bg-[#211a14] px-3 py-1.5 text-[11px] text-[#d8ccc0]/65">
                {answers.skinType} skin
              </span>
            )}

            {answers.skinConcern && (
              <span className="rounded-full bg-[#211a14] px-3 py-1.5 text-[11px] text-[#d8ccc0]/65">
                {answers.skinConcern}
              </span>
            )}

            {answers.faceShape && (
              <span className="rounded-full bg-[#211a14] px-3 py-1.5 text-[11px] text-[#d8ccc0]/65">
                {answers.faceShape} face
              </span>
            )}

            {answers.bodyType && (
              <span className="rounded-full bg-[#211a14] px-3 py-1.5 text-[11px] text-[#d8ccc0]/65">
                {answers.bodyType} build
              </span>
            )}

            {answers.goal && (
              <span className="rounded-full bg-[#211a14] px-3 py-1.5 text-[11px] text-[#d8ccc0]/65">
                Goal: {answers.goal}
              </span>
            )}
          </div>

          <p className="mt-4 text-xs leading-5 text-[#d8ccc0]/50">
            Your recommendations below are selected using these profile
            details.
          </p>
        </section>

        {/* ============================================================
            HAIRSTYLE / BALD DIRECTION
            ============================================================ */}

        <section className="mt-5 rounded-[2rem] border border-[#d8ccc0]/8 bg-[#17130f] p-5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8ccc0]/45">
              {isBald ? "Best hair direction" : "Best hairstyle"}
            </p>

            <span className="rounded-full border border-[#d8ccc0]/10 bg-[#211a14] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#d8ccc0]/45">
              Personalized
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#fff8f0]">
            {hairstyle.name}
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#d8ccc0]/65">
            {hairstyle.description}
          </p>

          {answers.hairType && answers.faceShape && (
            <p className="mt-3 text-xs leading-5 text-[#d8ccc0]/45">
              Matched to your {answers.hairType.toLowerCase()} hair and{" "}
              {answers.faceShape.toLowerCase()} face shape.
            </p>
          )}

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

        <section className="mt-5 rounded-[2rem] border border-[#d8ccc0]/8 bg-[#17130f] p-5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8ccc0]/45">
              Facial hair
            </p>

            <span className="rounded-full border border-[#d8ccc0]/10 bg-[#211a14] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#d8ccc0]/45">
              Personalized
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#fff8f0]">
            {answers.beardStyle || "Your facial hair profile"}
          </h2>

          {(answers.beardStyle || answers.faceShape) && (
            <p className="mt-2 text-xs leading-5 text-[#d8ccc0]/45">
              {answers.beardStyle && answers.faceShape
                ? `Recommendations matched to your ${answers.beardStyle.toLowerCase()} style and ${answers.faceShape.toLowerCase()} face shape.`
                : answers.faceShape
                  ? `Recommendations matched to your ${answers.faceShape.toLowerCase()} face shape.`
                  : "Recommendations matched to your selected facial-hair style."}
            </p>
          )}

          {beardRecommendations.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {beardRecommendations.map(
                (item: string, index: number) => (
                  <li
                    key={`beard-${index}`}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 text-[#d8ccc0]/35">•</span>

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
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8ccc0]/45">
              Highest impact
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#fff8f0]">
              Top 3 improvements
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#d8ccc0]/8 bg-[#17130f]">
            {improvements.map((item: string, index: number) => (
              <div
                key={`${item}-${index}`}
                className={`flex items-start gap-4 p-5 ${
                  index !== improvements.length - 1
                    ? "border-b border-[#d8ccc0]/8"
                    : ""
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8ccc0]/10 bg-[#211a14] text-sm font-semibold text-[#d8ccc0]/65">
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8ccc0]/45">
              Product suggestions
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#fff8f0]">
              Recommended for you
            </h2>
          </div>

          {products.length > 0 ? (
            <div className="space-y-3">
              {products.slice(0, 3).map((product: any) => {
                const personalization =
                  product.category === "Hair"
                    ? answers.hairType
                      ? `Matched to your ${answers.hairType.toLowerCase()} hair`
                      : "Matched to your hair profile"
                    : product.category === "Skin"
                      ? answers.skinType
                        ? `Matched to your ${answers.skinType.toLowerCase()} skin`
                        : "Matched to your skin profile"
                      : product.category === "Body"
                        ? answers.bodyType
                          ? `Matched to your ${answers.bodyType.toLowerCase()} body profile`
                          : "Matched to your body profile"
                        : answers.goal
                          ? `Matched to your ${answers.goal.toLowerCase()} goal`
                          : "Matched to your profile";

                const visual =
                  product.category === "Hair" ? (
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#211a14]">
                      <div className="h-11 w-7 rounded-[0.8rem] border border-[#d8ccc0]/20 bg-[#2d261f] shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
                        <div className="mx-auto mt-2 h-1.5 w-3 rounded-full bg-[#d8ccc0]/25" />
                        <div className="mx-auto mt-2 h-5 w-4 rounded-md bg-[#f5a623]/15" />
                      </div>
                    </div>
                  ) : product.category === "Skin" ? (
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#211a14]">
                      <div className="relative h-12 w-8 rounded-lg border border-[#d8ccc0]/20 bg-[#2d261f]">
                        <div className="absolute -top-2 left-1/2 h-2 w-4 -translate-x-1/2 rounded-t-sm bg-[#3a3027]" />
                        <div className="absolute left-1/2 top-5 h-1 w-4 -translate-x-1/2 rounded-full bg-[#f5a623]/25" />
                        <div className="absolute left-1/2 top-8 h-1 w-3 -translate-x-1/2 rounded-full bg-[#d8ccc0]/15" />
                      </div>
                    </div>
                  ) : product.category === "Body" ? (
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#211a14]">
                      <div className="flex items-center">
                        <div className="h-7 w-2 rounded-sm bg-[#d8ccc0]/35" />
                        <div className="mx-1 h-2 w-8 rounded-full bg-[#f5a623]/35" />
                        <div className="h-7 w-2 rounded-sm bg-[#d8ccc0]/35" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#211a14]">
                      <div className="h-11 w-9 rounded-lg border border-[#d8ccc0]/20 bg-[#2d261f]" />
                    </div>
                  );

                return (
                  <div
                    key={product.name}
                    className="rounded-2xl border border-[#d8ccc0]/8 bg-[#17130f] p-3.5"
                  >
                    <div className="flex gap-3.5">
                      {visual}

                      <div className="min-w-0 flex-1 py-0.5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-5 text-[#fff8f0]">
                              {product.name}
                            </p>

                            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#d8ccc0]/40">
                              {product.category}
                            </p>
                          </div>

                          <span className="shrink-0 rounded-full border border-[#d8ccc0]/10 bg-[#211a14] px-2 py-1 text-[8px] font-medium uppercase tracking-[0.12em] text-[#d8ccc0]/45">
                            Personalized
                          </span>
                        </div>

                        <p className="mt-2 text-[11px] leading-5 text-[#d8ccc0]/60">
                          {product.reason}
                        </p>

                        <p className="mt-2 text-[10px] font-medium text-[#f5a623]/55">
                          {personalization}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-[#d8ccc0]/8 bg-[#17130f] p-5">
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8ccc0]/45">
              Your roadmap
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#fff8f0]">
              Start here
            </h2>
          </div>

          <div className="rounded-[1.5rem] border border-[#d8ccc0]/8 bg-[#141210] p-5">
            {report.actionPlan?.length > 0 ? (
              <div className="space-y-1">
                {report.actionPlan.map((item: string, index: number) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-start gap-3 py-3"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8ccc0]/30"
                    />

                    <p className="text-sm leading-6 text-[#d8ccc0]/75">
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8ccc0]/45">
              Detailed guidance
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#fff8f0]">
              Your recommendations
            </h2>
          </div>

          <div className="space-y-2.5">
            {[
              {
                title: "Skin",
                preview: answers.skinType
                  ? `Based on your ${answers.skinType.toLowerCase()} skin${
                      answers.skinConcern
                        ? ` · ${answers.skinConcern.toLowerCase()} focus`
                        : ""
                    }`
                  : "Personalized skincare guidance based on your profile",
                items: report.skinRecommendations,
              },
              {
                title: isBald ? "Scalp & Hair" : "Hair",
                preview: answers.hairType
                  ? `Based on your ${answers.hairType.toLowerCase()} hair${
                      answers.faceShape
                        ? ` · ${answers.faceShape.toLowerCase()} face shape`
                        : ""
                    }`
                  : "Personalized hairstyle and hair-care guidance",
                items: report.hairRecommendations,
              },
              {
                title: "Beard & Grooming",
                preview: answers.beardStyle
                  ? `Based on your ${answers.beardStyle.toLowerCase()} style`
                  : "Facial-hair and grooming recommendations",
                items: report.beardRecommendations,
              },
              {
                title: "Body",
                preview: answers.bodyType
                  ? `Based on your ${answers.bodyType.toLowerCase()} build`
                  : "Personalized body and presentation guidance",
                items: report.bodyRecommendations,
              },
              {
                title: "Goal",
                preview: answers.goal
                  ? `Built around your goal: ${answers.goal}`
                  : "Recommendations aligned with your selected goal",
                items: report.goalRecommendations,
              },
            ].map((section) => (
              <details
                key={section.title}
                className="group overflow-hidden rounded-2xl border border-[#d8ccc0]/8 bg-[#17130f] transition-colors open:border-[#d8ccc0]/12"
              >
                <summary className="cursor-pointer list-none px-5 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#fff8f0]">
                          {section.title}
                        </span>

                        <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#d8ccc0]/30">
                          Open
                        </span>
                      </div>

                      <p className="mt-1.5 text-xs leading-5 text-[#d8ccc0]/50">
                        {section.preview}
                      </p>
                    </div>

                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d8ccc0]/10 bg-[#211a14] text-sm text-[#d8ccc0]/45 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <div className="border-t border-[#d8ccc0]/8 px-5 pb-5 pt-4">
                  {section.items?.length > 0 ? (
                    <ul className="space-y-3">
                      {section.items.map(
                        (item: string, index: number) => (
                          <li
                            key={`${section.title}-${index}`}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-1 text-[#d8ccc0]/35">
                              •
                            </span>

                            <span className="text-sm leading-6 text-[#d8ccc0]/70">
                              {item}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="text-sm leading-6 text-[#d8ccc0]/50">
                      No detailed recommendations available yet.
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