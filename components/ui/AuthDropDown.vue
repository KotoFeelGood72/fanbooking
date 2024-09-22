<template>
  <div class="auth_dropdown">
    <Buttons name="Войти" @click="openModal('login')" />
    <Buttons name="Регистрация" sheme="primary" color="gray" @click="openModal('sign')" />
  </div>
</template>

<script setup lang="ts">
import Buttons from "./Buttons.vue";
import { useModalStore } from "~/store/useModalStore";

const { openModal } = useModalStore();
</script>

<style scoped lang="scss">
.auth_dropdown {
  position: absolute;
  top: calc(100% + 12px);
  background-color: $light;
  min-width: 280px;
  padding: 12px;
  border-radius: 12px;
  @include flex-start;
  flex-direction: column;
  gap: 6px;
}
</style>
