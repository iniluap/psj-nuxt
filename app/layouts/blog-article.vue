<template>
  <main class="blog-article-layout">
    <slot />
  </main>
</template>

<style>
  .blog-article-layout {
    /* Specify minimum height for rows to reduce CLS */
    grid-template-rows:
      [hero-start] minmax(min-content, 40vh)
      [content-start] auto
      [footer-start] minmax(6rem, min-content) [page-end];
  }

  .article-hero-section {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    align-self: stretch;
    background-color: var(--light-grey);
  }

  .article-hero-section-content {
    margin: 0;
    margin-top: 7rem;
    padding: 2rem;
    background-color: var(--light-grey);
    display: grid;
    grid-template-columns: subgrid;
    grid-column-start: 2;
    align-self: center;
    row-gap: var(--whitespace-secondary);

    @media screen and (min-width: 480px) {
      padding: 4rem;
    }
  }
</style>
