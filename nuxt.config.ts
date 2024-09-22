export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxtjs/svg-sprite', "@nuxt/icon"],
  plugins: ['~/plugins/datepicker.client.ts', '~/plugins/outside.client.ts'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_fonts.scss";
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_reset.scss";
          `
        }
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Fanbooking',
      meta: [
        { name: 'description', content: 'Описание вашего сайта' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0' },
      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
  build: {
      transpile: ['@vuepic/vue-datepicker']
  }
})