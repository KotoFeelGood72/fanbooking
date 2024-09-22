<template>
  <div class="custom-range">
    <div class="custom-range__head">
      <label>{{ label }}</label>
      <div class="range_val">
        {{ formattedValue }}
        <img
          src="../../assets/sprite/svg/range-reset.svg"
          alt="Reset"
          @click="resetValue"
        />
      </div>
    </div>
    <div class="range-container">
      <input type="range" :min="min" :max="max" :step="step" v-model="localValue" />
      <div class="range-track">
        <div class="range-progress" :style="{ width: valuePosition + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, watch } from "vue";

const props = defineProps<{
  label: string;
  min: number;
  max: number;
  step: number;
  modelValue: number;
  unit: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const localValue = ref(props.modelValue);

watch(localValue, (newValue) => {
  emit("update:modelValue", newValue);
});

const formattedValue = computed(() => {
  if (props.unit === "currency") {
    return `До ${localValue.value} ₽`;
  } else if (props.unit === "time") {
    const totalMinutes = localValue.value;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    const seconds = Math.round((localValue.value - Math.floor(localValue.value)) * 60); // Calculate seconds from the fractional part
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  } else if (props.unit === "hours") {
    return `До ${localValue.value} ч`;
  } else {
    return localValue.value.toString();
  }
});

const valuePosition = computed(() => {
  return ((localValue.value - props.min) / (props.max - props.min)) * 100;
});

const resetValue = () => {
  localValue.value = props.min;
};
</script>

<style scoped lang="scss">
.custom-range__head {
  @include flex-space;
}

.range_val {
  background-color: $blue;
  color: $white;
  padding: 4px 4px 4px 10px;
  border-radius: 100px;
  font-size: 14px;
  font-family: "Open-Sans", sans-serif;
  font-weight: 500;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
  }
}

.custom-range {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;

  label {
    font-weight: 600;
  }

  .range-container {
    position: relative;
    width: 100%;
    height: 24px;
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 3;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: $white;
      cursor: pointer;
      border: 1px solid $blue;
    }

    &::-moz-range-thumb {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: $white;
      cursor: pointer;
      border: 1px solid $blue;
    }
  }

  .range-track {
    width: 100%;
    height: 2px;
    background: $l-gray;
    border-radius: 2px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .range-progress {
    height: 100%;
    background: $blue;
  }
}
</style>
