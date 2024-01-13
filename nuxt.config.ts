// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxt/content"],
  devtools: { enabled: true },
  ui: {
    global: true,
  },
});
