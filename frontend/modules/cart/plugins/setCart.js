import {
    defineNuxtPlugin
} from "#app";
import {
    CartAlert
} from "@/modules/cart/classes/getCart.js";

export default defineNuxtPlugin((nuxtApp) => {
    const initCartAlert = new CartAlert()
    nuxtApp.provide('cartalert', initCartAlert)
})