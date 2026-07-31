"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

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
  const [hairType, setHairType] = useState("");
  const [skinType, setSkinType] = useState("");
  const [skinConcern, setSkinConcern] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [climate, setClimate] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const saveResponses = async () => {
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

    setStatus("Saved successfully.");
    setHairType("");
    setSkinType("");
    setSkinConcern("");
    setBodyType("");
    setClimate("");
    setAge("");
    setGoal("");
    setLoading(false);
  };

  return (
    <main className="mx-auto max-w-xl p-6 text-black">
      <h1 className="text-3xl font-bold">Quick Questionnaire</h1>
      <p className="mt-2 text-sm text-gray-600">
        Answer a few quick questions so HeGlows can understand you better.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block font-medium">Hair type</label>
          <select
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-black"
            value={hairType}
            onChange={(e) => setHairType(e.target.value)}
          >
            <option className="text-black" value="">
              Select hair type
            </option>
            {hairTypes.map((item) => (
              <option className="text-black" key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Skin type</label>
          <select
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-black"
            value={skinType}
            onChange={(e) => setSkinType(e.target.value)}
          >
            <option className="text-black" value="">
              Select skin type
            </option>
            {skinTypes.map((item) => (
              <option className="text-black" key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Skin concern</label>
          <select
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-black"
            value={skinConcern}
            onChange={(e) => setSkinConcern(e.target.value)}
          >
            <option className="text-black" value="">
              Select skin concern
            </option>
            {skinConcerns.map((item) => (
              <option className="text-black" key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Body type</label>
          <select
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-black"
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
          >
            <option className="text-black" value="">
              Select body type
            </option>
            {bodyTypes.map((item) => (
              <option className="text-black" key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Climate / Living environment
          </label>
          <select
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-black"
            value={climate}
            onChange={(e) => setClimate(e.target.value)}
          >
            <option className="text-black" value="">
              Select climate
            </option>
            {climates.map((item) => (
              <option className="text-black" key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Age</label>
          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-black"
            type="number"
            min="10"
            max="100"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Goal</label>
          <select
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-black"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option className="text-black" value="">
              Select goal
            </option>
            {goals.map((item) => (
              <option className="text-black" key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={saveResponses}
        disabled={loading}
        className="mt-6 rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save responses"}
      </button>

      <p className="mt-4">{status}</p>
    </main>
  );
}