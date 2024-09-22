<template>
  <div class="profile-side">
    <div class="profile_side__main">
      <ul>
        <li>
          <NuxtLink to="/account">
            <div class="menu-icon"><svg-icon name="settings" /></div>
            <p>Настройки</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/account/order">
            <div class="menu-icon"><svg-icon name="order" /></div>
            <p>Заказы</p>
          </NuxtLink>
        </li>
      </ul>
      <Buttons name="Техподдержка" size="medium" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Buttons from "~/components/ui/Buttons.vue";
</script>

<style scoped lang="scss">
.profile-side {
  width: 260px;

  ul {
    border-radius: 10px;
    box-shadow: 0px 2px 15.4px 0px rgba(0, 0, 0, 0.09);
    background: $white;
    padding: 13px 11px;
    margin-bottom: 15px;
    li {
      &:not(:last-child) {
        margin-bottom: 11px;
      }
      a {
        @include flex-start;
        gap: 15px;
        font-weight: 600;

        padding: 8px 9px;
        &.router-link-active {
          color: $blue;
          background-color: $light;
          border-radius: 8px;
          .menu-icon {
            border-radius: 8px;
            background: rgba(25, 100, 127, 0.19);
          }
        }
      }
    }
  }
}

.menu-icon {
  width: 34px;
  height: 34px;
  @include flex-center;
  padding: 7px;
  background: rgb(239, 241, 244);
  color: $gray;
  border-radius: 8px;
  .icons {
    width: 18px;
    height: 18px;
  }
}
</style>
