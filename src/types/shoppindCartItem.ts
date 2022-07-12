import type { ProductType } from "./Product";

export type shoppingCartItemType = {
  id: number;
  product: ProductType;
  amount: number;
};
