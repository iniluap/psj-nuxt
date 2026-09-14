<template>
  <main class="home-layout">
    <slot />
  </main>
</template>

<style scoped>
  .home-layout {
    padding: 10rem 0 0;
    /* Specify minimum height for rows to reduce CLS */
    grid-template-rows:
      [header-start] minmax(44rem, min-content)
      [content-start] auto
      [footer-start] minmax(6rem, min-content) [page-end];
  }
</style>
