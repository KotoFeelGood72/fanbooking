<template>
  <div class="gender-switch">
    <label>
      <input type="radio" name="gender" value="male" v-model="selectedGender" />
      <span :class="{ selected: selectedGender === 'male' }">М</span>
    </label>
    <label>
      <input type="radio" name="gender" value="female" v-model="selectedGender" />
      <span :class="{ selected: selectedGender === 'female' }">Ж</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedGender = ref("male");
</script>

<style scoped lang="scss">
.gender-switch {
  display: flex;
  overflow: hidden;
  width: max-content;
  position: relative;
  border-radius: 7px;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid $l-gray;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    content: "";
    pointer-events: none;
  }

  label {
    margin: 0;
    input {
      display: none;
    }
    span {
      @include flex-center;
      width: 46px;
      height: 40px;
      cursor: pointer;
      font-size: 18px;
      color: $m-gray;
      transition: all 0.3s;
      position: relative;
      &:before {
        // position: absolute;
        // top: 0;
        // left: 0;
        // width: 100%;
        // height: 100%;
        // content: "";
        // background-color: $blue;
        // pointer-events: none;
        // z-index: -1;
      }

      &.selected {
        background-color: $blue;
        color: $white;
      }
    }
  }

  label + label {
    border-left: 1px solid $blue;
  }
}
</style>
