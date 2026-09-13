<script setup lang="ts">
  import { withoutTrailingSlash } from 'ufo';

  definePageMeta({
    layout: 'default'
  });

  const route = useRoute();

  const { data: page } = await useAsyncData('page-' + route.path, () => {
    const cleanPath = withoutTrailingSlash(route.path);

    return queryCollection('content').path(cleanPath).first();
  });

  if (import.meta.client) {
    console.log('Current route.path:', route.path);
    console.log('Query result:', page.value);
  }

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    });
  }
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    class="content-container"
    id="main-content" />
</template>
