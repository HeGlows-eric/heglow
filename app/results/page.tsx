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
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col items-center justify-center text-center">
          <div className="w-full rounded-3xl border border-[#f5a623]/15 bg-[#17130f] p-6 shadow-[0_0_40px_rgba(245,166,35,0.05)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#f5a623]/65">
              HeGlows
            </p>

            <h1 className="mt-3 text-2xl font-semibold text-[#fff8f0]">
              No report found
            </h1>

            <p className="mt-3 text-sm text-[#d8ccc0]/65">
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

  const report = buildReport({
    hairType: flow.answers.hairType?.toLowerCase(),
    skinType: flow.answers.skinType?.toLowerCase(),
    bodyType: mapBodyType(flow.answers.bodyType),
    goal: mapGoal(flow.answers.goal),
  });

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#0f0d0b] px-4 py-6 text-[#f6efe8]">
      <div className="mx-auto flex w-full max-w-md flex-col">

        <button
          onClick={() => router.back()}
          className="mb-6 w-fit rounded-full border border-[#f5a623]/15 bg-[#17130f] px-4 py-2 text-sm text-[#d8ccc0]/80 transition hover:border-[#f5a623]/30 hover:bg-[#211a14]"
        >
          ← Back
        </button>

        <p className="text-xs uppercase tracking-[0.3em] text-[#f5a623]/65">
          Step 3 of 3
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#fff8f0]">
          Your Glow Report
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#d8ccc0]/70">
          Your personalized recommendations are ready.
        </p>

        <div className="mt-8 rounded-3xl border border-[#f5a623]/20 bg-[#17130f] p-6 text-center shadow-[0_0_50px_rgba(245,166,35,0.08)]">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f5a623]/70">
            Glow Score
          </p>

          <h2 className="mt-4 text-7xl font-bold tracking-tight text-[#ffc15a]">
            {report.priorityScore}
          </h2>

          <p className="mt-2 text-[#d8ccc0]/75">
            {report.priorityScore >= 80
              ? "Excellent start"
              : report.priorityScore >= 60
              ? "Strong foundation"
              : "Room for improvement"}
          </p>
        </div>

        <section className="mt-8">
          <h2 className="mb-3 text-xl font-semibold text-[#fff8f0]">
            Today's Action Plan
          </h2>

          <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-5">
            {report.actionPlan.length > 0 ? (
              <ul className="space-y-4">
                {report.actionPlan.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-[#f5a623]">
                      ✓
                    </span>

                    <span className="text-sm leading-6 text-[#d8ccc0]/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-[#d8ccc0]/60">
                No action plan available yet.
              </p>
            )}
          </div>
        </section>

        <section className="mt-8">
          <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-5">
            <h3 className="text-lg font-semibold text-[#fff8f0]">
              Skin Recommendations
            </h3>

            {report.skinRecommendations.length > 0 ? (
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#d8ccc0]/80">
                {report.skinRecommendations.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-[#f5a623]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-[#d8ccc0]/60">
                No skin recommendations available yet.
              </p>
            )}
          </div>
        </section>

        <section className="mt-5">
          <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-5">
            <h3 className="text-lg font-semibold text-[#fff8f0]">
              Hair Recommendations
            </h3>

            {report.hairRecommendations.length > 0 ? (
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#d8ccc0]/80">
                {report.hairRecommendations.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-[#f5a623]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-[#d8ccc0]/60">
                No hair recommendations available yet.
              </p>
            )}
          </div>
        </section>

        <section className="mt-5">
          <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-5">
            <h3 className="text-lg font-semibold text-[#fff8f0]">
              Body Recommendations
            </h3>

            {report.bodyRecommendations.length > 0 ? (
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#d8ccc0]/80">
                {report.bodyRecommendations.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-[#f5a623]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-[#d8ccc0]/60">
                No body recommendations available yet.
              </p>
            )}
          </div>
        </section>

        <section className="mt-5">
          <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-5">
            <h3 className="text-lg font-semibold text-[#fff8f0]">
              Goal Recommendations
            </h3>

            {report.goalRecommendations.length > 0 ? (
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#d8ccc0]/80">
                {report.goalRecommendations.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-[#f5a623]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-[#d8ccc0]/60">
                No goal recommendations available yet.
              </p>
            )}
          </div>
        </section>

        <button
          onClick={() => router.push("/")}
          className="mt-8 mb-8 h-14 w-full rounded-2xl bg-gradient-to-r from-[#ffc15a] to-[#f59b20] text-base font-semibold text-[#17100a] shadow-[0_8px_30px_rgba(245,166,35,0.2)] transition hover:brightness-105"
        >
          Back to Home
        </button>

      </div>
    </main>
  );
}