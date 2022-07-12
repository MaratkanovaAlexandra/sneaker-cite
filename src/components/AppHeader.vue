<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { getCategories } from "@/api";
import type { NavItemType } from "@/types/NavItem";

const routes = ref<NavItemType[]>([]);
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  routes.value = await getCategories();
});
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="logo" @click="router.push('/')">
        <img
          src="@/assets/icons/Logo.svg"
          alt="Sneaker City logo"
          width="32"
          height="31"
        />

        <h1 class="logo__title">SC.</h1>
      </div>

      <nav class="header__nav">
        <TransitionGroup
          tag="ul"
          class="header__nav_list"
          name="category"
          v-if="routes.length > 0"
        >
          <RouterLink
            v-for="routeItem in routes"
            :key="routeItem.url"
            :to="routeItem.url"
            class="header__nav_item"
            :class="routeItem.url === route.fullPath ? 'active' : ''"
          >
            {{ routeItem.text }}
          </RouterLink>
        </TransitionGroup>
        <div v-else class="loading"></div>
      </nav>

      <nav class="header__nav_btns">
        <ul class="header__nav_list">
          <li>
            <button
              class="header__nav_btn"
              @click="router.push('/shopping-cart')"
            >
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

  &__nav {
    width: max-content;
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

  &__nav_item {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.5rem;
    text-transform: capitalize;
    padding-bottom: 6px;

    cursor: pointer;
    transition: transform 0.2s linear;
    color: #000000;
  }
  &__nav_item:active {
    color: #000000;
  }
}
.active {
  padding-bottom: 3px;
  border-bottom: 3px solid #000000;
}

.loading {
  height: 24px;
  width: 600px;
  background: linear-gradient(to right, #e2e2e2 25%, #d5d5d5 50%, #e2e2e2 100%);
  animation-name: gradient-animation;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  /* filter: blur(5px); */
  border-radius: 8px;
}

@keyframes gradient-animation {
  from {
    left: 0%;
  }
  to {
    left: 100%;
  }
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &__title {
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.25rem;
  }

  .category-move,
  .category-enter-active,
  .category-leave-active {
    transition: all 0.2s ease;
  }

  .category-enter-from,
  .category-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }

  .category-leave-active {
    position: absolute;
  }
}
</style>
