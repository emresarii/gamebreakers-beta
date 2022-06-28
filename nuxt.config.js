import tiltJquery from "tilt.js";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "gamebreakers",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vanilla-tilt-vue.js',{ src: '~plugins/vue-carousel.js', ssr: false }, '~plugins/vue-awesome-swiper.js'], 
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  publicRuntimeConfig: {},
  axios: {
    baseURL:"https://api.igdb.com",
    proxy: true,
    https:true
  },
  proxy: {
    "/v4/": {
      target: "https://api.igdb.com",
      changeOrigin: true,
      secure:false
    },
  },
  googleFonts: {
    families: {
      // a simple name
      Roboto: true,
  
      // a name with spaces
      'Josefin+Sans': true,
  
      // specific font weights
      Lato: [100, 300],
    }
  }
};
