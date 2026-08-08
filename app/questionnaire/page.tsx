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
    <main className="min-h-screen w-full overflow-x-hidden bg-[#0f0d0b] px-4 py-6 text-[#f6efe8]">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col">

        <button
          onClick={() => router.back()}
          className="mb-6 w-fit rounded-full border border-[#f5a623]/15 bg-[#17130f] px-4 py-2 text-sm text-[#d8ccc0]/80 transition hover:border-[#f5a623]/30 hover:bg-[#211a14]"
        >
          ← Back
        </button>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#f5a623]/65">
            Step 2 of 3
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#fff8f0] sm:text-4xl">
            Quick questionnaire
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#d8ccc0]/70">
            Answer a few quick questions so HeGlows can build your personal
            report.
          </p>
        </div>

        <form onSubmit={saveResponses} className="mt-8 flex flex-1 flex-col">
          <div className="space-y-4">

            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                Hair type
              </label>

              <select
                className="w-full rounded-2xl border border-[#f5a623]/15 bg-[#0f0d0b] px-4 py-3 text-[#f6efe8] outline-none focus:border-[#f5a623]/50"
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

            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                Skin type
              </label>

              <select
                className="w-full rounded-2xl border border-[#f5a623]/15 bg-[#0f0d0b] px-4 py-3 text-[#f6efe8] outline-none focus:border-[#f5a623]/50"
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

            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                Skin concern
              </label>

              <select
                className="w-full rounded-2xl border border-[#f5a623]/15 bg-[#0f0d0b] px-4 py-3 text-[#f6efe8] outline-none focus:border-[#f5a623]/50"
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

            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                Body type
              </label>

              <select
                className="w-full rounded-2xl border border-[#f5a623]/15 bg-[#0f0d0b] px-4 py-3 text-[#f6efe8] outline-none focus:border-[#f5a623]/50"
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

            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                Climate / living environment
              </label>

              <select
                className="w-full rounded-2xl border border-[#f5a623]/15 bg-[#0f0d0b] px-4 py-3 text-[#f6efe8] outline-none focus:border-[#f5a623]/50"
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

            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                Age
              </label>

              <input
                className="w-full rounded-2xl border border-[#f5a623]/15 bg-[#0f0d0b] px-4 py-3 text-[#f6efe8] outline-none placeholder:text-[#d8ccc0]/30 focus:border-[#f5a623]/50"
                type="number"
                min="10"
                max="100"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
              />
            </div>

            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                Goal
              </label>

              <select
                className="w-full rounded-2xl border border-[#f5a623]/15 bg-[#0f0d0b] px-4 py-3 text-[#f6efe8] outline-none focus:border-[#f5a623]/50"
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
            <p className="mt-5 text-sm text-[#f5b544]">
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 h-14 w-full rounded-2xl bg-gradient-to-r from-[#ffc15a] to-[#f59b20] px-4 text-base font-semibold text-[#17100a] shadow-[0_8px_30px_rgba(245,166,35,0.2)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Saving..." : "Generate my report"}
          </button>

        </form>
      </div>
    </main>
  );
}