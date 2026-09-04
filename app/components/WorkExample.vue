<template>
  <section class="work-example-section">
    <slot></slot>
  </section>
</template>

<style>
  .work-example-section {
    margin-top: 6rem;

    @media screen and (min-width: 992px) {
      display: grid;
      grid-template-columns: 24rem 1fr;
      align-items: start;
    }

    h2 {
      padding-right: 1rem;
      font-size: 2.5rem;
      align-self: center;
    }

    ul {
      margin-top: 3rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      list-style: none;

      @media screen and (min-width: 992px) {
        margin: 0;
        margin-top: 0.5rem;
        grid-area: 2 / 2;
      }
    }

    li {
      padding: 0.5rem 1.5rem;
      background-color: var(--secondary-blue);
      box-shadow: var(--layered-shadow);
      border-radius: 2rem;
      color: var(--white);
      display: flex;
      align-items: center;
      gap: 0.75rem;

      svg {
        margin-right: 1rem;
        color: var(--light-grey);
      }
    }

    p {
      padding-left: var(--whitespace-secondary);
      border-left: 2px solid var(--tertiary-yellow);
    }
  }
</style>
