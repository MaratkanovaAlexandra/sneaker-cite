<script setup lang="ts">
import type { ProductType } from "@/types/Product";
import { useRouter } from "vue-router";

defineProps({
  product: {
    type: Object as () => ProductType,
    required: true,
  },
});

const router = useRouter();
</script>

<template>
  <div
    class="card"
    @click="router.push({ path: '/product', query: { productId: product.id } })"
  >
    <img :src="product.image" :alt="product.title" />
    <h3 class="card__title">{{ product.title }}</h3>
    <h4 class="card__price">$ {{ product.price }}</h4>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 310px;
  min-height: 414px;

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
