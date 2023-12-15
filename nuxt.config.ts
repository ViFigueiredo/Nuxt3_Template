export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [
    "~/components",
    {
      path: "~/shared",
      prefix: "",
    },
  ],
  alias: {
    css: "/assets/css",
  },
  app: {
    baseURL: process.env.BASE_URL,
  },
  css: ["@/assets/css/main.css", "@/assets/css/tailwind.css"],
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./i18n",
      },
    ],
    [
      "@nuxtjs/eslint-module",
      {
        /* module options */
      },
    ],
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  ui: {
    global: true,
    icons: [],
  },
});
