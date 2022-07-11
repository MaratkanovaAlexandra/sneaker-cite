import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/shoping-card",
      name: "shoping-card",
      // add shoping card
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/ProductView.vue"),
    },
  ],
});

export default router;
