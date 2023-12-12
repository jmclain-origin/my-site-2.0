// https://nuxt.com/docs/api/configuration/nuxt-config
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-primevue', '@nuxtjs/tailwindcss', "@nuxt/content", 'nuxt-icon'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }

})