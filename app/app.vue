<script>
  import '~/assets/css/global.css';
  import '~/assets/css/typography.css';
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLink
    href="#main-content"
    class="sr-only">
    Skip to content
  </NuxtLink>
  <NuxtLayout>
    <Header />
    <NuxtPage :page-key="(route) => route.fullPath" />
    <Footer />
  </NuxtLayout>
</template>
