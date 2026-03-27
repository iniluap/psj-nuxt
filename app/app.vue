<script>
  import '~/assets/css/global.css';
  import '~/assets/css/typography.css';
</script>

<template>
  <NuxtRouteAnnouncer />
  <a
    href="#main-content"
    className="sr-only">
    Skip to content
  </a>
  <main>
    <Header />
    <Nav />
    <MobileNav />
    <NuxtPage />
    <Footer />
  </main>
</template>
