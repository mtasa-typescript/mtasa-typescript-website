export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'mtasa-typescript.github.io',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Roboto: true,
                    Poppins: [400, 500, 600, 700],
                    PlayfairDisplay: [400, 700],
                    FiraCode: true,
                },
            },
        ],
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [['vue-scrollto/nuxt', { duration: 500 }]],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            plugins: [
                [
                    '@babel/plugin-proposal-private-property-in-object',
                    { loose: true },
                ],
            ],
        },
    },

    server: {
        host: '0',
    },
};
