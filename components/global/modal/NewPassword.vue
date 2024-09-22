<template>
  <div class="new">
    <div class="modal_bg" @click="closeModal('news')"></div>
    <div class="new_main">
      <div class="close_modal" @click="closeModal('news')">
        <img src="../../../assets/sprite/svg/closer.svg" alt="" />
      </div>
      <div class="new_head">
        <h3>Восстановление пароля</h3>
        <p>Придумайте новый пароль</p>
      </div>
      <div class="new_form">
        <Inputs placeholder="Новый пароль" type="password" />
        <Inputs placeholder="Подтвердите пароль" type="password" />
        <Buttons name="Сохранить" @click="pushAccount" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Inputs from "~/components/ui/Inputs.vue";
import Buttons from "~/components/ui/Buttons.vue";
import Checkboxes from "~/components/ui/Checkboxes.vue";
import { useModalStore } from "~/store/useModalStore";
import { useRouter } from "vue-router";

const agreement = ref<boolean>();

const { closeModal, openModal } = useModalStore();
const router = useRouter();

function pushAccount() {
  closeModal("news");
  router.push("/account");
}
</script>

<style scoped lang="scss">
.new {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include flex-center;
  z-index: 101;
  @include bp($point_2) {
    padding: 20px;
  }
}

.modal_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $black;
  opacity: 0.4;
  backdrop-filter: blur(20px);
}

.new_main {
  position: relative;
  background-color: $white;
  max-width: 484px;
  border-radius: 13px;
  padding: 49px 62px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include bp($point_2) {
    max-width: 100%;
    padding: 30px 20px;
  }

  .back {
    max-width: 263px;
    margin: 0 auto;
    :deep(button) {
      color: $blue;
      background-color: transparent;
      border: 1px solid $blue;
      &:hover {
        background-color: $blue;
        color: $white;
      }
    }
  }
}

.new_form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

.new_head {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 28px;
  }
  p {
    color: $gray;
  }
}

.close_modal {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  @include flex-center;
  cursor: pointer;
}

.form_agreement {
  padding: 10px 0;
}
</style>
