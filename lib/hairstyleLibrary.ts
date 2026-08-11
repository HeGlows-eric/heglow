type Hairstyle = {
  name: string;
  description: string;
};

const hairstyles: Record<string, Record<string, Hairstyle>> = {
  straight: {
    oval: {
      name: "Textured Mid-Length Crop",
      description: "Adds texture and movement while keeping your balanced proportions visible.",
    },
    round: {
      name: "Textured Quiff",
      description: "Adds height on top and creates a longer-looking facial profile.",
    },
    square: {
      name: "Classic Side Part",
      description: "Works with a strong jawline while adding structure and definition.",
    },
    oblong: {
      name: "Textured Fringe",
      description: "Adds width and visual balance without adding unnecessary height.",
    },
    heart: {
      name: "Side-Swept Fringe",
      description: "Adds softness around the forehead while keeping the sides controlled.",
    },
    diamond: {
      name: "Layered Fringe",
      description: "Adds width around the forehead and jaw while balancing the cheekbones.",
    },
  },

  wavy: {
    oval: {
      name: "Layered Wavy Crop",
      description: "Lets your natural texture create volume without overwhelming your proportions.",
    },
    round: {
      name: "Wavy Textured Quiff",
      description: "Uses natural wave and height to visually lengthen the face.",
    },
    square: {
      name: "Wavy Side Part",
      description: "The natural texture softens the sides while preserving your jawline.",
    },
    oblong: {
      name: "Medium Wavy Fringe",
      description: "Keeps volume controlled and adds width around the upper face.",
    },
    heart: {
      name: "Wavy Side-Swept Crop",
      description: "Creates movement around the forehead while keeping the overall silhouette balanced.",
    },
    diamond: {
      name: "Wavy Layered Fringe",
      description: "Adds controlled width around the forehead and jawline.",
    },
  },

  curly: {
    oval: {
      name: "Curly Taper",
      description: "Keeps the natural curl pattern while giving the face a clean, balanced frame.",
    },
    round: {
      name: "Curly High Top",
      description: "Uses controlled height to create a more elongated facial silhouette.",
    },
    square: {
      name: "Curly Taper Fade",
      description: "Keeps the sides clean while letting natural curls emphasize the jawline.",
    },
    oblong: {
      name: "Curly Fringe",
      description: "Brings some curl forward to reduce excessive vertical length.",
    },
    heart: {
      name: "Curly Side Sweep",
      description: "Creates volume around the sides while keeping the forehead visually balanced.",
    },
    diamond: {
      name: "Layered Curly Crop",
      description: "Balances prominent cheekbones with controlled volume above and below.",
    },
  },

  coily: {
    oval: {
      name: "Tapered Coils",
      description: "Keeps your natural texture prominent while maintaining a clean facial frame.",
    },
    round: {
      name: "High Coily Top",
      description: "Adds vertical height to visually lengthen a rounder facial shape.",
    },
    square: {
      name: "Tapered Coily Shape-Up",
      description: "Creates a clean silhouette that complements a strong jaw.",
    },
    oblong: {
      name: "Short Coily Crop",
      description: "Keeps height controlled while maintaining your natural texture.",
    },
    heart: {
      name: "Coily Side Shape",
      description: "Adds balanced width while keeping the forehead from dominating the silhouette.",
    },
    diamond: {
      name: "Layered Coily Crop",
      description: "Creates balanced volume around the upper and lower face.",
    },
  },
};

export function getHairstyle(
  hairType?: string,
  faceShape?: string
): Hairstyle {
  const hair = hairType?.toLowerCase() || "";
  const face = faceShape?.toLowerCase() || "";

  return (
    hairstyles[hair]?.[face] || {
      name: "Textured Classic Crop",
      description:
        "A versatile style with controlled texture that works across many hair and face combinations.",
    }
  );
}