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
          href: 'https://fonts.googleapis.com/css2?family=Gilda+Display&family=Raleway:wght@400..800&display=swap'
        }
      ]
    }
  },
  content: {
    renderer: {
      anchorLinks: false
    }
  },
  image: {
    dir: 'assets/images',
    screens: {
      md: 768,
      lg: 1024,
      xl: 1280
    }
  },
  fonts: {
    defaults: {
      weights: [400, 800],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext']
    },
    families: [
      { name: 'Raleway', provider: 'google' },
      { name: 'Gilda Display', provider: 'google' }
    ]
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
