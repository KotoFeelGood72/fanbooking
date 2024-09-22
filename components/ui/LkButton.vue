<template>
  <div class="lk-button" :class="{ bg: bg }" @click.prevent="openAuth()">
    <div class="lk_button__icon">
      <svg-icon name="user" />
    </div>
    <div class="lk_button__username">{{ userName }}</div>
    <AuthDropDown v-if="authState" />
  </div>
</template>

<script setup lang="ts">
import AuthDropDown from "./AuthDropDown.vue";
import { useRoute } from "vue-router";
const userName = ref<string>("Личный кабинет");
const props = defineProps<{
  bg?: boolean;
}>();

const authState = ref<boolean>(false);

function openAuth() {
  authState.value = !authState.value;
}

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    authState.value = false;
  }
);
</script>

<style scoped lang="scss">
.lk-button {
  position: relative;
  @include flex-start;
  gap: 13px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 99;
  &.bg {
    padding: 10px 20px;
    border-radius: 7px;
    background: rgba(255, 255, 255, 0.37);
  }
  &:hover {
    .lk_button__username {
      opacity: 0.7;
    }
  }
}

.lk_button__icon {
  width: 30px;
  height: 36px;
  @include flex-center;
}
.lk_button__username {
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  @include bp($point_2) {
    display: none;
  }
}
</style>
