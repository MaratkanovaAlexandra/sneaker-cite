<script setup lang="ts">
import { useRoute } from "vue-router";
import ProductDetails from "../components/ProductDetails.vue";

const route = useRoute();
</script>

<template>
  <Suspense>
    <ProductDetails :productId="Number(route.query.productId)" />
  </Suspense>
</template>
