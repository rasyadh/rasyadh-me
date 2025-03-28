// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Rasyadh Abdul Aziz",
      meta: [
        {
          name: "description",
          content:
            "Experienced Software Engineer specializing in Flutter and iOS development, with a focus on scalable architecture and developer tooling.",
        },
        { name: "author", content: "Rasyadh Abdul Aziz" },
        { name: "creator", content: "Rasyadh Abdul Aziz" },
        {
          name: "keywords",
          content:
            "software engineer,mobile development,web development,technical consulting,iOS,Swift,Flutter,Nuxt.js,VueJs",
        },
        {
          property: "og:title",
          content: "Rasyadh Abdul Aziz - Software Engineer",
        },
        {
          property: "og:description",
          content:
            "Experienced Software Engineer specializing in Flutter and iOS development, with a focus on scalable architecture and developer tooling.",
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/og-image.png" },
        {
          property: "og:url",
          content: "https://rasyadh.me",
        },
        {
          property: "og:site:name",
          content: "Rasyadh Abdul Aziz Portofolio",
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Rasyadh Abdul Aziz - Software Engineer",
        },
        {
          name: "twitter:description",
          content:
            "Experienced Software Engineer specializing in Flutter and iOS development, with a focus on scalable architecture and developer tooling.",
        },
        {
          name: "twitter:creator",
          content: "@rasyadh_",
        },
        { name: "twitter:image", content: "/og-image.png" },
      ],
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
    "@vueuse/motion/nuxt",
  ],
  fonts: {
    families: [
      {
        name: "Plus Jakarta Sans",
        provider: "google",
        global: true,
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
