<template>
  <div class="input">
    <div class="input__w">
      <input
        :type="type"
        :placeholder="placeholder"
        autocomplete="off"
        name="no-autocomplete"
      />
    </div>
    <span v-if="error" class="input-message">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: string;
    placeholder?: string;
    message?: string;
    error?: boolean;
  }>(),
  {
    type: "text",
    placeholder: "placeholder",
    message: "",
    error: false,
  }
);
</script>

<style scoped lang="scss">
.input {
  width: 100%;
}
.input__w {
  border: 1px solid $l-gray;
  border-radius: 7px;
  @include flex-start;
  position: relative;
  overflow: hidden;

  input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 100%;
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    font-family: $font_2;
    // font-size: $body-2;
    color: $gray;
    &:focus {
      outline: none;
    }
  }
}
</style>
