<template>
  <nav class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs_main">
        <ul>
          <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
            <NuxtLink
              v-if="breadcrumb.to && index < breadcrumbs.length - 1"
              :to="breadcrumb.to"
            >
              {{ breadcrumb.text }}
            </NuxtLink>
            <span v-else>{{ breadcrumb.text }}</span>
            <div v-if="index < breadcrumbs.length - 1" class="arrow-bread">
              <img src="../../assets/sprite/svg/arrow-bread.svg" alt="Arrow" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const getBreadcrumbText = (routeName: any) => {
  switch (routeName) {
    case "home":
      return "Главная";
    case "air":
      return "Бронирование авиабилетов";
    case "air-id":
      return `Авиабилет ${route.params.id}`;
    case "air-id-confirm":
      return "Подтверждение бронирования";
    default:
      return routeName.charAt(0).toUpperCase() + routeName.slice(1);
  }
};

const breadcrumbs = computed(() => {
  const pathArray = route.path.split("/").filter((path) => path);
  const breadcrumbs = pathArray.map((path, index) => {
    const matchedRoute = router.resolve({
      path: "/" + pathArray.slice(0, index + 1).join("/"),
    }).matched[0];

    return {
      text:
        getBreadcrumbText(matchedRoute?.name) ||
        path.charAt(0).toUpperCase() + path.slice(1),
      to: "/" + pathArray.slice(0, index + 1).join("/"),
    };
  });
  breadcrumbs.unshift({ text: "Главная", to: "/" });

  return breadcrumbs;
});
</script>

<style scoped lang="scss">
.breadcrumbs {
  padding: 22px 0;
  font-size: 16px;
  background-color: $light;
}
.breadcrumbs ul {
  list-style: none;
  padding: 0;
  display: flex;
}
.breadcrumbs li {
  display: flex;
  align-items: center;
}
.arrow-bread {
  margin: 2px 5px 0 5px;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.breadcrumbs a {
  text-decoration: none;
  color: $blue;
}
.breadcrumbs span {
  color: $gray;
}
</style>
