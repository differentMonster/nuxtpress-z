import {
    defineNuxtConfig
} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    plugins: [
        '@/modules/cart/plugins/setCart.js',
    ],
    modules: [
        '@/modules/cart',
        '@/modules/shop',
        '@/modules/user',
    ],
    css: [
        "@/assets/style/scss/main.scss"
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/style/scss/abstracts/variables.scss";',
                },
            },
        },
    },
})