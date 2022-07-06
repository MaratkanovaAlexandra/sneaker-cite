import { defineStore } from "pinia";

export const useSortStore = defineStore({
  id: "sort",
  state: () => ({
    sort: "asc",
  }),
  getters: {
    isRotating: (state) => state.sort === "desc",
  },
  actions: {
    toggleSort() {
      this.sort = this.sort === "asc" ? "desc" : "asc";
    },
  },
});
