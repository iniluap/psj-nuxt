<script setup lang="ts">
  const route = useRoute();

  const { data: page } = await useAsyncData('page-' + route.path, () => {
    return queryCollection('content').path(route.path).first();
  });

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    });
  }

  const isIndexPage = () => page.value?.id === 'content/index.md';
</script>

<template>
  <Header v-if="isIndexPage()" />
  <ContentRenderer
    v-if="page"
    :value="page"
    id="main-content" />
</template>
