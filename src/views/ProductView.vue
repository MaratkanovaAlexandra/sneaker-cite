<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useProductsStore } from "@/stores/products";
import type { ProductType } from "@/types/Product";
import ProductList from "@/components/ProductList.vue";
import { useRoute } from "vue-router";

const products = ref<ProductType[]>([]);
const store = useProductsStore();
const route = useRoute();

watch(route, () => {
  store.setCategory(route.query.category as string);
  store.getProducts();
});
onMounted(() => {
  store.setCategory(route.query.category as string);
  store.getProducts();
});
</script>

<template>
  <ProductList :title="`The new arrivals`" :products="products" />
</template>
