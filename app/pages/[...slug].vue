<script setup lang="ts">
  import { withoutTrailingSlash } from 'ufo';

  const route = useRoute();
  const cleanPath = withoutTrailingSlash(route.path);

  const { data: page } = await useAsyncData('page-' + cleanPath, () => {
    return queryCollection('content').path(cleanPath).first();
  });

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    });
  }

  definePageMeta({
    layout: 'default'
  });
  useHead({
    title: `${page.value.title} page`
  });
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    class="content-container"
    id="main-content" />
</template>
