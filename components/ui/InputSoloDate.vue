<template>
  <div class="air-date">
    <VueDatePicker
      v-model="localValue"
      :hide-navigation="['month', 'year', 'time']"
      :min-date="minDate"
      no-today
      :disable-year-select="shouldDisableYearSelect"
      locale="ru"
      cancelText="Отменить"
      selectText="Выбрать"
      :format="formatDate"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { defineProps, defineEmits } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const props = defineProps<{
  modelValue: any;
  mode:
    | "туда"
    | "обратно"
    | "дд.мм.гггг"
    | "заезд"
    | "выезд"
    | "окончание"
    | "начало";
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: Date | null): void;
}>();

const today = new Date();
const minDate = computed(() => {
  return ["дд.мм.гггг", "окончание", "начало"].includes(props.mode)
    ? undefined
    : today;
});

const placeholder = computed(() => {
  switch (props.mode) {
    case "туда":
      return "туда";
    case "обратно":
      return "обратно";
    case "дд.мм.гггг":
      return "дд.мм.гггг";
    case "заезд":
      return "заезд";
    case "выезд":
      return "выезд";
    case "окончание":
      return "окончание";
    case "начало":
      return "начало";
    default:
      return "";
  }
});

const localValue = computed<Date | null>({
  get: () =>
    props.modelValue ??
    (["дд.мм.гггг", "окончание", "начало"].includes(props.mode) ? null : today),
  set: (newValue) => emit("update:modelValue", newValue),
});

onMounted(() => {
  if (
    !props.modelValue &&
    !["дд.мм.гггг", "окончание", "начало"].includes(props.mode)
  ) {
    emit("update:modelValue", today);
  }
});

const formatDate = (date: Date | null) => {
  if (!date) {
    return "";
  }

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("ru-RU", options);

  return formattedDate;
};

const shouldDisableYearSelect = computed(
  () => !["дд.мм.гггг", "окончание", "начало"].includes(props.mode)
);
</script>

<style scoped lang="scss">
.air-date {
  //   width: 280px;
  @include bp($point_2) {
    width: 100%;
  }
}
:deep(.dp__input) {
  font-size: 12px !important;
  height: 40px;
  border-radius: 7px;
  display: flex;
  align-items: center;
}
</style>
