<template>
  <div class="custom-select" ref="selectWrapper">
    <div class="select-box" @click="toggleDropdown">
      <span>{{ selectedOption ? selectedOption.label : placeholder }}</span>
      <img src="../../assets/sprite/svg/arrow-down.svg" alt="Arrow down" />
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
  label?: string;
  placeholder: string;
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
  if (selectWrapper.value && !selectWrapper.value.contains(event.target as Node)) {
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
  display: inline-block;
  width: 100%;
}

.select-box {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: $white;
  border: 1px solid $l-gray;
  border-radius: 7px;
  cursor: pointer;
}

.options {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid $l-gray;
  border-radius: 4px;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  color: $black;
  font-size: 14px;
}

.options::-webkit-scrollbar {
  width: 4px;
}

.options::-webkit-scrollbar-thumb {
  background-color: $gray;
  border-radius: 4px;
}

.options::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  border-radius: 4px;
}

.option {
  padding: 10px;
  cursor: pointer;
}

.option:hover {
  background: #f0f0f0;
}

.select-box span {
  flex-grow: 1;
  color: $gray;
  font-size: 12px;
}

.select-box img {
  width: 10px;
  height: 10px;
}

.custom-select :deep(img) {
  width: 10px;
  height: 10px;
  margin-left: 10px;
}
</style>
