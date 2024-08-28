import { defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  async setup(_options, nuxt) {
    nuxt.options.image = nuxt.options.image
  },
});