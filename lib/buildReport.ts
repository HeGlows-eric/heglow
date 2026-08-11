import { matchRules } from "./matchRules";
import { getHairstyle } from "./hairstyleLibrary";
import { getRecommendedProducts } from "./productLibrary";

type Answers = {
  skinType?: string;
  hairType?: string;
  faceShape?: string;
  bodyType?: string;
  goal?: string;
  skinConcern?: string;
  climate?: string;
  age?: string;
};

function calculateGlowScore(answers: Answers) {
  let score = 6.5;

  if (answers.hairType) score += 0.2;
  if (answers.faceShape) score += 0.3;
  if (answers.skinType) score += 0.2;
  if (answers.skinConcern) score += 0.1;
  if (answers.bodyType) score += 0.2;
  if (answers.goal) score += 0.2;
  if (answers.climate) score += 0.1;

  return Math.min(9.5, Number(score.toFixed(1)));
}

function getScoreMessage(score: number) {
  if (score >= 8.5) {
    return "Strong baseline. High upside.";
  }

  if (score >= 7.5) {
    return "Good foundation. Clear opportunities.";
  }

  if (score >= 6.5) {
    return "Solid starting point. Room to level up.";
  }

  return "Good place to start. Let's build from here.";
}

export function buildReport(answers: Answers) {
  const matched = matchRules(answers);

  const allAdvice = [
    ...matched.skin,
    ...matched.hair,
    ...matched.body,
    ...matched.goals,
  ];

  const glowScore = calculateGlowScore(answers);

  const hairstyle = getHairstyle(
    answers.hairType,
    answers.faceShape
  );

  const products = getRecommendedProducts(
    answers.hairType,
    answers.skinType,
    answers.bodyType
  );

  const topImprovements: string[] = [];

  if (answers.faceShape && answers.hairType) {
    topImprovements.push("Use a hairstyle matched to your face shape");
  }

  if (answers.skinType) {
    topImprovements.push("Build a consistent skincare routine");
  }

  if (answers.bodyType) {
    topImprovements.push("Improve body composition and posture");
  }

  if (answers.goal === "improveStyle") {
    topImprovements.push("Upgrade fit and wardrobe basics");
  }

  if (answers.goal === "clearSkin") {
    topImprovements.push("Stay consistent with your skin routine");
  }

  if (answers.goal === "buildConfidence") {
    topImprovements.push("Build confidence through visible habits");
  }

  if (answers.goal === "improveFitness") {
    topImprovements.push("Follow a consistent strength and movement routine");
  }

  if (answers.goal === "glowUp") {
    topImprovements.push("Focus on the highest-impact changes first");
  }

  if (topImprovements.length < 3) {
    topImprovements.push(
      "Improve posture and overall presentation",
      "Keep your routine simple and consistent"
    );
  }

  return {
    glowScore,
    scoreMessage: getScoreMessage(glowScore),

    hairstyle,

    topImprovements: topImprovements.slice(0, 3),

    products,

    skinRecommendations: matched.skin,
    hairRecommendations: matched.hair,
    bodyRecommendations: matched.body,
    goalRecommendations: matched.goals,

    actionPlan: allAdvice.slice(0, 5),
  };
}