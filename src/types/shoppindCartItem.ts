import type { ProductType } from "@/types/Product";

export type shoppingCartItemType = {
  id: number;
  product: ProductType;
  amount: number;
};
