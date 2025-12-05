type TCategories =
  | "All needs"
  | "Protect"
  | "Regenerates"
  | "Revitalizes"
  | "Feeds"
  | "Regulates"
  | "Purifies"
  | "Makeup Removal"
  | "Exfoliate"
  | "Antioxidant"
  | "Soothes"
  | "Smoothes skin texture"
  | "Tones"
  | "Anti-waste"
  | "Hydrate"
  | "Strengthens"
  | "Regenerates after UV exposure Strengthens";

type TCategoriesItem = {
  id: number;
  name: TCategories;
};
