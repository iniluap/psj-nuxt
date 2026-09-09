<script setup lang="ts">
  definePageMeta({
    layout: 'home'
  });

  const { data: page } = await useAsyncData('page-index', () => {
    return queryCollection('content').path('/').first();
  });

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    });
  }
</script>

<template>
  <HeroSection class="content-container" />
  <ContentRenderer
    v-if="page"
    :value="page"
    class="content-container"
    id="main-content" />
</template>
