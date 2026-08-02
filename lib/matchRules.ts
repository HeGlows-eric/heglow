import { adviceLibrary } from "./adviceLibrary";

export function matchRules(answers: any) {
  return {
    skin:
      adviceLibrary.skin[
        answers.skinType as keyof typeof adviceLibrary.skin
      ] || [],

    hair:
      adviceLibrary.hair[
        answers.hairType as keyof typeof adviceLibrary.hair
      ] || [],

    body:
      adviceLibrary.body[
        answers.bodyType as keyof typeof adviceLibrary.body
      ] || [],

    goals:
      adviceLibrary.goals[
        answers.goal as keyof typeof adviceLibrary.goals
      ] || [],
  };
}