import { defineStore } from "pinia";

interface ModalsState {
  login: boolean;
  sign: boolean;
  resets: boolean;
  news: boolean;
}

export const useModalStore = defineStore("modal", {
  state: (): { modals: ModalsState } => ({
    modals: {
      login: false,
      resets: false,
      news: false,
      sign: false,
    },
  }),
  actions: {
    openModal(modalName: keyof ModalsState) {
      this.modals[modalName] = !this.modals[modalName];
    },
    closeModal(modalName: keyof ModalsState): void {
      this.modals[modalName] = false;
    },
    closeAllModals() {
      Object.keys(this.modals).forEach((modalName) => {
        this.modals[modalName as keyof ModalsState] = false;
      });
    },
  },
});

export const useModalStoreRefs = () => storeToRefs(useModalStore());
