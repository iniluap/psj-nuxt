<template>
  <main class="default-layout">
    <slot />
  </main>
</template>

<style scoped>
  .default-layout {
    /* Specify minimum height for rows to reduce CLS */
    grid-template-rows:
      [content-start] min-content
      [footer-start] minmax(6rem, min-content) [page-end];
  }
</style>
