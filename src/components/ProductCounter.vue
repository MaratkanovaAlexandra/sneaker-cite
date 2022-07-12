<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue", "reachZero", "reachHundred"]);
const count = ref(props.modelValue);

const minusAmount = () => {
  if (count.value === 1) {
    emit("reachZero");
    return;
  }
  count.value -= 1;
  emit("update:modelValue", count.value);
};
const plusAmount = () => {
  if (props.modelValue === 100) {
    emit("reachHundred");
    return;
  }
  count.value += 1;
  emit("update:modelValue", count.value);
};
</script>

<template>
  <div class="amount">
    <input type="button" class="amount__btn minus" @click="minusAmount" />

    <output class="amount__output">
      {{ count }}
    </output>

    <input type="button" class="amount__btn plus" @click="plusAmount" />
  </div>
</template>

<style scoped lang="scss">
.amount {
  display: flex;
  gap: 16px;
  align-items: center;

  &__btn {
    height: 18px;
    width: 18px;
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .plus {
    background-image: url(@/assets/icons/Plus.svg);
  }

  .minus {
    background-image: url(@/assets/icons/Minus.svg);
  }

  &__output {
    width: 48px;
    height: 48px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;

    font-size: 16px;
    line-height: 24px;
    font-weight: 700;

    display: grid;
    place-items: center;
  }
}
</style>
