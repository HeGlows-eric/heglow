type BeardStyle =
  | "clean shaven"
  | "stubble"
  | "short beard"
  | "full beard"
  | "goatee"
  | "mustache only"
  | "long beard";

type FaceShape =
  | "oval"
  | "round"
  | "square"
  | "oblong"
  | "heart"
  | "diamond";

const baldRecommendations = [
  "Keep the scalp clean and moisturized, especially when exposed to heat or dry air.",
  "Use broad-spectrum SPF 30+ on exposed scalp skin when spending time outdoors.",
  "Keep scalp grooming consistent so the bald look appears intentional and well maintained.",
];

const beardRecommendations: Record<
  BeardStyle,
  string[]
> = {
  "clean shaven": [
    "Keep the shave consistent and maintain clean cheek and neckline areas.",
    "Use a gentle shaving routine to reduce irritation and razor bumps.",
    "Moisturize after shaving to keep the skin around the beard area comfortable.",
  ],

  stubble: [
    "Keep the stubble length consistent so it looks deliberate rather than uneven.",
    "Maintain a clean neckline and lightly defined cheek line.",
    "Trim regularly instead of allowing different areas to grow at different rates.",
  ],

  "short beard": [
    "Keep the beard evenly trimmed and maintain a clean neckline.",
    "Brush the beard regularly to keep the shape controlled.",
    "Keep the mustache and cheek area neat for a sharper overall appearance.",
  ],

  "full beard": [
    "Maintain a consistent beard silhouette instead of letting the edges grow randomly.",
    "Keep the neckline and cheek line intentional and clean.",
    "Condition and brush the beard regularly to keep longer growth controlled.",
  ],

  goatee: [
    "Keep the chin and mustache connection clearly defined.",
    "Remove surrounding cheek and neck growth so the goatee remains visually intentional.",
    "Keep the overall length consistent rather than allowing uneven patches to dominate the shape.",
  ],

  "mustache only": [
    "Keep the mustache edges clean and the length controlled.",
    "Trim the lower edge so the shape stays deliberate around the upper lip.",
    "Keep surrounding facial hair either cleanly removed or intentionally minimal.",
  ],

  "long beard": [
    "Maintain the beard silhouette and remove uneven stray hairs regularly.",
    "Brush and condition the beard to keep the length controlled.",
    "Keep the neckline and mustache area groomed so the longer beard still looks intentional.",
  ],
};

const faceShapeAdjustments: Record<
  FaceShape,
  string
> = {
  oval:
    "An oval face is versatile, so keep facial-hair proportions balanced rather than adding unnecessary length.",

  round:
    "For a rounder face, a slightly longer and more structured beard shape can help create more vertical definition.",

  square:
    "For a square face, preserve the strong jaw while keeping the beard edges controlled rather than making the shape excessively wide.",

  oblong:
    "For an oblong face, avoid adding excessive length to the chin; keeping the beard slightly fuller at the sides can create better balance.",

  heart:
    "For a heart-shaped face, keeping some controlled fullness around the lower face can help balance a wider upper face.",

  diamond:
    "For a diamond-shaped face, moderate fullness around the jaw can help balance stronger cheekbone width.",
};

export function getBaldRecommendations(): string[] {
  return baldRecommendations;
}

export function getBeardRecommendations(
  beardStyle?: string,
  faceShape?: string
): string[] {
  const beard = beardStyle?.toLowerCase() as BeardStyle | undefined;
  const face = faceShape?.toLowerCase() as FaceShape | undefined;

  if (!beard || !beardRecommendations[beard]) {
    return [];
  }

  const recommendations = [...beardRecommendations[beard]];

  if (face && faceShapeAdjustments[face]) {
    recommendations.push(faceShapeAdjustments[face]);
  }

  return recommendations;
}