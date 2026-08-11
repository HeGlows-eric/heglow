"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { patchFlow } from "@/lib/flow";

const hairTypes = ["Straight", "Wavy", "Curly", "Coily"];

const faceShapes = [
  "Oval",
  "Round",
  "Square",
  "Oblong",
  "Heart",
  "Diamond",
];

const skinTypes = [
  "Oily",
  "Dry",
  "Combination",
  "Normal",
  "Sensitive",
];

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

const bodyTypes = [
  "Slim",
  "Average",
  "Athletic",
  "Muscular",
  "Heavy",
];

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
  const [faceShape, setFaceShape] = useState("");
  const [skinType, setSkinType] = useState("");
  const [skinConcern, setSkinConcern] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [climate, setClimate] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const saveResponses = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !hairType ||
      !faceShape ||
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

    const { error } = await supabase
      .from("questionnaire_responses")
      .insert([
        {
          hair_type: hairType,
          face_shape: faceShape,
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
        faceShape,
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

  const selectClass =
    "w-full rounded-2xl border border-[#f5a623]/15 bg-[#0f0d0b] px-4 py-3 text-[#f6efe8] outline-none focus:border-[#f5a623]/50";

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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]/75">
            Step 2 of 3
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#fff8f0] sm:text-4xl">
            Tell us about you.
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#d8ccc0]/70">
            A few quick answers help HeGlows build a roadmap around your
            appearance, lifestyle, and goals.
          </p>
        </div>

        <form onSubmit={saveResponses} className="mt-8 flex flex-1 flex-col">
          <div className="space-y-4">

            {/* Hair */}
            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                What's your hair type?
              </label>

              <select
                className={selectClass}
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

            {/* Face shape */}
            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                What's your face shape?
              </label>

              <select
                className={selectClass}
                value={faceShape}
                onChange={(e) => setFaceShape(e.target.value)}
              >
                <option value="">Select face shape</option>

                {faceShapes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <p className="mt-2 text-[11px] leading-5 text-[#d8ccc0]/40">
                This helps us recommend hairstyles that complement your facial proportions.
              </p>
            </div>

            {/* Skin type */}
            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                What's your skin type?
              </label>

              <select
                className={selectClass}
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

            {/* Skin concern */}
            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                What's your biggest skin concern?
              </label>

              <select
                className={selectClass}
                value={skinConcern}
                onChange={(e) => setSkinConcern(e.target.value)}
              >
                <option value="">Select your main concern</option>

                {skinConcerns.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Body */}
            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                How would you describe your build?
              </label>

              <select
                className={selectClass}
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
              >
                <option value="">Select your build</option>

                {bodyTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Climate */}
            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                What's your typical environment?
              </label>

              <select
                className={selectClass}
                value={climate}
                onChange={(e) => setClimate(e.target.value)}
              >
                <option value="">Select your environment</option>

                {climates.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Age */}
            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                How old are you?
              </label>

              <input
                className="w-full rounded-2xl border border-[#f5a623]/15 bg-[#0f0d0b] px-4 py-3 text-[#f6efe8] outline-none placeholder:text-[#d8ccc0]/30 focus:border-[#f5a623]/50"
                type="number"
                min="10"
                max="100"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
              />
            </div>

            {/* Goal */}
            <div className="rounded-3xl border border-[#f5a623]/10 bg-[#17130f] p-4">
              <label className="mb-2 block text-sm font-medium text-[#f6efe8]/90">
                What's your main goal?
              </label>

              <select
                className={selectClass}
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              >
                <option value="">Select your main goal</option>

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
            {loading ? "Building your plan..." : "Build my glow-up plan →"}
          </button>

          <p className="mt-3 pb-4 text-center text-[11px] leading-5 text-[#d8ccc0]/40">
            One more step after this. Then you'll see your personalized roadmap.
          </p>
        </form>
      </div>
    </main>
  );
}