<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import type { NavItemType } from "@/types/NavItem";
import NavItem from "./NavItem.vue";

const routes = ref<NavItemType[]>([]);
const addSlish = (route: string) => `/categories/${route.replace(" ", "%20")}`;

onMounted(async () => {
  const result = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  routes.value = [
    { url: "/", text: "New arrivals" },
    ...result.data.map((i: string) => ({
      url: addSlish(i),
      text: i,
    })),
  ];
});
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="logo">
        <img
          src="@/assets/icons/Logo.svg"
          alt="Sneaker City logo"
          width="32"
          height="31"
        />

        <h1 class="logo__title">SC.</h1>
      </div>

      <nav class="header__nav">
        <ul class="header__nav_list">
          <NavItem v-for="route in routes" :key="route.url" :url="route.url">
            {{ route.text }}
          </NavItem>
        </ul>
      </nav>

      <nav class="header__nav_btns">
        <ul class="header__nav_list">
          <li>
            <button class="header__nav_btn">
              <img
                src="@/assets/icons/ShoppingCart.svg"
                alt="Shopping Cart"
                height="24"
                width="24"
              />
            </button>
          </li>
          <li>
            <button class="header__nav_btn">
              <img
                src="@/assets/icons/Heart.svg"
                alt="Heart"
                height="24"
                width="24"
              />
            </button>
          </li>
          <li>
            <button class="header__nav_btn">
              <img
                src="@/assets/icons/UserProfile.svg"
                alt="User Profile"
                height="24"
                width="24"
              />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 0 20px 18px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1312px;
    margin: 26px auto 0;
  }

  &__nav_list {
    display: flex;
    gap: 2rem;
  }

  &__nav_btn {
    background-color: transparent;
    border: none;
    height: 24px;
    width: 24px;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &__title {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.25rem;
  }
}
</style>
