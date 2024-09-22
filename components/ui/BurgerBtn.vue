<template>
  <div class="burger-btn">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.burger-btn {
  width: 40px;
  height: 22px;
  position: relative;
  cursor: pointer;
  &:hover {
    span {
      &:nth-child(2) {
        width: 80%;
      }
    }
  }
  span {
    height: 4px;
    background-color: $white;
    border-radius: 10px;
    width: 100%;
    position: absolute;
    transition: all 0.3s ease-in-out;
    &:nth-child(1) {
      top: 0;
      left: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }
  }
}
</style>
