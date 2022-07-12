import type { shoppingCartItemType } from "@/types/shoppindCartItem";
import { defineStore } from "pinia";
import type { ProductType } from "@/types/Product";

const saveToLocalStorage = (bougthProducts: shoppingCartItemType[]) =>
  localStorage.setItem("shoppingCart", JSON.stringify(bougthProducts));

export const useShoppingCardStore = defineStore({
  id: "shoppingCart",
  state: () => ({
    bougthProducts: [] as shoppingCartItemType[],
    delivery: 0,
  }),

  getters: {
    findProduct: (state) => (id: number) =>
      state.bougthProducts.find((i) => i.product.id === id),

    getShortedName: (state) => (id: number) =>
      state.bougthProducts
        .find((i) => i.product.id === id)
        ?.product.title.slice(0, 11) + "...",

    getPriceForProducts: (state) => (id: number) => {
      const result = state.bougthProducts.find((i) => i.product.id === id);
      if (result) return +result.product.price * result.amount;
    },

    getOrderPrice: (state) =>
      state.bougthProducts.reduce(
        (sum, p) => sum + +p.product.price * p.amount,
        0
      ),
  },

  actions: {
    addToShoppingCard(product: ProductType, amount: number) {
      const result = this.findProduct(product.id);
      if (result) result.amount += amount;
      else
        this.bougthProducts.push({
          id: product.id,
          amount: amount,
          product: product,
        });
      saveToLocalStorage(this.bougthProducts);
    },

    removeFormShoppingCard(id: number) {
      this.bougthProducts = this.bougthProducts.filter((i) => i.id !== id);
      saveToLocalStorage(this.bougthProducts);
    },

    setBougthProducts(products: shoppingCartItemType[]) {
      this.bougthProducts = products;
    },

    setAmount(id: number, amount: number) {
      const product = this.findProduct(id);
      if (product) product.amount = amount;
      saveToLocalStorage(this.bougthProducts);
    },

    resetCart() {
      this.$reset();
      saveToLocalStorage([]);
    },
  },
});
