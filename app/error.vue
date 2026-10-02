<script setup lang="ts">
  import type { NuxtError } from '#app';

  const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <main>
    <div class="content-container">
      <h1>{{ error.status }}</h1>
      <p>{{ error.message }}</p>
      <NuxtLink
        to="/"
        class="block-link error-page-link">
        <Icon
          name="mdi:arrow-left-circle"
          aria-hidden="true" />
        Go back home
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
  main {
    grid-template-rows: 4rem auto 4rem;
  }

  .content-container {
    grid-row-start: 2;
  }

  h1 {
    font-size: 10rem;
  }

  .error-page-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
  }
</style>
