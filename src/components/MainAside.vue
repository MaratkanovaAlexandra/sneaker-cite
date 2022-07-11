<script setup lang="ts">
import { useProductsStore } from "@/stores/products";
import Slider from "@vueform/slider";
import { storeToRefs } from "pinia";

const store = useProductsStore();

const { rate, count } = storeToRefs(store);
const { setRate, setCount } = store;

const rateValue = [rate.value.min, rate.value.max];
const countValue = [count.value.min, count.value.max];
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
          @update="setRate(rateValue)"
        />
        <div class="aside__output">
          <p>{{ rate.min }}</p>
          /
          <p>{{ rate.max }}</p>
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
          @update="setCount(countValue)"
        />
        <div class="aside__output">
          <p>{{ count.min }}</p>
          /
          <p>{{ count.max }}</p>
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
  z-index: 0;

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
