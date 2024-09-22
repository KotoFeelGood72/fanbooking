<template>
  <div class="block_action__w">
    <h3>Выбрать и оплатить российской картой полисы страховых компаний Евросоюза</h3>
    <div class="block_action">
      <div class="block_action__img">
        <img src="../../public/img/action.png" alt="" />
      </div>
      <div class="block_action__content">
        <ul>
          <li v-for="(item, i) in list" :key="'list-item-' + i">{{ item }}</li>
        </ul>
        <div class="blockAction__btn">
          <Buttons name="Получить страховку" size="medium" class="custom-padding" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Buttons from "../ui/Buttons.vue";
const list = ref<string[]>([
  "Требуются для въезда в страны ЕС, принимаются всеми консульствами",
  "Студенческие, au-pair, 1er Euro, internship, postdoc страховые полисы.",
  "Могут быть запрошены при прохождении пограничного контроля",
  "Полисы для визы Германии, Испании, Словении, Мальты, Франции и всех стран Шенгена – только от компаний из Евросоюза с нашим сервисом",
  "Долгосрочные и годовые полисы для «длинных» виз",
  "Без франшизы",
]);
</script>

<style scoped lang="scss">
.block_action__w {
  padding: 100px 0;
  h3 {
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 130%;
    max-width: 960px;
    margin: 0 auto 50px auto;
  }
}

.block_action {
  position: relative;
  @include flex-end;
}

.block_action__img {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 1035px;
  max-height: 420px;
  border-radius: 20px;
  overflow: hidden;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.block_action__content {
  background-color: $light;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 64px 42px;
  margin-top: 147px;
  max-width: 1392px;
  width: 100%;
  ul {
    max-width: 964px;
    margin-bottom: 44px;
    @include flex-start;
    flex-wrap: wrap;
    gap: 32px;

    li {
      width: 47%;
      position: relative;
      padding-left: 29px;
      font-size: 20px;
      color: $gray;
      &:before {
        position: absolute;
        top: 3px;
        left: 0;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background-color: $blue;
        content: "";
      }
    }
  }
}

.blockAction__btn {
  display: inline-flex;
}
</style>
