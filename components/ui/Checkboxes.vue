<template>
  <div :class="['custom-checkbox', { 'is-checked': isChecked }]">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :checked="isChecked"
      @change="handleChange"
    />
    <label :for="id">
      <span class="checkbox-indicator"></span>
      <span class="label-text">{{ label }}</span>
    </label>
    <div class="note" v-if="note">{{ note }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps<{
  id: string;
  label: string;
  modelValue: boolean | string;
  note?: string;
  mode?: string;
  name?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const isChecked = computed({
  get: () => props.modelValue === true || props.modelValue === props.id,
  set: (newValue) => {
    if (props.mode === "radio") {
      emit("update:modelValue", newValue ? props.id : "");
    } else {
      emit("update:modelValue", newValue);
    }
  },
});

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement;
  isChecked.value = target.checked;
}
</script>

<style scoped lang="scss">
.custom-checkbox {
  @include flex-space;

  input[type="checkbox"] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 8px;
    cursor: pointer;
    user-select: none;
    @include bp($point_2) {
      align-items: flex-start;
    }

    .checkbox-indicator {
      width: 20px;
      min-width: 20px;
      height: 20px;
      border: 1px solid $gray;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $white;
      position: relative;
      border-radius: 4px;

      &::after {
        content: "";
        background-image: url("@/assets/sprite/svg/check.svg");
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        display: none;
      }
    }

    .label-text {
      font-size: 14px;
      font-family: $font_2;
      font-weight: 400;
    }
  }

  input[type="checkbox"]:checked + label .checkbox-indicator::after {
    display: block;
  }

  &.is-checked {
    label {
      .checkbox-indicator {
        border-color: $blue;
      }
    }
  }

  .note {
    margin-left: 10px;
    font-size: 14px;
    color: $gray;
    font-family: "Open-Sans", sans-serif;
    font-weight: 500;
  }
}
</style>
