<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
  .card {
    background-color: var(--white);
    border: 2px solid var(--primary-green);
    box-shadow: var(--layered-shadow);
    padding: 1rem;
    margin-bottom: 5rem;

    @media screen and (min-width: 768px) {
      margin-bottom: unset;
    }
  }

  .card-wide {
    grid-column: 1 / span 2;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 2.2rem;
  }

  h4 {
    color: var(--secondary-rose);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
  }

  .date {
    color: var(--secondary-blue);
    font-size: 1.2rem;
  }
</style>
