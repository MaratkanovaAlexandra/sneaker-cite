import type { ProductType } from "@/types/Product";
import { getProducts } from "@/api";
import { defineStore } from "pinia";

export const useProductsStore = defineStore({
  id: "sort",
  state: () => ({
    products: [] as ProductType[],
    sort: "asc",
    rate: { min: 0, max: 5 },
    count: { min: 1, max: 1000 },
    category: "",
  }),
  getters: {
    isRotating: (state) => state.sort === "desc",
  },
  actions: {
    toggleSort() {
      this.sort = this.sort === "asc" ? "desc" : "asc";
      this.getProducts();
    },

    async getProducts() {
      this.products = await getProducts(this.sort, this.category);
      this.getRating();
    },

    setCategory(value: string) {
      this.category = value;
      this.getProducts();
    },

    setMaxRate(value: number) {
      this.rate.max = value;
    },

    setMinRate(value: number) {
      this.rate.min = value;
    },

    setMinCount(value: number) {
      this.count.min = value;
    },

    setMaxCount(value: number) {
      this.count.max = value;
    },

    getRating() {
      this.rate.max = Math.round(
        Math.max(...this.products.map((product) => product.rating.rate))
      );
      //округлять к меньшему значению
      this.rate.min = Math.round(
        Math.min(...this.products.map((product) => product.rating.rate))
      );
    },
  },
});
