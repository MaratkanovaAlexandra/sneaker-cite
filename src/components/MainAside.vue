<script setup lang="ts">
import { useProductsStore } from "@/stores/products";
import Slider from "@vueform/slider";
import { ref } from "vue";

const store = useProductsStore();
const rateValue = ref([store.rate.min, store.rate.max]);
const countValue = ref([store.count.min, store.count.max]);

store.$subscribe(() => {
  rateValue.value = [store.rate.min, store.rate.max];
  countValue.value = [store.count.min, store.count.max];
});
</script>

<template>
  <aside class="aside">
    <div class="aside__wrapper">
      <div class="aside__component">
        <h2 class="aside__title">Rate</h2>
        <Slider
          v-model="rateValue"
          :min="0"
          :max="5"
          class="aside__slider"
          :tooltips="false"
          @update="store.setRate(rateValue)"
        />
        <div class="aside__output">
          <p>{{ store.rate.min }}</p>
          /
          <p>{{ store.rate.max }}</p>
        </div>
      </div>

      <div class="aside__component">
        <h2 class="aside__title">Count</h2>
        <Slider
          v-model="countValue"
          :min="1"
          :max="1000"
          class="aside__slider"
          :tooltips="false"
          @update="store.setCount(countValue)"
        />
        <div class="aside__output">
          <p>{{ store.count.min }}</p>
          /
          <p>{{ store.count.max }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped lang="scss">
.aside {
  width: 334px;
  height: 50vh;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0)
    )
    0 100% 0 0;
  border-top: none;

  &__slider {
    --slider-bg: #00000026;
    --slider-connect-bg: #000;
    --slider-handle-bg: #000;
    --slider-height: 2px;

    --slider-handle-width: 12px;
    --slider-handle-height: 12px;
    --slider-handle-shadow: none;
    margin-bottom: 30px;
  }

  &__wrapper {
    padding: 32px;
  }

  &__component {
    max-width: 224px;
    margin-bottom: 50px;
  }

  &__title {
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: 23px;
  }

  &__output {
    display: flex;
    justify-content: space-around;
    font-weight: 700;
  }
}
</style>
