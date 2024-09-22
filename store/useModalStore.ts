import { defineStore } from 'pinia';

interface ModalsState {
  login: boolean;
  sign: boolean;
}

export const useModalStore = defineStore('modal', {
  state: (): { modals: ModalsState } => ({
    modals: {
      login: false,
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
  },
});


export const useModalStoreRefs = () => storeToRefs(useModalStore());
