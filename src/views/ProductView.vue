<script setup lang="ts">
import { useRoute } from "vue-router";
import ProductDetails from "../components/ProductDetails.vue";
import AppLoader from "../components/AppLoader.vue";

const route = useRoute();
</script>

<template>
  <Suspense>
    <ProductDetails :productId="Number(route.query.productId)" />
    <template #fallback> <AppLoader /></template>
  </Suspense>
</template>
