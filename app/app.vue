<script>
  import '~/assets/css/global.css';
  import '~/assets/css/typography.css';

  useSeoMeta({
    title: 'Paulina Sędłak-Jakubowska',
    description:
      'Personal page of Paulina Sędłak-Jakubowska, senior frontend engineer and accessibility expert.',
    ogTitle: 'Paulina Sędłak-Jakubowska',
    ogDescription:
      'Personal page of Paulina Sędłak-Jakubowska, senior frontend engineer and accessibility expert.',
    ogUrl: 'https://paulina.s-j.me/'
  });
  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  });
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLink
    href="#main-content"
    class="sr-only">
    Skip to content
  </NuxtLink>
  <NuxtLoadingIndicator color="#b38a00" />
  <NuxtLayout>
    <Header />
    <NuxtPage :page-key="(route) => route.fullPath" />
    <Footer />
  </NuxtLayout>
</template>
