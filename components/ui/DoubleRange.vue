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
      <div class="range-track"></div>
      <div
        class="range-progress"
        :style="{
          left: startPosition + '%',
          width: progressWidth + '%',
        }"
      ></div>
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="localStartValue"
        @input="updateStartValue"
        class="range-input start-input"
      />
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="localEndValue"
        @input="updateEndValue"
        class="range-input end-input"
      />
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
  startValue: number;
  endValue: number;
}>();

const emit = defineEmits(["update:startValue", "update:endValue"]);

const localStartValue = ref(props.startValue);
const localEndValue = ref(props.endValue);

watch(
  () => props.startValue,
  (newValue) => {
    localStartValue.value = newValue;
  }
);

watch(
  () => props.endValue,
  (newValue) => {
    localEndValue.value = newValue;
  }
);

watch(localStartValue, (newValue) => {
  emit("update:startValue", newValue);
});

watch(localEndValue, (newValue) => {
  emit("update:endValue", newValue);
});

const formattedValue = computed(() => {
  const formatTime = (value: any) => {
    const totalMinutes = value * 30;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  };
  return `${formatTime(localStartValue.value)}-${formatTime(localEndValue.value)}`;
});

const startPosition = computed(() => {
  return ((localStartValue.value - props.min) / (props.max - props.min)) * 100;
});

const endPosition = computed(() => {
  return ((localEndValue.value - props.min) / (props.max - props.min)) * 100;
});

const progressWidth = computed(() => {
  return endPosition.value - startPosition.value;
});

const resetValue = () => {
  localStartValue.value = props.min;
  localEndValue.value = props.max;
};

const updateStartValue = (event: any) => {
  const newValue = parseFloat(event.target.value);
  if (newValue <= localEndValue.value) {
    localStartValue.value = newValue;
  } else {
    localStartValue.value = localEndValue.value;
  }
};

const updateEndValue = (event: any) => {
  const newValue = parseFloat(event.target.value);
  if (newValue >= localStartValue.value) {
    localEndValue.value = newValue;
  } else {
    localEndValue.value = localStartValue.value;
  }
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
    z-index: 2;
    pointer-events: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: $white;
      cursor: pointer;
      border: 1px solid $blue;
      pointer-events: all;
    }

    &::-moz-range-thumb {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: $white;
      cursor: pointer;
      border: 1px solid $blue;
      pointer-events: all;
    }
  }

  .range-track {
    width: 100%;
    height: 2px;
    background: $l-gray;
    border-radius: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .range-progress {
    height: 2px;
    background: $blue;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .start-input {
    z-index: 3;
  }

  .end-input {
    z-index: 4;
  }
}
</style>
