<script setup lang="ts">
import { useProductsStore } from "@/stores/products";
import ProductCard from "./ProductCard.vue";

import MainAside from "./MainAside.vue";

import AppFooter from "./AppFooter.vue";
import AppLoader from "./AppLoader.vue";
import ProductDetails from "./ProductDetails.vue";
import type { ProductType } from "@/types/Product";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const store = useProductsStore();

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const { isRotating, filterProducts, isLoading } = storeToRefs(store);
const { toggleSort } = store;

const chosen = ref<ProductType>({
  id: 0,
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
  rating: { rate: 0, count: 0 },
});
const open = ref(false);

const openTeleport = (product: ProductType) => {
  chosen.value = product;
  open.value = true;
  document.documentElement.style.overflow = "hidden";
};

const closeTeleport = () => {
  open.value = false;
  document.documentElement.style.overflow = "auto";
};
</script>

<template>
  <main class="main">
    <MainAside />
    <section class="progucts">
      <h2 class="progucts__title">{{ title }}</h2>

      <button
        class="progucts__sort"
        :class="{ rotate: isRotating }"
        @click="toggleSort()"
      >
        <img src="@/assets/icons/Arrow.svg" alt="Sort" width="24" height="24" />
      </button>

      <TransitionGroup
        class="progucts__wrapper"
        tag="div"
        name="products"
        v-if="!isLoading"
      >
        <ProductCard
          :product="product"
          v-for="product in filterProducts"
          :key="product.id"
          @click="openTeleport(product)"
        />
      </TransitionGroup>

      <div class="loading" v-else></div>

      <Teleport to="#modals">
        <ProductDetails
          :product="(chosen as ProductType)"
          :show="open"
          @close="closeTeleport"
        />
      </Teleport>

      <AppFooter />
    </section>

    <AppLoader />
  </main>
</template>

<style scoped lang="scss">
.main {
  margin: 0 auto;
  display: flex;
  gap: 20px;
  max-width: 1440px;
}

.progucts {
  position: relative;
  width: 76.8%;

  &__title {
    padding: 0 64px;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 32px 0;
    text-transform: capitalize;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 64px 24px;
    flex-wrap: wrap;
    margin-bottom: 92px;
    min-height: calc(100vh - 430px);
  }

  &__sort {
    border: none;
    background-color: transparent;

    position: absolute;
    inset: 30px 30px auto auto;
    transition: transform 0.5s ease-in;
    height: 24px;
    width: 24px;
  }

  .loading {
    width: 100%;
    min-height: calc(100vh - 350px);
  }

  .rotate {
    transform: rotate(540deg);
  }
}

.products-move,
.products-enter-active,
.products-leave-active {
  transition: all 0.5s ease;
}

.products-enter-from,
.products-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.products-leave-active {
  position: absolute;
}
</style>
