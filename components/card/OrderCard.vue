<template>
  <div
    class="order-card"
    :class="{ active: status === 'active', inactive: status === 'inactive' }"
  >
    <div class="order_card__head">
      <h3>Детали заказа</h3>
      <div class="order_card__status">
        <div class="active-status" v-if="status === 'active'">Активный</div>
        <div class="inactive-status" v-else>
          <p>НЕ АКТИВНЫЙ</p>
          <svg-icon name="closer" />
        </div>
      </div>
    </div>
    <div class="order_card__body">
      <ul>
        <li>Тип заказа: авиабилет</li>
        <li>Страна: ОАЭ</li>
        <li>Начало заказа: 28 фев, 2024</li>
        <li>Окончание заказа: 5 мар, 2024</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  status: "active" | "inactive";
}>();
</script>

<style scoped lang="scss">
.order-card {
  width: 100%;
  padding: 29px 24px;
  border-radius: 10px;
  &.active {
    box-shadow: 0px 2px 15.4px 0px rgba(0, 0, 0, 0.09);
    background: $white;

    .order_card__body {
      ul {
        li {
          color: $blue;
          &:not(:last-child) {
            margin-bottom: 8px;
          }
        }
      }
    }
  }
  &.inactive {
    box-shadow: 0px 2px 15.4px 0px rgba(0, 0, 0, 0.09);
    background: #4f4e4e;
    color: $white;

    .order_card__body {
      ul {
        li {
          color: #b5b5b5;
          &:not(:last-child) {
            margin-bottom: 8px;
          }
        }
      }
    }
  }
}

.order_card__head {
  @include flex-space;
  margin-bottom: 20px;
  h3 {
    font-size: 28px;
  }
}

.inactive-status {
  @include flex-end;
  color: #af7b7b;
  font-size: 14px;
  font-weight: 600;
  gap: 6px;
  .icons {
    width: 17px;
    height: 17px;
    @include flex-center;
  }
}
.active-status {
  @include flex-end;
  color: #07cb6d;
  font-size: 14px;
  font-weight: 600;
  gap: 6px;
  text-transform: uppercase;
  position: relative;
  &:after {
    content: "";
    width: 16px;
    height: 16px;
    background-color: #07cb6d;
    border-radius: 100px;
  }
}
</style>
