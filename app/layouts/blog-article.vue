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

  .back-to-blog-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--primary-green);
    transition: var(--transition);

    .iconify {
      position: relative;
      left: 0;
      transition: var(--transition);
    }

    &:hover {
      color: var(--secondary-rose);

      .iconify {
        left: -0.25rem;
      }
    }
  }
</style>
