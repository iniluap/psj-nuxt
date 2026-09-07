<template>
  <div class="card">
    <slot />
    <slot
      name="label"
      mdc-unwrap="p" />
    <slot
      name="date"
      mdc-unwrap="p" />
    <div>
      <slot name="description" />
    </div>
    <slot name="resources" />
  </div>
</template>

<style>
  .card {
    background-color: var(--white);
    border: 2px solid var(--secondary-blue);
    border-radius: 2rem;
    box-shadow: var(--layered-shadow);
    padding: 1rem;
    margin-bottom: 5rem;
    display: grid;
    grid-row: span 5;
    row-gap: 0;
    grid-template-rows: subgrid;

    @media screen and (min-width: 992px) {
      margin-bottom: unset;
    }

    h2,
    h3 {
      margin-bottom: 0;
      font-size: 2.2rem;
    }
  }

  .card-wide {
    grid-column: 1 / span 2;
  }

  .card-label {
    color: var(--secondary-rose);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
  }

  .date {
    color: var(--secondary-blue);
    font-size: 1.2rem;
  }
</style>
