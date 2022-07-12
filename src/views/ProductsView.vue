<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useProductsStore } from "@/stores/products";
import ProductList from "@/components/ProductList.vue";
import { useRoute } from "vue-router";

const store = useProductsStore();
const route = useRoute();

const { setCategory, getProducts } = store;

watch(route, async () => {
  setCategory(route.query.category as string);
  await getProducts();
});

onMounted(async () => {
  setCategory(route.query.category as string);
  await getProducts();
});
</script>

<template>
  <ProductList
    :title="(route.query.category as string).replace('%20', ' ').replace('%27', `''`)"
  />
</template>
