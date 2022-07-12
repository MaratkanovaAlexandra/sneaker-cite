import type { shoppingCartItemType } from "../types/shoppindCartItem";
import { defineStore } from "pinia";
import type { ProductType } from "@/types/Product";

export const useShoppingCardStore = defineStore({
  id: "shoppingCart",
  state: () => ({
    bougthProducts: [] as shoppingCartItemType[],
  }),

  getters: {},

  actions: {
    addToShoppingCard(product: ProductType, amount: number) {
      this.bougthProducts.push({
        id: product.id,
        amount: amount,
        product: product,
      });
    },
    // removeFormShoppingCard() {},
  },
});
