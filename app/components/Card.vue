<template>
  <div
    class="card"
    :class="{ 'card-extended': $slots.resources }">
    <slot />
    <div>
      <slot
        name="label"
        mdc-unwrap="p" />
      <slot
        name="date"
        mdc-unwrap="p" />
    </div>
    <div>
      <slot name="description" />
    </div>
    <slot name="resources" />
  </div>
</template>

<style>
  .card {
    background-color: var(--white);
    border-left: 1px solid var(--tertiary-yellow);
    padding: 2rem;
    margin-bottom: 5rem;
    display: grid;
    grid-row: span 3;
    gap: 1rem;
    grid-template-rows: subgrid;

    @media screen and (min-width: 992px) {
      margin-bottom: unset;
    }

    h2,
    h3 {
      font-size: 2.2rem;
    }
  }

  .card :is(h2, h3, p, ul) {
    margin-bottom: 0;
  }

  .card-extended {
    grid-row: span 4;
  }

  .card-wide {
    grid-column: 1 / span 2;
  }

  .card-label,
  .date {
    display: block;
  }

  .card-label {
    color: var(--secondary-rose);
    font-family: 'Ysabeau', sans-serif;
    font-size: 1.4rem;
  }

  .date {
    color: var(--secondary-blue);
    font-size: 1.4rem;
  }
</style>
