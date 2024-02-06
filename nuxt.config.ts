import app from "./config/app";
import css from "./config/css";
import devtools from "./config/devtools";
import experimental from "./config/experimental";
import modules from "./config/modules";
import nitro from "./config/nitro";
import postcss from "./config/postcss";
import routeRules from "./config/routeRoules";
import runtimeConfig from "./config/runtimeConfig";
import storyblok from "./config/storyblok";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app,
  css,
  devtools,
  experimental,
  modules,
  nitro,
  postcss,
  routeRules,
  runtimeConfig,
  storyblok
});
