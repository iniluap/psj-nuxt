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
    grid-template-rows:
      [hero-start] min-content
      [content-start] auto
      [footer-start] minmax(6rem, min-content) [page-end];
    row-gap: var(--whitespace-primary);

    @media screen and (min-width: 480px) {
      padding: 10rem 0 0;
    }
  }

  .all-columns {
    grid-column: 2 / 4;
  }

  .blog-hero {
    grid-row: hero-start;
    padding: var(--whitespace-secondary) 0;
    border-top: 1px solid var(--dark-grey);
    border-bottom: 1px solid var(--dark-grey);
  }

  .blog-content {
    grid-row: content-start;
    display: grid;
    grid-template-columns: subgrid;
    gap: var(--whitespace-primary);
  }

  .blog-hero-article,
  .blog-article {
    @media screen and (min-width: 768px) {
      padding: var(--whitespace-secondary);
    }
  }

  .blog-hero-article {
    grid-column: 1 / 3;

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

      &:nth-child(even)::before {
        content: '';
        position: absolute;
        height: calc(100% - 2rem);
        right: -1.5rem;
        border-right: 1px solid var(--dark-grey);
      }
    }
  }

  .blog-article-illustration {
    width: 100%;
    height: 18rem;
    margin-bottom: var(--whitespace-secondary);
    opacity: 0.8;
    background:
      repeating-linear-gradient(
        -45deg,
        var(--light-grey) 0px,
        var(--light-grey) 5px,
        transparent 5px,
        transparent 8px
      ),
      repeating-linear-gradient(
        45deg,
        var(--light-grey) 0px,
        var(--light-grey) 5px,
        transparent 5px,
        transparent 8px
      ),
      linear-gradient(var(--secondary-blue), var(--secondary-blue));

    .blog-hero-article & {
      @media screen and (min-width: 768px) {
        margin-bottom: 0;
      }
    }
  }

  .blog-article-data {
    display: flex;
    flex-direction: column;
    gap: var(--whitespace-secondary);

    * {
      margin: 0;
    }
  }

  .blog-article-description {
    flex-grow: 1;
  }

  .blog-article-footer {
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 480px) {
      flex-direction: row;
      justify-content: space-between;
      gap: var(--whitespace-secondary);
    }
  }
</style>
