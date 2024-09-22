<template>
  <div :class="['default-btn', sizeClass, colorClass]" @click="onClick">
    <button type="button">
      <p>{{ name }}</p>
      <svg-icon :name="icon" v-if="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, computed } from "vue";

const emit = defineEmits<{
  (e: "click"): void;
}>();

const props = withDefaults(
  defineProps<{
    name?: string;
    icon?: string;
    color?: "danger" | "warning" | "success" | "default" | "gray";
    sheme?: "primary" | "secondary";
    size?: "small" | "normal" | "medium" | "large";
  }>(),
  {
    name: "",
    icon: "",
    color: "default",
    size: "normal",
    sheme: "primary",
  }
);

const onClick = () => emit("click");

const sizeClass = computed(() => {
  return {
    small: "btn-small",
    normal: "btn-normal",
    medium: "btn-medium",
    large: "btn-large",
  }[props.size];
});

const colorClass = computed(() => {
  return {
    danger: {
      primary: "btn-danger-primary",
      secondary: "btn-danger-secondary",
    },
    warning: {
      primary: "btn-warning-primary",
      secondary: "btn-warning-secondary",
    },
    success: {
      primary: "btn-success-primary",
      secondary: "btn-success-secondary",
    },
    gray: {
      primary: "btn-gray-primary",
      secondary: "btn-gray-secondary",
    },
    default: {
      primary: "btn-default-primary",
      secondary: "btn-default-secondary",
    },
  }[props.color][props.sheme];
});
</script>

<style scoped lang="scss">
.default-btn {
  width: 100%;
  button {
    width: 100%;
    border: none;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    p {
      font-size: 16px;
      font-family: $font_2;
      font-weight: 400;
    }
  }
}

.btn-small button {
  padding: 8px 16px;
  font-size: 12px;
}

.btn-normal button {
  padding: 12px 24px;
  font-size: 14px;
}

.btn-medium button {
  padding: 16px 32px;
  font-size: 16px;
}

.btn-large button {
  padding: 15px;
  p {
    font-size: 14px;
    font-family: "Open-Sans", sans-serif;
  }
}

.btn-danger-primary button {
  background-color: $red;
  color: $white;
}

.btn-danger-secondary button {
  background-color: $white;
  color: $red;
}

.btn-success-primary button {
  background-color: $green;
  color: $white;
}

.btn-success-secondary button {
  background-color: $white;
  color: $green;
}

.btn-default-primary button {
  background-color: $blue;
  color: $white;
}

.btn-gray-primary button {
  background-color: $l-gray;
  color: $gray;
  &:hover {
    background-color: $blue;
    color: $white;
    // color: $white;
  }
}

.btn-default-secondary button {
  background-color: $white;
  color: $blue;
  border: 1px solid $blue;
}

.icons {
  width: 15px;
  height: 13px;
  @include flex-center;
}

.custom-padding {
  button {
    padding: 15px 60px;
  }
}
.custom-padding-xxl {
  button {
    padding: 15px 100px;
  }
}
</style>
