<script setup lang="ts">
import type { ProductType } from "@/types/Product";
import { ref } from "vue";
import ProductDetails from "./ProductDetails.vue";

defineProps({
  product: {
    type: Object as () => ProductType,
    required: true,
  },
});

const open = ref(false);
const toggelDelails = () => {
  open.value = !open.value;
  document.documentElement.style.overflow = open.value ? "hidden" : "auto";
};
</script>

<template>
  <div class="card">
    <div @click="toggelDelails">
      <img :src="product.image" :alt="product.title" />
      <h3 class="card__title">{{ product.title }}</h3>
      <h4 class="card__price">$ {{ product.price }}</h4>
    </div>
    <dialog @click.self="toggelDelails" class="card__details" :open="open">
      <ProductDetails :product="product" />
    </dialog>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 310px;
  min-height: 414px;
  transition: transform 0.5s linear;
  cursor: pointer;

  &__details {
    position: fixed;
    inset: 0 0 0 0;
    height: 100vh;
    width: 100vw;
    border: none;

    background-color: rgba(196, 196, 196, 0.3);
    display: none;
  }

  &__details[open] {
    display: grid;
    place-content: center;
  }

  /* &:hover {
    transform: scale(1.05);
  } */

  & img {
    height: 308px;
    object-fit: scale-down;
    width: 100%;
  }

  &__title {
    margin: 20px 0 8px;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;
  }
}
</style>
