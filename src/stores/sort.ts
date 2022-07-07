import type { ProductType } from "@/types/Product";
import axios from "axios";
import { defineStore } from "pinia";

export const useProductsStore = defineStore({
  id: "sort",
  state: () => ({
    products: [] as ProductType[],
    sort: "asc",
    maxRate: 5,
    minRate: 0,
    maxCount: 1000,
    minCount: 1,
  }),
  getters: {
    isRotating: (state) => state.sort === "desc",
  },
  actions: {
    toggleSort() {
      this.products = [];
      this.sort = this.sort === "asc" ? "desc" : "asc";
      this.getProducts();
    },

    async getProducts() {
      const result = await axios.get("https://fakestoreapi.com/products", {
        params: {
          sort: this.sort,
        },
      });

      this.products = result.data;
      console.log(this.products.map((product) => product.rating.count));
      this.getMinRating();
      this.getMaxRating();
    },

    setMaxRate(value: number) {
      this.maxRate = value;
    },

    setMinRate(value: number) {
      this.minRate = value;
    },

    setMinCount(value: number) {
      this.minCount = value;
    },

    setMaxCount(value: number) {
      this.maxCount = value;
    },

    getMaxRating() {
      this.maxRate = Math.round(
        Math.max(...this.products.map((product) => product.rating.rate))
      );
    },

    getMinRating() {
      this.minRate = Math.round(
        Math.min(...this.products.map((product) => product.rating.rate))
      );
    },
  },
});
