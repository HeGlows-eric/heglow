"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { patchFlow } from "@/lib/flow";

const hairTypes = [
  "Straight",
  "Wavy",
  "Curly",
  "Coily",
  "Bald",
];

const beardStyles = [
  "Clean Shaven",
  "Stubble",
  "Short Beard",
  "Full Beard",
  "Goatee",
  "Mustache Only",
  "Long Beard",
];

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
  const [beardStyle, setBeardStyle] = useState("");
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
      !beardStyle ||
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
          beard_style: beardStyle,
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
        beardStyle,
        faceShape,
        skinType,
        skinConcern,
        bodyType,
        climate,
        age,
        goal,
      },
    });

    router.push("/loading");
  };

  const selectClass =
    "w-full rounded-2xl border border-[#20e0d0]/15 bg-[#05070a] px-4 py-3 text-[#f4f7fa] outline-none transition focus:border-[#20e0d0]/50 focus:ring-1 focus:ring-[#20e0d0]/20";

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#05070a] px-4 py-6 text-[#f4f7fa]">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col">
        {/* Back */}
        <button
          onClick={() => router.back()}
          className="mb-6 w-fit rounded-full border border-[#20e0d0]/15 bg-[#0b1119] px-4 py-2 text-sm text-[#8b98a8]/85 transition hover:border-[#20e0d0]/30 hover:bg-[#0d1833] hover:text-[#f4f7fa]"
        >
          ← Back
        </button>

        {/* Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#20e0d0]/80">
            Step 2 of 4
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#f4f7fa] sm:text-4xl">
            Tell us about you.
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#8b98a8]/80">
            A few quick answers help HeGlow build a roadmap around your
            appearance, lifestyle, and goals.
          </p>
        </div>

        <form onSubmit={saveResponses} className="mt-8 flex flex-1 flex-col">
          <div className="space-y-4">
            {/* Hair */}
            <div className="rounded-3xl border border-[#20e0d0]/10 bg-[#0b1119] p-4 transition hover:border-[#20e0d0]/15">
              <label className="mb-2 block text-sm font-medium text-[#f4f7fa]/90">
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

            {/* Facial Hair */}
            <div className="rounded-3xl border border-[#20e0d0]/10 bg-[#0b1119] p-4 transition hover:border-[#20e0d0]/15">
              <label className="mb-2 block text-sm font-medium text-[#f4f7fa]/90">
                What's your facial hair style?
              </label>

              <select
                className={selectClass}
                value={beardStyle}
                onChange={(e) => setBeardStyle(e.target.value)}
              >
                <option value="">Select facial hair style</option>

                {beardStyles.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <p className="mt-2 text-[11px] leading-5 text-[#8b98a8]/45">
                This helps us personalize your grooming and facial-hair
                recommendations.
              </p>
            </div>

            {/* Face shape */}
            <div className="rounded-3xl border border-[#20e0d0]/10 bg-[#0b1119] p-4 transition hover:border-[#20e0d0]/15">
              <label className="mb-2 block text-sm font-medium text-[#f4f7fa]/90">
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

              <p className="mt-2 text-[11px] leading-5 text-[#8b98a8]/45">
                This helps us recommend hairstyles that complement your facial
                proportions.
              </p>
            </div>

            {/* Skin type */}
            <div className="rounded-3xl border border-[#20e0d0]/10 bg-[#0b1119] p-4 transition hover:border-[#20e0d0]/15">
              <label className="mb-2 block text-sm font-medium text-[#f4f7fa]/90">
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
            <div className="rounded-3xl border border-[#20e0d0]/10 bg-[#0b1119] p-4 transition hover:border-[#20e0d0]/15">
              <label className="mb-2 block text-sm font-medium text-[#f4f7fa]/90">
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
            <div className="rounded-3xl border border-[#20e0d0]/10 bg-[#0b1119] p-4 transition hover:border-[#20e0d0]/15">
              <label className="mb-2 block text-sm font-medium text-[#f4f7fa]/90">
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
            <div className="rounded-3xl border border-[#20e0d0]/10 bg-[#0b1119] p-4 transition hover:border-[#20e0d0]/15">
              <label className="mb-2 block text-sm font-medium text-[#f4f7fa]/90">
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
            <div className="rounded-3xl border border-[#20e0d0]/10 bg-[#0b1119] p-4 transition hover:border-[#20e0d0]/15">
              <label className="mb-2 block text-sm font-medium text-[#f4f7fa]/90">
                How old are you?
              </label>

              <input
                className="w-full rounded-2xl border border-[#20e0d0]/15 bg-[#05070a] px-4 py-3 text-[#f4f7fa] outline-none placeholder:text-[#8b98a8]/30 transition focus:border-[#20e0d0]/50 focus:ring-1 focus:ring-[#20e0d0]/20"
                type="number"
                min="10"
                max="100"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
              />
            </div>

            {/* Goal */}
            <div className="rounded-3xl border border-[#20e0d0]/10 bg-[#0b1119] p-4 transition hover:border-[#20e0d0]/15">
              <label className="mb-2 block text-sm font-medium text-[#f4f7fa]/90">
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
            <p className="mt-5 text-sm text-[#20e0d0]/90">
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 h-14 w-full rounded-2xl bg-gradient-to-r from-[#20e0d0] to-[#16cfc0] px-4 text-base font-semibold text-[#03100e] shadow-[0_8px_30px_rgba(32,224,208,0.18)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Saving your answers..." : "Build my glow-up plan →"}
          </button>

          <p className="mt-3 pb-4 text-center text-[11px] leading-5 text-[#8b98a8]/45">
            Next: we'll build your personalized roadmap.
          </p>
        </form>
      </div>
    </main>
  );
}