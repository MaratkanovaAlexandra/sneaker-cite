<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li
    class="nav_item"
    :class="{ active: route.fullPath === props.url }"
    @click="router.push(props.url)"
  >
    <slot></slot>
  </li>
</template>

<style scoped lang="scss">
.nav_item {
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-transform: capitalize;
  padding-bottom: 6px;

  cursor: pointer;
  transition: all 0.2s linear;
}

.active {
  padding-bottom: 3px;
  border-bottom: 3px solid #000000;
}
</style>
