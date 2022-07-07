<script setup lang="ts">
import { useProductsStore } from "@/stores/sort";
import ProductCard from "./ProductCard.vue";
import Slider from "@vueform/slider";

import RateInput from "@/components/Inputs/RateInput.vue";
import { ref } from "vue";

const store = useProductsStore();

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const value = ref(20);
</script>

<template>
  <main class="main">
    <section class="progucts">
      <h2 class="progucts__title">{{ title }}</h2>

      <button
        class="progucts__sort"
        :class="{ rotate: store.isRotating }"
        @click="store.toggleSort()"
      >
        <img src="@/assets/icons/Arrow.svg" alt="Sort" width="24" height="24" />
      </button>

      <TransitionGroup class="progucts__wrapper" tag="div" name="progucts">
        <ProductCard
          :product="product"
          v-for="product in store.products"
          :key="product.id"
        />
      </TransitionGroup>
    </section>
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

  margin-bottom: 92px;

  &__title {
    padding: 0 64px;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 32px 0;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 64px 24px;
    flex-wrap: wrap;
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

  .rotate {
    transform: rotate(540deg);
  }
}

.aside {
  width: 334px;
  /* padding-left: 32px; */
  height: 100em;
  background-color: rgba(94, 94, 94, 0.301);
  border-radius: 10px;
}

.progucts-move,
.progucts-enter-active,
.progucts-leave-active {
  transition: all 0.5s ease;
}

.progucts-enter-from,
.progucts-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.progucts-leave-active {
  position: absolute;
}
</style>
