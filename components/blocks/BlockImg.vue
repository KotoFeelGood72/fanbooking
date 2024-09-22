<template>
  <div class="block_img" :class="{ revert: revert }">
    <div class="container">
      <div class="blockImg__main">
        <div class="blockImg__content">
          <h2>{{ title }}</h2>
          <p>{{ text }}</p>
          <div class="blockImg__btn">
            <Buttons
              :name="button"
              icon="air"
              size="medium"
              @click="pushAir()"
            />
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
  &:deep(.container) {
    padding: 0px;
  }
}
.block_img {
  position: relative;
  background-color: $light;
  z-index: 0;
  @include bp($point_2) {
    background-color: $white;
  }

  &.revert {
    @include bp($point_2) {
      margin-bottom: 22px;
    }
    .blockImg__main {
      @include bp($point_2, $direction: min) {
        justify-content: flex-end;
      }
    }
    .blockImg__content {
      @include bp($point_2, $direction: min) {
        order: 2;
      }
    }
    .blockImg__img {
      @include bp($point_2, $direction: min) {
        order: 1;
        right: auto;
        left: 0;
      }
    }
  }
}
.blockImg__main {
  @include flex-start;
  gap: 29px;

  height: 670px;

  @include bp($point_2) {
    margin-bottom: 50px;
    flex-direction: column;
    height: auto;
    gap: 50px;
  }
}

.blockImg__content {
  max-width: 541px;

  @include bp($point_2) {
    padding: 0 9px 0 9px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 400;
    font-family: $font_1;
    line-height: 130%;

    @include bp($point_2) {
      font-size: 28px;
    }
  }
  p {
    font-size: 20px;
    color: $gray;
    margin: 20px 0;
    @include bp($point_2) {
      font-size: 16px;
      margin: 15px 0 30px 0;
    }
  }
}
.blockImg__img {
  position: absolute;
  top: 0;
  right: 0;
  max-width: 50%;
  @include flex-center;
  @include bp($point_2) {
    position: relative;
    max-width: 100%;
    height: 251px;
    width: 100%;
  }
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
