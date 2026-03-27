<script>
  import '~/assets/css/global.css';
  import '~/assets/css/typography.css';
</script>

<template>
  <NuxtRouteAnnouncer />
  <a
    href="#main-content"
    class="sr-only">
    Skip to content
  </a>
  <main>
    <Header />
    <Nav />
    <NuxtPage />
    <Footer />
  </main>
</template>
