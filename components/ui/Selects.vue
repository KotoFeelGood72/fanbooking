<template>
  <div class="custom-select" ref="selectWrapper">
    <div class="select-box" @click="toggleDropdown">
      <p>{{ label }}</p>
      <span>{{
        selectedOption ? selectedOption.label : options[0].label
      }}</span>
    </div>
    <div v-if="isOpen" class="options">
      <div
        v-for="option in options"
        :key="option.value"
        class="option"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

interface Option {
  label: string;
  value: string | number;
}

const props = defineProps<{
  options: Option[];
  modelValue: string | number | null;
  label: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedOption = ref<Option | null>(null);
const selectWrapper = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: Option) => {
  selectedOption.value = option;
  isOpen.value = false;
  emit("update:modelValue", option.value);
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    selectWrapper.value &&
    !selectWrapper.value.contains(event.target as Node)
  ) {
    isOpen.value = false;
  }
};

// Watch for changes in modelValue prop to update selectedOption
watch(
  () => props.modelValue,
  (newValue) => {
    selectedOption.value =
      props.options.find((option) => option.value === newValue) || null;
  },
  { immediate: true }
);

onMounted(() => {
  document.addEventListener("click", handleClickOutside);

  // Set default selected option if modelValue is not provided
  if (props.modelValue === null && props.options.length > 0) {
    const defaultOption = props.options[0];
    selectedOption.value = defaultOption;
    emit("update:modelValue", defaultOption.value);
  }
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;
  color: $black;
}

.select-box {
  cursor: pointer;
}

.options {
  position: absolute;
  min-width: 250px;
  background: $white;
  z-index: 10;
}

.option {
  padding: 10px;
  cursor: pointer;
  @include bp($point_2) {
    font-size: 12px;
  }
}

.option:hover {
  background: #f0f0f0;
}

.select-box {
  @include flex-start;
  gap: 8px;
  font-size: 12px;
  p {
    color: $m-gray;
  }
}
</style>
