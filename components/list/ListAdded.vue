<template>
  <div class="list_added">
    <p>{{ title }}</p>
    <div
      v-for="(row, rowIndex) in inputs"
      :key="'row-' + rowIndex"
      class="list-row"
    >
      <div class="row">
        <div
          class="col"
          v-for="(item, colIndex) in row"
          :key="'input-item-' + rowIndex + '-' + colIndex"
        >
          <p>{{ item.label }}</p>
          <Inputs v-model="item.val" />
        </div>
      </div>
    </div>
    <div class="added" @click="addRow">
      <img src="../../assets/sprite/svg/plus.svg" alt="" />
      <p>Добавить {{ name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Inputs from "../ui/Inputs.vue";
import { defineProps, ref } from "vue";

const props = defineProps<{
  title: string;
  inputs: any;
  name: string;
  type: string;
}>();

const inputs = ref(props.inputs);

function addRow() {
  if (props.type === "adult") {
    inputs.value.push([
      { val: "", label: "Фамилия" },
      { val: "", label: "Имя" },
    ]);
  } else if (props.type === "child") {
    inputs.value.push([
      { val: "", label: "Фамилия" },
      { val: "", label: "Имя" },
      { val: "", label: "Возраст" },
    ]);
  }
}
</script>

<style scoped lang="scss">
.list_added {
  & > p {
    font-weight: 600;
    margin-bottom: 10px;
  }
}

.row {
  @include flex-start;
  gap: 10px;

  @include bp($point_2) {
    flex-direction: column;
  }
}

.col {
  @include bp($point_2) {
    width: 100%;
  }
  p {
    margin-bottom: 4px;
  }
}

.list-row {
  margin-bottom: 10px;
}

.added {
  @include flex-start;
  gap: 5px;
  color: $blue;
  cursor: pointer;
  img {
    width: 13px;
    height: 13px;
    @include flex-center;
  }
}
</style>
