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
    isLoading: false,
  }),
  getters: {
    isRotating: (state) => state.sort === "desc",
    filterProducts: (state) =>
      state.products.filter(
        (p) =>
          p.rating.rate >= state.rate.min &&
          p.rating.rate <= state.rate.max &&
          p.rating.count >= state.count.min &&
          p.rating.count <= state.count.max
      ),
  },

  actions: {
    async toggleSort() {
      this.sort = this.sort === "asc" ? "desc" : "asc";
      this.isLoading = true;
      this.products = await getProducts(this.sort, this.category);
      this.isLoading = false;
    },

    async getProducts() {
      this.isLoading = true;
      this.products = await getProducts(this.sort, this.category);
      this.isLoading = false;
    },

    setCategory(value: string) {
      this.category = value;
    },

    setRate(value: number[]) {
      this.rate.min = value[0];
      this.rate.max = value[1];
    },

    setCount(value: number[]) {
      this.count.min = value[0];
      this.count.max = value[1];
    },

    getRating() {
      this.rate.max = Math.ceil(
        Math.max(...this.products.map((product) => product.rating.rate))
      );

      this.rate.min = Math.floor(
        Math.min(...this.products.map((product) => product.rating.rate))
      );
    },

    getCount() {
      this.count.max = Math.ceil(
        Math.max(...this.products.map((product) => product.rating.count))
      );

      this.count.min = Math.floor(
        Math.min(...this.products.map((product) => product.rating.count))
      );
    },
  },
});
