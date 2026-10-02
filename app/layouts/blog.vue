<template>
  <main class="blog-layout">
    <slot />
  </main>
</template>

<style>
  .blog-layout {
    padding: 14rem 0 0;
    grid-template-columns:
      minmax(var(--whitespace-secondary), 1fr) minmax(9rem, 48rem)
      minmax(9rem, 48rem)
      minmax(var(--whitespace-secondary), 1fr);
    grid-template-rows:
      [hero-start] min-content
      [content-start] auto
      [footer-start] minmax(6rem, min-content) [page-end];
    row-gap: var(--whitespace-primary);

    @media screen and (min-width: 480px) {
      padding: 10rem 0 0;
    }
  }

  .blog-hero {
    grid-column: 2 / 4;
    grid-row: hero-start;
    padding: var(--whitespace-secondary) 0;
    border-top: 1px solid var(--dark-grey);
    border-bottom: 1px solid var(--dark-grey);
  }

  .blog-content {
    grid-column: 2 / 4;
    grid-row: content-start;
    display: grid;
    grid-template-columns: subgrid;
    gap: var(--whitespace-primary);
  }

  .blog-hero-article,
  .blog-article {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: -1.5rem;
      border-bottom: 1px solid var(--dark-grey);
    }

    @media screen and (min-width: 768px) {
      padding: var(--whitespace-secondary);
    }
  }

  .blog-hero-article {
    grid-column: 1 / 3;
    /* making up for gap and padding on two column layout below */
    column-gap: calc(var(--whitespace-primary) * 2);

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: subgrid;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        bottom: -1.5rem;
        border-bottom: 1px solid var(--dark-grey);
      }
    }
  }

  .blog-article {
    grid-column: 1 / 3;

    @media screen and (min-width: 768px) {
      grid-column: initial;
      position: relative;

      &::before {
        /* reset bottom lines below 768px */
        width: 0;
        bottom: 0;
      }

      &:nth-child(even)::before {
        content: '';
        position: absolute;
        height: calc(100% - 2rem);
        right: -1.5rem;
        border-right: 1px solid var(--dark-grey);
      }
    }
  }
</style>
