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
        { rel: 'icon', type: 'image/x-icon', href: '/icon.svg' }
      ]
    }
  },
  content: {
    renderer: {
      anchorLinks: false
    }
  },
  icon: {
    clientBundle: {
      icons: [
        'mdi:close',
        'mdi:menu',
        'uil:linkedin',
        'uil:github',
        'fa7-brands:codepen'
      ],
      scan: {
        globExclude: ['content/*.md', 'components/*.vue']
      }
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
      weights: [400, 700, 800],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext']
    },
    families: [
      { name: 'Ysabeau SC', provider: 'google' },
      { name: 'Ysabeau', provider: 'google' }
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
  devtools: { enabled: true, timeline: { enabled: true } },
  a11y: {
    defaultHighlight: true,
    logIssues: true
  },
  compatibilityDate: '2024-04-03'
});
