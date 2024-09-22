<template>
  <div class="confirm">
    <div class="container">
      <div class="confirm_main">
        <div class="confirm_head">
          <h1>Подтвердите бронирование отеля</h1>
          <p>Проверьте введенные данные</p>
        </div>
        <ul class="confirm_info">
          <li>
            <h3>Детали брони</h3>
            <ul>
              <li>Место пребывания: ОАЭ, Дубай</li>
              <li>Дата пребывания: с 28-02-2024 по 01-03-2024</li>
              <li>Дней: 3</li>
              <li>Количество гостей: 2 чел.</li>
            </ul>
          </li>
          <li>
            <h3>Данные пассажиров</h3>
            <ul class="transfer-list">
              <li>
                <ul>
                  <li>
                    <p>1 пассажир</p>
                    <span>Смирнов Артем</span>
                  </li>
                  <li>
                    <p>дата рождения</p>
                    <span>19.06.1993</span>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p>2 пассажир</p>
                    <span>Смирнов Артем</span>
                  </li>
                  <li>
                    <p>дата рождения</p>
                    <span>19.06.1993</span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div class="confirm_note">
          При нахождении опечатки в данных вернитесь на предыдущую страницу для
          исправления
        </div>
        <div class="confirm_btn">
          <Buttons name="Оплатить" class="custom-padding-xxl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Buttons from "~/components/ui/Buttons.vue";
</script>

<style scoped lang="scss">
.confirm {
  background-color: $light;
  padding-bottom: 269px;
  padding-top: 20px;

  @include bp($point_2) {
    padding-bottom: 60px;
    padding-top: 0;
  }
}

.confirm_info,
.confirm_note {
  margin-bottom: 20px;
}

.confirm_head {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 27px;

  @include bp($point_2) {
    gap: 10px;
  }
  h1 {
    font-size: 32px;
    font-weight: 600;
    @include bp($point_2) {
      font-size: 20px;
    }
  }
  p {
    font-size: 24px;
    @include bp($point_2) {
      font-size: 16px;
    }
  }
}

.confirm_info {
  @include flex-space;
  gap: 24px;

  @include bp($point_2) {
    flex-direction: column;
    gap: 10px;
  }

  & > li {
    background-color: $white;
    flex-grow: 1;
    border-radius: 10px;
    box-shadow: 0px 2px 15.4px 0px rgba(0, 0, 0, 0.09);
    padding: 24px;
    min-height: 244px;
    @include bp($point_2) {
      width: 100%;
      min-height: auto;
      padding: 10px 15px;
    }

    h3 {
      font-size: 32px;
      font-weight: 700;
      @include bp($point_2) {
        font-size: 20px;
      }
    }
    &:first-child {
      max-width: 480px;
      @include bp($point_2) {
        max-width: 100%;
      }

      ul {
        li {
          font-size: 14px;
          color: $m-gray;
          font-weight: 500;
          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }
      }
      h3 {
        margin-bottom: 39px;
        @include bp($point_2) {
          margin-bottom: 20px;
        }
      }
    }
    &:nth-child(2) {
      h3 {
        margin-bottom: 20px;
      }
    }
  }
}

.transfer-list {
  display: flex;
  flex-direction: column;
  gap: 26px;
  & > li {
    @include flex-start;
    li {
      @include flex-start;
      font-size: 14px;
      gap: 10px;
      &:not(:last-child) {
        margin-bottom: 11px;
      }
      p {
        color: $m-gray;
        min-width: 110px;
      }
      span {
        font-weight: 500;
      }
    }
  }
}

.confirm_btn {
  display: inline-flex;
  @include bp($point_2) {
    width: 100%;
  }
}
</style>
