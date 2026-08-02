"use client";

import { readFlow } from "@/lib/flow";
import { buildReport } from "@/lib/buildReport";

export default function ResultsPage() {
  const flow = readFlow();

  if (!flow.answers) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>No questionnaire data found.</p>
      </main>
    );
  }

  const report = buildReport({
  hairType: flow.answers.hairType?.toLowerCase(),

  skinType: flow.answers.skinType?.toLowerCase(),

  bodyType:
    flow.answers.bodyType === "Slim"
      ? "skinny"
      : flow.answers.bodyType?.toLowerCase(),

  goal:
    flow.answers.goal === "Get a glow up"
      ? "glowUp"
      : flow.answers.goal === "Fix skin"
      ? "clearSkin"
      : "",
});

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          Your Personalized Report
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Priority Score</h2>
          <p className="text-4xl font-bold text-blue-600">
            {report.priorityScore}/100
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Skin Recommendations
          </h2>

          <ul className="list-disc ml-6">
            {report.skinRecommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Hair Recommendations
          </h2>

          <ul className="list-disc ml-6">
            {report.hairRecommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Body Recommendations
          </h2>

          <ul className="list-disc ml-6">
            {report.bodyRecommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Goal Recommendations
          </h2>

          <ul className="list-disc ml-6">
            {report.goalRecommendations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Action Plan
          </h2>

          <ul className="list-disc ml-6">
            {report.actionPlan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </main>
  );
}