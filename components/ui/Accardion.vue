<template>
  <div :class="['accordion', { 'is-open': isOpen }]">
    <div class="accordion-head" @click="toggle">
      <p>{{ title }}</p>
      <div class="accordion-head__action">
        <slot name="reset" />
        <div class="accordion-toggle__icon">
          <img src="../../assets/sprite/svg/arrow.svg" alt="" />
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="accordion-content" v-if="isOpen">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title: string;
}>();

const isOpen = ref(true);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const arrowIcon = computed(() => (isOpen.value ? "arrow-up" : "arrow-down"));
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.accordion {
  &.is-open {
    .accordion-toggle__icon {
      transform: rotate(180deg);
    }
  }

  .accordion-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 10px;
    cursor: pointer;
    padding-bottom: 8px;
    // background-color: #f9f9f9;

    p {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
    }
  }

  .accordion-content {
    padding: 10px 0;
    // display: none;
  }

  .accordion-content[style*="display: block;"] {
    display: block;
  }

  .accordion-toggle__icon {
    transition: transform 0.3s;
  }
}
.accordion-head {
  border-bottom: 1px dashed $l-gray;
}
.accordion-head__action {
  @include flex-end;
}

.accordion-toggle__icon {
  @include flex-center;
  width: 20px;
  height: 20px;
  margin-top: 2px;
  user-select: none;
  margin-right: -8px;
}
</style>
