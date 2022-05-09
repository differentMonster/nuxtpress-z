import {
    resolve
} from 'path'
import {
    createCommonJS
} from 'mlly'
const {
    __dirname
} = createCommonJS(
    import.meta.url)

// moduleOptions could pass config param from nuxt.config.js
export default function registerModules(modulesOptions) {
    // destructuring and making it equal to this
    const {
        nuxt,
        extendRoutes,
        addPlugin
    } = this

    // automactic register all components of the modules
    nuxt.hook('components:dirs', (dirs) => {
        // add ./components dir to the list
        dirs.push({
            path: resolve(__dirname, 'components')
        })
    })

    // add modules routes to global router list
    // file and children is needs nuxt3
    extendRoutes((routes) => {
        routes.unshift({
            name: 'cart',
            path: '/cart',
            file: resolve(__dirname, 'pages/index.vue'),
            children: []
        })
    })

    // register store plugin
    // nuxt3 not yet ready for vuex
    // addPlugin(resolve(__dirname, 'store/registerCustomizeStore.js'))

}