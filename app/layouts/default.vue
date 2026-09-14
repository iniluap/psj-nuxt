<template>
  <main class="default-layout">
    <slot />
  </main>
</template>

<style scoped>
  .default-layout {
    padding: 14rem 0 0;
    /* Specify minimum height for rows to reduce CLS */
    grid-template-rows:
      [content-start] auto
      [footer-start] minmax(6rem, min-content) [page-end];

    @media screen and (min-width: 480px) {
      padding: 10rem 0 0;
    }
  }
</style>
