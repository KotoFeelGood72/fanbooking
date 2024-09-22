<template>
  <div class="profile">
    <div class="container">
      <h1>Личный кабинет пользователя</h1>
      <div class="profile_main">
        <ProfileSide />
        <div class="profile_content">
          <OrderCard status="active" />
          <OrderCard status="inactive" />
          <OrderCard status="inactive" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileSide from "~/components/global/sidebars/ProfileSide.vue";
import OrderCard from "~/components/card/OrderCard.vue";
</script>

<style scoped lang="scss">
.profile {
  padding: 40px 0 80px 0;
  background-color: $light;
  @include bp($point_2) {
    padding: 40px 0 60px 0;
  }
  h1 {
    font-size: 32px;
    margin-bottom: 27px;

    @include bp($point_2) {
      font-size: 20px;
      margin-bottom: 25px;
    }
  }
}
.profile_main {
  @include flex-start;
  align-items: flex-start;
  gap: 37px;

  @include bp($point_2) {
    flex-direction: column;
  }
}

.profile_content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 880px;
}
</style>
