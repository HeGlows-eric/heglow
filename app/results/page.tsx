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
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <h1 className="text-2xl font-bold">No report found</h1>
          <p className="mt-3 text-white/60">
            Complete the questionnaire first.
          </p>

          <button
            onClick={() => router.push("/questionnaire")}
            className="mt-6 rounded-2xl bg-white px-6 py-3 font-semibold text-black"
          >
            Go to Questionnaire
          </button>
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
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-5 py-6">
        <button
          onClick={() => router.back()}
          className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
        >
          ← Back
        </button>

        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Step 3 of 3
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Your Glow Report
        </h1>

        <p className="mt-3 text-sm leading-6 text-white/60">
          Your personalized recommendations are ready.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Glow Score
          </p>

          <h2 className="mt-4 text-6xl font-bold">{report.priorityScore}</h2>

          <p className="mt-2 text-white/70">
            {report.priorityScore >= 80
              ? "Excellent start"
              : report.priorityScore >= 60
              ? "Strong foundation"
              : "Room for improvement"}
          </p>
        </div>

        <section className="mt-8">
          <h2 className="mb-3 text-xl font-semibold">Today's Action Plan</h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            {report.actionPlan.length > 0 ? (
              <ul className="space-y-3">
                {report.actionPlan.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 text-white">✓</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-white/60">
                No action plan available yet.
              </p>
            )}
          </div>
        </section>

        <section className="mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Skin Recommendations</h3>

            {report.skinRecommendations.length > 0 ? (
              <ul className="mt-4 space-y-2 text-white/80">
                {report.skinRecommendations.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-white/60">
                No skin recommendations available yet.
              </p>
            )}
          </div>
        </section>

        <section className="mt-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Hair Recommendations</h3>

            {report.hairRecommendations.length > 0 ? (
              <ul className="mt-4 space-y-2 text-white/80">
                {report.hairRecommendations.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-white/60">
                No hair recommendations available yet.
              </p>
            )}
          </div>
        </section>

        <section className="mt-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Body Recommendations</h3>

            {report.bodyRecommendations.length > 0 ? (
              <ul className="mt-4 space-y-2 text-white/80">
                {report.bodyRecommendations.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-white/60">
                No body recommendations available yet.
              </p>
            )}
          </div>
        </section>

        <section className="mt-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">Goal Recommendations</h3>

            {report.goalRecommendations.length > 0 ? (
              <ul className="mt-4 space-y-2 text-white/80">
                {report.goalRecommendations.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-white/60">
                No goal recommendations available yet.
              </p>
            )}
          </div>
        </section>

        <button
          onClick={() => router.push("/")}
          className="mt-8 mb-8 h-14 w-full rounded-2xl bg-white text-base font-semibold text-black transition hover:bg-white/90"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}