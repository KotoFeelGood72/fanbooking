<template>
  <div class="main">
    <Header />
    <Breadcrumbs v-if="isBreadcrumbs" />
    <slot />
    <ModalLogin v-if="modals.login" />
    <ModalSign v-if="modals.sign" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/global/Header.vue";
import Footer from "~/components/global/Footer.vue";
import Breadcrumbs from "~/components/ui/Breadcrumbs.vue";
import ModalLogin from "~/components/global/modal/ModalLogin.vue";
import ModalSign from "~/components/global/modal/ModalSign.vue";

import { useModalStore, useModalStoreRefs } from "~/store/useModalStore";
import { useRoute } from "vue-router";

const { modals } = useModalStoreRefs();
const route = useRoute();

const notBreadcrumbsPages = ["/", "/account", "/account/order", "/agreement", "/terms"];

const isBreadcrumbs = computed(() => {
  return !notBreadcrumbsPages.includes(route.path);
});
</script>

<style lang="scss">
.main {
  max-width: 1920px;
  margin: 0 auto;
}
</style>
