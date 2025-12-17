type TProduct = {
  id: number;
  name: string;
  src: string;
  price: number;
  rating: number;
  isBestProduct: boolean;
  category: TCategories;
  quantity?: number;
};
