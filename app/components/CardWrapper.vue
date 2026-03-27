<template>
  <section>
    <slot />
  </section>
</template>

<style scoped>
  section {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
</style>
