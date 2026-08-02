import { matchRules } from "./matchRules";

type Answers = {
  skinType?: string;
  hairType?: string;
  bodyType?: string;
  goal?: string;
};

type MatchedAdvice = {
  skin: readonly string[];
  hair: readonly string[];
  body: readonly string[];
  goals: readonly string[];
};

export function buildReport(answers: Answers) {
  const matched: MatchedAdvice = matchRules(answers);

  const allAdvice = [
    ...matched.skin,
    ...matched.hair,
    ...matched.body,
    ...matched.goals,
  ];

  const priorityScore = Math.min(100, allAdvice.length * 20);

  return {
    skinRecommendations: matched.skin,
    hairRecommendations: matched.hair,
    bodyRecommendations: matched.body,
    goalRecommendations: matched.goals,
    priorityScore,
    actionPlan: allAdvice.slice(0, 5),
  };
}