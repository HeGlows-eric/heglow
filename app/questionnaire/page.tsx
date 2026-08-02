"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { patchFlow } from "@/lib/flow";

const hairTypes = ["Straight", "Wavy", "Curly", "Coily"];
const skinTypes = ["Oily", "Dry", "Combination", "Normal", "Sensitive"];
const skinConcerns = [
  "Acne",
  "Dark spots",
  "Dullness",
  "Dryness",
  "Oiliness",
  "Large pores",
  "Uneven tone",
  "Sensitivity",
  "None",
];
const bodyTypes = ["Slim", "Average", "Athletic", "Muscular", "Heavy"];
const climates = [
  "Hot and humid",
  "Hot and dry",
  "Cold and dry",
  "Cold and humid",
  "Mixed / changing",
  "Indoor most of the day",
];
const goals = [
  "Improve looks",
  "Fix skin",
  "Build confidence",
  "Get a glow up",
  "Improve style",
  "Improve fitness",
  "All of the above",
];

export default function QuestionnairePage() {
  const router = useRouter();

  const [hairType, setHairType] = useState("");
  const [skinType, setSkinType] = useState("");
  const [skinConcern, setSkinConcern] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [climate, setClimate] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const saveResponses = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (
      !hairType ||
      !skinType ||
      !skinConcern ||
      !bodyType ||
      !climate ||
      !age ||
      !goal
    ) {
      setStatus("Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    const { error } = await supabase.from("questionnaire_responses").insert([
      {
        hair_type: hairType,
        skin_type: skinType,
        skin_concern: skinConcern,
        body_type: bodyType,
        climate,
        age,
        goal,
      },
    ]);

    if (error) {
      setStatus(error.message);
      setLoading(false);
      return;
    }

    patchFlow({
      answers: {
        hairType,
        skinType,
        skinConcern,
        bodyType,
        climate,
        age,
        goal,
      },
    });

    router.push("/results");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-6">
        <button
          onClick={() => router.back()}
          className="mb-6 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
        >
          ← Back
        </button>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Step 2 of 3
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Quick questionnaire
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Answer a few quick questions so HeGlows can build your personal
            report.
          </p>
        </div>

        <form onSubmit={saveResponses} className="mt-8 flex flex-1 flex-col">
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <label className="mb-2 block text-sm font-medium text-white/85">
                Hair type
              </label>
              <select
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
                value={hairType}
                onChange={(e) => setHairType(e.target.value)}
              >
                <option value="">Select hair type</option>
                {hairTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <label className="mb-2 block text-sm font-medium text-white/85">
                Skin type
              </label>
              <select
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
                value={skinType}
                onChange={(e) => setSkinType(e.target.value)}
              >
                <option value="">Select skin type</option>
                {skinTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <label className="mb-2 block text-sm font-medium text-white/85">
                Skin concern
              </label>
              <select
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
                value={skinConcern}
                onChange={(e) => setSkinConcern(e.target.value)}
              >
                <option value="">Select skin concern</option>
                {skinConcerns.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <label className="mb-2 block text-sm font-medium text-white/85">
                Body type
              </label>
              <select
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
              >
                <option value="">Select body type</option>
                {bodyTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <label className="mb-2 block text-sm font-medium text-white/85">
                Climate / living environment
              </label>
              <select
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
                value={climate}
                onChange={(e) => setClimate(e.target.value)}
              >
                <option value="">Select climate</option>
                {climates.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <label className="mb-2 block text-sm font-medium text-white/85">
                Age
              </label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
                type="number"
                min="10"
                max="100"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <label className="mb-2 block text-sm font-medium text-white/85">
                Goal
              </label>
              <select
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              >
                <option value="">Select goal</option>
                {goals.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {status && (
            <p className="mt-5 text-sm text-white/70">
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 h-14 rounded-2xl bg-white text-base font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Saving..." : "Generate my report"}
          </button>
        </form>
      </div>
    </main>
  );
}