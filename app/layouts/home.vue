<template>
  <main class="home-layout">
    <slot />
  </main>
</template>

<style scoped>
  .home-layout {
    /* Specify minimum height for rows to reduce CLS */
    grid-template-rows:
      [header-start] minmax(44rem, min-content)
      [content-start] min-content
      [footer-start] minmax(6rem, min-content) [page-end];
  }
</style>
