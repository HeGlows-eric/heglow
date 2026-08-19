import { adviceLibrary } from "./adviceLibrary";

type Answers = {
  skinType?: string;
  hairType?: string;
  bodyType?: string;
  goal?: string;
};

const baldHairRecommendations = [
  "Keep the scalp clean and moisturized, especially in dry or hot conditions.",
  "Use sun protection on exposed scalp skin when spending time outdoors.",
  "Treat a bald look as a grooming choice: consistent scalp care and clean edges matter.",
];

export function matchRules(answers: Answers) {
  const skinKey =
    answers.skinType?.toLowerCase() as keyof typeof adviceLibrary.skin;

  const hairKey =
    answers.hairType?.toLowerCase() as keyof typeof adviceLibrary.hair;

  const bodyKey =
    answers.bodyType?.toLowerCase() as keyof typeof adviceLibrary.body;

  const goalKey =
    answers.goal as keyof typeof adviceLibrary.goals;

  const isBald = answers.hairType?.toLowerCase() === "bald";

  return {
    skin: adviceLibrary.skin[skinKey] || [],

    hair: isBald
      ? baldHairRecommendations
      : adviceLibrary.hair[hairKey] || [],

    body: adviceLibrary.body[bodyKey] || [],

    goals: adviceLibrary.goals[goalKey] || [],
  };
}