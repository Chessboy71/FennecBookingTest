export const categories = [
  "All",
  "Plants",
  "Flowers",
  "Cacti",
  "Herbs",
  "Bonsai",
  "Mint",
  "Succulents",
  "Indoor",
  "Outdoor",
  "Garden",
] as const;

export type Category = (typeof categories)[number];
