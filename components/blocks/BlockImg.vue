<template>
  <div class="block_img" :class="{ revert: revert }">
    <div class="container">
      <div class="blockImg__main">
        <div class="blockImg__content">
          <h2>{{ title }}</h2>
          <p>{{ text }}</p>
          <div class="blockImg__btn">
            <Buttons :name="button" icon="air" size="medium" @click="pushAir()" />
          </div>
        </div>
        <div class="blockImg__img">
          <img :src="src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Buttons from "../ui/Buttons.vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  title: string;
  text: string;
  button: string;
  src: string;
  revert: boolean;
}>();

const router = useRouter();

function pushAir() {
  router.push("/air");
}
</script>

<style scoped lang="scss">
.block_img {
  position: relative;
  background-color: $light;

  &.revert {
    .blockImg__main {
      justify-content: flex-end;
    }
    .blockImg__content {
      order: 2;
    }
    .blockImg__img {
      order: 1;
      right: auto;
      left: 0;
    }
  }
}
.blockImg__main {
  @include flex-start;
  gap: 29px;

  height: 670px;
}

.blockImg__content {
  max-width: 541px;

  h2 {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 400;
    font-family: $font_1;
    line-height: 130%;
  }
  p {
    font-size: 20px;
    color: $gray;
    margin: 20px 0;
  }
}
.blockImg__img {
  position: absolute;
  top: 0;
  right: 0;
  max-width: 50%;
  @include flex-center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.blockImg__btn {
  display: inline-flex;
}
</style>
