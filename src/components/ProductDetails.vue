<script setup lang="ts">
import type { ProductType } from "@/types/Product";
import { ref } from "vue";
import ProductCounter from "./ProductCounter.vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  product: {
    type: Object as () => ProductType,
    required: true,
  },
});

const amout = ref(1);
</script>

<template>
  <Transition name="modal">
    <div class="teleport" v-if="show" @click.self="$emit('close')">
      <div class="main">
        <div class="main__title">
          <h1 class="main__name">{{ props.product.title }}</h1>
          <h3 class="main__price">$ {{ props.product.price }}</h3>
        </div>
        <div class="main__image_warpper">
          <img class="main__image" :src="props.product.image" />
        </div>
        <div class="main__info">
          <div class="main__description">
            <h4>Description:</h4>
            <p>
              {{ props.product.description }}
            </p>
          </div>

          <form class="add_to_shopping_card" @submit.prevent>
            <ProductCounter v-model="amout" />
            <input
              type="submit"
              class="add_to_shopping_card__submit"
              value="Add to cart"
            />
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.teleport {
  position: fixed;
  inset: 0 0 0 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;

  background-color: rgba(196, 196, 196, 0.3);
  transition: opacity 0.3s ease;
}
.main {
  position: relative;
  padding: 40px;
  height: 80vh;
  background-color: #fff;
  z-index: 2;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &__image_warpper {
    height: 100%;
    width: 944px;
    display: grid;
    place-items: center;
    background-color: #fff;
  }

  &__title {
    position: absolute;
    inset: 40px auto auto 40px;
    width: 800px;
  }

  &__name {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 24px;
  }

  &__price {
    font-size: 1.125rem;
    line-height: 1.75rem;

    color: rgba(0, 0, 0, 0.65);
  }

  &__image {
    height: 548px;
    width: 548px;
    object-fit: scale-down;
  }

  &__info {
    height: 100%;
    width: 496px;
    padding: 32px 64px;
    display: grid;
    place-items: center;

    h4 {
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;

      margin-bottom: 18px;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;

      color: rgba(0, 0, 0, 0.65);

      padding-bottom: 32px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }
  }
}
.add_to_shopping_card {
  display: flex;
  align-content: center;
  gap: 32px;

  &__submit {
    width: 135px;
    height: 44px;
    background: #d90429;
    border: 1px solid #d90429;
    color: #fff;
    font-weight: 700;
  }
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .main,
.modal-leave-to .main {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
