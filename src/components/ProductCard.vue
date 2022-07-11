<script setup lang="ts">
import type { ProductType } from "@/types/Product";

defineProps({
  product: {
    type: Object as () => ProductType,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <img :src="product.image" :alt="product.title" />
    <h3 class="card__title">{{ product.title }}</h3>
    <h4 class="card__price">$ {{ product.price }}</h4>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 310px;
  min-height: 414px;
  transition: transform 0.5s linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
