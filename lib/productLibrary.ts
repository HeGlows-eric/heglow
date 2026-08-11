export type Product = {
  name: string;
  category: "Hair" | "Skin" | "Body" | "Style";
  reason: string;
  suitableFor: string[];
};

export const productLibrary: Product[] = [
  {
    name: "Matte Clay",
    category: "Hair",
    reason:
      "Adds texture and definition without making straight or wavy hair look overly shiny.",
    suitableFor: ["straight", "wavy", "oval", "round", "square"],
  },
  {
    name: "Lightweight Curl Cream",
    category: "Hair",
    reason:
      "Helps define curls while keeping the hair softer and more controlled.",
    suitableFor: ["curly", "coily"],
  },
  {
    name: "Texturizing Sea Salt Spray",
    category: "Hair",
    reason:
      "Adds lightweight texture and separation to naturally straight or wavy hair.",
    suitableFor: ["straight", "wavy"],
  },
  {
    name: "Gentle Gel Cleanser",
    category: "Skin",
    reason:
      "A simple daily cleanser suited to keeping the routine effective without unnecessary complexity.",
    suitableFor: ["oily", "combination", "normal"],
  },
  {
    name: "Barrier Moisturizer",
    category: "Skin",
    reason:
      "Supports the skin barrier and helps reduce dryness and irritation.",
    suitableFor: ["dry", "sensitive", "normal"],
  },
  {
    name: "Lightweight SPF 50",
    category: "Skin",
    reason:
      "Daily sun protection is one of the highest-return additions to a basic skincare routine.",
    suitableFor: ["oily", "dry", "combination", "normal", "sensitive"],
  },
  {
    name: "Niacinamide Serum",
    category: "Skin",
    reason:
      "Useful for routines focused on oil control, uneven tone and visible pores.",
    suitableFor: ["oily", "combination"],
  },
  {
    name: "Resistance Bands",
    category: "Body",
    reason:
      "A compact option for adding resistance training without needing a full gym setup.",
    suitableFor: ["slim", "average", "athletic"],
  },
  {
    name: "Adjustable Dumbbells",
    category: "Body",
    reason:
      "Useful for progressive strength training across a wide range of exercises.",
    suitableFor: ["slim", "average", "athletic", "muscular"],
  },
  {
    name: "Walking Shoes",
    category: "Body",
    reason:
      "A practical foundation for increasing daily movement and low-impact conditioning.",
    suitableFor: ["heavy", "average", "athletic"],
  },
];

export function getRecommendedProducts(
  hairType?: string,
  skinType?: string,
  bodyType?: string
): Product[] {
  const hair = hairType?.toLowerCase() || "";
  const skin = skinType?.toLowerCase() || "";
  const body = bodyType?.toLowerCase() || "";

  const results: Product[] = [];

  const addFirstMatch = (category: Product["category"], value: string) => {
    const product = productLibrary.find(
      (item) =>
        item.category === category &&
        item.suitableFor.includes(value)
    );

    if (product && !results.some((item) => item.name === product.name)) {
      results.push(product);
    }
  };

  addFirstMatch("Hair", hair);
  addFirstMatch("Skin", skin);
  addFirstMatch("Body", body);

  if (!results.some((item) => item.category === "Skin")) {
    const sunscreen = productLibrary.find(
      (item) => item.name === "Lightweight SPF 50"
    );

    if (sunscreen) {
      results.push(sunscreen);
    }
  }

  return results.slice(0, 3);
}