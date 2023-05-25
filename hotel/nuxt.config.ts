// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/main.css',
        '~/assets/css/style.css'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
                {
                    href:
                        "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
                    rel: "stylesheet",
                },
            ],
        },
    }
})
