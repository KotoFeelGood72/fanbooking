<template>
  <div class="sign">
    <div class="modal_bg" @click="closeModal('sign')"></div>
    <div class="sign_main">
      <div class="close_modal" @click="closeModal('sign')">
        <img src="../../../assets/sprite/svg/closer.svg" alt="" />
      </div>
      <div class="sign_head">
        <h3>Регистрация</h3>
        <p>Заполните все поля для регистрации</p>
      </div>
      <div class="sign_form">
        <Inputs placeholder="Ваше имя" />
        <Inputs placeholder="Ваша фамилия" />
        <Inputs placeholder="+ 7 (__) ___-___-___" type="tel" />
        <Inputs placeholder="E-mail" type="email" />
        <div class="form_agreement">
          <Checkboxes
            label="Согласен на обработку персональных данных"
            v-model="agreement"
          />
        </div>
        <Buttons name="Зарегистрироваться" @click="pushAccount()" />
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

const { closeModal } = useModalStore();
const router = useRouter();

function pushAccount() {
  closeModal("sign");
  router.push("/account");
}
</script>

<style scoped lang="scss">
.sign {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include flex-center;
  z-index: 99;
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

.sign_main {
  position: relative;
  background-color: $white;
  max-width: 484px;
  border-radius: 13px;
  padding: 49px 62px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sign_form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

.sign_head {
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
