<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useProductsStore } from "@/stores/sort";
import type { ProductType } from "@/types/Product";
import ProductList from "../components/ProductList.vue";

const products = ref<ProductType[]>([]);
const store = useProductsStore();

onMounted(() => store.getProducts());
</script>

<template>
  <ProductList :title="`The new arrivals`" :products="products" />
</template>
