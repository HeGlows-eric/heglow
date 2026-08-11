import { adviceLibrary } from "./adviceLibrary";

type Answers = {
  skinType?: string;
  hairType?: string;
  bodyType?: string;
  goal?: string;
};

export function matchRules(answers: Answers) {
  const skinKey = answers.skinType?.toLowerCase() as keyof typeof adviceLibrary.skin;
  const hairKey = answers.hairType?.toLowerCase() as keyof typeof adviceLibrary.hair;
  const bodyKey = answers.bodyType?.toLowerCase() as keyof typeof adviceLibrary.body;
  const goalKey = answers.goal as keyof typeof adviceLibrary.goals;

  return {
    skin: adviceLibrary.skin[skinKey] || [],

    hair: adviceLibrary.hair[hairKey] || [],

    body: adviceLibrary.body[bodyKey] || [],

    goals: adviceLibrary.goals[goalKey] || [],
  };
}