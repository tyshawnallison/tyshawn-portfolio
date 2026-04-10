export interface Category {
  slug: string;
  title: string;
  year: string;
  coverImage: string;
  coverAlt: string;
  images: { src: string; alt: string }[];
  video?: { src: string; poster: string };
  layout: "stacked" | "grid-2col" | "paired";
}

// ORDER: Publication (top-left), Content Creation (top-right), Digitals (bottom-left), Modeling (bottom-right)
export const categories: Category[] = [
  {
    slug: "publication",
    title: "Publication",
    year: "2026",
    coverImage: "/images/publication/publication-01.jpg",
    coverAlt: "MALVIE Magazine editorial — leather jacket, night cityscape",
    layout: "stacked",
    images: [
      { src: "/images/publication/publication-02.jpg", alt: "MALVIE Magazine digital cover tearsheet" },
      { src: "/images/publication/publication-01.jpg", alt: "MALVIE Magazine — leather jacket, city lights at night" },
      { src: "/images/publication/publication-04.jpg", alt: "MALVIE Magazine — kneeling by water at sunset" },
      { src: "/images/publication/publication-05.jpg", alt: "MALVIE Magazine — leather jacket, lakefront skyline" },
      { src: "/images/publication/publication-03.jpg", alt: "MALVIE Magazine — hoodie, pathway at dusk" },
      { src: "/images/publication/publication-07.jpg", alt: "MALVIE Magazine — leaning on post, night" },
      { src: "/images/publication/publication-06.jpg", alt: "MALVIE Magazine — hoodie, beanie, glasses by water" },
      { src: "/images/publication/publication-08.jpg", alt: "MALVIE Magazine — full body walking, dusk" },
    ],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    year: "2025",
    coverImage: "/images/content-creation/content-01.jpg",
    coverAlt: "Content creation — sitting on stairs, all black outfit",
    layout: "stacked",
    images: [],
    video: {
      src: "/images/content-creation/commercial.mp4",
      poster: "/images/content-creation/content-01.jpg",
    },
  },
  {
    slug: "digitals",
    title: "Digitals",
    year: "2025",
    coverImage: "/images/digitals/digitals-01.jpg",
    coverAlt: "Studio digitals — side profile headshot",
    layout: "grid-2col",
    images: [
      { src: "/images/digitals/digitals-03.jpg", alt: "Close-up headshot — direct gaze" },
      { src: "/images/digitals/digitals-01.jpg", alt: "Side profile — dark tee, studio lighting" },
      { src: "/images/digitals/digitals-04.jpg", alt: "Studio portrait — white tank, arms crossed" },
      { src: "/images/digitals/digitals-05.jpg", alt: "Three-quarter body — white tank, Nike sweats" },
      { src: "/images/digitals/digitals-02.jpg", alt: "Full body comp — black tee, light jeans" },
    ],
  },
  {
    slug: "modeling",
    title: "Modeling",
    year: "2025",
    coverImage: "/images/modeling/modeling-01.jpg",
    coverAlt: "Modeling — white hoodie, black leather jacket, tan background",
    layout: "paired",
    images: [
      { src: "/images/modeling/modeling-01.jpg", alt: "White hoodie under black leather jacket" },
      { src: "/images/modeling/modeling-07.jpg", alt: "Blue suit — lakefront, golden hour" },
      { src: "/images/modeling/modeling-05.jpg", alt: "Outdoor editorial — tan jacket, steps" },
      { src: "/images/modeling/modeling-02.jpg", alt: "Urban lounge — grey chair editorial" },
      { src: "/images/modeling/modeling-03.jpg", alt: "Staircase — all black, seated" },
      { src: "/images/modeling/modeling-06.jpg", alt: "Golden hour — Evolution graphic tee" },
      { src: "/images/modeling/modeling-04.jpg", alt: "Lifestyle — park, reading" },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getOtherCategories(slug: string): Category[] {
  return categories.filter((c) => c.slug !== slug);
}

export const measurements = [
  { label: "Height", value: '5\'9"' },
  { label: "Collar", value: '15"' },
  { label: "Chest", value: '36"' },
  { label: "Sleeve", value: '32"' },
  { label: "Waist", value: '32"' },
  { label: "Hips", value: '34"' },
  { label: "Inside Leg", value: '30"' },
];
