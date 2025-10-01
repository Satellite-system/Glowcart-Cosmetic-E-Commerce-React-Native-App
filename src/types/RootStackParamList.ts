export type RootStackParamList = {
  Main: undefined;
  Product: {
    Product: {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    images: string[];
    rating: number;
    thumbnail: string;
    brand: string;
    discountPercentage: number;
    dimensions?: { width: number; height: number; depth: number};
    warrantyInformation?: string;
    shippingInformation?: string;
    reviews?: { reviewerName: string; comment: string; rating: number; date: string; }[];
  }};
};