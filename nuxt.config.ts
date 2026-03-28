// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Paulina Sędłak-Jakubowska',
      meta: [
        {
          name: 'description',
          content:
            'Personal page of Paulina Sędłak-Jakubowska, senior frontend engineer and accessibility expert.'
        }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Shadows+Into+Light&display=swap'
        }
      ]
    }
  },
  content: {
    renderer: {
      anchorLinks: false
    }
  },
  sourcemap: {
    server: true,
    client: true
  },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/a11y'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03'
});
