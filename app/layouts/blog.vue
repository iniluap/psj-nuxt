<template>
  <main class="blog-layout">
    <slot />
  </main>
</template>

<style>
  .blog-layout {
    padding: 14rem 0 0;
    grid-template-columns:
      minmax(var(--whitespace-secondary), 1fr) minmax(auto, 45rem) minmax(
        auto,
        45rem
      )
      minmax(var(--whitespace-secondary), 1fr);
    row-gap: var(--whitespace-secondary);
    /* Specify minimum height for rows to reduce CLS */
    grid-template-rows:
      [hero-start] min-content
      [content-start] auto
      [footer-start] minmax(6rem, min-content) [page-end];
    gap: var(--whitespace-secondary);

    @media screen and (min-width: 480px) {
      padding: 10rem 0 0;
    }
  }

  .all-columns {
    grid-column: 2 / 4;
  }

  .blog-hero {
    grid-row: hero-start;
  }

  .blog-content {
    grid-row: content-start;
    display: grid;
    grid-template-columns: subgrid;
    row-gap: var(--whitespace-secondary);
  }

  .blog-hero-article {
    grid-column: 1 / 3;
  }
</style>
