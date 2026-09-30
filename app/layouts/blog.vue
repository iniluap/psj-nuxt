<template>
  <main class="blog-layout">
    <slot />
  </main>
</template>

<style>
  .blog-layout {
    padding: 14rem 0 0;
    grid-template-columns:
      minmax(var(--whitespace-secondary), 1fr) minmax(9rem, 48rem) minmax(
        9rem,
        48rem
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
    margin-bottom: var(--whitespace-primary);
    padding: var(--whitespace-secondary) 0;
    border-top: 1px solid var(--dark-grey);
    border-bottom: 1px solid var(--dark-grey);

    h1 {
      font-variant: all-petite-caps;
      font-weight: 800;
    }
  }

  .blog-content {
    grid-row: content-start;
    display: grid;
    grid-template-columns: subgrid;
    gap: var(--whitespace-primary);
  }

  .blog-hero-article {
    grid-column: 1 / 3;
    border-bottom: 1px solid var(--dark-grey);
  }

  .blog-article {
    padding: var(--whitespace-secondary);
    position: relative;

    &:nth-child(even)::before {
      content: '';
      position: absolute;
      height: 100%;
      right: -1.5rem;
      border-right: 1px solid var(--dark-grey);
    }
  }

  .blog-article-footer {
    display: flex;
    gap: var(--whitespace-secondary);
    justify-content: space-between;
    font-size: 1.4rem;
  }
</style>
